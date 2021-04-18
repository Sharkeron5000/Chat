const btn = document.querySelector('button');

function alert(string) {
  alert(string);
}

const addMessage = (event) => {
  if (event.code === 'Enter' || event.type === 'click') {
    const lengthLi = document.querySelectorAll('.chat li');
    const message = document.getElementById('message').value;
  
    const messageTemplate = `<li id="${lengthLi.length}" class="yourMessage">
    <p class="name">Я</p>
    <p class="message">${message}</p>
    </li>`;
  
    const chatWindow = document.getElementById('chat');
    chatWindow.insertAdjacentHTML('beforeend', messageTemplate);
    document.getElementById(lengthLi.length - 1).scrollIntoView();
  };
}

btn.addEventListener('click' , addMessage);
window.addEventListener('keypress' , addMessage);