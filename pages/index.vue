<template>
  <main class="h-screen bg-gray-200 overflow-auto">
    <div class="flex flex-col mx-auto items-center mt-40">
      <img src="/logo.png" alt="conexo log" class="w-[50px] h-[50px]" />
      <h1 class="mt-5 text-2xl font-extrabold">CONEXO</h1>
      <p class="px-5 my-5 mx-0 text-center" style="max-width: 300px">
        Forme 4 grupos de 4 palavras que tenham algo em comum
      </p>
      <div>
        <div
          class="my-5 flex justify-between border border-white bg-slate-800 p-2 text-white rounded-lg items-center"
        >
          <div class="pl-1 text-lg font-extrabold">Jogo diário</div>
          <div class="font-normal">{{ today }}</div>
          <a class="cursor-pointer" href="#daily"
            ><button
              class="items-center bg-sky-500 px-5 py-2 text-center text-base rounded-lg"
            >
              Jogar
            </button>
          </a>
        </div>
        <div
          class="my-5 flex border border-white bg-slate-800 p-2 text-white rounded-lg items-center justify-between"
        >
          <div class="pl-1 text-lg font-extrabold">Jogo Ilimitado</div>
          <NuxtLink to="/conexoilimitado" class="cursor-pointer"
            ><button
              class="items-center bg-sky-500 px-5 py-2 text-center text-base rounded-lg"
            >
              Jogar
            </button>
          </NuxtLink>
        </div>
        <div class="flex flex-col items-center justify-center w-full">
          <img src="/images/movixa.png" alt="movixa jogo" class="w-[80px]" />
          <p class="text-3xl font-bold">Movixa</p>
          <p class="font-semibold">Movixa: Uma nova maneira de brincar com palavras soletradas, experimente?</p>
        </div>
        <div
          class="mb-5 mt-6 flex gap-4 border border-white bg-slate-800 p-2 text-white rounded-lg justify-between items-center"
        >
          <div class="pl-1 text-lg font-extrabold">Movixa diário</div>
          <div class="font-normal">{{ today }}</div>
          <a href="https://movixa.com" class="cursor-pointer" target="_blank"
            ><button
              class="items-center bg-orange-500 px-5 py-2 text-center text-base rounded-lg"
            >
              Jogar
            </button>
          </a>
        </div>
      </div>
    </div>
  </main>
  <!--  游戏区 -->
  <div class="h-screen bg-slate-900 overflow-auto relative" id="daily">
    <div
      class="flex w-full sm:max-w-[520px] px-4 mx-auto text-white items-center justify-between"
    >
      <font-awesome-icon
        @click="openDialog"
        icon="circle-question"
        class="text-xl cursor-pointer hover:text-gray-400"
      />
      <h2 class="text-3xl font-bold mt-2">CONEXO {{ day + "/" + month }}</h2>
      <font-awesome-icon
        icon="house"
        class="text-xl cursor-pointer hover:text-gray-400"
        @click="goHome()"
      />
    </div>

    <div v-if="localData.status === 'won'" class="max-w-[400px] mx-auto mt-10">
      <div
        class="flex flex-col p-5 text-center items-center text-white rounded bg-slate-800"
      >
        <p class="my-2 font-extrabold">Parabéns!</p>
        <p class="my-2 font-extrabold">
          Você conseguiu em {{ localData.attempts.length }} tentativas.
        </p>
        <p class="mt-5 mb-8">{{ generatorResultText().colorText }}</p>
        <button
          class="flex items-center py-2 px-5 text-base cursor-pointer bg-sky-500 rounded-lg hover:bg-sky-400"
          @click="copyToClipboard($event.target)"
        >
          <font-awesome-icon icon="copy" />
          <span class="ml-2">Compartilhe</span>
        </button>
      </div>

      <div
        class="flex flex-col p-5 text-center items-center text-white rounded bg-slate-800 my-6"
      >
        <p class="my-2 font-extrabold">Está gostando de jogar Conexo?</p>
        <p class="mb-4 mt-1 font-extrabold">Dê a sua opinião:</p>
        <button
          class="flex items-center py-2 px-5 text-base cursor-pointer bg-sky-500 rounded-lg hover:bg-sky-400"
        >
          <font-awesome-icon icon="comment" />
          <span class="ml-2">Pesquisar no Facebook pelo grupo Conexo Jogo</span>
        </button>
      </div>
    </div>

    <div
      class="flex w-full sm:max-w-[520px] items-center mx-auto flex-wrap flex-1 text-white"
      ref="cells"
    >
      <div class="flex w-full justify-between">
        <p class="text-semibold p-2 mr-2">{{ today }}</p>
        <p class="text-semibold p-2">
          TENTATIVAS: {{ localData.attempts.length }}
        </p>
      </div>
      <div
        v-for="group in localData.groups"
        :key="group.number"
        class="leading-6 font-semibold p-1 w-full"
      >
        <div
          class="py-5 rounded-lg text-center"
          :class="groupColor[group.number]"
        >
          <p>{{ group.theme }}</p>
          <p class="uppercase pt-2">{{ group.words.join(", ") }}</p>
        </div>
      </div>
      <div
        v-for="item in localData.items"
        :key="item.id"
        class="w-1/4 p-1 text-sm"
      >
        <div class="cell-normal" @click="clickCell(item, $event.target)">
          {{ item.word }}
        </div>
      </div>
    </div>

    <!-- 广告start -->
    <div class="mx-auto mt-20 sm:mt-60 min-w-[320px] max-w-[970px] h-[50px]">
      <Adsbygoogle ad-slot="6292408192" ad-format="auto" />
    </div>
    <!-- 广告end -->
  </div>

  <!-- 引入info弹出框 -->
  <Dialog :isOpen="isOpen" @closeModal="isOpen = false" />

  <!-- 文字区  -->
  <section class="bg-stone-200 leading-6 text-black w-full overflow-auto">
    <div
      class="p-6 text-center sm:w-3/4 xl:w-3/5 mx-auto bg-red-100 rounded-xl my-"
    >
      <h2 class="text-3xl font-extrabold mb-2">Aviso Amigável</h2>
      <p>
        Muitas funcionalidades ainda estão em desenvolvimento, aguarde com
        expectativa!<br />
        Se você gosta do nosso site, sinta-se bem-vindo para visitar sempre!<br />
        Nosso objetivo é que as pessoas que jogam este jogo se sintam felizes e
        satisfeitas, e que comecem o seu dia com prazer.<br /><br />
      </p>
      <p>
        Se você quiser obter as respostas e dicas do jogo Conexo de hoje, você
        pode visitar
        <a
          href="/conexo-resposta-hoje"
          class="leading-7 cursor-pointer text-green-500"
          target="_blank"
          >conexo dica e resposta</a
        >
        . Nosso objetivo é que você passe um dia tranquilo e alegre, colhendo
        felicidade e sensação de realização, então não queremos que você sinta
        frustração. Se você realmente não consegue adivinhar as respostas, vá lá
        e dê uma olhada. Temos total confiança em você!
      </p>
    </div>
    <div
      class="py-8 px-4 sm:w-3/4 xl:w-3/5 mx-auto text-center bg-lime-50 rounded-xl my-5"
    >
      <h2 class="text-3xl font-extrabold mb-2">Conexo Jogo Hoje</h2>
      <p class="mb-2 text-base font-normal text-gray-800">
        Conexo é um popular jogo de quebra-cabeça de associação de palavras onde
        os jogadores recebem uma série de quatro palavras e devem identificar
        uma palavra que pode ser conectada a todas as quatro palavras dadas de
        alguma forma. O objetivo é encontrar o tema comum ou a relação entre as
        palavras e chegar à resposta correta.
      </p>
      <p class="mb-2 text-base font-normal text-gray-800">
        Ao jogar Conexo Jogo, seu objetivo é selecionar quatro palavras que
        estejam relacionadas de alguma maneira. O jogo então verificará se suas
        palavras escolhidas estão corretas e as categorizará em diferentes
        grupos representados por diferentes cores: Vermelho, Verde, Laranja e
        Azul. Cada categoria de cor representa um grupo de palavras
        relacionadas.
      </p>
    </div>
    <div
      class="py-8 px-4 sm:w-3/4 xl:w-3/5 mx-auto text-center rounded-xl shadow-xl my-5"
    >
      <div>
        <h2 class="text-3xl font-extrabold mb-2">Como jogar o Conexo Jogo</h2>
        <p
          class="text-3xl rounded-full shadow-lg bg-slate-50 w-16 h-16 p-4 mx-auto my-8"
        >
          1
        </p>
        <h3 class="mb-2 text-xl font-bold text-gray-800">Leia e Entenda</h3>
        <p class="mb-2 text-base font-normal text-gray-800">
          Comece lendo cuidadosamente as palavras dadas no quebra-cabeça.
          Entenda seus significados e contexto.
        </p>
        <img
          src="/images/1.png"
          alt="Conexo 1"
          class="rounded-lg my-4 mx-auto h-56"
        />
      </div>
      <div>
        <p
          class="text-3xl rounded-full shadow-lg bg-slate-50 w-16 h-16 p-4 mx-auto my-8"
        >
          2
        </p>
        <h3 class="mb-2 text-xl font-bold text-gray-800">
          Encontre 4 grupos de quatro palavras que compartilham algo em comum
        </h3>
        <p class="mb-2 text-base font-normal text-gray-800">
          Procure por padrões e conexões entre as palavras para formar os 4
          grupos de 4 palavras cada. Cada grupo deve ter um tema comum com
          quatro palavras relacionadas.
        </p>
        <img
          src="/images/2.png"
          alt="Conexo 2"
          class="rounded-lg my-4 mx-auto h-56"
        />
      </div>
      <div>
        <p
          class="text-3xl rounded-full shadow-lg bg-slate-50 w-16 h-16 p-4 mx-auto my-8"
        >
          3
        </p>
        <h3 class="mb-2 text-xl font-bold text-gray-800">
          Selecione 4 Palavras
        </h3>
        <p class="mb-2 text-base font-normal text-gray-800">
          Selecione um conjunto de quatro palavras. Veja se sua resposta
          corresponde à solução correta. Aproveite o desafio e a emoção do jogo!
        </p>
        <img
          src="/images/3.png"
          alt="Conexo 3"
          class="rounded-lg my-4 mx-auto h-56"
        />
      </div>
      <div>
        <p
          class="text-3xl rounded-full shadow-lg bg-slate-50 w-16 h-16 p-4 mx-auto my-8"
        >
          4
        </p>
        <h3 class="mb-2 text-xl font-bold text-gray-800">
          Compartilhar e Feedback
        </h3>
        <p class="mb-2 text-base font-normal text-gray-800">
          Clique no botão de copiar para copiar sua pontuação final, e então
          compartilhe nas suas redes sociais para que mais pessoas saibam da sua
          alegria. Você também pode enviar suas sugestões sobre este jogo para
          nós, para que possamos continuar a melhorar.
        </p>
        <img
          src="/images/4.png"
          alt="Conexo 4"
          class="rounded-lg my-4 mx-auto h-56"
        />
      </div>
    </div>
    <div class="py-8 px-4 sm:w-3/4 xl:w-3/5 mx-auto rounded-lg mt-5">
      <h2 class="text-3xl font-extrabold mb-2 text-center my-4">
        FAQs sobre Jogo Conexo
      </h2>
      <div class="shadow-xl bg-white rounded-lg p-4 my-4">
        <h3 class="mb-2 text-xl font-bold text-gray-800">
          O que é Conexo Jogo?
        </h3>
        <p class="mb-2 text-base font-normal text-gray-800">
          O Conexo Jogo é um popular jogo de quebra-cabeça de associação de
          palavras que desafia os jogadores a encontrar uma palavra que conecta
          quatro palavras dadas de alguma forma. Ele testa sua habilidade de
          encontrar um tema comum entre diferentes tipos de palavras.<br />
          <br />
          <strong>Por exemplo</strong>, se as quatro palavras dadas são Árvore,
          Carvalho, Ácer e Bétula, o fio comum poderia ser Tipos de Árvores.
        </p>
      </div>
      <div class="shadow-xl bg-white rounded-lg p-4 my-4">
        <h3 class="mb-2 text-xl font-bold text-gray-800">
          Quais são os 4 Grupos no Conexo Jogo?
        </h3>
        <p class="mb-2 text-base font-normal text-gray-800">
          No Conexo Jogo, existem quatro categorias codificadas por cores
          indicando níveis de dificuldade:<br />
          <br />
          <strong>Quatro Grupos:</strong><br />
          <br />
          <strong>🔴 Vermelho (Mais fácil):</strong> Dicas simples que são
          diretas para conectar com a palavra alvo.<br />
          <strong>🟢 Verde (Segundo mais fácil): </strong>Dicas um pouco mais
          desafiadoras, mas ainda gerenciáveis para a maioria dos jogadores.<br />
          <strong>🟠 Laranja (Médio): </strong>Dicas de dificuldade moderada que
          requerem mais pensamento e criatividade.<br />
          <strong>🔵 Azul (Difícil):</strong> A categoria mais desafiadora com
          dicas complexas que exigem raciocínio profundo e fortes habilidades de
          associação de palavras.<br />
          <br />
          Essas categorias oferecem uma progressão de dificuldade, permitindo
          que os jogadores testem e melhorem suas habilidades de associação de
          palavras.
        </p>
      </div>
      <div class="shadow-xl bg-white rounded-lg p-4 my-4">
        <h3 class="mb-2 text-xl font-bold text-gray-800">
          Quais são as regras do jogo conexo?
        </h3>
        <p class="mb-2 text-base font-normal text-gray-800">
          Aqui estão as regras do jogo Connections Wordle explicadas de uma
          maneira simples de entender:<br />
          <br />
          <strong>1. Olhe as Palavras: </strong> No jogo, você verá quatro
          palavras. para conectar com a palavra alvo.<br />
          <strong>2. Encontre a Coisa Comum: </strong>Sua tarefa é encontrar uma
          palavra que conecte todas as quatro palavras dadas. É como encontrar
          algo que todas tenham em comum.<br />
          <strong>3. Dê Sua Resposta: </strong>Quando você acha que sabe a
          palavra de conexão, você pode compartilhar sua resposta.<br />
          Você tem quatro tentativas para adivinhar a palavra certa. Se não
          conseguir encontrar em quatro tentativas, o jogo terminará.<br />
          <br />
          Lembre-se, o objetivo é se divertir e fazer o seu melhor para
          encontrar a conexão entre as palavras. Divirta-se jogando o jogo
          Connections!
        </p>
      </div>
      <div class="shadow-xl bg-white rounded-lg p-4 mt-4">
        <h3 class="mb-2 text-xl font-bold text-gray-800">
          As principais diferenças entre conexo ws?
        </h3>
        <p class="mb-2 text-base font-normal text-gray-800">
          conexo ws é um jogo de associação de palavras que se concentra em
          encontrar conexões entre palavras dadas, enquanto termo é um jogo de
          adivinhação de palavras onde os jogadores tentam adivinhar uma palavra
          oculta com base no feedback. O ponto comum entre conexo ws e conexo é
          que ambos são jogos de palavras.
        </p>
      </div>
      <div class="shadow-xl bg-white rounded-lg p-4 mt-4">
        <h3 class="mb-2 text-xl font-bold text-gray-800">
          Qual é a ordem do Conexo?
        </h3>
        <p class="mb-2 text-base font-normal text-gray-800">
          A ordem dos jogos em Conexo Jogo é aleatória, já embaralhamos a ordem
          das palavras que têm o mesmo tema em quatro grupos com antecedência,
          então quando você joga, a ordem em cada jogo é diferente, não há uma
          ordem consistente para referência.<br />
          <br />
          Além disso, o objetivo deste jogo é fazer com que se divirta e sinta
          prazer, esperamos que sinta alegria e satisfação durante o jogo.
          Esperamos sinceramente que goste deste jogo, e muitas funcionalidades
          ainda estão em desenvolvimento, fique atento!
        </p>
      </div>
    </div>
    <div
      class="py-8 px-4 sm:w-3/4 xl:w-3/5 mx-auto text-center bg-lime-50 rounded-xl mb-5"
    >
      <h2 class="text-3xl font-extrabold mb-2">
        Diferença entre Conexo Jogo e QSMP Conexo
      </h2>
      <p class="my-2 text-base font-normal text-gray-800">
        Conexo Jogo" e "QSMP Conexo" são duas versões ou plataformas diferentes
        do jogo Conexo. Com base nas informações conhecidas até agora, "QSMP
        Conexo" é uma versão criada pela comunidade de servidores multijogador
        multilíngue do Minecraft QSMP.<br />
        <br />
        Ambos os jogos têm a mesma jogabilidade, a diferença é que QSMP Conexo e
        Conexo Jogo usam diferentes conjuntos de dados de palavras e temas. No
        entanto, é importante notar que a jogabilidade é consistente entre os
        dois. Você pode desfrutar de Conexo Jogo aqui.<br />
      </p>
    </div>
  </section>

  <!-- 页脚 -->
  <Footer />
