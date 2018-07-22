const container = document.querySelector('#container');

const p = document.createElement('p')
p.textContent = "Hey I'm red!";
p.style.color = 'red';
container.appendChild(p);

const h3 = document.createElement('h3');
h3.textContent = "I'm a blue h3!";
h3.style.color = 'blue';
container.appendChild(h3);

const pinkBox = document.createElement('div');
pinkBox.style.cssText = 'background:pink; border:black';
pinkBox.textContent = "Can you see me!?";

const h1 = document.createElement('h1');
h1.textContent = "I'm in a div";
pinkBox.appendChild(h1);
const p2 = document.createElement('p')
p2.textContent = 'ME TOO!'
pinkBox.appendChild(p2);

container.appendChild(pinkBox);


var btn = document.querySelector('#btn');
btn.addEventListener('click', function(e){
  e.target.style.background = 'blue'
});


function alertFunction() {
  alert("YAY! YOU DID IT!");
}

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', (e) => {
    alert(button.id);
  });
});
