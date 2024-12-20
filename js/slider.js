// Query elements for app1
const prevBtnApp1 = document.querySelector("#app1 .prev-arrow");
const nextBtnApp1 = document.querySelector("#app1 .next-arrow");
const sectionContainerApp1 = document.querySelector("#app1 .carousel-sections");
const dotsApp1 = document.querySelectorAll("#app1 .carousel-dot");

let currentIndexApp1 = 1; // Start at the first real slide for app1
let slidesApp1 = [];

// Clone slides for infinite effect
function cloneSlidesApp1() {
  const firstSlide = sectionContainerApp1.children[0];
  const lastSlide = sectionContainerApp1.children[sectionContainerApp1.children.length - 1];

  const firstClone = firstSlide.cloneNode(true);
  const lastClone = lastSlide.cloneNode(true);

  sectionContainerApp1.appendChild(firstClone);
  sectionContainerApp1.insertBefore(lastClone, firstSlide);

  slidesApp1 = document.querySelectorAll("#app1 .carousel-sections > div");
}

function renderApp1(transition = true) {
  const offset = currentIndexApp1 * slidesApp1[0].offsetWidth;
  sectionContainerApp1.style.transition = transition ? "transform 0.5s ease-in-out" : "none";
  sectionContainerApp1.style.transform = `translateX(-${offset}px)`;

  updateDotsApp1();
}

function nextApp1() {
  currentIndexApp1++;
  renderApp1();

  if (currentIndexApp1 >= slidesApp1.length - 1) {
    setTimeout(() => {
      currentIndexApp1 = 1;
      renderApp1(false);
    }, 500);
  }
}

function prevApp1() {
  currentIndexApp1--;
  renderApp1();

  if (currentIndexApp1 <= 0) {
    setTimeout(() => {
      currentIndexApp1 = slidesApp1.length - 2;
      renderApp1(false);
    }, 500);
  }
}

function updateDotsApp1() {
  // Reset all dots to inactive
  dotsApp1.forEach(dot => dot.classList.remove("active"));

  // Calculate the visible index
  let visibleIndex = currentIndexApp1 - 1;

  // Handle edge cases for clones
  if (currentIndexApp1 === 0) {
    visibleIndex = dotsApp1.length - 1;
  } else if (currentIndexApp1 === slidesApp1.length - 1) {
    visibleIndex = 0;
  }

  // Add active class to the correct dot
  dotsApp1[visibleIndex].classList.add("active");
}

// Initialize app1 carousel
function initApp1() {
  cloneSlidesApp1();
  slidesApp1 = document.querySelectorAll("#app1 .carousel-sections > div");
  renderApp1(false);

  prevBtnApp1.addEventListener("click", prevApp1);
  nextBtnApp1.addEventListener("click", nextApp1);

  // Add click functionality to dots
  dotsApp1.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentIndexApp1 = index + 1;
      renderApp1();
    });
  });

  // Add touch/swipe events
  let startX = 0, currentX = 0, isSwiping = false;

  sectionContainerApp1.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
    isSwiping = true;
    sectionContainerApp1.style.transition = "none";
  });

  sectionContainerApp1.addEventListener("touchmove", (e) => {
    if (!isSwiping) return;
    currentX = e.touches[0].clientX;
    const deltaX = currentX - startX;
    const offset = (currentIndexApp1 * slidesApp1[0].offsetWidth) - deltaX;
    sectionContainerApp1.style.transform = `translateX(-${offset}px)`;
  });

  sectionContainerApp1.addEventListener("touchend", () => {
    const swipeDistance = startX - currentX;
    if (swipeDistance > 50) nextApp1();
    else if (swipeDistance < -50) prevApp1();
    else renderApp1();
    isSwiping = false;
  });
}

initApp1();

// Query elements for app2
// Query elements for app2
const prevBtnApp2 = document.querySelector("#app2 .prev-arrow");
const nextBtnApp2 = document.querySelector("#app2 .next-arrow");
const sectionContainerApp2 = document.querySelector("#app2 .carousel-sections");
const dotsApp2 = document.querySelectorAll("#app2 .carousel-dot");

let currentIndexApp2 = 1; // Start at the first real slide for app2
let slidesApp2 = [];

// Clone slides for infinite effect
function cloneSlidesApp2() {
  const firstSlide = sectionContainerApp2.children[0];
  const lastSlide = sectionContainerApp2.children[sectionContainerApp2.children.length - 1];

  const firstClone = firstSlide.cloneNode(true);
  const lastClone = lastSlide.cloneNode(true);

  sectionContainerApp2.appendChild(firstClone);
  sectionContainerApp2.insertBefore(lastClone, firstSlide);

  slidesApp2 = document.querySelectorAll("#app2 .carousel-sections > div");
}

function renderApp2(transition = true) {
  const offset = currentIndexApp2 * slidesApp2[0].offsetWidth;
  sectionContainerApp2.style.transition = transition ? "transform 0.5s ease-in-out" : "none";
  sectionContainerApp2.style.transform = `translateX(-${offset}px)`;

  updateDotsApp2();
}

function nextApp2() {
  currentIndexApp2++;
  renderApp2();

  if (currentIndexApp2 >= slidesApp2.length - 1) {
    setTimeout(() => {
      currentIndexApp2 = 1;
      renderApp2(false);
    }, 500);
  }
}

function prevApp2() {
  currentIndexApp2--;
  renderApp2();

  if (currentIndexApp2 <= 0) {
    setTimeout(() => {
      currentIndexApp2 = slidesApp2.length - 2;
      renderApp2(false);
    }, 500);
  }
}

function updateDotsApp2() {
  // Reset all dots to inactive
  dotsApp2.forEach(dot => dot.classList.remove("active"));

  // Calculate the visible index
  let visibleIndex = currentIndexApp2 - 1;

  // Handle edge cases for clones
  if (currentIndexApp2 === 0) {
    visibleIndex = dotsApp2.length - 1;
  } else if (currentIndexApp2 === slidesApp2.length - 1) {
    visibleIndex = 0;
  }

  // Add active class to the correct dot
  dotsApp2[visibleIndex].classList.add("active");
}

// Initialize app2 carousel
function initApp2() {
  cloneSlidesApp2();
  slidesApp2 = document.querySelectorAll("#app2 .carousel-sections > div");
  renderApp2(false);

  prevBtnApp2.addEventListener("click", prevApp2);
  nextBtnApp2.addEventListener("click", nextApp2);

  // Add click functionality to dots
  dotsApp2.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentIndexApp2 = index + 1;
      renderApp2();
    });
  });

  // Add touch/swipe events
  let startX = 0, currentX = 0, isSwiping = false;

  sectionContainerApp2.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
    isSwiping = true;
    sectionContainerApp2.style.transition = "none";
  });

  sectionContainerApp2.addEventListener("touchmove", (e) => {
    if (!isSwiping) return;
    currentX = e.touches[0].clientX;
    const deltaX = currentX - startX;
    const offset = (currentIndexApp2 * slidesApp2[0].offsetWidth) - deltaX;
    sectionContainerApp2.style.transform = `translateX(-${offset}px)`;
  });

  sectionContainerApp2.addEventListener("touchend", () => {
    const swipeDistance = startX - currentX;
    if (swipeDistance > 50) nextApp2();
    else if (swipeDistance < -50) prevApp2();
    else renderApp2();
    isSwiping = false;
  });
}

initApp2();