</template>

<script setup>
import { ref, reactive, onMounted, watch } from "vue";
import { goHome } from "/composables/utility";
import "animate.css";
import autoAnimate from "@formkit/auto-animate";
const data = useData(); // 获取composable中的游戏数据

// 用于info弹出框
const isOpen = ref(false);
function openDialog() {
  isOpen.value = true;
}

// 添加动画效果
const cells = ref(null);
onMounted(() => {
  autoAnimate(cells.value, {
    duration: 500,
    // delay: 100,
    // easing: "ease-in-out",
    animation: "animate__animated animate__fadeInUp",
  });
});

const [year, month, day] = getDate();
const today = ref(day + "/" + month + "/" + year);
const selectedWords = [];
const selectedTarget = [];

const groupColor = ref({
  1: "bg-red-500",
  2: "bg-green-500",
  3: "bg-orange-500",
  4: "bg-blue-500",
});

const localData = reactive({
  attempts: [],
  groups: [],
  items: [],
  status: "selecting",
});

watch(localData, (newVal) => {
  if (process.client) {
    localStorage.setItem(
      "gameDatas",
      JSON.stringify({
        [day]: newVal,
      })
    );
  }
});

function initData() {
  const dayNumber = Number(day);
  let gameDataObj = null;

  if (process.client) {
    gameDataObj = JSON.parse(localStorage.getItem("gameDatas"));
  }

  if (gameDataObj && gameDataObj[day] !== undefined) {
    gameDataObj = gameDataObj[day];
    for (const key in gameDataObj) {
      if (gameDataObj.hasOwnProperty(key) && localData.hasOwnProperty(key)) {
        localData[key] = gameDataObj[key];
      }
    }
  } else {
    for (let i = 0; i < data[dayNumber - 1].startingBoard.length; i++) {
      localData.items.push({
        id: i,
        word: data[dayNumber - 1].startingBoard[i],
      });
    }
  }
}
initData();

