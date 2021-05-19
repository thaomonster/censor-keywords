---
# Censor Keyword
###### Do you have a document that needs to be confidental? Need to censor out a word or phrase? 
---
## Table of Contents
* [Introduction](#introduction)
* [Features](#features)
* [Technologies](#technologies)
* [Setup](#setup)
* [Authors](#authors)

## Introduction
The primary goal of Censor Keyword is to have the user be able to copy and pasted a word/google doc in the the textarea, then enter the one keyword or phrase and click on the submit button. There result will show in the empty box with the keyword or phrase XXXX out. 

#### Motivation
The motivation behind this project's creation was to build an application to help the users censor out a keyword or phrase while learning a new framework Angular and new language TypeScript

---
## Features
* [Inputs](#inputs)
* [Submit Button](#submit-button)
* [Responsiveness](#responsiveness)

#### Inputs
Upon page load a user is able to enter one keyword or phrase to be censored out and copy and paste their document into the textarea input. Once both input fields have their information needed the submit button will then appear to be clickable.

<p align = "center">
<img src="https://media.giphy.com/media/1iQSltg2clYDqc6FC1/giphy.gif">
</p>

#### Submit Button
Once a user has enter both fields the submit button will be activated and a user is now able to click on the submit. 

<details>
  <summary>**Under the Hood**</summary>
  When the user clicks on the submit button, an onSubmit handler is triggered. Using a conditional that says if the document includes the keyword or phrase I want the result to replace all with `XXXX`. 
</details> 

<p align = "center">
<img src="https://media.giphy.com/media/c4y9C9tdIJvl04w989/giphy.gif">
</p>

#### Responsiveness
This application can also be used on different screen sizes.

<p align = "center">
<img src="https://media.giphy.com/media/Km7PE9wWSOu8gU56Zo/giphy.gif">
</p>

---
## Technologies
 - Angular
 - ES6 JavaScript/TypeScript
 - SCSS 
 - Lighthouse Accessibility
 - Git workflow using GitHub Issues and [Project Kanban Board](https://github.com/thaomonster/censor-keywords/projects/1)
 - Whiteboarding and Wireframing on [Miro](https://miro.com/app/board/o9J_lER7XNo=/)
 
## Deployment/Setup

### Setup
In order to deploy this site locally, a developer will have to run a local server.

  1. Clone (or fork and then clone) this repo with  `git@github.com:thaomonster/censor-keywords.git [what you want to name the repo]`
  2. Change into the directory and run `ng serve` to start a local server.
  3. Run `http://localhost:4200/` in your browser.
  4. Enter `control + c` in your terminal to stop the server at any time.

### Continuous Improvement/Future Improvements
  * Implement and be able to use uploaded documents
  * Implement and be able to add more the one keyword of phrase to censor.

## How to Contribute
If you are interested in contributing please:
- clone down this repo: `git@github.com:thaomonster/censor-keywords.git`
- create a new branch: `git checkout -b your-initials/feature/feature-name`
- contribute as you like
- in the terminal, push the branch upstream
- create a pull request via github
- wait for our reply

## Authors
<table>
  <table>
    <tr>
      <td> Thao Ma <a href="https://github.com/thaomonster">GH</td>
  </tr>
 <td><img src="https://avatars.githubusercontent.com/u/67611512?v=4" alt="Ms. Turtle"
 width="150" height="auto" /></td>
</table>
