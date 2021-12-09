// ------------------ ACOES QUANDO A PÁG INICIAR ------------------------

var controlexermenu = 0;
const zero = 0;

window.onload = inicioPagina;

function inicioPagina() {

    firebase.database().ref().child('ESP32').child('CALLBACK').child('VERSAO').set(zero);
    firebase.database().ref().child('HISTORICO').child('NOTA_ANTERIOR').set(zero);
    firebase.database().ref().child('HISTORICO').child('EXERCICIO_ANTERIOR').set(zero);

    verificar_atalhos();

}
// --------------- FIM ACOES QUANDO A PÁG INICIAR ------------------------

//-------------------------SELEÇÃO DOS ASSUNTOS----------------------------

var e = document.querySelector("#e");
var latch = document.querySelector("#latch");
var temp = document.querySelector("#temp");
var cont = document.querySelector("#cont");
var vari = document.querySelector("#vari");

e.addEventListener("click", function () {

    document.querySelector('.latch').style.display = "none";
    document.querySelector('.temp').style.display = "none";
    document.querySelector('.cont').style.display = "none";
    document.querySelector('.vari').style.display = "none";

    latch.className = "bot";
    temp.className = "bot";
    cont.className = "bot";
    vari.className = "bot";

    document.querySelector('.e').style.display = "flex";
    e.className = "destacar"

    document.querySelector('.help').style.display = "none";
    // document.querySelector('.config').style.display = "none";
    document.querySelector('.personalizar').style.display = "none";
    document.querySelector('.personalizado').style.display = "none";
    document.querySelector('.personalizacaoao').style.display = "none";

    document.querySelector('.help1s').style.display = "none";
    document.querySelector('.help2s').style.display = "none";
    document.querySelector('.help3s').style.display = "none";
    document.querySelector('.help4s').style.display = "none";
    document.querySelector('.help5s').style.display = "none";
    document.querySelector('.help6s').style.display = "none";

    controlexermenu = 0;
    controleconfig = 0;
})

latch.addEventListener("click", function () {

    document.querySelector('.e').style.display = "none";
    document.querySelector('.temp').style.display = "none";
    document.querySelector('.cont').style.display = "none";
    document.querySelector('.vari').style.display = "none";

    e.className = "bot";
    temp.className = "bot";
    cont.className = "bot";
    vari.className = "bot";

    document.querySelector('.latch').style.display = "flex";
    latch.className = "destacar";

    document.querySelector('.help').style.display = "none";
    // document.querySelector('.config').style.display = "none";
    document.querySelector('.personalizar').style.display = "none";
    document.querySelector('.personalizado').style.display = "none";
    document.querySelector('.personalizacaoao').style.display = "none";

    document.querySelector('.help1s').style.display = "none";
    document.querySelector('.help2s').style.display = "none";
    document.querySelector('.help3s').style.display = "none";
    document.querySelector('.help4s').style.display = "none";
    document.querySelector('.help5s').style.display = "none";
    document.querySelector('.help6s').style.display = "none";

    controlexermenu = 0;
    controleconfig = 0;

})

temp.addEventListener("click", function () {


    document.querySelector('.latch').style.display = "none";
    document.querySelector('.e').style.display = "none";
    document.querySelector('.cont').style.display = "none";
    document.querySelector('.vari').style.display = "none";

    latch.className = "bot";
    e.className = "bot";
    cont.className = "bot";
    vari.className = "bot";

    document.querySelector('.temp').style.display = "flex";
    temp.className = "destacar";

    document.querySelector('.help').style.display = "none";
    // document.querySelector('.config').style.display = "none";
    document.querySelector('.personalizar').style.display = "none";
    document.querySelector('.personalizado').style.display = "none";
    document.querySelector('.personalizacaoao').style.display = "none";

    document.querySelector('.help1s').style.display = "none";
    document.querySelector('.help2s').style.display = "none";
    document.querySelector('.help3s').style.display = "none";
    document.querySelector('.help4s').style.display = "none";
    document.querySelector('.help5s').style.display = "none";
    document.querySelector('.help6s').style.display = "none";

    controlexermenu = 0;
    controleconfig = 0;
})

cont.addEventListener("click", function () {

    document.querySelector('.latch').style.display = "none";
    document.querySelector('.temp').style.display = "none";
    document.querySelector('.e').style.display = "none";
    document.querySelector('.vari').style.display = "none";

    latch.className = "bot";
    temp.className = "bot";
    e.className = "bot";
    vari.className = "bot";

    document.querySelector('.cont').style.display = "flex";
    cont.className = "destacar";

    document.querySelector('.help').style.display = "none";
    // document.querySelector('.config').style.display = "none";
    document.querySelector('.personalizar').style.display = "none";
    document.querySelector('.personalizado').style.display = "none";
    document.querySelector('.personalizacaoao').style.display = "none";

    document.querySelector('.help1s').style.display = "none";
    document.querySelector('.help2s').style.display = "none";
    document.querySelector('.help3s').style.display = "none";
    document.querySelector('.help4s').style.display = "none";
    document.querySelector('.help5s').style.display = "none";
    document.querySelector('.help6s').style.display = "none";

    controlexermenu = 0;
    controleconfig = 0;
})

vari.addEventListener("click", function () {


    document.querySelector('.latch').style.display = "none";
    document.querySelector('.temp').style.display = "none";
    document.querySelector('.cont').style.display = "none";
    document.querySelector('.e').style.display = "none";

    latch.className = "bot";
    temp.className = "bot";
    cont.className = "bot";
    e.className = "bot";

    document.querySelector('.vari').style.display = "flex";
    vari.className = "destacar";

    document.querySelector('.help').style.display = "none";
    // document.querySelector('.config').style.display = "none";
    document.querySelector('.personalizar').style.display = "none";
    document.querySelector('.personalizado').style.display = "none";
    document.querySelector('.personalizacaoao').style.display = "none";

    document.querySelector('.help1s').style.display = "none";
    document.querySelector('.help2s').style.display = "none";
    document.querySelector('.help3s').style.display = "none";
    document.querySelector('.help4s').style.display = "none";
    document.querySelector('.help5s').style.display = "none";
    document.querySelector('.help6s').style.display = "none";

    controlexermenu = 0;
    controleconfig = 0;



})

//------------------------- FIM SELEÇÃO DOS ASSUNTOS-------------------------------------------

//------------------------- CONFIGURAÇÃO E AJUDA ------------------------------------------------

var config = document.querySelector(".configmenu");
var controleconfig = 0;


config.addEventListener("click", function () {

    if (controleconfig == 0) {
        document.querySelector('.latch').style.display = "none";
        document.querySelector('.temp').style.display = "none";
        document.querySelector('.cont').style.display = "none";
        document.querySelector('.vari').style.display = "none";
        document.querySelector('.e').style.display = "none";

        document.querySelector('.personalizar').style.display = "none";
        document.querySelector('.personalizado').style.display = "none";
        document.querySelector('.personalizacaoao').style.display = "none";

        nav.classList.toggle('active');

        latch.className = "bot";
        temp.className = "bot";
        cont.className = "bot";
        e.className = "bot";
        vari.className = "bot";

        document.querySelector('.painel').style.display = "flex";
        // document.querySelector('.config').style.display = "flex";

        document.querySelector('.help1s').style.display = "none";
        document.querySelector('.help2s').style.display = "none";
        document.querySelector('.help3s').style.display = "none";
        document.querySelector('.help4s').style.display = "none";
        document.querySelector('.help5s').style.display = "none";
        document.querySelector('.help6s').style.display = "none";

        controleconfig = 1;
        controlexermenu = 0;
    } else {
        document.querySelector('.latch').style.display = "none";
        document.querySelector('.temp').style.display = "none";
        document.querySelector('.cont').style.display = "none";
        document.querySelector('.vari').style.display = "none";

        document.querySelector('.personalizar').style.display = "none";
        document.querySelector('.personalizado').style.display = "none";

        latch.className = "bot";
        temp.className = "bot";
        cont.className = "bot";
        vari.className = "bot";

        document.querySelector('.e').style.display = "flex";
        e.className = "destacar"

        document.querySelector('.painel').style.display = "none";
        // document.querySelector('.config').style.display = "none";

        document.querySelector('.help1s').style.display = "none";
        document.querySelector('.help2s').style.display = "none";
        document.querySelector('.help3s').style.display = "none";
        document.querySelector('.help4s').style.display = "none";
        document.querySelector('.help5s').style.display = "none";
        document.querySelector('.help6s').style.display = "none";

        controleconfig = 0;
        controlexermenu = 0;

    }
})

var voltar = document.querySelector(".voltar");

// voltar.addEventListener("click", function(){

//     document.querySelector('.latch').style.display = "none";
//     document.querySelector('.temp').style.display = "none";
//     document.querySelector('.cont').style.display = "none";
//     document.querySelector('.vari').style.display = "none";

//     document.querySelector('.personalizar').style.display = "none";
//     document.querySelector('.personalizado').style.display = "none";

//     latch.className = "bot";
//     temp.className = "bot";
//     cont.className = "bot";
//     vari.className = "bot";

//     document.querySelector('.e').style.display = "flex";
//     e.className = "destacar"

//     document.querySelector('.painel').style.display = "none";
//     document.querySelector('.config').style.display = "none";

//     document.querySelector('.help1s').style.display = "none";
//     document.querySelector('.help2s').style.display = "none";
//     document.querySelector('.help3s').style.display = "none";
//     document.querySelector('.help4s').style.display = "none";
//     document.querySelector('.help5s').style.display = "none";
//     document.querySelector('.help6s').style.display = "none";

//     controleconfig = 0;
//     controlexermenu = 0;

// })

var h1 = document.querySelector(".help1");
var h2 = document.querySelector(".help2");
var h3 = document.querySelector(".help3");
var h4 = document.querySelector(".help4");
var h5 = document.querySelector(".help5");
var h6 = document.querySelector(".help6");

h1.addEventListener("click", function () {

    document.querySelector('.painel').style.display = "none";
    document.querySelector('.help1s').style.display = "flex";

})

h2.addEventListener("click", function () {

    document.querySelector('.painel').style.display = "none";
    document.querySelector('.help2s').style.display = "flex";

})

h3.addEventListener("click", function () {

    document.querySelector('.painel').style.display = "none";
    document.querySelector('.help3s').style.display = "flex";

})

h4.addEventListener("click", function () {

    document.querySelector('.painel').style.display = "none";
    document.querySelector('.help4s').style.display = "flex";

})

h5.addEventListener("click", function () {

    document.querySelector('.painel').style.display = "none";
    document.querySelector('.help5s').style.display = "flex";

})

h6.addEventListener("click", function () {

    document.querySelector('.painel').style.display = "none";
    document.querySelector('.help6s').style.display = "flex";

})

var ant1 = document.querySelector(".ant1");
var ant2 = document.querySelector(".ant2");
var ant3 = document.querySelector(".ant3");
var ant4 = document.querySelector(".ant4");
var ant5 = document.querySelector(".ant5");
var ant6 = document.querySelector(".ant6");

ant1.addEventListener("click", function () {

    document.querySelector('.painel').style.display = "flex";
    document.querySelector('.help1s').style.display = "none";

})
ant2.addEventListener("click", function () {

    document.querySelector('.painel').style.display = "flex";
    document.querySelector('.help2s').style.display = "none";

})
ant3.addEventListener("click", function () {

    document.querySelector('.painel').style.display = "flex";
    document.querySelector('.help3s').style.display = "none";

})
ant4.addEventListener("click", function () {

    document.querySelector('.painel').style.display = "flex";
    document.querySelector('.help4s').style.display = "none";

})
ant5.addEventListener("click", function () {

    document.querySelector('.painel').style.display = "flex";
    document.querySelector('.help5s').style.display = "none";

})
ant6.addEventListener("click", function () {

    document.querySelector('.painel').style.display = "flex";
    document.querySelector('.help6s').style.display = "none";

})

// //------------------------- FIM CONFIGURAÇÃO E AJUDA -----------------------------------------

// //----------------------------------- SAIR ---------------------------------------------------

var sair = document.querySelector(".sair");

sair.addEventListener("click", function () {

    if (controle == 0) {
        firebase.auth().signOut().then(() => {

            window.location.href = "https://ssai-71c63.web.app/inicial.html";

        }).catch(() => {

            alert('Falha ao sair!');
        });
    } else {

        alert('É melhor não fechar a página enquando um exercício está sendo simulado ou enquanto o hardware está sendo atualizado!')
    }
})

//-------------------------------- FIM SAIR ------------------------------------------------

//------------------------ SELECIONAR EXER. E MANDAR PARA O FIREBASE -----------------------

var anterior = 0;
var controle = 0;

var e1 = document.querySelector(".e1");
var e2 = document.querySelector(".e2");
var e3 = document.querySelector(".e3");
var e4 = document.querySelector(".e4");
var e5 = document.querySelector(".e5");

var l1 = document.querySelector(".l1");
var l2 = document.querySelector(".l2");
var l3 = document.querySelector(".l3");
var l4 = document.querySelector(".l4");
var l5 = document.querySelector(".l5");

var t1 = document.querySelector(".t1");
var t2 = document.querySelector(".t2");
var t3 = document.querySelector(".t3");
var t4 = document.querySelector(".t4");
var t5 = document.querySelector(".t5");

var c1 = document.querySelector(".c1");
var c2 = document.querySelector(".c2");
var c3 = document.querySelector(".c3");
var c4 = document.querySelector(".c4");
var c5 = document.querySelector(".c5");

var v1 = document.querySelector(".v1");
var v2 = document.querySelector(".v2");
var v3 = document.querySelector(".v3");
var v4 = document.querySelector(".v4");
var v5 = document.querySelector(".v5");

var qualresult;
var qualbotao;
var qualloading;
var qualsection;
var qualsectionr;
var intervalodois = 0;
var exer;
var qualcontagem;
var click_tempo = 0;
var ver_ata;

e1.addEventListener("click", function () {

    if (controle == 0) {

        qualresult = document.querySelector("#re1");
        qualbotao = document.querySelector("#vre1");
        qualloading = document.querySelector("#le1");
        qualsection = document.querySelector('.se1');
        qualsectionr = document.querySelector('.ae1');
        qualcontagem = document.querySelector('.ce1');

        controle = 1;
        exer = 11;

        clicar_botao();

    } else {
        alert('Espere a simulação ser finalizada!');
    }
})

var vre1 = document.querySelector("#vre1");

vre1.addEventListener("click", function () {

    voltar_funcao();
})

e2.addEventListener("click", function () {

    if (controle == 0) {

        controle = 1;
        exer = 12;

        qualresult = document.querySelector("#re2");
        qualbotao = document.querySelector("#vre2");
        qualloading = document.querySelector("#le2");
        qualsection = document.querySelector('.se2');
        qualsectionr = document.querySelector('.ae2');
        qualcontagem = document.querySelector('.ce2');

        clicar_botao();
    } else {

        alert('Espere a simulação ser finalizada!');
    }
})

var vre2 = document.querySelector("#vre2");

vre2.addEventListener("click", function () {

    voltar_funcao();
})

e3.addEventListener("click", function () {

    if (controle == 0) {

        controle = 1;
        exer = 13;

        qualresult = document.querySelector("#re3");
        qualbotao = document.querySelector("#vre3");
        qualloading = document.querySelector("#le3");
        qualsection = document.querySelector('.se3');
        qualsectionr = document.querySelector('.ae3');
        qualcontagem = document.querySelector('.ce3');

        clicar_botao();
    } else {

        alert('Espere a simulação ser finalizada!');
    }
})

var vre3 = document.querySelector("#vre3");

vre3.addEventListener("click", function () {

    voltar_funcao();
})

e4.addEventListener("click", function () {

    if (controle == 0) {

        controle = 1;
        exer = 14;

        qualresult = document.querySelector("#re4");
        qualbotao = document.querySelector("#vre4");
        qualloading = document.querySelector("#le4");
        qualsection = document.querySelector('.se4');
        qualsectionr = document.querySelector('.ae4');
        qualcontagem = document.querySelector('.ce4');

        clicar_botao();
    } else {

        alert('Espere a simulação ser finalizada!');
    }
})

var vre4 = document.querySelector("#vre4");

vre4.addEventListener("click", function () {

    voltar_funcao();
})

e5.addEventListener("click", function () {

    if (controle == 0) {

        controle = 1;
        exer = 15;

        qualresult = document.querySelector("#re5");
        qualbotao = document.querySelector("#vre5");
        qualloading = document.querySelector("#le5");
        qualsection = document.querySelector('.se5');
        qualsectionr = document.querySelector('.ae5');
        qualcontagem = document.querySelector('.ce5');

        clicar_botao();
    } else {

        alert('Espere a simulação ser finalizada!');
    }
})

var vre5 = document.querySelector("#vre5");

vre5.addEventListener("click", function () {

    voltar_funcao();
})

//---------------------

l1.addEventListener("click", function () {

    if (controle == 0) {

        controle = 1;
        exer = 21;

        qualresult = document.querySelector("#rl1");
        qualbotao = document.querySelector("#vrl1");
        qualloading = document.querySelector("#ll1");
        qualsection = document.querySelector('.sl1');
        qualsectionr = document.querySelector('.al1');
        qualcontagem = document.querySelector('.cl1');

        clicar_botao();
    } else {

        alert('Espere a simulação ser finalizada!');
    }
})

var vrl1 = document.querySelector("#vrl1");

vrl1.addEventListener("click", function () {

    voltar_funcao();
})

l2.addEventListener("click", function () {

    if (controle == 0) {

        controle = 1;
        exer = 22;

        qualresult = document.querySelector("#rl2");
        qualbotao = document.querySelector("#vrl2");
        qualloading = document.querySelector("#ll2");
        qualsection = document.querySelector('.sl2');
        qualsectionr = document.querySelector('.al2');
        qualcontagem = document.querySelector('.cl2');

        clicar_botao();
    } else {

        alert('Espere a simulação ser finalizada!');
    }
})

var vrl2 = document.querySelector("#vrl2");

vrl2.addEventListener("click", function () {

    voltar_funcao();
})

l3.addEventListener("click", function () {

    if (controle == 0) {

        controle = 1;
        exer = 23;

        qualresult = document.querySelector("#rl3");
        qualbotao = document.querySelector("#vrl3");
        qualloading = document.querySelector("#ll3");
        qualsection = document.querySelector('.sl3');
        qualsectionr = document.querySelector('.al3');
        qualcontagem = document.querySelector('.cl3');

        clicar_botao();
    } else {

        alert('Espere a simulação ser finalizada!');
    }
})

var vrl3 = document.querySelector("#vrl3");

vrl3.addEventListener("click", function () {

    voltar_funcao();
})

l4.addEventListener("click", function () {

    if (controle == 0) {

        controle = 1;
        exer = 24;

        qualresult = document.querySelector("#rl4");
        qualbotao = document.querySelector("#vrl4");
        qualloading = document.querySelector("#ll4");
        qualsection = document.querySelector('.sl4');
        qualsectionr = document.querySelector('.al4');
        qualcontagem = document.querySelector('.cl4');

        clicar_botao();
    } else {

        alert('Espere a simulação ser finalizada!');
    }
})

var vrl4 = document.querySelector("#vrl4");

vrl4.addEventListener("click", function () {

    voltar_funcao();
})

l5.addEventListener("click", function () {

    if (controle == 0) {

        controle = 1;
        exer = 25;

        qualresult = document.querySelector("#rl5");
        qualbotao = document.querySelector("#vrl5");
        qualloading = document.querySelector("#ll5");
        qualsection = document.querySelector('.sl5');
        qualsectionr = document.querySelector('.al5');
        qualcontagem = document.querySelector('.cl5');

        clicar_botao();
    } else {

        alert('Espere a simulação ser finalizada!');
    }
})

var vrl5 = document.querySelector("#vrl5");

vrl5.addEventListener("click", function () {

    voltar_funcao();
})

//-------------------

t1.addEventListener("click", function () {

    if (controle == 0) {

        controle = 1;
        exer = 31;

        qualresult = document.querySelector("#rt1");
        qualbotao = document.querySelector("#vrt1");
        qualloading = document.querySelector("#lt1");
        qualsection = document.querySelector('.st1');
        qualsectionr = document.querySelector('.att1');
        qualcontagem = document.querySelector('.ct1');

        clicar_botao();
    } else {

        alert('Espere a simulação ser finalizada!');
    }
})

var vrt1 = document.querySelector("#vrt1");

vrt1.addEventListener("click", function () {

    voltar_funcao();
})

t2.addEventListener("click", function () {

    if (controle == 0) {

        controle = 1;
        exer = 32;

        qualresult = document.querySelector("#rt2");
        qualbotao = document.querySelector("#vrt2");
        qualloading = document.querySelector("#lt2");
        qualsection = document.querySelector('.st2');
        qualsectionr = document.querySelector('.att2');
        qualcontagem = document.querySelector('.ct2');

        clicar_botao();
    } else {

        alert('Espere a simulação ser finalizada!');
    }
})

var vrt2 = document.querySelector("#vrt2");

vrt2.addEventListener("click", function () {

    voltar_funcao();
})

t3.addEventListener("click", function () {

    if (controle == 0) {

        controle = 1;
        exer = 33;

        qualresult = document.querySelector("#rt3");
        qualbotao = document.querySelector("#vrt3");
        qualloading = document.querySelector("#lt3");
        qualsection = document.querySelector('.st3');
        qualsectionr = document.querySelector('.att3');
        qualcontagem = document.querySelector('.ct3');

        clicar_botao();
    } else {

        alert('Espere a simulação ser finalizada!');
    }
})

var vrt3 = document.querySelector("#vrt3");

vrt3.addEventListener("click", function () {

    voltar_funcao();
})

t4.addEventListener("click", function () {

    if (controle == 0) {

        controle = 1;
        exer = 34;

        qualresult = document.querySelector("#rt4");
        qualbotao = document.querySelector("#vrt4");
        qualloading = document.querySelector("#lt4");
        qualsection = document.querySelector('.st4');
        qualsectionr = document.querySelector('.att4');
        qualcontagem = document.querySelector('.ct4');

        clicar_botao();
    } else {

        alert('Espere a simulação ser finalizada!');
    }
})

var vrt4 = document.querySelector("#vrt4");

vrt4.addEventListener("click", function () {

    voltar_funcao();
})

t5.addEventListener("click", function () {

    if (controle == 0) {

        controle = 1;
        exer = 35;

        qualresult = document.querySelector("#rt5");
        qualbotao = document.querySelector("#vrt5");
        qualloading = document.querySelector("#lt5");
        qualsection = document.querySelector('.st5');
        qualsectionr = document.querySelector('.att5');
        qualcontagem = document.querySelector('.ct5');

        clicar_botao();
    } else {

        alert('Espere a simulação ser finalizada!');
    }
})

var vrt5 = document.querySelector("#vrt5");

vrt5.addEventListener("click", function () {

    voltar_funcao();
})
//----------------
c1.addEventListener("click", function () {

    if (controle == 0) {

        controle = 1;
        exer = 41;

        qualresult = document.querySelector("#rc1");
        qualbotao = document.querySelector("#vrc1");
        qualloading = document.querySelector("#lc1");
        qualsection = document.querySelector('.st1');
        qualsectionr = document.querySelector('.ac1');
        qualcontagem = document.querySelector('.cc1');

        clicar_botao();
    } else {

        alert('Espere a simulação ser finalizada!');
    }
})

var vrc1 = document.querySelector("#vrc1");

vrc1.addEventListener("click", function () {

    voltar_funcao();
})

