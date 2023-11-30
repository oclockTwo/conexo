const data = {
  0: {
    groups: [
      {
        number: 1,
        theme: "Objetos de iluminação",
        words: ["abajour", "lustre", "lanterna", "holofote"],
      },
      {
        number: 2,
        theme: "Personagens da Disney",
        words: ["simba", "pluto", "pumba", "bambi"],
      },
      {
        number: 3,
        theme: "Componentes de embarcações",
        words: ["popa", "mastro", "casco", "timão"],
      },
      {
        number: 4,
        theme: "Relacionados a desejos",
        words: ["vela", "poço", "estrela", "lâmpada"],
      },
    ],
    startingBoard: [
      "simba",
      "lustre",
      "lanterna",
      "lâmpada",
      "timão",
      "poço",
      "abajour",
      "vela",
      "estrela",
      "bambi",
      "pumba",
      "mastro",
      "holofote",
      "pluto",
      "popa",
      "casco",
    ],
  },
  1: {
    groups: [
      {
        number: 1,
        theme: "Áreas do direito",
        words: ["civil", "penal", "tributário", "comercial"],
      },
      {
        number: 2,
        theme: "Engenharias",
        words: ["elétrica", "computação", "química", "produção"],
      },
      {
        number: 3,
        theme: "Sinônimos de produção",
        words: ["fabricação", "manufatura", "confecção", "montagem"],
      },
      {
        number: 4,
        theme: "Setores de uma empresa",
        words: ["recursos humanos", "financeiro", "suprimentos", "jurídico"],
      },
    ],
    startingBoard: [
      "suprimentos",
      "produção",
      "elétrica",
      "tributário",
      "comercial",
      "recursos humanos",
      "montagem",
      "penal",
      "manufatura",
      "jurídico",
      "financeiro",
      "confecção",
      "computação",
      "civil",
      "química",
      "fabricação",
    ],
  },
  29: {
    groups: [
      {
        number: 1,
        theme: "Sentimentos do filme Divertidamente",
        words: ["raiva", "tristeza", "alegria", "medo"],
      },
      {
        number: 2,
        theme: "Relacionados à felicidade",
        words: ["contentamento", "satisfação", "júbilo", "regozijo"],
      },
      {
        number: 3,
        theme: "Cabeça (de) ____",
        words: ["fria", "quente", "vento", "dura"],
      },
      {
        number: 4,
        theme: "Sinônimos de fácil",
        words: ["mole", "simples", "tangível", "atingível"],
      },
    ],
    startingBoard: [
      "quente",
      "vento",
      "fria",
      "tangível",
      "satisfação",
      "dura",
      "contentamento",
      "tristeza",
      "regozijo",
      "atingível",
      "júbilo",
      "simples",
      "medo",
      "raiva",
      "alegria",
      "mole",
    ],
  },
};

export const useData = () => {
  return data;
};
