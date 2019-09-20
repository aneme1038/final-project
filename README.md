#Wed-Ly

##About
Wed-ly is a basic application produced and created by Aaron Neme for the sole purpose of completing the necessary requirements for the General Assembly SEI Program. This final project of the Immersive requires the individual to produce a working application written using a language or framework not previously taught in the immersive.

##Technical
Wed-ly is designed using a new framework called Vue. It is a framework rapidly growing in popularity. Wed-ly is mainly built using the following dependancies and technologies:

-Express
-NodeJS
-Mongoose
-ServeStatic
-Path
-Cors
-Body-Parser
-VueCLI
-VueJS
-Javascript
-MongoDB

##Functionality
Wed-ly's functionality is strictly MVP and is technically still under development to be full CRUD. The application currently can create, read, and delete, but not update. Due to time constraints and issues with deployment, the application in its presented state as a project is lacking the update functionality however the development of the update is well on its way to being completed and working.

##User Stories
A user should be able to do the following:
1. View a generated list of tasks
2. Click a checkbox that puts a line through the specific task the checkbox is located next to
3. Create a new task by filling out the form near the top of the page and adding it. Currently requires a refresh of the page to view the changes.
4. Delete any task in the list by clicking the 'X' button. Currently requries a refresh of the page to view the changes.

##Challenges
The biggest challenges surrounding this application was in learning a new language framework in Vue. Vue is easy to setup, more difficult to understand. It is considered to be a cross between Angular and React if you have ever used both frameworks. Vue essentially attempts to simplify or streamline the ability to render things on the FrontEnd, which is what VueJS is, a frontend framework. Vue's construction starts to get challenging when it comes to file organization and deployment. Beyond that, coding in vue is relatively simplistic and is fairly easy to tackle methods, components, and props, as well as produce styling and html all in the same file. The challenge is in making things communicate with each other and properly rendering. The challenge also comes in deployment, which took the better part of a day and a half in completing. When setting up Vue for the first time, one must take extra care and really read and understand all the steps and different methods of creating a Vue application. Furthermore, the application when it comes to deployment (depending on where you are deploying it) depends on potentially installing specific dependancies, editing your package.json, or adding extra code or files in order to properly get your application deployed. This can take awhile if you are new to coding and vue, which I was.

##Additional Features
Future features for this application that were planned in lieu of having extra time or lots of time available would have been adding menu options, authorization (login, logout), relational database, wedding surveys, and menu options for different displays.

##Live application
Wed-ly can be visited in its current deployed state at: https://wed-ly.herokuapp.com/
