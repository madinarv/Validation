window.addEventListener('scroll', function () {
    var header = document.querySelector('header');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 70) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// const carousel = document.querySelector('#carousel .item');
// let position = 1;

// document.getElementById('prev').addEventListener('click', () => {
//     position = position > 1 ? position - 1 : 5;
//     document.getElementById(`pos${position}`).checked = true;
// });

// document.getElementById('next').addEventListener('click', () => {
//     position = position < 5 ? position + 1 : 1;
//     document.getElementById(`pos${position}`).checked = true;
// });

// setInterval(() => {
//     position = position < 5 ? position + 1 : 1;
//     document.getElementById(`pos${position}`).checked = true;
// }, 3000);
 
// window.setTimeout(function(){
//     $('.skill-progress').addClass("go");
//   }, 1000);

  let menuList = document.getElementById("menuList")
  menuList.style.maxHeight = "0px";

  function toggleMenu(){
      if(menuList.style.maxHeight == "0px")
      {
          menuList.style.maxHeight = "300px";
      }
      else{
          menuList.style.maxHeight = "0px";
      }
  }
  