// var pann = document.getElementsByClassName("panel_heading");

// for (var i = 0; i < pann.length; i++) {
//     pann[i].addEventListener('click', function(){
//         this.classList.toggle('active');
//         var panel = this.nextElementSibling;
//         if (panel.style.maxHeight) {
//             panel.style.maxHeight = null;
//         } else {
//             panel.style.maxHeight = panel.scrollHeight + "px";
//         }
//     })
// }

var acc = document.getElementsByClassName("panel_heading");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

var a = 0;
let scroll = window.scrollY;
if (scroll > 500) {
  $(window).scroll(function () {
    $(".count-val").each(function () {
      var $this = $(this),
        countTo = $this.attr("data-count");
      $({
        countNum: $this.text(),
      }).animate(
        {
          countNum: countTo,
        },
        {
          duration: 4000,
          easing: "swing",
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
          },
        }
      );
    });
    a = 1;
  });
}


addEventListener("scroll", function () {
  var nav = document.getElementById("header");
  if (window.scrollY > 400) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
});
