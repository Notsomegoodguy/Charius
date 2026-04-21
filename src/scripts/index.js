let homeBtn = document.querySelector('.js-home-btn')
let workBtn = document.querySelector('.js-work-btn')
let aboutBtn = document.querySelector('.js-about-btn')
let newsBtn = document.querySelector('.js-news-btn')
let contactBtn = document.querySelector('.js-contact-btn')

document.querySelector('.js-home').addEventListener('click',() =>{
  if(!homeBtn.classList.contains('toggle')){
      homeBtn.classList.add('toggle');
      workBtn.classList.remove('toggle');
      aboutBtn.classList.remove('toggle');
      newsBtn.classList.remove('toggle');
      contactBtn.classList.remove('toggle');
  }
});

document.querySelector('.js-work').addEventListener('click',() =>{
  if(!workBtn.classList.contains('toggle')){
      homeBtn.classList.remove('toggle');
      workBtn.classList.add('toggle');
      aboutBtn.classList.remove('toggle');
      newsBtn.classList.remove('toggle');
      contactBtn.classList.remove('toggle');
  }
}); 

document.querySelector('.js-about').addEventListener('click',() =>{
  if(!aboutBtn.classList.contains('toggle')){
      homeBtn.classList.remove('toggle');
      workBtn.classList.remove('toggle');
      aboutBtn.classList.add('toggle');
      newsBtn.classList.remove('toggle');
      contactBtn.classList.remove('toggle');
  }
}); 

document.querySelector('.js-news').addEventListener('click',() =>{
  if(!newsBtn.classList.contains('toggle')){
      homeBtn.classList.remove('toggle');
      workBtn.classList.remove('toggle');
      aboutBtn.classList.remove('toggle');
      newsBtn.classList.add('toggle');
      contactBtn.classList.remove('toggle');
  }
});

document.querySelector('.js-contact').addEventListener('click',() =>{
  if(!contactBtn.classList.contains('toggle')){
      homeBtn.classList.remove('toggle');
      workBtn.classList.remove('toggle');
      aboutBtn.classList.remove('toggle');
      newsBtn.classList.remove('toggle');
      contactBtn.classList.add('toggle');
  }
}); 
