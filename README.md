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

How to upgrade the CLI
-----------------------
Run the below commands - only use "sudo" on Mac/ Linux.

sudo npm uninstall -g angular-cli @angular/cli
npm cache clean --force
sudo npm install -g @angular/cli

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

Add Angular Material:
---------------------
npm uninstall -g angular-cli
npm cache clean
npm install -g @angular/cli@latest
npm install -g @angular/compiler-cli@latest

1. npm install --save @angular/material @angular/cdk
2. npm install --save @angular/animations
3. Let's integrate the freshly installed animations library to our /src/app/app.module.ts file:
// Other imports removed for brevity
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  ...
  imports: [
    ...,
    BrowserAnimationsModule
  ],
  ...
})
export class AppModule { }
4. Create a new file /src/app/material.module.ts and paste the following contents:
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule],
  exports: [MatButtonModule],
})
export class MaterialModule { }
5. Next, back in app.module.ts we import it by adding:
// Other imports removed for brevity
import { MaterialModule } from './material.module';

@NgModule({
  ...
  imports: [
    ...,
    BrowserAnimationsModule,
    MaterialModule
  ],
  ...
})
export class AppModule { }
6. To integrate one, visit the /src/styles.css file and paste the following line at the top:
@import "~@angular/material/prebuilt-themes/indigo-pink.css";
7. npm install --save hammerjs
8. To include this, we add it to the /src/main.ts entry point as an import:
// Other imports removed for brevity
import 'hammerjs';
9. Finally, if you're going to use any Material Design Icons (they are used quite frequently throughout material), we need to import Material Icons in the /src/index.html file between the head tags: 
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
10. That was a lot of setup! Let's make sure it works by checking out the Angular Material Button component.
Visit the /src/app/app.component.html and remove all of the HTML and replace it with:
<button mat-button>My Button</button>

Add Bootstrap to Angular:
-------------------------
1. Add link in index.html file. : https://loiane.com/2017/08/how-to-add-bootstrap-to-an-angular-cli-project/
	OR
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
Note: Project we import for component directive .....need to stop and start again to see the changes.

Components subset of directives with a template and buisness logic which can be used anywhere and any number of times.

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

Component are subset of directive which has selector and buisness logic, we place selector in html and says this is our component which binds with buisness logic.

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

We created :
app
	header
	recipes
			recipe-deatil
			recipe-list
			recipe-item
	shopping-list
			shopping-edit

Header:
-------
<nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <a href="#" class="navbar-brand">Recipe Cart</a>
    </div>

    <div class="collapse navbar-collapse">
      <ul class="nav navbar-nav">
        <li><a href="#">Recipes</a></li>
        <li><a href="#">Shopping List</a></li>
      </ul>

      <ul class="nav navbar-nav navbar-right">
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" role="button">Manage <span class="caret"></span> </a>
          <ul class="dropdown-menu">
            <li><a href="#">Save Data</a></li>
            <li><a href="#">Fetch Data</a></li>
          </ul>
        </li>

      </ul>
    </div>
  </div>
</nav>

Recipe Model:
-------------
export class Recipe {

  // Global Variables For Recipe
  public name: string;
  public description: string;
  public imagePath: string;

  // Constructor
  constructor(name: string, description: string, imagePath: string) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
  }

}

Recipe List:
------------
RecipeListComponent
 recipes: Recipe[] = [
    new Recipe('Test Recipe' , 'Test Description', 'https://www.ndtv.com/cooks/images/iStock_50367092_SMALL%20%281%29.jpg'),
    new Recipe('Test Recipe' , 'Test Description', 'https://www.ndtv.com/cooks/images/iStock_50367092_SMALL%20%281%29.jpg')
  ];

RecipeListHtml:
<div class="row">
  <div class="col-xs-12">
    <button class="btn btn-success">New Recipe</button>
  </div>
</div>
<hr>
<div class="row">
  <div class="col-xs-12" >
    <a href="#" class="list-group-item clearfix" *ngFor="let recipe of recipes">
      <div class="pull-left">
        <h4 class="list-group-item-heading">{{recipe.name}}</h4>
        <p class="list-group-item-text">{{recipe.description}}</p>
      </div>
      <span class="pull-right">
        <img [src]="recipe.imagePath" alt="{{ recipe.name }}" class="img-responsive" style="max-height: 50px;">
      </span>
    </a>
    <app-recipe-item></app-recipe-item>
  </div>
</div>

Recipe Detail HTML:
-------------------
<div class="row">
  <div class="col-xs-12">
    <img src="" alt="" class="img-responsive">
  </div>
</div>


<div class="row">
  <div class="col-xs-12">
    <h1>Recipe Name</h1>
  </div>
</div>


<div class="row">
  <div class="col-xs-12">
    <div class="btn-group">
       <button type="button"
               class="btn btn-primary dropdown-toggle">Manage Recipe <span class="caret"></span> </button>
      <ul class="dropdown-menu">
        <li><a href="#">To hopping List</a></li>
        <li><a href="#">Edit Recipe</a></li>
        <li><a href="#">Delete Recipe</a></li>
      </ul>
    </div>
  </div>
</div>


<div class="row">
  <div class="col-xs-12">
    Description
  </div>
</div>


<div class="row">
  <div class="col-xs-12">
    Ingredints
  </div>
</div>

Shopping List HTML:
-------------------
<div class="row">
  <div class="col-md-10">
    <app-shopping-edit></app-shopping-edit>
    <hr>
    <ul class="list-group">
      <a class="list-group-item" style="cursor: pointer"></a>
    </ul>
  </div>
</div>



Ingredient Model:
-----------------
export class Ingredient {

  /*
      Behind the scen this will create the global variables name and amount
      Also whenever this class get instanciated this will assign the param to global variables.

      Typescript is just reducing the amount of code we going to write.
   */

  constructor(public name: string , public amount: number) {}
}

Shopping Edit HTML:
-------------------
<div class="row">
  <div class="col-xs-12">
    <form>
      <div class="row">

        <div class="col-sm-5 form-group">
          <label for="name">Name</label>
          <input type="text" id="name" class="form-control">
        </div>

        <div class="col-sm-2 form-group">
          <label for="amount">Amount</label>
          <input type="number" id="amount" class="form-control">
        </div>

      </div>

      <div class="row">
        <div class="col-xs-12">
          <button class="btn btn-success" type="submit">Add</button>
          <button class="btn btn-danger" type="button">Delete</button>
          <button class="btn btn-primary" type="button">Clear</button>

        </div>
      </div>
    </form>
  </div>
