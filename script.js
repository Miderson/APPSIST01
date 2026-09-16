const SENHA_CORRETA = "REVI01";
const TOTAL_QUESTOES = 10;

let nomeAluno = "";
let questoesSelecionadas = [];
let respostasAluno = [];
let questaoAtual = 0;


/* =========================================================
   BANCO DE 50 QUESTÕES
========================================================= */

const bancoQuestoes = [

{
    enunciado: "Uma empresa de hospedagem utiliza C(x) = 120 + 8x. Quais são, respectivamente, o coeficiente angular e o coeficiente linear?",
    alternativas: ["120 e 8", "8 e 120", "-8 e 120", "8 e 0"],
    correta: 1
},

{
    enunciado: "O espaço livre de um servidor é E(t) = 600 - 25t. Como essa função deve ser classificada?",
    alternativas: ["Crescente", "Constante", "Decrescente", "Quadrática"],
    correta: 2
},

{
    enunciado: "Para E(t) = 600 - 25t, quanto espaço estará disponível após 8 dias?",
    alternativas: ["300 GB", "400 GB", "425 GB", "500 GB"],
    correta: 1
},

{
    enunciado: "Um serviço em nuvem possui custo A(x) = 200 + 5x. Qual é o custo para x = 40?",
    alternativas: ["R$ 300", "R$ 350", "R$ 400", "R$ 450"],
    correta: 2
},

{
    enunciado: "O Prof. Miderson apresentou aos alunos dois planos: A(x)=300+4x e B(x)=500+2x. Para qual valor de x os custos são iguais?",
    alternativas: ["50", "75", "100", "200"],
    correta: 2
},

{
    enunciado: "Uma plataforma processa R(x)=60x requisições por minuto. Quantas requisições são processadas com 25 unidades?",
    alternativas: ["1.200", "1.500", "1.800", "2.500"],
    correta: 1
},

{
    enunciado: "Na função F(x) = -3x + 24, o coeficiente angular é:",
    alternativas: ["24", "3", "-3", "-24"],
    correta: 2
},

{
    enunciado: "A função F(x)=-3x+24 é:",
    alternativas: ["Crescente", "Decrescente", "Constante", "Sem coeficiente linear"],
    correta: 1
},

{
    enunciado: "Uma aplicação começa com 100 usuários e recebe 20 novos usuários por dia. Qual função representa essa situação?",
    alternativas: [
        "U(t)=100t+20",
        "U(t)=20t+100",
        "U(t)=100-20t",
        "U(t)=20t"
    ],
    correta: 1
},

{
    enunciado: "O custo de um banco de dados é C(x)=150x+900. O número 900 representa:",
    alternativas: [
        "Custo variável",
        "Quantidade de usuários",
        "Custo inicial ou fixo",
        "Taxa de redução"
    ],
    correta: 2
},

/* 11 */

{
    enunciado: "Um sistema gera P(x)=2x tarefas e cada tarefa consome C(p)=5p unidades. Qual é C(P(x))?",
    alternativas: ["7x", "10x", "5x+2", "10+x"],
    correta: 1
},

{
    enunciado: "Se P(x)=3x+2 e C(p)=4p+10, determine C(P(x)).",
    alternativas: [
        "12x+18",
        "7x+12",
        "12x+12",
        "12x+8"
    ],
    correta: 0
},

{
    enunciado: "Uma plataforma utiliza P(x)=2x+10 e C(p)=30p+200. Qual é C(P(x))?",
    alternativas: [
        "60x+500",
        "60x+300",
        "32x+210",
        "60x+200"
    ],
    correta: 0
},

{
    enunciado: "Para P(x)=2x e C(p)=5p, qual é o valor de C(P(8))?",
    alternativas: ["40", "60", "80", "100"],
    correta: 2
},

{
    enunciado: "Na aula do Prof. Miderson, P transforma arquivos em unidades computacionais e C transforma unidades em custo. A expressão C(P(x)) representa:",
    alternativas: [
        "Arquivos em função do custo",
        "Custo diretamente em função dos arquivos",
        "Somente unidades computacionais",
        "A inversa da função custo"
    ],
    correta: 1
},

/* INVERSAS */

{
    enunciado: "Qual é a inversa de f(x)=2x+6?",
    alternativas: [
        "(x-6)/2",
        "(x+6)/2",
        "2x-6",
        "x/2+6"
    ],
    correta: 0
},

{
    enunciado: "Qual é a inversa de g(x)=5x-10?",
    alternativas: [
        "(x-10)/5",
        "(x+10)/5",
        "5x+10",
        "x/5-10"
    ],
    correta: 1
},

{
    enunciado: "Um servidor possui capacidade R(x)=50x. Quantas unidades são necessárias para 4.000 requisições por minuto?",
    alternativas: ["40", "50", "80", "100"],
    correta: 2
},

{
    enunciado: "Se T(x)=4x+20 e o tempo observado foi 100 segundos, qual é o valor de x?",
    alternativas: ["15", "20", "25", "30"],
    correta: 1
},

{
    enunciado: "A função inversa é utilizada principalmente para:",
    alternativas: [
        "Reverter a relação entre entrada e saída",
        "Transformar toda função em quadrática",
        "Eliminar o coeficiente angular",
        "Encontrar somente o vértice"
    ],
    correta: 0
},

/* QUADRÁTICAS */

{
    enunciado: "Quais são as raízes de f(x)=x²-8x+12?",
    alternativas: [
        "2 e 6",
        "3 e 4",
        "-2 e -6",
        "1 e 12"
    ],
    correta: 0
},

{
    enunciado: "Na função f(x)=x²-8x+12, a concavidade está:",
    alternativas: [
        "Voltada para baixo",
        "Voltada para cima",
        "Não existe",
        "Voltada para a esquerda"
    ],
    correta: 1
},

{
    enunciado: "Qual é o x do vértice de f(x)=x²-8x+12?",
    alternativas: ["2", "4", "6", "8"],
    correta: 1
},

{
    enunciado: "A função f(x)=-x²+10x-16 possui:",
    alternativas: [
        "Valor máximo",
        "Valor mínimo",
        "Nenhum vértice",
        "Coeficiente a positivo"
    ],
    correta: 0
},

{
    enunciado: "O desempenho de um servidor é D(x)=-2x²+16x-24. Quais são suas raízes?",
    alternativas: [
        "1 e 8",
        "2 e 6",
        "3 e 4",
        "-2 e -6"
    ],
    correta: 1
},

{
    enunciado: "Para D(x)=-2x²+16x-24, em qual valor de x ocorre o vértice?",
    alternativas: ["2", "4", "6", "8"],
    correta: 1
},

{
    enunciado: "Qual é o valor máximo de D(x)=-2x²+16x-24?",
    alternativas: ["4", "6", "8", "16"],
    correta: 2
},

{
    enunciado: "O custo é C(x)=2x²-16x+40. Em qual valor de x ocorre o custo mínimo?",
    alternativas: ["2", "4", "6", "8"],
    correta: 1
},

{
    enunciado: "Para C(x)=2x²-16x+40, qual é o custo mínimo?",
    alternativas: ["4", "8", "16", "40"],
    correta: 1
},

{
    enunciado: "Uma receita é R(x)=-2x²+40x. Em qual valor de x ocorre a receita máxima?",
    alternativas: ["5", "10", "20", "40"],
    correta: 1
},

/* 31 */

{
    enunciado: "Na função quadrática f(x)=2x²-12x+16, qual é o eixo de simetria?",
    alternativas: ["x=2", "x=3", "x=4", "x=6"],
    correta: 1
},

{
    enunciado: "Quais são as raízes de f(x)=2x²-12x+16?",
    alternativas: ["1 e 8", "2 e 4", "2 e 6", "4 e 8"],
    correta: 1
},

{
    enunciado: "Se uma parábola possui raízes x=2 e x=8, qual é o x do vértice?",
    alternativas: ["4", "5", "6", "10"],
    correta: 1
},

{
    enunciado: "Se uma função quadrática possui a<0, sua parábola apresenta:",
    alternativas: [
        "Concavidade para cima",
        "Concavidade para baixo",
        "Uma reta crescente",
        "Uma reta decrescente"
    ],
    correta: 1
},

{
    enunciado: "Se uma função quadrática possui a>0, o vértice representa:",
    alternativas: [
        "Máximo",
        "Mínimo",
        "Uma raiz obrigatoriamente",
        "Coeficiente linear"
    ],
    correta: 1
},

{
    enunciado: "O Prof. Miderson modelou a eficiência de um algoritmo por E(x)=-2x²+20x-32. Em qual x ocorre a eficiência máxima?",
    alternativas: ["4", "5", "8", "10"],
    correta: 1
},

{
    enunciado: "Quais são as raízes de E(x)=-2x²+20x-32?",
    alternativas: [
        "2 e 8",
        "4 e 6",
        "1 e 16",
        "2 e 16"
    ],
    correta: 0
},

{
    enunciado: "Qual é o valor máximo de E(x)=-2x²+20x-32?",
    alternativas: ["8", "16", "18", "20"],
    correta: 2
},

{
    enunciado: "Uma empresa compara A(x)=100+10x e B(x)=300+5x. Quando os custos são iguais?",
    alternativas: ["20", "30", "40", "50"],
    correta: 2
},

{
    enunciado: "O espaço livre é E(t)=800-20t. Após quantos dias restarão 200 GB?",
    alternativas: ["20", "25", "30", "40"],
    correta: 2
},

/* QUESTÕES VISUAIS */

{
    enunciado: "Observe o gráfico. Qual característica melhor descreve a função apresentada?",
    alternativas: [
        "Crescente",
        "Decrescente",
        "Constante",
        "Quadrática"
    ],
    correta: 0,
    grafico: {
        tipo: "reta",
        a: 2,
        b: 2
    }
},

{
    enunciado: "Observe o gráfico construído a partir de uma função utilizada pelo Prof. Miderson. O comportamento da função é:",
    alternativas: [
        "Crescente",
        "Decrescente",
        "Constante",
        "Sem relação entre x e y"
    ],
    correta: 1,
    grafico: {
        tipo: "reta",
        a: -2,
        b: 10
    }
},

{
    enunciado: "Observe a parábola. A concavidade apresentada indica que o vértice corresponde a:",
    alternativas: [
        "Valor máximo",
        "Valor mínimo",
        "Coeficiente linear",
        "Raiz negativa"
    ],
    correta: 0,
    grafico: {
        tipo: "parabola",
        a: -1,
        b: 6,
        c: 0
    }
},

{
    enunciado: "Observe a parábola. Qual afirmação está correta?",
    alternativas: [
        "A concavidade é para baixo",
        "Existe um ponto de mínimo",
        "A função é linear",
        "O coeficiente a é negativo"
    ],
    correta: 1,
    grafico: {
        tipo: "parabola",
        a: 1,
        b: -4,
        c: 0
    }
},

{
    enunciado: "No gráfico apresentado, quando x aumenta, o valor de y:",
    alternativas: [
        "Sempre aumenta",
        "Sempre diminui",
        "Permanece constante",
        "Primeiro diminui e depois aumenta"
    ],
    correta: 2,
    grafico: {
        tipo: "reta",
        a: 0,
        b: 5
    }
},

/* FINAIS */

{
    enunciado: "Uma plataforma utiliza P(x)=2x+10 e C(p)=30p+200. Qual é C(P(10))?",
    alternativas: [
        "R$ 800",
        "R$ 900",
        "R$ 1.100",
        "R$ 1.200"
    ],
    correta: 2
},

{
    enunciado: "Em C(x)=200x+1000, o custo fixo corresponde a:",
    alternativas: [
        "R$ 200",
        "R$ 800",
        "R$ 1.000",
        "R$ 1.200"
    ],
    correta: 2
},

{
    enunciado: "Em R(x)=50x, qual é o coeficiente linear?",
    alternativas: ["0", "1", "50", "100"],
    correta: 0
},

{
    enunciado: "Na função R(x)=50x, aumentar uma unidade computacional significa aumentar a capacidade em:",
    alternativas: [
        "10 requisições/min",
        "20 requisições/min",
        "50 requisições/min",
        "100 requisições/min"
    ],
    correta: 2
},

{
    enunciado: "Para encerrar a revisão, o Prof. Miderson pergunta: em uma função f(x)=ax+b, qual condição garante que ela seja crescente?",
    alternativas: [
        "a<0",
        "a=0",
        "a>0",
        "b<0"
    ],
    correta: 2
}

];


