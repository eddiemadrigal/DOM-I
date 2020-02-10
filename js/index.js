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
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
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

const headerImg = document.getElementById('cta-img');
headerImg.setAttribute('src', 'img/header-img.png');

const h1Text = document.querySelector('h1');
h1Text.innerHTML = 'dom<br>is<br>awesome';

document.querySelector('button').innerHTML = 'Get Started';

const topContentLeftH4 = document.querySelector('.top-content > div:nth-child(1) > h4');

topContentLeftH4.innerHTML = 'Features';

const topContentLeftP = document.querySelector('.top-content > div:nth-child(1) > p');

topContentLeftP.style.paddingRight = '3%';

topContentLeftP.innerHTML = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque ea quam voluptate consequuntur adipisci a totam impedit molestiae est! Officia, nostrum in?';

const topContentRightH4 = document.querySelector('.top-content > div:nth-child(2) > h4');

topContentRightH4.innerHTML = 'About';

const topContentRightP = document.querySelector('.top-content > div:nth-child(2) > p');

topContentRightP.innerHTML = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque ea quam voluptate consequuntur adipisci a totam impedit molestiae est! Officia, nostrum in?';

document.getElementById('middle-img').setAttribute('src', 'img/mid-page-accent.jpg');

document.querySelector('div.bottom-content > div:nth-child(1) > h4').innerHTML = 'Services';

document.querySelector('div.bottom-content > div:nth-child(2) > h4').innerHTML = 'Product';

document.querySelector('div.bottom-content > div:nth-child(3) > h4').innerHTML = 'Vision';

document.querySelector('div.bottom-content > div:nth-child(1) > p').innerHTML = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque ea quam voluptate consequuntur adipisci a totam impedit molestiae est! Officia, nostrum in';

document.querySelector('div.bottom-content > div:nth-child(2) > p').innerHTML = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque ea quam voluptate consequuntur adipisci a totam impedit molestiae est! Officia, nostrum in';

document.querySelector('div.bottom-content > div:nth-child(3) > p').innerHTML = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque ea quam voluptate consequuntur adipisci a totam impedit molestiae est! Officia, nostrum in';

document.querySelector('.contact h4:nth-child(1)').innerHTML = 'Contact';

document.querySelector('.contact > p:nth-child(2)').innerHTML = '123 Json Street<br>Anytown, CA US';

document.querySelector('.contact > p:nth-child(3)').innerHTML = '1-800-GO-Faster';

document.querySelector('.contact > p:nth-child(4)').innerHTML = 'email@email.com';

document.querySelector('footer p:first-child').innerHTML = '&copy; 2020 Great Idea';