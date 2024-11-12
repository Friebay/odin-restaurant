import loadHomePage from './loadHomePage';
import loadMenu from './menu';
import loadContact from './contact';

// Load the initial homepage content
loadHomePage();

// Get buttons from the navigation bar
const homeBtn = document.getElementById('homeBtn');
const menuBtn = document.getElementById('menuBtn');
const aboutBtn = document.getElementById('aboutBtn');

// Clear content and load the correct tab
function clearAndLoad(loadFunction) {
  const content = document.getElementById('content');
  content.innerHTML = ''; // Clear existing content
  loadFunction(); // Load new content
}

// Add event listeners for the buttons
homeBtn.addEventListener('click', () => {
  clearAndLoad(loadHomePage); // Reload the homepage content
});

menuBtn.addEventListener('click', () => {
  clearAndLoad(loadMenu); // Load the menu content
});

aboutBtn.addEventListener('click', () => {
  clearAndLoad(loadContact); // Load the contact content
});