/* =========================================================
   ELEMENTOS
========================================================= */

const telaLogin = document.getElementById("telaLogin");
const telaQuiz = document.getElementById("telaQuiz");
const telaResultado = document.getElementById("telaResultado");

const nomeInput = document.getElementById("nome");
const senhaInput = document.getElementById("senha");

const erroLogin = document.getElementById("erroLogin");

const enunciado = document.getElementById("enunciado");
const alternativas = document.getElementById("alternativas");

const numeroQuestao = document.getElementById("numeroQuestao");
const badgeQuestao = document.getElementById("badgeQuestao");

const barraProgresso = document.getElementById("barraProgresso");
const porcentagem = document.getElementById("porcentagem");

const areaVisual = document.getElementById("areaVisual");


/* =========================================================
   LOGIN
========================================================= */

document
.getElementById("btnIniciar")
.addEventListener("click", iniciarQuiz);


senhaInput.addEventListener("keydown", function(evento) {

    if (evento.key === "Enter") {
        iniciarQuiz();
    }

});


function iniciarQuiz() {

    nomeAluno = nomeInput.value.trim();
    const senha = senhaInput.value.trim();

    if (nomeAluno.length < 2) {

        erroLogin.textContent =
            "Informe seu nome para iniciar.";

        return;
    }

    if (senha !== SENHA_CORRETA) {

        erroLogin.textContent =
            "Senha incorreta.";

        return;
    }

    erroLogin.textContent = "";

    sortearQuestoes();

    respostasAluno =
        new Array(TOTAL_QUESTOES).fill(null);

    questaoAtual = 0;

    document.getElementById("nomeAluno")
        .textContent = nomeAluno;

    telaLogin.classList.add("escondido");
    telaResultado.classList.add("escondido");
    telaQuiz.classList.remove("escondido");

    mostrarQuestao();
}


