const spinButton = document.querySelector('.spin');
const refreshIcon = document.querySelector('.refresh-icon');
const reelImages1 = document.querySelectorAll('.reels > div:nth-child(1) > div > .reel-img');
const reelImages2 = document.querySelectorAll('.reels > div:nth-child(2) > div > .reel-img');
const reelImages3 = document.querySelectorAll('.reels > div:nth-child(3) > div > .reel-img');
const win = document.querySelector('.win');
const coin = document.querySelector('.coin-amount');
const star = document.querySelector('.star-amount');
const expandButton = document.querySelector('.expand-btn');
const reelWrapper = document.querySelector('.reels-wrapper');

// timelines
const firstTl = gsap.timeline({ paused: true});
const secondTl = gsap.timeline({ paused: true});
const thirdTl = gsap.timeline({paused: true});
const fourthTl = gsap.timeline({paused: true});
const fifthTl = gsap.timeline();

// a variable for previous coin amount
let previousC = 0;
// variables for previous random numbers
let j = 0;
let k = 0;
let l = 0;
// the random positions for reel-cards
let i = 0;
let m = 0;
let n = 0;
// an array for when we have three similar cards in a row
let q = [];
//an array for holding the 9 images we can see everytimes
let reelImages = [];
// determine if we won or lost
let state;
//win amount
win.innerHTML = 0; 
coin.innerHTML = 0;
star.innerHTML = 0;
// the width of progressive bar
let width = 0;
//stars
let s = 0;

// rotating the refresh-icon
firstTl.to('.refresh-icon', {
    duration: 5.5,
    rotation: 360,
    ease: Elastic.easeOut
});

spinButton.addEventListener('click', (e) => {

    ripples(e, firstTl, fifthTl);
});


spinButton.addEventListener('click', () => {
    //win amount
    win.innerHTML = 0; 

    // set the height of empty elements back to normal
    SetHeight1(j);

    //removing the blink animation from previous elements
   removeBlink(reelImages, state, q);

   // this variable determine whether we lost or won
   state = 'lost';
    // reel-card1 animation
    i = Math.floor(Math.random() * 18) + 2; 
    let images1 = [ reelImages1[i], reelImages1[i + 1], reelImages1[i + 2]];
    j = i;

    reelCardAnimation('.reels > div:nth-child(1) > div', i, images1, 0, 0);

   if(reelImages1[i + 1].id !== "empty"){
        secondTl.to('.reels > div:nth-child(1) > div', {
            duration: 3,
            y: -141.55 * (i - 0.28),
            ease: Elastic.easeOut
        });
   }else{
    secondTl.to('.reels > div:nth-child(1) > div', {
        duration: 3,
        y: -141.55 * i,
        ease: Elastic.easeOut
    });
   }

   // set the height of the empty elements back to normal
   SetHeight2(k);

    // reel-card2 animation
    let m = Math.floor(Math.random() * 18) + 2;
    let images2 = [ reelImages2[m], reelImages2[m + 1], reelImages2[m + 2]];
    k = m;

    reelCardAnimation('.reels > div:nth-child(2) > div', m, images2, 4.9, 3.9);

   if(reelImages2[m + 1].id !== "empty"){
        secondTl.to('.reels > div:nth-child(2) > div', {
            duration: 3,
            y: -141.55 * (m - 0.28),
            ease: Elastic.easeOut
        }, "-=2.9");
   }else{
    secondTl.to('.reels > div:nth-child(2) > div', {
        duration: 3,
        y: -141.55 * m,
        ease: Elastic.easeOut
    }, "-=2.9");
   }

   // set the height of empty elements back to normal 
   SetHeight3(l);

   // reel-card3 animation
   let n = Math.floor(Math.random() * 18) + 2; 
   let images3 = [ reelImages3[n], reelImages3[n + 1], reelImages3[n + 2]];
   l = n;
   // all the 9 images we can see
   reelImages = [ images1, images2, images3];
   // the coin we win every time
   let w = 0;
   // the total coin we won
   let c = 0;
   reelCardAnimation('.reels > div:nth-child(3) > div', n, images3, 4.9, 3.9);

   // checking if the middle image is empty or not 
  if(reelImages3[n + 1].id !== "empty"){
       secondTl.to('.reels > div:nth-child(3) > div', {
           duration: 3,
           y: -141.55 * (n - 0.28),
           ease: Elastic.easeOut,
           onComplete() {
               winAmount(images1, images2, images3, reelImages, q, w, c, win);
       }
       }, "-=2.9");
  }else{
   secondTl.to('.reels > div:nth-child(3) > div', {
       duration: 3,
       y: -141.55 * n,
       ease: Elastic.easeOut,
       onComplete() {
           winAmount(images1, images2, images3, reelImages, q, w, c, win);
   }
   }, "-=2.9");
  }
    
    secondTl.play();
});
    

