## HOW TO START PROJECT 

1. Clone the project from github.
2. npm install or yarn add to add node_modules
3. use scripts to start project on localhost 
4. npm or yarn start 
5. Add .env.local file in src folder
6. Register app at https://github.com/settings/apps/new
7. This is necessary for our API calls to not run out of calls to GITHUB API because it will be rejected


## Available Scripts

"start": "react-scripts start",
"build": "react-scripts build",
"test": "react-scripts test",
"eject": "react-scripts eject"


## Considerations for upgrading the app 

1.For upgrading the app first step will be to use some state managment system - maybe Redux or Zustand. 
  This will clear up the code, and it will be easier to upgrade app in the future. 

2. Of the adding features useful would be to add favorite page where we can add our favorite git repos or git profiles. This would be accomplished with 
   star system where we press star on userPreview component and add our desired profile to favorites page.

3. Second upgrading regarding user features should be some history tab that will show last 30 searches for user profiles. 

4. If we expect mobile users this app should be upgraded to be mobile friendly. This is lower on priority list because searching, cloning or general git repo options aren't 
   generaly used on mobile devices. 


## CODE USED IN APP

   

   