/* =========================================================
   SORTEIO
========================================================= */

function sortearQuestoes() {

    const copia = [...bancoQuestoes];

    for (let i = copia.length - 1; i > 0; i--) {

        const j =
            Math.floor(Math.random() * (i + 1));

        [copia[i], copia[j]] =
            [copia[j], copia[i]];
    }

    questoesSelecionadas =
        copia.slice(0, TOTAL_QUESTOES);
}


/* =========================================================
   MOSTRAR QUESTÃO
========================================================= */

function mostrarQuestao() {

    const questao =
        questoesSelecionadas[questaoAtual];

    enunciado.textContent =
        questao.enunciado;

    alternativas.innerHTML = "";
    areaVisual.innerHTML = "";

    badgeQuestao.textContent =
        `QUESTÃO ${String(questaoAtual + 1).padStart(2, "0")}`;

    numeroQuestao.textContent =
        `${questaoAtual + 1} / ${TOTAL_QUESTOES}`;

    const progresso =
        ((questaoAtual + 1) / TOTAL_QUESTOES) * 100;

    barraProgresso.style.width =
        progresso + "%";

    porcentagem.textContent =
        Math.round(progresso) + "%";


    /* GRÁFICO */

    if (questao.grafico) {

        const canvas =
            document.createElement("canvas");

        canvas.width = 500;
        canvas.height = 280;

        areaVisual.appendChild(canvas);

        desenharGrafico(
            canvas,
            questao.grafico
        );
    }


    /* ALTERNATIVAS */

    questao.alternativas.forEach(
        (texto, indice) => {

            const div =
                document.createElement("div");

            div.className = "alternativa";

            if (
                respostasAluno[questaoAtual]
                === indice
            ) {
                div.classList.add("selecionada");
            }

            div.innerHTML = `
                <div class="letra">
                    ${String.fromCharCode(65 + indice)}
                </div>

                <div>${texto}</div>
            `;

            div.onclick = () =>
                selecionarAlternativa(indice);

            alternativas.appendChild(div);
        }
    );


    document.getElementById("btnAnterior")
        .style.visibility =
        questaoAtual === 0
        ? "hidden"
        : "visible";


    const btnProxima =
        document.getElementById("btnProxima");

    if (questaoAtual === TOTAL_QUESTOES - 1) {

        btnProxima.textContent =
            "FINALIZAR ✓";

    } else {

        btnProxima.textContent =
            "Próxima →";
    }
}


