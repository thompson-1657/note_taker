# Note Taker
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description
---
The Note Taker application is an application that allows the user to create and save important notes and tasks as well as delete them when they are completed or no longer needed.

Note taker is a clean and easy to use website that allows the user to keep track of and organize their important information. The information will persist in the application until the user decides to delete it. This way large loads of information can be stored and tracked with ease.

## Table of Contents
---
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Technologies](#technologies)
* [License](#license)
* [Questions](#questions)
        
## Installation
---
To install the note taker the user can start by cloning the application from the repository onto their local machine
```
git clone https://github.com/thompson-1657/note_taker.git
```
 Once cloned the user can run 
```
npm install
```
in the terminal to install the package.json and the node.js modules [Express](https://expressjs.com/) and [uuidv1](https://www.npmjs.com/package/uuidv1).  After the dependencies are installed the user can run 
```
npx nodemon server
```
to run the server and connect to the application through
```
http://localhost:3000
```
on the user's preferred browser.

This application is also deployed live for your use on [Heroku]()!
        
## Usage
---

![recording](https://user-images.githubusercontent.com/71091515/106697972-7745bb80-65a5-11eb-8b9e-e1c949207fb2.gif)

To use the application simply click on the 
```
Get Started
```
button on the home page. To create a note the user may click on the input area labeled 
```
Note Title
```
and add whatever they would like their note to be called. By pressing tab or clicking on the input labeled
```
Note Text
```
the user can input the body of the new note. Once the note is filled out to the user's satisfaction they are able to click on this icon

<img width="67" alt="Screen Shot 2021-02-02 at 10 03 10 PM" src="https://user-images.githubusercontent.com/71091515/106696569-a0188180-65a2-11eb-87ad-3b28eb0a7426.png">

at the top right to save the new note. 

The newly saved note title will appear on the left-hand side of the application where the user can easily toggle between the saved notes to acquire the information they need.

<img width="292" alt="Screen Shot 2021-02-02 at 10 08 44 PM" src="https://user-images.githubusercontent.com/71091515/106696930-5e3c0b00-65a3-11eb-91c8-d805d9845056.png">

Clicking on any note title will retrieve the saved contents of the note.

<img width="292" alt="Screen Shot 2021-02-02 at 10 08 44 PM" src="https://user-images.githubusercontent.com/71091515/106697767-10c09d80-65a5-11eb-9dcc-bec151207af1.png">

When the user is finished with a note or it is no longer useful they can simply click this icon

<img width="45" alt="Screen Shot 2021-02-02 at 10 11 59 PM" src="https://user-images.githubusercontent.com/71091515/106697929-66954580-65a5-11eb-94b7-2e8d09d851d6.png">

to delete the note from their list of saved notes.



## Technologies
---
* HTML5
* CSS3
* Bootstrap
* jQuery
* Node.js
* Node.js module Express
* Heroku
        
## License
---
[MIT License](LICENSE)
        
## Questions
---
If you have any questions regarding the functionality or use of this application feel free to contact me via the information below.

GitHub: [thompson-1657](http://github.com/thompson-1657)

Email: thompson.1657@gmail.com