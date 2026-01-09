// data.js

export const menuData = [
    {
      categoria: "Original Especial",
      itens: [
        {
          id: "esp1",
          nome: "Original Banana",
          descricao: "Pão brioche, carne, queijo mussarela, bacon, banana, cebola caramelizada, molho original alho.",
          imagem: "imagens/hamburgueres/OriginalBanana.png",
          precos: [
            { tamanho: "Carne de 80g", valor: "R$21,00" },
            { tamanho: "Carne de 150g", valor: "R$26,00" }
          ]
        },
        {
          id: "esp2",
          nome: "Original Abacaxi",
          descricao: "Pão brioche, carne, queijo mussarela, abacaxi, cebola crispy, molho verde.",
          imagem: "imagens/hamburgueres/OriginalAbacaxi.png",
          precos: [
            { tamanho: "Carne de 80g", valor: "R$22,00" },
            { tamanho: "Carne de 150g", valor: "R$27,00" }
          ]
        },
        {
          id: "esp3",
          nome: "Original churrasco calabresa",
          descricao: "Pão brioche, carne, queijo mussarela, salada, molho especial, maionese.",
          imagem: "imagens/hamburgueres/OriginalChurrascoCalabresa.png",
          precos: [
            { tamanho: "Carne de 80g", valor: "R$20,00" },
          ]
        },
        {
          id: "esp4",
          nome: "Original quente tradicional",
          descricao: "Pão brioche, carne, queijo, salsicha, batata palha, ketchup e mostarda.",
          imagem: "imagens/hamburgueres/OriginalQuenteTradicional.png",
          precos: [
            { tamanho: "Tamanho P", valor: "R$13,00" },
            { tamanho: "Tamanho G", valor: "R$21,00"}
          ]
        },
        {
          id: "esp5",
          nome: "Original cheese crocante",
          descricao: "Pão brioche, molho especial, carne, queijo cheddar, cream cheese crocante e bacon.",
          imagem: "imagens/hamburgueres/OriginalCheeseCrocante.png",
          precos: [
            { tamanho: "Carne 80g", valor: "R$22,00" },
            { tamanho: "Carne 150g", valor: "R$26,00"}
          ]
        },
        {
          id: "esp6",
          nome: "Original cheese",
          descricao: "Pão brioche, molho especial, carne, queijo cheddar, cream cheese e bacon.",
          imagem: "imagens/hamburgueres/OriginalCheese.png",
          precos: [
            { tamanho: "Carne 80g", valor: "R$21,00" },
            { tamanho: "Carne 150g", valor: "R$25,00"}
          ]
        },
        {
          id: "esp7",
          nome: "O Original",
          descricao: "Pão brioche, molho original, carne, queijo mussarela, cebola crispy e bacon.",
          imagem: "imagens/hamburgueres/Original.png",
          precos: [
            { tamanho: "Carne 80g", valor: "R$22,00" },
            { tamanho: "Carne 150g", valor: "R$26,00"}
          ]
        },
        {
          id: "esp8",
          nome: "Original BBQ",
          descricao: "Pão brioche, molho BBQ, carne, queijo cheddar, alface e cebola roxa.",
          imagem: "imagens/hamburgueres/OriginalBBQ.png",
          precos: [
            { tamanho: "Carne 80g", valor: "R$21,00" },
            { tamanho: "Carne 150g", valor: "R$25,00"}
          ]
        },
        {
          id: "esp9",
          nome: "Original onion rings",
          descricao: "Pão australiano, maionese, carne, queijo cheddar, bacon, onion rings e molho BBQ.",
          imagem: "imagens/hamburgueres/OriginalOnionRings.png",
          precos: [
            { tamanho: "Carne 80g", valor: "R$23,00" },
            { tamanho: "Carne 150g", valor: "R$27,00"}
          ]
        },
        {
          id: "esp10",
          nome: "Original cheddar",
          descricao: "Pão brioche, carne, molho creme cheddar.",
          imagem: "imagens/hamburgueres/OriginalCheddar.png",
          precos: [
            { tamanho: "Carne 80g", valor: "R$21,00" },
            { tamanho: "Carne 150g", valor: "R$25,00"}
          ]
        }
      ]
    },
    {
      categoria: "Original Smash's",
      itens: [
        {
          id: "smash1",
          nome: "Smash kids",
          descricao: "Pão com gergelim, Carne 80g, queijo cheddar e ketchup.",
          imagem: "imagens/hamburgueres/smashs/SmashKids.png",
          precos: [{ valor: "R$14,00" }]
        },
        {
          id: "smash2",
          nome: "Duplo smash",
          descricao: "Pão com gergelim, Duas Carnes 80g, queijo cheddar, cebola, picles, ketchup, mostarda.",
          imagem: "imagens/hamburgueres/smashs/DuploSmash.png",
          precos: [{ valor: "R$25,00" }]
        },
        {
          id: "smash3",
          nome: "Bigsmash",
          descricao: "Pão com gergelim, Duas carne 80g, queijo cheddar, cebola, alface, picles e molho americano.",
          imagem: "imagens/hamburgueres/smashs/BigSmash.png",
          precos: [{ valor: "R$26,00" }]
        },
        {
          id: "smash4",
          nome: "Smash",
          descricao: "Pão com gergelim, Carne 80g, queijo cheddar, cebola, picles, mostarda e ketchup.",
          imagem: "imagens/hamburgueres/smashs/Smash.png",
          precos: [{ valor: "R$20,00" }]
        },
        {
          id: "smash5",
          nome: "Combo kids",
          descricao: "Smash + batata frita + relogio + milkshake(morango ou chocolate).",
          imagem: "imagens/hamburgueres/smashs/ComboKids.png",
          precos: [{ valor: "R$37,99" }]
        },
        {
          id: "smash6",
          nome: "Combo kids 2",
          descricao: "Smash + batata frita + relogio + refrigerante ou suco.",
          imagem: "imagens/hamburgueres/smashs/ComboKids2.png",
          precos: [{ valor: "R$31,99" }]
        }
      ]
    },
    {
      categoria: "Original Clássicos",
      itens: [
         {
          id: "class1",
          nome: "Original Clássico",
          descricao: "Pão brioche, carne artesanal, cheddar, maionese, alface, tomate, cebola roxa, calabresa, bacon, ovo e molho clássico.",
          imagem: "imagens/hamburgueres/classicos/OriginalClássico.png",
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
            imagem: "imagens/hamburgueres/classicos/OriginalSalada.png",
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
          imagem: "imagens/hamburgueres/leves/OriginalFrangoSalada.png",
          precos: [
            { tamanho: "Carne de 80g", valor: "R$20,00" },
            { tamanho: "Carne de 150g", valor: "R$25,00" }
          ]
        },
        {
          id: "leve2",
          nome: "Original Grão de bico",
          descricao: "Pão brioche, Hambúrguer grão-de-bico, tomate, cebola roxa, molho verde.",
          imagem: "imagens/hamburgueres/leves/OriginalGraodeBico.png",
          precos: [
            { tamanho: "Carne de 80g", valor: "R$20,00" },
          ]
        },
        {
          id: "leve3",
          nome: "Original Frango com bacon",
          descricao: "Pão brioche, carne de frango, queijo mussarela, bacon,cebola crispy, maionese.",
          imagem: "imagens/hamburgueres/leves/OriginalFrangoComBacon.png",
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
          imagem: "imagens/petiscos/BatataFrita.png",
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
          imagem: "imagens/petiscos/Bolinhos.png",
          precos: [
            { tamanho: "Provolone", valor: "R$15,00" },
            { tamanho: "Charque", valor: "R$15,00" },
            { tamanho: "Bacalhau", valor: "R$24,00" }
          ]
        },
        {
          id: "pet3",
          nome: "Coxinha",
          descricao: "10 Unidades, acompanha molho especial .",
          imagem: "imagens/petiscos/coxinhas.png",
          precos: [{ valor: "R$15,00" }]
        },
        {
          id: "pet4",
          nome: "Original nuggets",
          descricao: "8 Unidades, acompanha molho especial .",
          imagem: "imagens/petiscos/nuggets.png",
          precos: [{ valor: "R$15,00" }]
        },
        {
          id: "pet5",
          nome: "Mini churros",
          descricao: "10 Unidades, acompanha molho especial .",
          imagem: "imagens/petiscos/minichurros.png",
          precos: [{ valor: "R$14,00" }]
        },
        {
          id: "pet6",
          nome: "Dadinho de tapioca",
          descricao: "10 Unidades, acompanha molho especial .",
          imagem: "imagens/petiscos/dadinhodetapioca.png",
          precos: [{ valor: "R$15,00" }]
        },
        {
          id: "pet7",
          nome: "Camarão empanado",
          descricao: "10 Unidades, acompanha molho especial .",
          imagem: "imagens/petiscos/camaraoempanado.png",
          precos: [{ valor: "R$28,00" }]
        },
        {
          id: "pet8",
          nome: "Bolinho de feijoada",
          descricao: "10 Unidades, acompanha molho especial .",
          imagem: "imagens/petiscos/bolinhodefeijoada.png",
          precos: [{ valor: "R$15,00" }]
        },
        {
          id: "pet9",
          nome: "Anéis de cebola",
          descricao: "10 Unidades, acompanha molho especial .",
          imagem: "imagens/petiscos/aneisdecebola.png",
          precos: [{ valor: "R$15,00" }]
        },
        {
          id: "pet10",
          nome: "Batata carinha",
          imagem: "imagens/petiscos/batataCarinha.png",
          precos: [{tamanho:"8 unidades", valor: "R$13,00" }]
        },
        {
          id: "pet11",
          nome: "Batata com cheddar e bacon",
          imagem: "imagens/petiscos/batatacomcheddarebacon.png",
          precos: [{tamanho:"tamanho G", valor: "R$31,00" }]
        },
        {
          id: "pet12",
          nome: "Batata ondulada",
          imagem: "imagens/petiscos/batataondulada.png",
          precos: [
            {tamanho:"Tamanho P", valor: "R$17,00"},
            {tamanho:"Tamanho G", valor: "R$26,00"}
          ]
        }
      ]
    },
    {
      categoria: "Original Shake's",
      itens: [
        {
          id: "shake1",
          nome: "Ovomaltine",
          descricao: "400ml",
          imagem: "imagens/milkshakes/Ovomaltine.png",
          precos: [{ valor: "R$15,00" }]
        },
        {
          id: "shake2",
          nome: "Morango ovomaltine",
          descricao: "400ml",
          imagem: "imagens/milkshakes/Morangocomovomaltine.png",
          precos: [{ valor: "R$16,00" }]
        },
        {
          id: "shake3",
          nome: "Chocolate",
          descricao: "400ml",
          imagem: "imagens/milkshakes/Chocolate.png",
          precos: [{ valor: "R$15,00" }]
        },
        {
          id: "shake4",
          nome: "Delicia de abacaxi",
          descricao: "400ml",
          imagem: "imagens/milkshakes/Deliciadeabacaxi.png",
          precos: [{ valor: "R$15,00" }]
        },
        {
          id: "shake5",
          nome: "Morango",
          descricao: "400ml",
          imagem: "imagens/milkshakes/Morango.png",
          precos: [{ valor: "R$15,00" }]
        },
        {
          id: "shake6",
          nome: "chocomenta",
          descricao: "400ml",
          imagem: "imagens/milkshakes/Chocomenta.png",
          precos: [{ valor: "R$15,00" }]
        },
        {
          id: "shake7",
          nome: "Pedacinho do céu ou blue kids",
          descricao: "400ml",
          imagem: "imagens/milkshakes/pedacinhodoceu.png",
          precos: [{ valor: "R$15,00" }]
        },
        {
          id: "shake8",
          nome: "Oreo (morango ou baunilha)",
          descricao: "400ml",
          imagem: "imagens/milkshakes/Oreo.png",
          precos: [{ valor: "R$16,00" }]
        },
        {
          id: "shake9",
          nome: "Cupuaçu",
          descricao: "400ml",
          imagem: "imagens/milkshakes/Cupuacu.png",
          precos: [{ valor: "R$17,00" }]
        },
        {
            id: "shakePara1",
            nome: "Guaraná do Amazonas (Sabores do Pará)",
            descricao: "400ml",
            imagem: "imagens/milkshakes/GuaranadoAmazonas.png",
            precos: [{ valor: "R$17,00" }]
        },
        {
            id: "shakePara2",
            nome: "Cupuaçu com açai (Sabores do Pará)",
            descricao: "400ml",
            imagem: "imagens/milkshakes/CupuacuComAcai.png",
            precos: [{ valor: "R$17,00" }]
        },
        {
            id: "shakePara3",
            nome: "Açai (Sabores do Pará)",
            descricao: "400ml",
            imagem: "imagens/milkshakes/Acai.png",
            precos: [{ valor: "R$17,00" }]
        },
        {
          id: "shake10",
          nome: "Original shake zero açúcar",
          descricao: "400ml",
          imagem: "imagens/milkshakes/OriginalShakeZeroAçúcar.png",
          precos: [{ valor: "R$17,00" }]
        },
        {
          id: "shake11",
          nome: "Paçoca",
          descricao: "400ml",
          imagem: "imagens/milkshakes/Paçoca.png",
          precos: [{ valor: "R$16,00" }]
        },
        {
          id: "shake12",
          nome: "Original shake café",
          descricao: "(Café, Expresso, Capuccino) 400ml",
          imagem: "imagens/milkshakes/cafe.png",
          precos: [{ valor: "R$17,00" }]
        }
      ]
    },
    {
      categoria: "Bebidas",
      itens: [
        {
          id: "beb1",
          nome: "Coca lata",
          descricao: "350ml",
          imagem: "imagens/bebidas/CocaLata.png",
          precos: [{ valor: "R$6,00" }]
        },
        {
          id: "beb2",
          nome: "Coca lata zero",
          descricao: "350ml",
          imagem: "imagens/bebidas/CocaLataZero.png",
          precos: [{ valor: "R$6,00" }]
        },
        {
          id: "beb3",
          nome: "Guaraná antártica lata",
          descricao: "350ml",
          imagem: "imagens/bebidas/GuaranaLata.png",
          precos: [{ valor: "R$6,00" }]
        },
        {
          id: "beb4",
          nome: "Schweppes",
          descricao: "350ml",
          imagem: "imagens/bebidas/Schweppes.png",
          precos: [{ valor: "R$6,00" }]
        },
        {
          id: "beb5",
          nome: "Coca-cola 1L",
          descricao: "",
          imagem: "imagens/bebidas/Coca1L.png",
          precos: [{ valor: "R$11,00" }]
        },
        {
          id: "beb6",
          nome: "H2OH! (Limoneto)",
          descricao: "500ml",
          imagem: "imagens/bebidas/H2OH!.png",
          precos: [{ valor: "R$7,00" }]
        },
        {
          id: "beb7",
          nome: "Guaraná antártica lata zero",
          descricao: "350ml",
          imagem: "imagens/bebidas/GuaranaZero.png",
          precos: [{ valor: "R$6,00" }]
        }, 
        {
          id: "beb8",
          nome: "água mineral (com gás)",
          descricao: "500ml",
          imagem: "imagens/bebidas/Aguacomgas.png",
          precos: [{ valor: "R$3,00" }]
        },
        {
          id: "beb9",
          nome: "H2OH! (Limão)",
          descricao: "500ml",
          imagem: "imagens/bebidas/H2OH!limao.png",
          precos: [{ valor: "R$7,00" }]
        },
        {
          id: "beb10",
          nome: "Guaraná antártica pet zero",
          descricao: "200ml",
          imagem: "imagens/bebidas/GuaranaPetZero.png",
          precos: [{ valor: "R$4,00" }]
        },
        {
          id: "beb11",
          nome: "Guaraná antártica pet",
          descricao: "200ml",
          imagem: "imagens/bebidas/GuaranaPet.png",
          precos: [{ valor: "R$4,00" }]
        },
        {
          id: "beb12",
          nome: "água mineral (sem gás)",
          descricao: "500ml",
          imagem: "imagens/bebidas/Aguasemgas.png",
          precos: [{ valor: "R$2,00" }]
        },
        {
          id: "beb13",
          nome: "Coca pet",
          descricao: "250ml",
          imagem: "imagens/bebidas/CocaPet.png",
          precos: [{ valor: "R$5,00" }]
        },
        {
          id: "beb14",
          nome: "Coca pet zero",
          descricao: "250ml",
          imagem: "imagens/bebidas/CocaPetZero.png",
          precos: [{ valor: "R$5,00" }]
        }
      ]
    }
  ];