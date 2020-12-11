const shopContainer = document.querySelector('.shop-container');
const cupImage = document.querySelector('.cup-img');
const blur = document.getElementById('blur');

//Scroll Plugin
gsap.registerPlugin(ScrollTrigger);

//Animations
const tl1 = gsap.timeline({repeat: -1});
const tl2 = gsap.timeline();
const tl3 = gsap.timeline();
const tl4 = gsap.timeline();
const tl5 = gsap.timeline();
const tl6 = gsap.timeline();
const tl7 = gsap.timeline();
const tl8 = gsap.timeline({repeat: -1});
const tl9 = gsap.timeline({repeat: -1});
const tl10 = gsap.timeline();

//creating the shop page
cupImage.addEventListener('click', () => {
    
    shopContainer.style.pointerEvents = 'auto';
    //blur the shopContainer
    blur.classList.add('blur');
    tl6.to('.blur', { duration: 0.5, opacity: 0.7, width: '100%', height: '100%', position: 'absolute', background: "black", zIndex: '3'});
    tl6.invalidate();
    tl6.restart();
    

    //shop itmes
    const shopHeader = document.createElement('div');
    shopHeader.classList.add('shop-header');
    shopContainer.appendChild(shopHeader);
    const bubbles = document.createElement('div');
    bubbles.classList.add('bubbles');
    bubbles.innerHTML = `<h1 class='shop-text'>Trophy Shop</h1>`;
    shopHeader.appendChild(bubbles);
    //bubble animation
    let bArray = [];
    let sArray = [6,8,10,12];

    for(let i = 0; i < bubbles.offsetWidth; i++){
        bArray.push(i);
    }
    tl1.to('.shop-text', {
        duration: 0.3,
        onComplete() {
            const individualBubble = document.createElement('div');
            individualBubble.classList.add('individual-bubble');
            bubbles.appendChild(individualBubble);
            let size = randomValue(sArray);
            individualBubble.style.left = `${randomValue(bArray)}px`;
            individualBubble.style.width = `${size}px`;
            individualBubble.style.height = `${size}px`;
            //animation
            tl2.to('.individual-bubble', {
                duration: 2,
                bottom: '100%',
                opacity: '-=0.1',
                ease: Power2.easeOut,
                onComplete() {
                    individualBubble.remove();
                }
            }, "-=1.7");
        }
    });
    
    // End of bubble animation

    //creating the shop page
    const exitButton = document.createElement('div');
    exitButton.classList.add('exit-button');
    exitButton.innerHTML = `X`;
    shopHeader.appendChild(exitButton);
    const shopWrapper = document.createElement('div');
    shopWrapper.classList.add('shop-wrapper');
    shopContainer.appendChild(shopWrapper);
    const shop = document.createElement('div');
    shop.classList.add('shop');
   
    for(let i = 0; i < 15; i++) {
        const shopItems = document.createElement('div');
        shopItems.classList.add('shop-items');
        shop.appendChild(shopItems);

        const badge = document.createElement('div');
        badge.classList.add('badge');
        badge.innerHTML = '1X';
        shopItems.appendChild(badge);

        const info = document.createElement('div');
        info.classList.add('info');
        shopItems.appendChild(info);

        var discription = document.createElement('div');
        discription.innerHTML = `<p class = discription-text >Trade your trophies for a fabulous sum of ${ 5 * (i + 1) } Points</p>`
        discription.classList.add('discription');
        shopItems.appendChild(discription);

        var crossButton = document.createElement('div');
        crossButton.innerHTML = 'X';
        crossButton.classList.add('cross-button');
        discription.appendChild(crossButton);

        const span = document.createElement('span');
        span.classList.add('sign');
        span.innerText = "i";
        shopItems.appendChild(span);

        const trophy = document.createElement('img');
        trophy.classList.add('trophy');
        const title = document.createElement('div');
        title.classList.add('title');

        // Set rewards
        setPoint(title, i);
        // Trophies
        switch(i) {
            case 0:
                trophy.setAttribute('src', "./assets/trophy1.png");
                attribute(trophy, 11, 9, 1);
                break;
            case 1:
                trophy.setAttribute('src', "./assets/trophy1.png");
                attribute(trophy, 11, 9, 1);
                break;
            case 2:
                trophy.setAttribute('src', "./assets/trophy2.png");
                attribute(trophy, 8.5, 8.5, 1.7, 1);
                break;
            case 3:
                trophy.setAttribute('src', "./assets/trophy2.png");
                attribute(trophy, 8.5, 8.5, 1.7, 1);
                break;
            case 4:
                trophy.setAttribute('src', "./assets/trophy3.png");
                attribute(trophy, 11, 9, 1.5);
                break;
            case 5:
                trophy.setAttribute('src', "./assets/trophy3.png");
                attribute(trophy, 11, 9, 1.5);
                break;
            case 6:
                trophy.setAttribute('src', "./assets/trophy4.png");
                attribute(trophy, 11, 10, 1.5);
                break;
            case 7:
                trophy.setAttribute('src', "./assets/trophy4.png");
                attribute(trophy, 11, 10, 1.5);
                break;             
            case 8:
                trophy.setAttribute('src', "./assets/trophy5.png");
                attribute(trophy, 11, 9, 1);
                break;
            case 9:
                trophy.setAttribute('src', "./assets/trophy5.png");
                attribute(trophy, 11, 9, 1);
                break;
            case 10:
                trophy.setAttribute('src', "./assets/trophy6.png");
                attribute(trophy, 11, 10, 0.5);
                break;
            case 11:
                trophy.setAttribute('src', "./assets/trophy6.png");
                attribute(trophy, 11, 10, 0.5);
                break;
            case 12:
                trophy.setAttribute('src', "./assets/trophy7.png");
                attribute(trophy, 15, 10, 0.5);
                break;
            case 13:
                trophy.setAttribute('src', "./assets/trophy7.png");
                attribute(trophy, 15, 10, 0.5);
                break;
            case 14:
                trophy.setAttribute('src', "./assets/trophy8.png");
                attribute(trophy, 11, 9, 1.5, 1);
                break;
        } 
        shopItems.appendChild(trophy);
        shopItems.appendChild(title);

        const shopStarContainer = document.createElement('div');
        shopStarContainer.innerHTML = `<span class='amount'>${i + 1}</span> 
        <img src='./assets/star.png' class='shop-star'>`;
        shopStarContainer.classList.add('shop-star-container');
        shopItems.appendChild(shopStarContainer);                                                        
    }
    let view = Array.from(shop.children).slice(0, 9);
    view.forEach((item) => {
        item.classList.add('view');
        item.children[0].classList.add('badge-view');
    });
    let scroll1 = Array.from(shop.children).slice(9, 12);
    scroll1.forEach((item) => {
        item.classList.add('scroll1');
        item.children[0].classList.add('badge-scroll1');
    });
    let scroll2 = Array.from(shop.children).slice(12, 16);
    scroll2.forEach((item) => {
        item.classList.add('scroll2');
        item.children[0].classList.add('badge-scroll2');
    });
    shopWrapper.appendChild(shop);

    const infos = document.querySelectorAll('.info');
    var discriptions = document.querySelectorAll('.discription');
    const shopItems = document.querySelectorAll(".shop-items");
    const crossButtons = document.querySelectorAll('.cross-button');
    const discriptionText = document.querySelectorAll('.discription-text');

    for(let j = 0; j < 15; j++) {
        infos[j].addEventListener('click', (e) => {
    
            if(tl7.isActive()) {
                e.preventDefault();
                e.stopImmediatePropagation();
                return false;
            }
            //animating the shop-items elements
            tl7.from(shopItems[j], { duration: 0.4, scale: 0.94 });
            discriptions[j].classList.toggle('active');
            crossButtons[j].classList.toggle('active-button');
            discriptionText[j].classList.toggle('active-text');
        });
       
        shop.addEventListener('mouseover', (e) => {
            if(e.target.classList[0] !== 'info' && discriptions[j].classList.contains('active') && e.target.classList[0] !== "shop-items") {
                discriptions[j].classList.remove('active');
                crossButtons[j].classList.remove('active-button');
                discriptionText[j].classList.remove('active-text');
            }
        });
    }

    tl3.from('.view', { duration: 1, opacity: 0, scale: 0.2, stagger: {each: 0.2, from: 4, grid: "auto"}
    }).from('.badge-view', { duration: 0.5, x: 100, y: -100, opacity: 0, scale: 0, stagger: { each: 0.2, from: 4, grid: "auto"} }, "-=1");

    tl4.from('.scroll1', { duration: 1, opacity: 0, scale: 0.2, stagger: { each: 0.2 }
    }).from('.badge-scroll1', { duration: 0.5, x: 100, y: -100, opacity: 0, scale: 0, stagger: { each: 0.2} }, '-=1');

    tl5.from('.scroll2', { duration: 1, opacity: 0, scale: 0.2, stagger: { each: 0.2 }
    }).from('.badge-scroll2', { duration: 0.5, x: 100, y: -100, opacity: 0, scale: 0, stagger: { each: 0.2} }, '-=1');

    ScrollTrigger.create({ animation: tl4, scroller: ".shop", start: "30% top" });

    ScrollTrigger.create({ animation: tl5, scroller: ".shop", start: "53% top" });

    // //ScrollTrigger.create({ animation: tl4, scroller: ".shop", trigger: ".shop", start: "bottom bottom", end: "+=500", markers: true, scrub: true, pin: true, anticipatePin: 1});
    // const trophies = document.querySelectorAll('.trophy2');
    // const trophiesContainer = trophies;

    for(let j = 0; j < 15; j++) {
        shopItems[j].addEventListener('click', (e) => {
            if(e.target.classList[0] !== "info") {
            //bluring the shop element
            shop.style.opacity = "0.8";
            shop.style.pointerEvents = "none";

            const picked = document.createElement('div')
            picked.classList.add('picked');
            shopWrapper.appendChild(picked);

            const pickedItem = document.createElement('div');
            pickedItem.classList.add('picked-item');
            shopWrapper.appendChild(pickedItem);
            const pickedBackground = document.createElement('div');
            pickedBackground.classList.add('picked-background');
            pickedItem.appendChild(pickedBackground);
            

            const trophy = document.createElement('img');
            trophy.classList.add('trophy2');
            switch(j) {
                case 0:
                    trophy.setAttribute('src', "./assets/trophy1.png");
                    attribute(trophy, 14, 12, 1);
                    break;
                case 1:
                    trophy.setAttribute('src', "./assets/trophy1.png");
                    attribute(trophy, 14, 12, 1);
                    break;
                case 2:
                    trophy.setAttribute('src', "./assets/trophy2.png");
                    attribute(trophy, 12, 12, 1.7, 1);
                    break;
                case 3:
                    trophy.setAttribute('src', "./assets/trophy2.png");
                    attribute(trophy, 12, 12, 1.7, 1);
                    break;
                case 4:
                    trophy.setAttribute('src', "./assets/trophy3.png");
                    attribute(trophy, 16, 14, 1.5);
                    break;
                case 5:
                    trophy.setAttribute('src', "./assets/trophy3.png");
                    attribute(trophy, 16, 14, 1.5);
                    break;
                case 6:
                    trophy.setAttribute('src', "./assets/trophy4.png");
                    attribute(trophy, 15, 14, 1.5);
                    break;
                case 7:
                    trophy.setAttribute('src', "./assets/trophy4.png");
                    attribute(trophy, 15, 14, 1.5);
                    break;             
                case 8:
                    trophy.setAttribute('src', "./assets/trophy5.png");
                    attribute(trophy, 16, 12, 1);
                    break;
                case 9:
                    trophy.setAttribute('src', "./assets/trophy5.png");
                    attribute(trophy, 16, 12, 1);
                    break;
                case 10:
                    trophy.setAttribute('src', "./assets/trophy6.png");
                    attribute(trophy, 16, 14, 0.5);
                    break;
                case 11:
                    trophy.setAttribute('src', "./assets/trophy6.png");
                    attribute(trophy, 16, 14, 0.5);
                    break;
                case 12:
                    trophy.setAttribute('src', "./assets/trophy7.png");
                    attribute(trophy, 19, 12, 0.5);
                    break;
                case 13:
                    trophy.setAttribute('src', "./assets/trophy7.png");
                    attribute(trophy, 19, 12, 0.5);
                    break;
                case 14:
                    trophy.setAttribute('src', "./assets/trophy8.png");
                    attribute(trophy, 15, 12, 1.5, 1);
                    break;
            }
            
            pickedBackground.appendChild(trophy);
            
            // trophiesContainer[j].style.width = `${parseInt(trophiesContainer[j].style.width) * 1.4}rem`;
            // trophiesContainer[j].style.height = `${parseInt(trophiesContainer[j].style.height) * 1.4}rem`; 
            // pickedBackground.appendChild(trophiesContainer[j]);

            const pickedTrophyBackgroundColor = document.createElement('div');
            pickedTrophyBackgroundColor.classList.add('trophy-bc');
            pickedBackground.appendChild(pickedTrophyBackgroundColor);

            const pickedTrophyText = document.createElement('div');
            pickedTrophyText.classList.add('trophy-text');
            pickedTrophyText.innerHTML = `<p>${ 5 * (j + 1)} Points</p>`
            pickedBackground.appendChild(pickedTrophyText);

            const pickedStarContainer = document.createElement('div');
            pickedStarContainer.innerHTML = `<span class='amount'>${i + 1}</span> 
            <img src='./assets/star.png' class='picked-star'>`;
            pickedStarContainer.classList.add('picked-star-container');
            pickedBackground.appendChild(pickedStarContainer); 

            const closeButton = document.createElement('div');
            closeButton.innerHTML = 
            `<button class='blob-btn'>
                Close
            <span class="blob-btn__inner">
                <span class="blob-btn__blobs">
                    <span class="blob-btn__blob"></span>
                    <span class="blob-btn__blob"></span>
                    <span class="blob-btn__blob"></span>
                    <span class="blob-btn__blob"></span>
            </span>
          </span>
          </button>`;
            closeButton.classList.add('close-button');
            pickedBackground.appendChild(closeButton);

            const blobs = document.querySelectorAll('.blob-btn__blob');
            const blobButton = document.querySelector('.blob-btn');
            closeButton.addEventListener('mouseover', (e) => {
                console.log(e.target);
                if(e.target.classList[0] === "blob-btn"){
                    tl10.to(blobs, {duration: 0.01, y: 0, onComplete(){console.log('done');}});
                }else {
                    tl10.to(blobs, {duration: 0.01, y: 85, scale: 1.4, onComplete(){console.log('Done')}});
                }
            });
            blobButton.addEventListener("click", () => {
                tl8.clear();
                tl9.clear();
                shop.style.opacity = "1";
                shop.style.pointerEvents = "auto";
                pickedItem.remove();
                picked.remove();
            });

            const bubble = document.createElement('div');
            bubble.classList.add('bubble');
            pickedBackground.appendChild(bubble);

            let bArray = [];
            let hArray = [];
            let s1Array = [22,24,26,28];
            let s2Array = [4,6,8];

            for(let i = 0; i < bubble.offsetWidth; i++){
                bArray.push(i);
            }
            for(let i = 0; i < bubble.offsetHeight; i++) {
                hArray.push(i);
            }
            for(let i = 0; i < 9; i++) {
                const individualBubble = document.createElement('div');
                individualBubble.classList.add('bubble1')
                bubble.appendChild(individualBubble);
                let size = randomValue(s1Array);
                individualBubble.style.left = `${randomValue(bArray)}px`;
                individualBubble.style.bottom = `${randomValue(hArray)}px`;
                individualBubble.style.width = `${size}px`;
                individualBubble.style.height = `${size}px`;
            }

            
            for(let i = 0; i < 29; i++) {
                const individualBubble = document.createElement('div');
                individualBubble.classList.add('bubble2');
                bubble.appendChild(individualBubble);
                let size = randomValue(s2Array);
                individualBubble.style.left = `${randomValue(bArray)}px`;
                individualBubble.style.bottom = `${randomValue(hArray)}px`;
                individualBubble.style.width = `${size}px`;
                individualBubble.style.height = `${size}px`;
            }
            const individualBubbles1 = document.querySelectorAll('.bubble1');
            const individualBubbles2 = document.querySelectorAll('.bubble2');
            tl8.to('.bubble1', { duration: 13, bottom: () => randomValue(hArray), left: () => randomValue(bArray), opacity: 0.3, ease: "none", onComplete(){ individualBubbles1.forEach((bubble) => { bubble.style.opacity = "0"}); }
            });
            tl9.to('.bubble2', { duration: 13, bottom: () => randomValue(hArray), left: () => randomValue(bArray),opacity: 1, ease: "none", onComplete(){ individualBubbles2.forEach((bubble) => { bubble.style.opacity = "0"}); }});
            }
        });
    }
    exitButton.addEventListener('click', () => {
        tl1.clear();
        tl2.kill();
        tl2.clear();
        tl8.clear();
        tl9.clear();
        shopContainer.style.pointerEvents = 'none';
        shopHeader.remove();
        shopWrapper.remove();
        tl6.reverse(".blur", {duration: 0.2});
        
    }); 
});



function randomValue(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function setPoint(title,counter) {
    title.innerText = `${ 5 * (counter + 1) } Points`; 
}

function attribute(trophy, width, height, marginTop, marginLeft) {
    trophy.style.width = `${width}rem`;
    trophy.style.height = `${height}rem`;
    trophy.style.marginTop = `${marginTop}rem`;
    trophy.style.marginLeft = `${marginLeft}rem`;
}