/* =========================================================
   SELECIONAR
========================================================= */

function selecionarAlternativa(indice) {

    respostasAluno[questaoAtual] =
        indice;

    mostrarQuestao();
}


/* =========================================================
   NAVEGAÇÃO
========================================================= */

document
.getElementById("btnAnterior")
.addEventListener("click", () => {

    if (questaoAtual > 0) {

        questaoAtual--;

        mostrarQuestao();
    }

});


document
.getElementById("btnProxima")
.addEventListener("click", () => {

    if (
        respostasAluno[questaoAtual]
        === null
    ) {

        alert(
            "Selecione uma alternativa antes de continuar."
        );

        return;
    }


    if (
        questaoAtual <
        TOTAL_QUESTOES - 1
    ) {

        questaoAtual++;

        mostrarQuestao();

    } else {

        finalizarQuiz();
    }

});


/* =========================================================
   RESULTADO
========================================================= */

function finalizarQuiz() {

    let acertos = 0;

    questoesSelecionadas.forEach(
        (questao, indice) => {

            if (
                respostasAluno[indice]
                === questao.correta
            ) {
                acertos++;
            }

        }
    );


    const percentual =
        Math.round(
            (acertos / TOTAL_QUESTOES) * 100
        );


    telaQuiz.classList.add("escondido");

    telaResultado.classList.remove("escondido");


    document.getElementById("resultadoNome")
        .textContent =
        `${nomeAluno}, confira seu desempenho:`;


    document.getElementById("notaFinal")
        .textContent =
        `${acertos}/${TOTAL_QUESTOES}`;


    document.getElementById("percentualFinal")
        .textContent =
        percentual + "%";


    let mensagem = "";

    if (percentual === 100) {

        mensagem =
        "Excelente! Desempenho de campeão! 🌪️";

    }

    else if (percentual >= 80) {

        mensagem =
        "Muito bom! Você está bem preparado para a avaliação.";

    }

    else if (percentual >= 60) {

        mensagem =
        "Bom resultado. Revise os pontos em que apresentou dificuldade.";

    }

    else {

        mensagem =
        "Continue estudando. Analise a correção abaixo e faça uma nova rodada.";
    }


    document.getElementById("mensagemFinal")
        .textContent = mensagem;


    mostrarCorrecao(acertos);
}


