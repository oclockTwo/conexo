<template>
  <div class="h-screen bg-slate-900 overflow-auto relative">
    <div
      class="flex w-full sm:max-w-[520px] px-4 py-2 mx-auto text-white items-center justify-between"
    >
      <font-awesome-icon
        @click="openDialog"
        icon="circle-question"
        class="text-xl cursor-pointer hover:text-gray-400"
      />
      <h1 class="text-3xl">Conexo Ilimitado</h1>
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
      <div class="flex w-full items-center justify-between">
        <select
          class="select select-xs select-bordered text-black"
          @change="selectGameData"
        >
          <option disabled selected>1/10/2023</option>
          <option v-for="(value, key) in filteredData(0, 141)" :key="key">
            {{ keyToDate(Number(key)) }}
          </option>
        </select>

        <p class="text-semibold p-2">
          TENTATIVAS: {{ localData.attempts.length }}
        </p>
      </div>
      <div
        v-for="group in localData.groups"
        :key="group.number"
        class="leading-4 font-semibold p-1 w-full"
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
      <p class="text-lg mt-4 text-center text-zinc-400 hover:text-red-600">
        <a href="https://movixa.com" class="cursor-pointer" target="_blank"
          >Movixa: Uma nova maneira de brincar com palavras soletradas, experimente?g</a
        >
      </p>
    </div>
    <!-- 广告start -->
    <div class="mx-auto mt-20 sm:mt-60 min-w-[320px] max-w-[970px] h-[50px]">
      <Adsbygoogle ad-slot="6292408192" ad-format="auto" />
    </div>
    <!-- 广告end -->
  </div>

  <!-- 引入info弹出框 -->
  <Dialog :isOpen="isOpen" @closeModal="isOpen = false" />

  <!-- 文字区 -->
  <div class="bg-stone-200 leading-6 text-black w-full overflow-auto">
    <div
      class="p-6 text-center sm:w-3/4 xl:w-3/5 mx-auto bg-red-100 rounded-xl my-"
    >
      <h2 class="text-3xl font-extrabold mb-2">Aviso Amigável</h2>
      <p>
        Os dados de palavras do Conexo Ilimitado são todos históricos diários
        anteriores, você pode escolher livremente um dia para começar.
        Divirta-se 😄 e comece um dia alegre daqui!<br /><br />
      </p>
      <p>
        Além disso, você também pode obter todos os dados de jogos históricos
        anteriores em
        <a
          href="/conexo-dias-anteriores"
          class="leading-7 cursor-pointer text-green-500"
          target="_blank"
          >Conexo Jogo Dias Anteriores</a
        >. Se você encontrar dificuldades ou começar a se sentir frustrado
        durante o jogo, pedimos desculpas por não termos projetado bem os dados
        de palavras. Portanto, você pode consultar dicas e respostas do Conexo
        Jogo para entender onde está o problema.<br /><br />
      </p>
      <p>
        Por favor, sempre lembre-se de que nosso objetivo ao projetar este jogo
        é para que você se sinta feliz e satisfeito; se isso não acontece,
        sentimos muito!
      </p>
    </div>
    <div
      class="py-8 px-4 sm:w-3/4 xl:w-3/5 mx-auto text-center bg-green-50 rounded-xl my-5"
    >
      <h2 class="text-3xl font-extrabold mb-2">Conexo Jogo Ilimitado</h2>
      <p class="mb-2 text-base font-normal text-gray-800">
        <a
          href="/"
          class="leading-7 cursor-pointer text-green-500"
          target="_blank"
          >Conexo</a
        >
        é um popular jogo de quebra-cabeça de associação de palavras onde os
        jogadores recebem uma série de quatro palavras e devem identificar uma
        palavra que pode ser conectada a todas as quatro palavras dadas de
        alguma forma. O objetivo é encontrar o tema comum ou a relação entre as
        palavras e chegar à resposta correta.
      </p>
      <p class="mb-2 text-base font-normal text-gray-800">
        A jogabilidade de Conexo Ilimitado é exatamente a mesma de Conexo, a
        única diferença é que
        <a
          href="/"
          class="leading-7 cursor-pointer text-green-500"
          target="_blank"
          >Conexo Jogo</a
        >
        pode ser jogado apenas uma vez por dia, enquanto Conexo Ilimitado pode
        ser jogado várias vezes por dia. Você pode clicar no botão de
        atualização na parte superior da área de jogo para começar de novo,
        divirta-se!
      </p>
      <p class="mb-2 text-base font-normal text-gray-800">
        Assim como no
        <a
          href="/"
          class="leading-7 cursor-pointer text-green-500"
          target="_blank"
          >Conexo Jogo</a
        >, ao jogar o jogo Conexo Ilimitado, seu objetivo é selecionar quatro
        grupos de palavras que estejam relacionadas de alguma maneira. O jogo
        então verificará se seus grupos de palavras escolhidos estão corretos e
        os categorizará em diferentes grupos representados por diferentes cores:
        Vermelho, Verde, Laranja e Azul. Cada categoria de cor representa um
        grupo de palavras relacionadas.
      </p>
    </div>
    <div
      class="py-8 px-4 sm:w-3/4 xl:w-3/5 mx-auto text-center bg-orange-50 rounded-xl shadow-xl my-5"
    >
      <div>
        <h2 class="text-3xl font-extrabold mb-2">
          Como jogar o Conexo Ilimitado
        </h2>
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
          src="/images/unlimited/1.png"
          alt="Conexo Ilimitado 1"
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
          Encontre 4 Palavras com um Ponto em Comum
        </h3>
        <p class="mb-2 text-base font-normal text-gray-800">
          Procure quatro palavras que tenham algum tipo de ligação, formando um
          grupo. Cada grupo de quatro palavras deve ter um tema comum.
        </p>
        <img
          src="/images/unlimited/2.png"
          alt="Conexo Ilimitado 2"
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
          src="/images/unlimited/3.png"
          alt="Conexo Ilimitado 3"
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
          src="/images/unlimited/4.png"
          alt="Conexo Ilimitado 4"
          class="rounded-lg my-4 mx-auto h-56"
        />
      </div>
      <div>
        <p
          class="text-3xl rounded-full shadow-lg bg-slate-50 w-16 h-16 p-4 mx-auto my-8"
        >
          5
        </p>
        <h3 class="mb-2 text-xl font-bold text-gray-800">Jogue Novamente</h3>
        <p class="mb-2 text-base font-normal text-gray-800">
          Muito bem, você venceu. Você pode clicar no botão de atualizar aqui
          para jogar novamente, divirta-se!
        </p>
        <img
          src="/images/unlimited/5.png"
          alt="Conexo Ilimitado 5"
          class="rounded-lg my-4 mx-auto h-56"
        />
      </div>
    </div>
    <div
      class="py-8 px-4 sm:w-3/4 xl:w-3/5 mx-auto text-center bg-lime-50 rounded-xl my-5"
    >
      <h2 class="text-3xl font-extrabold mb-2">
        Diferença entre Conexo Ilimitado e QSMP Conexo
      </h2>
      <p class="my-2 text-base font-normal text-gray-800">
        Conexo Ilimitado" e "QSMP Conexo" são duas versões ou plataformas
        diferentes do jogo Conexo. Com base nas informações conhecidas até
        agora, "Conexo Ilimitado" permite que os jogadores joguem inúmeras vezes
        por dia, enquanto "QSMP Conexo" é uma versão criada pela comunidade de
        servidores multijogador multilíngue do Minecraft QSMP.<br />
        <br />
        Ambos os jogos têm a mesma jogabilidade, a diferença é que a versão QSMP
        Conexo só pode ser jogada uma vez por dia, enquanto Conexo Ilimitado
        pode ser jogado inúmeras vezes por dia; além disso, QSMP Conexo e Conexo
        Ilimitado usam diferentes conjuntos de dados de palavras. No entanto, é
        importante notar que a jogabilidade é consistente entre os dois.<br />
      </p>
    </div>
    <div
      class="py-8 px-4 sm:w-3/4 xl:w-3/5 mx-auto bg-blue-100 rounded-lg mt-5"
    >
      <h2 class="text-3xl font-extrabold mb-2 text-center my-4">
        Qual é a ordem do Conexo?
      </h2>
      <p class="mb-2 text-base font-normal text-gray-800">
        A ordem dos jogos em Conexo Ilimitado é aleatória, já embaralhamos a
        ordem das palavras que têm o mesmo tema em quatro grupos com
        antecedência, então quando você joga, a ordem em cada jogo é diferente,
        não há uma ordem consistente para referência.<br />
        <br />
        Além disso, o objetivo deste jogo é fazer com que se divirta e sinta
        prazer, esperamos que sinta alegria e satisfação durante o jogo.
        Esperamos sinceramente que goste deste jogo, e muitas funcionalidades
        ainda estão em desenvolvimento, fique atento!
      </p>
    </div>
  </div>

  <!-- 引入页脚 -->
  <Footer />
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import { goHome } from "/composables/utility";
import "animate.css";
import autoAnimate from "@formkit/auto-animate";
const data = useUnlimitedData(); // 获取composable中的历史游戏数据

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