</div>

Debugging:
----------
For debugging click on sources
main.bundle.js find you code click on that line and you will jump into your typrscript code put breakpoint there and it works.

CLI bundle sourcemap which will map above js to typescript.

Even you can see your typescript under.
webpack  .  src  app  app.component.ts 

To undersatnd application structure install augury extension in chrome.

Components and Databinding:
----------------------------
Here we use small project where we have:
cockpit component in which user will add new server (servername and servercontent).
app component to which we will pass above information (servername and servercontent).
server-element component which will recive info (servername and servercontent) from app component.

Whenever we click on input box then a event is genrated which some information like element and and keypressed we capture that event and use the data.

Here also we do something like this for component to component communication.
we will emmit some event from one component and listen on other component.

HTML : Has property (disable, src) and event (click mousehover press).
Directive : Has custom properties and events.
Components : Has custom properties and events.

Parent to Child Databinding:
----------------------------
AppComponent: in constructor we created some dumy object for this array.
serverElements = [
    {type: 'server', name: 'ServerName' , content: 'ServerContent'}
  ];
<app-server-element *ngFor="let serverElement of serverElements" [element]="serverElement"></app-server-element>

ServerElementComponent:
 @Input() element: {type: string, name: string, content: string};

 <div class="panel panel-default">
  <div class="panel-heading">{{ element.name }}</div>
  <div class="panel-body">
    <p>
      <strong *ngIf="element.type === 'server'" style="color: red">{{ element.content }}</strong>
      <em *ngIf="element.type === 'blueprint'">{{ element.content }}</em>
    </p>
  </div>
</div>

AppComponent has a array of object of type:
serverElements = [
    {type: 'server', name: 'ServerName' , content: 'ServerContent'}
  ];

then we access this array using ng for
now we need to pass the single serverelement object to ServerComponent.
<app-server-element *ngFor="let serverElement of serverElements" [element]="serverElement"></app-server-element>

Now we need to create a element property inside ServerComponent of type:
element: {type: string, name: string, content: string};

But the proerty element of ServerComonent cant be access from AppComponent
so wee need to allow this property by using @Input() 

Note: Assign an alias
<app-server-element *ngFor="let serverElement of serverElements" [srvElement]="serverElement"></app-server-element>

@Input('srvElement') element: {type: string, name: string, content: string};

Note:
Pass data from parent to child with input binding
Intercept input property changes with a setter
Intercept input property changes with ngOnChanges()

Parent listens for child event
Parent interacts with child via local variable
Parent calls an @ViewChild()
Parent and children communicate via a service

Child to Parent Databinding:
----------------------------
<button
      class="btn btn-primary"
      (click)="onAddServer()">Add Server</button>
Button clicked onAddServer() function runs

onAddServer() {
    this.serverAddEvent.emit({
      name: this.newServerName,
      content: this.newServerContent
    });
  }
event emitted to custom event we created serverAddEvent

@Output() serverAddEvent = new EventEmitter<{name: string, content: string}>();
Output the event so that other component can listen to this event.

AppComponent:
<app-cockpit (serverAddEvent)="onServerAdded($event)"></app-cockpit>
AppComponent listen to that event and call onServerAdded.

onServerAdded(serverData: {name: string, content: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.name,
      content: serverData.content
    });
  }
this will add new data to array

serverElements = [
    {type: 'server', name: 'ServerName' , content: 'ServerContent'}
  ];
array gets updated.

<app-server-element *ngFor="let serverElement of serverElements" [element]="serverElement"></app-server-element>
this will show updated/added data

Note:
Angular uses ViewEncapsulation to emulate the css.
Css for Component will apply on that component only.
In selector we can use encapsulation: ViewEncapsulation.None
than css will be applied application wise.
ViewEncapsulation.Emulated is by default.

Local Reference:
----------------
local reference will give the reference of the element.
using local ref we can access every property of element.

 <input type="text" class="form-control" #serverNameLocalRef>
 <button
      class="btn btn-primary"
      (click)="onAddServer(serverNameLocalRef)">Add Server</button>

 onAddServer(serverNameLocalRef: HTMLInputElement) {
    console.log(serverNameLocalRef.value);
    this.serverAddEvent.emit({
      name: serverNameLocalRef.value,
      content: this.newServerContent
    });
  }

View Child:
-----------
To access the local ref directly in typescript use View Child.
No need to pass the local ref as a param on button click event.

<input type="text" class="form-control" #serverNameLocalRef>
<input type="text" class="form-control" #serverContentLocalRef>

<button
      class="btn btn-primary"
      (click)="onAddServer(serverNameLocalRef)">Add Server</button>


@ViewChild('serverContentLocalRef') serverContentLocalRef;
onAddServer(serverNameLocalRef: HTMLInputElement) {

    this.serverAddEvent.emit({
      name: serverNameLocalRef.value,
      content: this.serverContentLocalRef.nativeElement.value
    });
  }

Add Content:
------------
<div class="panel-body">
        <ng-content></ng-content>
</div>

<app-server-element *ngFor="let serverElement of serverElements" [element]="serverElement">
         <p>
           <strong *ngIf="serverElement.type === 'server'" style="color: red">{{ serverElement.content }}</strong>
           <em *ngIf="serverElement.type === 'blueprint'">{{ serverElement.content }}</em>
         </p>
</app-server-element>

Component Lifecycle:
--------------------
ngOnChanges:will call when new component created and when ever component property marked with @Input() get change.

ngOnInIt:will call when component get intiallized after the constructor.

ngDoCheck:will run whenever any property value get changes it will run and change the crosponding template/html value.

ngAfterConetentInIt:will call after content(ng-content) has been projected into view.

ngAfterContentChecked:will run everty time the projected content has been checked.

ngAfterViewInit:will run once component view finished initializing.

ngAfterViewChecked:will run every time the view has been checked.

ngOnDestroy:will run once the component will destroy from DOM.

Example:

  @Input() element: {type: string, name: string, content: string};

  constructor() {
    console.log('Constructor Called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges Called');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit Called');
  }

  ngDoCheck() {
    console.log('ngDoCheck Called');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit Called');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked Called');
  }

  ngAfterViewInit() {console.log('ngAfterViewInit Called');}

  ngAfterViewChecked() {console.log('ngAfterViewChecked Called');}

  ngOnDestroy() {console.log('ngOnDestroy Called');}


