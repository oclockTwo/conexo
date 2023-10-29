<template>
  <main class="h-screen bg-gray-200 overflow-auto">
    <div class="flex flex-col mx-auto items-center mt-60">
      <img src="/logo.png" alt="conexo log" class="w-[50px] h-[50px]" />
      <h1 class="mt-5 text-2xl font-extrabold">CONEXO</h1>
      <p class="px-5 my-5 mx-0 text-center" style="max-width: 300px">
        Forme 4 grupos de 4 palavras que tenham algo em comum
      </p>
      <div>
        <div
          class="my-5 flex gap-4 border border-white bg-slate-800 p-2 text-white rounded-lg items-center"
        >
          <div class="pl-1 text-lg font-extrabold">Jogo diário</div>
          <div class="font-normal">{{ today }}</div>
          <a class="cursor-pointer" href="#gameArea"
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
          <a class="cursor-pointer"
            ><button
              class="items-center bg-sky-500 px-5 py-2 text-center text-base rounded-lg"
            >
              Jogar
            </button>
          </a>
        </div>
      </div>
    </div>
  </main>
  <!--  游戏区 -->
  <div class="h-screen bg-slate-900 overflow-auto" id="gameArea">
    <div
      class="flex w-full sm:max-w-[520px] px-4 mx-auto text-white items-center justify-between"
    >
      <font-awesome-icon
        @click="openDialog"
        icon="circle-question"
        class="text-xl cursor-pointer hover:text-gray-400"
      />
      <h2 class="text-3xl">Conexo Jogo</h2>
      <font-awesome-icon
        icon="plus"
        class="text-xl cursor-pointer hover:text-gray-400"
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
        <p class="mt-5 mb-8">❌🟧❌❌🟩🟪🟦</p>
        <button
          class="flex items-center py-2 px-5 text-base cursor-pointer bg-sky-500 rounded-lg hover:bg-sky-400"
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
          <span class="ml-2">Feedback</span>
        </button>
      </div>
    </div>

    <div
      class="flex w-full sm:max-w-[520px] items-center mx-auto flex-wrap flex-1 text-white"
      ref="cells"
    >
      <div class="flex w-full">
        <p class="text-semibold p-2 mr-2">{{ today }}</p>
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
        class="leading-6 font-semibold w-1/4 p-1"
      >
        <div class="cell-normal" @click="clickCell(item, $event.target)">
          {{ item.word }}
        </div>
      </div>
    </div>
  </div>

  <!-- 引入info弹出框 -->
  <Dialog :isOpen="isOpen" @closeModal="isOpen = false" />
</template>

<script setup>
import { ref, reactive, onMounted, watch } from "vue";
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
const selectedTarget = [];

const groupColor = ref({
  1: "bg-sky-500",
  2: "bg-rose-500",
  3: "bg-lime-500",
  4: "bg-violet-500",
});

const localData = reactive({
  attempts: [],
  groups: [],
  items: [],
  selected: [],
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
  let gameDatas = null;

  if (process.client) {
    gameDatas = localStorage.getItem("gameDatas");
  }

  if (gameDatas) {
    let gameDatasObj = JSON.parse(gameDatas);
    gameDatasObj = gameDatasObj[dayNumber];
    for (const key in gameDatasObj) {
      if (gameDatasObj.hasOwnProperty(key) && localData.hasOwnProperty(key)) {
        localData[key] = gameDatasObj[key];
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
  target.className = "cell-selected";
  localData.selected.push(item.word);
  selectedTarget.push(target);

  if (localData.selected.length === 4) {
    let isCorrect = false;
    let tempGroup = null;

    for (let group of data[Number(day - 1)].groups) {
      if (localData.selected.every((item) => group.words.includes(item))) {
        tempGroup = group;
        isCorrect = true;
        break;
      }
    }

    const attemptObj = {
      selected: Array.from(localData.selected),
    };

    if (isCorrect) {
      correctSet(tempGroup, attemptObj.selected);
      attemptObj.group = tempGroup.number;
    } else {
      incorrectSet();
    }

    localData.attempts.push(attemptObj);
    localData.selected.length = 0;
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

  // 从items中删除selected
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
    if (localData.groups.length === 4) {
      localData.status = "won";
    }
  }, 800);
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

useHead({
  title: "Conexo Jogo - Conexão de Termos em Português, Forme 4 grupos de 4 palavras que tenham algo em comum",
  meta: [
    {
      name: "description",
      content:
        "uma versão em português, similar ao Wordle e sem fim, do popular jogo de Conexões do New York Times. Melhore seu vocabulário e divirta-se de forma ilimitada encontrando grupos de palavras.",
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
    }
  ],
});
</script>

<style scoped>
.cell-normal {
  @apply py-6 bg-slate-700 text-center rounded-lg hover:bg-slate-600 cursor-pointer uppercase;
}
.cell-selected {
  @apply py-6 bg-sky-500 text-center rounded-lg uppercase;
}
.cell-1-color {
  @apply py-6 bg-sky-500 text-center rounded-lg uppercase;
}
.cell-2-color {
  @apply py-6 bg-rose-500 text-center rounded-lg uppercase;
}
.cell-3-color {
  @apply py-6 bg-lime-500 text-center rounded-lg uppercase;
}
.cell-4-color {
  @apply py-6 bg-violet-500 text-center rounded-lg uppercase;
}
</style>