c2.addEventListener("click", function () {

    if (controle == 0) {

        controle = 1;
        exer = 42;

        qualresult = document.querySelector("#rc2");
        qualbotao = document.querySelector("#vrc2");
        qualloading = document.querySelector("#lc2");
        qualsection = document.querySelector('.sc2');
        qualsectionr = document.querySelector('.ac2');
        qualcontagem = document.querySelector('.cc2');

        clicar_botao();
    } else {

        alert('Espere a simulação ser finalizada!');
    }
})

var vrc2 = document.querySelector("#vrc2");

vrc2.addEventListener("click", function () {

    voltar_funcao();
})

c3.addEventListener("click", function () {

    if (controle == 0) {

        controle = 1;
        exer = 43;

        qualresult = document.querySelector("#rc3");
        qualbotao = document.querySelector("#vrc3");
        qualloading = document.querySelector("#lc3");
        qualsection = document.querySelector('.sc3');
        qualsectionr = document.querySelector('.ac3');
        qualcontagem = document.querySelector('.cc3');

        clicar_botao();
    } else {

        alert('Espere a simulação ser finalizada!');
    }
})

var vrc3 = document.querySelector("#vrc3");

vrc3.addEventListener("click", function () {

    voltar_funcao();
})

c4.addEventListener("click", function () {

    if (controle == 0) {

        controle = 1;
        exer = 44;

        qualresult = document.querySelector("#rc4");
        qualbotao = document.querySelector("#vrc4");
        qualloading = document.querySelector("#lc4");
        qualsection = document.querySelector('.sc4');
        qualsectionr = document.querySelector('.ac4');
        qualcontagem = document.querySelector('.cc4');

        clicar_botao();
    } else {

        alert('Espere a simulação ser finalizada!');
    }
})

var vrc4 = document.querySelector("#vrc4");

vrc4.addEventListener("click", function () {

    voltar_funcao();
})

c5.addEventListener("click", function () {

    if (controle == 0) {

        controle = 1;
        exer = 45;

        qualresult = document.querySelector("#rc5");
        qualbotao = document.querySelector("#vrc5");
        qualloading = document.querySelector("#lc5");
        qualsection = document.querySelector('.sc5');
        qualsectionr = document.querySelector('.ac5');
        qualcontagem = document.querySelector('.cc5');

        clicar_botao();
    } else {

        alert('Espere a simulação ser finalizada!');
    }
})

var vrc5 = document.querySelector("#vrc5");

vrc5.addEventListener("click", function () {

    voltar_funcao();
})
//-------------

v1.addEventListener("click", function () {

    if (controle == 0) {

        controle = 1;
        exer = 51;

        qualresult = document.querySelector("#rv1");
        qualbotao = document.querySelector("#vrv1");
        qualloading = document.querySelector("#lv1");
        qualsection = document.querySelector('.sv1');
        qualsectionr = document.querySelector('.av1');
        qualcontagem = document.querySelector('.cv1');

        clicar_botao();
    } else {

        alert('Espere a simulação ser finalizada!');
    }
})

var vrv1 = document.querySelector("#vrv1");

vrv1.addEventListener("click", function () {

    voltar_funcao();
})

v2.addEventListener("click", function () {

    if (controle == 0) {

        controle = 1;
        exer = 52;

        qualresult = document.querySelector("#rv2");
        qualbotao = document.querySelector("#vrv2");
        qualloading = document.querySelector("#lv2");
        qualsection = document.querySelector('.sv2');
        qualsectionr = document.querySelector('.av2');
        qualcontagem = document.querySelector('.cv2');

        clicar_botao();
    } else {

        alert('Espere a simulação ser finalizada!');
    }
})

var vrv2 = document.querySelector("#vrv2");

vrv2.addEventListener("click", function () {

    voltar_funcao();
})

v3.addEventListener("click", function () {

    if (controle == 0) {

        controle = 1;
        exer = 53;

        qualresult = document.querySelector("#rv3");
        qualbotao = document.querySelector("#vrv3");
        qualloading = document.querySelector("#lv3");
        qualsection = document.querySelector('.sv3');
        qualsectionr = document.querySelector('.av3');
        qualcontagem = document.querySelector('.cv3');

        clicar_botao();
    } else {

        alert('Espere a simulação ser finalizada!');
    }
})

var vrv3 = document.querySelector("#vrv3");

vrv3.addEventListener("click", function () {

    voltar_funcao();
})

v4.addEventListener("click", function () {

    if (controle == 0) {

        controle = 1;
        exer = 54;

        qualresult = document.querySelector("#rv4");
        qualbotao = document.querySelector("#vrv4");
        qualloading = document.querySelector("#lv4");
        qualsection = document.querySelector('.sv4');
        qualsectionr = document.querySelector('.av4');
        qualcontagem = document.querySelector('.cv4');

        clicar_botao();
    } else {

        alert('Espere a simulação ser finalizada!');
    }
})

var vrv4 = document.querySelector("#vrv4");

vrv4.addEventListener("click", function () {

    voltar_funcao();
})

v5.addEventListener("click", function () {

    if (controle == 0) {

        controle = 1;
        exer = 55;

        qualresult = document.querySelector("#rv5");
        qualbotao = document.querySelector("#vrv5");
        qualloading = document.querySelector("#lv5");
        qualsection = document.querySelector('.sv5');
        qualsectionr = document.querySelector('.av5');
        qualcontagem = document.querySelector('.cv5');

        clicar_botao();
    } else {

        alert('Espere a simulação ser finalizada!');
    }
})

var vrv5 = document.querySelector("#vrv5");

vrv5.addEventListener("click", function () {

    voltar_funcao();
})

//---------------------------

var sp1 = document.querySelector(".sp1");
var sp2 = document.querySelector(".sp2");
var sp3 = document.querySelector(".sp3");
var sp4 = document.querySelector(".sp4");

var vrp1 = document.querySelector("#vrp1");
var vrp2 = document.querySelector("#vrp2");
var vrp3 = document.querySelector("#vrp3");
var vrp4 = document.querySelector("#vrp4");

vrp1.addEventListener("click", function () {

    voltar_funcao();
})

vrp2.addEventListener("click", function () {

    voltar_funcao();
})

vrp3.addEventListener("click", function () {

    voltar_funcao();
})

vrp4.addEventListener("click", function () {

    voltar_funcao();
})


sp1.addEventListener("click", function () {

    if (controle == 0) {

        controle = 1;
        exer = codigo_at1;

        qualresult = document.querySelector("#rp1");
        qualbotao = document.querySelector("#vrp1");
        qualloading = document.querySelector("#lp1");
        qualsection = document.querySelector('.ap1');
        qualsectionr = document.querySelector('.p1');
        qualcontagem = document.querySelector('.cp1');

        clicar_botao();
    } else {

        alert('Espere a simulação ser finalizada!');
    }
})

sp2.addEventListener("click", function () {

    if (controle == 0) {

        controle = 1;
        exer = codigo_at2;

        qualresult = document.querySelector("#rp2");
        qualbotao = document.querySelector("#vrp2");
        qualloading = document.querySelector("#lp2");
        qualsection = document.querySelector('.ap2');
        qualsectionr = document.querySelector('.p2');
        qualcontagem = document.querySelector('.cp2');

        clicar_botao();
    } else {

        alert('Espere a simulação ser finalizada!');
    }
})
sp3.addEventListener("click", function () {

    if (controle == 0) {

        controle = 1;
        exer = codigo_at3;

        qualresult = document.querySelector("#rp3");
        qualbotao = document.querySelector("#vrp3");
        qualloading = document.querySelector("#lp3");
        qualsection = document.querySelector('.ap3');
        qualsectionr = document.querySelector('.p3');
        qualcontagem = document.querySelector('.cp3');

        clicar_botao();
    } else {

        alert('Espere a simulação ser finalizada!');
    }
})
sp4.addEventListener("click", function () {

    if (controle == 0) {

        controle = 1;
        exer = codigo_at4;

        qualresult = document.querySelector("#rp4");
        qualbotao = document.querySelector("#vrp4");
        qualloading = document.querySelector("#lp4");
        qualsection = document.querySelector('.ap4');
        qualsectionr = document.querySelector('.p4');
        qualcontagem = document.querySelector('.cp4');

        clicar_botao();
    } else {

        alert('Espere a simulação ser finalizada!');
    }
})

//------------------------------------------------------------

var controlesp = 0;
var espestado;
var intervalo = 0;

var clicar_botao = function () {

    var verificar = false;

    firebase.database().ref().child('ESP32').child('CALLBACK').child('ESTADO').set(verificar);

    qualcontagem.style.display = 'block';

    var timer = setInterval(tempo, 1000);

    function tempo() {

        intervalo = intervalo + 1;

        qualcontagem.textContent = intervalo;

        if (intervalo == 5) {

            clearInterval(timer);

            // firebase.database().ref().child('ESP32').child('CALLBACK').child('ESTADO').set(true);

            var estadoespsintax = firebase.database().ref().child('ESP32').child('CALLBACK').child('ESTADO');

            estadoespsintax.get().then((snapshot) => {

                espestado = snapshot.val();

                if (espestado == true) {

                    qualsection.style.display = 'none';
                    qualsectionr.style.display = 'flex';
                    qualcontagem.style.display = 'none';
                    qualcontagem.textContent = '0';

                    anonima_enviar();
                } else {

                    alert('O hardware não está conectado à rede ou demorou muito para responder! Verifique sua internet e tente novamente!');

                    intervalo = 0;
                    controle = 0;
                    qualcontagem.style.display = 'none';
                    qualcontagem.textContent = '0';
                }
            })
        }
    }
}

var estadoteste;

var anonima_enviar = function () {

    alert('Simulação requisitada com sucesso!')

    firebase.database().ref().child('ESP32').child('CALLBACK').child('VERSAO').set(exer);

    var gatilho = true;

    firebase.database().ref().child('ESP32').child('CALLBACK').child('INICIAR').set(gatilho);

    anonima_avaliar();
}

var voltar_funcao = function () {

    qualresult.textContent = "Simulando...";
    qualbotao.style.display = "none";
    qualloading.style.display = "block";
    qualsection.style.display = "flex";
    qualsectionr.style.display = "none";

    controle = 0;
}

//------------------- FIM SELECIONAR EXER. E MANDAR PARA O FIREBASE -----------------------

//----------------------------------- REDEFINIR SENHA -------------------------------------

// var s = document.querySelector("#s");
// var cancelarrede =  document.querySelector('.cancelarrede');
// var simrede =  document.querySelector('.simrede');
// var novasenha;

// var controlesea = 0;

// s.addEventListener("click", function(){

//     if(controle == 0)
//     {
//         if(controlesea == 0){

//         document.querySelector('.senha').style.display = 'none';
//         document.querySelector('.ctzredefinir').style.display = 'flex';
//         controlesea = 1;

//         }else{

//             alert('Finalize a operação anterior! Clique em "cancelar!"');
//         }
//     }else{

//         alert('A senha não pode ser redefinida enquanto um exercício é simulado ou enquanto o hardware está sendo atualizado!');
//     }
// })
// cancelarrede.addEventListener("click", function(){

//     document.querySelector('.simrede').style.display = 'block';
//     document.querySelector('.caixa').style.display = 'block';

//     document.querySelector('.cancelarrede').style.display = 'none';
//     document.querySelector('.prosseguir').style.display = 'none';

//     document.querySelector('.senha').style.display = 'block';
//     document.querySelector('.ctzredefinir').style.display = 'none';
//     controlesea = 0;
// })

// simrede.addEventListener("click", function(){

//     novasenha =  document.querySelector('#redefinir').value;

//     if(novasenha == ''){

//         alert('Preencha o campo com a nova senha!')
//         document.querySelector('.senha').style.display = 'block';
//         document.querySelector('.ctzredefinir').style.display = 'none';
//         controlesea = 0;
//     }
//     else{

//         document.querySelector('.simrede').style.display = 'none';
//         document.querySelector('.caixa').style.display = 'none';

//         document.querySelector('.cancelarrede').style.display = 'block';
//         document.querySelector('.prosseguir').style.display = 'block';
//     }
// })

// var prosseguir =  document.querySelector('.prosseguir');

// prosseguir.addEventListener("click", function(){

//             const user = firebase.auth().currentUser;
//             user.updatePassword(novasenha).then(() => {

//             alert('Senha atualizada com sucesso!');

//             }).catch(() => {

//             alert('Ocorreu um erro! Tente novamente');

//         });

// })

//------------------------------ FIM REDEFINIR SENHA -------------------------------------


//------------------------------ APAGAR A CONTA ------------------------------------------

// var s = document.querySelector("#s");
// var ac =  document.querySelector('#ac');
// var simapa = document.querySelector('.simapa')
// var cancelarapa = document.querySelector('.cancelarapa')

// ac.addEventListener("click", function(){

//     if(controle == 0){

//         if(controlesea == 0){

//         document.querySelector('.ctzapa').style.display = 'flex';
//         document.querySelector('.apagar').style.display = 'none';
//         controlesea = 1;

//         }else{

//             alert('Finalize a operação anterior! Clique em "cancelar!"');
//         }
//     }
//     else{

//         alert('A conta não pode ser apagada enquanto um exercício é simulado ou enquanto o hardware está sendo atualizado!')
//     }
// })
// simapa.addEventListener("click", function(){

//     const user = firebase.auth().currentUser;

//     user.delete().then(() => {

//     alert('Usuário deletado com sucesso!');
//         window.location.href = "http://127.0.0.1:5500/inicial.html";

//         }).catch(() => {

//         alert('Ocorreu um erro! Tente novamente');
//     })
// })
// cancelarapa.addEventListener("click", function(){

//     document.querySelector('.ctzapa').style.display = 'none';
//     document.querySelector('.apagar').style.display = 'block';
//     controlesea = 0;
// })

//---------------------------- FIM APAGAR A CONTA ----------------------------------------

//----------------------------- AVALIACAO ------------------------------------------------
var nota;
var contarresult = 0;

var anonima_avaliar = function () {

    var detectarmudanca = firebase.database().ref().child('ESP32').child('RESULTADO');

    detectarmudanca.on('value', (snapshot) => {
        nota = 100 - snapshot.val();

        contarresult = contarresult + 1;

        if (contarresult == 2) {

            anonima_mostrarresultado();

        }
    });

    // min = Math.ceil(0);
    // max = Math.floor(100);
    // nota = Math.floor(Math.random() * (max - min * + 1)) + min;

    // alert('Para que você possa experimentar todas as funcionalidades da página mesmo se possuir um exemplar do produto, um resultado aleatório entre 0 e 100 será gerado!');

    // anonima_mostrarresultado();
}

var notanterior;

var anonima_mostrarresultado = function () {

    qualresult.textContent = 'Certo ' + nota + '%';
    qualbotao.style.display = "block";
    qualloading.style.display = "none";

    firebase.database().ref().child('HISTORICO').child('NOTA_ANTERIOR').set(nota);

    var preresult = 1000;
    firebase.database().ref().child('ESP32').child('RESULTADO').set(preresult);

    anonima_historicofuncao();
}
//------------------------- FIM AVALIACAO ------------------------------------------------

//---------------------------- HISTORICO -------------------------------------------------

let listahist = document.querySelector('.mostrarhist');

var histbot = document.querySelector('#histbot');
var vhist = document.querySelector('.vhist');

var valorhist;
var nomehist;
var avahist;

histbot.addEventListener("click", function () {

    document.querySelector('.historico').style.display = "flex";
    document.querySelector('#sidebar').style.display = "none";

});

var anonima_historicofuncao = function () {

    if (exer == 11) {
        nomehist = 'Lógica OU/E - N.1 = ';
    } else if (exer == 12) {
        nomehist = 'Lógica OU/E - N.2 = ';
    } else if (exer == 13) {
        nomehist = 'Lógica OU/E - N.3 = ';
    } else if (exer == 14) {
        nomehist = 'Lógica OU/E - N.4 = ';
    } else if (exer == 15) {
        nomehist = 'Lógica OU/E - N.5 = ';
    } else if (exer == 21) {
        nomehist = 'Latch/Unlatch - N.1 = ';
    } else if (exer == 22) {
        nomehist = 'Latch/Unlatch - N.2 = ';
    } else if (exer == 23) {
        nomehist = 'Latch/Unlatch - N.3 = ';
    } else if (exer == 24) {
        nomehist = 'Latch/Unlatch - N.4 = ';
    } else if (exer == 25) {
        nomehist = 'Latch/Unlatch - N.5 = ';
    } else if (exer == 31) {
        nomehist = 'Temporizador - N.1 = ';
    } else if (exer == 32) {
        nomehist = 'Temporizador - N.2 = ';
    } else if (exer == 33) {
        nomehist = 'Temporizador - N.3 = ';
    } else if (exer == 34) {
        nomehist = 'Temporizador - N.4 = ';
    } else if (exer == 35) {
        nomehist = 'Temporizador - N.5 = ';
    } else if (exer == 41) {
        nomehist = 'Contador - N.1 = ';
    } else if (exer == 42) {
        nomehist = 'Contador - N.2 = ';
    } else if (exer == 43) {
        nomehist = 'Contador - N.3 = ';
    } else if (exer == 44) {
        nomehist = 'Contador - N.4 = ';
    } else if (exer == 45) {
        nomehist = 'Contador - N.5 = ';
    } else if (exer == 51) {
        nomehist = 'Variáveis - N.1 = ';
    } else if (exer == 52) {
        nomehist = 'Variáveis - N.2 = ';
    } else if (exer == 53) {
        nomehist = 'Variáveis - N.3 = ';
    } else if (exer == 54) {
        nomehist = 'Variáveis - N.4 = ';
    } else if (exer == 55) {
        nomehist = 'Variáveis - N.5 = ';
    } else {

        nomehist = 'Personalizado - ' + exer + ' = ';
    }

    firebase.database().ref().child('HISTORICO').child('EXERCICIO_ANTERIOR').set(exer);

    var resulthist = firebase.database().ref().child('HISTORICO').child('NOTA_ANTERIOR');

    resulthist.get().then((snapshot) => {

        if (snapshot.exists()) {

            avahist = snapshot.val();

            let h = document.createElement('p');
            h.classList.add('valhist');

            let valorh = document.createTextNode(' </> ' + nomehist + avahist + '%');

            listahist.appendChild(h);
            h.appendChild(valorh);

            historico.push(valorh);

            contarresult = 0;
            contatualizar = 0;
            intervalo = 0;
        }
    });
}

vhist.addEventListener("click", function () {

    document.querySelector('.historico').style.display = "none";
    document.querySelector('#sidebar').style.display = "flex";
});

historico = [];

//---------------------------- FIM HISTORICO ----------------------------------------------

//--------------------------- PERSONALIZADO ----------------------------------------------

var criar = document.querySelector("#criar");
var inputfile = document.querySelector("#filenv");
var exermenu = document.querySelector(".exerper");
var voltarper = document.querySelector(".voltper");

exermenu.addEventListener("click", function () {

    if (controlexermenu == 0) {

        document.querySelector('.latch').style.display = "none";
        document.querySelector('.temp').style.display = "none";
        document.querySelector('.cont').style.display = "none";
        document.querySelector('.vari').style.display = "none";
        document.querySelector('.e').style.display = "none";

        document.querySelector('.help').style.display = "none";
        // document.querySelector('.config').style.display = "none";

        latch.className = "bot";
        temp.className = "bot";
        cont.className = "bot";
        e.className = "bot";
        vari.className = "bot";

        document.querySelector('.help1s').style.display = "none";
        document.querySelector('.help2s').style.display = "none";
        document.querySelector('.help3s').style.display = "none";
        document.querySelector('.help4s').style.display = "none";
        document.querySelector('.help5s').style.display = "none";
        document.querySelector('.help6s').style.display = "none";

        document.querySelector('.personalizar').style.display = "flex";
        document.querySelector('.personalizado').style.display = "flex";
        document.querySelector('.personalizacaoao').style.display = "flex";

        nav.classList.toggle('active');

        controleconfig = 0;
        controlexermenu = 1;

    } else {

        document.querySelector('.latch').style.display = "none";
        document.querySelector('.temp').style.display = "none";
        document.querySelector('.cont').style.display = "none";
        document.querySelector('.vari').style.display = "none";

        document.querySelector('.personalizar').style.display = "none";
        document.querySelector('.personalizado').style.display = "none";

        latch.className = "bot";
        temp.className = "bot";
        cont.className = "bot";
        vari.className = "bot";

        document.querySelector('.e').style.display = "flex";
        e.className = "destacar"

        document.querySelector('.painel').style.display = "none";
        // document.querySelector('.config').style.display = "none";

        document.querySelector('.help1s').style.display = "none";
        document.querySelector('.help2s').style.display = "none";
        document.querySelector('.help3s').style.display = "none";
        document.querySelector('.help4s').style.display = "none";
        document.querySelector('.help5s').style.display = "none";
        document.querySelector('.help6s').style.display = "none";
        document.querySelector('.personalizacaoao').style.display = "none";

        controleconfig = 0;
        controlexermenu = 0;

    }
})

voltarper.addEventListener("click", function () {

    document.querySelector('.latch').style.display = "none";
    document.querySelector('.temp').style.display = "none";
    document.querySelector('.cont').style.display = "none";
    document.querySelector('.vari').style.display = "none";

    document.querySelector('.personalizar').style.display = "none";
    document.querySelector('.personalizado').style.display = "none";

    latch.className = "bot";
    temp.className = "bot";
    cont.className = "bot";
    vari.className = "bot";

    document.querySelector('.e').style.display = "flex";
    e.className = "destacar"

    document.querySelector('.painel').style.display = "none";
    // document.querySelector('.config').style.display = "none";

    document.querySelector('.help1s').style.display = "none";
    document.querySelector('.help2s').style.display = "none";
    document.querySelector('.help3s').style.display = "none";
    document.querySelector('.help4s').style.display = "none";
    document.querySelector('.help5s').style.display = "none";
    document.querySelector('.help6s').style.display = "none";
    document.querySelector('.personalizacaoao').style.display = "none";

    controleconfig = 0;
    controlexermenu = 0;

})

var persoexer = document.querySelector(".persoexer");

persoexer.addEventListener("click", function () {

    document.querySelector('#main').style.display = "none";
    document.querySelector('#menu').style.display = "none";
    document.querySelector('.sair').style.display = "none";
    document.querySelector('.titulo').style.display = "none";
    document.querySelector('#btn-mobile').style.display = "none";

    document.querySelector('.ambiente').style.display = "flex";
    document.querySelector('.voltarinit').style.display = "block";

    var tamanho = window.innerWidth;

    if ((tamanho < 970 && tamanho > 670) || tamanho < 530) {

        document.querySelector('#side').style.display = "none";
    }
})

var voltarinit = document.querySelector(".voltarinit");

voltarinit.addEventListener("click", function () {

    document.querySelector('#main').style.display = "flex";
    document.querySelector('#menu').style.display = "flex";
    document.querySelector('.sair').style.display = "block";

    document.querySelector('.ambiente').style.display = "none";
    document.querySelector('.voltarinit').style.display = "none";

    var tamanho = window.innerWidth;

    if ((tamanho < 970 && tamanho > 670) || tamanho < 530) {

        document.querySelector('#side').style.display = "flex";
    } else {
        document.querySelector('.titulo').style.display = "block";
    }

    if (tamanho < 540) {

        document.querySelector('.ssai2').style.display = "block";
        document.querySelector('#btn-mobile').style.display = "flex";
    }
})
//-------------- CONFIG VARS -----------------

var n_blocos = 0;
var n_blocos_e = 0;
var n_blocos_ou = 0;
var n_blocos_t = 0;
var n_blocos_c = 0;

var n_input_e1 = 1;
var n_input_e2 = 1;
var n_input_e3 = 1;
var n_input_e4 = 1;
var n_input_e5 = 1;
var n_input_e6 = 1;
var n_input_e7 = 1;

