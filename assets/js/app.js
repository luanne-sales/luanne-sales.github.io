window.onresize = () => {
  placeMenuList();
}

window.onload = () => {
  placeMenuList();
}

/** When the menuButton shows or fades the menu list goes to its proper location */
function placeMenuList () {
  const menuButton = document.getElementById('menu-button');
  const navList = document.getElementById('navigation-list');
  const sideBar = document.getElementById('side-bar');
  const horizontalList = document.getElementById('horizontal-list');

  horizontalList.innerHTML = '';
  sideBar.innerHTML = '';
  navList.className = '';

  if ( window.getComputedStyle(menuButton).display === 'none'){
    horizontalList.appendChild(navList);
    navList.classList.add('horizontal-navigation-list');
  } else {
    sideBar.appendChild(navList);
    navList.classList.add('vertical-navigation-list');
  }
}

/** Show a side menu whenever the menu-button is clicked */
function sideMenu(){
  const sideBar = document.getElementById('side-bar');
  const sideBarDisplay = window.getComputedStyle(sideBar).display;

  sideBar.style.display = sideBarDisplay === 'none' ?
    'block' : 'none';
}
