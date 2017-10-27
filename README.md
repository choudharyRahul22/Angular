Error That You Might Get:
-------------------------
Depending on the CLI version you're using, you might also need to add the FormsModule  to the imports[]  array in your app.module.ts  file (add it if you don't see it there). You might not fully understand what that all means but we're going to cover that in this course, no worries.

If you don't have FormsModule  in imports[]  in AppModule , please do add it and also add an import at the top of that file: import { FormsModule } from '@angular/forms'; 

Here are some common issues & solutions:
----------------------------------------
Creation of a new project takes forever (longer than 3 minutes)
That happens on Windows from time to time => Try running the command line as administrator

You get an EADDR error (Address already in use)
You might already have another ng serve process running - make sure to quit that or use ng serve --port ANOTHERPORT  to serve your project on a new port

My changes are not reflected in the browser (App is not compiling)
Check if the window running ng serve  displays an error. If that's not the case, make sure you're using the latest CLI version and try restarting your CLI

Angular CLI:
------------
Command Line Interface for Angular
Instead of importing angular as a script in index.html we are using CLI,
because in angular4 we write typescript which will compile to javascript and to do this manually(compile typescript to javascript every time) for a large project is a pain.

CLI need nodejs which manages packages and will give us a developement server on which we can host our application.

Once you install NodeJs run below command to install Angular CLI:
-----------------------------------------------------------------
"npm install -g @angular/cli"

npm : node package manager
-g : globally

To Remove Angular CLI Follow Below Commands:
--------------------------------------------
npm uninstall -g angular-cli
npm uninstall -g @angular/cli
npm cache clean
npm install -g @angular/cli@latest

To create new angular project:
------------------------------
"ng new project-name"

To run project:
---------------
ng serve will compile the typescript to javascript and run on server.

"ng serve" 

http://localhost:4200/

Folder structure of angular project:
------------------------------------
e2e : for testing
outside dir : for configuration
src : actual code and configuration
src/assets : static data like images
src/environment : environment variable like production/devlopment

Inside app we have:
-------------------
app.component.css
app.component.html
app.component.spec.ts : spec for testing and ts for typescript 
app.component.ts
app.module.ts

As ng serve is ruuning, if we change anything and save it will recompile typescript to javascript and run on server with changes.

In newer version we need to add below:
--------------------------------------
In app.module.ts 
1.import {FormsModule} from "@angular/forms";
2.imports: [
    BrowserModule,
    FormsModule
  ],

Our first code:
---------------
app.component.html:
<input type="text" [(ngModel)]="name">
<br>
<h3>{{name}}</h3>

app.component.ts:
export class AppComponent {
  name = '';
}

Above code will work only if we add FormsModule inside app.module.ts

Typescript:
-----------
Superset of javascript, strongly typed (type are defined and checked at compile time not at runtime) adding classes , interfaces.....

typescript compile to javascript which is done by CLI and finally javascript runs in browser.

Add Bootstrap to Angular:
-------------------------
1. Add link in index.html file.
2. Install using npm
   a. Go to dir where you project is
   b. run "npm install --save bootstrap"
   c. Go to angular-cli.json , styles which refer to style.css which is global style , now add below 
   "styles": [
        "../node_modules/bootstrap/dist/css/bootstrap.css",
        "styles.css"
      ],
   d. Stop ng-serve (ctrl + c) and restart it.
   e. To check weather bootstrap is added to our project we will see the html in developer tool under Elements , in head it will now have link to bootstrap

How Angular is Bootstraped (Started):
-------------------------------------
It loads the index.html which has <app-root></app-root> 
if we look at app.component.ts we have a selector:
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
above selector is used in index.html to show landing page or root page
using above selector (app-root) it will look for template to show which it finds in our case is app.component.html that's what we see.

We cant see the javascript link in our index.html and even bootstrap, once the ng serve see changes and compile it will create a bundle of all javascript and css file and place it inside index.html we can see it by view the source page.

First code which is executed is under main.ts:
----------------------------------------------
import { AppModule } from './app/app.module';
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

bootstrapModule : Module which is loaded first to start angular ie: AppModule.
Note: In import we see './app/app.module' we didnt write app.module.ts here.

Now we see the app.module.ts which has:
bootstrap: [AppComponent]
reference to AppComponent which has a selector <app-root> and html and css.

In short:
main.ts ----->app.module.ts---->app.component.ts(which has all info).

Components:
-----------
Components are directives with a template and buisness logic which can be used anywhere and any number of times.

