function loadContact() {
  const content = document.getElementById('content');
  
  // Clear current content
  content.innerHTML = '';

  // Create a div for the contact content
  const contactDiv = document.createElement('div');
  
  const headline = document.createElement('h2');
  headline.textContent = 'Contact Us';

  const contactInfo = document.createElement('p');
  contactInfo.textContent = 'For reservations, inquiries, or feedback, please reach out to us:';
  
  const phone = document.createElement('p');
  phone.textContent = 'Phone: +123 456 7890';

  const email = document.createElement('p');
  email.textContent = 'Email: contact@restaurant.com';

  contactDiv.appendChild(headline);
  contactDiv.appendChild(contactInfo);
  contactDiv.appendChild(phone);
  contactDiv.appendChild(email);
  content.appendChild(contactDiv);
}

export default loadContact;
