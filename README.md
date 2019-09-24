# hack-a-thing-1-sean-hack1

## Description
Having never worked on any web-related applications and having very little experience with any front-end work, I wanted to try my hand at developing a simple web application. My end product is a tool that allows the user to search one or more cities and graph their weather together for comparison. I used Node.js for for my development framework. At the beginning of this project, I also had zero experiences with JavaScript or HTML so I originally had what I came to realize were wildly unrealistic given my background. I tried at first to build a website that would use the Google Calendar API to export events and visualize in various ways where the user's time was going. Gradually I scaled down the scope of what I wanted to build as I ran into obstacle after obstacle that I was pretty sure I wouldn't be able to resolve within the time I had for this project. Although I wish I had better results given the amount of time I spent on the project, I think it was a good opportunity to do something I had never done before and I ended up learning a lot. 

## What I Learned
I think the biggest takeaway I got from this project was to have realistic ideas of what you can accomplish. While I think my original idea was a good one and I think it would be worth working on more, I should have had more realistic expectations for myself given my limited experience with the frameworks I was setting out to use. If I had started with the goal of building what I ended up building, I think it could have taken half the time it took in the end. For example, I struggled with the Google API for a few hours, partly because I had almost no experience with working with APIs or authentication. I think it also would have been advantageous to work with a partner, as I would imagine that someone else, even if they didn't have more experience than me, might have different perspectives on how to overcome the obstacles I ran into. All the same, I feel like I've come away from this project with a decent understanding of the stack I worked with as well as a new perspective on and appreciation for front-end development. 

## What Didn't Work 
The most important obstacle/thing that didn't work was the Google Calendar API. I ran into issues with authentication roles and despite doing extensive research and following multiple tutorials, I couldn't figure out how to set up the authentication role correctly. This was the deciding factor that led me to rethink my plans for the project. Another thing that didn't work that set me back with the absence of access to the DOM in Node.js. I didn't originally understand how to modify the HTML of my webpage, but after doing some more research and consulting tutorials I realized that embedded JavaScript was what I needed to update the UI. It also took me a while to find a graphing visualization library that would work with Node.js, as many of the recommended ones online seem to not be compatible. One part of my project that still doesn't work quite right is the saving of the PNG of the weather data graph. I used a synchronous function for saving the file, yet as far as I can tell it runs asynchronously. This results in the new PNG for a new query not displaying until the page is refreshed, which to me is a fairly major flaw with my project. I researched a number of ways to address this issue, but couldn't find a workable solution within the time I had to work on the project. 

## Tutorials/Links Consulted 
- https://codeburst.io/build-a-weather-website-in-30-minutes-with-node-js-express-openweather-a317f904897b
- https://codeburst.io/build-a-simple-weather-app-with-node-js-in-just-16-lines-of-code-32261690901d
- https://codeburst.io/three-awesome-courses-for-learning-node-js-d7f761437101
- https://www.taniarascia.com/how-to-connect-to-an-api-with-javascript/
- https://medium.com/@pablo127/google-api-authentication-with-oauth-2-on-the-example-of-gmail-a103c897fd98
- https://reactjs.org/tutorial/tutorial.html
- https://codepen.io/gaearon/pen/oWWQNa
- https://developers.google.com/calendar/v3/reference/events
- https://www.tutorialsteacher.com/d3js/web-standards
- https://sweetcode.io/nodejs-highcharts-sweetcode/
- http://jsfiddle.net/highcharts/VqruM/


