import loadHomePage from './loadHomePage';
import loadMenu from './menu';
import loadContact from './contact';

loadHomePage();

const homeBtn = document.getElementById('homeBtn');
const menuBtn = document.getElementById('menuBtn');
const aboutBtn = document.getElementById('aboutBtn');

function clearAndLoad(loadFunction) {
  const content = document.getElementById('content');
  content.innerHTML = ''; // Clear existing content
  loadFunction();
}

homeBtn.addEventListener('click', () => {
  clearAndLoad(loadHomePage);
});

menuBtn.addEventListener('click', () => {
  clearAndLoad(loadMenu);
});

aboutBtn.addEventListener('click', () => {
  clearAndLoad(loadContact);
});