@ContentChild:
---------------
if we have any content which we use in our template as ng-content than we can access it using @ContentChild.

Directives:
-----------
Note: Project we import for component directive .....need to stop and start again to see the changes.

Instruction to DOM dont have a template.
ng g d directive-name.

directive:
@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit{

  private elementRef: ElementRef;

  constructor(elementRef: ElementRef) {}

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }
}

HTML:
<p appBasicHighlight>Style this will background color Green</p>

directive:
@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor' , 'blue');
  }
}

HTML:
<p appBetterHighlight="">Style this will background color Blue</p>

Note: Renderer2 just wrap some methods will help to manulupate DOM.
Renderer take 3 param (element ref, style , style value)

Listen TO Event On Directive:
-----------------------------
Using @HostListener : which takes event name as param

@HostListener('mouseenter') mouseEnter(event: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor' , 'blue');
  }

@HostListener('mouseleave') mouseLeave(event: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor' , 'transparent');
  }

Using HostBinding:
------------------
@HostBinding : we can bind any property of element on which directive sit

 @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {

  }

  @HostListener('mouseenter') mouseEnter(event: Event) {
    //this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor' , 'blue');
    this.backgroundColor = 'blue';
  }

  @HostListener('mouseleave') mouseLeave(event: Event) {
    //this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor' , 'transparent');
    this.backgroundColor = 'transparent';
  }

Structural Directive:
---------------------
We have * in front of directive which behind the scen is 
*ngIf equals to [ngIf]=""
so instead of writing above angular transform *ngIf to [ngIf]=""

Note: ElementRef give ref of element on which directive sits and TemplateRef give ref of Template (ng-template) on which directive sits.
ViewContainerRef where we mark/put our Template.

Property of Directive or Component whene get changes then if we defined setter for that property its get called.

Creating Structural Directive:
------------------------------
Earlier we use *ngIf to show or hide div.
Now we create our own structural directive which will do the oposite.

First create a new directive:
// when we click on button the param to below will change.
@Input() set appStructuralDirective(condition: boolean) {
    if (!condition){
      // on container this will show the template on which our directive sits.
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }else {
      // if condition fails this will remove the element from container.
      this.viewContainerRef.clear();
    }
  }

  // we are getting ref of template where our directive sits.
  // ViewContainer on which we show and hide the template.
  constructor(private templateRef: TemplateRef<any> , private viewContainerRef: ViewContainerRef) { }

HTML:
// *appStructuralDirective will transform to [appStructuralDirective]=""
// so property appStructuralDirective will map to directive class
// on click this property gets change and call setter method
// setter method is doing oposite of ngIf
<div *appStructuralDirective="onlyOdd">
          <li
            class="list-group-item" *ngFor="let even of evenNumbers" [ngClass]="{odd: even % 2 !== 0}">{{even}}
          </li>
</div>

ngSwitch:
---------
AppComponent
 value = 10;

HTML:
 <div [ngSwitch]="value">
    <p *ngSwitchCase="5">Value is 5</p>
    <p *ngSwitchCase="10">Value is 10</p>
    <p *ngSwitchCase="15">Value is 15</p>
    <p *ngSwitchDefault>Value is Default</p>
  </div>

Course with Directive:
----------------------
Handling Dropdown
We can use bootstrap javascript code for dropdown menu but here we use only angularjs to manupulate the DOM.

Toggle Dropdown:
----------------
HTML:
<div class="btn-group" appDropdown>
       <button type="button"
               class="btn btn-primary dropdown-toggle">Manage Recipe <span class="caret"></span> </button>
      <ul class="dropdown-menu">
        <li><a href="#">To hopping List</a></li>
        <li><a href="#">Edit Recipe</a></li>
        <li><a href="#">Delete Recipe</a></li>
      </ul>
    </div>
  </div>

DropdownDirective:
 @HostBinding('class.open') isOpen = false;

  constructor() { }

  @HostListener('click') onToggle() {
    this.isOpen = !this.isOpen;
  }

Services and Dependency Injection:
----------------------------------
Note: 
We can provide services in app.module providers and our service than avialable to application wide.
We can provide services in app.component providers and our service will be aviable to all child component of app component.
We can provide services in single component who is not having any child but have parent component, in that case service wont be aviable to parent component.

(Service will be aviable to component and its child not parent)

Example:
We have NewAccount Component in which user add new account.
App Component will get that new account and pass it to Account Component.
Account Component will show all acount.

Earlier we were using custom events to pass and get data.
using @Input and @Output

Now we use services:
we simply pass the new account info from NewAcoount Component to AccountService.
Account Component will get the account info directly from Account Service instead from App Component.

Note:
Earlier we created the AccountService instance in App Component, New Acoount Component, Account Component which was wrong as App Component is parent of New Acoount Component & Account Component.
So we remove the AccountService from Providers of both component.

For Injecting a service into a service @Injectable is important.

Emit Event From One Component TO Other Using Services:
------------------------------------------------------
On update in Account Component:
onSetTo(status: string) {
    this.accountService.updateAccount(this.id, status);
    //this.loggingService.logStatus(status);
    this.accountService.accountUpdated.emit(status);
  }

AccountService:
accountUpdated = new EventEmitter<string>();

NewAccount Component which recive the event:
this.accountService.accountUpdated.subscribe(
      (status) => alert('New Updated Status : ' + status)
    );

How Emit and Subscribe Work Here:
---------------------------------
ShoppingListComponent:
// for the first time when this component loaded to show array of ingredients, after constructor ngOnOnit() will run, and we get array from shopping service.
// ngOnInit will run once the new object of shopping component will be created that is when it see app-shoppinglist in html and it will start listening to event until this object gets destroyed.
ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );

// on add of new ingredient we call shopping service add ingredient method.
onAdd() {
    const name = this.inputText.nativeElement.value;
    const amount = this.amountText.nativeElement.value;
    const ingredient = new Ingredient(name, amount )
    this.shoppingListService.addIngredient(ingredient);
  }

ShoppingService:
// we get the newly added ingredient and emit a event as we added new ingredient to copy of array and shopping component is still having array copy which is not updated.
addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientChanged.emit(this.ingredients.slice());

  }

