// tab
const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const targetTabContent = document.querySelector(
      `#${tab.dataset.tabTarget}`
    );
    tabs.forEach((tab) => tab.classList.remove("active"));
    tabContents.forEach((tabContent) => tabContent.classList.remove("active"));
    tab.classList.add("active");
    targetTabContent.classList.add("active");
  });
});

// navbar
const toggler = document.querySelector(".nav__toggler");
const navbar = document.querySelector(".nav");
const navList = document.querySelector(".nav__list");
toggler.addEventListener("click", () => {
  navbar.classList.toggle("nav__expanded");
  navList.style.marginTop = navbar.classList.contains("nav__expanded")
    ? "3rem"
    : "0";
});

// scroll
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const reward = document.querySelector(".reward");
const rewardItem = document.querySelectorAll(".reward__item");

prevBtn.addEventListener("click", () => {
  reward.scrollTo({
    left: reward.scrollLeft + rewardItem[0].clientWidth + 20,
    behavior: "smooth",
  });
});

nextBtn.addEventListener("click", () => {
  reward.scrollTo({
    left: reward.scrollLeft - rewardItem[0].clientWidth - 20,
    behavior: "smooth",
  });
});

// accordion (drop down)  for one item
// const accordionHeader = document.querySelector(".accordion__header");
// const accordion = document.querySelector(".accordion");
// accordionHeader.addEventListener("click", () => {
//   accordion.classList.toggle("accordion__expanded");
// });

// accordion (drop down)  for several items
const accordionHeader = document.querySelectorAll(".accordion__header");
const accordion = document.querySelectorAll(".accordion");
accordionHeader.forEach((header) => {
  header.addEventListener("click", () => {
    header.parentElement.classList.toggle("accordion__expanded");
  });
});