function SetHeight1(j) {
    reelImages1[j].style.height = '14rem';
    reelImages1[j + 2]. style.height = '14rem';
}

function SetHeight2(k) {
    reelImages2[k].style.height = '14rem';
    reelImages2[k + 2]. style.height = '14rem';
}

function SetHeight3(l) {
    reelImages3[l].style.height = '14rem';
    reelImages3[l + 2]. style.height = '14rem';
}

function ripples(event, animation1, animation2) {

    if(animation1.isActive()) {
        event.preventDefault();
        event.stopImmediatePropagation();
        return false;
    }
    animation2.to('.spin', { duration: 5, onStart(){ spinButton.classList.add('active'); }, onComplete(){spinButton.classList.remove('active')}});
    

    let x = event.clientX - event.target.offsetLeft;
    let y = event.clientY - event.target.offsetTop;

    let ripples = document.createElement('span');
    ripples.style.left = x + 'px';
    ripples.style.top = y + 'px';
    spinButton.appendChild(ripples);

    setTimeout(() => {
        ripples.remove()
    }, 1000);
    animation1.restart();
}

function removeBlink(reelImages, state, q) {

    q.forEach((p) => {
        reelImages.forEach((images) => {
            if(state === 'won'){
             images[p].classList.remove('blink');
            }
        });
    });
  
}

function reelCardAnimation(path, randomNumber, images, time1, time2 ) {
    secondTl.to(path, {
        duration: 1,
        y: -141.55 * 21,
        ease: Power1.easeOut
    }, `-=${time1}`);
    secondTl.to(path, {
        duration: 1,
        y: 0,
        ease: Power1.easeOut,
        onComplete(){
            if(reelImages1[randomNumber + 1].id !== "empty" ){
                images.forEach((image) => {
                    if(image.id === "empty"){
                        image.style.height = "10rem";
                    }
                })
            }
        }
    }, `-=${time2}`);
}

function winAmount(images1,images2, images3, reelImages, q, w, c, win) {

    for(let p = 0; p < 3; p++) {
        if(images1[p].id === images2[p].id && images1[p].id === images3[p].id && images1[p].id !== "empty"){
            reelImages.forEach((images) => {
                images[p].classList.add('blink');  
            });
            state = 'won';
            q.push(p);
            if(images1[p].id === "cleopatra" || images1[p].id === "caesar"){
                c +=40;
                w +=40;
                coin.innerHTML = previousC + c;
                win.innerHTML = w;
            }else if(images1[p].id === "romansoldier1" || images1[p].id === "romansoldier2" || images1[p].id === "gladiator1"){
                c +=20;
                w +=20;
                coin.innerHTML = previousC + c;
                win.innerHTML = w;
            }
        }else if(images1[p].id === images2[p].id && images1[p].id !== images3[p].id && images1[p].id !== "empty") {
            for(let o = 0; o < 2; o++){
                reelImages[o][p].classList.add('blink');
            }
            state = 'won';
            q.push(p);
            if(images1[p].id === "cleopatra" || images1[p].id === "caesar"){
                c +=20;
                 w +=20;
                coin.innerHTML = previousC + c;
                win.innerHTML = w;
            }else if(images1[p].id === "romansoldier1" || images1[p].id === "romansoldier2" || images1[p].id === "gladiator1"){
                c +=10;
                w +=10;
                coin.innerHTML = previousC + c;
                win.innerHTML = w;
            }

        }
    }
    previousC +=c;
    thirdTl.fromTo('.win', {
        duration: 0.5,
        opacity: 0,
        y: 10,
        ease: Power2.easeOut
    }, {
        opacity: 1,
        y: 0
    }).fromTo('.coin-amount', {
        duration: 0.5,
        opacity: 0,
        y: 10,
        ease: Power2.easeOut
    }, {
        opacity: 1,
        y: 0
    }, "-=0.5");
    thirdTl.play();
    if(state === "won" && width <= 90){
        width = width + 20;
        fourthTl.to('.coin-bar', { duration: 0.5, width: `${width}%`, ease: Power2.easeOut }, "-=0.5");
        if(width == 100){
            width = 0;
            fourthTl.to('.coin-bar', { duration: 0.5, width: `${width}%`, ease: Power2.easeOut, clearProps: "width" }, "-=0.5");
            s +=1;
            star.innerHTML = s;
        }
        fourthTl.restart();
    }
}