var n_output_e1 = 1;
var n_output_e2 = 1;
var n_output_e3 = 1;
var n_output_e4 = 1;
var n_output_e5 = 1;
var n_output_e6 = 1;
var n_output_e7 = 1;

var n_input_ou1 = 1;
var n_input_ou2 = 1;
var n_input_ou3 = 1;
var n_input_ou4 = 1;
var n_input_ou5 = 1;
var n_input_ou6 = 1;
var n_input_ou7 = 1;

var n_output_ou1 = 1;
var n_output_ou2 = 1;
var n_output_ou3 = 1;
var n_output_ou4 = 1;
var n_output_ou5 = 1;
var n_output_ou6 = 1;
var n_output_ou7 = 1;

var ordem = [];
var ordem_limpa = [];

//-------------- CRIAR BLOCOS ------------------

var per_e = document.querySelector("#logpere");
var per_ou = document.querySelector("#logperou");
var per_t = document.querySelector("#logpert");
var per_c = document.querySelector("#logperc");
let personalizando = document.querySelector('.personalizando');

var clicar_mais;
var id;

per_e.addEventListener("click", function () {

    if (n_blocos_e < 5) {

        n_blocos = n_blocos + 1;

        //-------- DIV PEREXC

        let logicae = document.createElement('div');
        logicae.classList.add('logicae');

        let perexc = document.createElement('div');
        perexc.classList.add('perexc');

        personalizando.appendChild(logicae);
        logicae.appendChild(perexc);

        n_blocos_e = n_blocos_e + 1;

        logicae.id = 'bloco' + n_blocos;

        let logtitle = document.createElement('span');
        let title = document.createTextNode('Lógica E');

        logtitle.appendChild(title);
        perexc.appendChild(logtitle);

        // let x = document.createTextNode('X');

        // let botaox = document.createElement('button');
        // botaox.classList.add('excper');

        // perexc.appendChild(botaox);
        // botaox.appendChild(x);

        //----- FIM DIV PEREXC

        //----- DIV INOUTS

        let inouts = document.createElement('div');
        inouts.classList.add('inouts');
        logicae.appendChild(inouts);

        let inputs = document.createElement('div');
        inputs.classList.add('inputs');
        inouts.appendChild(inputs);

        inputs.id = "inpute" + n_blocos_e;

        let outputs = document.createElement('div');
        outputs.classList.add('outputs');
        inouts.appendChild(outputs);

        outputs.id = 'outpute' + n_blocos_e;

        //----- INPUT

        let mais = document.createTextNode('+');
        let botao_mais = document.createElement('button');
        botao_mais.classList.add('mais');
        botao_mais.appendChild(mais);
        inputs.appendChild(botao_mais);

        let entradae = document.createElement('input');
        entradae.placeholder = 'In';
        entradae.classList.add('input');
        entradae.type = 'number';
        entradae.min = 0;
        inputs.appendChild(entradae);

        let nivelee = document.createElement('input');
        nivelee.placeholder = 'Nível';
        nivelee.classList.add('input');
        nivelee.type = 'number';
        nivelee.min = 0;
        inputs.appendChild(nivelee);

        entradae.id = 'ee' + (n_blocos_e) + '0';
        nivelee.id = 'ne' + (n_blocos_e) + '0';

        botao_mais.id = 'maise' + n_blocos_e;

        //--- CRIAR INPUTS -----

        if (n_blocos_e == 1) {

            botao_mais.id = 'maise1';

            clicar_mais = document.querySelector('#maise1')

            clicar_mais.addEventListener("click", function () {

                if (n_input_e1 < 4) {

                    let right = document.createTextNode('||');
                    let seta_right = document.createElement('span');
                    seta_right.classList.add('right');
                    seta_right.appendChild(right);
                    document.querySelector('#inpute1').appendChild(seta_right);

                    let entradae = document.createElement('input');
                    entradae.placeholder = 'In';
                    entradae.type = 'number';
                    entradae.min = 0;
                    entradae.classList.add('input');
                    document.querySelector('#inpute1').appendChild(entradae);

                    let nivelee = document.createElement('input');
                    nivelee.placeholder = 'Nível';
                    nivelee.classList.add('input');
                    nivelee.type = 'number';
                    nivelee.min = 0;
                    document.querySelector('#inpute1').appendChild(nivelee);

                    entradae.id = 'ee1' + n_input_e1;
                    nivelee.id = 'ne1' + n_input_e1;

                    n_input_e1 = n_input_e1 + 1;
                    if (n_input_e1 == 4) {
                        document.querySelector('#maise1').style.display = 'none';
                    }
                }
            })
        }
        if (n_blocos_e == 2) {

            botao_mais.id = 'maise2';

            clicar_mais = document.querySelector('#maise2')

            clicar_mais.addEventListener("click", function () {

                if (n_input_e2 < 4) {
                    let right = document.createTextNode('||');
                    let seta_right = document.createElement('span');
                    seta_right.classList.add('right');
                    seta_right.appendChild(right);
                    document.querySelector('#inpute2').appendChild(seta_right);

                    let entradae = document.createElement('input');
                    entradae.placeholder = 'In';
                    entradae.classList.add('input');
                    entradae.type = 'number';
                    entradae.min = 0;
                    document.querySelector('#inpute2').appendChild(entradae);

                    let nivelee = document.createElement('input');
                    nivelee.placeholder = 'Nível';
                    nivelee.classList.add('input');
                    nivelee.type = 'number';
                    nivelee.min = 0;
                    document.querySelector('#inpute2').appendChild(nivelee);

                    entradae.id = 'ee2' + n_input_e2;
                    nivelee.id = 'ne2' + n_input_e2;

                    n_input_e2 = n_input_e2 + 1;
                    if (n_input_e2 == 4) {
                        document.querySelector('#maise2').style.display = 'none';
                    }
                }
            })
        }
        if (n_blocos_e == 3) {

            botao_mais.id = 'maise3';

            clicar_mais = document.querySelector('#maise3')

            clicar_mais.addEventListener("click", function () {

                if (n_input_e3 < 4) {
                    let right = document.createTextNode('||');
                    let seta_right = document.createElement('span');
                    seta_right.classList.add('right');
                    seta_right.appendChild(right);
                    document.querySelector('#inpute3').appendChild(seta_right);

                    let entradae = document.createElement('input');
                    entradae.placeholder = 'In';
                    entradae.classList.add('input');
                    entradae.type = 'number';
                    entradae.min = 0;
                    document.querySelector('#inpute3').appendChild(entradae);

                    let nivelee = document.createElement('input');
                    nivelee.placeholder = 'Nível';
                    nivelee.classList.add('input');
                    nivelee.type = 'number';
                    nivelee.min = 0;
                    document.querySelector('#inpute3').appendChild(nivelee);

                    entradae.id = 'ee3' + n_input_e3;
                    nivelee.id = 'ne3' + n_input_e3;

                    n_input_e3 = n_input_e3 + 1;
                    if (n_input_e3 == 4) {
                        document.querySelector('#maise3').style.display = 'none';
                    }
                }
            })
        }
        if (n_blocos_e == 4) {

            botao_mais.id = 'maise4';

            clicar_mais = document.querySelector('#maise4')

            clicar_mais.addEventListener("click", function () {

                if (n_input_e4 < 4) {
                    let right = document.createTextNode('||');
                    let seta_right = document.createElement('span');
                    seta_right.classList.add('right');
                    seta_right.appendChild(right);
                    document.querySelector('#inpute4').appendChild(seta_right);

                    let entradae = document.createElement('input');
                    entradae.placeholder = 'In';
                    entradae.type = 'number';
                    entradae.min = 0;
                    entradae.classList.add('input');
                    document.querySelector('#inpute4').appendChild(entradae);

                    let nivelee = document.createElement('input');
                    nivelee.placeholder = 'Nível';
                    nivelee.type = 'number';
                    nivelee.min = 0;
                    nivelee.classList.add('input');

                    document.querySelector('#inpute4').appendChild(nivelee);

                    entradae.id = 'ee4' + n_input_e4;
                    nivelee.id = 'ne4' + n_input_e4;

                    n_input_e4 = n_input_e4 + 1;
                    if (n_input_e4 == 4) {
                        document.querySelector('#maise4').style.display = 'none';
                    }
                }
            })
        }
        if (n_blocos_e == 5) {

            botao_mais.id = 'maise5';

            clicar_mais = document.querySelector('#maise5')

            clicar_mais.addEventListener("click", function () {

                if (n_input_e5 < 4) {
                    let right = document.createTextNode('||');
                    let seta_right = document.createElement('span');
                    seta_right.classList.add('right');
                    seta_right.appendChild(right);
                    document.querySelector('#inpute5').appendChild(seta_right);

                    let entradae = document.createElement('input');
                    entradae.placeholder = 'In';
                    entradae.classList.add('input');
                    entradae.type = 'number';
                    entradae.min = 0;
                    document.querySelector('#inpute5').appendChild(entradae);

                    let nivelee = document.createElement('input');
                    nivelee.placeholder = 'Nível';
                    nivelee.type = 'number';
                    nivelee.min = 0;
                    nivelee.classList.add('input');
                    document.querySelector('#inpute5').appendChild(nivelee);

                    entradae.id = 'ee5' + n_input_e5;
                    nivelee.id = 'ne5' + n_input_e5;

                    n_input_e5 = n_input_e5 + 1;
                    if (n_input_e5 == 4) {
                        document.querySelector('#maise5').style.display = 'none';
                    }
                }
            })
        }
        //----- FIM CRIAR INPUTS 

        //----- FIM INPUT

        //----- OUTPUT

        let igual_icone = document.createTextNode('=');
        let igual = document.createElement('span');
        igual.classList.add('igual');
        igual.appendChild(igual_icone);
        outputs.appendChild(igual);

        let mais2 = document.createTextNode('+');
        let botao_mais2 = document.createElement('button');
        botao_mais2.classList.add('mais');
        botao_mais2.appendChild(mais2);
        outputs.appendChild(botao_mais2);

        let saidae = document.createElement('input');
        saidae.placeholder = 'Out';
        saidae.min = 0;
        saidae.type = 'number';
        saidae.classList.add('output');
        outputs.appendChild(saidae);

        let nivelse = document.createElement('input');
        nivelse.placeholder = 'Nível';
        nivelse.min = 0;
        nivelse.type = 'number';
        nivelse.classList.add('output');
        outputs.appendChild(nivelse);

        saidae.id = 'se' + (n_blocos_e) + '0';
        nivelse.id = 'nse' + (n_blocos_e) + '0';

        //---- Criar Outputs

        if (n_blocos_e == 1) {

            botao_mais2.id = 'maiseo1';

            clicar_mais = document.querySelector('#maiseo1')

            clicar_mais.addEventListener("click", function () {

                if (n_output_e1 < 2) {
                    let right = document.createTextNode('||');
                    let seta_right = document.createElement('span');
                    seta_right.classList.add('right');
                    seta_right.appendChild(right);
                    document.querySelector('#outpute1').appendChild(seta_right);

                    let saidae = document.createElement('input');
                    saidae.placeholder = 'Out';
                    saidae.classList.add('output');
                    saidae.min = 0;
                    saidae.type = 'number';
                    document.querySelector('#outpute1').appendChild(saidae);

                    let nivelse = document.createElement('input');
                    nivelse.placeholder = 'Nível';
                    nivelse.classList.add('output');
                    nivelse.min = 0;
                    nivelse.type = 'number';
                    document.querySelector('#outpute1').appendChild(nivelse);

                    saidae.id = 'se1' + n_output_e1;
                    nivelse.id = 'nse1' + n_output_e1;

                    n_output_e1 = n_output_e1 + 1;
                    if (n_output_e1 == 2) {
                        document.querySelector('#maiseo1').style.display = 'none';
                    }
                }
            })
        }
        if (n_blocos_e == 2) {

            botao_mais2.id = 'maiseo2';

            clicar_mais = document.querySelector('#maiseo2')

            clicar_mais.addEventListener("click", function () {

                if (n_output_e2 < 2) {
                    let right = document.createTextNode('||');
                    let seta_right = document.createElement('span');
                    seta_right.classList.add('right');
                    seta_right.appendChild(right);
                    document.querySelector('#outpute2').appendChild(seta_right);

                    let saidae = document.createElement('input');
                    saidae.placeholder = 'Out';
                    saidae.classList.add('output');
                    document.querySelector('#outpute2').appendChild(saidae);

                    let nivelse = document.createElement('input');
                    nivelse.placeholder = 'Nível';
                    nivelse.classList.add('output');
                    saidae.min = 0;
                    saidae.type = 'number';
                    nivelse.min = 0;
                    nivelse.type = 'number';
                    document.querySelector('#outpute2').appendChild(nivelse);

                    saidae.id = 'se2' + n_output_e2;
                    nivelse.id = 'nse2' + n_output_e2;

                    n_output_e2 = n_output_e2 + 1;

                    if (n_output_e2 == 2) {
                        document.querySelector('#maiseo2').style.display = 'none';
                    }
                }
            })
        }
        if (n_blocos_e == 3) {

            botao_mais2.id = 'maiseo3';

            clicar_mais = document.querySelector('#maiseo3')

            clicar_mais.addEventListener("click", function () {

                if (n_output_e3 < 2) {
                    let right = document.createTextNode('||');
                    let seta_right = document.createElement('span');
                    seta_right.classList.add('right');
                    seta_right.appendChild(right);
                    document.querySelector('#outpute3').appendChild(seta_right);

                    let saidae = document.createElement('input');
                    saidae.placeholder = 'Out';
                    saidae.classList.add('output');
                    document.querySelector('#outpute3').appendChild(saidae);

                    let nivelse = document.createElement('input');
                    nivelse.placeholder = 'Nível';
                    nivelse.classList.add('output');
                    saidae.min = 0;
                    saidae.type = 'number';
                    nivelse.min = 0;
                    nivelse.type = 'number';
                    document.querySelector('#outpute3').appendChild(nivelse);

                    saidae.id = 'se3' + n_output_e3;
                    nivelse.id = 'nse3' + n_output_e3;

                    n_output_e3 = n_output_e3 + 1;

                    if (n_output_e3 == 2) {
                        document.querySelector('#maiseo3').style.display = 'none';
                    }
                }
            })
        }
        if (n_blocos_e == 4) {

            botao_mais2.id = 'maiseo4';

            clicar_mais = document.querySelector('#maiseo4')

            clicar_mais.addEventListener("click", function () {

                if (n_output_e4 < 2) {
                    let right = document.createTextNode('||');
                    let seta_right = document.createElement('span');
                    seta_right.classList.add('right');
                    seta_right.appendChild(right);
                    document.querySelector('#outpute4').appendChild(seta_right);

                    let saidae = document.createElement('input');
                    saidae.placeholder = 'Out';
                    saidae.classList.add('output');
                    saidae.min = 0;
                    saidae.type = 'number';
                    document.querySelector('#outpute4').appendChild(saidae);

                    let nivelse = document.createElement('input');
                    nivelse.placeholder = 'Nível';
                    nivelse.classList.add('output');
                    nivelse.min = 0;
                    nivelse.type = 'number';
                    document.querySelector('#outpute4').appendChild(nivelse);

                    saidae.id = 'se4' + n_output_e4;
                    nivelse.id = 'nse4' + n_output_e4;

                    n_output_e4 = n_output_e4 + 1;

                    if (n_output_e4 == 2) {
                        document.querySelector('#maiseo4').style.display = 'none';
                    }
                }
            })
        }
        if (n_blocos_e == 5) {

            botao_mais2.id = 'maiseo5';

            clicar_mais = document.querySelector('#maiseo5')

            clicar_mais.addEventListener("click", function () {

                if (n_output_e5 < 2) {
                    let right = document.createTextNode('||');
                    let seta_right = document.createElement('span');
                    seta_right.classList.add('right');
                    seta_right.appendChild(right);
                    document.querySelector('#outpute5').appendChild(seta_right);

                    let saidae = document.createElement('input');
                    saidae.placeholder = 'Out';
                    saidae.classList.add('output');
                    saidae.min = 0;
                    saidae.type = 'number';
                    document.querySelector('#outpute5').appendChild(saidae);

                    let nivelse = document.createElement('input');
                    nivelse.placeholder = 'Nível';
                    nivelse.classList.add('output');
                    nivelse.min = 0;
                    nivelse.type = 'number';
                    document.querySelector('#outpute5').appendChild(nivelse);

                    saidae.id = 'se5' + n_output_e5;
                    nivelse.id = 'nse5' + n_output_e5;

                    n_output_e5 = n_output_e5 + 1;

                    if (n_output_e5 == 2) {
                        document.querySelector('#maiseo5').style.display = 'none';
                    }
                }
            })
        }
        //----- FIM criar outputs

        //----- FIM OUTPUT

        //----- FIM DIV INOUTS

        let baixo = document.createTextNode('[]');
        let divisao = document.createElement('span');
        divisao.appendChild(baixo);
        divisao.classList.add('baixo');

        logicae.appendChild(divisao);

        ordem_limpa.push('e');
        ordem.push('e' + n_blocos_e);

    } else {

        alert('Por questões de memória, o número máximo de blocos "Lógica E" é de 5 unidades!')
    }
})


//----------- OU ----------------