/* =========================================================
   CORREÇÃO FINAL
========================================================= */

function mostrarCorrecao() {

    const revisao =
        document.getElementById("revisaoFinal");

    revisao.innerHTML =
        "<h2>Correção das questões</h2>";


    questoesSelecionadas.forEach(
        (questao, indice) => {

            const acertou =
                respostasAluno[indice]
                === questao.correta;


            const div =
                document.createElement("div");


            div.className =
                "revisao-item " +
                (acertou
                    ? "correto"
                    : "errado");


            const letraAluno =
                String.fromCharCode(
                    65 +
                    respostasAluno[indice]
                );


            const letraCorreta =
                String.fromCharCode(
                    65 +
                    questao.correta
                );


            div.innerHTML = `

                <strong>
                    Questão ${indice + 1}
                    ${acertou ? "✅" : "❌"}
                </strong>

                <p>
                    ${questao.enunciado}
                </p>

                <p>
                    Sua resposta:
                    <strong>${letraAluno}</strong>
                </p>

                ${
                    !acertou
                    ?
                    `
                    <p>
                        Resposta correta:
                        <strong>
                            ${letraCorreta}) 
                            ${questao.alternativas[questao.correta]}
                        </strong>
                    </p>
                    `
                    :
                    ""
                }

            `;


            revisao.appendChild(div);
        }
    );
}


