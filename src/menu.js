function loadMenu() {
    const content = document.getElementById('content');
    
    content.innerHTML = '';

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
  