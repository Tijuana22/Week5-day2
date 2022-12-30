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

let subMenuEl= document.querySelector('#sub-menu');
subMenuEl.style.height = '100%';
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
subMenuEl.classList.add('flex-around');
subMenuEl.style.postion = 'absolute';
subMenuEl.style.top = 0;

let topMenuLinks= [];
let showingsubMenu= false;

for(let i of menuLinks){
    let a= document.createElement('a');
    let textContent = document.createTextNode(i.text)
    a.appendChild(textContent);
    a.href= i.href;
    topMenuEl.append(a);
    topMenuLinks.push(a);
    console.log(topMenuLinks);

}



 


topMenuEl.addEventListener('click', function(event){
    event.preventDefault();
    let target= event.target
    if (target.nodeName !== "A"){
      return console.log("invalid element");
    }else {
      console.log(target);
      target.classList.remove("active");
      showingsubMenu= false;
      subMenuEl.style.top = 0;
      return;

    }
    topMenuLinks.forEach((a)=>{
      a.classList.remove("active");
      a.classList.add("active");
      showingsubMenu= true
      
    })

})

// console.log();

// let subMenuE1= document.getElementById('sub-menu');
// subMenuE1.style.height = '100%';
// subMenuE1.style.backgroundColor = 'var(--sub-menu-bg)';
// subMenuE1.classList.add('flex-around');
// subMenuE1.style.postion = 'absolute';
// subMenuE1.style.top = '0';