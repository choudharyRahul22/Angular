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

In index.html we have <app-root></app-root> instead of <ng-view></ng-view>

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



 