const selectedWords = [];
const selectedTarget = [];
let randomNumber = 0;

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

// 初始化数据，该函数立即执行
(() => {
  for (let i = 0; i < data[0].startingBoard.length; i++) {
    localData.items.push({
      id: i,
      word: data[randomNumber].startingBoard[i],
    });
  }
})();

function selectGameData(event) {
  const key = dateToKey(event.target.value);
  localData.items.length = 0;
  localData.groups.length = 0;
  localData.attempts.length = 0;
  localData.status = "selecting";
  for (let i = 0; i < data[key].startingBoard.length; i++) {
    localData.items.push({
      id: i,
      word: data[key].startingBoard[i],
    });
  }
  randomNumber = key;
  console.log(randomNumber, key);
  selectedWords.length = 0;
  selectedTarget.length = 0;
}

function filteredData(start, end) {
  return (
    Object.keys(data)
      // 将键转换为数字，并过滤出落在指定范围内的键
      .map(Number)
      .filter((key) => key >= start && key <= end)
      // 使用reduce构造新的对象
      .reduce((accumulator, key) => {
        accumulator[key] = data[key];
        return accumulator;
      }, {})
  );
}

function keyToDate(key) {
  const startDate = new Date("2023-10-01"); // 使用 YYYY-MM-DD 格式
  startDate.setDate(startDate.getDate() + key); // 在起始日期上加上 key 天
  return `${startDate.getDate()}/${
    startDate.getMonth() + 1
  }/${startDate.getFullYear()}`;
}

function dateToKey(dateString) {
  // 先将输入的日期字符串从DD/MM/YYYY格式转换为Date对象
  const parts = dateString.split("/");
  const day = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10) - 1; // 月份是从0开始的
  const year = parseInt(parts[2], 10);
  const endDate = new Date(year, month, day);

  const startDate = new Date("2023-10-01"); // 起始日期

  // 计算两个日期之间的时间差（毫秒）
  const timeDiff = endDate - startDate;

  // 将时间差（毫秒）转换为天数
  const key = timeDiff / (1000 * 60 * 60 * 24);

  // 返回向下取整的天数，因为key应该是整数
  return Math.floor(key) + 1;
}

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
    for (let group of data[randomNumber].groups) {
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

  const infoText = `Conexo Ilimitado! Joguei conexojogo.com e consegui em ${localData.attempts.length} tentativas.`;
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

function reload() {
  if (process.client) {
    window.location.reload();
  }
}

useHead({
  title: "Conexo Ilimitado",
  meta: [
    {
      name: "description",
      content: "Modo de jogo ilimitado Conexo",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://conexojogo.com/conexoilimitado",
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
