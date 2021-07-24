function setTheme(name) {
  document.querySelector(`.${name}`).onclick = () => {
    root(name);
  };
}

setTheme("black");
setTheme("yellow");
setTheme("blue");

function root(name) {
  let bodyColor = document.querySelector('body')
  let logo = document.querySelector('.logo');

  console.log(name);

  if (name == "black") {
    bodyColor.style.setProperty('background-color', 'var(--black)');
    logo.style.setProperty("color", `var(--vermelho)`);
    changeA("var(--gold)")
    return false;
     
    
  } else if (name == "yellow") {
    bodyColor.style.setProperty('background-color', 'var(--yellow)');
    logo.style.setProperty("color", `var(--black)`);
    changeA("var(--black)")
    return false;
    
  } else 
    bodyColor.style.setProperty('background-color', 'var(--blue)');
    logo.style.setProperty("color", `var(--amazonWhite)`);
    changeA("var(--amazonWhite)");
    return false;
   
    
}

function changeA(color){
    let a = document.querySelectorAll('a');


    for (let index = 0; index < a.length; index++) {
        
        a[index].style.setProperty("color", `${color}`);
    }
}

new Splide(".splide", {
  type: "loop",
  padding: {
    right: "20rem",
    left: "0",
  },
  autoWidth: true,
  focus: "lefth",
  perPage: 5,
  trimSpace: false,
}).mount();
