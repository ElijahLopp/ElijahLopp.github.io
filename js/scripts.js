// Menu Mobile

// Primeiro Botão
var first_buttom = document.getElementById("hamburguer-icon");
var shott_doun = document.getElementById("sliding-header-menu-close-button");

first_buttom.onclick = function() {
  document.getElementById("sliding-header-menu-outer").style.transition = "1s";
  document.getElementById("sliding-header-menu-outer").style.transition +=
    "case-out";
  document.getElementById("sliding-header-menu-outer").style.right = "0";
};

shott_doun.onclick = function() {
  document.getElementById("sliding-header-menu-outer").style.transition = "1s";
  document.getElementById("sliding-header-menu-outer").style.transition +=
    "case-out";
  document.getElementById("sliding-header-menu-outer").style.right = "-320px";
};
// Fim do primeiro botão

// About us Tab

var aboutUs = {
  Missão:
    "Fazer com que cada cliente seja reconhecido como autoridade em seu segmento de atuação. Agregar valor ao negócio, potencializar o crescimento das operações e promover e estreitar o relacionamento do cliente com o seu público alvo, por meio da geração de conteúdo de relevância.",
  Visão:
    "Ser reconhecida pelos clientes e pelo mercado como uma empresa parceira, inovadora e criativa, que oferece sempre os melhores produtos e soluções em Comunicação Empresarial Integrada.",
  Valores:
    "<ul><li>Comprometimento</li><li>Inovação</li><li>Ética profissional</li><li>Superação dos resultados</li><li>Melhoria contínua</li></ul>"
};

var unseletected_color = "#646872";
var seletected_color = "#2A2D34";

var about_tags = document.getElementsByClassName("single-tab");
document.getElementById("box-text").innerHTML = aboutUs.Missão;

for (var a = 0; a < about_tags.length; a++) {
  about_tags[a].onclick = function() {
    for (var b = 0; b < about_tags.length; b++) {
      about_tags[b].style["background-color"] = unseletected_color;
      about_tags[b].style["font-weight"] = "normal";
    }

    this.style["background-color"] = seletected_color;
    this.style["font-weight"] = "bold";

    var selecionado = this.innerHTML;

    document.getElementById("box-text").innerHTML = aboutUs[selecionado];
  };
}

// Slider de serviços

var our_services = [
  {
    title: "Webdesign",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi."
  },

  {
    title: "Branding",
    text:
      "Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi."
  },

  {
    title: "Marketing Digital",
    text:
      "Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus."
  }
];

//service-privious
//service-next
//service-title
//service-text

var servico_atual = 0;

//Buttom Next
var buttom_next = document.getElementById("service-next");

buttom_next.onclick = function() {
  servico_atual += 1;
  if (servico_atual <= our_services.length - 1) {
    document.getElementById("service-title").innerHTML =
      our_services[servico_atual].title;
    document.getElementById("service-text").innerHTML =
      our_services[servico_atual].text;
  } else {
    servico_atual = 0;
    document.getElementById("service-title").innerHTML =
      our_services[servico_atual].title;
    document.getElementById("service-text").innerHTML =
      our_services[servico_atual].text;
  }
};

//Buttom Previous
var buttom_previous = document.getElementById("service-previous");

buttom_previous.onclick = function() {
  servico_atual -= 1;
  if (servico_atual < 0) {
    servico_atual = our_services.length - 1;
    document.getElementById("service-title").innerHTML =
      our_services[servico_atual].title;
    document.getElementById("service-text").innerHTML =
      our_services[servico_atual].text;
  } else {
    document.getElementById("service-title").innerHTML =
      our_services[servico_atual].title;
    document.getElementById("service-text").innerHTML =
      our_services[servico_atual].text;
  }
};
// Data Footer
var ano_atual = new Date();

document.getElementById("current_year").innerHTML = ano_atual.getFullYear();

// API Key Google: AIzaSyC5jZfWuTYpgOF_EZUSOAFSqwVZ6CSN6oY
