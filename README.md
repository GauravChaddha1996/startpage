# Startpage
![](https://github.com/GauravChaddha1996/startpage/blob/master/screenshots/screenshot1.png)
My custom startpage which acts as the home for my browser. It is served by a local http server coded in python and starts as a startup application on my Ubuntu installation. The HTML lives in the startpage.html, css in main.css while logic resides in app.js. 

| Screenshots |  |
|----------|----------|
| <img src="https://github.com/GauravChaddha1996/startpage/blob/master/screenshots/screenshot0.png"> |                           <img src="https://github.com/GauravChaddha1996/startpage/blob/master/screenshots/screenshot2.png"> |
| <img src="https://github.com/GauravChaddha1996/startpage/blob/master/screenshots/screenshot3.png"> |                           <img src="https://github.com/GauravChaddha1996/startpage/blob/master/screenshots/screenshot4.png"> |





**config.json** holds the configuration data about colors and links. 
Javascript is responsible for extracting the variables from config.json and setting those properties to the css to keep it clean. I've tried my best to make HTML only define the strucuture, css style the elements and let javascript hold the logic of clicking and supplying variables and config to HTML and CSS.
The background of the page is rotating randomly between the images present in the images folder. 

### Story
This project was made as a part of my drive to learn HTML, CSS and basic javascript. While coming from a java and android background I see stuff overlapping such as defining color variables and re-using them in CSS (Like colors.xml and style.xml in android). Semantic HTML is pretty similar to writing good XML layout designs for android apps. Anyone who wants to learn HTML, CSS and JS -  I would recommend these types of simple projects.   