function clickCell(item, target) {
  if (selectedWords.includes(item.word)) {
    return;
  }
  target.className = "cell-selected";
  selectedWords.push(item.word);
  selectedTarget.push(target);

  if (selectedWords.length === 4) {
    let isCorrect = false;
    let tempGroup = null;

    for (let group of data[Number(day - 1)].groups) {
      if (selectedWords.every((item) => group.words.includes(item))) {
        tempGroup = group;
        isCorrect = true;
        break;
      }
    }

    const attemptObj = {
      selected: Array.from(selectedWords),
    };

    if (isCorrect) {
      correctSet(tempGroup, attemptObj.selected);
      attemptObj.group = tempGroup.number;
    } else {
      incorrectSet();
    }

    localData.attempts.push(attemptObj);
    selectedWords.length = 0;
    selectedTarget.length = 0;
  }
}

function correctSet(tempGroup, selected) {
  // 添加动画效果
  for (let target of selectedTarget) {
    requestAnimationFrame(() => {
      target.className = `cell-${tempGroup.number}-color`;
      target.classList.add(
        "animate__animated",
        "animate__pulse",
        "animate__fast"
      );
    });
  }

  // 从items中删除selected，之所以要settimeout，是因为要等动画结束
  setTimeout(() => {
    for (let word of selected) {
      for (let item of localData.items) {
        if (item.word === word) {
          localData.items.splice(localData.items.indexOf(item), 1);
          break;
        }
      }
    }
    localData.groups.push(tempGroup);
  }, 800);

  setTimeout(() => {
    if (localData.groups.length === 4) {
      localData.status = "won";
    }
  }, 2000);
}

