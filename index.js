import mpdImgOne from "./assets/mpd-1.jpg";
import mpdImgTwo from "./assets/mpd-2.jpg";
import mpdImgThree from "./assets/mpd-3.jpg";
import nsbcImgOne from "./assets/nsbc-1.jpg";
import nsbcImgTwo from "./assets/nsbc-2.jpeg";
import nsbcImgThree from "./assets/nsbc-3.jpeg";
import fbcgImgOne from "./assets/fbcg-1.jpg";
import fbcgImgTwo from "./assets/fbcg-2.jpg";

const websiteCards = document.querySelectorAll(".website-card");
const modalContainer = document.querySelector(".modal-container");
const overlay = document.querySelector(".overlay");
const modalImg = document.querySelector("#modal-img");
const closeBtn = document.querySelector(".modal-close");
const prevBtn = document.querySelector(".modal-prev");
const nextBtn = document.querySelector(".modal-next");

let currentPictureIndex = 0;
let selectedCardId = "";
const filterNodes = ['header', '.page-header', 'section.websites', 'section.logos', 'footer'];

const websitePics = {
  mpd: [mpdImgOne, mpdImgTwo, mpdImgThree],
  nsbc: [nsbcImgOne, nsbcImgTwo, nsbcImgThree],
  fbcg: [fbcgImgOne, fbcgImgTwo]
};

const closeModal = () => {
  filterNodes.forEach(s => {
    document.querySelector(s).style.filter = "blur(0px)";
  });
  document.body.scroll = "yes";
  document.body.style.overflow = "scroll";
  modalContainer.style.display = "none";
  overlay.style.display = "none";
  currentPictureIndex = 0;
  selectedCardId = ""
};

const loadImage = (src) => {
  modalImg.src = src;
};

const openModal = () => {
  modalContainer.style.display = "flex";
  overlay.style.display = "block";
  document.body.scroll = "no";
  document.body.style.overflow = "hidden";
  filterNodes.forEach(s => {
    document.querySelector(s).style.filter = "blur(3px)";
  });

};

const updateControlVisibility = () => {
  const piclistLength = websitePics[selectedCardId].length;
  // if index is the last pic in list dont show next
  if (currentPictureIndex === piclistLength - 1) {
    nextBtn.style.visibility = "hidden";
  } else {
    nextBtn.style.visibility = "visible";
  }

  // if index is the first pic in list dont show prev
  if (currentPictureIndex === 0) {
    prevBtn.style.visibility = "hidden";
  } else {
    prevBtn.style.visibility = "visible";
  }
};

overlay.addEventListener('click', closeModal);
closeBtn.addEventListener('click', closeModal);

websiteCards.forEach(c => {
    c.addEventListener('click', (e) => {
      selectedCardId = e.target.dataset.name;
      console.log(selectedCardId)
      loadImage(websitePics[selectedCardId][currentPictureIndex]);
      updateControlVisibility();
      openModal();
    });
  }
);

// assume next/previous is available
prevBtn.addEventListener('click', () => {
  // 1. Update current index
  currentPictureIndex--;
  // 2. Update prev/next visibility
  updateControlVisibility();
  // 3. Render new picture
  loadImage(websitePics[selectedCardId][currentPictureIndex]);
});

nextBtn.addEventListener('click', () => {
  // 1. Update current index
  currentPictureIndex++;
  // 2. Update prev/next visibility
  updateControlVisibility();
  // 3. Render new picture
  loadImage(websitePics[selectedCardId][currentPictureIndex]);
});
