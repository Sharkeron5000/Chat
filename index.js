const btn = document.querySelector('button');

function alert(string) {
  alert(string);
}

const addMessage = (event) => {
  if (event.code === 'Enter' || event.type === 'click') {
    const lengthLi = document.querySelectorAll('.chat li');
    const message = document.getElementById('message').value;
    const user = document.getElementById('selectUser').options.selectedIndex;
    let classMessage = '';
    let nick = '';
    if (user) {
      classMessage = "friendMessage";
      nick = "Друг"
    } else {
      classMessage = "yourMessage";
      nick = "Я"
    }
    
    const messageTemplate = `<li id="${lengthLi.length}" class=${classMessage}>
    <p class="name">${nick}</p>
    <p class="message">${message}</p>
    </li>`;
  
    const chatWindow = document.getElementById('chat');
    chatWindow.insertAdjacentHTML('beforeend', messageTemplate);
    document.getElementById(lengthLi.length - 1).scrollIntoView();
  };
}

btn.addEventListener('click' , addMessage);
window.addEventListener('keypress' , addMessage);