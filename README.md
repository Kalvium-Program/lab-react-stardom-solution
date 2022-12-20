![Image description](https://i1.faceprep.in/ProGrad/prograd-logo.png)

# Kalvium Lab | REACT - STARDOM

## Learning Goals

In this exercise, the goal is ProStar in react:

- props and state,
- event handlers

## Getting started

1. Fork this repo
2. Clone this repo

Whenever you create a first significant change, you should make your first commit.

3. Follow these [guidelines to add, commit and push changes](https://github.com/FACEPrep-ProGrad/general-guidelines-labs-project-builders.git).

In the end of this document, you will find guidelines on how to submit the exercise.

## Instructions

### PROGRESSION 1 | Display 5 Star Celebrities

Let's take a look at the starter code.

Inside `resource` folder, you can find `prostar.json`, a JSON file with the details of the prostar. Import this file and **create an array of the 5 first star celebrities** to use as your initial state.

Display that array of 5 prostar in a `<table>` and display the `picture`, `name`, `popularity` and `action` of each star.
Under `action` column -> each row of the table should have a `delete button`.
Above the table, there should be three buttons: 
1. Random Addition
2. Sort by Name
3. Sort by Popularity

To import `prostar.json` in `App.js`, you can simply use:

```js
import prostar from './prostar.json'
```

At the end of this iteration, your application should look like this:

![Screenshot](https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/finaloutput-stardom.png)


### PROGRESSION 2 | Add New Random Prostars

In your application, create a "*Add Random Prostart* button so that every time you click on this button it adds a new random actor.

First randomly select a prostars from the larger `prostars` array. Then add that prostar the array of 5 in your state. Don't forget to `setState()` to cause React to re-render the app.

At the end of this iteration, your website will probably look like this:

![Screenshot](https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/randomstar-stardom.png)


### PROGRESSION 3 | Sort By Name

The producer asked you to add two new buttons to help them to sort their prostars. When you click on one of the buttons it should **sort the table by `name`** (alphabetically) and when click the other it should **sort by `popularity`** (highest first).

Don't forget to `setState()` after you sort!

This is what you may have at the end of this iteration:

![Screenshot](https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/sorting-name-stardom.png)

### PROGRESSION 4 | Sort By Popularity

The producer asked you to add two new buttons to help them to sort their prostars. When you click on one of the buttons it should **sort by `popularity`** (highest first).

Don't forget to `setState()` after you sort!

This is what you may have at the end of this iteration:

![Screenshot](https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/sorting-pop-stardom.png)

### Bonus | Remove Prostars

The producer also would like to remove some of their prostars. Implement a "*Delete*" button on each row of your `<table>` that will let the user remove the contact they clicked.

When they click, you should get the index of the array of that actor and use it to remove the contact from the array. Don't forget to `setState()` after you remove the prostars!

At the end of this iteration, your web page may look like this after playing a little bit with the "*Delete*" buttons.
![](https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/delete-stardom.png)

![](https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/alert-stardom.png)
## Summary

If you managed to do it, good job! :trophy:

We are proud of you!

Happy Coding Kalvium ❤️!

