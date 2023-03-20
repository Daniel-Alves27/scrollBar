const imagens = [
    {"url": "img/hitsugaya.png"},
    {"url": "img/kimetsu.jpg"},
    {"url": "img/narutoClassico.png"},
    {"url": "img/pikachuAndRaichu.png"},
    {"url": "img/sonic-mania.png"},
    {"url": "img/swordArtOnline.png"}
];

const container = document.querySelector(".container");
const containerImg = document.querySelector(".containerImg");

function carregarImagens(imagens) {
    imagens.forEach(Element => {
        const imagem = document.createElement("img");
        imagem.classList.add("item");
        imagem.src = Element.url
        containerImg.appendChild(imagem)
    })
}

carregarImagens(imagens);

let itens = document.querySelectorAll(".item");

let esquerdo = document.getElementById("esquerdo");
let direito = document.getElementById("direito");

esquerdo.addEventListener("click", ()=>{
    containerImg.appendChild(itens[0])
    itens = document.querySelectorAll(".item");
});

direito.addEventListener("click", ()=>{
    const lastItem = itens[itens.length - 1]
    containerImg.insertBefore(lastItem ,itens[0])
    itens = document.querySelectorAll(".item");
})