# Angular 8 Starter Kit

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.12.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Install Angular Material

ng add @angular/material

## Install Flex-layout

npm i -s @angular/flex-layout @angular/cdk

## Deploy to Firebase
1. Install Firebase CLI
  npm install -g firebase-tools

2. Initialise your project
  Sign in to Google -- >firebase login
  Initiate your project -->firebase init

3. Answers to Firebase CLI questions:
  
  --: Which Firebase CLI features do you want to set up for this folder?
     Press space to select required feature then enters to confirm your choices.
  
  --: Select a default Firebase project for this directory:
    Select whichever app you have created.
  
  --: What file should be used for Database Rules? (database.rules.json)
    Press enter to continue with database.rules.json
  
  --: What do you want to use as your public directory? (public) 
    dist/your-project-name

4. Create Production Build using the Ahead-of-Time (AOT) Compilation
  ng build --prod --aot

5. Deploy to Firebase Hosting -->firebase deploy
