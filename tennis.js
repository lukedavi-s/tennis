//delay javascript execution until after all html and css is rendered.
document.addEventListener("DOMContentLoaded", (event) => {
  //page starts with icons, instead of full menu
  document.getElementById('nav').className = 'iconsonly';
  //event listener for clicking on hamburger menu
  document.getElementById('burger').addEventListener('click', function() {
    let menu = document.getElementById('nav')
      //swap full menu / icons only styles
      menu.className = menu.className == 'iconsonly' ? 'fullmenu' : 'iconsonly';
  })
  //this runs every time the page loads, doesn't need to be called as a function
  let filename = location.pathname.split('/').pop();

    /*otherwise loop through the rest of the links and apply highlight css style to
    the link whose id matches the current page filename (without the extension)*/
    let nav = document.getElementById('nav');
    let links = nav.getElementsByTagName('a');
    for (i = 0; i < links.length; i++) {
      if (links[i].getAttribute('href').indexOf(filename) > -1) {
        links[i].className = 'currentpage';
      }
    }
})
