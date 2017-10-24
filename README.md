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
