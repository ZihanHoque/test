function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      $('#itemimg').attr('src', e.target.result)
    };

    reader.readAsDataURL(input.files[0]);
    document.getElementById("itemimg").style.visibility="visible";
  }
}
// https://stackoverflow.com/questions/12368910/html-display-image-after-selecting-filename