/* =========================================================
   NOVA RODADA
========================================================= */

document
.getElementById("btnReiniciar")
.addEventListener("click", () => {

    sortearQuestoes();

    respostasAluno =
        new Array(TOTAL_QUESTOES)
        .fill(null);

    questaoAtual = 0;

    telaResultado.classList.add("escondido");

    telaQuiz.classList.remove("escondido");

    mostrarQuestao();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================================================
   GRÁFICOS
========================================================= */

function desenharGrafico(canvas, config) {

    const ctx =
        canvas.getContext("2d");

    const largura =
        canvas.width;

    const altura =
        canvas.height;


    ctx.clearRect(
        0,
        0,
        largura,
        altura
    );


    const origemX = 60;
    const origemY = altura - 45;

    const escalaX = 35;
    const escalaY = 18;


    /* GRADE */

    ctx.strokeStyle = "#e5e5e5";
    ctx.lineWidth = 1;


    for (
        let x = origemX;
        x < largura - 20;
        x += escalaX
    ) {

        ctx.beginPath();

        ctx.moveTo(x, 20);

        ctx.lineTo(
            x,
            origemY
        );

        ctx.stroke();
    }


    for (
        let y = origemY;
        y > 20;
        y -= escalaY
    ) {

        ctx.beginPath();

        ctx.moveTo(
            origemX,
            y
        );

        ctx.lineTo(
            largura - 20,
            y
        );

        ctx.stroke();
    }


    /* EIXOS */

    ctx.strokeStyle = "#111";
    ctx.lineWidth = 2;


    ctx.beginPath();

    ctx.moveTo(
        origemX,
        20
    );

    ctx.lineTo(
        origemX,
        origemY
    );

    ctx.lineTo(
        largura - 20,
        origemY
    );

    ctx.stroke();


    ctx.fillStyle = "#111";
    ctx.font = "14px Arial";

    ctx.fillText(
        "y",
        origemX - 18,
        25
    );

    ctx.fillText(
        "x",
        largura - 25,
        origemY + 25
    );


    /* FUNÇÃO */

    ctx.strokeStyle = "#d71920";
    ctx.lineWidth = 4;

    ctx.beginPath();

    let iniciou = false;


    for (
        let x = 0;
        x <= 11;
        x += 0.05
    ) {

        let y;


        if (config.tipo === "reta") {

            y =
                config.a * x
                + config.b;

        }

        else {

            y =
                config.a * x * x
                + config.b * x
                + config.c;
        }


        const px =
            origemX +
            x * escalaX;


        const py =
            origemY -
            y * escalaY;


        if (
            py < 20 ||
            py > origemY
        ) {

            iniciou = false;

            continue;
        }


        if (!iniciou) {

            ctx.moveTo(
                px,
                py
            );

            iniciou = true;

        } else {

            ctx.lineTo(
                px,
                py
            );
        }
    }


    ctx.stroke();
}
