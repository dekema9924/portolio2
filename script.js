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

function getHome(){
    home.style.transform = 'translateX(0%)';
    service.style.transform = 'translateX(100%)';
    project.style.transform = 'translateX(100%)';
    contact.style.transform = 'translateX(100%)';

}

function getService(){
    home.style.transform = 'translateX(100%)';
    service.style.transform = 'translateX(0%)';
    project.style.transform = 'translateX(100%)';
   contact.style.transform = 'translateX(100%)';

}