per_ou.addEventListener("click", function () {

    if (n_blocos_ou < 5) {
        n_blocos = n_blocos + 1;

        //-------- DIV PEREXC

        let logicaou = document.createElement('div');
        logicaou.classList.add('logicaou');

        let perexc = document.createElement('div');
        perexc.classList.add('perexc');

        personalizando.appendChild(logicaou);
        logicaou.appendChild(perexc);

        n_blocos_ou = n_blocos_ou + 1

        logicaou.id = 'bloco' + n_blocos;

        let logtitle = document.createElement('span');
        let title = document.createTextNode('Lógica OU');

        logtitle.appendChild(title);
        perexc.appendChild(logtitle);

        // let x = document.createTextNode('X');

        // let botaox = document.createElement('button');
        //  botaox.classList.add('excper');

        // perexc.appendChild(botaox);
        // botaox.appendChild(x);

        //----- FIM DIV PEREXC

        //----- DIV INOUTS

        let inouts = document.createElement('div');
        inouts.classList.add('inouts');
        logicaou.appendChild(inouts);

        let inputs = document.createElement('div');
        inputs.classList.add('inputs');
        inouts.appendChild(inputs);

        inputs.id = "inputou" + n_blocos_ou;

        let outputs = document.createElement('div');
        outputs.classList.add('outputs');
        inouts.appendChild(outputs);

        outputs.id = "outputou" + n_blocos_ou;

        //----- INPUT

        let mais = document.createTextNode('+');
        let botao_mais = document.createElement('button');
        botao_mais.classList.add('mais');
        botao_mais.appendChild(mais);
        inputs.appendChild(botao_mais);

        let entradaou = document.createElement('input');
        entradaou.placeholder = 'In';
        entradaou.classList.add('input');
        inputs.appendChild(entradaou);

        let niveleou = document.createElement('input');
        niveleou.placeholder = 'Nível';
        niveleou.classList.add('input');
        inputs.appendChild(niveleou);

        entradaou.id = 'eou' + (n_blocos_ou) + '0';
        niveleou.id = 'nou' + (n_blocos_ou) + '0';

        //-----Criar inputs

        if (n_blocos_ou == 1) {

            botao_mais.id = 'maisou1';

            clicar_mais = document.querySelector('#maisou1')

            clicar_mais.addEventListener("click", function () {

                if (n_input_ou1 < 4) {

                    let right = document.createTextNode('||');
                    let seta_right = document.createElement('span');
                    seta_right.classList.add('right');
                    seta_right.appendChild(right);
                    document.querySelector('#inputou1').appendChild(seta_right);

                    let entradaou = document.createElement('input');
                    entradaou.placeholder = 'In';
                    entradaou.classList.add('input');
                    document.querySelector('#inputou1').appendChild(entradaou);

                    let niveleou = document.createElement('input');
                    niveleou.placeholder = 'Nível';
                    niveleou.classList.add('input');
                    document.querySelector('#inputou1').appendChild(niveleou);

                    entradaou.id = 'eou1' + n_input_ou1;
                    niveleou.id = 'nou1' + n_input_ou1;

                    n_input_ou1 = n_input_ou1 + 1;
                    if (n_input_ou1 == 4) {
                        document.querySelector('#maisou1').style.display = 'none';
                    }
                }
            })
        }
        if (n_blocos_ou == 2) {

            botao_mais.id = 'maisou2';

            clicar_mais = document.querySelector('#maisou2')

            clicar_mais.addEventListener("click", function () {

                if (n_input_ou2 < 4) {

                    let right = document.createTextNode('||');
                    let seta_right = document.createElement('span');
                    seta_right.classList.add('right');
                    seta_right.appendChild(right);
                    document.querySelector('#inputou2').appendChild(seta_right);

                    let entradaou = document.createElement('input');
                    entradaou.placeholder = 'In';
                    entradaou.classList.add('input');
                    document.querySelector('#inputou2').appendChild(entradaou);

                    let niveleou = document.createElement('input');
                    niveleou.placeholder = 'Nível';
                    niveleou.classList.add('input');
                    document.querySelector('#inputou2').appendChild(niveleou);

                    entradaou.id = 'eou2' + n_input_ou2;
                    niveleou.id = 'nou2' + n_input_ou2;

                    n_input_ou2 = n_input_ou2 + 1;
                    if (n_input_ou2 == 4) {
                        document.querySelector('#maisou2').style.display = 'none';
                    }
                }
            })
        }
        if (n_blocos_ou == 3) {

            botao_mais.id = 'maisou3';

            clicar_mais = document.querySelector('#maisou3')

            clicar_mais.addEventListener("click", function () {

                if (n_input_ou3 < 4) {

                    let right = document.createTextNode('||');
                    let seta_right = document.createElement('span');
                    seta_right.classList.add('right');
                    seta_right.appendChild(right);
                    document.querySelector('#inputou3').appendChild(seta_right);

                    let entradaou = document.createElement('input');
                    entradaou.placeholder = 'In';
                    entradaou.classList.add('input');
                    document.querySelector('#inputou3').appendChild(entradaou);

                    let niveleou = document.createElement('input');
                    niveleou.placeholder = 'Nível';
                    niveleou.classList.add('input');
                    document.querySelector('#inputou3').appendChild(niveleou);

                    entradaou.id = 'eou3' + n_input_ou3;
                    niveleou.id = 'nou3' + n_input_ou3;

                    n_input_ou3 = n_input_ou3 + 1;
                    if (n_input_ou3 == 4) {
                        document.querySelector('#maisou3').style.display = 'none';
                    }
                }
            })
        }
        if (n_blocos_ou == 4) {

            botao_mais.id = 'maisou4';

            clicar_mais = document.querySelector('#maisou4')

            clicar_mais.addEventListener("click", function () {

                if (n_input_ou4 < 4) {

                    let right = document.createTextNode('||');
                    let seta_right = document.createElement('span');
                    seta_right.classList.add('right');
                    seta_right.appendChild(right);
                    document.querySelector('#inputou4').appendChild(seta_right);

                    let entradaou = document.createElement('input');
                    entradaou.placeholder = 'In';
                    entradaou.classList.add('input');
                    document.querySelector('#inputou4').appendChild(entradaou);

                    let niveleou = document.createElement('input');
                    niveleou.placeholder = 'Nível';
                    niveleou.classList.add('input');
                    document.querySelector('#inputou4').appendChild(niveleou);

                    entradaou.id = 'eou4' + n_input_ou4;
                    niveleou.id = 'nou4' + n_input_ou4;

                    n_input_ou4 = n_input_ou4 + 1;
                    if (n_input_ou4 == 4) {
                        document.querySelector('#maisou4').style.display = 'none';
                    }
                }
            })
        }
        if (n_blocos_ou == 5) {

            botao_mais.id = 'maisou5';

            clicar_mais = document.querySelector('#maisou5')

            clicar_mais.addEventListener("click", function () {

                if (n_input_ou5 < 4) {

                    let right = document.createTextNode('||');
                    let seta_right = document.createElement('span');
                    seta_right.classList.add('right');
                    seta_right.appendChild(right);
                    document.querySelector('#inputou5').appendChild(seta_right);

                    let entradaou = document.createElement('input');
                    entradaou.placeholder = 'In';
                    entradaou.classList.add('input');
                    document.querySelector('#inputou5').appendChild(entradaou);

                    let niveleou = document.createElement('input');
                    niveleou.placeholder = 'Nível';
                    niveleou.classList.add('input');
                    document.querySelector('#inputou5').appendChild(niveleou);

                    entradaou.id = 'eou5' + n_input_ou5;
                    niveleou.id = 'nou5' + n_input_ou5;

                    n_input_ou5 = n_input_ou5 + 1;

                    if (n_input_ou5 == 4) {
                        document.querySelector('#maisou5').style.display = 'none';
                    }
                }
            })
        }
        //----- FIM criar inputs
        //----- FIM INPUT

        //----- OUTPUT

        let igual_icone = document.createTextNode('=');
        let igual = document.createElement('span');
        igual.classList.add('igual');
        igual.appendChild(igual_icone);
        outputs.appendChild(igual);

        let mais2 = document.createTextNode('+');
        let botao_mais2 = document.createElement('button');
        botao_mais2.classList.add('mais');
        botao_mais2.appendChild(mais2);
        outputs.appendChild(botao_mais2);

        let saidaou = document.createElement('input');
        saidaou.placeholder = 'Out';
        saidaou.type = "number";
        saidaou.min = 0;
        saidaou.classList.add('output');
        outputs.appendChild(saidaou);

        let nivelsou = document.createElement('input');
        nivelsou.placeholder = 'Nível';
        nivelsou.type = "number";
        nivelsou.min = 0;
        nivelsou.classList.add('output');
        outputs.appendChild(nivelsou);

        saidaou.id = 'sou' + (n_blocos_ou) + '0';
        nivelsou.id = 'nsou' + (n_blocos_ou) + '0';

        //---- Criar outputs

        if (n_blocos_ou == 1) {

            botao_mais2.id = 'maisouo1';

            clicar_mais = document.querySelector('#maisouo1')

            clicar_mais.addEventListener("click", function () {

                if (n_output_ou1 < 2) {
                    let right = document.createTextNode('||');
                    let seta_right = document.createElement('span');
                    seta_right.classList.add('right');
                    seta_right.appendChild(right);
                    document.querySelector('#outputou1').appendChild(seta_right);

                    let saidaou = document.createElement('input');
                    saidaou.placeholder = 'Out';
                    saidaou.classList.add('output');
                    saidaou.type = "number";
                    saidaou.min = 0;
                    document.querySelector('#outputou1').appendChild(saidaou);

                    let nivelsou = document.createElement('input');
                    nivelsou.placeholder = 'Nível';
                    nivelsou.classList.add('output');
                    nivelsou.type = "number";
                    nivelsou.min = 0;
                    document.querySelector('#outputou1').appendChild(nivelsou);

                    saidaou.id = 'sou1' + n_output_e1;
                    nivelsou.id = 'nsou1' + n_output_e1;

                    n_output_ou1 = n_output_ou1 + 1;

                    if (n_output_ou1 == 2) {
                        document.querySelector('#maisouo1').style.display = 'none';
                    }
                }
            })
        }
        if (n_blocos_ou == 2) {

            botao_mais2.id = 'maisouo2';

            clicar_mais = document.querySelector('#maisouo2')

            clicar_mais.addEventListener("click", function () {

                if (n_output_ou2 < 2) {
                    let right = document.createTextNode('||');
                    let seta_right = document.createElement('span');
                    seta_right.classList.add('right');
                    seta_right.appendChild(right);
                    document.querySelector('#outputou2').appendChild(seta_right);

                    let saidaou = document.createElement('input');
                    saidaou.placeholder = 'Out';
                    saidaou.classList.add('output');
                    saidaou.type = "number";
                    saidaou.min = 0;
                    document.querySelector('#outputou2').appendChild(saidaou);

                    let nivelsou = document.createElement('input');
                    nivelsou.placeholder = 'Nível';
                    nivelsou.classList.add('output');
                    nivelsou.type = "number";
                    nivelsou.min = 0;
                    document.querySelector('#outputou2').appendChild(nivelsou);

                    saidaou.id = 'sou2' + n_output_e2;
                    nivelsou.id = 'nsou2' + n_output_e2;

                    n_output_ou2 = n_output_ou2 + 1;

                    if (n_output_ou2 == 2) {
                        document.querySelector('#maisouo2').style.display = 'none';
                    }
                }
            })
        }
        if (n_blocos_ou == 3) {

            botao_mais2.id = 'maisouo3';

            clicar_mais = document.querySelector('#maisouo3')

            clicar_mais.addEventListener("click", function () {

                if (n_output_ou3 < 2) {
                    let right = document.createTextNode('||');
                    let seta_right = document.createElement('span');
                    seta_right.classList.add('right');
                    seta_right.appendChild(right);
                    document.querySelector('#outputou3').appendChild(seta_right);

                    let saidaou = document.createElement('input');
                    saidaou.placeholder = 'Out';
                    saidaou.classList.add('output');
                    saidaou.type = "number";
                    saidaou.min = 0;
                    document.querySelector('#outputou3').appendChild(saidaou);

                    let nivelsou = document.createElement('input');
                    nivelsou.placeholder = 'Nível';
                    nivelsou.classList.add('output');
                    nivelsou.type = "number";
                    nivelsou.min = 0;
                    document.querySelector('#outputou3').appendChild(nivelsou);

                    saidaou.id = 'sou3' + n_output_e3;
                    nivelsou.id = 'nsou3' + n_output_e3;

                    n_output_ou3 = n_output_ou3 + 1;

                    if (n_output_ou3 == 2) {
                        document.querySelector('#maisouo3').style.display = 'none';
                    }
                }
            })
        }
        if (n_blocos_ou == 4) {

            botao_mais2.id = 'maisouo4';

            clicar_mais = document.querySelector('#maisouo4')

            clicar_mais.addEventListener("click", function () {

                if (n_output_ou4 < 2) {
                    let right = document.createTextNode('||');
                    let seta_right = document.createElement('span');
                    seta_right.classList.add('right');
                    seta_right.appendChild(right);
                    document.querySelector('#outputou4').appendChild(seta_right);

                    let saidaou = document.createElement('input');
                    saidaou.placeholder = 'Out';
                    saidaou.classList.add('output');
                    saidaou.type = "number";
                    saidaou.min = 0;
                    document.querySelector('#outputou4').appendChild(saidaou);

                    let nivelsou = document.createElement('input');
                    nivelsou.placeholder = 'Nível';
                    nivelsou.classList.add('output');
                    nivelsou.type = "number";
                    nivelsou.min = 0;
                    document.querySelector('#outputou4').appendChild(nivelsou);

                    saidaou.id = 'sou4' + n_output_e4;
                    nivelsou.id = 'nsou4' + n_output_e4;

                    n_output_ou4 = n_output_ou4 + 1;

                    if (n_output_ou4 == 2) {
                        document.querySelector('#maisouo4').style.display = 'none';
                    }
                }
            })
        }
        if (n_blocos_ou == 5) {

            botao_mais2.id = 'maisouo5';

            clicar_mais = document.querySelector('#maisouo5')

            clicar_mais.addEventListener("click", function () {

                if (n_output_ou5 < 2) {
                    let right = document.createTextNode('||');
                    let seta_right = document.createElement('span');
                    seta_right.classList.add('right');
                    seta_right.appendChild(right);
                    document.querySelector('#outputou5').appendChild(seta_right);

                    let saidaou = document.createElement('input');
                    saidaou.placeholder = 'Out';
                    saidaou.classList.add('output');
                    saidaou.type = "number";
                    saidaou.min = 0;
                    document.querySelector('#outputou5').appendChild(saidaou);

                    let nivelsou = document.createElement('input');
                    nivelsou.placeholder = 'Nível';
                    nivelsou.classList.add('output');
                    nivelsou.type = "number";
                    nivelsou.min = 0;
                    document.querySelector('#outputou5').appendChild(nivelsou);

                    saidaou.id = 'sou5' + n_output_e5;
                    nivelsou.id = 'nsou5' + n_output_e5;

                    n_output_ou5 = n_output_ou5 + 1;

                    if (n_output_ou5 == 2) {
                        document.querySelector('#maisouo5').style.display = 'none';
                    }
                }
            })
        }
        //----- FIM Criar outputs
        //----- FIM OUTPUT

        //----- FIM DIV INOUTS

        let baixo = document.createTextNode('[]');
        let divisao = document.createElement('span');
        divisao.appendChild(baixo);
        divisao.classList.add('baixo');

        logicaou.appendChild(divisao);

        ordem_limpa.push('ou');
        ordem.push('ou' + n_blocos_ou);

    } else {
        alert('Por questões de memória, o número máximo de blocos "Lógica OU" é de 5 unidades!')
    }

})

per_t.addEventListener("click", function () {

    if (n_blocos_t < 5) {

        n_blocos = n_blocos + 1;

        //-------- DIV PEREXC

        let logicat = document.createElement('div');
        logicat.classList.add('temporizar');

        let perexc = document.createElement('div');
        perexc.classList.add('perexc');

        personalizando.appendChild(logicat);
        logicat.appendChild(perexc);

        logicat.id = 'bloco' + n_blocos;

        let logtitle = document.createElement('span');
        let title = document.createTextNode('Temporizar');

        logtitle.appendChild(title);
        perexc.appendChild(logtitle);

        // let x = document.createTextNode('X');

        // let botaox = document.createElement('button');
        // botaox.classList.add('excper');

        // perexc.appendChild(botaox);
        // botaox.appendChild(x);

        //----- FIM DIV PEREXC

        //----- DIV INOUTS

        let inouts = document.createElement('div');
        inouts.classList.add('inouts');
        logicat.appendChild(inouts);

        let porta = document.createElement('input');
        porta.placeholder = 'In';
        porta.type = 'number';
        porta.min = 0;
        porta.classList.add('output');
        inouts.appendChild(porta);

        let nivelt = document.createElement('input');
        nivelt.placeholder = 'Nível';
        nivelt.classList.add('output');
        nivelt.type = 'number';
        nivelt.min = 0;
        inouts.appendChild(nivelt);

        let tempo = document.createElement('input');
        tempo.placeholder = 'Tempo';
        tempo.type = 'number';
        tempo.min = 0;
        tempo.classList.add('tempo');
        inouts.appendChild(tempo);

        //------ FIM DIV INOUTS

        let baixo = document.createTextNode('[]');
        let divisao = document.createElement('span');
        divisao.appendChild(baixo);
        divisao.classList.add('baixo');

        logicat.appendChild(divisao);

        n_blocos_t = n_blocos_t + 1;

        ordem_limpa.push('t');
        ordem.push('t' + n_blocos_t);

    } else {
        alert('Por questões de memória, o número máximo de blocos "Temporizar" é de 5 unidades!')
    }
})

per_c.addEventListener("click", function () {

    if (n_blocos_c < 5) {
        n_blocos = n_blocos + 1;

        //-------- DIV PEREXC

        let logicac = document.createElement('div');
        logicac.classList.add('temporizar');

        let perexc = document.createElement('div');
        perexc.classList.add('perexc');

        logicac.id = 'bloco' + n_blocos;

        personalizando.appendChild(logicac);
        logicac.appendChild(perexc);

        let logtitle = document.createElement('span');
        let title = document.createTextNode('Contar');

        logtitle.appendChild(title);
        perexc.appendChild(logtitle);

        // let x = document.createTextNode('X');

        // let botaox = document.createElement('button');
        // botaox.classList.add('excper');

        // perexc.appendChild(botaox);
        // botaox.appendChild(x);

        //----- FIM DIV PEREXC

        //----- DIV INOUTS

        let inouts = document.createElement('div');
        inouts.classList.add('inouts');
        logicac.appendChild(inouts);

        let portac = document.createElement('input');
        portac.placeholder = 'In';
        portac.type = 'number';
        portac.min = 0;
        portac.classList.add('output');
        inouts.appendChild(portac);

        let nivelc = document.createElement('input');
        nivelc.placeholder = 'Nível';
        nivelc.classList.add('output');
        nivelc.type = 'number';
        nivelc.min = 0;
        inouts.appendChild(nivelc);

        let tempoc = document.createElement('input');
        tempoc.placeholder = 'Vezes';
        tempoc.type = 'number';
        tempoc.min = 0;
        tempoc.classList.add('vezes');
        inouts.appendChild(tempoc);

        //------ FIM DIV INOUTS

        let baixo = document.createTextNode('[]');
        let divisao = document.createElement('span');
        divisao.appendChild(baixo);
        divisao.classList.add('baixo');

        logicac.appendChild(divisao);

        n_blocos_c = n_blocos_c + 1;

        ordem_limpa.push('c');
        ordem.push('c' + n_blocos_c);

    } else {
        alert('Por questões de memória, o número máximo de blocos "Contar" é de 5 unidades!')
    }
})

//-------------- FIM CRIAR BLOCOS ------------------

var excluir_blocos = document.querySelector(".tirarblock");
var ambiente = document.querySelector(".ambiente");

excluir_blocos.addEventListener("click", function () {

    resetar();
})

var resetar = function () {

    personalizando.remove();

    let new_personalizando = document.createElement('div');
    new_personalizando.classList.add('personalizando');

    ambiente.appendChild(new_personalizando);

    personalizando = document.querySelector('.personalizando');

    n_blocos = 0;
    n_blocos_e = 0;
    n_blocos_ou = 0;
    n_blocos_t = 0;
    n_blocos_c = 0;

    ordem = [];
    ordem_limpa = [];

    n_input_e1 = 1;
    n_input_e2 = 1;
    n_input_e3 = 1;
    n_input_e4 = 1;
    n_input_e5 = 1;
    n_input_e6 = 1;
    n_input_e7 = 1;

    n_output_e1 = 1;
    n_output_e2 = 1;
    n_output_e3 = 1;
    n_output_e4 = 1;
    n_output_e5 = 1;
    n_output_e6 = 1;
    n_output_e7 = 1;

    n_input_ou1 = 1;
    n_input_ou2 = 1;
    n_input_ou3 = 1;
    n_input_ou4 = 1;
    n_input_ou5 = 1;
    n_input_ou6 = 1;
    n_input_ou7 = 1;

    n_output_ou1 = 1;
    n_output_ou2 = 1;
    n_output_ou3 = 1;
    n_output_ou4 = 1;
    n_output_uo5 = 1;
    n_output_ou6 = 1;
    n_output_ou7 = 1;

    e_passado = 0;
    ou_passado = 0;
    c_passado = 0;
    t_passado = 0;

    pode_continuar = false;
    coluna = 0;

    linha1_entradas = [];
    linha2_entradas = [];
    linha3_entradas = [];
    linha4_entradas = [];
    linha5_entradas = [];

    linha1_saidas = [];
    linha2_saidas = [];
    linha3_saidas = [];
    linha4_saidas = [];
    linha5_saidas = [];
}

//---- Verificar atalhos

var num_atalhos;

var codigo_at1;
var codigo_at2;
var codigo_at3;
var codigo_at4;


var verificar_atalhos = function () {

    var pegar_num_atalhos = firebase.database().ref().child('FIRMWARE').child('PERSONALIZADO').child('NÚMERO');

    pegar_num_atalhos.get().then((snapshot) => {

        num_atalhos = snapshot.val();

        //  for (var n = 0; n < num_atalhos; n++) {

        //      var qual_at = '.at';
        //      var n_string = (n + 1).toString();
        //     var qual_atalho = qual_at.concat(n_string);

        //      document.querySelector(qual_atalho).style.display = 'flex';

        // }
        // for (var n = 0; n < num_atalhos; n++) {

        //     var qual_c = '.pp';
        //     var n_string = (n + 1).toString();
        //     var qual_code = qual_c.concat(n_string);
        //     var codigo;

        //     var pegar_codigo = firebase.database().ref().child('FIRMWARE').child('PERSONALIZADO').child('ATALHO_' + n_string).child('CÓDIGO');

        //     pegar_codigo.get().then((snapshot) => {

        //         codigo = snapshot.val();

        //         console.log(codigo);

        //     })
        //      document.querySelector(qual_code).textContent = 'Código: ' + codigo; UNDEFINED
        // }

        var atalho1 = firebase.database().ref().child('FIRMWARE').child('PERSONALIZADO').child('ATALHO_1').child('CÓDIGO');
        var atalho2 = firebase.database().ref().child('FIRMWARE').child('PERSONALIZADO').child('ATALHO_2').child('CÓDIGO');
        var atalho3 = firebase.database().ref().child('FIRMWARE').child('PERSONALIZADO').child('ATALHO_3').child('CÓDIGO');
        var atalho4 = firebase.database().ref().child('FIRMWARE').child('PERSONALIZADO').child('ATALHO_4').child('CÓDIGO');

        if (num_atalhos == 1) {

            atalho1.get().then((snapshot) => {

                codigo_at1 = snapshot.val();

                document.querySelector(".pp1").textContent = "Código: " + codigo_at1;
                document.querySelector(".ap1").style.display = 'flex';
            })

            document.querySelector(".parece").style.display = 'none';
        }
        if (num_atalhos == 2) {

            atalho1.get().then((snapshot) => {

                codigo_at1 = snapshot.val();

                document.querySelector(".pp1").textContent = "Código: " + codigo_at1;
                document.querySelector(".ap1").style.display = 'flex';
            })
            atalho2.get().then((snapshot) => {

                codigo_at2 = snapshot.val();

                document.querySelector(".pp2").textContent = "Código: " + codigo_at2;
                document.querySelector(".ap2").style.display = 'flex';
            })
            document.querySelector(".parece").style.display = 'none';
        }
        if (num_atalhos == 3) {

            atalho1.get().then((snapshot) => {

                codigo_at1 = snapshot.val();

                document.querySelector(".pp1").textContent = "Código: " + codigo_at1;
                document.querySelector(".ap1").style.display = 'flex';
            })
            atalho2.get().then((snapshot) => {

                codigo_at2 = snapshot.val();

                document.querySelector(".pp2").textContent = "Código: " + codigo_at2;
                document.querySelector(".ap2").style.display = 'flex';
            })
            atalho3.get().then((snapshot) => {

                codigo_at3 = snapshot.val();

                document.querySelector(".pp3").textContent = "Código: " + codigo_at3;
                document.querySelector(".ap3").style.display = 'flex';
            })
            document.querySelector(".parece").style.display = 'none';
        }
        if (num_atalhos == 4) {

            atalho1.get().then((snapshot) => {

                codigo_at1 = snapshot.val();

                document.querySelector(".pp1").textContent = "Código: " + codigo_at1;
                document.querySelector(".ap1").style.display = 'flex';
            })
            atalho2.get().then((snapshot) => {

                codigo_at2 = snapshot.val();

                document.querySelector(".pp2").textContent = "Código: " + codigo_at2;
                document.querySelector(".ap2").style.display = 'flex';
            })
            atalho3.get().then((snapshot) => {

                codigo_at3 = snapshot.val();

                document.querySelector(".pp3").textContent = "Código: " + codigo_at3;
                document.querySelector(".ap3").style.display = 'flex';
            })
            atalho4.get().then((snapshot) => {

                codigo_at4 = snapshot.val();

                document.querySelector(".pp4").textContent = "Código: " + codigo_at4;
                document.querySelector(".ap4").style.display = 'flex';
            })
            document.querySelector(".parece").style.display = 'none';
        }
    })
}

//--------- EXCLUIR EXERCICIOS ------

var excluir_exer = document.querySelector(".excexer");

excluir_exer.addEventListener("click", function () {

})

var excluir_exer = document.querySelector(".excexer");

excluir_exer.addEventListener("click", function () {

    firebase.database().ref().child('FIRMWARE').child('PERSONALIZADO').child('ATALHO_1').remove();
    firebase.database().ref().child('FIRMWARE').child('PERSONALIZADO').child('ATALHO_2').remove();
    firebase.database().ref().child('FIRMWARE').child('PERSONALIZADO').child('ATALHO_3').remove();
    firebase.database().ref().child('FIRMWARE').child('PERSONALIZADO').child('ATALHO_4').remove();

    firebase.database().ref().child('FIRMWARE').child('PERSONALIZADO').child('NÚMERO').set(zero);

    document.querySelector(".pp4").textContent = "Indefinido";
    document.querySelector(".ap4").style.display = 'none';

    document.querySelector(".pp3").textContent = "Indefinido";
    document.querySelector(".ap3").style.display = 'none';

    document.querySelector(".pp2").textContent = "Indefinido";
    document.querySelector(".ap2").style.display = 'none';

    document.querySelector(".pp1").textContent = "Indefinido";
    document.querySelector(".ap1").style.display = 'none';

    verificar_atalhos();

    codigo_at1 = 0;
    codigo_at2 = 0;
    codigo_at3 = 0;
    codigo_at4 = 0;

})

//------------------ COMPILAR -----------------------

var linha1_entradas = [];
var linha2_entradas = [];
var linha3_entradas = [];
var linha4_entradas = [];
var linha5_entradas = [];

var linha1_saidas = [];
var linha2_saidas = [];
var linha3_saidas = [];
var linha4_saidas = [];
var linha5_saidas = [];

var e_passado = 0;
var ou_passado = 0;
var c_passado = 0;
var t_passado = 0;
var coluna = 0;

var pode_continuar = false;

var compilar = document.querySelector(".compilar");

