// Add a smooth hover effect and dynamic message on hover
const socialLinks = document.querySelectorAll(".social-link");

socialLinks.forEach((link) => {
  link.addEventListener("mouseover", () => {
    document.body.style.backgroundColor =
      getComputedStyle(link).backgroundColor;
  });

  link.addEventListener("mouseout", () => {
    document.body.style.backgroundColor =
      "linear-gradient(120deg, #84fab0, #8fd3f4)";
  });
});
