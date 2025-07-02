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
    text.innerHTML = "They don’t call me ThePrincessJ for no reason. Why be normal when you can be a princess? I not only embrace the title, but the responsibility to lead confidently, responsibly, and compassionately. Don’t be surprised to find a princess theme somewhere in my work.";

});

intTwo.addEventListener('click', function() {
    reset();
    intTwo.style.filter = "saturate(10)"
    imgIntTwo.style.display= "inline-block";
    // intTwo.style.width = "33%";
    header.innerHTML = "Debating";
    text.innerHTML = "Did I mention I love public speaking more than the average person? There is a reason my Middle School teacher suggested I become a lawyer. I love engaging debates. I'm a calm, calculated person when it comes to convincing others. I can’t say that I prefer to engage in heated arguments (because I don’t), but I love to dive into intellectual and philosophical conversations that deepen human understanding.";
});

intThree.addEventListener('click', function() {
    reset();
    intThree.style.filter = "saturate(10)"
    imgIntThree.style.display= "inline-block";
    // intThree.style.width = "33%";
    header.innerHTML = "Fav Foods";
    text.innerHTML = "Wanna collab project ideas over lunch? I'll enjoy eating (almost) anything as long as it's wrapped in a burrito. And every princess loves chili as a great meal any day. When it comes to desserts; ice-cream will always be on top, specifically Cookies'n Cream. My food preferences have little similarities, but I think it just shows my creativity.";
});

intFour.addEventListener('click', function() {
    reset();
    imgIntFour.style.display= "inline-block";
    //intFour.style.width = "33%";
    intFour.style.filter = "saturate(10)"
    header.innerHTML = "Activities";
    text.innerHTML = "You’d think you’d find me behind a computer all the time. My family’s motto is “work hard, play hard”. I love everything from rock climbing, swimming, water slides, mountain coasters, ziplining, ropes courses, laser tag, putt shack, theme parks, go-karting, and of course, butterfly palaces. I'm not very picky when it comes to having fun, I enjoy being active any time and all the time.";
});


/*When clicked, show that talent*/
meOne.addEventListener('click', function() {
    meHeader.innerHTML = "Programmer";
    meP.innerHTML = "When I was frustrated in my career path of fashion, I would often revert to coding to take my mind off the pressure. It was only a matter of time before I discovered my true love for code since I was so good at it.  It wasn’t long before someone else noticed, I won the gold medal at Luddy School of Informatics Computing and Engineering competition, along with a scholarship there. Months before that, I had my game, Cake Bake, featured with one hundred thousand people trying my game.";
    clearImages();
    pickRandom(meProgList);

});

meTwo.addEventListener('click', function() {
    meHeader.innerHTML = "Speaker";
    meP.innerHTML = "I never got the memo to be afraid of public speaking. Most of the time, I'm nervous after the actual presentation. This has helped me develop a deep love for presenting and public speaking. I have spoken at places like Poetry Out Loud, NAACP (in the presence of the Mayor), a lead role in the Golden Box play, and a SIMA Fashion Show. Hopefully one day I will have the chance to speak in front of thousands of people, but until then, I’ll keep speaking where I am.";
    clearImages();
    pickRandom(meSpeakList);
});

meThree.addEventListener('click', function() {
    meHeader.innerHTML = "Artist";
    meP.innerHTML = "When I was younger, I wanted to pursue a career in fashion and art. However, a wise teacher (Mr. Purvis), suggested I might have a successful career elsewhere (he suggested a lawyer). I have since found in my talents of game development that fashion and art compliment it well. I love drawing for fun on my own. Despite my skill level, I have had colorful art compliment most of my projects. You can find my art throughout this website.";
    clearImages();
    pickRandom(meArtList);
});


meFour.addEventListener('click', function() {
    meHeader.innerHTML = "Nerdy Birdie";
    meP.innerHTML = "I don't really consider myself to be a genius, but my 4.01 GPA speaks for me, and my perseverance has led to success. It doesn’t hurt that I’ve hardly had a teacher who didn't like me. I graduated, (Dean’s list, Phi Theta Kappa) with an Associate Degree in Cloud Computing two weeks before my high school graduation.";
    clearImages();
    pickRandom(meSmartList);
});




meFive.addEventListener('click', function() {
    meHeader.innerHTML = "Positive";
    meP.innerHTML = "Many times, I’m known for lighting the room. For those who get to know me, I'm very friendly, and it is very hard to find me with a frown on my face. I draw my fruitful supply from my relationship with the Lord, and it rubs off on others. My positive personality has won me two nominations for homecoming court, and one crown. I love a good team, and I work hard to make my teams shine.";
    clearImages();
    pickRandom(meJoyList);
});


//Images to be Shown with Interest

