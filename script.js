let projects = document.querySelector('.projects');
let show_more_btn = document.querySelector('.show-more-btn')


show_more_btn.addEventListener('click', ()=>{
    projects.classList.toggle('show-more')
    if(projects.classList.contains('show-more')){
        show_more_btn.innerHTML = 'show-less'
    }else{
        show_more_btn.innerHTML = 'show-more'
    }
})



let home = document.getElementById('home');
let service = document.getElementById('services');
let project = document.getElementById('project');
let contact = document.getElementById('contact');


let home_btn = document.getElementById('home-btn');
let service_btn = document.getElementById('service-btn');
let project_btn = document.getElementById('project-btn');
let contact_btn = document.getElementById('contact-btn');

service_btn.addEventListener('click',()=>{
    home.style.transform = 'translateX(100%)';
    project.style.transform = 'translateX(200%)';
    contact.style.transform = 'translateX(200%)';
    service.style.transform = 'translateX(0px)';
    service.style.position = 'absolute'
    service.style.marginLeft = '120px'


})
home_btn.addEventListener('click',()=>{
    home.style.transform = 'translateX(0px)';
    service.style.transform = 'translateX(200%)';
    project.style.transform = 'translateX(200%)';
    contact.style.transform = 'translateX(200%)';
    home.style.position = 'absolute'
     home.style.marginLeft = '120px'



})

project_btn.addEventListener('click',()=>{
    home.style.transform = 'translateX(200%)';
   project.style.position = 'absolute'
    service.style.transform = 'translateX(200%)';
    project.style.transform = 'translateX(0px)';
    contact.style.transform = 'translateX(200%)';
    project.style.marginLeft = '120px'


})

contact_btn.addEventListener('click',()=>{
    home.style.transform = 'translateX(200%)';
    service.style.transform = 'translateX(200%)';
    project.style.transform = 'translateX(200%)';
    contact.style.transform = 'translateX(0px)';
    contact.style.position = 'absolute'
    contact.style.marginLeft = '120px'



})







