const navmenu=document.getElementById('navmenu')
const barbtn=document.getElementsByClassName('bars')
const crossbtn=document.getElementsByClassName('crossbtn')

barbtn[0].addEventListener('click', function() {
    if (navmenu.style.display === 'none') {
      navmenu.style.display = 'block'; // Show the div
    } else {
      navmenu.style.display = 'none'; // Hide the div
    }
  });
  crossbtn[0].addEventListener('click', function() {
    if (navmenu.style.display === 'none') {
      navmenu.style.display = 'block'; // Show the div
    } else {
      navmenu.style.display = 'none'; // Hide the div
    }
  });