function incorrectSet() {
  for (let target of selectedTarget) {
    target.addEventListener(
      "animationend",
      () => {
        target.className = "cell-normal";
      },
      { once: true }
    ); // 使用 once 选项确保事件处理器只执行一次，然后会自动删除
    requestAnimationFrame(() => {
      target.className = "cell-normal";
      target.classList.add(
        "border-2",
        "border-red-800",
        "animate__animated",
        "animate__shakeX",
        "animate__fast"
      );
    });
  }
}

function getDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1; // 加 1 以得到通常的月份数字
  const day = today.getDate();
  return [year, month, day];
}

const generatorResultText = () => {
  const colorText = [];
  for (const attempt of localData.attempts) {
    if (attempt["group"] === undefined) {
      colorText.push("❌");
    } else if (attempt["group"] === 1) {
      colorText.push("🔴");
    } else if (attempt["group"] === 2) {
      colorText.push("🟢");
    } else if (attempt["group"] === 3) {
      colorText.push("🟠");
    } else if (attempt["group"] === 4) {
      colorText.push("🔵");
    }
  }

  const infoText = `Joguei conexojogo.com ${today.value} e consegui em ${localData.attempts.length} tentativas.`;
  return {
    colorText: colorText.join(""),
    infoText,
  };
};

async function copyToClipboard(target) {
  target.innerText = "Copiado!";
  setTimeout(() => {
    target.innerText = "Compartilhe";
  }, 2000);
  const text = generatorResultText();
  try {
    await navigator.clipboard.writeText(`${text.infoText}\n${text.colorText}`);
  } catch (err) {
    console.error("Error in copy: ", err);
  }
}

useHead({
  title: "Conexo Jogo",
  meta: [
    {
      name: "description",
      content:
        "Jogo de palavras onde o objetivo é formar 4 grupos de 4 palavras que tenham algo em comum",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://conexojogo.com",
    },
    {
      rel: "icon",
      href: "/favicon.ico",
      type: "image/x-icon",
    },
  ],
});
</script>

<style scoped>
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.cell-normal {
  @apply py-6 bg-slate-700 text-center rounded-lg hover:bg-slate-600 cursor-pointer uppercase overflow-auto whitespace-nowrap;
}
.cell-selected {
  @apply py-6 bg-sky-500 text-center rounded-lg uppercase overflow-auto whitespace-nowrap;
}
.cell-1-color {
  @apply py-6 bg-red-500 text-center rounded-lg uppercase;
}
.cell-2-color {
  @apply py-6 bg-green-500 text-center rounded-lg uppercase;
}
.cell-3-color {
  @apply py-6 bg-orange-500 text-center rounded-lg uppercase;
}
.cell-4-color {
  @apply py-6 bg-blue-500 text-center rounded-lg uppercase;
}
</style>