// this will handle the event and emit
ingredientChanged = new EventEmitter<Ingredient[]>();

ShoppingListComponent:
// this will listen to the event once it recive the event.
// it is continoiusly listing to the events and once recive will update // the array of ingredient.
ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );


Routing:
--------
In app module we need to add
import {RouterModule, Routes} from "@angular/router";
const appRoutes: Routes = [
  {path: '' , component: HomeComponent},
  {path: 'users' , component: UsersComponent},
  {path: 'servers' , component: ServersComponent}
]

now need to register this constant in angular.
imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],

Use routes:
-----------
App Home Page : App Root
<div class="col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2">
   <router-outlet></router-outlet>
</div>

use as link:
<div class="col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2">
      <ul class="nav nav-tabs">
        <li role="presentation" class="active"><a routerLink="/">Home</a></li>
        <li role="presentation"><a routerLink="/servers">Servers</a></li>
        <li role="presentation"><a [routerLink]="['/users']">Users</a></li>
      </ul>
</div>

absoulte path : '/users'
relative path : 'users'

if you are on root ie: / than you go to servers path /servers
not here we have a link to reload this page again.
<a href="servers">reload same page</a>

above we use relative path so it will be : /servers/servers which will throw an error. relative path just appned the new path to the current path

if we change this to : <a href="/servers">reload same page</a>
it will be : /servers only 

so use absolute path or relative path according to usecase.

Note:
RouterLink remember on which page you are and on which page you are going to.
example: you are at /servers and you click link which reload itsself using link /servers than we get /servers/servers and we get error.

Navigate on the other hand didnt remember whats your current page is, it always route you from root of application.
example: if you are at /servers and click on reload than it dont know that you are on /servers and will look from root ie: / and go to 
/servers.

RouterLinkActive:
-----------------
<ul class="nav navbar-nav">
        <li routerLinkActive="active"><a routerLink="/recipes" >Recipes</a></li>
        <li routerLinkActive="active"><a routerLink="/shopping-list" >Shopping List</a></li>
</ul>

routerLinkActive directive take css class to mark as active as we are using bootstrap so we pass bootstrap class active.


To Get URL Param:
-----------------
const appRoutes: Routes = [
  {path: '' , component: HomeComponent},
  {path: 'users' , component: UsersComponent},
  {path: 'users/:id/:name' , component: UserComponent},
  {path: 'servers' , component: ServersComponent}
]


  user: {id: number, name: string};

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    }
  }

Angular wont load a new instance of component if we already on that:
--------------------------------------------------------------------
Due to performance issue if we are on a pirticular component and want to load same component again angular wont load a new instance this is default behaviour of angular.

If we are on user component and fire below link:
<a [routerLink]="['/users',10,'Rahul']">Rahul (10)</a>

which will again fire same component on which we were earlier.

We will see no change as a defualt behaviour.

To overcome this we will set a subscriber to the param event.

ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };

    this.route.params.subscribe(
      (params: Params) => {
        this.user.id = params['id'];
        this.user.name = params['name'];
      }
    );

Note:
When we subscribe to event its not attach to component that mean when you navigate away from that component, its get destroy but not the subscription because subscription sits in memory.

so its good practice to subscribe the event using OnDestory.
paramsSubscription: Subscription;

this.paramsSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.user.id = params['id'];
        this.user.name = params['name'];
      }
    );

Query Param:
------------
<a
        [routerLink]="['/servers',1,'edit']"
        [queryParams]="{allowEdit: '1'}"
        fragment="Loading"
        href="#"
        class="list-group-item"
        *ngFor="let server of servers">
        {{ server.name }}
      </a>

using component:
<button class="btn btn-primary" (click)="onLoadServer(2)">Load Server 1</button>

onLoadServer(id: number) {
    this.router.navigate(['/servers',id,'edit'], {queryParams: {allowEdit: '2'}, fragment: 'Loading'});
  }

ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

Routing on List:
----------------
UsersComponent:
<div class="list-group">
      <a href="#" class="list-group-item" *ngFor="let user of users" [routerLink]="['/users',user.id,user.name]">
        {{ user.name }}
      </a>
</div>

AppModule:
{path: 'users/:id/:name' , component: UserComponent},

UserComponent:
paramsSubscription: Subscription;

  user: {id: number, name: string};

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };

    this.paramsSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.user.id = params['id'];
        this.user.name = params['name'];
      }
    );
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

UserCompoennt Html:
<p>User with ID {{user.id}} loaded.</p>
<p>User name is {{user.name}}</p>
<hr>
<a [routerLink]="['/users',10,'Rahul']">Rahul (10)</a>

Nested Routing in App Module:
-----------------------------
Below First and second are same.We just define using children.

First
{path: 'servers' , component: ServersComponent},
{path: ':id' , component: ServerComponent},
{path: ':id/edit' , component: EditServerComponent}

Second:
{path: 'servers' , component: ServersComponent, children:[
    {path: ':id' , component: ServerComponent},
    {path: ':id/edit' , component: EditServerComponent}
  ]},

Child Route:
------------
App module:
{path: 'servers' , component: ServersComponent, children:[
    {path: ':id' , component: ServerComponent},
    {path: ':id/edit' , component: EditServerComponent}
  ]},

Servers Component Html:
<div class="col-xs-12 col-sm-4">
    <router-outlet></router-outlet>
    <!--<button class="btn btn-primary" (click)="onReload()">Reload Page</button>
    <app-edit-server></app-edit-server>
    <hr>
    &lt;!&ndash;<app-server></app-server>&ndash;&gt;-->
</div>

Server Component Html:
<h5>{{ server.name }}</h5>
<p>Server status is {{ server.status }}</p>

Passing Query Param:
--------------------
 this.router.navigate(['edit'],{relativeTo: this.route, queryParamsHandling: 'preserve'});

 we can use merge in place of preserve.

 Redirecting and Wildcard Route:
 -------------------------------
 {path: 'not-found' , component: PageNotFoundComponent},
 {path: '**' , redirectTo: '/not-found'}

 Note: {path: '**' , redirectTo: '/not-found'} This should be the last path otherwise we will get not found for every routing.

Gaurd All App Routing:
----------------------
Protect app from accessing.

AuthService:
export class AuthService {
  loggedIn = false;

