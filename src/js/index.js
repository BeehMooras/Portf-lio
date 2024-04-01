var linkProjetos = [
    
    // {
    //     linkProjeto:"",
    //     linkImg: "",
    //     span: "",
    //     title:"",
    //     subTitle:"",
    //     resumo:"",
    //     like:"",
    // },
    {
        linkProjeto:"https://codepen.io/Mooras/pen/WNOPVGX",
        linkImg: "",
        span: "2021 - Atual",
        title:"Conversor de Moedas",
        subTitle:"Front-End",
        resumo:"Projeto produzido para introduzir meus conhecimentos em JS, usando calculos feitos pelo próprio computador",
        like: 0 
    },
    {
        linkProjeto:"https://beehmooras.github.io/calculaMedia/",
        linkImg: "",
        span: "2021 - Atual",
        title:"Calculadora de Médias",
        subTitle:"Front-End",
        resumo:"Projeto produzido para introduzir meus conhecimentos em JS, usando calculos feitos pelo próprio computador",
        like: 0
    },
    {
        linkProjeto:"https://codepen.io/Mooras/pen/BamXVE",
        linkImg: "",
        span: "",
        title:"O mentalista",
        subTitle:"",
        resumo:"",
        like:"",
    },
    {
        linkProjeto:"https://codepen.io/Mooras/pen/QWaNLBR",
        linkImg: "",
        span: "",
        title:"Tabela de classificação",
        subTitle:"",
        resumo:"",
        like:"",
    },
    {
        linkProjeto:"https://codepen.io/Mooras/pen/RwxabYM?editors=0010",
        linkImg: "",
        span: "",
        title:"Super Trunfo",
        subTitle:"",
        resumo:"",
        like:"",
    },
    
    {
        linkProjeto:"https://beehmooras.github.io/SPZ-XMEN/",
        linkImg: "",
        span: "",
        title:"Imersao DevEmDobro",
        subTitle:"Escolha seu herói - X-Man",
        resumo:"Imersão frontEnd com o tema X-Man",
        like:"",
    },
    {
        linkProjeto:"https://beehmooras.github.io/SZP-OnePiece/",
        linkImg: "",
        span: "",
        title:"Imersao DevEmDobro",
        subTitle:"Escolha seu pirata - One Piece",
        resumo:"Imersao frontEnd com o tema One Piece",
        like:"",
    },
    {
        linkProjeto:"https://beehmooras.github.io/ConversorMoedas/",
        linkImg: "",
        span: "Abril - 2023",
        title:"Conversor de Moedas",
        subTitle:"Front-End",
        resumo:"Converta seu dinheiro em R$ para U$, €$, E ₿$",
        like:"",
    },
    {
        linkProjeto:"https://beehmooras.github.io/minhaVitrine/",
        linkImg: "",
        span: "Março - 2023",
        title:"Compila Links",
        subTitle:"Front-End",
        resumo:"Apresentação de minhas redes sociais",
        like:"",
    },
    {
        linkImg: "https://beehmooras.github.io/EnjoyTechs/",
        linkProjeto:"",
        span: "Fevereiro - 2022",
        title:"Apresentação TCC",
        subTitle:"Front-End",
        resumo:"Uma apresentação de TCC com produto e empresa falsos",
        like:"",
    },
    {
        linkProjeto:"https://beehmooras.github.io/CertifiCard/",
        linkImg: "",
        span: " Janeiro - 2022",
        title:"Cartão de visitas",
        subTitle:"Front-End",
        resumo:"Cartão de visitas mostrando meus conhecimentos em html, css e js",
        like:"",
    },
    
];
function Projetos() {
	var elementProjetos = document.getElementById("projetos");
	var elemento = "";
	console.log(linkProjetos.length);

	for (let i = 0; i < linkProjetos.length; i++) {
		const projeto = linkProjetos[i];

		elemento += '<div class="container-projeto">';
		elemento += '<a href="' + projeto.linkProjeto + '" target="_blanck">';
		elemento += '<img src="' + projeto.linkImg + '" alt="' + projeto.title + '">';
		elemento += "<div>";
		elemento += "<span>" + projeto.span + "</span>";
		elemento += "<h1>" + projeto.title + "</h1>";
		elemento += "<h2>" + projeto.subTitle + "</h2>";
		elemento += "<p>" + projeto.resumo + "</p>";
		elemento += "</div>";
		elemento += "</a>";
		elemento += '<div class="like" onclick="like(' + i + ')">';
		elemento += '<i class="far fa-heart"></i>';
		elemento += '<p id="like' + i + '">' + projeto.like + "</p>";
		elemento += "</div>";
		elemento += "</div>";
	}

	elementProjetos.innerHTML = elemento;
}

function like(i) {
    document.getElementById("like" + i).innerHTML = linkProjetos[i].like += 1;
}

function mudaTema() {
    var elementButton = document.getElementById("clear");
    document.body.classList.toggle("clear");

    if (document.body.classList == "clear") {
    } else {
    }
}