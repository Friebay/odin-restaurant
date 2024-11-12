function loadMenu() {
    const content = document.getElementById('content');
    
    // Clear current content
    content.innerHTML = '';
  
    // Create a div for the menu content
    const menuDiv = document.createElement('div');
    
    const headline = document.createElement('h2');
    headline.textContent = 'Our Menu';
  
    const menuItems = [
      'Pizza Margherita',
      'Spaghetti Carbonara',
      'Caesar Salad',
      'Tiramisu'
    ];
  
    const list = document.createElement('ul');
    menuItems.forEach(item => {
      const listItem = document.createElement('li');
      listItem.textContent = item;
      list.appendChild(listItem);
    });
  
    menuDiv.appendChild(headline);
    menuDiv.appendChild(list);
    content.appendChild(menuDiv);
  }
  
  export default loadMenu;
  