(()=>{"use strict";const e=function(){const e=document.getElementById("content"),t=document.createElement("h1");t.textContent="Welcome to Our Restaurant!";const n=document.createElement("img");n.src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.opentable.co.uk%2Fblog%2Fwp-content%2Fuploads%2Fsites%2F110%2F2023%2F04%2Fsafeimagekit-grpetrus1890october202238_rpiipf-3-scaled.jpg&f=1&nofb=1&ipt=30468ce8574c960dc685e1228eefd859e7e6aa86adf6c9bac6beb3f403df4adf&ipo=images",n.alt="A welcoming view of our restaurant",n.style.width="100%",n.style.maxWidth="600px",n.style.height="auto";const c=document.createElement("p");c.textContent="Experience the finest dining with a delightful ambiance and exquisite cuisine crafted just for you. Our restaurant prides itself on offering an unforgettable culinary journey that brings friends and family together.",e.appendChild(t),e.appendChild(n),e.appendChild(c)},t=function(){const e=document.getElementById("content");e.innerHTML="";const t=document.createElement("div"),n=document.createElement("h2");n.textContent="Our Menu";const c=document.createElement("ul");["Pizza Margherita","Spaghetti Carbonara","Caesar Salad","Tiramisu"].forEach((e=>{const t=document.createElement("li");t.textContent=e,c.appendChild(t)})),t.appendChild(n),t.appendChild(c),e.appendChild(t)},n=function(){const e=document.getElementById("content");e.innerHTML="";const t=document.createElement("div"),n=document.createElement("h2");n.textContent="Contact Us";const c=document.createElement("p");c.textContent="For reservations, inquiries, or feedback, please reach out to us:";const o=document.createElement("p");o.textContent="Phone: +123 456 7890";const a=document.createElement("p");a.textContent="Email: contact@restaurant.com",t.appendChild(n),t.appendChild(c),t.appendChild(o),t.appendChild(a),e.appendChild(t)};e();const c=document.getElementById("homeBtn"),o=document.getElementById("menuBtn"),a=document.getElementById("aboutBtn");function d(e){document.getElementById("content").innerHTML="",e()}c.addEventListener("click",(()=>{d(e)})),o.addEventListener("click",(()=>{d(t)})),a.addEventListener("click",(()=>{d(n)}))})();