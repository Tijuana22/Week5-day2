// var menuLinks = [
//     {text: 'about', href: '/about'},
//     {text: 'catalog', href: '/catalog'},
//     {text: 'orders', href: '/orders'},
//     {text: 'account', href: '/account'},
//   ];

var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];




let mainEl = document.querySelector("main");
mainEl.style.backgroundColor = 'var(--main-bg)';
mainEl.innerHTML = '<h1>SEI Rocks!</h1>';
mainEl.classList.add('flex-ctr'); 


let  topMenuEl = document.querySelector('#top-menu');
topMenuEl.style.height = '100%';
topMenuEl.style.backgroundColor = 'var( --top-menu-bg)';
topMenuEl.classList.add('flex-around');

// Task 4.0
let subMenuEl= document.querySelector('#sub-menu');
// Task 4.1
subMenuEl.style.height = '100%';
// Task 4.2
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
// Task 4.3
subMenuEl.classList.add('flex-around');
// Task 4.4
subMenuEl.style.position = 'absolute';
// Task 4.5
subMenuEl.style.top = 0;

// Task 5.1
let topMenuLinks= [];
let showingSubMenu= false;

// Task 5.2
for(let i of menuLinks){
  let a= document.createElement('a');
  let textContent = document.createTextNode(i.text)
  a.appendChild(textContent);
  a.href= i.href;
  topMenuEl.append(a);
  topMenuLinks.push(a);
  console.log(topMenuLinks);

}

// Task 5.8
function buildSubMenu(subLinks){
  let subMenuToDelete = document.querySelectorAll("#sub-menu a")

  subMenuToDelete.forEach((a) => {
    a.parentNode.removeChild(a)
  })

  for (let i of subLinks) {
    let a = document.createElement('a');
    let textContent = document.createTextNode(i.text);
    a.appendChild(textContent);
    a.href = i.href;
    subMenuEl.append(a);
    // subMenuLinks.push(a);
  

  }


}
// Task 5.3 
topMenuEl.addEventListener('click', function(event){
  event.preventDefault();
  let target= event.target
  if (target.nodeName !== "A"){
    return console.log("invalid element");
  } else {
    if (target.classList ==="active"){
    target.classList.remove("active");
    showingSubMenu = false;
    subMenuEl.style.top = 0;
    return
    }

// Task 5.4 -5.5
    topMenuLinks.forEach((a) => {
      a.classList.remove("active");
    })

    target.classList.add("active");

//  Task 5.6 - 5.7
    menuLinks.forEach((obj) =>{
      if (obj.hasOwnProperty('subLinks')){
        showingSubMenu = true
        if (obj.text === target.text) {
          buildSubMenu(obj.subLinks);
          subMenuEl.style.top = '100%';
        }
      } else{
        showingSubMenu =false
        subMenuEl.style.top = 0;
        if(target.text ==="about"){
          mainEl.innerHTML = `<h1>${target.text}</h1>`;
        }
      }
    })
  } 
})

subMenuEl.addEventListener('click', function(event){
  event.preventDefault();
  let target= event.target
  if (target.nodeName !== "A"){
    return console.log("invalid element");
  } else {
    showingSubMenu =false
        subMenuEl.style.top = 0;
        topMenuLinks.forEach((a) => {
          a.classList.remove("active");
        })
        mainEl.innerHTML = `<h1>${target.text}</h1>`;
  }
})










// console.log();