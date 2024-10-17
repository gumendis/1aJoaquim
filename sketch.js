//aventura,fantasia,drama

//homem-aranha sem volta para casa,12,aventura
//segredo dos animais,Livre,fantasia,aventura
//vingadores guerra infinita,12,aventura,fantaisa 
//vingadores ultimato,12,aventura,fantasia
//LOKI,14,aventura,
//Stranger Things,16,drama
//Cobra kai,14,aventura,drama
//Jovem sheldon,10,drama
//Capitão America guerra civil,12,aventura,drama
//Doutor Estranho multiverso da loucura,14,ação,fantasia

let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800,400);
  createElement("h2","recomendador de filmes e series");
  createSpan("sua idade");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("gosta de fantasia?");
  campoAventura = createCheckbox("gosta de aventura?");
}

function draw() {
  background("#66EEFF");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);
  
  fill(color(10, 0, 150));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "LOKI";
    } else {
      if (idade >= 12) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "Homem Aranha sem volta para casa";          
        } else{
         return "Jovem Sheldon";
        }
      } else {
        if (gostaDeFantasia) {
          return "Vingadores guerra infinita";
        } else {
          return "Capitão America guerra civil";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "O segredo dos animais";
    } else {
      return "vingadores ultimato";
    }
  }
}

 