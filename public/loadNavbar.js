const links = document.querySelectorAll(".nav-links a");
const currentPage = window.location.pathname.split("/").pop();

links.forEach(link => {
  const linkPage = link.getAttribute("href");

  if (linkPage === currentPage) {
    link.parentElement.classList.add("active");
  } else {
    link.parentElement.classList.remove("active");
  }
});
