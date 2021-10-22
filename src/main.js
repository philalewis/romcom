// Create variables targetting the relevant DOM elements here 👇
var randomButton = document.querySelector('.random-cover-button');
var coverImage = document.querySelector('.cover-image');
var randomTitles = document.querySelector('.cover-title');
var taglineOne = document.querySelector('.tagline-1');
var taglineTwo = document.querySelector('.tagline-2');
var makeCoverButton = document.querySelector('.make-new-button');
var formPage = document.querySelector('.form-view');
var homePage = document.querySelector('.home-view');
var homeButton = document.querySelector('.home-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var viewSavedButton = document.querySelector('.view-saved-button');
var viewSavedPage = document.querySelector('.saved-view');
var makeBookButton = document.querySelector('.create-new-book-button');
var imgInput = document.querySelector('.user-cover');
var titleInput = document.querySelector('.user-title');
var desc1Input = document.querySelector('.user-desc1');
var desc2Input = document.querySelector('.user-desc2');
var savedCoverSection = document.querySelector('.saved-covers-section');

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover = new Cover(coverImage.src, randomTitles.innerText, taglineOne.innerText, taglineTwo.innerText);

// Add your event listeners here 👇
randomButton.addEventListener('click', randomizeCover);
makeCoverButton.addEventListener('click', showCoverForm);
viewSavedButton.addEventListener('click', showSavedCovers);
homeButton.addEventListener('click', goHome);
makeBookButton.addEventListener('click', function(event){
  event.preventDefault()
  makeBook(imgInput.value, titleInput.value, desc1Input.value, desc2Input.value);
});
saveCoverButton.addEventListener('click', saveCover);

// Create your event handlers here 👇
document.onload = randomizeCover();

// Functions here
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function randomizeCover() {
  coverImage.src = covers[getRandomIndex(covers)];
  randomTitles.innerText = titles[getRandomIndex(titles)];
  taglineOne.innerText = descriptors[getRandomIndex(descriptors)];
  taglineTwo.innerText = descriptors[getRandomIndex(descriptors)];
}

function showCoverForm() {
  formPage.classList.remove('hidden');
  homePage.classList.add('hidden');
  homeButton.classList.remove('hidden');
  randomButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
}

function showSavedCovers() {
  viewSavedPage.classList.remove('hidden');
  formPage.classList.add('hidden');
  homePage.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  homeButton.classList.remove('hidden');
  randomButton.classList.add('hidden');
  displaySavedCovers();
}

function goHome() {
  homePage.classList.remove('hidden');
  viewSavedPage.classList.add('hidden');
  formPage.classList.add('hidden');
  homeButton.classList.add('hidden');
  randomButton.classList.remove('hidden');
  saveCoverButton.classList.remove('hidden');
}

function makeBook(cover, title, descriptorOne, descriptorTwo) {
  var currentCover = new Cover(cover, title, descriptorOne, descriptorTwo);
  covers.push(cover);
  titles.push(title);
  descriptors.push(descriptorOne, descriptorTwo);
  coverImage.src = covers[covers.length -1];
  randomTitles.innerText = titles[titles.length -1];
  taglineOne.innerText = descriptors[descriptors.length -2];
  taglineTwo.innerText = descriptors[descriptors.length -1];
  goHome();
}

function saveCover() {
  currentCover = new Cover(coverImage.src, randomTitles.innerText, taglineOne.innerText, taglineTwo.innerText);
  // if (!savedCovers.includes(currentCover)) {
  //   savedCovers.push(currentCover);
  // }
  for (let i = 0; i < savedCovers.length; i++) {
    if (currentCover.cover === savedCovers[i].cover &&
        currentCover.title === savedCovers[i].title &&
        currentCover.tagline1 === savedCovers[i].tagline1 &&
        currentCover.tagline2 === savedCovers[i].tagline2) {
      return savedCovers;
    }
  }
  savedCovers.push(currentCover);
}

function displaySavedCovers() {
  // savedCoverSection.innerHTML = ``;
  for (let i = 0; i < savedCovers.length; i++) {
    savedCoverSection.innerHTML += `
      <div class="saved-covers" id=${savedCovers[i].id}>
        <img src=${savedCovers[i].cover}>
        <h2 class="cover-title">${savedCovers[i].title}</h2>
        <h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3>
      </div>
    `
  }
}