  isAuthenticated() {
    const promise = new Promise(
      (resolve , reject) => {
        setTimeout(() => resolve(this.loggedIn), 800);
      }
    );

    return promise;
  }

  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }
}

AuthGaurd:
@Injectable()
export class AuthGaurd implements CanActivate, CanActivateChild {

  constructor(private authService: AuthService , private router: Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isAuthenticated()
      .then(
        (authenticated: boolean) => {
          if (authenticated) {
            return true;
          }else {
            this.router.navigate(['/']);
          }
        }
      );
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(route, state);
  }
}

RoutingModule:
{path: 'servers' ,
    /*canActivate: [AuthGaurd]*/
    canActivateChild: [AuthGaurd],
    component: ServersComponent, children:[
    {path: ':id' , component: ServerComponent},
    {path: ':id/edit' , component: EditServerComponent}
  ]},

If we want to gaurd route and its child than use canActivate.
If we want to gaurd only child route than use canActivateChild.


Discard Changes:
----------------


Pass Data In Route:
-------------------

Observables:
------------
Obsbervables are emitter and observer are subscriber.
import from 3rd party rxjs.
we can attach Obsbervables to button click or http request (result or error).

Three way to handle observable:
1. Handle Data (Success Result)
2. Handle Error (Error Result)
3. Handle Completion (like http request, once we get response handle get complete).

Obsbervable--> Handle Data , Handle Error, Handle Completion--> Observer.

Earlier we use promises in angular 1 now we use observables in angular 2.

Custom observable should be destory manually otherwise we will get memory leak issue.

Example:


  myNumberSubscription: Subscription;
  myObservableSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    const  myNumber = Observable.interval(1000);

    this.myNumberSubscription = myNumber.subscribe(
      (number: number) =>
        console.log(number);
    )

     const  myObservable = Observable.create(
      (observer: Observer<string>) => {

            setTimeout( () => {
              observer.next('After 2000 second : Data');
            }, 2000),

            setTimeout( () => {
              observer.next('After 4000 second : Data');
            }, 4000),

              setTimeout( () => {
                observer.error('After 6000 second : Error');
              }, 4000),

              setTimeout( () => {
                observer.complete();
              }, 4000),

            setTimeout( () => {
              observer.next('After 10000 second **** Finish : Data');
            }, 5000);
      };

      this.myObservableSubscription = myObservable.subscribe(
        (data: string) => { console.log(data); },
        (error: string) => { console.log(error); },
        (complete: string) => { console.log('Completed'); },
      );
    );
  }

  ngOnDestroy() {
      this.myNumberSubscription.unsubscribe();
      this.myObservableSubscription.unsubscribe();
  }

Subject:
--------
work as both observable and observer at same time.

Service:
export class UserService {
    userActivated = new Subject();
}

As observable or emitter:
onActivate() {
    this.userService.userActivated.next(this.id);
  }

As a observer or subscriber:
constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.userActivated.subscribe(
      (id: number) => {
        if(id === 1 ) {
          this.user1Activated = true;
        }else if (id === 2 ) {
          this.user2Activated = true;
        }
      }
    );
  }

Forms:
------
Two approaches : Template Driven and Recative
To work with form FormsModule should be there in app.module.ts.

Template Driven Approach For Forms:
-----------------------------------
On Form we can put local ref from where we get form ref, now angular read form element and create a javascript object which has all property of form. To access it we use #localref="ngForm".

So localRef is Form element refernece and ngForm is the javascript object created by angular behind the scen.
We provide the ngForm to Form element ref by '#localref="ngForm"'.

Now we pass the javascript form object to onSubmit(f) function like
(ngSubmit)="onSubmit(f)"

In Below line:
<input type="text" id="username" class="form-control" ngModel name="username">

For the above input we give the name of Control using:
name="username"
And register this input as a Control by using ngModel.
ngModel

We pass the Form Object as (ngSubmit)="onSubmit(f)

In component:
onSubmit(form: NgForm) {
    const value = form.value;
    console.log(value);
  }


Form:
<form (ngSubmit)="onSubmit(f)" #f="ngForm">
        <div id="user-data">
          <div class="form-group">
            <label for="username">Username</label>
            <input type="text" id="username" class="form-control" ngModel name="username">
          </div>
          <button class="btn btn-default" type="button">Suggest an Username</button>
          <div class="form-group">
            <label for="email">Mail</label>
            <input type="email" id="email" class="form-control" ngModel name="email">
          </div>
        </div>
        <div class="form-group">
          <label for="secret">Secret Questions</label>
          <select id="secret" class="form-control" ngModel name="secret">
            <option value="pet">Your first Pet?</option>
            <option value="teacher">Your first teacher?</option>
          </select>
        </div>
        <button class="btn btn-primary" type="submit">Submit</button>
</form>

Component:

  @ViewChild('f') signupForm: NgForm;

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  /*onSubmit(form: NgForm) {
    console.log(form);
  }*/

  onSubmit() {
    console.log(this.signupForm);
  }

Validate Form:
--------------
Built-in Validators & Using HTML5 Validation

Which Validators do ship with Angular? 

Check out the Validators class: https://angular.io/docs/ts/latest/api/forms/index/Validators-class.html - these are all built-in validators, though that are the methods which actually get executed (and which you later can add when using the reactive approach).

For the template-driven approach, you need the directives. You can find out their names, by searching for "validator" in the official docs: https://angular.io/api?type=directive - everything marked with "D" is a directive and can be added to your template.

Additionally, you might also want to enable HTML5 validation (by default, Angular disables it). You can do so by adding the ngNativeValidate  to a control in your template.

First validation is required, if that feild will be empty we will get form object valid property will be false.
f.valid 

Another validation: this will make sure only postive integer will be entered in feild.
pattern="^[1-9]+[0-9]*$"

Another validation: email
which will check the email pattern in feild.

Now we check the validation :
<span class="help-block" *ngIf="!email.valid && email.touched">Please enter a valid email.</span>

On Submit button we can add a check to disable button until it is invalid.
<button class="btn btn-success" type="submit" [disabled]="!f.valid">Add</button>

Example:
<div class="form-group">
            <label for="email">Mail</label>
            <input type="email"
                   id="email"
                   class="form-control"
                   ngModel
                   name="email"
                   required
                   email
                   #email="ngModel"
            >
            <span class="help-block" *ngIf="!email.valid && email.touched">Please enter a valid email.</span>
</div>

Default Value in form:
----------------------
Give defualt value like for select multiple items.