compilar.addEventListener("click", function () {

    var codigo_atalho = document.querySelector("#criar").value;

    if (codigo_atalho == "") {

        alert('O campo "Código" deve ser preenchido!')
    } else {

        if (codigo_atalho < 0 || codigo_atalho == 0 || codigo_atalho == "11" || codigo_atalho == "12" || codigo_atalho == "13" || codigo_atalho == "14" || codigo_atalho == "15") {

            alert('O código deve ser maior que 0 e diferente dos números: 11, 12, 13, 14, 15, 21, 22, 23, 24, 25, 31, 32, 33, 34, 35, 41, 42, 43, 44, 45, 51, 52, 53, 54, 55 e 0!');
        } else {

            if (codigo_atalho == "21" || codigo_atalho == "22" || codigo_atalho == "23" || codigo_atalho == "24" || codigo_atalho == "25") {

                alert('O código deve ser diferente dos números: 11, 12, 13, 14, 15, 21, 22, 23, 24, 25, 31, 32, 33, 34, 35, 41, 42, 43, 44, 45, 51, 52, 53, 54, 55 e 0!');
            } else {

                if (codigo_atalho == "31" || codigo_atalho == "32" || codigo_atalho == "33" || codigo_atalho == "34" || codigo_atalho == "35") {

                    alert('O código deve ser diferente dos números: 11, 12, 13, 14, 15, 21, 22, 23, 24, 25, 31, 32, 33, 34, 35, 41, 42, 43, 44, 45, 51, 52, 53, 54, 55 e 0!');
                } else {

                    if (codigo_atalho == "41" || codigo_atalho == "42" || codigo_atalho == "43" || codigo_atalho == "44" || codigo_atalho == "45") {

                        alert('O código deve ser diferente dos números: 11, 12, 13, 14, 15, 21, 22, 23, 24, 25, 31, 32, 33, 34, 35, 41, 42, 43, 44, 45, 51, 52, 53, 54, 55 e 0!');
                    } else {

                        if (codigo_atalho == "51" || codigo_atalho == "52" || codigo_atalho == "53" || codigo_atalho == "54" || codigo_atalho == "55") {

                            alert('O código deve ser diferente dos números: 11, 12, 13, 14, 15, 21, 22, 23, 24, 25, 31, 32, 33, 34, 35, 41, 42, 43, 44, 45, 51, 52, 53, 54, 55 e 0!');
                        } else {

                            if (n_blocos == 0) {

                                alert('Nenhum bloco foi criado!');
                            } else {

                                if (num_atalhos == 4) {

                                    alert('O limite de exercícios personalizados foi atingido! Exclua um deles para continuar!');
                                } else {

                                    if (parseInt(codigo_atalho) == codigo_at1 || parseInt(codigo_atalho) == codigo_at2 || parseInt(codigo_atalho) == codigo_at3 || parseInt(codigo_atalho) == codigo_at4) {

                                        alert('Não é possível criar dois exercícios com o mesmo código!')
                                    } else {

                                        pode_continuar = true;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    if (pode_continuar == true) {

        for (var i = 0; i < n_blocos; i++) {

            if (ordem_limpa[i] == "e") {

                e_passado = e_passado + 1;

                if (e_passado == 1) {

                    for (var j1 = 0; j1 < n_input_e1; j1++) {

                        var p_e = '#ee1';
                        var j1_string = j1.toString();
                        var qual_e = p_e.concat(j1_string);
                        var input_value = document.querySelector(qual_e).value;

                        var p_n = '#ne1';
                        var qual_n = p_n.concat(j1_string);
                        var nivel_value = document.querySelector(qual_n).value;

                        if (input_value == 1) {

                            linha1_entradas[coluna] = parseInt(nivel_value);
                        } else if (input_value == 2) {

                            linha2_entradas[coluna] = parseInt(nivel_value);
                        } else if (input_value == 3) {

                            linha3_entradas[coluna] = parseInt(nivel_value);
                        } else if (input_value == 4) {

                            linha4_entradas[coluna] = parseInt(nivel_value);
                        } else if (input_value == 5) {

                            linha5_entradas[coluna] = parseInt(nivel_value);
                        }
                    }
                    if (linha1_entradas[coluna] != 1 && linha1_entradas[coluna] != 0) {

                        linha1_entradas[coluna] = 0;
                    }
                    if (linha2_entradas[coluna] != 1 && linha2_entradas[coluna] != 0) {

                        linha2_entradas[coluna] = 0;
                    }
                    if (linha3_entradas[coluna] != 1 && linha3_entradas[coluna] != 0) {

                        linha3_entradas[coluna] = 0;
                    }
                    if (linha4_entradas[coluna] != 1 && linha4_entradas[coluna] != 0) {

                        linha4_entradas[coluna] = 0;
                    }
                    if (linha5_entradas[coluna] != 1 && linha5_entradas[coluna] != 0) {

                        linha5_entradas[coluna] = 0;
                    }

                    //------------------- SAIDAS ---------------------------

                    for (var jn1 = 0; jn1 < n_output_e1; jn1++) {

                        var p_e = '#se1';
                        var jn1_string = jn1.toString();
                        var qual_e = p_e.concat(jn1_string);
                        var input_value = document.querySelector(qual_e).value;

                        var p_n = '#nse1';
                        var qual_n = p_n.concat(jn1_string);
                        var nivel_value = document.querySelector(qual_n).value;

                        if (input_value == 1) {

                            linha1_saidas[coluna] = parseInt(nivel_value);
                        } else if (input_value == 2) {

                            linha2_saidas[coluna] = parseInt(nivel_value);
                        } else if (input_value == 3) {

                            linha3_saidas[coluna] = parseInt(nivel_value);
                        } else if (input_value == 4) {

                            linha4_saidas[coluna] = parseInt(nivel_value);
                        } else if (input_value == 5) {

                            linha5_saidas[coluna] = parseInt(nivel_value);
                        }
                    }
                    if (linha1_saidas[coluna] != 1 && linha1_saidas[coluna] != 0) {

                        linha1_saidas[coluna] = 0;
                    }
                    if (linha2_saidas[coluna] != 1 && linha2_saidas[coluna] != 0) {

                        linha2_saidas[coluna] = 0;
                    }
                    if (linha3_saidas[coluna] != 1 && linha3_saidas[coluna] != 0) {

                        linha3_saidas[coluna] = 0;
                    }
                    if (linha4_saidas[coluna] != 1 && linha4_saidas[coluna] != 0) {

                        linha4_saidas[coluna] = 0;
                    }
                    if (linha5_saidas[coluna] != 1 && linha5_saidas[coluna] != 0) {

                        linha5_saidas[coluna] = 0;
                    }

                    coluna = coluna + 1;
                }
                if (e_passado == 2) {

                    for (var j1 = 0; j1 < n_input_e2; j1++) {

                        var p_e = '#ee2';
                        var j1_string = j1.toString();
                        var qual_e = p_e.concat(j1_string);
                        var input_value = document.querySelector(qual_e).value;

                        var p_n = '#ne2';
                        var qual_n = p_n.concat(j1_string);
                        var nivel_value = document.querySelector(qual_n).value;

                        if (input_value == 1) {

                            linha1_entradas[coluna] = parseInt(nivel_value);
                        } else if (input_value == 2) {

                            linha2_entradas[coluna] = parseInt(nivel_value);
                        } else if (input_value == 3) {

                            linha3_entradas[coluna] = parseInt(nivel_value);
                        } else if (input_value == 4) {

                            linha4_entradas[coluna] = parseInt(nivel_value);
                        } else if (input_value == 5) {

                            linha5_entradas[coluna] = parseInt(nivel_value);
                        }
                    }
                    if (linha1_entradas[coluna] != 1 && linha1_entradas[coluna] != 0) {

                        linha1_entradas[coluna] = 0;
                    }
                    if (linha2_entradas[coluna] != 1 && linha2_entradas[coluna] != 0) {

                        linha2_entradas[coluna] = 0;
                    }
                    if (linha3_entradas[coluna] != 1 && linha3_entradas[coluna] != 0) {

                        linha3_entradas[coluna] = 0;
                    }
                    if (linha4_entradas[coluna] != 1 && linha4_entradas[coluna] != 0) {

                        linha4_entradas[coluna] = 0;
                    }
                    if (linha5_entradas[coluna] != 1 && linha5_entradas[coluna] != 0) {

                        linha5_entradas[coluna] = 0;
                    }

                    //------------------- SAIDAS ---------------------------

                    for (var jn1 = 0; jn1 < n_output_e2; jn1++) {

                        var p_e = '#se2';
                        var jn1_string = jn1.toString();
                        var qual_e = p_e.concat(jn1_string);
                        var input_value = document.querySelector(qual_e).value;

                        var p_n = '#nse2';
                        var qual_n = p_n.concat(jn1_string);
                        var nivel_value = document.querySelector(qual_n).value;

                        if (input_value == 1) {

                            linha1_saidas[coluna] = parseInt(nivel_value);
                        } else if (input_value == 2) {

                            linha2_saidas[coluna] = parseInt(nivel_value);
                        } else if (input_value == 3) {

                            linha3_saidas[coluna] = parseInt(nivel_value);
                        } else if (input_value == 4) {

                            linha4_saidas[coluna] = parseInt(nivel_value);
                        } else if (input_value == 5) {

                            linha5_saidas[coluna] = parseInt(nivel_value);
                        }
                    }
                    if (linha1_saidas[coluna] != 1 && linha1_saidas[coluna] != 0) {

                        linha1_saidas[coluna] = 0;
                    }
                    if (linha2_saidas[coluna] != 1 && linha2_saidas[coluna] != 0) {

                        linha2_saidas[coluna] = 0;
                    }
                    if (linha3_saidas[coluna] != 1 && linha3_saidas[coluna] != 0) {

                        linha3_saidas[coluna] = 0;
                    }
                    if (linha4_saidas[coluna] != 1 && linha4_saidas[coluna] != 0) {

                        linha4_saidas[coluna] = 0;
                    }
                    if (linha5_saidas[coluna] != 1 && linha5_saidas[coluna] != 0) {

                        linha5_saidas[coluna] = 0;
                    }

                    coluna = coluna + 1;

                }
                if (e_passado == 3) {

                    for (var j1 = 0; j1 < n_input_e3; j1++) {

                        var p_e = '#ee3';
                        var j1_string = j1.toString();
                        var qual_e = p_e.concat(j1_string);
                        var input_value = document.querySelector(qual_e).value;

                        var p_n = '#ne3';
                        var qual_n = p_n.concat(j1_string);
                        var nivel_value = document.querySelector(qual_n).value;

                        if (input_value == 1) {

                            linha1_entradas[coluna] = parseInt(nivel_value);
                        } else if (input_value == 2) {

                            linha2_entradas[coluna] = parseInt(nivel_value);
                        } else if (input_value == 3) {

                            linha3_entradas[coluna] = parseInt(nivel_value);
                        } else if (input_value == 4) {

                            linha4_entradas[coluna] = parseInt(nivel_value);
                        } else if (input_value == 5) {

                            linha5_entradas[coluna] = parseInt(nivel_value);
                        }
                    }
                    if (linha1_entradas[coluna] != 1 && linha1_entradas[coluna] != 0) {

                        linha1_entradas[coluna] = 0;
                    }
                    if (linha2_entradas[coluna] != 1 && linha2_entradas[coluna] != 0) {

                        linha2_entradas[coluna] = 0;
                    }
                    if (linha3_entradas[coluna] != 1 && linha3_entradas[coluna] != 0) {

                        linha3_entradas[coluna] = 0;
                    }
                    if (linha4_entradas[coluna] != 1 && linha4_entradas[coluna] != 0) {

                        linha4_entradas[coluna] = 0;
                    }
                    if (linha5_entradas[coluna] != 1 && linha5_entradas[coluna] != 0) {

                        linha5_entradas[coluna] = 0;
                    }

                    //------------------- SAIDAS ---------------------------

                    for (var jn1 = 0; jn1 < n_output_e3; jn1++) {

                        var p_e = '#se3';
                        var jn1_string = jn1.toString();
                        var qual_e = p_e.concat(jn1_string);
                        var input_value = document.querySelector(qual_e).value;

                        var p_n = '#nse3';
                        var qual_n = p_n.concat(jn1_string);
                        var nivel_value = document.querySelector(qual_n).value;

                        if (input_value == 1) {

                            linha1_saidas[coluna] = parseInt(nivel_value);
                        } else if (input_value == 2) {

                            linha2_saidas[coluna] = parseInt(nivel_value);
                        } else if (input_value == 3) {

                            linha3_saidas[coluna] = parseInt(nivel_value);
                        } else if (input_value == 4) {

                            linha4_saidas[coluna] = parseInt(nivel_value);
                        } else if (input_value == 5) {

                            linha5_saidas[coluna] = parseInt(nivel_value);
                        }
                    }
                    if (linha1_saidas[coluna] != 1 && linha1_saidas[coluna] != 0) {

                        linha1_saidas[coluna] = 0;
                    }
                    if (linha2_saidas[coluna] != 1 && linha2_saidas[coluna] != 0) {

                        linha2_saidas[coluna] = 0;
                    }
                    if (linha3_saidas[coluna] != 1 && linha3_saidas[coluna] != 0) {

                        linha3_saidas[coluna] = 0;
                    }
                    if (linha4_saidas[coluna] != 1 && linha4_saidas[coluna] != 0) {

                        linha4_saidas[coluna] = 0;
                    }
                    if (linha5_saidas[coluna] != 1 && linha5_saidas[coluna] != 0) {

                        linha5_saidas[coluna] = 0;
                    }

                    coluna = coluna + 1;

                }
                if (e_passado == 4) {

                    for (var j1 = 0; j1 < n_input_e4; j1++) {

                        var p_e = '#ee4';
                        var j1_string = j1.toString();
                        var qual_e = p_e.concat(j1_string);
                        var input_value = document.querySelector(qual_e).value;

                        var p_n = '#ne4';
                        var qual_n = p_n.concat(j1_string);
                        var nivel_value = document.querySelector(qual_n).value;

                        if (input_value == 1) {

                            linha1_entradas[coluna] = parseInt(nivel_value);
                        } else if (input_value == 2) {

                            linha2_entradas[coluna] = parseInt(nivel_value);
                        } else if (input_value == 3) {

                            linha3_entradas[coluna] = parseInt(nivel_value);
                        } else if (input_value == 4) {

                            linha4_entradas[coluna] = parseInt(nivel_value);
                        } else if (input_value == 5) {

                            linha5_entradas[coluna] = parseInt(nivel_value);
                        }
                    }
                    if (linha1_entradas[coluna] != 1 && linha1_entradas[coluna] != 0) {

                        linha1_entradas[coluna] = 0;
                    }
                    if (linha2_entradas[coluna] != 1 && linha2_entradas[coluna] != 0) {

                        linha2_entradas[coluna] = 0;
                    }
                    if (linha3_entradas[coluna] != 1 && linha3_entradas[coluna] != 0) {

                        linha3_entradas[coluna] = 0;
                    }
                    if (linha4_entradas[coluna] != 1 && linha4_entradas[coluna] != 0) {

                        linha4_entradas[coluna] = 0;
                    }
                    if (linha5_entradas[coluna] != 1 && linha5_entradas[coluna] != 0) {

                        linha5_entradas[coluna] = 0;
                    }

                    //------------------- SAIDAS ---------------------------

                    for (var jn1 = 0; jn1 < n_output_e4; jn1++) {

                        var p_e = '#se4';
                        var jn1_string = jn1.toString();
                        var qual_e = p_e.concat(jn1_string);
                        var input_value = document.querySelector(qual_e).value;

                        var p_n = '#nse4';
                        var qual_n = p_n.concat(jn1_string);
                        var nivel_value = document.querySelector(qual_n).value;

                        if (input_value == 1) {

                            linha1_saidas[coluna] = parseInt(nivel_value);
                        } else if (input_value == 2) {

                            linha2_saidas[coluna] = parseInt(nivel_value);
                        } else if (input_value == 3) {

                            linha3_saidas[coluna] = parseInt(nivel_value);
                        } else if (input_value == 4) {

                            linha4_saidas[coluna] = parseInt(nivel_value);
                        } else if (input_value == 5) {

                            linha5_saidas[coluna] = parseInt(nivel_value);
                        }
                    }
                    if (linha1_saidas[coluna] != 1 && linha1_saidas[coluna] != 0) {

                        linha1_saidas[coluna] = 0;
                    }
                    if (linha2_saidas[coluna] != 1 && linha2_saidas[coluna] != 0) {

                        linha2_saidas[coluna] = 0;
                    }
                    if (linha3_saidas[coluna] != 1 && linha3_saidas[coluna] != 0) {

                        linha3_saidas[coluna] = 0;
                    }
                    if (linha4_saidas[coluna] != 1 && linha4_saidas[coluna] != 0) {

                        linha4_saidas[coluna] = 0;
                    }
                    if (linha5_saidas[coluna] != 1 && linha5_saidas[coluna] != 0) {

                        linha5_saidas[coluna] = 0;
                    }

                    coluna = coluna + 1;

                }
                if (e_passado == 5) {

                    for (var j1 = 0; j1 < n_input_e5; j1++) {

                        var p_e = '#ee5';
                        var j1_string = j1.toString();
                        var qual_e = p_e.concat(j1_string);
                        var input_value = document.querySelector(qual_e).value;

                        var p_n = '#ne5';
                        var qual_n = p_n.concat(j1_string);
                        var nivel_value = document.querySelector(qual_n).value;

                        if (input_value == 1) {

                            linha1_entradas[coluna] = parseInt(nivel_value);
                        } else if (input_value == 2) {

                            linha2_entradas[coluna] = parseInt(nivel_value);
                        } else if (input_value == 3) {

                            linha3_entradas[coluna] = parseInt(nivel_value);
                        } else if (input_value == 4) {

                            linha4_entradas[coluna] = parseInt(nivel_value);
                        } else if (input_value == 5) {

                            linha5_entradas[coluna] = parseInt(nivel_value);
                        }
                    }
                    if (linha1_entradas[coluna] != 1 && linha1_entradas[coluna] != 0) {

                        linha1_entradas[coluna] = 0;
                    }
                    if (linha2_entradas[coluna] != 1 && linha2_entradas[coluna] != 0) {

                        linha2_entradas[coluna] = 0;
                    }
                    if (linha3_entradas[coluna] != 1 && linha3_entradas[coluna] != 0) {

                        linha3_entradas[coluna] = 0;
                    }
                    if (linha4_entradas[coluna] != 1 && linha4_entradas[coluna] != 0) {

                        linha4_entradas[coluna] = 0;
                    }
                    if (linha5_entradas[coluna] != 1 && linha5_entradas[coluna] != 0) {

                        linha5_entradas[coluna] = 0;
                    }

                    //------------------- SAIDAS ---------------------------

                    for (var jn1 = 0; jn1 < n_output_e5; jn1++) {

                        var p_e = '#se5';
                        var jn1_string = jn1.toString();
                        var qual_e = p_e.concat(jn1_string);
                        var input_value = document.querySelector(qual_e).value;

                        var p_n = '#nse5';
                        var qual_n = p_n.concat(jn1_string);
                        var nivel_value = document.querySelector(qual_n).value;

                        if (input_value == 1) {

                            linha1_saidas[coluna] = parseInt(nivel_value);
                        } else if (input_value == 2) {

                            linha2_saidas[coluna] = parseInt(nivel_value);
                        } else if (input_value == 3) {

                            linha3_saidas[coluna] = parseInt(nivel_value);
                        } else if (input_value == 4) {

                            linha4_saidas[coluna] = parseInt(nivel_value);
                        } else if (input_value == 5) {

                            linha5_saidas[coluna] = parseInt(nivel_value);
                        }
                    }
                    if (linha1_saidas[coluna] != 1 && linha1_saidas[coluna] != 0) {

                        linha1_saidas[coluna] = 0;
                    }
                    if (linha2_saidas[coluna] != 1 && linha2_saidas[coluna] != 0) {

                        linha2_saidas[coluna] = 0;
                    }
                    if (linha3_saidas[coluna] != 1 && linha3_saidas[coluna] != 0) {

                        linha3_saidas[coluna] = 0;
                    }
                    if (linha4_saidas[coluna] != 1 && linha4_saidas[coluna] != 0) {

                        linha4_saidas[coluna] = 0;
                    }
                    if (linha5_saidas[coluna] != 1 && linha5_saidas[coluna] != 0) {

                        linha5_saidas[coluna] = 0;
                    }

                    coluna = coluna + 1;
                }
            } else if (ordem_limpa[i] == "ou") {

                ou_passado = ou_passado + 1;

                if (ou_passado == 1) {

                    for (var j1 = 0; j1 < n_input_ou1; j1++) {

                        var p_ou = '#eou1';
                        var j1_string = j1.toString();
                        var qual_ou = p_ou.concat(j1_string);
                        var input_value = document.querySelector(qual_ou).value;

                        var p_ou = '#nou1';
                        var qual_ou = p_ou.concat(j1_string);
                        var nivel_value = document.querySelector(qual_ou).value;

                        if (input_value == 1) {

                            linha1_entradas[coluna] = parseInt(nivel_value);

                            if (linha1_entradas[coluna] != 1 && linha1_entradas[coluna] != 0) {

                                linha1_entradas[coluna] = 0;
                            }
                            if (linha2_entradas[coluna] != 1 && linha2_entradas[coluna] != 0) {

                                linha2_entradas[coluna] = 0;
                            }
                            if (linha3_entradas[coluna] != 1 && linha3_entradas[coluna] != 0) {

                                linha3_entradas[coluna] = 0;
                            }
                            if (linha4_entradas[coluna] != 1 && linha4_entradas[coluna] != 0) {

                                linha4_entradas[coluna] = 0;
                            }
                            if (linha5_entradas[coluna] != 1 && linha5_entradas[coluna] != 0) {

                                linha5_entradas[coluna] = 0;
                            }

                            //----------------- SAIDAS -------------

                            for (var jn1 = 0; jn1 < n_output_ou1; jn1++) {

                                var p_ou = '#sou1';
                                var jn1_string = jn1.toString();
                                var qual_ou = p_ou.concat(jn1_string);
                                var input_value = document.querySelector(qual_ou).value;

                                var p_n = '#nsou1';
                                var qual_n = p_n.concat(jn1_string);
                                var nivel_value = document.querySelector(qual_n).value;

                                if (input_value == 1) {

                                    linha1_saidas[coluna] = parseInt(nivel_value);
                                } else if (input_value == 2) {

                                    linha2_saidas[coluna] = parseInt(nivel_value);
                                } else if (input_value == 3) {

                                    linha3_saidas[coluna] = parseInt(nivel_value);
                                } else if (input_value == 4) {

                                    linha4_saidas[coluna] = parseInt(nivel_value);
                                } else if (input_value == 5) {

                                    linha5_saidas[coluna] = parseInt(nivel_value);
                                }
                            }
                            if (linha1_saidas[coluna] != 1 && linha1_saidas[coluna] != 0) {

                                linha1_saidas[coluna] = 0;
                            }
                            if (linha2_saidas[coluna] != 1 && linha2_saidas[coluna] != 0) {

                                linha2_saidas[coluna] = 0;
                            }
                            if (linha3_saidas[coluna] != 1 && linha3_saidas[coluna] != 0) {

                                linha3_saidas[coluna] = 0;
                            }
                            if (linha4_saidas[coluna] != 1 && linha4_saidas[coluna] != 0) {

                                linha4_saidas[coluna] = 0;
                            }
                            if (linha5_saidas[coluna] != 1 && linha5_saidas[coluna] != 0) {

                                linha5_saidas[coluna] = 0;
                            }

                            coluna = coluna + 1;

                        } else if (input_value == 2) {

                            linha2_entradas[coluna] = parseInt(nivel_value);

                            if (linha1_entradas[coluna] != 1 && linha1_entradas[coluna] != 0) {

                                linha1_entradas[coluna] = 0;
                            }
                            if (linha2_entradas[coluna] != 1 && linha2_entradas[coluna] != 0) {

                                linha2_entradas[coluna] = 0;
                            }
                            if (linha3_entradas[coluna] != 1 && linha3_entradas[coluna] != 0) {

                                linha3_entradas[coluna] = 0;
                            }
                            if (linha4_entradas[coluna] != 1 && linha4_entradas[coluna] != 0) {

                                linha4_entradas[coluna] = 0;
                            }
                            if (linha5_entradas[coluna] != 1 && linha5_entradas[coluna] != 0) {

                                linha5_entradas[coluna] = 0;
                            }

                            //----------------- SAIDAS -------------

                            for (var jn1 = 0; jn1 < n_output_ou1; jn1++) {

                                var p_ou = '#sou1';
                                var jn1_string = jn1.toString();
                                var qual_ou = p_ou.concat(jn1_string);
                                var input_value = document.querySelector(qual_ou).value;

                                var p_n = '#nsou1';
                                var qual_n = p_n.concat(jn1_string);
                                var nivel_value = document.querySelector(qual_n).value;

                                if (input_value == 1) {

                                    linha1_saidas[coluna] = parseInt(nivel_value);
                                } else if (input_value == 2) {

                                    linha2_saidas[coluna] = parseInt(nivel_value);
                                } else if (input_value == 3) {

                                    linha3_saidas[coluna] = parseInt(nivel_value);
                                } else if (input_value == 4) {

                                    linha4_saidas[coluna] = parseInt(nivel_value);
                                } else if (input_value == 5) {

                                    linha5_saidas[coluna] = parseInt(nivel_value);
                                }
                            }
                            if (linha1_saidas[coluna] != 1 && linha1_saidas[coluna] != 0) {

                                linha1_saidas[coluna] = 0;
                            }
                            if (linha2_saidas[coluna] != 1 && linha2_saidas[coluna] != 0) {

                                linha2_saidas[coluna] = 0;
                            }
                            if (linha3_saidas[coluna] != 1 && linha3_saidas[coluna] != 0) {

                                linha3_saidas[coluna] = 0;
                            }
                            if (linha4_saidas[coluna] != 1 && linha4_saidas[coluna] != 0) {

                                linha4_saidas[coluna] = 0;
                            }
                            if (linha5_saidas[coluna] != 1 && linha5_saidas[coluna] != 0) {

                                linha5_saidas[coluna] = 0;
                            }

                            coluna = coluna + 1;

                        } else if (input_value == 3) {

                            linha3_entradas[coluna] = parseInt(nivel_value);

                            if (linha1_entradas[coluna] != 1 && linha1_entradas[coluna] != 0) {

                                linha1_entradas[coluna] = 0;
                            }
                            if (linha2_entradas[coluna] != 1 && linha2_entradas[coluna] != 0) {

                                linha2_entradas[coluna] = 0;
                            }
                            if (linha3_entradas[coluna] != 1 && linha3_entradas[coluna] != 0) {

                                linha3_entradas[coluna] = 0;
                            }
                            if (linha4_entradas[coluna] != 1 && linha4_entradas[coluna] != 0) {

                                linha4_entradas[coluna] = 0;
                            }
                            if (linha5_entradas[coluna] != 1 && linha5_entradas[coluna] != 0) {

                                linha5_entradas[coluna] = 0;
                            }

                            //----------------- SAIDAS -------------

                            for (var jn1 = 0; jn1 < n_output_ou1; jn1++) {

                                var p_ou = '#sou1';
                                var jn1_string = jn1.toString();
                                var qual_ou = p_ou.concat(jn1_string);
                                var input_value = document.querySelector(qual_ou).value;

                                var p_n = '#nsou1';
                                var qual_n = p_n.concat(jn1_string);
                                var nivel_value = document.querySelector(qual_n).value;

                                if (input_value == 1) {

                                    linha1_saidas[coluna] = parseInt(nivel_value);
                                } else if (input_value == 2) {

                                    linha2_saidas[coluna] = parseInt(nivel_value);
                                } else if (input_value == 3) {

                                    linha3_saidas[coluna] = parseInt(nivel_value);
                                } else if (input_value == 4) {

                                    linha4_saidas[coluna] = parseInt(nivel_value);
                                } else if (input_value == 5) {

                                    linha5_saidas[coluna] = parseInt(nivel_value);
                                }
                            }
                            if (linha1_saidas[coluna] != 1 && linha1_saidas[coluna] != 0) {

                                linha1_saidas[coluna] = 0;
                            }
                            if (linha2_saidas[coluna] != 1 && linha2_saidas[coluna] != 0) {

                                linha2_saidas[coluna] = 0;
                            }
                            if (linha3_saidas[coluna] != 1 && linha3_saidas[coluna] != 0) {

                                linha3_saidas[coluna] = 0;
                            }
                            if (linha4_saidas[coluna] != 1 && linha4_saidas[coluna] != 0) {

                                linha4_saidas[coluna] = 0;
                            }
                            if (linha5_saidas[coluna] != 1 && linha5_saidas[coluna] != 0) {

                                linha5_saidas[coluna] = 0;
                            }

                            coluna = coluna + 1;

                        } else if (input_value == 4) {

                            linha4_entradas[coluna] = parseInt(nivel_value);

                            if (linha1_entradas[coluna] != 1 && linha1_entradas[coluna] != 0) {

                                linha1_entradas[coluna] = 0;
                            }
                            if (linha2_entradas[coluna] != 1 && linha2_entradas[coluna] != 0) {

                                linha2_entradas[coluna] = 0;
                            }
                            if (linha3_entradas[coluna] != 1 && linha3_entradas[coluna] != 0) {

                                linha3_entradas[coluna] = 0;
                            }
                            if (linha4_entradas[coluna] != 1 && linha4_entradas[coluna] != 0) {

                                linha4_entradas[coluna] = 0;
                            }
                            if (linha5_entradas[coluna] != 1 && linha5_entradas[coluna] != 0) {

                                linha5_entradas[coluna] = 0;
                            }

                            //----------------- SAIDAS -------------

                            for (var jn1 = 0; jn1 < n_output_ou1; jn1++) {

                                var p_ou = '#sou1';
                                var jn1_string = jn1.toString();
                                var qual_ou = p_ou.concat(jn1_string);
                                var input_value = document.querySelector(qual_ou).value;

                                var p_n = '#nsou1';
                                var qual_n = p_n.concat(jn1_string);
                                var nivel_value = document.querySelector(qual_n).value;

                                if (input_value == 1) {

                                    linha1_saidas[coluna] = parseInt(nivel_value);
                                } else if (input_value == 2) {

                                    linha2_saidas[coluna] = parseInt(nivel_value);
                                } else if (input_value == 3) {

                                    linha3_saidas[coluna] = parseInt(nivel_value);
                                } else if (input_value == 4) {

                                    linha4_saidas[coluna] = parseInt(nivel_value);
                                } else if (input_value == 5) {

                                    linha5_saidas[coluna] = parseInt(nivel_value);
                                }
                            }
                            if (linha1_saidas[coluna] != 1 && linha1_saidas[coluna] != 0) {

                                linha1_saidas[coluna] = 0;
                            }
                            if (linha2_saidas[coluna] != 1 && linha2_saidas[coluna] != 0) {

                                linha2_saidas[coluna] = 0;
                            }
                            if (linha3_saidas[coluna] != 1 && linha3_saidas[coluna] != 0) {

                                linha3_saidas[coluna] = 0;
                            }
                            if (linha4_saidas[coluna] != 1 && linha4_saidas[coluna] != 0) {

                                linha4_saidas[coluna] = 0;
                            }
                            if (linha5_saidas[coluna] != 1 && linha5_saidas[coluna] != 0) {

                                linha5_saidas[coluna] = 0;
                            }

                            coluna = coluna + 1;

                        } else if (input_value == 5) {

                            linha5_entradas[coluna] = parseInt(nivel_value);

                            if (linha1_entradas[coluna] != 1 && linha1_entradas[coluna] != 0) {

                                linha1_entradas[coluna] = 0;
                            }
                            if (linha2_entradas[coluna] != 1 && linha2_entradas[coluna] != 0) {

                                linha2_entradas[coluna] = 0;
                            }
                            if (linha3_entradas[coluna] != 1 && linha3_entradas[coluna] != 0) {

                                linha3_entradas[coluna] = 0;
                            }
                            if (linha4_entradas[coluna] != 1 && linha4_entradas[coluna] != 0) {

                                linha4_entradas[coluna] = 0;
                            }
                            if (linha5_entradas[coluna] != 1 && linha5_entradas[coluna] != 0) {

                                linha5_entradas[coluna] = 0;
                            }

                            //----------------- SAIDAS -------------

                            for (var jn1 = 0; jn1 < n_output_ou1; jn1++) {

                                var p_ou = '#sou1';
                                var jn1_string = jn1.toString();
                                var qual_ou = p_ou.concat(jn1_string);
                                var input_value = document.querySelector(qual_ou).value;

                                var p_n = '#nsou1';
                                var qual_n = p_n.concat(jn1_string);
                                var nivel_value = document.querySelector(qual_n).value;

                                if (input_value == 1) {

                                    linha1_saidas[coluna] = parseInt(nivel_value);
                                } else if (input_value == 2) {

                                    linha2_saidas[coluna] = parseInt(nivel_value);
                                } else if (input_value == 3) {

                                    linha3_saidas[coluna] = parseInt(nivel_value);
                                } else if (input_value == 4) {

                                    linha4_saidas[coluna] = parseInt(nivel_value);
                                } else if (input_value == 5) {

                                    linha5_saidas[coluna] = parseInt(nivel_value);
                                }
                            }
                            if (linha1_saidas[coluna] != 1 && linha1_saidas[coluna] != 0) {

                                linha1_saidas[coluna] = 0;
                            }
                            if (linha2_saidas[coluna] != 1 && linha2_saidas[coluna] != 0) {

                                linha2_saidas[coluna] = 0;
                            }
                            if (linha3_saidas[coluna] != 1 && linha3_saidas[coluna] != 0) {

                                linha3_saidas[coluna] = 0;
                            }
                            if (linha4_saidas[coluna] != 1 && linha4_saidas[coluna] != 0) {

                                linha4_saidas[coluna] = 0;
                            }
                            if (linha5_saidas[coluna] != 1 && linha5_saidas[coluna] != 0) {

                                linha5_saidas[coluna] = 0;
                            }

                            coluna = coluna + 1;
                        }
                    }

                } else if (ou_passado == 2) {

                    for (var j1 = 0; j1 < n_input_ou2; j1++) {

                        var p_ou = '#eou2';
                        var j1_string = j1.toString();
                        var qual_ou = p_ou.concat(j1_string);
                        var input_value = document.querySelector(qual_ou).value;

                        var p_ou = '#nou2';
                        var qual_ou = p_ou.concat(j1_string);
                        var nivel_value = document.querySelector(qual_ou).value;

                        if (input_value == 1) {

                            linha1_entradas[coluna] = parseInt(nivel_value);

                            if (linha1_entradas[coluna] != 1 && linha1_entradas[coluna] != 0) {

                                linha1_entradas[coluna] = 0;
                            }
                            if (linha2_entradas[coluna] != 1 && linha2_entradas[coluna] != 0) {

                                linha2_entradas[coluna] = 0;
                            }
                            if (linha3_entradas[coluna] != 1 && linha3_entradas[coluna] != 0) {

                                linha3_entradas[coluna] = 0;
                            }
                            if (linha4_entradas[coluna] != 1 && linha4_entradas[coluna] != 0) {

                                linha4_entradas[coluna] = 0;
                            }
                            if (linha5_entradas[coluna] != 1 && linha5_entradas[coluna] != 0) {

                                linha5_entradas[coluna] = 0;
                            }

                            //----------------- SAIDAS -------------

                            for (var jn1 = 0; jn1 < n_output_ou2; jn1++) {

                                var p_ou = '#sou2';
                                var jn1_string = jn1.toString();
                                var qual_ou = p_ou.concat(jn1_string);
                                var input_value = document.querySelector(qual_ou).value;

                                var p_n = '#nsou2';
                                var qual_n = p_n.concat(jn1_string);
                                var nivel_value = document.querySelector(qual_n).value;

                                if (input_value == 1) {

                                    linha1_saidas[coluna] = parseInt(nivel_value);
                                } else if (input_value == 2) {

                                    linha2_saidas[coluna] = parseInt(nivel_value);
                                } else if (input_value == 3) {

                                    linha3_saidas[coluna] = parseInt(nivel_value);
                                } else if (input_value == 4) {

                                    linha4_saidas[coluna] = parseInt(nivel_value);
                                } else if (input_value == 5) {

                                    linha5_saidas[coluna] = parseInt(nivel_value);
                                }
                            }
                            if (linha1_saidas[coluna] != 1 && linha1_saidas[coluna] != 0) {

                                linha1_saidas[coluna] = 0;
                            }
                            if (linha2_saidas[coluna] != 1 && linha2_saidas[coluna] != 0) {

                                linha2_saidas[coluna] = 0;
                            }
                            if (linha3_saidas[coluna] != 1 && linha3_saidas[coluna] != 0) {

                                linha3_saidas[coluna] = 0;
                            }
                            if (linha4_saidas[coluna] != 1 && linha4_saidas[coluna] != 0) {

                                linha4_saidas[coluna] = 0;
                            }
                            if (linha5_saidas[coluna] != 1 && linha5_saidas[coluna] != 0) {

                                linha5_saidas[coluna] = 0;
                            }

                            coluna = coluna + 1;

                        } else if (input_value == 2) {

                            linha2_entradas[coluna] = parseInt(nivel_value);

                            if (linha1_entradas[coluna] != 1 && linha1_entradas[coluna] != 0) {

                                linha1_entradas[coluna] = 0;
                            }
                            if (linha2_entradas[coluna] != 1 && linha2_entradas[coluna] != 0) {

                                linha2_entradas[coluna] = 0;
                            }
                            if (linha3_entradas[coluna] != 1 && linha3_entradas[coluna] != 0) {

                                linha3_entradas[coluna] = 0;
                            }
                            if (linha4_entradas[coluna] != 1 && linha4_entradas[coluna] != 0) {

                                linha4_entradas[coluna] = 0;
                            }
                            if (linha5_entradas[coluna] != 1 && linha5_entradas[coluna] != 0) {

                                linha5_entradas[coluna] = 0;
                            }

                            //----------------- SAIDAS -------------

                            for (var jn1 = 0; jn1 < n_output_ou2; jn1++) {

                                var p_ou = '#sou2';
                                var jn1_string = jn1.toString();
                                var qual_ou = p_ou.concat(jn1_string);
                                var input_value = document.querySelector(qual_ou).value;

                                var p_n = '#nsou2';
                                var qual_n = p_n.concat(jn1_string);
                                var nivel_value = document.querySelector(qual_n).value;

                                if (input_value == 1) {

                                    linha1_saidas[coluna] = parseInt(nivel_value);
                                } else if (input_value == 2) {

                                    linha2_saidas[coluna] = parseInt(nivel_value);
                                } else if (input_value == 3) {

                                    linha3_saidas[coluna] = parseInt(nivel_value);
                                } else if (input_value == 4) {

                                    linha4_saidas[coluna] = parseInt(nivel_value);
                                } else if (input_value == 5) {

                                    linha5_saidas[coluna] = parseInt(nivel_value);
                                }
                            }
                            if (linha1_saidas[coluna] != 1 && linha1_saidas[coluna] != 0) {

                                linha1_saidas[coluna] = 0;
                            }
                            if (linha2_saidas[coluna] != 1 && linha2_saidas[coluna] != 0) {

                                linha2_saidas[coluna] = 0;
                            }
                            if (linha3_saidas[coluna] != 1 && linha3_saidas[coluna] != 0) {

                                linha3_saidas[coluna] = 0;
                            }
                            if (linha4_saidas[coluna] != 1 && linha4_saidas[coluna] != 0) {

                                linha4_saidas[coluna] = 0;
                            }
                            if (linha5_saidas[coluna] != 1 && linha5_saidas[coluna] != 0) {

                                linha5_saidas[coluna] = 0;
                            }

                            coluna = coluna + 1;

                        } else if (input_value == 3) {

                            linha3_entradas[coluna] = parseInt(nivel_value);

                            if (linha1_entradas[coluna] != 1 && linha1_entradas[coluna] != 0) {

                                linha1_entradas[coluna] = 0;
                            }
                            if (linha2_entradas[coluna] != 1 && linha2_entradas[coluna] != 0) {

                                linha2_entradas[coluna] = 0;
                            }
                            if (linha3_entradas[coluna] != 1 && linha3_entradas[coluna] != 0) {

                                linha3_entradas[coluna] = 0;
                            }
                            if (linha4_entradas[coluna] != 1 && linha4_entradas[coluna] != 0) {

                                linha4_entradas[coluna] = 0;
                            }
                            if (linha5_entradas[coluna] != 1 && linha5_entradas[coluna] != 0) {

                                linha5_entradas[coluna] = 0;
                            }

                            //----------------- SAIDAS -------------

                            for (var jn1 = 0; jn1 < n_output_ou2; jn1++) {

                                var p_ou = '#sou2';
                                var jn1_string = jn1.toString();
                                var qual_ou = p_ou.concat(jn1_string);
                                var input_value = document.querySelector(qual_ou).value;

                                var p_n = '#nsou2';
                                var qual_n = p_n.concat(jn1_string);
                                var nivel_value = document.querySelector(qual_n).value;

                                if (input_value == 1) {

                                    linha1_saidas[coluna] = parseInt(nivel_value);
                                } else if (input_value == 2) {

                                    linha2_saidas[coluna] = parseInt(nivel_value);
                                } else if (input_value == 3) {

                                    linha3_saidas[coluna] = parseInt(nivel_value);
                                } else if (input_value == 4) {

                                    linha4_saidas[coluna] = parseInt(nivel_value);
                                } else if (input_value == 5) {

                                    linha5_saidas[coluna] = parseInt(nivel_value);
                                }
                            }
                            if (linha1_saidas[coluna] != 1 && linha1_saidas[coluna] != 0) {

                                linha1_saidas[coluna] = 0;
                            }
                            if (linha2_saidas[coluna] != 1 && linha2_saidas[coluna] != 0) {

                                linha2_saidas[coluna] = 0;
                            }
                            if (linha3_saidas[coluna] != 1 && linha3_saidas[coluna] != 0) {

                                linha3_saidas[coluna] = 0;
                            }
                            if (linha4_saidas[coluna] != 1 && linha4_saidas[coluna] != 0) {

                                linha4_saidas[coluna] = 0;
                            }
                            if (linha5_saidas[coluna] != 1 && linha5_saidas[coluna] != 0) {

                                linha5_saidas[coluna] = 0;
                            }

                            coluna = coluna + 1;

                        } else if (input_value == 4) {

                            linha4_entradas[coluna] = parseInt(nivel_value);

                            if (linha1_entradas[coluna] != 1 && linha1_entradas[coluna] != 0) {

                                linha1_entradas[coluna] = 0;
                            }
                            if (linha2_entradas[coluna] != 1 && linha2_entradas[coluna] != 0) {

                                linha2_entradas[coluna] = 0;
                            }
                            if (linha3_entradas[coluna] != 1 && linha3_entradas[coluna] != 0) {

                                linha3_entradas[coluna] = 0;
                            }
                            if (linha4_entradas[coluna] != 1 && linha4_entradas[coluna] != 0) {

                                linha4_entradas[coluna] = 0;
                            }
                            if (linha5_entradas[coluna] != 1 && linha5_entradas[coluna] != 0) {

                                linha5_entradas[coluna] = 0;
                            }

                            //----------------- SAIDAS -------------

                            for (var jn1 = 0; jn1 < n_output_ou2; jn1++) {

                                var p_ou = '#sou2';
                                var jn1_string = jn1.toString();
                                var qual_ou = p_ou.concat(jn1_string);
                                var input_value = document.querySelector(qual_ou).value;

                                var p_n = '#nsou2';
                                var qual_n = p_n.concat(jn1_string);
                                var nivel_value = document.querySelector(qual_n).value;

                                if (input_value == 1) {

                                    linha1_saidas[coluna] = parseInt(nivel_value);
                                } else if (input_value == 2) {

                                    linha2_saidas[coluna] = parseInt(nivel_value);
                                } else if (input_value == 3) {

                                    linha3_saidas[coluna] = parseInt(nivel_value);
                                } else if (input_value == 4) {

                                    linha4_saidas[coluna] = parseInt(nivel_value);
                                } else if (input_value == 5) {

                                    linha5_saidas[coluna] = parseInt(nivel_value);
                                }
                            }
                            if (linha1_saidas[coluna] != 1 && linha1_saidas[coluna] != 0) {

                                linha1_saidas[coluna] = 0;
                            }
                            if (linha2_saidas[coluna] != 1 && linha2_saidas[coluna] != 0) {

                                linha2_saidas[coluna] = 0;
                            }
                            if (linha3_saidas[coluna] != 1 && linha3_saidas[coluna] != 0) {

                                linha3_saidas[coluna] = 0;
                            }
                            if (linha4_saidas[coluna] != 1 && linha4_saidas[coluna] != 0) {

                                linha4_saidas[coluna] = 0;
                            }
                            if (linha5_saidas[coluna] != 1 && linha5_saidas[coluna] != 0) {

                                linha5_saidas[coluna] = 0;
                            }

                            coluna = coluna + 1;

                        } else if (input_value == 5) {

                            linha5_entradas[coluna] = parseInt(nivel_value);

                            if (linha1_entradas[coluna] != 1 && linha1_entradas[coluna] != 0) {

                                linha1_entradas[coluna] = 0;
                            }
                            if (linha2_entradas[coluna] != 1 && linha2_entradas[coluna] != 0) {

                                linha2_entradas[coluna] = 0;
                            }
                            if (linha3_entradas[coluna] != 1 && linha3_entradas[coluna] != 0) {

                                linha3_entradas[coluna] = 0;
                            }
                            if (linha4_entradas[coluna] != 1 && linha4_entradas[coluna] != 0) {

                                linha4_entradas[coluna] = 0;
                            }
                            if (linha5_entradas[coluna] != 1 && linha5_entradas[coluna] != 0) {

                                linha5_entradas[coluna] = 0;
                            }

                            //----------------- SAIDAS -------------

                            for (var jn1 = 0; jn1 < n_output_ou2; jn1++) {

                                var p_ou = '#sou2';
                                var jn1_string = jn1.toString();
                                var qual_ou = p_ou.concat(jn1_string);
                                var input_value = document.querySelector(qual_ou).value;

                                var p_n = '#nsou2';
                                var qual_n = p_n.concat(jn1_string);
                                var nivel_value = document.querySelector(qual_n).value;

                                if (input_value == 1) {

                                    linha1_saidas[coluna] = parseInt(nivel_value);
                                } else if (input_value == 2) {

                                    linha2_saidas[coluna] = parseInt(nivel_value);
                                } else if (input_value == 3) {

                                    linha3_saidas[coluna] = parseInt(nivel_value);
                                } else if (input_value == 4) {

                                    linha4_saidas[coluna] = parseInt(nivel_value);
                                } else if (input_value == 5) {

                                    linha5_saidas[coluna] = parseInt(nivel_value);
                                }
                            }
                            if (linha1_saidas[coluna] != 1 && linha1_saidas[coluna] != 0) {

                                linha1_saidas[coluna] = 0;
                            }
                            if (linha2_saidas[coluna] != 1 && linha2_saidas[coluna] != 0) {

                                linha2_saidas[coluna] = 0;
                            }
                            if (linha3_saidas[coluna] != 1 && linha3_saidas[coluna] != 0) {

                                linha3_saidas[coluna] = 0;
                            }
                            if (linha4_saidas[coluna] != 1 && linha4_saidas[coluna] != 0) {

                                linha4_saidas[coluna] = 0;
                            }
                            if (linha5_saidas[coluna] != 1 && linha5_saidas[coluna] != 0) {

                                linha5_saidas[coluna] = 0;
                            }

                            coluna = coluna + 1;
                        }
                    }

                } else if (ou_passado == 3) {

                    for (var j1 = 0; j1 < n_input_ou3; j1++) {

                        var p_ou = '#eou3';
                        var j1_string = j1.toString();
                        var qual_ou = p_ou.concat(j1_string);
                        var input_value = document.querySelector(qual_ou).value;

                        var p_ou = '#nou3';
                        var qual_ou = p_ou.concat(j1_string);
                        var nivel_value = document.querySelector(qual_ou).value;

                        if (input_value == 1) {

                            linha1_entradas[coluna] = parseInt(nivel_value);

                            if (linha1_entradas[coluna] != 1 && linha1_entradas[coluna] != 0) {

                                linha1_entradas[coluna] = 0;
                            }
                            if (linha2_entradas[coluna] != 1 && linha2_entradas[coluna] != 0) {

                                linha2_entradas[coluna] = 0;
                            }
                            if (linha3_entradas[coluna] != 1 && linha3_entradas[coluna] != 0) {

                                linha3_entradas[coluna] = 0;
                            }
                            if (linha4_entradas[coluna] != 1 && linha4_entradas[coluna] != 0) {

                                linha4_entradas[coluna] = 0;
                            }
                            if (linha5_entradas[coluna] != 1 && linha5_entradas[coluna] != 0) {

                                linha5_entradas[coluna] = 100;
                            }

                            //----------------- SAIDAS -------------

                            for (var jn1 = 0; jn1 < n_output_ou3; jn1++) {

                                var p_ou = '#sou3';
                                var jn1_string = jn1.toString();
                                var qual_ou = p_ou.concat(jn1_string);
                                var input_value = document.querySelector(qual_ou).value;

                                var p_n = '#nsou3';
                                var qual_n = p_n.concat(jn1_string);
                                var nivel_value = document.querySelector(qual_n).value;

                                if (input_value == 1) {

                                    linha1_saidas[coluna] = parseInt(nivel_value);
                                } else if (input_value == 2) {

                                    linha2_saidas[coluna] = parseInt(nivel_value);
                                } else if (input_value == 3) {

                                    linha3_saidas[coluna] = parseInt(nivel_value);
                                } else if (input_value == 4) {

                                    linha4_saidas[coluna] = parseInt(nivel_value);
                                } else if (input_value == 5) {

                                    linha5_saidas[coluna] = parseInt(nivel_value);
                                }
                            }
                            if (linha1_saidas[coluna] != 1 && linha1_saidas[coluna] != 0) {

                                linha1_saidas[coluna] = 0;
                            }
                            if (linha2_saidas[coluna] != 1 && linha2_saidas[coluna] != 0) {

                                linha2_saidas[coluna] = 0;
                            }
                            if (linha3_saidas[coluna] != 1 && linha3_saidas[coluna] != 0) {

                                linha3_saidas[coluna] = 0;
                            }
                            if (linha4_saidas[coluna] != 1 && linha4_saidas[coluna] != 0) {

                                linha4_saidas[coluna] = 0;
                            }
                            if (linha5_saidas[coluna] != 1 && linha5_saidas[coluna] != 0) {

                                linha5_saidas[coluna] = 0;
                            }

                            coluna = coluna + 1;

                        } else if (input_value == 2) {

                            linha2_entradas[coluna] = parseInt(nivel_value);

                            if (linha1_entradas[coluna] != 1 && linha1_entradas[coluna] != 0) {

                                linha1_entradas[coluna] = 0;
                            }
                            if (linha2_entradas[coluna] != 1 && linha2_entradas[coluna] != 0) {

                                linha2_entradas[coluna] = 0;
                            }
                            if (linha3_entradas[coluna] != 1 && linha3_entradas[coluna] != 0) {

                                linha3_entradas[coluna] = 0;
                            }
                            if (linha4_entradas[coluna] != 1 && linha4_entradas[coluna] != 0) {

                                linha4_entradas[coluna] = 0;
                            }
                            if (linha5_entradas[coluna] != 1 && linha5_entradas[coluna] != 0) {

                                linha5_entradas[coluna] = 0;
                            }

                            //----------------- SAIDAS -------------

                            for (var jn1 = 0; jn1 < n_output_ou3; jn1++) {

                                var p_ou = '#sou3';
                                var jn1_string = jn1.toString();
                                var qual_ou = p_ou.concat(jn1_string);
                                var input_value = document.querySelector(qual_ou).value;

                                var p_n = '#nsou3';
                                var qual_n = p_n.concat(jn1_string);
                                var nivel_value = document.querySelector(qual_n).value;

                                if (input_value == 1) {

                                    linha1_saidas[coluna] = parseInt(nivel_value);
                                } else if (input_value == 2) {

                                    linha2_saidas[coluna] = parseInt(nivel_value);
                                } else if (input_value == 3) {

                                    linha3_saidas[coluna] = parseInt(nivel_value);
                                } else if (input_value == 4) {

                                    linha4_saidas[coluna] = parseInt(nivel_value);
                                } else if (input_value == 5) {

                                    linha5_saidas[coluna] = parseInt(nivel_value);
                                }
                            }
                            if (linha1_saidas[coluna] != 1 && linha1_saidas[coluna] != 0) {

                                linha1_saidas[coluna] = 0;
                            }
                            if (linha2_saidas[coluna] != 1 && linha2_saidas[coluna] != 0) {

                                linha2_saidas[coluna] = 0;
                            }
                            if (linha3_saidas[coluna] != 1 && linha3_saidas[coluna] != 0) {

                                linha3_saidas[coluna] = 0;
                            }
                            if (linha4_saidas[coluna] != 1 && linha4_saidas[coluna] != 0) {

                                linha4_saidas[coluna] = 0;
                            }
                            if (linha5_saidas[coluna] != 1 && linha5_saidas[coluna] != 0) {

                                linha5_saidas[coluna] = 0;
                            }

                            coluna = coluna + 1;

                        } else if (input_value == 3) {

                            linha3_entradas[coluna] = parseInt(nivel_value);

                            if (linha1_entradas[coluna] != 1 && linha1_entradas[coluna] != 0) {

                                linha1_entradas[coluna] = 0;
                            }
                            if (linha2_entradas[coluna] != 1 && linha2_entradas[coluna] != 0) {

                                linha2_entradas[coluna] = 0;
                            }
                            if (linha3_entradas[coluna] != 1 && linha3_entradas[coluna] != 0) {

                                linha3_entradas[coluna] = 0;
                            }
                            if (linha4_entradas[coluna] != 1 && linha4_entradas[coluna] != 0) {

                                linha4_entradas[coluna] = 0;
                            }
                            if (linha5_entradas[coluna] != 1 && linha5_entradas[coluna] != 0) {

                                linha5_entradas[coluna] = 0;
                            }

                            //----------------- SAIDAS -------------

                            for (var jn1 = 0; jn1 < n_output_ou3; jn1++) {

                                var p_ou = '#sou3';
                                var jn1_string = jn1.toString();
                                var qual_ou = p_ou.concat(jn1_string);
                                var input_value = document.querySelector(qual_ou).value;

                                var p_n = '#nsou3';
                                var qual_n = p_n.concat(jn1_string);
                                var nivel_value = document.querySelector(qual_n).value;

                                if (input_value == 1) {

                                    linha1_saidas[coluna] = parseInt(nivel_value);
                                } else if (input_value == 2) {

                                    linha2_saidas[coluna] = parseInt(nivel_value);
                                } else if (input_value == 3) {

                                    linha3_saidas[coluna] = parseInt(nivel_value);
                                } else if (input_value == 4) {

                                    linha4_saidas[coluna] = parseInt(nivel_value);
                                } else if (input_value == 5) {

                                    linha5_saidas[coluna] = parseInt(nivel_value);
                                }
                            }
                            if (linha1_saidas[coluna] != 1 && linha1_saidas[coluna] != 0) {

                                linha1_saidas[coluna] = 0;
                            }
                            if (linha2_saidas[coluna] != 1 && linha2_saidas[coluna] != 0) {

                                linha2_saidas[coluna] = 0;
                            }
                            if (linha3_saidas[coluna] != 1 && linha3_saidas[coluna] != 0) {

                                linha3_saidas[coluna] = 0;
                            }
                            if (linha4_saidas[coluna] != 1 && linha4_saidas[coluna] != 0) {

                                linha4_saidas[coluna] = 0;
                            }
                            if (linha5_saidas[coluna] != 1 && linha5_saidas[coluna] != 0) {

                                linha5_saidas[coluna] = 0;
                            }

                            coluna = coluna + 1;

                        } else if (input_value == 4) {

                            linha4_entradas[coluna] = parseInt(nivel_value);

                            if (linha1_entradas[coluna] != 1 && linha1_entradas[coluna] != 0) {

                                linha1_entradas[coluna] = 0;
                            }
                            if (linha2_entradas[coluna] != 1 && linha2_entradas[coluna] != 0) {

                                linha2_entradas[coluna] = 0;
                            }
                            if (linha3_entradas[coluna] != 1 && linha3_entradas[coluna] != 0) {

                                linha3_entradas[coluna] = 0;
                            }
                            if (linha4_entradas[coluna] != 1 && linha4_entradas[coluna] != 0) {

                                linha4_entradas[coluna] = 0;
                            }
                            if (linha5_entradas[coluna] != 1 && linha5_entradas[coluna] != 0) {

                                linha5_entradas[coluna] = 0;
                            }

                            //----------------- SAIDAS -------------

                            for (var jn1 = 0; jn1 < n_output_ou3; jn1++) {

                                var p_ou = '#sou3';
                                var jn1_string = jn1.toString();
                                var qual_ou = p_ou.concat(jn1_string);
                                var input_value = document.querySelector(qual_ou).value;

                                var p_n = '#nsou3';
                                var qual_n = p_n.concat(jn1_string);
                                var nivel_value = document.querySelector(qual_n).value;

                                if (input_value == 1) {

                                    linha1_saidas[coluna] = parseInt(nivel_value);
                                } else if (input_value == 2) {

                                    linha2_saidas[coluna] = parseInt(nivel_value);
                                } else if (input_value == 3) {

                                    linha3_saidas[coluna] = parseInt(nivel_value);
                                } else if (input_value == 4) {

                                    linha4_saidas[coluna] = parseInt(nivel_value);
                                } else if (input_value == 5) {

                                    linha5_saidas[coluna] = parseInt(nivel_value);
                                }
                            }
                            if (linha1_saidas[coluna] != 1 && linha1_saidas[coluna] != 0) {

                                linha1_saidas[coluna] = 0;
                            }
                            if (linha2_saidas[coluna] != 1 && linha2_saidas[coluna] != 0) {

                                linha2_saidas[coluna] = 0;
                            }
                            if (linha3_saidas[coluna] != 1 && linha3_saidas[coluna] != 0) {

                                linha3_saidas[coluna] = 0;
                            }
                            if (linha4_saidas[coluna] != 1 && linha4_saidas[coluna] != 0) {

                                linha4_saidas[coluna] = 0;
                            }
                            if (linha5_saidas[coluna] != 1 && linha5_saidas[coluna] != 0) {

                                linha5_saidas[coluna] = 0;
                            }

                            coluna = coluna + 1;

                        } else if (input_value == 5) {

                            linha5_entradas[coluna] = parseInt(nivel_value);

                            if (linha1_entradas[coluna] != 1 && linha1_entradas[coluna] != 0) {

                                linha1_entradas[coluna] = 0;
                            }
                            if (linha2_entradas[coluna] != 1 && linha2_entradas[coluna] != 0) {

                                linha2_entradas[coluna] = 0;
                            }
                            if (linha3_entradas[coluna] != 1 && linha3_entradas[coluna] != 0) {

                                linha3_entradas[coluna] = 0;
                            }
                            if (linha4_entradas[coluna] != 1 && linha4_entradas[coluna] != 0) {

                                linha4_entradas[coluna] = 0;
                            }
                            if (linha5_entradas[coluna] != 1 && linha5_entradas[coluna] != 0) {

                                linha5_entradas[coluna] = 0;
                            }

                            //----------------- SAIDAS -------------

                            for (var jn1 = 0; jn1 < n_output_ou3; jn1++) {

                                var p_ou = '#sou3';
                                var jn1_string = jn1.toString();
                                var qual_ou = p_ou.concat(jn1_string);
                                var input_value = document.querySelector(qual_ou).value;

                                var p_n = '#nsou3';
                                var qual_n = p_n.concat(jn1_string);
                                var nivel_value = document.querySelector(qual_n).value;

                                if (input_value == 1) {

                                    linha1_saidas[coluna] = parseInt(nivel_value);
                                } else if (input_value == 2) {

                                    linha2_saidas[coluna] = parseInt(nivel_value);
                                } else if (input_value == 3) {

                                    linha3_saidas[coluna] = parseInt(nivel_value);
                                } else if (input_value == 4) {

                                    linha4_saidas[coluna] = parseInt(nivel_value);
                                } else if (input_value == 5) {

                                    linha5_saidas[coluna] = parseInt(nivel_value);
                                }
                            }
                            if (linha1_saidas[coluna] != 1 && linha1_saidas[coluna] != 0) {

                                linha1_saidas[coluna] = 0;
                            }
                            if (linha2_saidas[coluna] != 1 && linha2_saidas[coluna] != 0) {

                                linha2_saidas[coluna] = 0;
                            }
                            if (linha3_saidas[coluna] != 1 && linha3_saidas[coluna] != 0) {

                                linha3_saidas[coluna] = 0;
                            }
                            if (linha4_saidas[coluna] != 1 && linha4_saidas[coluna] != 0) {

                                linha4_saidas[coluna] = 0;
                            }
                            if (linha5_saidas[coluna] != 1 && linha5_saidas[coluna] != 0) {

                                linha5_saidas[coluna] = 0;
                            }

                            coluna = coluna + 1;
                        }
                    }

                } else if (ou_passado == 4) {

                    for (var j1 = 0; j1 < n_input_ou4; j1++) {

                        var p_ou = '#eou4';
                        var j1_string = j1.toString();
                        var qual_ou = p_ou.concat(j1_string);
                        var input_value = document.querySelector(qual_ou).value;

                        var p_ou = '#nou4';
                        var qual_ou = p_ou.concat(j1_string);
                        var nivel_value = document.querySelector(qual_ou).value;

                        if (input_value == 1) {

                            linha1_entradas[coluna] = parseInt(nivel_value);

                            if (linha1_entradas[coluna] != 1 && linha1_entradas[coluna] != 0) {

                                linha1_entradas[coluna] = 0;
                            }
                            if (linha2_entradas[coluna] != 1 && linha2_entradas[coluna] != 0) {

                                linha2_entradas[coluna] = 0;
                            }
                            if (linha3_entradas[coluna] != 1 && linha3_entradas[coluna] != 0) {

                                linha3_entradas[coluna] = 0;
                            }
                            if (linha4_entradas[coluna] != 1 && linha4_entradas[coluna] != 0) {

                                linha4_entradas[coluna] = 0;
                            }
                            if (linha5_entradas[coluna] != 1 && linha5_entradas[coluna] != 0) {

                                linha5_entradas[coluna] = 0;
                            }

                            //----------------- SAIDAS -------------

                            for (var jn1 = 0; jn1 < n_output_ou4; jn1++) {

                                var p_ou = '#sou4';
                                var jn1_string = jn1.toString();
                                var qual_ou = p_ou.concat(jn1_string);
                                var input_value = document.querySelector(qual_ou).value;

                                var p_n = '#nsou4';
                                var qual_n = p_n.concat(jn1_string);
                                var nivel_value = document.querySelector(qual_n).value;

                                if (input_value == 1) {

                                    linha1_saidas[coluna] = parseInt(nivel_value);
                                } else if (input_value == 2) {

                                    linha2_saidas[coluna] = parseInt(nivel_value);
                                } else if (input_value == 3) {

                                    linha3_saidas[coluna] = parseInt(nivel_value);
                                } else if (input_value == 4) {

                                    linha4_saidas[coluna] = parseInt(nivel_value);
                                } else if (input_value == 5) {

                                    linha5_saidas[coluna] = parseInt(nivel_value);
                                }
                            }
                            if (linha1_saidas[coluna] != 1 && linha1_saidas[coluna] != 0) {

                                linha1_saidas[coluna] = 0;
                            }
                            if (linha2_saidas[coluna] != 1 && linha2_saidas[coluna] != 0) {

                                linha2_saidas[coluna] = 0;
                            }
                            if (linha3_saidas[coluna] != 1 && linha3_saidas[coluna] != 0) {

                                linha3_saidas[coluna] = 0;
                            }
                            if (linha4_saidas[coluna] != 1 && linha4_saidas[coluna] != 0) {

                                linha4_saidas[coluna] = 0;
                            }
                            if (linha5_saidas[coluna] != 1 && linha5_saidas[coluna] != 0) {

                                linha5_saidas[coluna] = 0;
                            }

                            coluna = coluna + 1;

                        } else if (input_value == 2) {

                            linha2_entradas[coluna] = parseInt(nivel_value);

                            if (linha1_entradas[coluna] != 1 && linha1_entradas[coluna] != 0) {

                                linha1_entradas[coluna] = 0;
                            }
                            if (linha2_entradas[coluna] != 1 && linha2_entradas[coluna] != 0) {

                                linha2_entradas[coluna] = 0;
                            }
                            if (linha3_entradas[coluna] != 1 && linha3_entradas[coluna] != 0) {

                                linha3_entradas[coluna] = 0;
                            }
                            if (linha4_entradas[coluna] != 1 && linha4_entradas[coluna] != 0) {

                                linha4_entradas[coluna] = 0;
                            }
                            if (linha5_entradas[coluna] != 1 && linha5_entradas[coluna] != 0) {

                                linha5_entradas[coluna] = 0;
                            }

                            //----------------- SAIDAS -------------

                            for (var jn1 = 0; jn1 < n_output_ou4; jn1++) {

                                var p_ou = '#sou4';
                                var jn1_string = jn1.toString();
                                var qual_ou = p_ou.concat(jn1_string);
                                var input_value = document.querySelector(qual_ou).value;

                                var p_n = '#nsou4';
                                var qual_n = p_n.concat(jn1_string);
                                var nivel_value = document.querySelector(qual_n).value;

                                if (input_value == 1) {

                                    linha1_saidas[coluna] = parseInt(nivel_value);
                                } else if (input_value == 2) {

                                    linha2_saidas[coluna] = parseInt(nivel_value);
                                } else if (input_value == 3) {

                                    linha3_saidas[coluna] = parseInt(nivel_value);
                                } else if (input_value == 4) {

                                    linha4_saidas[coluna] = parseInt(nivel_value);
                                } else if (input_value == 5) {

                                    linha5_saidas[coluna] = parseInt(nivel_value);
                                }
                            }
                            if (linha1_saidas[coluna] != 1 && linha1_saidas[coluna] != 0) {

                                linha1_saidas[coluna] = 0;
                            }
                            if (linha2_saidas[coluna] != 1 && linha2_saidas[coluna] != 0) {

                                linha2_saidas[coluna] = 0;
                            }
                            if (linha3_saidas[coluna] != 1 && linha3_saidas[coluna] != 0) {

                                linha3_saidas[coluna] = 0;
                            }
                            if (linha4_saidas[coluna] != 1 && linha4_saidas[coluna] != 0) {

                                linha4_saidas[coluna] = 0;
                            }
                            if (linha5_saidas[coluna] != 1 && linha5_saidas[coluna] != 0) {

                                linha5_saidas[coluna] = 0;
                            }

                            coluna = coluna + 1;

                        } else if (input_value == 3) {

                            linha3_entradas[coluna] = parseInt(nivel_value);

                            if (linha1_entradas[coluna] != 1 && linha1_entradas[coluna] != 0) {

                                linha1_entradas[coluna] = 0;
                            }
                            if (linha2_entradas[coluna] != 1 && linha2_entradas[coluna] != 0) {

                                linha2_entradas[coluna] = 0;
                            }
                            if (linha3_entradas[coluna] != 1 && linha3_entradas[coluna] != 0) {

                                linha3_entradas[coluna] = 0;
                            }
                            if (linha4_entradas[coluna] != 1 && linha4_entradas[coluna] != 0) {

                                linha4_entradas[coluna] = 0;
                            }
                            if (linha5_entradas[coluna] != 1 && linha5_entradas[coluna] != 0) {

                                linha5_entradas[coluna] = 0;
                            }

                            //----------------- SAIDAS -------------

                            for (var jn1 = 0; jn1 < n_output_ou4; jn1++) {

                                var p_ou = '#sou4';
                                var jn1_string = jn1.toString();
                                var qual_ou = p_ou.concat(jn1_string);
                                var input_value = document.querySelector(qual_ou).value;

                                var p_n = '#nsou4';
                                var qual_n = p_n.concat(jn1_string);
                                var nivel_value = document.querySelector(qual_n).value;

                                if (input_value == 1) {

                                    linha1_saidas[coluna] = parseInt(nivel_value);
                                } else if (input_value == 2) {

                                    linha2_saidas[coluna] = parseInt(nivel_value);
                                } else if (input_value == 3) {

                                    linha3_saidas[coluna] = parseInt(nivel_value);
                                } else if (input_value == 4) {

                                    linha4_saidas[coluna] = parseInt(nivel_value);
                                } else if (input_value == 5) {

                                    linha5_saidas[coluna] = parseInt(nivel_value);
                                }
                            }
                            if (linha1_saidas[coluna] != 1 && linha1_saidas[coluna] != 0) {

                                linha1_saidas[coluna] = 0;
                            }
                            if (linha2_saidas[coluna] != 1 && linha2_saidas[coluna] != 0) {

                                linha2_saidas[coluna] = 0;
                            }
                            if (linha3_saidas[coluna] != 1 && linha3_saidas[coluna] != 0) {

                                linha3_saidas[coluna] = 0;
                            }
                            if (linha4_saidas[coluna] != 1 && linha4_saidas[coluna] != 0) {

                                linha4_saidas[coluna] = 0;
                            }
                            if (linha5_saidas[coluna] != 1 && linha5_saidas[coluna] != 0) {

                                linha5_saidas[coluna] = 0;
                            }

                            coluna = coluna + 1;

                        } else if (input_value == 4) {

                            linha4_entradas[coluna] = parseInt(nivel_value);

                            if (linha1_entradas[coluna] != 1 && linha1_entradas[coluna] != 0) {

                                linha1_entradas[coluna] = 0;
                            }
                            if (linha2_entradas[coluna] != 1 && linha2_entradas[coluna] != 0) {

                                linha2_entradas[coluna] = 0;
                            }
                            if (linha3_entradas[coluna] != 1 && linha3_entradas[coluna] != 0) {

                                linha3_entradas[coluna] = 0;
                            }
                            if (linha4_entradas[coluna] != 1 && linha4_entradas[coluna] != 0) {

                                linha4_entradas[coluna] = 0;
                            }
                            if (linha5_entradas[coluna] != 1 && linha5_entradas[coluna] != 0) {

                                linha5_entradas[coluna] = 0;
                            }

                            //----------------- SAIDAS -------------

                            for (var jn1 = 0; jn1 < n_output_ou4; jn1++) {

                                var p_ou = '#sou4';
                                var jn1_string = jn1.toString();
                                var qual_ou = p_ou.concat(jn1_string);
                                var input_value = document.querySelector(qual_ou).value;

                                var p_n = '#nsou4';
                                var qual_n = p_n.concat(jn1_string);
                                var nivel_value = document.querySelector(qual_n).value;

                                if (input_value == 1) {

                                    linha1_saidas[coluna] = parseInt(nivel_value);
                                } else if (input_value == 2) {

                                    linha2_saidas[coluna] = parseInt(nivel_value);
                                } else if (input_value == 3) {

                                    linha3_saidas[coluna] = parseInt(nivel_value);
                                } else if (input_value == 4) {

                                    linha4_saidas[coluna] = parseInt(nivel_value);
                                } else if (input_value == 5) {

                                    linha5_saidas[coluna] = parseInt(nivel_value);
                                }
                            }
                            if (linha1_saidas[coluna] != 1 && linha1_saidas[coluna] != 0) {

                                linha1_saidas[coluna] = 0;
                            }
                            if (linha2_saidas[coluna] != 1 && linha2_saidas[coluna] != 0) {

                                linha2_saidas[coluna] = 0;
                            }
                            if (linha3_saidas[coluna] != 1 && linha3_saidas[coluna] != 0) {

                                linha3_saidas[coluna] = 0;
                            }
                            if (linha4_saidas[coluna] != 1 && linha4_saidas[coluna] != 0) {

                                linha4_saidas[coluna] = 0;
                            }
                            if (linha5_saidas[coluna] != 1 && linha5_saidas[coluna] != 0) {

                                linha5_saidas[coluna] = 0;
                            }

                            coluna = coluna + 1;

                        } else if (input_value == 5) {

                            linha5_entradas[coluna] = parseInt(nivel_value);

                            if (linha1_entradas[coluna] != 1 && linha1_entradas[coluna] != 0) {

                                linha1_entradas[coluna] = 0;
                            }
                            if (linha2_entradas[coluna] != 1 && linha2_entradas[coluna] != 0) {

                                linha2_entradas[coluna] = 0;
                            }
                            if (linha3_entradas[coluna] != 1 && linha3_entradas[coluna] != 0) {

                                linha3_entradas[coluna] = 0;
                            }
                            if (linha4_entradas[coluna] != 1 && linha4_entradas[coluna] != 0) {

                                linha4_entradas[coluna] = 0;
                            }
                            if (linha5_entradas[coluna] != 1 && linha5_entradas[coluna] != 0) {

                                linha5_entradas[coluna] = 0;
                            }

                            //----------------- SAIDAS -------------

                            for (var jn1 = 0; jn1 < n_output_ou4; jn1++) {

                                var p_ou = '#sou4';
                                var jn1_string = jn1.toString();
                                var qual_ou = p_ou.concat(jn1_string);
                                var input_value = document.querySelector(qual_ou).value;

                                var p_n = '#nsou4';
                                var qual_n = p_n.concat(jn1_string);
                                var nivel_value = document.querySelector(qual_n).value;

                                if (input_value == 1) {

                                    linha1_saidas[coluna] = parseInt(nivel_value);
                                } else if (input_value == 2) {

                                    linha2_saidas[coluna] = parseInt(nivel_value);
                                } else if (input_value == 3) {

                                    linha3_saidas[coluna] = parseInt(nivel_value);
                                } else if (input_value == 4) {

                                    linha4_saidas[coluna] = parseInt(nivel_value);
                                } else if (input_value == 5) {

                                    linha5_saidas[coluna] = parseInt(nivel_value);
                                }
                            }
                            if (linha1_saidas[coluna] != 1 && linha1_saidas[coluna] != 0) {

                                linha1_saidas[coluna] = 0;
                            }
                            if (linha2_saidas[coluna] != 1 && linha2_saidas[coluna] != 0) {

                                linha2_saidas[coluna] = 0;
                            }
                            if (linha3_saidas[coluna] != 1 && linha3_saidas[coluna] != 0) {

                                linha3_saidas[coluna] = 0;
                            }
                            if (linha4_saidas[coluna] != 1 && linha4_saidas[coluna] != 0) {

                                linha4_saidas[coluna] = 0;
                            }
                            if (linha5_saidas[coluna] != 1 && linha5_saidas[coluna] != 0) {

                                linha5_saidas[coluna] = 0;
                            }

                            coluna = coluna + 1;
                        }
                    }

                } else if (ou_passado == 5) {

                    for (var j1 = 0; j1 < n_input_ou5; j1++) {

                        var p_ou = '#eou5';
                        var j1_string = j1.toString();
                        var qual_ou = p_ou.concat(j1_string);
                        var input_value = document.querySelector(qual_ou).value;

                        var p_ou = '#nou5';
                        var qual_ou = p_ou.concat(j1_string);
                        var nivel_value = document.querySelector(qual_ou).value;

                        if (input_value == 1) {

                            linha1_entradas[coluna] = parseInt(nivel_value);

                            if (linha1_entradas[coluna] != 1 && linha1_entradas[coluna] != 0) {

                                linha1_entradas[coluna] = 0;
                            }
                            if (linha2_entradas[coluna] != 1 && linha2_entradas[coluna] != 0) {

                                linha2_entradas[coluna] = 0;
                            }
                            if (linha3_entradas[coluna] != 1 && linha3_entradas[coluna] != 0) {

                                linha3_entradas[coluna] = 0;
                            }
                            if (linha4_entradas[coluna] != 1 && linha4_entradas[coluna] != 0) {

                                linha4_entradas[coluna] = 0;
                            }
                            if (linha5_entradas[coluna] != 1 && linha5_entradas[coluna] != 0) {

                                linha5_entradas[coluna] = 0;
                            }

                            //----------------- SAIDAS -------------

                            for (var jn1 = 0; jn1 < n_output_ou5; jn1++) {

                                var p_ou = '#sou5';
                                var jn1_string = jn1.toString();
                                var qual_ou = p_ou.concat(jn1_string);
                                var input_value = document.querySelector(qual_ou).value;

                                var p_n = '#nsou5';
                                var qual_n = p_n.concat(jn1_string);
                                var nivel_value = document.querySelector(qual_n).value;

                                if (input_value == 1) {

                                    linha1_saidas[coluna] = parseInt(nivel_value);
                                } else if (input_value == 2) {

                                    linha2_saidas[coluna] = parseInt(nivel_value);
                                } else if (input_value == 3) {

                                    linha3_saidas[coluna] = parseInt(nivel_value);
                                } else if (input_value == 4) {

                                    linha4_saidas[coluna] = parseInt(nivel_value);
                                } else if (input_value == 5) {

                                    linha5_saidas[coluna] = parseInt(nivel_value);
                                }
                            }
                            if (linha1_saidas[coluna] != 1 && linha1_saidas[coluna] != 0) {

                                linha1_saidas[coluna] = 0;
                            }
                            if (linha2_saidas[coluna] != 1 && linha2_saidas[coluna] != 0) {

                                linha2_saidas[coluna] = 0;
                            }
                            if (linha3_saidas[coluna] != 1 && linha3_saidas[coluna] != 0) {

                                linha3_saidas[coluna] = 0;
                            }
                            if (linha4_saidas[coluna] != 1 && linha4_saidas[coluna] != 0) {

                                linha4_saidas[coluna] = 0;
                            }
                            if (linha5_saidas[coluna] != 1 && linha5_saidas[coluna] != 0) {

                                linha5_saidas[coluna] = 0;
                            }

                            coluna = coluna + 1;

                        } else if (input_value == 2) {

                            linha2_entradas[coluna] = parseInt(nivel_value);

                            if (linha1_entradas[coluna] != 1 && linha1_entradas[coluna] != 0) {

                                linha1_entradas[coluna] = 0;
                            }
                            if (linha2_entradas[coluna] != 1 && linha2_entradas[coluna] != 0) {

                                linha2_entradas[coluna] = 0;
                            }
                            if (linha3_entradas[coluna] != 1 && linha3_entradas[coluna] != 0) {

                                linha3_entradas[coluna] = 0;
                            }
                            if (linha4_entradas[coluna] != 1 && linha4_entradas[coluna] != 0) {

                                linha4_entradas[coluna] = 0;
                            }
                            if (linha5_entradas[coluna] != 1 && linha5_entradas[coluna] != 0) {

                                linha5_entradas[coluna] = 0;
                            }

                            //----------------- SAIDAS -------------

                            for (var jn1 = 0; jn1 < n_output_ou5; jn1++) {

                                var p_ou = '#sou5';
                                var jn1_string = jn1.toString();
                                var qual_ou = p_ou.concat(jn1_string);
                                var input_value = document.querySelector(qual_ou).value;

                                var p_n = '#nsou5';
                                var qual_n = p_n.concat(jn1_string);
                                var nivel_value = document.querySelector(qual_n).value;

                                if (input_value == 1) {

                                    linha1_saidas[coluna] = parseInt(nivel_value);
                                } else if (input_value == 2) {

                                    linha2_saidas[coluna] = parseInt(nivel_value);
                                } else if (input_value == 3) {

                                    linha3_saidas[coluna] = parseInt(nivel_value);
                                } else if (input_value == 4) {

                                    linha4_saidas[coluna] = parseInt(nivel_value);
                                } else if (input_value == 5) {

                                    linha5_saidas[coluna] = parseInt(nivel_value);
                                }
                            }
                            if (linha1_saidas[coluna] != 1 && linha1_saidas[coluna] != 0) {

                                linha1_saidas[coluna] = 0;
                            }
                            if (linha2_saidas[coluna] != 1 && linha2_saidas[coluna] != 0) {

                                linha2_saidas[coluna] = 0;
                            }
                            if (linha3_saidas[coluna] != 1 && linha3_saidas[coluna] != 0) {

                                linha3_saidas[coluna] = 0;
                            }
                            if (linha4_saidas[coluna] != 1 && linha4_saidas[coluna] != 0) {

                                linha4_saidas[coluna] = 0;
                            }
                            if (linha5_saidas[coluna] != 1 && linha5_saidas[coluna] != 0) {

                                linha5_saidas[coluna] = 0;
                            }

                            coluna = coluna + 1;

                        } else if (input_value == 3) {

                            linha3_entradas[coluna] = parseInt(nivel_value);

                            if (linha1_entradas[coluna] != 1 && linha1_entradas[coluna] != 0) {

                                linha1_entradas[coluna] = 0;
                            }
                            if (linha2_entradas[coluna] != 1 && linha2_entradas[coluna] != 0) {

                                linha2_entradas[coluna] = 0;
                            }
                            if (linha3_entradas[coluna] != 1 && linha3_entradas[coluna] != 0) {

                                linha3_entradas[coluna] = 0;
                            }
                            if (linha4_entradas[coluna] != 1 && linha4_entradas[coluna] != 0) {

                                linha4_entradas[coluna] = 0;
                            }
                            if (linha5_entradas[coluna] != 1 && linha5_entradas[coluna] != 0) {

                                linha5_entradas[coluna] = 0;
                            }

                            //----------------- SAIDAS -------------

                            for (var jn1 = 0; jn1 < n_output_ou5; jn1++) {

                                var p_ou = '#sou5';
                                var jn1_string = jn1.toString();
                                var qual_ou = p_ou.concat(jn1_string);
                                var input_value = document.querySelector(qual_ou).value;

                                var p_n = '#nsou5';
                                var qual_n = p_n.concat(jn1_string);
                                var nivel_value = document.querySelector(qual_n).value;

                                if (input_value == 1) {

                                    linha1_saidas[coluna] = parseInt(nivel_value);
                                } else if (input_value == 2) {

                                    linha2_saidas[coluna] = parseInt(nivel_value);
                                } else if (input_value == 3) {

                                    linha3_saidas[coluna] = parseInt(nivel_value);
                                } else if (input_value == 4) {

                                    linha4_saidas[coluna] = parseInt(nivel_value);
                                } else if (input_value == 5) {

                                    linha5_saidas[coluna] = parseInt(nivel_value);
                                }
                            }
                            if (linha1_saidas[coluna] != 1 && linha1_saidas[coluna] != 0) {

                                linha1_saidas[coluna] = 0;
                            }
                            if (linha2_saidas[coluna] != 1 && linha2_saidas[coluna] != 0) {

                                linha2_saidas[coluna] = 0;
                            }
                            if (linha3_saidas[coluna] != 1 && linha3_saidas[coluna] != 0) {

                                linha3_saidas[coluna] = 0;
                            }
                            if (linha4_saidas[coluna] != 1 && linha4_saidas[coluna] != 0) {

                                linha4_saidas[coluna] = 0;
                            }
                            if (linha5_saidas[coluna] != 1 && linha5_saidas[coluna] != 0) {

                                linha5_saidas[coluna] = 0;
                            }

                            coluna = coluna + 1;

                        } else if (input_value == 4) {

                            linha4_entradas[coluna] = parseInt(nivel_value);

                            if (linha1_entradas[coluna] != 1 && linha1_entradas[coluna] != 0) {

                                linha1_entradas[coluna] = 0;
                            }
                            if (linha2_entradas[coluna] != 1 && linha2_entradas[coluna] != 0) {

                                linha2_entradas[coluna] = 0;
                            }
                            if (linha3_entradas[coluna] != 1 && linha3_entradas[coluna] != 0) {

                                linha3_entradas[coluna] = 0;
                            }
                            if (linha4_entradas[coluna] != 1 && linha4_entradas[coluna] != 0) {

                                linha4_entradas[coluna] = 0;
                            }
                            if (linha5_entradas[coluna] != 1 && linha5_entradas[coluna] != 0) {

                                linha5_entradas[coluna] = 0;
                            }

                            //----------------- SAIDAS -------------

                            for (var jn1 = 0; jn1 < n_output_ou5; jn1++) {

                                var p_ou = '#sou5';
                                var jn1_string = jn1.toString();
                                var qual_ou = p_ou.concat(jn1_string);
                                var input_value = document.querySelector(qual_ou).value;

                                var p_n = '#nsou5';
                                var qual_n = p_n.concat(jn1_string);
                                var nivel_value = document.querySelector(qual_n).value;

                                if (input_value == 1) {

                                    linha1_saidas[coluna] = parseInt(nivel_value);
                                } else if (input_value == 2) {

                                    linha2_saidas[coluna] = parseInt(nivel_value);
                                } else if (input_value == 3) {

                                    linha3_saidas[coluna] = parseInt(nivel_value);
                                } else if (input_value == 4) {

                                    linha4_saidas[coluna] = parseInt(nivel_value);
                                } else if (input_value == 5) {

                                    linha5_saidas[coluna] = parseInt(nivel_value);
                                }
                            }
                            if (linha1_saidas[coluna] != 1 && linha1_saidas[coluna] != 0) {

                                linha1_saidas[coluna] = 0;
                            }
                            if (linha2_saidas[coluna] != 1 && linha2_saidas[coluna] != 0) {

                                linha2_saidas[coluna] = 0;
                            }
                            if (linha3_saidas[coluna] != 1 && linha3_saidas[coluna] != 0) {

                                linha3_saidas[coluna] = 0;
                            }
                            if (linha4_saidas[coluna] != 1 && linha4_saidas[coluna] != 0) {

                                linha4_saidas[coluna] = 0;
                            }
                            if (linha5_saidas[coluna] != 1 && linha5_saidas[coluna] != 0) {

                                linha5_saidas[coluna] = 0;
                            }

                            coluna = coluna + 1;

                        } else if (input_value == 5) {

                            linha5_entradas[coluna] = parseInt(nivel_value);

                            if (linha1_entradas[coluna] != 1 && linha1_entradas[coluna] != 0) {

                                linha1_entradas[coluna] = 0;
                            }
                            if (linha2_entradas[coluna] != 1 && linha2_entradas[coluna] != 0) {

                                linha2_entradas[coluna] = 0;
                            }
                            if (linha3_entradas[coluna] != 1 && linha3_entradas[coluna] != 0) {

                                linha3_entradas[coluna] = 0;
                            }
                            if (linha4_entradas[coluna] != 1 && linha4_entradas[coluna] != 0) {

                                linha4_entradas[coluna] = 0;
                            }
                            if (linha5_entradas[coluna] != 1 && linha5_entradas[coluna] != 0) {

                                linha5_entradas[coluna] = 0;
                            }

                            //----------------- SAIDAS -------------

                            for (var jn1 = 0; jn1 < n_output_ou5; jn1++) {

                                var p_ou = '#sou5';
                                var jn1_string = jn1.toString();
                                var qual_ou = p_ou.concat(jn1_string);
                                var input_value = document.querySelector(qual_ou).value;

                                var p_n = '#nsou5';
                                var qual_n = p_n.concat(jn1_string);
                                var nivel_value = document.querySelector(qual_n).value;

                                if (input_value == 1) {

                                    linha1_saidas[coluna] = parseInt(nivel_value);
                                } else if (input_value == 2) {

                                    linha2_saidas[coluna] = parseInt(nivel_value);
                                } else if (input_value == 3) {

                                    linha3_saidas[coluna] = parseInt(nivel_value);
                                } else if (input_value == 4) {

                                    linha4_saidas[coluna] = parseInt(nivel_value);
                                } else if (input_value == 5) {

                                    linha5_saidas[coluna] = parseInt(nivel_value);
                                }
                            }
                            if (linha1_saidas[coluna] != 1 && linha1_saidas[coluna] != 0) {

                                linha1_saidas[coluna] = 0;
                            }
                            if (linha2_saidas[coluna] != 1 && linha2_saidas[coluna] != 0) {

                                linha2_saidas[coluna] = 0;
                            }
                            if (linha3_saidas[coluna] != 1 && linha3_saidas[coluna] != 0) {

                                linha3_saidas[coluna] = 0;
                            }
                            if (linha4_saidas[coluna] != 1 && linha4_saidas[coluna] != 0) {

                                linha4_saidas[coluna] = 0;
                            }
                            if (linha5_saidas[coluna] != 1 && linha5_saidas[coluna] != 0) {

                                linha5_saidas[coluna] = 0;
                            }
                            coluna = coluna + 1;
                        }
                    }
                }

            } else if (ordem_limpa[i] == "c") {

                c_passado = c_passado + 1;

            } else if (ordem_limpa[i] == "t") {

                t_passado = t_passado + 1;
            }
        }

        console.log(linha1_entradas);
        console.log(linha2_entradas);
        console.log(linha3_entradas);
        console.log(linha4_entradas);
        console.log(linha5_entradas);

        console.log(linha1_saidas);
        console.log(linha2_saidas);
        console.log(linha3_saidas);
        console.log(linha4_saidas);
        console.log(linha5_saidas);

        var ncolunas = linha1_entradas.length;

        var num_atalhos_ver;

        var pegar_num_atalhos = firebase.database().ref().child('FIRMWARE').child('PERSONALIZADO').child('NÚMERO');

        pegar_num_atalhos.get().then((snapshot) => {

            num_atalhos_ver = snapshot.val();

            num_atalhos_ver_string = (num_atalhos_ver + 1).toString();

            firebase.database().ref().child('FIRMWARE').child('PERSONALIZADO').child('ATALHO_' + num_atalhos_ver_string).child('CÓDIGO').set(parseInt(codigo_atalho));
            firebase.database().ref().child('FIRMWARE').child('PERSONALIZADO').child('ATALHO_' + num_atalhos_ver_string).child('COLUNAS').set(ncolunas);
            firebase.database().ref().child('FIRMWARE').child('PERSONALIZADO').child('NÚMERO').set(num_atalhos_ver + 1);

            firebase.database().ref().child('FIRMWARE').child('PERSONALIZADO').child('ATALHO_' + num_atalhos_ver_string).child('ENTRADAS').child('0').set(linha1_entradas);
            firebase.database().ref().child('FIRMWARE').child('PERSONALIZADO').child('ATALHO_' + num_atalhos_ver_string).child('ENTRADAS').child('1').set(linha2_entradas);
            firebase.database().ref().child('FIRMWARE').child('PERSONALIZADO').child('ATALHO_' + num_atalhos_ver_string).child('ENTRADAS').child('2').set(linha3_entradas);
            firebase.database().ref().child('FIRMWARE').child('PERSONALIZADO').child('ATALHO_' + num_atalhos_ver_string).child('ENTRADAS').child('3').set(linha4_entradas);
            firebase.database().ref().child('FIRMWARE').child('PERSONALIZADO').child('ATALHO_' + num_atalhos_ver_string).child('ENTRADAS').child('4').set(linha5_entradas);

            firebase.database().ref().child('FIRMWARE').child('PERSONALIZADO').child('ATALHO_' + num_atalhos_ver_string).child('SAIDAS').child('0').set(linha1_saidas);
            firebase.database().ref().child('FIRMWARE').child('PERSONALIZADO').child('ATALHO_' + num_atalhos_ver_string).child('SAIDAS').child('1').set(linha2_saidas);
            firebase.database().ref().child('FIRMWARE').child('PERSONALIZADO').child('ATALHO_' + num_atalhos_ver_string).child('SAIDAS').child('2').set(linha3_saidas);
            firebase.database().ref().child('FIRMWARE').child('PERSONALIZADO').child('ATALHO_' + num_atalhos_ver_string).child('SAIDAS').child('3').set(linha4_saidas);
            firebase.database().ref().child('FIRMWARE').child('PERSONALIZADO').child('ATALHO_' + num_atalhos_ver_string).child('SAIDAS').child('4').set(linha5_saidas);

            verificar_atalhos();
            resetar();

            alert('Exercício personalizado com sucesso!');

        })
    }
})
//-------------------------- FIM PERSONALIZADO ------------------------------------------

//-------------------------- GERAR RELATÓRIO --------------------------------------------

var gerar = document.querySelector('#gerar');
var pegar_hist = document.querySelector('.mostrarhist').innerHTML;

gerar.addEventListener("click", function () {

    var janela = window.open('', '', 'width = 800, height = 600');

    var style = "<style>";
    style = style + ".mostrarhist {border: 1px solid #054f77;}";
    // style = style + ".valhist {text-align: center;}";
    style = style + ".divisao {text-align: center;}";
    // style = style + ".aluno {text-align: center;}";
    style = style + ".histtitle {text-align: center;}";
    style = style + "</style>";

    janela.document.write('<html><head>');
    janela.document.write('<title></title>');
    janela.document.write(style);
    janela.document.write('</head>');
    janela.document.write('<body>');
    janela.document.write(pegar_hist);

    for (var i = 0; i < historico.length; i++) {

        janela.document.write(historico[i].textContent);
        janela.document.write('<p></p>');

    }
    // janela.document.write('<p style = 'text-align: center'>----------------------</p>');
    janela.document.write('</body></html>');
    janela.document.close();
    janela.print();

})

//---------------------------- FIM RELATÓRIO --------------------------------------------

//---------------------------- NAV RESPONSIVO ------------------------------------------

var btn_mobile = document.querySelector('#btn-mobile');

function toggleMenu(event) {

    if (event.type === 'touchstart') event.preventDefault();

    nav = document.querySelector("#nav");
    document.querySelector('#menu').style.display = "block";

    nav.classList.toggle('active');
}

btn_mobile.addEventListener("click", toggleMenu);
btn_mobile.addEventListener("touchstart", toggleMenu);

//-------------- FIM NAV RESPONSIVO ----------------------------------------------------
//-------------- SIDE RESPONSIVO ---------------------------------

var side = document.querySelector('#side');

function toggleSIDE(event) {

    if (event.type === 'touchstart') event.preventDefault();

    sidebar = document.querySelector("#main");
    header = document.querySelector("#header");

    sidebar.classList.toggle('ativado');
    header.classList.toggle('ativado');
}
side.addEventListener("click", toggleSIDE);
side.addEventListener("touchstart", toggleSIDE);


//------------- FIM SIDE RESPONSIVO ----------------------------

//------------- ATUALIZAR FIRMWARE ----------------------------

var controle_att = 0;
var atualizar = document.querySelector('.atualizar');

atualizar.addEventListener("click", function () {

    if (controle_att == 0) {

        document.querySelector('.att').style.display = 'flex';
        controle_att = 1;

    } else if (controle_att == 1) {

        document.querySelector('.att').style.display = 'none';
        controle_att = 0;

    }
})

var arquivo;
var progresso = 0;

inputfile = document.querySelector('.firmware');

inputfile.addEventListener('change', (e) => {

    arquivo = e.target.files[0];
    console.log(arquivo);

});

var enviar = document.querySelector('.enviar');

enviar.addEventListener("click", function () {


    const upload = firebase.storage().ref().child('FIRMWARE_NOVO').put(arquivo);
    const pegarurl = firebase.storage().ref().child('FIRMWARE_NOVO');


    upload.on("state_changed", function (snapshot) {

        progresso = progresso + 1;

        if (progresso == 2) {

            pegarurl.getDownloadURL().then(url => {

                var arquivo = {

                    link: url
                };

                firebase.database().ref().child('FIRMWARE').child('FIRMWARE_NOVO').set(arquivo);
            });

            alert('Enviado com sucesso!');
            progresso = 0;
        }

    }, function (error) {

        alert('Houve algum erro! Tente novamente!')
    });
})

var resetarfirm = document.querySelector('.resetar');

resetarfirm.addEventListener("click", function () {

    alert('Uma simulação da atualização será feita, para que você possa experimentar a funcionalidade mesmo sem ter um exemplar do produto!');
    alert('FIRMWARE resetado com sucesso!');

})
//--------------- FIM ATUALIZAR -------------------------------