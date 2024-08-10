document.addEventListener("DOMContentLoaded", function () {
  const homedata = {
    desc: 'I am a self-employed FrontEnd web developer with two years of experience of working and making projects in the field. My passion for programming and web development drives your work. I am specialize in HTML, CSS, and JavaScript, sculpting user interfaces that are both captivating and functional. With Bootstrap and Tailwind CSS, I infuse projects with style and adaptability. And Javascript library like ReactJS and Redux for state management. My journey showcases the dedication to mastering the intricacies of web development and my commitment to staying at the forefront of this dynamic industry. '
  };
  document.getElementById('personaldata').innerHTML = `
  <p>${homedata.desc}</p>
`;
})
document.addEventListener("DOMContentLoaded", function () {
  const projectdatatit = {
    webdesign: 'Web Design - Using HTML, CSS and JavaScript',
    ecomweb: 'Ecommerce Web - Using MongoDB, Experss, React and NodeJS',
    uiux: 'UI/UX Designs - Using Figma',
    portfolio: 'Portfolio - Using ReactJS and TailwindCSS',
  }


  document.getElementById('tit1').innerHTML = `
  <h1>${projectdatatit.webdesign}</h1>
`;
  document.getElementById('tit2').innerHTML = `
  <h1>${projectdatatit.ecomweb}</h1>
`;
  document.getElementById('tit3').innerHTML = `
  <h1>${projectdatatit.uiux}</h1>
`;
  document.getElementById('tit4').innerHTML = `
  <h1>${projectdatatit.portfolio}</h1>
`;
})
document.addEventListener("DOMContentLoaded", function () {

  const projectdata = {
    webdesigndesc: 'All the web designs are completely responsive for all the devices with on scroll anmimation. The code of the design is perfectly organised and maintainable. ',
    ecomweb: 'The frontend is made by using ReactJS and backend is made by using Nodejs and Experss.It has lot of features like add to cart, Delevery tracking, online transaction. ',
    uiuxdesc: 'Elevate your digital presence with expert Figma design services. Seamless collaboration, innovative solutions, and pixel-perfect designs tailored to your brands vision.',
    portdesc: 'Elevate your online presence with bespoke portfolio web design. Showcase your work professionally and leave a lasting impression on potential clients. '
  };

  document.getElementById('desc1').innerHTML = `
  <p class="pzreo">${projectdata.webdesigndesc}</p>
`;
  document.getElementById('desc2').innerHTML = `
  <p class="pzreo">${projectdata.ecomweb}</p>
`;
  document.getElementById('desc3').innerHTML = `
  <p class="pzreo">${projectdata.uiuxdesc}</p>
`;
  document.getElementById('desc4').innerHTML = `
  <p class="pzreo">${projectdata.portdesc}</p>
`;

})

const navbarul = document.querySelector('.navbar nav ul');
const navbarnav = document.querySelector('.navbar nav');
const logo = document.querySelector('.logo');
const navbar = document.querySelector('.navbar');
const cross = document.querySelector('.cross');
const humburger = document.querySelector('.humburger');
const navclick = document.querySelector('.navclick');
const navclick2 = document.querySelector('.navclick2');
const navclick3 = document.querySelector('.navclick3');
const navclick4 = document.querySelector('.navclick4');

humburger.addEventListener('click', show);
cross.addEventListener('click', hide);

const mediaQuery = window.matchMedia('(max-width: 700px)')
if (mediaQuery.matches) {
  navclick.addEventListener('click', hide);
  navclick2.addEventListener('click', hide);
  navclick3.addEventListener('click', hide);
  navclick4.addEventListener('click', hide);
}

function show() {
  humburger.style.display = 'none';
  navbar.style.justifyContent = "center";
  navbarnav.style.display = 'block';
  navbar.style.flexDirection = "column";
  navbarul.style.flexDirection = "column";
  navbarul.style.alignItems = "center";
  cross.style.display = "block";
  logo.style.display = "flex";
  logo.style.justifyContent = "space-between";
}
function hide() {
  humburger.style.display = 'block';
  navbar.style.flexDirection = "row-reverse";
  navbar.style.justifyContent = "space-between";
  navbarnav.style.display = "none";
  cross.style.display = "none";
}