Example:
Component:
defaultQuestion = 'pet';

Html:
<div class="form-group">
          <label for="secret">Secret Questions</label>
          <select id="secret" class="form-control" ngModel name="secret" [ngModel]="defaultQuestion">
            <option value="pet">Your first Pet?</option>
            <option value="teacher">Your first teacher?</option>
          </select>
</div>

Above [ngModel]="defaultQuestion" this recive pet from component, select will match the option with that and show on UI (Your first Pet?)

Use of ngModel in Form:
-----------------------
As a control(tell angular that this form input need control, to add this in value property of angular form object):
<input type="text" id="username" class="form-control" ngModel name="username" required >

As a property Binding/one way binding:
<select id="secret" class="form-control" ngModel name="secret" [ngModel]="defaultQuestion">

As a Two way binding:
<textarea name="questionAnswer" rows="3" class="form-control" [(ngModel)]="answer">{{answer}}</textarea>

Group Form Controls:
--------------------
Group your controls(html element like input) which might come in same group help in large forms.

<div id="user-data" ngModelGroup="userData" #userDataRef="ngModelGroup">
	<div class="form-group">
            <label for="username">Username</label>
            <input type="text" id="username" class="form-control" ngModel name="username" required >
          </div>
     <button class="btn btn-default" type="button">Suggest an Username</button>
          <div class="form-group">
            <label for="email">Mail</label>
            <input type="email"
                   id="email"
                   class="form-control"
                   ngModel
                   name="email"
                   required
                   email
                   #email="ngModel"
            >
            <span class="help-block" *ngIf="!email.valid && email.touched">Please enter a valid email.</span>
          </div>
</div>
        <span class="help-block" *ngIf="!userDataRef.valid && userDataRef.touched">User Data (Username or Email) is not valid.</span>
        
Handling Radio Button:
----------------------
Component:
defaultGender = 'male';

Html:
<div class="radio" *ngFor="let gender of genders">
          <label>
            <!--<input type="radio" name="gender" [ngModel]="defaultGender" [value]="gender">{{gender}}-->
            <input type="radio" name="gender" ngModel [value]="gender" required>{{gender}}
          </label>
</div>

Setting and Patching Form Value:
--------------------------------
We have set and patch property on form object. 
As set value is not recomended so we didnt mention here but we can use as its avilable.

Example:

Html:
<form (ngSubmit)="onSubmit()" #f="ngForm">
        <div id="user-data" ngModelGroup="userData" #userDataRef="ngModelGroup">
          <div class="form-group">
            <label for="username">Username</label>
            <input type="text" id="username" class="form-control" ngModel name="username" required >
          </div>
          <button class="btn btn-default" type="button" (click)="suggestUserName()">Suggest an Username</button>

