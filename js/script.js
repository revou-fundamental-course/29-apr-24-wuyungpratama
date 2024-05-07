// Form validation
function validateForm() {
  const name = document.forms["contact"]["name"].value;
  const mail = document.forms["contact"]["email"].value;
  const select = document.forms["contact"]["selection"].value;

  if (name == "" || email == "" || select == "") {
    alert("Tidak boleh ada yang kosong");
    return false;
  }
}

// slideshow automatic
let index = 0;
displayImages();

function displayImages() {
  let i;
  let images = document.getElementsByClassName("mySlide");
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  index++;
  if (index > images.length) {
    index = 1;
  }
  images[index - 1].style.display = "block";
  setTimeout(displayImages(), 2000);
}
