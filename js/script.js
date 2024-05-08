// Form validation
function validateForm() {
  const name = document.forms["contact"]["name"].value;
  const mail = document.forms["contact"]["email"].value;
  const select = document.forms["contact"]["selection"].value;

  if (name == "" || email == "" || select == "") {
    alert("Tidak boleh ada yang kosong");
    return false;
  } else {
    alert("Data sudah kami terima " + name);
  }
}

// slideshow automatic
var slideIndex = 1;
slideShow(1);

function plusSlide(n) {
  slideShow((slideIndex += n));
}

function slideShow(n) {
  var i;
  var images = document.getElementsByClassName("mySlide");
  if (n > images.length) slideIndex = 1;
  // else if (n < 1) slideIndex = images.length;

  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }

  // var i = 0;
  // while (i < images.length) {
  //   images[i].style.display = "none";
  //   i++;
  // }

  images[slideIndex - 1].style.display = "block";
}

setInterval(() => plusSlide(1), 2000);
