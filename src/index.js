function component() {
  let element = document.createElement('div');

  document.getElementById(id).innerHTML = (<h2>Hello Webpack!</h2>)

  return element;
}

document.body.appendChild(component());