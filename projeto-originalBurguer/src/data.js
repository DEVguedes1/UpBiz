// src/data.js

export const menuData = [
    {
      categoria: "Original Especial",
      itens: [
        {
          id: "esp1",
          nome: "Original Banana",
          descricao: "Pão brioche, carne, queijo mussarela, bacon, banana, cebola caramelizada, molho original alho.",
          precos: [
            { tamanho: "Carne de 80g", valor: "R$21,00" },
            { tamanho: "Carne de 150g", valor: "R$26,00" }
          ]
        },
        {
          id: "esp2",
          nome: "Original Abacaxi",
          descricao: "Pão brioche, carne, queijo mussarela, abacaxi, cebola crispy, molho verde.",
          precos: [
            { tamanho: "Carne de 80g", valor: "R$22,00" },
            { tamanho: "Carne de 150g", valor: "R$27,00" }
          ]
        },
        // ... adicione os outros "Especiais" aqui (Images 1 e 6)
      ]
    },
    {
      categoria: "Original Smash's",
      itens: [
        {
          id: "smash1",
          nome: "Smash kids",
          descricao: "Pão com gergelim, Carne 80g, queijo cheddar e ketchup.",
          precos: [{ valor: "R$14,00" }]
        },
        {
          id: "smash2",
          nome: "Duplo smash",
          descricao: "Pão com gergelim, Duas Carnes 80g, queijo cheddar, cebola, picles, ketchup, mostarda.",
          precos: [{ valor: "R$25,00" }]
        },
         // ... adicione os outros Smashs aqui (Image 3)
      ]
    },
    {
      categoria: "Original Clássicos",
      itens: [
         {
          id: "class1",
          nome: "Original Clássico",
          descricao: "Pão brioche, carne artesanal, cheddar, maionese, alface, tomate, cebola roxa, calabresa, bacon, ovo e molho clássico.",
          precos: [
            { tamanho: "Clássico", valor: "R$19,00" },
            { tamanho: "Duplo", valor: "R$21,00" },
            { tamanho: "Triplo", valor: "R$25,00" }
          ]
        },
        
        {
            id:"class2",
            nome: "Original salada",
            descricao: "Pão brioche, carne 50g,maionese, alface, tomate, cebola.",
            precos: [{valor:"R$16,00"}]

        }
      ]
    },
      {
      categoria: "Hambúrgueres Leves",
      itens: [
         {
          id: "leve1",
          nome: "Original Frango salada",
          descricao: "Pão brioche, carne de frango, queijo mussarela, alface, tomate, cebola crispy, molho original BBQ.",
          precos: [
            { tamanho: "Carne de 80g", valor: "R$20,00" },
            { tamanho: "Carne de 150g", valor: "R$25,00" }
          ]
        },
        {
          id: "leve2",
          nome: "Original Grão de bico",
          descricao: "Pão brioche, Hambúrguer grão-de-bico, tomate, cebola roxa, molho verde.",
          precos: [
            { tamanho: "Carne de 80g", valor: "R$20,00" },
          ]
        },
        {
          id: "leve3",
          nome: "Original Frango com bacon",
          descricao: "Pão brioche, carne de frango, queijo mussarela, bacon,cebola crispy, maionese.",
          precos: [
            { tamanho: "Carne de 80g", valor: "R$20,00" },
            { tamanho: "Carne de 150g", valor: "R$26,00" }
          ]
        }
      ]
    },
    {
      categoria: "Original Petiscos",
      itens: [
        {
          id: "pet1",
          nome: "Batata frita",
          descricao: "Tradicional batata frita crocante.",
          precos: [
            { tamanho: "Tamanho P", valor: "R$17,00" },
            { tamanho: "Tamanho G", valor: "R$26,00" },
            { tamanho: "Batata kids", valor: "R$13,00" }
          ]
        },
        {
          id: "pet2",
          nome: "Bolinhos",
          descricao: "Porção com 10 unidades.",
          precos: [
            { tamanho: "Provolone", valor: "R$15,00" },
            { tamanho: "Charque", valor: "R$15,00" },
            { tamanho: "Bacalhau", valor: "R$24,00" }
          ]
        },
         // ... adicione os outros Petiscos aqui (Images 5 e 7)
      ]
    },
    {
      categoria: "Original Shake's",
      itens: [
        {
          id: "shake1",
          nome: "Ovomaltine",
          descricao: "400ml",
          precos: [{ valor: "R$15,00" }]
        },
        {
            id: "shakePara1",
            nome: "Guaraná do Amazonas (Sabores do Pará)",
            descricao: "400ml",
            precos: [{ valor: "R$17,00" }]
          },
         // ... adicione os outros Shakes aqui (Images 2 e 4)
      ]
    },
    {
      categoria: "Bebidas",
      itens: [
        {
          id: "beb1",
          nome: "Coca lata",
          descricao: "350ml",
          precos: [{ valor: "R$6,00" }]
        },
        {
          id: "beb2",
          nome: "Coca-cola 1L",
          descricao: "",
          precos: [{ valor: "R$11,00" }]
        },
         // ... adicione as outras bebidas aqui (Image 0)
      ]
    }
  ];