Component:
suggestUserName() {
    const suggestedName = 'Superuser';
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

Use Form Data:
--------------
When we click on submit form data.

Component:
user = {
    username: '',
    email: '',
    secret: '',
    questionAnswer: '',
    gender: '',
  };
  submitted = false;

onSubmit() {
    console.log(this.signupForm);
    this.submitted = true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secret = this.signupForm.value.secret;
    this.user.questionAnswer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;
  }

Html:
<div class="row" *ngIf="submitted">
      <div class="col-xs-12">
          <h3>Your Data</h3>
          <p>Username : {{user.username}}</p>
          <p>Email : {{user.email}}</p>
          <p>Secret Question : Your first {{user.secret}}</p>
          <p>Answer : {{user.questionAnswer}}</p>
          <p>Gender : {{user.gender}}</p>
      </div>
</div>

Reset Form Data:
----------------
this.signupForm.reset();

Reactive Approach For Forms:
----------------------------
Component:
signupForm: FormGroup;

  ngOnInit() {
    this.signupForm = new FormGroup({
      'username' : new FormControl(null),
      'email' : new FormControl(null),
      'gender' : new FormControl('male'),
    });

  }

Html:
<form [formGroup]="signupForm" (ngSubmit)="onSubmit()">
        <div class="form-group">
          <label for="username">Username</label>
          <input
            type="text"
            id="username"
            formControlName="username"
            class="form-control" required>
          <span class="help-block" *ngIf="!signupForm.get('username').valid && signupForm.get('username').touched">Please enter a valid Username.</span>
        </div>
        <div class="form-group">
          <label for="email">email</label>
          <input
            type="text"
            id="email"
            formControlName="email"
            class="form-control"
          required
          email>
          <span class="help-block" *ngIf="!signupForm.get('email').valid && signupForm.get('email').touched">Please enter a valid Email.</span>
        </div>
        <div class="radio" *ngFor="let gender of genders" >
          <label>
            <input
              type="radio"
              [value]="gender"
              formControlName="gender" required>{{ gender }}
          </label>
        </div>
        <span class="help-block" *ngIf="!signupForm.valid && signupForm.touched">Please enter a valid Data.</span>
        <button class="btn btn-primary" type="submit">Submit</button>
      </form>

Validating Form:
----------------
<input
            type="text"
            id="username"
            formControlName="username"
            class="form-control" required>
          <span class="help-block" *ngIf="!signupForm.get('username').valid && signupForm.get('username').touched">Please enter a valid Username.</span>
        
Grouping Controls:
------------------
Html:
<div formGroupName="userData">
          <div class="form-group">
            <label for="username">Username</label>
            <input
              type="text"
              id="username"
              formControlName="username"
              class="form-control" required>
            <span class="help-block" *ngIf="!signupForm.get('userData.username').valid && signupForm.get('userData.username').touched">Please enter a valid Username.</span>
          </div>
          <div class="form-group">
            <label for="email">email</label>
            <input
              type="text"
              id="email"
              formControlName="email"
              class="form-control"
              required
              email>
            <span class="help-block" *ngIf="!signupForm.get('userData.email').valid && signupForm.get('userData.email').touched">Please enter a valid Email.</span>
          </div>
</div>

Component:
ngOnInit() {
    this.signupForm = new FormGroup({
      'userData' : new FormGroup({
        'username' : new FormControl(null),
        'email' : new FormControl(null)
      }),
      'gender' : new FormControl('male'),
    });

  }

Add Form Array Data:
--------------------
FormArray takes array of FormControl
When we click on button Add Hoby, onAddHoby function will run 
onAddHobby() {
    console.log('button clicked');
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }
This function first create a FormControl object with param null and validator.Here null is what we see in input box when button is clicked
here we put null that mean input box will be empty, we can also do like.
onAddHobby() {
    console.log('button clicked');
    const control = new FormControl('First time clicked', Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }
This will create a input box when button Add Hoby will be clicked with value 'First time clicked'.

Second Like:
(<FormArray>this.signupForm.get('hobbies')).push(control);
This will put the new FormControl on hobbies FromArray.

Third UI Part:
<div formArrayName="hobbies">
          <h4>Your Hobbies</h4>
          <button (click)="onAddHobby()" class="btn btn-default" type="button">Add Hobby</button>
          <div class="form-group" *ngFor="let hobbyControl of signupForm.get('hobbies').controls; let i = index">
            <input type="text" class="form-control" [formControlName]="i">
          </div>
</div>

Here:
*ngFor="let hobbyControl of signupForm.get('hobbies').controls; let i = index"
This will loop over the array, currently first time when button is clicked we have only one FormControl with null value on FormArray.

So we will see the input box with nothing on first clicked.

Second time we click it will again add a new FormControl with null value to FormArray.
Again ngFor loop over FormArray (hobbies) and find we have already one FormControl ie: last value.
So we will see previous value and new input empty text box.

Now we know every FromControl has a formControlName like we have 'username' and 'email'.
<input type="text" class="form-control" [formControlName]="i">
But this is dynamicaaly created so we put the index number as the FormControlName.

So for first clicked: formControlName 0 and value 'that we enter'.
& for Second clicked: formControlName 1 and value 'that we enter'.

Custom validator:
-----------------
Validator are functions that angular call.
We can create a custom validator or function and call it on FormControl.
Custom validator function takes FormControl as agrument.

forbiddenUserames = ['rahul', 'ravi'];

'username' : new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),

forbiddenNames(control: FormControl): {[s: string] : boolean} {
    if(this.forbiddenUserames.indexOf(control.value) !== -1) {
      return {nameIsForbidden: true};
    }
    return null;
  }

Error Messages:
---------------
<span class="help-block" *ngIf="!signupForm.get('userData.username').valid && signupForm.get('userData.username').touched">
              <span *ngIf="signupForm.get('userData.username').errors['nameIsForbidden']">This name is invalid</span>
              <span *ngIf="signupForm.get('userData.username').errors['required']">Please enter a valid Username</span>
</span>

Asynchronous Error:
-------------------
'email' : new FormControl(null,[ Validators.required,  Validators.email] , this.forbiddenEmail.bind(this))

forbiddenEmail(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>(
      (resolve, reject) => {
        setTimeout(() => {
          if (control.value === 'rahulchaudhary22051990@gmail.com') {
            return resolve({'emailIsForbidden': true});
          } else {
            return resolve(null);
          }
        }, 1500);
      }
    );
    return promise;
  }

Status and Value Change:
------------------------
this.signupForm.valueChanges.subscribe(
      (value) => {console.log(value)}
    );

this.signupForm.statusChanges.subscribe(
      (status) => {console.log(status)}
    );

Setting and Patching Value:
---------------------------
this.signupForm.setValue({
      'userData': {
        'username' : 'Rahul_Choudhary',
        'email': 'rahul@gmail.com'
      },
      'gender': 'male',
      'hobbies' : []
    });

    this.signupForm.patchValue({
      'userData': {
        'username' : 'Shalu_Choudhary',
      },
    });

Update Item In Form:
--------------------
Example: We have an List of item when we click on a single item we should see it in edit mode.

Edit mode here means that in form where we add new item we will see the update item details there only no new edit ui will be displayed.

1. On the list item we will add a click listner to which we pass index
<a class="list-group-item" style="cursor: pointer" *ngFor="let ingredient of ingredients; let i = index"
      (click)="onEditItem(i)">{{ingredient.name}} ({{ingredient.amount}})</a>

2. Then we create a Object(event) in Service:
startedEditing = new Subject<number>();

3. On click function we add the index to service Object(event).
onEditItem(index: number) {
      this.shoppingListService.startedEditing.next(index);
  }

4. We subscribe to Subject in Shopping Edit Component.

@ViewChild('f') shoppingListForm: NgForm;
  editingSubscription: Subscription;
  editMode = false;
  editItemIndex: number;
  editedItem: Ingredient;

ngOnInit() {
    this.editingSubscription = this.shoppingListService.startedEditing.subscribe(
      (index: number) => {
        this.editItemIndex = index;
        this.editMode = true;
        this.editedItem = this.shoppingListService.getIngredientByIndex(this.editItemIndex);
        this.shoppingListForm.setValue({
          'name': this.editedItem.name,
          'amount': this.editedItem.amount
        });
      }
    );
  }

Service :
 getIngredientByIndex(index: number) {
    return this.ingredients[index];
  }

5. Dynamically Change button From Add to Update :
<button class="btn btn-success" type="submit" [disabled]="!f.valid">{{editMode ? 'Update' : 'Add'}}</button>

6. Finally on click Add or Update:
onSubmit(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount );
    if(this.editMode) {
      this.shoppingListService.updateIngredient(this.editItemIndex, newIngredient);
    }else {
      this.shoppingListService.addIngredient(newIngredient);
    }
    this.editMode = false;
    form.reset();
  } 

Service:
updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientChanged.next(this.ingredients.slice());
  }

addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientChanged.next(this.ingredients.slice());
  }

7. Clear Items:
<button class="btn btn-primary" type="button" (click)="onClear()">Clear</button>

onClear() {
    this.shoppingListForm.reset();
    this.editMode = false;
  }

8. Delete Items:
<button class="btn btn-danger" type="button" (click)="onDelete()">Delete</button>

 onDelete() {
    this.onClear();
    this.shoppingListService.deleteIngredient(this.editItemIndex);
  }

Reactive Form:
--------------
1. attach FormGroup directive as property
<form [formGroup]="recipeForm" (ngSubmit)="onSubmit()">
This tell to angular that overall form is manage by us so dont manage this form.
We give our form object as FormGroup to formGroup directive.
recipeForm: FormGroup;

private initForm() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';

    if (this.editMode) {
      const recipe = this.recipeService.getRecipeById(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
    }

    this.recipeForm = new FormGroup({
      'name' : new FormControl(recipeName),
      'imagePath' : new FormControl(recipeImagePath),
      'description' : new FormControl(recipeDescription),
    });
  }
