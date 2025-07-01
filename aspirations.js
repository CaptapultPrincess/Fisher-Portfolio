//Variables for the Stars
let starBox = document.querySelector(".star-box");
let starOne = document.querySelector(".star-1");
let starTwo = document.querySelector(".star-2");
let starThree = document.querySelector(".star-3");
let starFour = document.querySelector(".star-4");
let starFive = document.querySelector(".star-5");
let starSix = document.querySelector(".star-6");

//Variables for the Telescope
let telescope = document.querySelector(".telescope");
let teleBtn = document.querySelector(".telescope-btn");
let teleHead= document.querySelector(".telescope-head")
let jLogo = document.querySelector(".j-logo")
arrow = document.querySelector(".down-arw")

//Variables for the text box
let starBoxHead = document.querySelector(".star-box-head");
let starBoxp = document.querySelector(".star-box-p");

//Starter code
telescope.style.display = "none";


//Tracks the mouseX and mouseY of the mouse when it moves
document.addEventListener('mousemove', function(){
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    let telescopeX = mouseX - 3200;
    let telescopeY = mouseY - 2100;
    telescope.style.marginLeft = `${telescopeX}px`;
    telescope.style.marginTop = `${telescopeY}px`;

});

//For each star, this displays a certain text when the mouse hovers over
starOne.addEventListener('mouseover', function() {
    starBoxHead.innerHTML = "A Place in Time for Me"
    starBoxp.innerHTML =  "In video games, there are lots of fun characters that players can enjoy playing as. What makes a game really fun is having a character who looks and acts like you. This connection can fully emerse you in a game. But not everyone gets this expierance, I've  spent hours searching for a game with someone of my color, and even though there are  really cool black girl fighters, I don't want to constantly imagine myself as a violent and moody character. This is why I want to create games for children of color and other diversities to play as. I want to create a place in time for me."
    starBox.style.opacity = "1";
});

starTwo.addEventListener('mouseover', function() {
    starBoxHead.innerHTML = "Heaven on Earth"
    starBoxp.innerHTML =  "If you known me long enough, you've probably heard me say I'm a follower of Jesus Christ. For a while, I tried to find games for christians. Sadly, majority of the few christian games are violent and fight-based. Even though this works well with teens who enjoy fighting games, there are hardly any games for people who enjoy a more story-based games, or games for little kids. I don't want to share the gospel in a way that is forceful, but in a way that tells the true emotions, scenarios, and struggles that come with being a follower of Christ. "
    starBox.style.opacity = "1";
});

starThree.addEventListener('mouseover', function() {
    starBoxHead.innerHTML = "Family is Forever"
    starBoxp.innerHTML =  "Before I got into coding, I wanted to be a fashion designer. I had to do a career's project and research my own career, fashion designing. At the end of the project, I left fashion designing for one main reason, movement. Being a fashion designer required me to move around a lot. It collided with my dream to settle down and build a home with a family. I didn't want my future kids to have to move continiously, or worse, hardly see me with all my business trips. My family is as important to me as work."
    starBox.style.opacity = "1";
});

starFour.addEventListener('mouseover', function() {
    starBoxHead.innerHTML = "A Million Dreams"
    starBoxp.innerHTML =  "Looking at a world filled with careers, its  hard to choose just one. At some point in time, I wanted to be a movie director, artist, chess champion, comic artist, laywer, and fashion designer. None of these dreams made it very far, but they are still a part of me. Every once in a while, you can see one my old dreams slip out, and other times I use them for my current dream: Indie Video Game Developer. These dreams arn't complete, but they arn't just a raisin in the sun either. ."
    starBox.style.opacity = "1";
});

starFive.addEventListener('mouseover', function() {
    starBoxHead.innerHTML = "The Dream Team"
    starBoxp.innerHTML =  "My dream is to be an indie game developer, but even an independent developer needs help. That is why I want to find the dream team, people who are passionate like me, but have different skills. I would need programmers, artist, musicians to come together with a common goal, and work to make great video games"
    starBox.style.opacity = "1";
});

starSix.addEventListener('mouseover', function() {
    starBoxHead.innerHTML = "A Fictional Fantasy"
    starBoxp.innerHTML =  "I want to be an Indie Game Developer. I want to make video games, that a lot of people can enjoy. I don't just want it to be popular, I want my games to have an impact, to have stories, lore, twist, happiness, sadness, and more. I want my video games to be an expierance."
    starBox.style.opacity = "1";
});

//For each star, this hides the text box when the mouse isn't hovering over
starOne.addEventListener('mouseout', function() {
    starBox.style.opacity = "0";
});

starTwo.addEventListener('mouseout', function() {
    starBox.style.opacity = "0";
});

starThree.addEventListener('mouseout', function() {
    starBox.style.opacity = "0";
});

starFour.addEventListener('mouseout', function() {
    starBox.style.opacity = "0";
});

starFive.addEventListener('mouseout', function() {
    starBox.style.opacity = "0";
});

starSix.addEventListener('mouseout', function() {
    starBox.style.opacity = "0";
});



//Shows and Hides the telescope
teleBtn.addEventListener('click', function() 
{
    console.log(telescope.style.display)
    if(telescope.style.display === "none"){
        teleHead.innerHTML = "Hide Telescope";
        telescope.style.display = "inline-block";
        jLogo.style.display = "inline-block"
        telescope.style.zIndex = "1";
        arrow.style.display = "none";
        navbar.style.display = "none";
        
    }else{
        teleHead.innerHTML = "Show Telescope";
        telescope.style.display = "none";
        jLogo.style.display = "none";
        telescope.style.zIndex = "-5";
        arrow.style.display = "block";
    }
});

