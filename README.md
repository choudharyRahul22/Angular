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







 
