Once you install NodeJs run below command to install Angular CLI:
-----------------------------------------------------------------
"npm install -g @angular/cli"

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
"ng serve"

Add Bootstrap to Angular:
-------------------------
npm install --save bootstrap

Add Bootstrap to Angular:
-------------------------
run "npm install --save bootstrap"
Go to angular-cli.json , styles which refer to style.css which is global style , now add below 
   "styles": [
        "../node_modules/bootstrap/dist/css/bootstrap.css",
        "styles.css"
      ],
Stop ng-serve (ctrl + c) and restart it.
To check weather bootstrap is added to our project we will see the html in developer tool under Elements , in head it will now have link to bootstrap

Create Component using CLI:
---------------------------
ng g c component-name