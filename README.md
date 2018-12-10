# Redux Feedback Loop

### SETUP

Create your database and tables using the provided `data.sql` file. Start the server.

```
npm install
npm run server
```

Now that the server is running, open a new terminal tab with `cmd + t` and start the react client app.

```
npm run client
```

### FEATURES

There will be 4 views for the form:

- How are you feeling today?

![feeling](wireframes/page-one.png)

- How well are you understanding the content?

![understanding](wireframes/page-two.png)

- How well are you being supported?

![support](wireframes/page-three.png)

- Any comments you want to leave? (Not required)

![comments](wireframes/page-four.png)


### THE REVIEW COMPONENT

The review page will show the user entered responses for the survey. Required fields will have an asterik to notify the user what is missing from the survey.

### Incomplete, Submit button is disabled:

![comments](wireframes/review-component-inactive.png)

### Survey complete, Submit button is active:

![comments](wireframes/review-component-active.png)

### SUCCESS PAGE

The user will see the success page when the submit button is clicked. The survey responses are saved in the database. 

![understanding](wireframes/page-five.png)

### ADMIN SECTION

The route `/admin` will display the existing feedback submitted from the database. The user can delete existing feedback. 

![display feedback](wireframes/admin.png)

