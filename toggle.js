function toggleVisibility() {
  var element = document.getElementById("toggleElement");
  element.classList.toggle("listHidden");

  var imgElement = document.getElementById("menuToggleImg");
  if (
    imgElement.src.endsWith(
      "https://i.ibb.co/f0qdNB1/134216-menu-lines-hamburger-icon.png"
    )
  ) {
    imgElement.src = "https://i.ibb.co/94cRJ4g/10758949-x-icon.png";
  } else {
    imgElement.src =
      "https://i.ibb.co/f0qdNB1/134216-menu-lines-hamburger-icon.png";
  }
}
