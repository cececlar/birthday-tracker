# birthday-tracker

This app is a simple birthday tracker written using the MERN stack. Users should be able to view a list of all birthdays created, add a birthday to the list, edit a birthday from the list, and delete a birthday from the list. 

To begin working with this repo: 

```
git clone <repo-url> 
cd birthday-tracker
yarn 
cd client 
yarn 
cd .. 
touch .env && touch .gitignore
```

Add your `node_modules` directory and `.env` file to `.gitignore`.

Update your `.env` file so that it contains your unique MongoDB Atlas URI. 

``` 
yarn dev
```

**Student Instructions** 
- You are creating a simple app that will help Wyncode keep track of the birthdays of its students and staff using the MERN stack.
- Your app will need to keep track of four pieces of data: username (string), cohort number (number), month (number), and date (number). 
- You should create a model and schema for your birthday object. 
- You should create the API routes that you will need for your app in a `birthdays.js` file within a routes directory
- Your app should have a navbar for client-side navigation between components.
- Users should be able to view a completed list of all birthdays at Wyncode Academy. This should be the default view of your app. The completed list of all birthdays should come from a MongoDB database that you connect to using Mongoose and MongoDB Atlas.
- A link on your navbar should take users to a different component that contains a form for users to create a new birthday log. 
- When a user creates a new birthday log, it should be saved to your database, and your user should be taken back to the list of all birthdays. This should also force an automatic page reload so that the new birthday that was created also displays. 
- Each birthday log should contain an edit link and a delete link. 
- Clicking on the edit link should take you to a component that contains a form with the data about the birthday that you are editing. When you click submit, you should be taken back to the list of all birthdays. The birthday whose data you edited should be udpated to reflect the changes you made. 
- Clicking the delete link should delete the birthday from your database. You should remain on the list of all birthdays, and the birthday whose delete link you clicked should no longer appear there. 
