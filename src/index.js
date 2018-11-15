/*
The "source" code is the code that we'll write and edit. 
The "distribution" code is the minimized and optimized output
 of our build process that will eventually be loaded in the browser
*/

function component() {
  let element = document.createElement('div');

  document.getElementById(id).innerHTML = (<h2>Hello Webpack!</h2>)

  return element;
}

document.body.appendChild(component());