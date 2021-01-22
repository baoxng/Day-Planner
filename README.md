# Day-Planner 📆

## Project Description

As a web developer I feel like I need to manage my time and having a day planner to track my activities would really help with that. Once the day planner is opened by a user, they can see the past, present and future plans/schedule that are displayed. Past is color-coded as gray, present is color-coded with red and future is color-coded with green. Users can then save a scheduled plan in the local storage and come back to it whenever they want.   

Here is a [link to the Day Planner](https://baoxng.github.io/Day-Planner/) 

---
## Installation 

Follow these links to `Download`, `Install` and `Link` the following tools in order to start developing your own day planner.

### Links
-  `Download` and `install` [Visual Studio Code](https://code.visualstudio.com/) to develop html, css, javascript, etc..
-  Go [GitHub](http://www.github.com) to get repository from client page.
-  Usage of [Google](http://www.google.com) for resource.
- Another really good resource besides Google is [W3Schools](https://www.w3schools.com/).
- Go to [YouTube](http://www.youtube.com) for video tutorials on "how to".
- Go to [Bootstrap](https://getbootstrap.com/) to get their cdn links for your own website.
- Go to [StackOverflow](https://stackoverflow.com/) to troubleshoot errors that may appear.
- Get [Moment](https://momentjs.com/) to get updated dates and times. Be sure to read docs carefully.
- Get [JQuery](https://jquery.com/) to get simplified codes to traverse html document.

---
## Development

In the beginning of my developement, I wanted to get the current time and date for the day planner to work. I started to console log my moment into my javascript file and found out that it was not pulling up the dates. I was researching on stackoverflow to see what could be the problem. After a lot of trial and errors, I found a solution and that was "placement". I had to put the cdn links of my moment in both the head and body of my html file. My script.js file could only be linked after my jquery and moment cdn. 

After getting my moment to work on my js file I was able to go ahead and add some columns for the day planner. This consists of the time, the input for users and the save buttons for each. I had an idea of adding columns div to the html page without any class, then I scratched that and decided to just add the classes with javascript. Realizing that I was getting lost in my own codes, I decided to rework it and condense it to what I have now. 

Most of the process that I went through was console logging and checking to see if functions were working. Other time it was me staring at the screen figuring out how to make certain things work, like the colors for past, present and future. 

<b> Here is the reference to help format dates and time with moments </b>
![momentref.PNG](/images/momentref.PNG)

<b>I just wanted the hour and found this really helpful</b>
![momentref1.PNG](/images/momentref1.PNG)

<b>I had some research with the parent and siblings and I came with this resource from stack over flow. I looked over W3schools for additional reference. </b>
![stackoverflow1.PNG](/images/stackoverflow1.PNG)

<b> Look into the day planner </b>
![dayplanner.PNG](/images/dayplanner.PNG)