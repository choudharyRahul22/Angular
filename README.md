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
Note: Project we import for component directive .....need to stop and start again to see the changes.

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
Here we use samll project where we have:
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





