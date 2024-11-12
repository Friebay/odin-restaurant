function loadHomePage() {
    const content = document.getElementById('content');
    
    const headline = document.createElement('h1');
    headline.textContent = 'Welcome to Our Restaurant!';
    
    const image = document.createElement('img');
    image.src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.opentable.co.uk%2Fblog%2Fwp-content%2Fuploads%2Fsites%2F110%2F2023%2F04%2Fsafeimagekit-grpetrus1890october202238_rpiipf-3-scaled.jpg&f=1&nofb=1&ipt=30468ce8574c960dc685e1228eefd859e7e6aa86adf6c9bac6beb3f403df4adf&ipo=images';  // Use a placeholder or replace with a path to your image
    image.alt = 'A welcoming view of our restaurant';
    image.style.width = '100%';
    image.style.maxWidth = '600px';
    image.style.height = 'auto';

    const description = document.createElement('p');
    description.textContent = 'Experience the finest dining with a delightful ambiance and exquisite cuisine crafted just for you. Our restaurant prides itself on offering an unforgettable culinary journey that brings friends and family together.';
    
    content.appendChild(headline);
    content.appendChild(image);
    content.appendChild(description);
  }
  
  export default loadHomePage;
  