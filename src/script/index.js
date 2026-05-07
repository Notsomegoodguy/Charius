let homeBtn = document.querySelector('.js-home-btn');
let aboutBtn = document.querySelector('.js-about-btn');
let donatingBtn = document.querySelector('.js-donating-btn');
let eventBtn = document.querySelector('.js-event-btn');
let blogBtn = document.querySelector('.js-blog-btn');
let contactBtn = document.querySelector('.js-contact-btn');

document.querySelector('.toggleOnOffhome').addEventListener('click',()=>{
  if(!homeBtn.classList.contains('toggle')){
    homeBtn.classList.add('toggle')
    aboutBtn.classList.remove('toggle')
    donatingBtn.classList.remove('toggle')
    eventBtn.classList.remove('toggle')
    blogBtn.classList.remove('toggle')
    contactBtn.classList.remove('toggle')
  }else{
    homeBtn.classList.remove('toggle')
  }
});

document.querySelector('.toggleOnOffabout').addEventListener('click',()=>{
  if(!aboutBtn.classList.contains('toggle')){
    aboutBtn.classList.add('toggle')
    homeBtn.classList.remove('toggle')
    donatingBtn.classList.remove('toggle')
    eventBtn.classList.remove('toggle')
    blogBtn.classList.remove('toggle')
    contactBtn.classList.remove('toggle')
  }else{
    aboutBtn.classList.remove('toggle')
  }
});

document.querySelector('.toggleOnOffdonating').addEventListener('click',()=>{
  if(!donatingBtn.classList.contains('toggle')){
    donatingBtn.classList.add('toggle')
    homeBtn.classList.remove('toggle')
    aboutBtn.classList.remove('toggle')
    eventBtn.classList.remove('toggle')
    blogBtn.classList.remove('toggle')
    contactBtn.classList.remove('toggle')
  }else{
    donatingBtn.classList.remove('toggle')
  }
});

document.querySelector('.toggleOnOffevent').addEventListener('click',()=>{
  if(!eventBtn.classList.contains('toggle')){
    eventBtn.classList.add('toggle')
    homeBtn.classList.remove('toggle')
    aboutBtn.classList.remove('toggle')
    donatingBtn.classList.remove('toggle')
    blogBtn.classList.remove('toggle')
    contactBtn.classList.remove('toggle')
  }else{
    eventBtn.classList.remove('toggle')
  }
});

document.querySelector('.toggleOnOffblog').addEventListener('click',()=>{
  if(!blogBtn.classList.contains('toggle')){
    blogBtn.classList.add('toggle')
    homeBtn.classList.remove('toggle')
    aboutBtn.classList.remove('toggle')
    donatingBtn.classList.remove('toggle')
    eventBtn.classList.remove('toggle')
    contactBtn.classList.remove('toggle')
  }else{
    blogBtn.classList.remove('toggle')
  }
});

document.querySelector('.toggleOnOffcontact').addEventListener('click',()=>{
  if(!contactBtn.classList.contains('toggle')){
    contactBtn.classList.add('toggle')
    homeBtn.classList.remove('toggle')
    aboutBtn.classList.remove('toggle')
    donatingBtn.classList.remove('toggle')
    eventBtn.classList.remove('toggle')
    blogBtn.classList.remove('toggle')
  }else{
    contactBtn.classList.remove('toggle')
  }
});


const header = document.querySelector('#main-header');
let isIdle;

window.addEventListener('scroll', () => {
  // 1. Show the header as soon as scrolling starts
  header.classList.remove('-translate-y-full');
  
  // 2. Clear the previous timer
  clearTimeout(isIdle);

  // 3. Set a new timer to hide the header after 2 seconds of inactivity
  isIdle = setTimeout(() => {
    // Only hide if the user isn't at the very top of the page
    if (window.scrollY > 100) {
      header.classList.add('-translate-y-full');
    }
  }, 2000); // 2000ms = 2 seconds
});

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".scroll-section");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
            } else {
                entry.target.classList.remove("is-visible");
            }
        });
    }, {
        threshold: 0.2 
    });

    sections.forEach((section) => {
        observer.observe(section);
    });
});