and call this initForm() in component init

2. We register the control using FormControlName to inputs 
<input type="text" id="name" class="form-control" formControlName="name">

Pipes:
------
Transform output in our template.
Pipes applied from left to right.
https://angular.io/api/
ng g p pipeName

Shorten Pipe:
import {Pipe, PipeTransform} from "@angular/core";
@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

    transform(value: any, limit: number, start: number) {

      if (value.length > limit) {
        return value.substring(start, limit) + ' ...';
      }
      return value;
    }

}

Filter Pipe:
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): any {
    if(value.length === 0 || filterString === '') {
      return value;
    }

    const resultArray = [];
    for (const item of value) {
      if (item[propName] === filterString) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }

Html:
<div class="col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2">
      <input type="text" [(ngModel)]="filterStatus">
      <button type="button" class="btn btn-success" (click)="onAddServer()">Add Server</button>
      <br><br>
      <h2>App Status : {{appStatus | async}}</h2>
      <hr>
      <ul class="list-group">
        <li
          class="list-group-item"
          *ngFor="let server of servers | filter:filterStatus:'status'"
          [ngClass]="getStatusClasses(server)">
          <span
            class="badge">
            {{ server.status }}
          </span>
          <strong>{{ server.name | shorten: 12 }}</strong> | {{ server.instanceType | uppercase }} | {{ server.started | date: 'fullDate'}}
        </li>
      </ul>
    </div>

Note:
whenever pipe is applied on data and data might change in background we cant see the change.
To enable that we need to add below:
@Pipe({
  name: 'shorten',
  pure: false
})
Dont do above as if data is very large we get performance issue as pipe will be triggered at every data change.

Http:
-----
Normally we send request and we get html back in response like jsp.
But in angular we send request and we get json in response.
we show the json in our SPA.

Use firebase to host your api
https://console.firebase.google.com

Html:
<button class="btn btn-primary" (click)="onSaveServers()">Save Servers</button>

Component:
onSaveServers() {
    this.serversService.storeServers(this.servers)
      .subscribe(
        (response) => {console.log(response)},
        (error) => {console.log(error)}
      );
  }

Service:
constructor(private http: Http) { }
storeServers(servers: any[]) {
    const headers = new Headers({'companyName': 'Optum', 'employeeName': 'Rahul Choudhary'})
    return this.http.post('https://angularserver-3be32.firebaseio.com/data.json' , servers, {headers: headers});
  }

Get Data:
Service:
getServers() {
    return this.http.get('https://angularserver-3be32.firebaseio.com/data.json');
  }

Component:
onGetServers() {
    this.serversService.getServers()
      .subscribe(
        (response) => {
          const data = response.json();
          console.log(data);
        },
        (error) => {console.log(error)}
      );
  }

Note: This const data = response.json();
.json will give javascript object.

map():
------
will get data from observable and transform the response/data and wrap it again or gives back a observable again.

Service:
getServers() {
    return this.http.get('https://angularserver-3be32.firebaseio.com/data.json')
      .map(
        (response: Response) => {
          const data = response.json();
          /*for (const server of data) {
            server.name = 'Fetched_' + server.name;
          }*/
          return data;
        }
      );

Component:
onGetServers() {
    this.serversService.getServers()
      .subscribe(
        (servers: any[]) => {
          console.log(servers);
          this.servers = servers;
        },
        (error) => {console.log(error)}
      );
  }

Http Authentication:
--------------------
Traditional web app we have client and server. we send request from client and server will check the username and password and creates a session and sends back the html with some cookie and on next request server will check the cookie and see the client has valid session and provide the resource.

In SPA we have client and server, but on request we are taking the response as json no html is dynamically genrated by the server as html is maintain by the angular.
We send the auth request first time with username and password server authenticate user and send back the token (token is a algo based hash code) client get this token in response for first time and on every request it will attach this token, server recives this token and as this token is genrated by the server, server will be able to decript the token and found user has valid session no need to authenticate the user again.

Store the token in localstorage and once user logout remove thr token from localstorage.

Firebase: automatically stores the token in localstorage for us once the user is authenticated.

Want to learn about the Token which is exchanged? 
The following page should be helpful: https://jwt.io/ - specifically, the introduction: https://jwt.io/introduction/

SignUp Html:
<div class="row">
  <div class="col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2">
    <form (ngSubmit)="onSignUp(f)" #f="ngForm">
      <div class="form-group">
        <label for="email">Email</label>
        <input type="text" id="email" name="email" ngModel class="form-control">
      </div>

      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" name="password" ngModel class="form-control">
      </div>

      <button type="submit" class="btn btn-primary">Sign Up</button>
    </form>
  </div>
</div>

SignUpComponent:
export class SignupComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSignUp(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signupUser(email, password);
  }

}

AuthService:
signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(
        error => console.log(error)
      );
  }

SignIn Html:
<div class="row">
  <div class="col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2">
    <form (ngSubmit)="onSignIn(f)" #f="ngForm">
      <div class="form-group">
        <label for="email">Email</label>
        <input type="text" id="email" name="email" ngModel class="form-control">
      </div>

      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" name="password" ngModel class="form-control">
      </div>

      <button type="submit" class="btn btn-primary">Sign In</button>
    </form>
  </div>
</div>

SignInComponent:
export class SignComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSignIn(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signinUser(email, password);
  }

}

AuthService:
token: string;

constructor(private router: Router, private route: ActivatedRoute) { }

signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          this.router.navigate(["/recipes"]);
          firebase.auth().currentUser.getToken()
            .then(
              (tokenRec: string) => {
                this.token = tokenRec;
              }
            );
        }
      )
      .catch(
        error => console.log(error)
      );
  }

  getToken() {
    firebase.auth().currentUser.getToken().
    then(
      (tokenRec: string) => {
        this.token = tokenRec;
      }
    );
    return this.token;
  }

  logout() {
    firebase.auth().signOut();
    this.token = null;
    this.router.navigate(["/signin"]);
  }

  isAuthenticated() {
    return this.token != null;
  }

Module and Optimize Application:
--------------------------------
Common Module: The module that includes all the basic Angular directives like NgIf, NgForOf, ...



Tracker:
--------
infogainindiapvt	
admin1@#$%^
https://tracker-20aae.firebaseio.com/
