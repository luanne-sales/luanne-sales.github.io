window.onresize = ()=>{
    placeMenuList()
}

window.onload = () => {
    placeMenuList()
}

function placeMenuList () {
    // When the menuButton shows or fades the menu list goes to its proper location
    let menuButton = document.getElementById('menu-button')
    let navList = document.getElementById('navigation-list')
    let sideBar = document.getElementById('side-bar')
    let horizontalList = document.getElementById('horizontal-list')
    horizontalList.innerHTML = ''
    sideBar.innerHTML = ''
    navList.className = ''
    if ( window.getComputedStyle(menuButton).display === 'none'){
        horizontalList.appendChild(navList)
        navList.classList.add('horizontal-navigation-list')
    } else {
        sideBar.appendChild(navList)
        navList.classList.add('vertical-navigation-list')
    }
}

function sideMenu(){
    // show a side menu whenever the menu-button is clicked
    let sideBar = document.getElementById('side-bar')
    let sideBarDisplay = window.getComputedStyle(sideBar).display
    
    if ( sideBarDisplay === 'none'){
        sideBar.style.display = 'block'
    } else {
        sideBar.style.display = 'none'
    }
}
