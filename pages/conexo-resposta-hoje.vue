<template>
  <div
    class="px-4 mx-auto mt-5 mb-16 w-full text-xl leading-7 text-neutral-800 max-w-5xl"
  >
    <h1 class="px-5 text-4xl">
      Respostas do Conexo de Hoje - Atualizações Diárias & Dicas -- {{ today }}
    </h1>
    <h2 class="px-5 m-2 text-2xl italic leading-7 text-gray-500">
      Os grupos Conexo para {{ today }} foram divulgados!
    </h2>
    <p class="px-5 m-2 text-2xl leading-7">
      Ir jogar
      <a
        href="/"
        class="leading-7 cursor-pointer text-green-500"
        target="_blank"
        >Conexo Jogo</a
      >
      e
      <a
        href="/conexoilimitado"
        class="leading-7 cursor-pointer text-green-500"
        target="_blank"
        >Conexo Ilimitado</a
      >
    </p>
    <img
      src="/images/0.png"
      alt="conexo de hoje"
      class="w-full h-auto align-middle mt-6 rounded-t-3xl"
    />
    <div class="px-6 pt-12 pb-8 text-xl leading-7 text-neutral-800 shadow-xl">
      <p
        class="mb-4 text-lg italic leading-7 text-center break-words text-neutral-800"
      >
        AVISO DE SPOILER - Conexo {{ today }} está disponível! Nossas dicas e
        sugestões úteis para respondê-lo e todas as respostas anteriores estão
        bem aqui.
      </p>
      <p class="mx-0 mt-0 mb-4 text-lg leading-7 break-words text-neutral-800">
        Por favor, um tamborilar... há um novo quebra-cabeça diário na área! O
        quebra-cabeça Conexo, similar ao
        <a
          href="https://term.ooo/"
          class="leading-7 text-blue-600 cursor-pointer"
          target="_blank"
          >Termo</a
        >, mas cinco vezes mais divertido! Após sua fase beta extremamente
        bem-sucedida. O jogo Conexo fará você cavar obsessivamente em seu
        dicionário para encontrar os quatro grupos de palavras que compartilham
        um fio comum.
      </p>
      <p class="mx-0 mt-0 mb-4 text-lg leading-7 break-words text-neutral-800">
        Precisa das respostas de hoje do Conexo? Então fique por aqui e continue
        rolando para spoilers! Se preferir resolver por conta própria, vá para a
        nossa página Conexo dica abaixo para revelar as dicas aos poucos.
      </p>
      <div class="flex justify-center my-10 text-xl leading-7 text-neutral-800">
        <a
          title="Conexo dica"
          href="/conexo-dica-hoje"
          class="leading-7 cursor-pointer"
          target="_blank"
          ><button
            class="p-2 text-lg leading-none text-center text-gray-700 normal-case bg-amber-300 bg-none rounded-3xl"
          >
            Revele as Dicas do Conexo Aqui...
          </button></a
        >
      </div>
      <div class="text-xl leading-7 text-neutral-800">
        <h2 class="mx-0 mb-5 mt-0 text-2xl leading-9">
          Quais são as respostas do Conexo hoje?
        </h2>
        <p class="mx-0 mb-4 mt-0 break-words text-lg">
          As respostas do Conexo de hoje não são muito complicadas (mas depende
          de com quem você fala). Você só precisa selecionar quatro grupos de
          quatro palavras na grade quatro por quatro.
        </p>
        <p class="mx-0 mb-4 mt-0 break-words text-lg">
          Atualizaremos este artigo diariamente com as respostas do Conexo de
          hoje para ajudá-lo a resolver a grade diária quatro por quatro. Acesse
          nossa página de dicas do Conexo abaixo se estiver procurando por uma
          ajudinha extra sem estragar as respostas.
        </p>
      </div>
      <div class="flex justify-center my-10 text-xl leading-7 text-neutral-800">
        <a
          title="Conexo dica"
          href="/conexo-dica-hoje"
          class="leading-7 cursor-pointer"
          target="_blank"
          ><button
            class="p-2 text-lg leading-none text-center text-gray-700 normal-case bg-amber-300 bg-none rounded-3xl"
          >
            Resolva o Quebra-cabeça de Hoje com Dicas
          </button></a
        >
      </div>
      <div class="text-xl leading-7 text-neutral-800">
        <h2 class="mb-5 text-2xl leading-9">
          Dicas para os Grupos de Conexões de Hoje
        </h2>
        <p class="mb-4 break-words text-lg">
          <strong class="text-neutral-800" style="font-weight: bolder"
            >ALERTA DE SPOILER!</strong
          >Se você não quer revelar as respostas do Conexo para o quebra-cabeça
          de hoje, PARE DE ROLAR porque temos os spoilers para as respostas do
          Conexo de hoje.
        </p>
        <h3 class="mb-2 text-base font-bold leading-6">
          Dica de resposta do Conexo
        </h3>
        <p class="mb-4 break-words text-lg">
          Quer resolver o jogo Conexo de hoje por conta própria para criar
          quatro grupos de quatro? Veja se alguma dessas dicas ajuda!
        </p>
        <div class="flex justify-evenly mb-4">
          <a href="/">
            <button class="btn btn-primary">Jogar Conexo</button>
          </a>
          <a href="/conexoilimitado">
            <button class="btn btn-accent">Jogar Conexo Ilimitado</button>
          </a>
        </div>
        <ol class="my-4 list-decimal pl-10 text-lg">
          <li class="text-left uppercase">
            🔴 Grupo Vermelho<br class="text-neutral-800" />{{ theme[0] }}.
          </li>
          <li class="text-left uppercase">
            🟢 Grupo Verde<br class="text-neutral-800" />{{ theme[1] }}.
          </li>
          <li class="text-left uppercase">
            🟠 Grupo Laranja<br class="text-neutral-800" />{{ theme[2] }}.
          </li>
          <li class="text-left uppercase">
            🔵 Grupo Azul<br class="text-neutral-800" />{{ theme[3] }}.
          </li>
        </ol>
      </div>
      <img
        loading="lazy"
        src="/images/SpoilerAlert.jpeg"
        alt="Conexo Spoiler Alert"
        class="block w-4/5 text-xl mx-auto"
      />
      <div class="text-xl leading-7 text-neutral-800 mt-10">
        <h2 class="mb-5 text-2xl leading-9">Respostas do Conexo de Hoje</h2>
        <p class="mb-4 break-words text-lg">
          Quer saber as respostas e grupos para o jogo diário Conexo? Nós temos
          eles aqui.
        </p>
        <div class="flex justify-evenly mb-4">
          <a href="/">
            <button class="btn btn-primary">Jogar Conexo</button>
          </a>
          <a href="/conexoilimitado">
            <button class="btn btn-accent">Jogar Conexo Ilimitado</button>
          </a>
        </div>
        <h3 class="mb-2 text-base font-bold leading-6">{{ today }}</h3>
        <ol class="my-4 list-decimal pl-10 text-lg" style="list-style: none">
          <li class="text-left uppercase">🔴 {{ words[0] }}</li>
          <li class="text-left uppercase">🟢 {{ words[1] }}</li>
          <li class="text-left uppercase">🟠 {{ words[2] }}</li>
          <li class="text-left uppercase">🔵 {{ words[3] }}</li>
        </ol>
      </div>
      <div class="text-xl leading-7 text-neutral-800">
        <h2 class="mx-0 mb-5 mt-0 text-2xl leading-9">Como eu jogo Conexo?</h2>
        <p class="mx-0 mb-4 mt-0 break-words text-lg">
          Se você é novo no jogo Conexo, aqui está como jogar. Na sua grade,
          você começará com dezesseis palavras que deverá colocar em quatro
          grupos. Para enviar um palpite de categoria, você precisa procurar por
          quatro palavras com um tema comum. Se o seu palpite estiver correto,
          ele mudará de cor; o Conexo tem quatro níveis de dificuldade. Cada
          grupo é dado uma cor que será revelada conforme você resolve.
        </p>
        <p class="mx-0 mb-4 mt-0 break-words text-lg">
          🔴 Vermelho - Simples e fácil
        </p>
        <p class="mx-0 mb-4 mt-0 break-words text-lg">
          🟢 Verde - Termos ou triviais potencialmente desconhecidos
        </p>
        <p class="mx-0 mb-4 mt-0 break-words text-lg">
          🟠 Laranja - Termos ou triviais potencialmente desconhecidos
        </p>
        <p class="mx-0 mb-4 mt-0 break-words text-lg">
          🔵 Azul - Categoria mais difícil de adivinhar
        </p>
      </div>
      <div class="text-xl leading-7 text-neutral-800">
        <h2 class="mb-5 text-2xl leading-9">
          Histórico de Soluções Conexo - Arquivo de Respostas
        </h2>
        <p class="mb-4 break-words text-lg">
          Aqui estão todas as respostas anteriores do jogo Conexo. Toda vez que
          um novo quebra-cabeça é lançado, atualizaremos isso, então fique
          ligado!
        </p>
        <div
          class="flex justify-center my-10 text-xl leading-7 text-neutral-800"
        >
          <a
            title="Conexo dias anteriores"
            href="/conexo-dias-anteriores"
            class="leading-7 cursor-pointer"
            target="_blank"
            ><button
              class="p-2 text-lg leading-none text-center text-gray-700 normal-case bg-green-300 bg-none rounded-3xl"
            >
              A coleção de todos os dados de jogos históricos
            </button></a
          >
        </div>
      </div>
      <div class="text-xl leading-7 text-neutral-800 mt-6">
        <h2 class="mx-0 mb-5 mt-0 text-2xl leading-9">
          Perguntas Frequentes sobre o jogo Conexo
        </h2>
        <p class="mx-0 mb-4 mt-0 break-words text-lg">
          Tem uma pergunta sobre o jogo diário de palavras Conexo? Veja se nós
          já respondemos aqui.
        </p>
        <h3 class="mx-0 mb-2 mt-0 text-base font-bold leading-6">
          A que horas sai o jogo Conexo?
        </h3>
        <p class="mx-0 mb-4 mt-0 break-words text-lg">
          O jogo diário Conexo é atualizado à meia-noite, horário local.
        </p>
        <h3 class="mx-0 mb-2 mt-0 text-base font-bold leading-6">
          Onde eu posso jogar o jogo Conexo?
        </h3>
        <p class="mx-0 mb-4 mt-0 break-words text-lg">
          Você pode jogar
          <a href="/" class="cursor-pointer text-blue-600">Conexo jogo</a>
        </p>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script setup>
import { reactive } from "vue";
const data = useData(); // 获取composable中的游戏数据

const [year, month, day] = getDate();
const today = ref(day + "/" + month + "/" + year);

const theme = reactive([]);
const words = reactive([]);

function initData() {
  const dayNumber = Number(day);
  const todayDataGroups = data[dayNumber - 1].groups;
  for (let i = 0; i < todayDataGroups.length; i++) {
    theme.push(todayDataGroups[i].theme);
    words.push(todayDataGroups[i].words.join(", "));
  }
}
initData();

function getDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1; // 加 1 以得到通常的月份数字
  const day = today.getDate();
  return [year, month, day];
}

useHead({
  title: "As respostas e dicas do Conexo de hoje",
  meta: [
    {
      name: "description",
      content:
        "Revele as respostas do Conexo de hoje e as dicas do Conexo de hoje, e explique as palavras do Conexo de hoje",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://conexojogo.com/conexo-resposta-hoje",
    },
    {
      rel: "icon",
      href: "/favicon.ico",
      type: "image/x-icon",
    },
  ],
});
</script>

<style scoped></style>
