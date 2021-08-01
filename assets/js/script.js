$(function() {
  if (window.location.pathname == "/index.html") {
    document.querySelector("#home").classList.add("active");
  } else if (window.location.pathname == "/about.html") {
    document.querySelector("#about").classList.add("active");
  } else if (window.location.pathname == "/tour.html") {
    document.querySelector("#tour").classList.add("active");
  }
})