/*This code is used mainly for the "About-Me" html file*/

/*Variables*/
let me = document.querySelector(".me-img");
let filterOpacity = "opacity(100%)";
let filterContrast = "contrast(100%)";
let meOp = 0;
let meOpDone = false;
let meCon = 100;
let running = false;

/*Variables relating to the puzzle pieces and header*/
let meOne = document.querySelector(".me-programmer");
let meTwo = document.querySelector(".me-speaker");
let meThree = document.querySelector(".me-artist");
let meFour = document.querySelector(".me-nerd");
let meFive = document.querySelector(".me-positive");
let meHeader = document.querySelector(".bio-header");
let meP = document.querySelector(".bio-p");

/*Variables relating to the images for the puzzle pieces*/
let meProgOne = document.querySelector(".me-prog-1");
let meProgTwo = document.querySelector(".me-prog-2");
let meProgThree = document.querySelector(".me-prog-3");
let meSmartOne = document.querySelector(".me-smart-1");
let meSmartTwo = document.querySelector(".me-smart-2");
let meSmartThree = document.querySelector(".me-smart-3");
const meSpeakOne = document.querySelector(".me-speak-1");
let meSpeakTwo = document.querySelector(".me-speak-2");
let meSpeakThree = document.querySelector(".me-speak-3");
let meArtOne = document.querySelector(".me-art-1");
let meArtTwo = document.querySelector(".me-art-2");
let meArtThree = document.querySelector(".me-art-3");
let meJoyOne = document.querySelector(".me-joy-1");
let meJoyTwo = document.querySelector(".me-joy-2");
let meJoyThree = document.querySelector(".me-joy-3");

let meProgList = [meProgOne, meProgTwo, meProgThree];
let meSmartList = [meSmartOne, meSmartTwo, meSmartThree];
let meSpeakList = [meSpeakOne, meSpeakTwo, meSpeakThree];
let meArtList = [meArtOne, meArtTwo, meArtThree];
let meJoyList = [meJoyOne, meJoyTwo, meJoyThree];

let intOne = document.querySelector(".int-1");
let intTwo = document.querySelector(".int-2");
let intThree = document.querySelector(".int-3");
let intFour = document.querySelector(".int-4");
let header = document.querySelector(".header-int");
let text = document.querySelector(".text-int");

let imgIntOne = document.querySelector(".img-int-1");
let imgIntTwo = document.querySelector(".img-int-2");
let imgIntThree = document.querySelector(".img-int-3");
let imgIntFour = document.querySelector(".img-int-4");



/*Makes the Image Appear Slowly*/
function appear(slope, end){ 
    const countInterval = setInterval(actionOp,10, slope, end);

    function actionOp(num, stop){
        //console.log("opacity("+meOp+"%"+")" + filterContrast);
        meOp = meOp + num;
        me.style.filter = "opacity("+meOp+"%"+")" + filterContrast;

        if (stop > 0){
            if(meOp >= stop){
            meOpDone = true;
            clearInterval(countInterval);        
            };
        }
        else{
            if(meOp <= stop){
            meOpDone = true;
            clearInterval(countInterval);
            };
}}}

/* Makes the Image turn white slowly*/
function whiten(slope, end){ 
    const countInterval = setInterval(actionCon,10, slope, end);
    
    function actionCon(num, stop){
        if (meOpDone){
        //console.log(filterOpacity + "contrast("+meCon+"%"+")");
        meCon = meCon + num;
        me.style.filter = filterOpacity + "contrast("+meCon+"%"+")";

        if (stop > 0){
            if(meCon >= stop){
            meOpDone = true;
            clearInterval(countInterval);        
            };
        }
        else{
            if(meCon <= stop){
            meOpDone = true;
            getPieces();
            clearInterval(countInterval);
            };
        }
}}}

/* Shows all puzzle pieces*/
function getPieces(){
    meOne.style.display = "inline-block";
    meTwo.style.display = "inline-block";
    meThree.style.display = "inline-block";
    meFour.style.display = "inline-block";
    meFive.style.display = "inline-block";
    document.querySelector(".img-cover").style.display = "block";
    
}

function clearImages(){
    meSmartOne.style.display = "none";
    meSmartTwo.style.display = "none";
    meSmartThree.style.display = "none";
    meSpeakOne.style.display = "none";
    meSpeakOne.pause();
    meSpeakTwo.style.display = "none";
    meSpeakThree.style.display = "none";
    meProgOne.style.display = "none";
    meProgTwo.style.display = "none";
    meProgThree.style.display = "none";
    meArtOne.style.display = "none";
    meArtTwo.style.display = "none";
    meArtThree.style.display = "none";
    meJoyOne.style.display = "none";
    meJoyTwo.style.display = "none";
    meJoyThree.style.display = "none";
}

function pickRandom(list){
    let randomImg = (Math.floor((Math.random() * 3)));
    console.log(randomImg);
    console.log(list[randomImg]);
    if (meSpeakOne != list[randomImg] ){
        list[randomImg].style.display = "inline-block";
    }else{
        list[randomImg].style.display = "inline-block";
        list[randomImg].play();
    }
}

