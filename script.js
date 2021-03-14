// Tabela 1
let maeTabela1 = document.getElementById("tabela1");
let paleta = document.createElement("table");
paleta.id = "color-palette";
maeTabela1.appendChild(paleta);

for(index = 0; index < 5; index += 1){
    let criaColuna = document.createElement("td");
    criaColuna.className = "color";
    paleta.appendChild(criaColuna);

}
// Edita tabela 1
// criaColuna.style.backgroundColor = "black";
let colunaPaleta = document.getElementsByClassName("color");
// letcolunaPaleta = document.getElementsByClassName("color");
colunaPaleta[0].style.backgroundColor = "black";
colunaPaleta[0].className = "selected color";
colunaPaleta[1].style.backgroundColor = "green";
colunaPaleta[2].style.backgroundColor = "blue";
colunaPaleta[3].style.backgroundColor = "yellow";
colunaPaleta[4].style.backgroundColor = "white";

// if (colunaPaleta[0].style.backgroundColor == "black"){
//     colunaPaleta.className = "selected color";
// }

/////////////////////////////////////////////////////////////////////////////////////////

// colunaPaleta2 = document.getElementsByClassName("pixel");
// colunaPaleta2[0].style.backgroundColor = "white";
// colunaPaleta2[1].style.backgroundColor = "white";
// colunaPaleta2[2].style.backgroundColor = "white";
// colunaPaleta2[3].style.backgroundColor = "white";

// Tabela 2

let maeBotaoAdd = document.getElementById("botao-add");
let input = document.createElement("input");
let botaoAdd = document.createElement("button");
botaoAdd.id = "btn-add";
botaoAdd.innerText = "#VQV";
maeBotaoAdd.appendChild(input);
maeBotaoAdd.appendChild(botaoAdd);

let maeTabela2 = document.getElementById("tabela2");
let quadrado = document.createElement("table");
quadrado.id = "pixel-board";
maeTabela2.appendChild(quadrado);
// let pegaValorInput = document.getElementsByTagName("input");

//quantidade de quadrado
/* for(i = 0;i < 5;i += 1){
    let linhaTabela = document.createElement("tr");
    linhaTabela.className = "linha descendo";

for(j = 0;j < 5;j += 1){
    let criaColuna2 = document.createElement("td");
    criaColuna2.className = "pixel";
    linhaTabela.appendChild(criaColuna2);
    quadrado.appendChild(linhaTabela);
 }
}  */

//quantidade de quadrado pelo input

  let pegaBotao = document.getElementById("btn-add");
  pegaBotao.addEventListener("click", function () { 
    const corDivPixel = document.querySelector('#pixel-board');
    corDivPixel.innerHTML = '';
    // console.log("xablis")
    // let pegaValorInput = document.getElementsByTagName("input");
    for(i = 0;i < input.value;i += 1){
      console.log("xablis")
      let linhaTabela = document.createElement("tr");
      linhaTabela.className = "linha descendo";
  
    for(j = 0;j < input.value;j += 1){
      let criaColuna2 = document.createElement("td");
      criaColuna2.className = "pixel";
      linhaTabela.appendChild(criaColuna2);
      quadrado.appendChild(linhaTabela);
      }
    }
  })
  // function clickPixel(eventoDeOrigem) {
  //   aux = eventoDeOrigem.target;
  //   if (corPixel.className === 'color') {
  //     aux.style.backgroundColor = corSalva;
  //   } else {
  //     aux.style.backgroundColor = corSalva;
  //   }
  // }
  // corDivPixel.addEventListener('click', clickPixel);



//////////////////////////////////////////////////////////////////////////
// for (let index = 0; index < colunaPaleta.length; index += 1){
//     colunaPaleta[index].addEventListener("click", function (){
//         colunaPaleta[index].style.backgroundColor = "blue";
//     });
// }


// function addClassToPaletteBox() {
//     let pegaPaleta = document.getElementsByClassName("color"); 
//     for (let index = 0; index < pegaPaleta.length; index += 1){
//         // pegaPaleta[index].classList.add(`color${index + 1}`);

//         if (getComputedStyle(pegaPaleta[index]).backgroundColor === 'rgb(0, 0, 0)') {
//             pegaPaleta[index].classList.add('selected');
//           }
//     }
// }

// adiciona e remove classe
function clickPaletteBox(event) {
    const pegaSelected = document.querySelector('.selected');
    pegaSelected.classList.remove('selected');
    event.target.classList.add('selected');
}

function addBoxClickEvent() {
    const paleta = document.getElementsByClassName('color');
    for (let index = 0; index < paleta.length; index += 1) {
    paleta[index].addEventListener('click', clickPaletteBox);
  }
}

// const colorPalette = 'color-palette';

window.onload = 
    // addClassToPaletteBox();
    addBoxClickEvent();
    
    // let selectedColor = document.querySelector('.selected').style.backgroundColor;
  
/////////////////////////////////////////////////////////////////////////////////////////////
//pinta pixel
  function pinta() {

    const cor = document.querySelectorAll('.pixel');// aqui está o B.O
    console.log(cor);
    
    for (let index = 0; index < cor.length; index += 1) {
      console.log("ola")
        cor[index].addEventListener('click', function (event)  {
        // const element = event;
        const corSelecionada = document.querySelector('.selected').style.backgroundColor;
        event.target.style.backgroundColor = corSelecionada;
      }) 
    }
  }
  const botaoo = document.getElementById("btn-add");
  botaoo.addEventListener('click', pinta);


// document.getElementsByClassName('color')[0].style.backgroundColor = 'black';
// document.getElementsByClassName('color')[0].className += ' selected';
// document.getElementsByClassName('color')[1].style.backgroundColor = 'red';


let maeBotao = document.getElementById("botao-limpa");
let botaoLimpa = document.createElement("button");
botaoLimpa.id = "clear-board";
botaoLimpa.innerText = "Limpar";
maeBotao.appendChild(botaoLimpa);


botaoLimpa.addEventListener("click", function () {
  let pegaQuadro = document.querySelectorAll(".pixel");
  for  (let index = 0; index < pegaQuadro.length; index += 1){ 
    pegaQuadro[index].style.backgroundColor = "white";
  }
});

function corAleatoria() {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  document.getElementsByClassName('color')[0].style.backgroundColor = 'rgb(0,0,0)';
  document.getElementsByClassName('color')[1].style.backgroundColor = `rgb(${g},${b},${r})`;
  document.getElementsByClassName('color')[2].style.backgroundColor = `rgb(${b},${g},${r})`;
  document.getElementsByClassName('color')[3].style.backgroundColor = `rgb(${r},${b},${g})`;
}
corAleatoria();

// let pegaParagrafo =  document.getElementsByName("p");

// for (let index = 0; index < pegaParagrafo.length; index += 1){
//     let textoParagrafo = pegaParagrafo[index]. innerText;
// }

// let maeBotaoAdd = document.getElementById("botao-add");
// let input = document.createElement("input");
// let botaoAdd = document.createElement("button");
// botaoAdd.innerText = "#VQV";
// maeBotaoAdd.appendChild(input);
// maeBotaoAdd.appendChild(botaoAdd);

