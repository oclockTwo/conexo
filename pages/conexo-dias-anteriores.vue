<template>
  <div
    class="px-4 mx-auto mt-5 mb-16 w-full text-xl leading-7 text-neutral-800 max-w-5xl"
  >
    <h1 class="px-5 text-4xl">
      Conexo Jogo Dias Anteriores - Arquivo de Respostas
    </h1>
    <p class="px-5 m-2 text-2xl italic leading-7 text-gray-500">
      Aqui serão reunidos todos os dados históricos do Conexo Jogo
    </p>
    <img
      src="/images/history/history.jpeg"
      alt="conexo jogo dias anteriores"
      class="w-full h-auto align-middle mt-6 rounded-t-3xl"
    />
    <div class="px-6 pt-12 pb-8 text-xl leading-7 text-neutral-800 shadow-xl">
      <p
        class="mb-4 text-lg italic leading-7 text-center break-words text-neutral-800"
      >
        Aqui estão listados apenas os dados diários anteriores do Conexo Jogo.
        Se você quiser começar a jogar os jogos diários anteriores, você pode
        vir ao
        <a
          href="/conexoilimitado"
          class="leading-7 cursor-pointer text-green-500"
          target="_blank"
          >Conexo Ilimitado</a
        >, onde cada jogo é do passado.<br />
        <br />
        Além disso, se você quiser jogar o jogo diário mais recente, você pode
        vir ao
        <a
          href="/"
          class="leading-7 cursor-pointer text-green-500"
          target="_blank"
          >Conexo</a
        >. Comece o seu dia com alegria!<br />
      </p>
      <div class="text-xl leading-7 text-neutral-800">
        <h2 class="mb-5 text-2xl leading-9">
          Histórico de Soluções do Jogo Conexo - Arquivo de Respostas
        </h2>
        <p class="mb-4 break-words text-lg">
          Aqui estão todas as respostas anteriores do Conexo Jogo. Sempre que um
          novo quebra-cabeça for lançado, atualizaremos isso, portanto, fique
          atento!
        </p>
      </div>
      <div class="flex justify-evenly mb-4">
        <a href="/">
          <button class="btn btn-primary">Jogar Conexo</button>
        </a>
        <a href="/conexoilimitado">
          <button class="btn btn-accent">Jogar Conexo Ilimitado</button>
        </a>
      </div>
      <!-- 答案合集区域 -->
      <div class="flex flex-col gap-10">
        <div class="collapse bg-base-200">
          <input type="checkbox" />
          <div class="collapse-title text-xl text-center font-medium">
            <h3>Arquivo de Respostas - 11/2023</h3>
          </div>
          <div class="collapse-content">
            <div v-for="(value, key) in filteredData(153, 168)" :key="key">
              <p class="my-5 text-2xl leading-9">
                {{ keyToDate(Number(key)) }}
              </p>
              <ul v-for="(item, index) in value.groups" :key="index">
                <li class="pl-10 my-2">
                  {{ emojiText[index] }} <strong>{{ item.theme }}:</strong>
                  {{ item.words.join(", ") }}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="collapse bg-base-200">
          <input type="checkbox" />
          <div class="collapse-title text-xl text-center font-medium">
            <h3>Arquivo de Respostas - 11/2023</h3>
          </div>
          <div class="collapse-content">
            <div v-for="(value, key) in filteredData(123, 152)" :key="key">
              <p class="my-5 text-2xl leading-9">
                {{ keyToDate(Number(key)) }}
              </p>
              <ul v-for="(item, index) in value.groups" :key="index">
                <li class="pl-10 my-2">
                  {{ emojiText[index] }} <strong>{{ item.theme }}:</strong>
                  {{ item.words.join(", ") }}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="collapse bg-base-200">
          <input type="checkbox" />
          <div class="collapse-title text-xl text-center font-medium">
            <h3>Arquivo de Respostas - 12/2023</h3>
          </div>
          <div class="collapse-content">
            <div v-for="(value, key) in filteredData(91, 122)" :key="key">
              <p class="my-5 text-2xl leading-9">
                {{ keyToDate(Number(key)) }}
              </p>
              <ul v-for="(item, index) in value.groups" :key="index">
                <li class="pl-10 my-2">
                  {{ emojiText[index] }} <strong>{{ item.theme }}:</strong>
                  {{ item.words.join(", ") }}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="collapse bg-base-200">
          <input type="checkbox" />
          <div class="collapse-title text-xl text-center font-medium">
            <h3>Arquivo de Respostas - 12/2023</h3>
          </div>
          <div class="collapse-content">
            <div v-for="(value, key) in filteredData(61, 90)" :key="key">
              <p class="my-5 text-2xl leading-9">
                {{ keyToDate(Number(key)) }}
              </p>
              <ul v-for="(item, index) in value.groups" :key="index">
                <li class="pl-10 my-2">
                  {{ emojiText[index] }} <strong>{{ item.theme }}:</strong>
                  {{ item.words.join(", ") }}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="collapse bg-base-200">
          <input type="checkbox" />
          <div class="collapse-title text-xl text-center font-medium">
            <h3>Arquivo de Respostas - 11/2023</h3>
          </div>
          <div class="collapse-content">
            <div v-for="(value, key) in filteredData(31, 60)" :key="key">
              <p class="my-5 text-2xl leading-9">
                {{ keyToDate(Number(key)) }}
              </p>
              <ul v-for="(item, index) in value.groups" :key="index">
                <li class="pl-10 my-2">
                  {{ emojiText[index] }} <strong>{{ item.theme }}:</strong>
                  {{ item.words.join(", ") }}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="collapse bg-base-200">
          <input type="checkbox" />
          <div class="collapse-title text-xl text-center font-medium">
            <h3>Arquivo de Respostas - 10/2023</h3>
          </div>
          <div class="collapse-content">
            <div v-for="(value, key) in filteredData(0, 30)" :key="key">
              <p class="my-5 text-2xl leading-9">
                {{ keyToDate(Number(key)) }}
              </p>
              <ul v-for="(item, index) in value.groups" :key="index">
                <li class="pl-10 my-2">
                  {{ emojiText[index] }} <strong>{{ item.theme }}:</strong>
                  {{ item.words.join(", ") }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 引入页脚 -->
  <Footer />
</template>

<script setup>
const data = useUnlimitedData(); // 获取composable中的历史游戏数据

const emojiText = ["🔴", "🟢", "🟠", "🔵"];
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

useHead({
  title: "Conexo Jogo Dias Anteriores",
  meta: [
    {
      name: "description",
      content:
        "Histórico Completo dos Jogos Anteriores do Conexo Jogo - Coleção de Respostas",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://conexojogo.com/conexo-dias-anteriores",
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