/*Start when scroll far enough*/
window.addEventListener('scroll', function() {
    const scrollPos = window.scrollY;
    if (scrollPos > 38 && running === false){
        running = true;
        appear(1, 100);
        whiten(-1, 0);
    }
});

/*Resets all interest buttons and images*/
function reset(){
    /*
    intOne.style.width = "35%";
    intTwo.style.width = "35%";
    intThree.style.width = "35%";
    intFour.style.width = "35%";
    */
   intOne.style.filter = "";
   intTwo.style.filter = "";
   intThree.style.filter = "";
   intFour.style.filter = "";

   imgIntOne.style.display="none";
   imgIntTwo.style.display="none";
   imgIntThree.style.display="none";
   imgIntFour.style.display="none";





}

/*When clicked, show that interest and reset the rest*/
intOne.addEventListener('click', function() {
    reset();
    intOne.style.filter = "saturate(10)";
    imgIntOne.style.display= "inline-block";
    // intOne.style.width = "33%";
    header.innerHTML = "Princess";
    text.innerHTML = "I prefer princess over queen. From a young age, Iv'e always been obsessed with princesses. I like to see myself as one, not as a  spoiled selfless person, but as a compassionate and confident young lady.";

});

intTwo.addEventListener('click', function() {
    reset();
    intTwo.style.filter = "saturate(10)"
    imgIntTwo.style.display= "inline-block";
    // intTwo.style.width = "33%";
    header.innerHTML = "Debating";
    text.innerHTML = "I love public speaking more than the average person, which lead to the love of debating. I'm a calm, but calculated person when it comes to convincing another person. I don't like to engage in heated debates, but I love to dive into intellectual and philosophical debates.";
});

intThree.addEventListener('click', function() {
    reset();
    intThree.style.filter = "saturate(10)"
    imgIntThree.style.display= "inline-block";
    // intThree.style.width = "33%";
    header.innerHTML = "Favorite Foods";
    text.innerHTML = "I'll enjoy eating anything as long as it's wrapped in a burrito, and chilli is a great meal to eat any day. When it comes to desserts, icecream will always be on top, specifically Cookies'n Cream. My food preferences has no similarities, but I think it just shows my creativity";
});

intFour.addEventListener('click', function() {
    reset();
    imgIntFour.style.display= "inline-block";
    //intFour.style.width = "33%";
    intFour.style.filter = "saturate(10)"
    header.innerHTML = "Activities";
    text.innerHTML = "I'm not very picky when it comes to having fun, but nothing excites me more than swimming and rock climbing. People don't usually imagine a computer person to enjoy moving around so much, but I enjoy being active any time and all the time.";
});


/*When clicked, show that talent*/
meOne.addEventListener('click', function() {
    meHeader.innerHTML = "Programmer";
    meP.innerHTML = "From an early age, I have loved to program. I used to aspire to be a fashion designer, but would always get distracted with coding. When I reliazed my true calling, it didn't take long for me to get good at what I love. I will use my talents to be a video game developer!";
    clearImages();
    pickRandom(meProgList);

});

meTwo.addEventListener('click', function() {
    meHeader.innerHTML = "Speaker";
    meP.innerHTML = "I never really developed the fear of public speaking. Most of the time, I'm nervous after the actual presentation. This is why I have a deep love for presenting and public speaking. I have spoken at places like Poetry Out Loud, NAACP (where the mayor was), and a SIDA Fashion Show. Hopefuly one day I will have the chance to speak in front of 1000 people, but until then I will keep up the good work.";
    clearImages();
    pickRandom(meSpeakList);
});

meThree.addEventListener('click', function() {
    meHeader.innerHTML = "Artist";
    meP.innerHTML = "I have never been really good at art, but it doesn't mean I don't love it. I love drawing for fun on my own time, and I believe this is what my passion for fashion designing really came from. Despite my skill level, I have had colorful art compliment many of my projects";
    clearImages();
    pickRandom(meArtList);
});


meFour.addEventListener('click', function() {
    meHeader.innerHTML = "Nerd";
    meP.innerHTML = "I don't really consider myself to be a geninus, but my 4.01 GPA speaks for me. This is most likely the result of my weird fascination with learning, sometimes when I'm off of school for to long, I start taking detailed notes on random things. Iv'e hardly ever had a teacher who didn't like me, and my perseverance in eduation has led to success";
    clearImages();
    pickRandom(meSmartList);
});




meFive.addEventListener('click', function() {
    meHeader.innerHTML = "Positive";
    meP.innerHTML = "Many times I i'm known for lighting the room up. If you get to know me, I'm very friendly, and it is very hard to see me with a frown on my face. I draw my fruitful supply from the Lord, and love to share it with others.";
    clearImages();
    pickRandom(meJoyList);
});


//Images to be Shown with Interest

