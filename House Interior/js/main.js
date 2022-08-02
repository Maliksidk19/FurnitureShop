const activeLink = document.querySelectorAll(".nav-item");

activeLink.forEach((link) => {
  link.addEventListener("click", () => {
    activeLink.forEach((link) => {
      link.classList.remove("active");
    });
    link.classList.add("active");
  });
});

const navLink = document.querySelectorAll("#nav-link");

navLink.forEach((val) => {
  val.addEventListener("click", () => {
    navLink.forEach((val) => {
      val.classList.remove("py-4");
      val.classList.remove("text-white-50");
      val.classList.add("text-black-50");
    });
    val.classList.add("py-4");
    val.classList.add("text-white-50");
  });
});
