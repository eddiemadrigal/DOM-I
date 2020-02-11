const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM<br>Is<br>Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png",
    "h1New": "Super<br>Awesome!!"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street<br>Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

const navItems = document.querySelectorAll('nav a');
// console.log(navItems);
const navArr = Array.from(navItems)
for (let i = 0; i < navArr.length; i++) {
  // console.log(siteContent.nav[`nav-item-${i}`]);
  // console.log(navArr[i].innerHTML = 'ok');
  navArr[i].style.color = "green";
  navArr[i].style.fontWeight = "bold";
  navArr[i].innerHTML = siteContent.nav[`nav-item-${i + 1}`]
}

let headerNav = document.querySelector('nav');

const a1 = document.createElement('a');
a1.setAttribute("href", "#");
a1.setAttribute("style", "color: green; font-weight: bold;");
a1.innerHTML = "Left";
headerNav.prepend(a1);

const a2 = document.createElement('a');
a2.setAttribute('href', '#');
a2.setAttribute('style', 'color: green; font-weight: bold;');
a2.innerHTML = "Right";
headerNav.append(a2);

// console.log(navItems);

const headerImg = document.getElementById('cta-img');
headerImg.style.margin = '0 auto';
headerImg.setAttribute('src', 'img/header-img.png');

const h1Text = document.querySelector('h1');
h1Text.style.color = 'black';
h1Text.innerHTML = siteContent.cta.h1;

const btn = document.querySelector('button');
btn.innerHTML = 'Get Started';

const topContentLeftH4 = document.querySelector('.top-content > div:nth-child(1) > h4');

topContentLeftH4.innerHTML = siteContent["main-content"]["features-h4"];

const topContentLeftP = document.querySelector('.top-content > div:nth-child(1) > p');

topContentLeftP.innerHTML = siteContent["main-content"]["features-content"];

const topContentRightH4 = document.querySelector('.top-content > div:nth-child(2) > h4');

topContentRightH4.innerHTML = siteContent["main-content"]["about-h4"];

const topContentRightP = document.querySelector('.top-content > div:nth-child(2) > p');

topContentRightP.innerHTML = siteContent["main-content"]["about-content"];

document.getElementById('middle-img').setAttribute('src', siteContent["main-content"]["middle-img-src"]);

document.querySelector('div.bottom-content > div:nth-child(1) > h4').innerHTML = siteContent["main-content"]["services-h4"];

document.querySelector('div.bottom-content > div:nth-child(2) > h4').innerHTML = siteContent["main-content"]["product-h4"];

document.querySelector('div.bottom-content > div:nth-child(3) > h4').innerHTML = siteContent["main-content"]["vision-h4"];;

document.querySelector('div.bottom-content > div:nth-child(1) > p').innerHTML = siteContent["main-content"]["services-content"];

document.querySelector('div.bottom-content > div:nth-child(2) > p').innerHTML = siteContent["main-content"]["product-content"];

document.querySelector('div.bottom-content > div:nth-child(3) > p').innerHTML = siteContent["main-content"]["vision-content"];

document.querySelector('.contact h4:nth-child(1)').innerHTML = siteContent.contact["contact-h4"];

document.querySelector('.contact > p:nth-child(2)').innerHTML = siteContent.contact.address;

document.querySelector('.contact > p:nth-child(3)').innerHTML = siteContent.contact.phone;

document.querySelector('.contact > p:nth-child(4)').innerHTML = siteContent.contact.email;

document.querySelector('footer p:first-child').innerHTML = siteContent.footer.copyright;

btn.addEventListener('click', function() {
  if (h1Text.style.color === 'black') {
    h1Text.innerHTML = siteContent.cta.h1New;
    h1Text.style.color = 'green';
  } else {
    h1Text.innerHTML = siteContent.cta.h1;
    h1Text.style.color = 'black';
  }
});