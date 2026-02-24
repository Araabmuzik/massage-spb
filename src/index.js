function burgerMenu() {
  const navButton = document.querySelector(".js-nav");
  const menu = document.querySelector(".js-nav-menu");
  const menuItem = document.querySelectorAll(".js-menu-item");
  const palka = document.querySelectorAll(".js-nav div");

  document.addEventListener("scroll", () => {
    navButton.classList.remove("opened");
    menu.classList.remove("animate__fadeInRight");
    menu.classList.add("animate__fadeOutRight");
    palka[0].style.transform = "";
    palka[0].style.marginBottom = "";

    palka[2].style.transform = "";
    setTimeout(() => {
      palka[1].style.display = "";
    }, 200);

    setTimeout(() => {
      if (!navButton.classList.contains("opened")) {
        menu.classList.add("hidden");
      }
    }, 1000);
  });
  navButton.addEventListener("click", () => {
    const isOpen = navButton.classList.contains("opened");

    if (!isOpen) {
      navButton.classList.add("opened");

      palka[0].style.transform = "rotate(45deg)";
      palka[0].style.marginBottom = "-8px";
      palka[1].style.display = "none";
      palka[2].style.transform = "rotate(-45deg)";
      menu.classList.remove("hidden", "animate__fadeOutRight");
      menu.classList.add("animate__animated", "animate__fadeInRight");
    } else {
      navButton.classList.remove("opened");
      menu.classList.remove("animate__fadeInRight");
      menu.classList.add("animate__fadeOutRight");
      palka[0].style.transform = "";
      palka[0].style.marginBottom = "";

      palka[2].style.transform = "";
      setTimeout(() => {
        palka[1].style.display = "";
      }, 200);

      setTimeout(() => {
        if (!navButton.classList.contains("opened")) {
          menu.classList.add("hidden");
        }
      }, 1000);
    }
  });

  menuItem.forEach((element) => {
    element.addEventListener("click", () => {
      navButton.classList.remove("opened");
      menu.classList.remove("animate__fadeInRight");
      menu.classList.add("animate__fadeOutRight");
      palka[0].style.transform = "";
      palka[0].style.marginBottom = "";

      palka[2].style.transform = "";
      setTimeout(() => {
        palka[1].style.display = "";
      }, 200);
      setTimeout(() => {
        if (!navButton.classList.contains("opened")) {
          menu.classList.add("hidden");
        }
      }, 1000);
    });
  });
}

burgerMenu();
