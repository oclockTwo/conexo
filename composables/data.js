const data = {
  0: {
    groups: [
      {
        number: 1,
        theme: "Genética",
        words: ["fenótipo", "genótipo", "cariótipo", "mutação"],
      },
      {
        number: 2,
        theme: "Tipos de programas de TV",
        words: ["série", "reality", "noticiário", "variedades"],
      },
      {
        number: 3,
        theme: "Arquitetura",
        words: ["maquete", "planta", "desenho", "projeto"],
      },
      {
        number: 4,
        theme: "Amostras",
        words: ["palinha", "degustação", "excerto", "protótipo"],
      },
    ],
    startingBoard: [
      "desenho",
      "planta",
      "mutação",
      "série",
      "genótipo",
      "degustação",
      "excerto",
      "variedades",
      "reality",
      "noticiário",
      "projeto",
      "maquete",
      "palinha",
      "fenótipo",
      "protótipo",
      "cariótipo",
    ],
  },
  1: {
    groups: [
      {
        number: 1,
        theme: "Músicas do Emicida",
        words: ["principia", "amarelo", "mãe", "triunfo"],
      },
      {
        number: 2,
        theme: "Ato de vencer",
        words: ["conquista", "êxito", "sucesso", "vitória"],
      },
      {
        number: 3,
        theme: "Membros da família",
        words: ["irmã", "tia", "avó", "sobrinha"],
      },
      {
        number: 4,
        theme: "Para proteger da chuva",
        words: ["sombrinha", "capa", "galocha", "capuz"],
      },
    ],
    startingBoard: [
      "triunfo",
      "vitória",
      "sobrinha",
      "tia",
      "êxito",
      "irmã",
      "capa",
      "sucesso",
      "sombrinha",
      "galocha",
      "principia",
      "avó",
      "mãe",
      "conquista",
      "amarelo",
      "capuz",
    ],
  },
  2: {
    groups: [
      {
        number: 1,
        theme: "Órgãos dos sentidos",
        words: ["olhos", "ouvidos", "nariz", "pele"],
      },
      {
        number: 2,
        theme: "Coisas que países tem",
        words: ["bandeira", "língua", "moeda", "fronteiras"],
      },
      {
        number: 3,
        theme: "Sinônimos de bens ou riqueza",
        words: ["capital", "fortuna", "espólio", "fundos"],
      },
      {
        number: 4,
        theme: "Relacionados a piratas",
        words: ["tesouro", "navio", "papagaio", "mapa"],
      },
    ],
    startingBoard: [
      "navio",
      "espólio",
      "fortuna",
      "ouvidos",
      "pele",
      "olhos",
      "mapa",
      "nariz",
      "tesouro",
      "moeda",
      "capital",
      "fronteiras",
      "bandeira",
      "papagaio",
      "fundos",
      "língua",
    ],
  },
  3: {
    groups: [
      {
        number: 1,
        theme: "Dedos",
        words: ["indicador", "médio", "anelar", "mínimo"],
      },
      {
        number: 2,
        theme: "Que é muito pequeno",
        words: ["ínfimo", "diminuto", "minúsculo", "microscópico"],
      },
      {
        number: 3,
        theme: "Animais que vivem no gelo",
        words: ["morsa", "foca", "pinguim", "beluga"],
      },
      {
        number: 4,
        theme: "O Pequeno ___",
        words: ["príncipe", "polegar", "stuart little", "urso"],
      },
    ],
    startingBoard: [
      "microscópico",
      "anelar",
      "stuart little",
      "indicador",
      "pinguim",
      "médio",
      "polegar",
      "diminuto",
      "ínfimo",
      "foca",
      "mínimo",
      "morsa",
      "beluga",
      "minúsculo",
      "urso",
      "príncipe",
    ],
  },
};

export const useData = () => {
  return data;
};
