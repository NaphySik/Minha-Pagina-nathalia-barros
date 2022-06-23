window.onload = function(){
    let disp = [1,2,3,4,5,6,7,8];
    let vetor = [1,2,3,4,5,6,7,8];
    let texto = "";
    vetor.forEach(function(e){
        num = disp[Math.floor(Math.random()*disp.length)];
        disp.splice(disp.indexOf(num), 1);
        let img = document.getElementById('drag'+e);
        img.src = 'imagens/'+num+'.png';
        img.ondragstart = iniciardrag;
        divreceb = document.getElementById('receb'+ e );
        divreceb.ondrop = receberImagem;
        divreceb.ondragover = permitirSoltar;
        divorig = document.getElementById('orig'+ e );
        divorig.ondrop = receberImagem;
        divorig.ondragover = permitirSoltar;
    });
    texto = 'CUIDADO!!! você tem 1 tentativa, em caso de erro atualize a página';
}

function iniciardrag(ev){
    ev.dataTransfer.setData("img", ev.target.id);
}


function receberImagem(ev){
    ev.preventDefault();
    var dados = ev.dataTransfer.getData("img");
    let imagem = document.getElementById(dados);
    ev.target.innerHTML = "";
    ev.target.appendChild(imagem);

    texto = 'CUIDADO!!! você tem 1 tentativa, em caso de erro atualize a página';
    aviso.innerHTML = texto;
}

function permitirSoltar(ev){
    ev.preventDefault();
}