Note: in angular-1 we have directives 
// Custom Directive : searchResult will be normalize in html as <search-result>
myApp.directive('searchResult', function(){
    
    return{
        
        // A: Attribute E: Element C:Class M: Comment , What we specify in restrict will show in DOM , rest will be ignored.
        // restrict : 'EA' is default property
        restrict : 'AECM',
        
        // html that will be shown
        templateUrl: 'directive/searchResult.html',
        
        // this will remove the directive (<serach-result>) from the DOM if true and will conatin only template in DOM
        // if false template will come under <search-result> element. 
        replace : true,
        
        // This is the model for the directive view
        // Now the default property ie: child can access the parent scope will be restricted
        scope: {
            
            // @ for text
            //personNameText : '@personName' this is same as below, for below it will think that the personName here is same what we used as attribute on directive.
            
            //personNameText : '@personName', this and below are same
            
            // = for object its 2 way databinding if we change this object inside directive it will get change for parent scope
            personObject : '=',
            
            
            // & for function
            personObjectFunction : '&',
                
            
        },
        
        // compile runs once for directive which is repeated in loop for 3 times
        compile: function(elem,attr){
            console.log('Compiling....');
            // If you uncomment below than it will remove the class from element while compiling
            //elem.removeAttr('class');
            console.log(elem.html());
            console.log(attr);
            
            return{
                // prelink runs 3 times as loop runs 3 times
                // order for param should be same
                pre:function(scope,elem,attr){
                    console.log('Pre-Linking....');
                    console.log(scope);
                    console.log(elem);
                    console.log(attr);
                },
                // postlink runs 3 times as loop runs 3 times
                // order for param should be same
                post:function(scope,elem,attr){
                    console.log('Post-Linking....');
                    console.log(scope);
                    
                    /*if(scope.personObject.name === 'Choudhary, Shalu'){
                       elem.removeAttr('class'); 
                    }*/
                    
                    console.log(elem);
                    console.log(attr);
                },
                
                
            }
        }
        
        
        
    }
    
})

component are typescript class which angular instanciate.
we use decorator which is typescript feature which will enhance the typescript class.

first decorator is @component decorator which we import from angular/core
@component decorator takes javascript object.
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

Note: In templateUrl we pass the reletive path.
./ : current dir
../ : back or above 

another decorator is @ngmodule that we give to module.
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

If we want to add more component to this module we need to register the component to this module.
In declarations we can add new component which is a array.
In imports we add other module to this module.

Create Component using CLI:
---------------------------
ng generate component component-name
ng g c component-name

server.component.html:
<p>
  I am in ServerComponent!
</p>

app.component.html:
I am in AppComponent!
<hr>
<app-server></app-server>

We can write html for component inside typescript:
--------------------------------------------------
Replace templateUrl with template and write htmt.
@Component({
  selector: 'app-root',
  template: '<app-server></app-server>',
  styleUrls: ['./app.component.css']
})

Use css:
--------
app.component.css:
h3 {
  color: blue;
}

app.component.html:
<div class="container">
  <div class="row">
    <div class="col-xs-12">
      <h3>I am in AppComponent!</h3>
      <hr>
      <app-servers></app-servers>
    </div>
  </div>
</div>

This will change the color to blue.

We can use inline css:
----------------------
Replace 
styleUrls: ['./app.component.css'] with
styles: ['h3{color: red;}']

Note: To use selector as attribute we need to give it inside '[]'.
If we change selector: 
from : 'app-servers',
to   : '[app-servers]',

In html if we do like
<app-servers></app-servers>
we will get below error:
'app-servers' is not a known element

Solution:
we need to give the selector as attribute like :
 <div app-servers></div>

Using selector as a class:
<div class="app-servers" ></div>
selector: '.app-servers',

Databinding:
------------
Typescript code -----communication/databinding-----html

a.StringInterpolation:
----------------------
Any expression inside {{}} should return a string.
Even we can use {{'Rahul Choudhary'}} this is valid as return a string.
We can call a method inside this which should return a string.
We can use ternary expression inside {{}} but we can use block condition like if else.

Note:
serverId: number = 1;
{{'Server'}} with ID {{serverId}}
Above we say {{}} should return string but here we return a number, so we are updating above defination as 'Any expression inside {{}} should return a string or coercion/change to string like number and string coercion to string'.

Example:
  serverId: number = 1;
  serverStatus: string = 'online';
  serverIP: string = '127.0.0.1';

  getServerIP(){
    return this.serverIP;
  }

  <p>
  {{'Server'}} with ID {{serverId}} status {{serverStatus}}  IP {{getServerIP()}}
  </p>

b.Property Binding:
-------------------
Bind property like : html button element property disabled

<button class=".btn btn-success" [disabled]="!allowNewServer">Add Server</button>

allowNewServer = false;

  constructor() {
    setTimeout(()=>{
      this.allowNewServer = true;
    },2000);
  }

We can bind directive property also.

Property Binding Vs String Interpolation:
-----------------------------------------
Use property binding when you need to change html and directive property.
Dont mix/use both at same time.

c.Event Binding:
----------------
For event we use '()'

html:
<button class=".btn btn-success" [disabled]="!allowNewServer" (click)="onCreateServer()">Add Server</button>
<p [innerText]="!allowNewServer"></p>
<p>{{serverCreationStatus}}</p>

