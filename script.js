const sliderContent = [
  {
    title: "Discover innovative ways to decorate",
    text: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    img: "images/desktop-image-hero-1.jpg",
  },
  {
    title: "We are available all across the globe",
    text: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    img: "images/desktop-image-hero-2.jpg",
  },
  {
    title: "Manufactured with the best materials",
    text: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
    img: "images/desktop-image-hero-3.jpg",
  },
];

function addEvent(element, type, handler) {
  element.addEventListener(type, handler);
}

function AddEventToSlider(i, slidesContent) {
  let index = i || 0;
  const sliderPrevBtn = document.getElementById("sliderPrevBtn");
  const sliderNextBtn = document.getElementById("sliderNextBtn");
  addEvent(sliderPrevBtn, "click", updateSlides);
  addEvent(sliderNextBtn, "click", updateSlides);

  function updateSlides(e) {
    if (e.currentTarget.id === "sliderPrevBtn") {
      index = index - 1;
    } else {
      index++;
    }
    if (index > slidesContent.length - 1) {
      index = 0;
    } else if (index < 0) {
      index = slidesContent.length - 1;
    }
    const slideTitle = document.getElementById("slideTitle");
    const slideText = document.getElementById("slideText");
    const slideImg = document.getElementById("slideImg");
    slideTitle.textContent = slidesContent[index].title;
    slideText.textContent = slidesContent[index].text;
    slideImg.src = slidesContent[index].img;
  }
}

AddEventToSlider(0, sliderContent);

// Navigation OPen
const navToggler = document.querySelector(".nav-toggler");

function navToggleHandler() {
  const header = document.querySelector("header");
  header.classList.toggle("nav-open");
}
addEvent(navToggler, "click", navToggleHandler);