typescript:
serverCreationStatus = "No Server created";
onCreateServer(){
    this.serverCreationStatus = "Server was created";
  }

html:
<label>Server Name : Event data-binding</label>
<input type="text" class="form-control" (input)="onUpdateServerName($event)">
<p>{{serverName}}

typescript:
serverName = "";
onUpdateServerName(event:Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

Note:
How do you know to which Properties or Events of HTML Elements you may bind? You can basically bind to all Properties and Events - a good idea is to console.log()  the element you're interested in to see which properties and events it offers.

Important: For events, you don't bind to onclick but only to click (=> (click)).

The MDN (Mozilla Developer Network) offers nice lists of all properties and events of the element you're interested in. Googling for YOUR_ELEMENT properties  or YOUR_ELEMENT events  should yield nice results.

Two Way Data Binding:
---------------------
[(ngModel)] use this built-in directive for 2 way data binding.

html:
<label>Server Name : Two way data-binding</label>
<input type="text" class="form-control" [(ngModel)]="serverName">
<p>{{serverName}}</p>

typescript:
serverName = "";

Note:
Important: For Two-Way-Binding to work, you need to enable the ngModel  directive. This is done by adding the FormsModule  to the imports[]  array in the AppModule.

You then also need to add the import from @angular/forms  in the app.module.ts file:

import { FormsModule } from '@angular/forms'; 

First Assignment:
-----------------
Create a input box and button check if input size is > 5 than enable button otherwise disable.

html:
<label>Server Name : Two way data-binding</label>
<input type="text" class="form-control" [(ngModel)]="serverName">
<p>{{serverName}}</p>

<hr>
<button class=".btn btn-success" [disabled]="allowNewServer()" (click)="onCreateServer()">Add Server</button>

typescript:
serverName = "";
allowNewServer(){
    if(this.serverName.length >= 4){
      return false;
    }
    return true;
  }

Directives:
-----------
Directives are instruction in the DOM.

Component are like directive which has selector and buisness logic, we place selector in html and says this is our component which binds with buisness logic.

Component are directive with a Template.

There are directives without template like:
ngClass ngBind ngIf.....
and even we have custom directives.

ngIf:
------
structural directive *ngIf
* indicates that this will either contain or remove from DOM.
Also known as structural directive.

<label>Server Name : Two way data-binding</label>
<input type="text" class="form-control" [(ngModel)]="serverName">
<hr>
<button class=".btn btn-success" [disabled]="!allowNewServer" (click)="onCreateServer()">Add Server</button>
<p *ngIf="buttonClicked">Server was created with Name : {{serverName}}</p>

typescript:
buttonClicked = false;
onCreateServer(){
    this.buttonClicked = true;
  }

another way
<button class=".btn btn-primary" [disabled]="!allowNewServer" (click)="onCreateServer()">Add Server</button><br><br>
<p *ngIf="buttonClicked ; else noServer">Server was created with Name : {{serverName}}</p>
<ng-template #noServer><p>No Server created!</p></ng-template>

ngStyle:
--------
<p [ngStyle]="{backgroundColor : getColor()}">
  {{'Server'}} with ID {{serverId}} status {{serverStatus}}  IP {{getServerIP()}}
</p>

typescript:
serverStatus: string = 'online';
getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

ngClass:
--------
.online{
  color: white;
}

<p [ngStyle]="{backgroundColor : getColor()}"
   [ngClass]="{online: serverStatus == 'online'}">
  {{'Server'}} with ID {{serverId}} status {{serverStatus}}  IP {{getServerIP()}}
</p>

ngFor:
-------
structural directive *ngFor.

Now on click we get Date:
<br>
<button class=".btn btn-success" (click)="onCreateDate()">Add Server</button>
<hr>
Toggle:
<p *ngIf="showServerName">{{serverName}}</p>
<hr>
Loop:
<div *ngFor="let dateItem of date; let i = index" [ngStyle]="{backgroundColor: i >= 5 ? 'green' : 'transparent'}"
     [ngClass]="{'white-text': i >= 5}">{{dateItem}}</div>
<hr>

typescript:
serverCreationStatus = "No Server created";
serverName = "";
servers = ['Testserver-1', 'Testserver-2', 'Testserver-3'];
showServerName = false;
date = [];

onCreateDate() {
    this.serverCreationStatus = "Server was created with Name : " + this.serverName;
    this.servers.push(this.serverName);
    this.showServerName = !this.showServerName;
    this.date.push(new Date());
  }

Cource Project:
---------------
Going to build recipe app which has 
Planning:
1. We need Root Component which holds all Components.
2. We need Header Component.
3. We need ShoppingList Component.
   a. ShoppingList Component.
   b. ShoppingListEdit Component.
4. We need RecipeList Component
   a. RecipeList Component.
   b. Recipe Component.
   c. RecipeDetail Component.

Model that we going to use:
1. Ingredient (name and amount) for ShoppingList
2. Recipe (name, amount, image, description ...) for Recipe



