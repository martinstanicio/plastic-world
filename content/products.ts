import { Product } from "@/lib/products";

const bazar: Product[] = [
  {
    slug: "organizador-mediano-con-tapa",
    name: "Organizador mediano con tapa",
    code: "2604/00",
    price: 4901,
    imgs: ["/productos/organizador-mediano-con-tapa.jpg"],
    tags: ["canastos y estuches"],
  },
  {
    slug: "organizador-mediano-sin-tapa",
    name: "Organizador mediano sin tapa",
    code: "2604/99",
    price: 4459,
    imgs: ["/productos/organizador-mediano-sin-tapa.jpg"],
    tags: ["canastos y estuches"],
  },
  {
    slug: "organizador-grande-con-tapa",
    name: "Organizador grande con tapa",
    code: "2605/00",
    price: 5434,
    imgs: ["/productos/organizador-grande-con-tapa.jpg"],
    tags: ["canastos y estuches"],
  },
  {
    slug: "organizador-grande-sin-tapa",
    name: "Organizador grande sin tapa",
    code: "2605/99",
    price: 4901,
    imgs: ["/productos/organizador-grande-sin-tapa.jpg"],
    tags: ["canastos y estuches"],
  },
  {
    slug: "canasto-enrejado-chico",
    name: "Canasto enrejado chico",
    code: "2601/00",
    price: 2210,
    imgs: ["/productos/canasto-enrejado-chico.jpg"],
    tags: ["canastos y estuches"],
  },
  {
    slug: "canasto-enrejado-grande",
    name: "Canasto enrejado grande",
    code: "2602/00",
    price: 2802,
    imgs: ["/productos/canasto-enrejado-grande.jpg"],
    tags: ["canastos y estuches"],
  },
  {
    slug: "canasto-dos-partes",
    name: "Canasto dos partes",
    code: "2603/00",
    price: 3432,
    imgs: ["/productos/canasto-dos-partes.jpg"],
    tags: ["canastos y estuches"],
  },
  {
    slug: "cesto-para-ropa",
    name: "Cesto para ropa",
    code: "2606/00",
    price: 5590,
    imgs: ["/productos/cesto-para-ropa.jpg"],
    tags: ["canastos y estuches"],
  },
  {
    slug: "estuche-chico",
    name: "Estuche chico (12.5*7*2)",
    code: "2609/00",
    price: 845,
    imgs: ["/productos/estuche-chico.jpg"],
    tags: ["canastos y estuches"],
  },
  {
    slug: "estuche-mediano",
    name: "Estuche mediano (17*10*2)",
    code: "2610/00",
    price: 962,
    imgs: ["/productos/estuche-mediano.jpg"],
    tags: ["canastos y estuches"],
  },
  {
    slug: "estuche-chico-con-dijes",
    name: "Estuche chico con dijes",
    code: "2609/99",
    price: 2516,
    imgs: ["/productos/estuche-chico-con-dijes.jpg"],
    tags: ["canastos y estuches"],
  },
  {
    slug: "estuche-mediano-con-dijes",
    name: "Estuche mediano con dijes",
    code: "2610/99",
    price: 3504,
    imgs: ["/productos/estuche-mediano-con-dijes.jpg"],
    tags: ["canastos y estuches"],
  },

  {
    slug: "banquito-infantil-cuadrado",
    name: "Banquito infantil cuadrado",
    code: "4001/00",
    price: 3172,
    imgs: ["/productos/banquito-infantil-cuadrado.jpg"],
    tags: ["banquetas y banquitos"],
  },
  {
    slug: "banquito-infantil-redondo",
    name: "Banquito infantil redondo",
    code: "4002/00",
    price: 3172,
    imgs: ["/productos/banquito-infantil-redondo.jpg"],
    tags: ["banquetas y banquitos"],
  },
  {
    slug: "banquito-infantil-oso",
    name: "Banquito infantil oso",
    code: "4003/00",
    price: 3172,
    imgs: ["/productos/banquito-infantil-oso.jpg"],
    tags: ["banquetas y banquitos"],
  },
  {
    slug: "banquito-infantil-gato",
    name: "Banquito infantil gato",
    code: "4004/00",
    price: 3172,
    imgs: ["/productos/banquito-infantil-gato.jpg"],
    tags: ["banquetas y banquitos"],
  },
  {
    slug: "taburete-rhino",
    name: "Taburete rhino",
    code: "4005/00",
    price: 10335,
    imgs: ["/productos/taburete-rhino.jpg"],
    tags: ["banquetas y banquitos"],
  },
  {
    slug: "banqueta-rectangular",
    name: "Banqueta rectangular",
    code: "4006/00",
    price: 2802,
    imgs: ["/productos/banqueta-rectangular.jpg"],
    tags: ["banquetas y banquitos"],
  },
  {
    slug: "banqueta-redonda",
    name: "Banqueta redonda",
    code: "4007/00",
    price: 3335,
    imgs: ["/productos/banqueta-redonda.jpg"],
    tags: ["banquetas y banquitos"],
  },
  {
    slug: "banco-infantil-con-respaldo",
    name: "Banco infantil con respaldo",
    code: "4008/00",
    price: 6838,
    imgs: ["/productos/banco-infantil-con-respaldo.jpg"],
    tags: ["banquetas y banquitos"],
  },
  {
    slug: "sillita-infantil-con-respaldo",
    name: "Sillita infantil con respaldo",
    code: "4009/00",
    price: 3172,
    imgs: ["/productos/sillita-infantil-con-respaldo.jpg"],
    tags: ["banquetas y banquitos"],
  },

  {
    slug: "mesa-plastica-infantil",
    name: "Mesa plástica infantil",
    code: "7001/00",
    price: 7189,
    imgs: ["/productos/mesa-plastica-infantil.jpg"],
    tags: ["mesas"],
  },
  {
    slug: "mesa-plastica-infantil-con-iml",
    name: "Mesa plástica infantil con IML",
    code: "7001/99",
    price: 8905,
    imgs: ["/productos/mesa-plastica-infantil-con-iml.jpg"],
    tags: ["mesas"],
  },

  {
    slug: "vaso-stark",
    name: "Vaso stark",
    code: "5001/00",
    price: 1502,
    imgs: ["/productos/vaso-stark.jpg"],
    tags: ["vasos y tazas"],
  },
  {
    slug: "vaso-stark-con-brillo",
    name: "Vaso stark con brillo",
    code: "5001/99",
    price: 1690,
    imgs: ["/productos/vaso-stark-con-brillo.jpg"],
    tags: ["vasos y tazas"],
  },
  {
    slug: "vaso-sorbete-grande",
    name: "Vaso sorbete grande",
    code: "5002/00",
    price: 897,
    imgs: ["/productos/vaso-sorbete-grande.jpg"],
    tags: ["vasos y tazas"],
  },
  {
    slug: "vaso-sorbete-mediano",
    name: "Vaso sorbete mediano",
    code: "5003/00",
    price: 806,
    imgs: ["/productos/vaso-sorbete-mediano.jpg"],
    tags: ["vasos y tazas"],
  },
  {
    slug: "vaso-grande-con-tapa",
    name: "Vaso grande con tapa",
    code: "5002/01",
    price: 897,
    imgs: ["/productos/vaso-grande-con-tapa.jpg"],
    tags: ["vasos y tazas"],
  },
  {
    slug: "vaso-mediano-con-tapa",
    name: "Vaso mediano con tapa",
    code: "5003/01",
    price: 806,
    imgs: ["/productos/vaso-mediano-con-tapa.jpg"],
    tags: ["vasos y tazas"],
  },
  {
    slug: "vaso-largo-con-tapon",
    name: "Vaso largo con tapón",
    code: "5004/00",
    price: 1027,
    imgs: ["/productos/vaso-largo-con-tapon.jpg"],
    tags: ["vasos y tazas"],
  },
  {
    slug: "vaso-largo-con-tapon-con-sticker",
    name: "Vaso largo con tapón con sticker",
    code: "5004/99",
    price: 1216,
    imgs: ["/productos/vaso-largo-con-tapon-con-sticker.jpg"],
    tags: ["vasos y tazas"],
  },
  {
    slug: "taza-infantil",
    name: "Taza infantil",
    code: "5005/00",
    price: 1339,
    imgs: ["/productos/taza-infantil.jpg"],
    tags: ["vasos y tazas"],
  },
  {
    slug: "taza-acrilica-sin-papel",
    name: "Taza acrílica sin papel",
    code: "5005/99",
    price: 1157,
    imgs: ["/productos/taza-acrilica-sin-papel.jpg"],
    tags: ["vasos y tazas"],
  },
  {
    slug: "taza-grande",
    name: "Taza grande",
    code: "5006/00",
    price: 475,
    imgs: ["/productos/taza-grande.jpg"],
    tags: ["vasos y tazas"],
  },
  {
    slug: "taza-grande-con-sticker",
    name: "Taza grande con sticker",
    code: "5006/99",
    price: 650,
    imgs: ["/productos/taza-grande-con-sticker.jpg"],
    tags: ["vasos y tazas"],
  },
  {
    slug: "vaso-grande-con-sticker",
    name: "Vaso grande con sticker",
    code: "5002/99",
    price: 1014,
    imgs: ["/productos/vaso-grande-con-sticker.jpg"],
    tags: ["vasos y tazas"],
  },
  {
    slug: "vaso-grande-con-frase",
    name: "Vaso grande con frase",
    code: "5002/114",
    price: 1014,
    imgs: ["/productos/vaso-grande-con-frase.jpg"],
    tags: ["vasos y tazas"],
  },
  {
    slug: "vaso-mediano-con-sticker",
    name: "Vaso mediano con sticker",
    code: "5003/99",
    price: 943,
    imgs: ["/productos/vaso-mediano-con-sticker.jpg"],
    tags: ["vasos y tazas"],
  },
  {
    slug: "vaso-mediano-con-frase",
    name: "Vaso mediano con frase",
    code: "5003/114",
    price: 943,
    imgs: ["/productos/vaso-mediano-con-frase.jpg"],
    tags: ["vasos y tazas"],
  },
  {
    slug: "vaso-chico",
    name: "Vaso chico",
    code: "5007/00",
    price: 169,
    imgs: ["/productos/vaso-chico.jpg"],
    tags: ["vasos y tazas"],
  },
  {
    slug: "vaso-pinguino",
    name: "Vaso pingüino",
    code: "5008/00",
    price: 195,
    imgs: ["/productos/vaso-pinguino.jpg"],
    tags: ["vasos y tazas"],
  },
  {
    slug: "vaso-piquito",
    name: "Vaso piquito",
    code: "5018/00",
    price: 208,
    imgs: ["/productos/vaso-piquito.jpg"],
    tags: ["vasos y tazas"],
  },
  {
    slug: "vaso-cuenco-grill",
    name: "Vaso cuenco grill",
    code: "5009/00",
    price: 475,
    imgs: ["/productos/vaso-cuenco-grill.jpg"],
    tags: ["vasos y tazas"],
  },
  {
    slug: "vaso-pinta",
    name: "Vaso pinta",
    code: "5010/00",
    price: 533,
    imgs: ["/productos/vaso-pinta.jpg"],
    tags: ["vasos y tazas"],
  },
  {
    slug: "taza-vintage",
    name: "Taza vintage",
    code: "5011/00",
    price: 585,
    imgs: ["/productos/taza-vintage.jpg"],
    tags: ["vasos y tazas"],
  },
  {
    slug: "taza-love",
    name: "Taza love",
    code: "5012/00",
    price: 585,
    imgs: ["/productos/taza-love.jpg"],
    tags: ["vasos y tazas"],
  },
  {
    slug: "taza-trebol",
    name: "Taza trébol",
    code: "5013/00",
    price: 559,
    imgs: ["/productos/taza-trebol.jpg"],
    tags: ["vasos y tazas"],
  },
  {
    slug: "jarro-mug-con-tapa",
    name: "Jarro mug con tapa",
    code: "5014/00",
    price: 663,
    imgs: ["/productos/jarro-mug-con-tapa.jpg"],
    tags: ["vasos y tazas"],
  },
  {
    slug: "jarro-capuchino",
    name: "Jarro capuchino",
    code: "5014/99",
    price: 585,
    imgs: ["/productos/jarro-capuchino.jpg"],
    tags: ["vasos y tazas"],
  },
  {
    slug: "vaso-mug",
    name: "Vaso mug",
    code: "5015/00",
    price: 312,
    imgs: ["/productos/vaso-mug.jpg"],
    tags: ["vasos y tazas"],
  },
  {
    slug: "vaso-mug-loco",
    name: "Vaso mug loco",
    code: "5015/01",
    price: 429,
    imgs: ["/productos/vaso-mug-loco.jpg"],
    tags: ["vasos y tazas"],
  },
  {
    slug: "set-x4-vaso-mug",
    name: "Set x4 vaso mug",
    code: "5015/99",
    price: 1248,
    imgs: ["/productos/set-x4-vaso-mug.jpg"],
    tags: ["vasos y tazas"],
  },
  {
    slug: "jarro-600-ml",
    name: "Jarro 600 ml",
    code: "5016/00",
    price: 949,
    imgs: ["/productos/jarro-600-ml.jpg"],
    tags: ["vasos y tazas"],
  },
  {
    slug: "vaso-labubu",
    name: "Vaso labubu",
    code: "VSLABU 01",
    price: 1050,
    imgs: ["/productos/vaso-labubu.jpg"],
    tags: ["vasos y tazas"],
  },

  {
    slug: "vaso-decorado",
    name: "Vaso decorado",
    code: "5002/02",
    price: 943,
    imgs: [
      "/productos/vaso-decorado-01.jpg",
      "/productos/vaso-decorado-02.jpg",
      "/productos/vaso-decorado-03.jpg",
      "/productos/vaso-decorado-04.jpg",
      "/productos/vaso-decorado-05.jpg",
      "/productos/vaso-decorado-06.jpg",
      "/productos/vaso-decorado-07.jpg",
      "/productos/vaso-decorado-08.jpg",
      "/productos/vaso-decorado-09.jpg",
      "/productos/vaso-decorado-10.jpg",
      "/productos/vaso-decorado-11.jpg",
    ],
    tags: ["vasos con motivo"],
  },
  {
    slug: "vaso-decorado-2-colores",
    name: "Vaso decorado 2 colores",
    code: "5002/03",
    price: 1073,
    imgs: [
      "/productos/vaso-decorado-2-colores-01.jpg",
      "/productos/vaso-decorado-2-colores-02.jpg",
      "/productos/vaso-decorado-2-colores-03.jpg",
      "/productos/vaso-decorado-2-colores-04.jpg",
      "/productos/vaso-decorado-2-colores-05.jpg",
    ],
    tags: ["vasos con motivo"],
  },

  {
    slug: "colador-giratorio",
    name: "Colador giratorio",
    code: "9001/00",
    price: 2327,
    imgs: ["/productos/colador-giratorio.jpg"],
    tags: ["articulos de cocina"],
  },
  {
    slug: "escurridor-ovalado",
    name: "Escurridor ovalado",
    code: "9005/00",
    price: 858,
    imgs: ["/productos/escurridor-ovalado.jpg"],
    tags: ["articulos de cocina"],
  },
  {
    slug: "escurridor-para-bacha",
    name: "Escurridor para bacha",
    code: "9006/00",
    price: 2431,
    imgs: ["/productos/escurridor-para-bacha.jpg"],
    tags: ["articulos de cocina"],
  },
  {
    slug: "big-cupcake",
    name: "Big cupcake",
    code: "9007/00",
    price: 585,
    imgs: ["/productos/big-cupcake.jpg"],
    tags: ["articulos de cocina"],
  },
  {
    slug: "bowl-postre-sweet",
    name: "Bowl postre sweet",
    code: "9008/00",
    price: 403,
    imgs: ["/productos/bowl-postre-sweet.jpg"],
    tags: ["articulos de cocina"],
  },
  {
    slug: "bowl-snack",
    name: "Bowl snack",
    code: "9009/00",
    price: 429,
    imgs: ["/productos/bowl-snack.jpg"],
    tags: ["articulos de cocina"],
  },
  {
    slug: "bowl-ovalado",
    name: "Bowl ovalado",
    code: "9010/00",
    price: 988,
    imgs: ["/productos/bowl-ovalado.jpg"],
    tags: ["articulos de cocina"],
  },
  {
    slug: "cazuela",
    name: "Cazuela",
    code: "9011/00",
    price: 689,
    imgs: ["/productos/cazuela.jpg"],
    tags: ["articulos de cocina"],
  },
  {
    slug: "cesto-de-puerta-bajo-mesada",
    name: "Cesto de puerta bajo mesada",
    code: "9016/00",
    price: 1807,
    imgs: ["/productos/cesto-de-puerta-bajo-mesada.jpg"],
    tags: ["articulos de cocina"],
  },
  {
    slug: "tabla-para-picar-chica",
    name: "Tabla para picar chica",
    code: "9020/00",
    price: 1502,
    imgs: ["/productos/tabla-para-picar-chica.jpg"],
    tags: ["articulos de cocina"],
  },
  {
    slug: "tabla-para-picar-grande",
    name: "Tabla para picar grande",
    code: "9021/00",
    price: 1905,
    imgs: ["/productos/tabla-para-picar-grande.jpg"],
    tags: ["articulos de cocina"],
  },
  {
    slug: "tabla-pizzera",
    name: "Tabla pizzera",
    code: "9024/00",
    price: 1573,
    imgs: ["/productos/tabla-pizzera.jpg"],
    tags: ["articulos de cocina"],
  },
  {
    slug: "contenedor-cuadrado-700ml",
    name: "Contenedor cuadrado 700ml",
    code: "6000/00",
    price: 780,
    imgs: ["/productos/contenedor-cuadrado-700ml.jpg"],
    tags: ["articulos de cocina"],
  },
  {
    slug: "contenedor-cuadrado-1100ml",
    name: "Contenedor cuadrado 1100ml",
    code: "6001/00",
    price: 975,
    imgs: ["/productos/contenedor-cuadrado-1100ml.jpg"],
    tags: ["articulos de cocina"],
  },
  {
    slug: "contenedor-cuadrado-1900ml",
    name: "Contenedor cuadrado 1900ml",
    code: "6002/00",
    price: 1144,
    imgs: ["/productos/contenedor-cuadrado-1900ml.jpg"],
    tags: ["articulos de cocina"],
  },
  {
    slug: "set-contenedor-cuadrado-x3",
    name: "Set contenedor cuadrado x3",
    code: "6003/00",
    price: 2899,
    imgs: ["/productos/set-contenedor-cuadrado-x3.jpg"],
    tags: ["articulos de cocina"],
  },
  {
    slug: "cubetera-14",
    name: "Cubetera 14",
    code: "9012/00",
    price: 930,
    imgs: ["/productos/cubetera-14.jpg"],
    tags: ["articulos de cocina"],
  },
  {
    slug: "cubetera-24",
    name: "Cubetera 24",
    code: "9013/00",
    price: 930,
    imgs: ["/productos/cubetera-24.jpg"],
    tags: ["articulos de cocina"],
  },
  {
    slug: "cubetera-44",
    name: "Cubetera 44",
    code: "9014/00",
    price: 930,
    imgs: ["/productos/cubetera-44.jpg"],
    tags: ["articulos de cocina"],
  },
  {
    slug: "set-x2-cubetera-14-con-tapa",
    name: "Set x2 cubetera 14 con tapa",
    code: "9012/99",
    price: 2919,
    imgs: ["/productos/set-x2-cubetera-14-con-tapa.jpg"],
    tags: ["articulos de cocina"],
  },
  {
    slug: "set-x2-cubetera-24-con-tapa",
    name: "Set x2 cubetera 24 con tapa",
    code: "9013/99",
    price: 2919,
    imgs: ["/productos/set-x2-cubetera-24-con-tapa.jpg"],
    tags: ["articulos de cocina"],
  },
  {
    slug: "set-x2-cubetera-44-con-tapa",
    name: "Set x2 cubetera 44 con tapa",
    code: "9014/99",
    price: 2919,
    imgs: ["/productos/set-x2-cubetera-44-con-tapa.jpg"],
    tags: ["articulos de cocina"],
  },
  {
    slug: "organizador-de-heladera",
    name: "Organizador de heladera",
    code: "9003/00",
    price: 2230,
    imgs: [
      "/productos/organizador-de-heladera-01.jpg",
      "/productos/organizador-de-heladera-02.jpg",
    ],
    tags: ["articulos de cocina"],
  },
  {
    slug: "jarra-1.5-lts-con-tapa",
    name: "Jarra 1.5 lts con tapa",
    code: "9002/00",
    price: 1625,
    imgs: ["/productos/jarra-1.5-lts-con-tapa.jpg"],
    tags: ["articulos de cocina"],
  },
  {
    slug: "jarra-1.5-lts-sin-tapa",
    name: "Jarra 1.5 lts sin tapa",
    code: "9002/01",
    price: 1287,
    imgs: ["/productos/jarra-1.5-lts-sin-tapa.jpg"],
    tags: ["articulos de cocina"],
  },
  {
    slug: "set-jarra-1.5-lts-4-vasos",
    name: "Set jarra 1.5 lts + 4 vasos",
    code: "9002/99",
    price: 2340,
    imgs: ["/productos/set-jarra-1.5-lts-4-vasos.jpg"],
    tags: ["articulos de cocina"],
  },
  {
    slug: "jarra-pinguino-con-tapa",
    name: "Jarra pingüino con tapa",
    code: "9004/00",
    price: 1378,
    imgs: ["/productos/jarra-pinguino-con-tapa.jpg"],
    tags: ["articulos de cocina"],
  },
  {
    slug: "jarra-pinguino-sin-tapa",
    name: "Jarra pingüino sin tapa",
    code: "9004/01",
    price: 1287,
    imgs: ["/productos/jarra-pinguino-sin-tapa.jpg"],
    tags: ["articulos de cocina"],
  },
  {
    slug: "set-jarra-pinguino-4-vasos-pinguino",
    name: "Set jarra pingüino + 4 vasos pingüino",
    code: "9004/99",
    price: 2165,
    imgs: ["/productos/set-jarra-pinguino-4-vasos-pinguino.jpg"],
    tags: ["articulos de cocina"],
  },
  {
    slug: "jarra-americana-2.25-lts-con-tapa",
    name: "Jarra americana 2.25 lts con tapa",
    code: "9019/00",
    price: 1781,
    imgs: ["/productos/jarra-americana-2.25-lts-con-tapa.jpg"],
    tags: ["articulos de cocina"],
  },
  {
    slug: "set-jarra-americana-2.25-lts-3-vasos-mug",
    name: "Set jarra americana 2.25 lts + 3 vasos mug",
    code: "9019/99",
    price: 2730,
    imgs: ["/productos/set-jarra-americana-2.25-lts-3-vasos-mug.jpg"],
    tags: ["articulos de cocina"],
  },
  {
    slug: "jarra-0.75-lts",
    name: "Jarra 0.75 lts",
    code: "9018/00",
    price: 975,
    imgs: ["/productos/jarra-0.75-lts.jpg"],
    tags: ["articulos de cocina"],
  },
  {
    slug: "dispenser-3-lts",
    name: "Dispenser 3 lts",
    code: "9015/00",
    price: 4199,
    imgs: ["/productos/dispenser-3-lts.jpg"],
    tags: ["articulos de cocina"],
  },
  {
    slug: "dispenser-3-lts-4-vasos-pinta",
    name: "Dispenser 3 lts + 4 vasos pinta",
    code: "9015/99",
    price: 5460,
    imgs: ["/productos/dispenser-3-lts-4-vasos-pinta.jpg"],
    tags: ["articulos de cocina"],
  },
  {
    slug: "dispenser-6-lts",
    name: "Dispenser 6 lts",
    code: "9022/00",
    price: 13845,
    imgs: ["/productos/dispenser-6-lts.jpg"],
    tags: ["articulos de cocina"],
  },
  {
    slug: "dispenser-10-lts",
    name: "Dispenser 10 lts",
    code: "9023/00",
    price: 18525,
    imgs: ["/productos/dispenser-10-lts.jpg"],
    tags: ["articulos de cocina"],
  },

  {
    slug: "balde-10-lts-negro",
    name: "Balde 10 lts negro",
    code: "8001/00",
    price: 1775,
    imgs: ["/productos/balde-10-lts-negro.jpg"],
    tags: ["artículos de baño y limpieza"],
  },
  {
    slug: "balde-10-lts-color",
    name: "Balde 10 lts color",
    code: "8001/99",
    price: 1976,
    imgs: ["/productos/balde-10-lts-color.jpg"],
    tags: ["artículos de baño y limpieza"],
  },
  {
    slug: "jabonera-ballena",
    name: "Jabonera ballena",
    code: "8002/00",
    price: 559,
    imgs: ["/productos/jabonera-ballena.jpg"],
    tags: ["artículos de baño y limpieza"],
  },
  {
    slug: "jabonera-simple",
    name: "Jabonera simple",
    code: "8003/00",
    price: 377,
    imgs: ["/productos/jabonera-simple.jpg"],
    tags: ["artículos de baño y limpieza"],
  },
  {
    slug: "fuenton-oso",
    name: "Fuentón oso",
    code: "8004/00",
    price: 2548,
    imgs: ["/productos/fuenton-oso.jpg"],
    tags: ["artículos de baño y limpieza"],
  },
  {
    slug: "palita-basura-negra",
    name: "Palita basura negra",
    code: "8005/00",
    price: 637,
    imgs: ["/productos/palita-basura-negra.jpg"],
    tags: ["artículos de baño y limpieza"],
  },
  {
    slug: "palita-basura-color",
    name: "Palita basura color",
    code: "8005/99",
    price: 845,
    imgs: ["/productos/palita-basura-color.jpg"],
    tags: ["artículos de baño y limpieza"],
  },
  {
    slug: "percha-eco-x4-negro",
    name: "Percha eco x4 negro",
    code: "8006/00",
    price: 715,
    imgs: ["/productos/percha-eco-x4-negro.jpg"],
    tags: ["artículos de baño y limpieza"],
  },
  {
    slug: "percha-eco-x4-color",
    name: "Percha eco x4 color",
    code: "8006/99",
    price: 845,
    imgs: ["/productos/percha-eco-x4-color.jpg"],
    tags: ["artículos de baño y limpieza"],
  },

  {
    slug: "set-escolar-triple-formas",
    name: "Set escolar triple formas",
    code: "5017/99",
    price: 1287,
    imgs: ["/productos/set-escolar-triple-formas.jpg"],
    tags: ["artículos escolares"],
  },
  {
    slug: "set-escolar-triple-simple",
    name: "Set escolar triple simple",
    code: "5017/99",
    price: 1261,
    imgs: ["/productos/set-escolar-triple-simple.jpg"],
    tags: ["artículos escolares"],
  },
  {
    slug: "set-vaso-loco-plato",
    name: "Set vaso loco + plato",
    code: "5017/10",
    price: 858,
    imgs: ["/productos/set-vaso-loco-plato.jpg"],
    tags: ["artículos escolares"],
  },
  {
    slug: "set-vaso-loco-plato-iml",
    name: "Set vaso loco + plato IML",
    code: "5017/11",
    price: 1144,
    imgs: ["/productos/set-vaso-loco-plato-iml.jpg"],
    tags: ["artículos escolares"],
  },
  {
    slug: "plato-postre",
    name: "Plato postre",
    code: "9017/00",
    price: 455,
    imgs: ["/productos/plato-postre.jpg"],
    tags: ["artículos escolares"],
  },
  {
    slug: "plato-infantil-iml",
    name: "Plato infantil IML",
    code: "9017/114",
    price: 715,
    imgs: ["/productos/plato-infantil-iml.jpg"],
    tags: ["artículos escolares"],
  },
  {
    slug: "box-cuadrado",
    name: "Box cuadrado",
    code: "2607/00",
    price: 4771,
    imgs: ["/productos/box-cuadrado.jpg"],
    tags: ["artículos escolares"],
  },
  {
    slug: "box-rectangular",
    name: "Box rectangular",
    code: "2608/00",
    price: 6364,
    imgs: ["/productos/box-rectangular.jpg"],
    tags: ["artículos escolares"],
  },

  {
    slug: "torre-bloques-uno",
    name: "Torre bloques uno",
    code: "3020/99",
    price: 8580,
    imgs: ["/productos/torre-bloques-uno.jpg"],
    tags: ["novedades"],
  },
  {
    slug: "torre-bloques-uno-bros",
    name: "Torre bloques uno bros",
    code: "3020/98",
    price: 8580,
    imgs: ["/productos/torre-bloques-uno-bros.jpg"],
    tags: ["novedades"],
  },
  {
    slug: "jarron-600ml-ruido",
    name: "Jarrón 600ml ruido",
    code: "5016/99",
    price: 1144,
    imgs: ["/productos/jarron-600ml-ruido.jpg"],
    tags: ["novedades"],
  },
  {
    slug: "vaso-grande-ruido",
    name: "Vaso grande ruido",
    code: "5002/04",
    price: 858,
    imgs: ["/productos/vaso-grande-ruido.jpg"],
    tags: ["novedades"],
  },

  {
    slug: "taza-con-papel-capibara",
    name: "Taza con papel capibara",
    code: "5005/CAPI",
    price: 1339,
    imgs: ["/productos/taza-con-papel-capibara.jpg"],
    tags: ["capibara"],
  },
  {
    slug: "llavero-capibara-mosqueton",
    name: "Llavero capibara mosquetón",
    code: "CAPI/03",
    price: 1001,
    imgs: ["/productos/llavero-capibara-mosqueton.jpg"],
    tags: ["capibara"],
  },
  {
    slug: "llavero-capibara",
    name: "Llavero capibara",
    code: "CAPI/02",
    price: 1001,
    imgs: ["/productos/llavero-capibara.jpg"],
    tags: ["capibara"],
  },
  {
    slug: "muñeco-capibara",
    name: "Muñeco capibara",
    code: "CAPI/01",
    price: 715,
    imgs: ["/productos/muñeco-capibara.jpg"],
    tags: ["capibara"],
  },
  {
    slug: "set-vaso-loco-plato-capibara",
    name: "Set vaso loco + plato capibara",
    code: "9017/12",
    price: 1144,
    imgs: [
      "/productos/set-vaso-loco-plato-capibara-01.jpg",
      "/productos/set-vaso-loco-plato-capibara-02.jpg",
      "/productos/set-vaso-loco-plato-capibara-03.jpg",
      "/productos/set-vaso-loco-plato-capibara-04.jpg",
    ],
    tags: ["capibara"],
  },
  {
    slug: "vaso-capibara-con-muñeco",
    name: "Vaso capibara con muñeco",
    code: "5002/05",
    price: 1788,
    imgs: [
      "/productos/vaso-capibara-con-muñeco-01.jpg",
      "/productos/vaso-capibara-con-muñeco-02.jpg",
    ],
    tags: ["capibara"],
  },
  {
    slug: "vaso-con-tapa-capibara",
    name: "Vaso con tapa capibara",
    code: "5002/06",
    price: 943,
    imgs: [
      "/productos/vaso-con-tapa-capibara-01.jpg",
      "/productos/vaso-con-tapa-capibara-02.jpg",
      "/productos/vaso-con-tapa-capibara-03.jpg",
      "/productos/vaso-con-tapa-capibara-04.jpg",
    ],
    tags: ["capibara"],
  },
];

const accesorios: Product[] = [
  {
    slug: "broche-jumbo",
    name: "Broche jumbo x12",
    code: "101/14",
    price: 2646,
    imgs: [
      "/productos/broche-jumbo-01.jpg",
      "/productos/broche-jumbo-02.jpg",
      "/productos/broche-jumbo-03.jpg",
      "/productos/broche-jumbo-04.jpg",
      "/productos/broche-jumbo-05.jpg",
    ],
    tags: ["broches"],
  },
  {
    slug: "broche-3d-liso",
    name: "Broche 3D liso x12",
    code: "102/14",
    price: 2574,
    imgs: [
      "/productos/broche-3d-liso-01.jpg",
      "/productos/broche-3d-liso-02.jpg",
      "/productos/broche-3d-liso-03.jpg",
      "/productos/broche-3d-liso-04.jpg",
      "/productos/broche-3d-liso-05.jpg",
    ],
    tags: ["broches"],
  },
  {
    slug: "broche-eme",
    name: "Broche eme x12",
    code: "111/14",
    price: 2646,
    imgs: [
      "/productos/broche-eme-01.jpg",
      "/productos/broche-eme-02.jpg",
      "/productos/broche-eme-03.jpg",
      "/productos/broche-eme-04.jpg",
      "/productos/broche-eme-05.jpg",
    ],
    tags: ["broches"],
  },
  {
    slug: "broche-3d-calado",
    name: "Broche 3D calado x12",
    code: "117/14",
    price: 2646,
    imgs: [
      "/productos/broche-3d-calado-01.jpg",
      "/productos/broche-3d-calado-02.jpg",
      "/productos/broche-3d-calado-03.jpg",
      "/productos/broche-3d-calado-04.jpg",
    ],
    tags: ["broches"],
  },
  {
    slug: "broche-calado",
    name: "Broche calado x12",
    code: "121/14",
    price: 2002,
    imgs: [
      "/productos/broche-calado-01.jpg",
      "/productos/broche-calado-02.jpg",
      "/productos/broche-calado-03.jpg",
      "/productos/broche-calado-04.jpg",
    ],
    tags: ["broches"],
  },
  {
    slug: "broche-liso",
    name: "Broche liso x12",
    code: "122/14",
    price: 2002,
    imgs: [
      "/productos/broche-liso-01.jpg",
      "/productos/broche-liso-02.jpg",
      "/productos/broche-liso-03.jpg",
      "/productos/broche-liso-04.jpg",
    ],
    tags: ["broches"],
  },
  {
    slug: "broche-monio",
    name: "Broche moño x12",
    code: "126/14",
    price: 2574,
    imgs: [
      "/productos/broche-monio-01.jpg",
      "/productos/broche-monio-02.jpg",
      "/productos/broche-monio-03.jpg",
      "/productos/broche-monio-04.jpg",
      "/productos/broche-monio-05.jpg",
    ],
    tags: ["broches"],
  },
  {
    slug: "broche-abanico",
    name: "Broche abanico x12",
    code: "127/14",
    price: 2574,
    imgs: [
      "/productos/broche-abanico-01.jpg",
      "/productos/broche-abanico-02.jpg",
      "/productos/broche-abanico-03.jpg",
      "/productos/broche-abanico-04.jpg",
    ],
    tags: ["broches"],
  },
  {
    slug: "broche-ventanita",
    name: "Broche ventanita x12",
    code: "128/14",
    price: 2002,
    imgs: [
      "/productos/broche-ventanita-01.jpg",
      "/productos/broche-ventanita-02.jpg",
      "/productos/broche-ventanita-03.jpg",
      "/productos/broche-ventanita-04.jpg",
    ],
    tags: ["broches"],
  },
  {
    slug: "broche-bombe-med",
    name: "Broche bombe med x12",
    code: "134/14",
    price: 2574,
    imgs: [
      "/productos/broche-bombe-med-01.jpg",
      "/productos/broche-bombe-med-02.jpg",
      "/productos/broche-bombe-med-03.jpg",
      "/productos/broche-bombe-med-04.jpg",
    ],
    tags: ["broches"],
  },
  {
    slug: "broche-5d-rectangular",
    name: "Broche 5D rectangular x12",
    code: "136/14",
    price: 2646,
    imgs: [
      "/productos/broche-5d-rectangular-01.jpg",
      "/productos/broche-5d-rectangular-02.jpg",
      "/productos/broche-5d-rectangular-03.jpg",
      "/productos/broche-5d-rectangular-04.jpg",
    ],
    tags: ["broches"],
  },
  {
    slug: "broche-mariposa-gde",
    name: "Broche mariposa gde x12",
    code: "137/14",
    price: 2646,
    imgs: [
      "/productos/broche-mariposa-gde-01.jpg",
      "/productos/broche-mariposa-gde-02.jpg",
      "/productos/broche-mariposa-gde-03.jpg",
      "/productos/broche-mariposa-gde-04.jpg",
    ],
    tags: ["broches"],
  },
  {
    slug: "broche-bombe",
    name: "Broche bombe x12",
    code: "139/14",
    price: 2002,
    imgs: [
      "/productos/broche-bombe-01.jpg",
      "/productos/broche-bombe-02.jpg",
      "/productos/broche-bombe-03.jpg",
      "/productos/broche-bombe-04.jpg",
    ],
    tags: ["broches"],
  },
  {
    slug: "broche-mariposa-med",
    name: "Broche mariposa med x12",
    code: "162/14",
    price: 2574,
    imgs: [
      "/productos/broche-mariposa-med-01.jpg",
      "/productos/broche-mariposa-med-02.jpg",
      "/productos/broche-mariposa-med-03.jpg",
    ],
    tags: ["broches"],
  },
  {
    slug: "broche-eme-med",
    name: "Broche eme med x12",
    code: "163/14",
    price: 2574,
    imgs: [
      "/productos/broche-eme-med-01.jpg",
      "/productos/broche-eme-med-02.jpg",
      "/productos/broche-eme-med-03.jpg",
    ],
    tags: ["broches"],
  },
  {
    slug: "broche-media-flor",
    name: "Broche media flor x12",
    code: "164/14",
    price: 2646,
    imgs: [
      "/productos/broche-media-flor-01.jpg",
      "/productos/broche-media-flor-02.jpg",
      "/productos/broche-media-flor-03.jpg",
      "/productos/broche-media-flor-04.jpg",
      "/productos/broche-media-flor-05.jpg",
    ],
    tags: ["broches"],
  },
  {
    slug: "broche-flor-calada",
    name: "Broche flor calada x12",
    code: "165/14",
    price: 2646,
    imgs: [
      "/productos/broche-flor-calada-01.jpg",
      "/productos/broche-flor-calada-02.jpg",
      "/productos/broche-flor-calada-03.jpg",
      "/productos/broche-flor-calada-04.jpg",
    ],
    tags: ["broches"],
  },
  {
    slug: "rodetero",
    name: "Rodetero x6",
    code: "2400/14",
    price: 2665,
    imgs: ["/productos/rodetero.jpg"],
    tags: ["broches"],
  },
  {
    slug: "pulsera-silicona-estampada",
    name: "Pulsera de silicona estampada x12",
    code: "407/114",
    price: 1859,
    imgs: ["/productos/pulsera-silicona-estampada.jpg"],
    tags: ["pulseras"],
  },
  {
    slug: "palo-chino-formas",
    name: "Palo chino formas",
    code: "501/00",
    price: 572,
    imgs: [
      "/productos/palo-chino-formas-01.jpg",
      "/productos/palo-chino-formas-02.jpg",
      "/productos/palo-chino-formas-03.jpg",
      "/productos/palo-chino-formas-04.jpg",
      "/productos/palo-chino-formas-05.jpg",
      "/productos/palo-chino-formas-06.jpg",
      "/productos/palo-chino-formas-07.jpg",
      "/productos/palo-chino-formas-08.jpg",
      "/productos/palo-chino-formas-09.jpg",
      "/productos/palo-chino-formas-10.jpg",
      "/productos/palo-chino-formas-11.jpg",
      "/productos/palo-chino-formas-12.jpg",
      "/productos/palo-chino-formas-13.jpg",
      "/productos/palo-chino-formas-14.jpg",
      "/productos/palo-chino-formas-15.jpg",
      "/productos/palo-chino-formas-16.jpg",
      "/productos/palo-chino-formas-17.jpg",
      "/productos/palo-chino-formas-18.jpg",
      "/productos/palo-chino-formas-19.jpg",
      "/productos/palo-chino-formas-20.jpg",
    ],
    tags: ["palos chinos"],
  },
  {
    slug: "palo-chino-cuadrado",
    name: "Palo chino cuadrado",
    code: "502/00",
    price: 572,
    imgs: [
      "/productos/palo-chino-cuadrado-01.jpg",
      "/productos/palo-chino-cuadrado-02.jpg",
      "/productos/palo-chino-cuadrado-03.jpg",
      "/productos/palo-chino-cuadrado-04.jpg",
    ],
    tags: ["palos chinos"],
  },
  {
    slug: "colin-mariposa",
    name: "Colín mariposa",
    code: "602/00",
    price: 572,
    imgs: [
      "/productos/colin-mariposa-01.jpg",
      "/productos/colin-mariposa-02.jpg",
      "/productos/colin-mariposa-03.jpg",
    ],
    tags: ["colines"],
  },
  {
    slug: "colin-corazon",
    name: "Colín corazón",
    code: "603/00",
    price: 572,
    imgs: ["/productos/colin-corazon.jpg"],
    tags: ["colines"],
  },
  {
    slug: "colin-libelula",
    name: "Colín libelula",
    code: "604/00",
    price: 572,
    imgs: [
      "/productos/colin-libelula-01.jpg",
      "/productos/colin-libelula-02.jpg",
    ],
    tags: ["colines"],
  },
  {
    slug: "vincha-zigzag",
    name: "Vincha zigzag x12",
    code: "707/14",
    price: 1645,
    imgs: [
      "/productos/vincha-zigzag-01.jpg",
      "/productos/vincha-zigzag-02.jpg",
      "/productos/vincha-zigzag-03.jpg",
      "/productos/vincha-zigzag-04.jpg",
      "/productos/vincha-zigzag-05.jpg",
      "/productos/vincha-zigzag-06.jpg",
    ],
    tags: ["vinchas"],
  },
  {
    slug: "vincha-conejo",
    name: "Vincha conejo x6",
    code: "712/14",
    price: 1560,
    imgs: [
      "/productos/vincha-conejo-01.jpg",
      "/productos/vincha-conejo-02.jpg",
      "/productos/vincha-conejo-03.jpg",
      "/productos/vincha-conejo-04.jpg",
    ],
    tags: ["vinchas"],
  },
  {
    slug: "vincha-orejas-llenas",
    name: "Vincha orejas-llenas x6",
    code: "713/14",
    price: 1560,
    imgs: [
      "/productos/vincha-orejas-llenas-01.jpg",
      "/productos/vincha-orejas-llenas-02.jpg",
    ],
    tags: ["vinchas"],
  },
  {
    slug: "vincha-monito",
    name: "Vincha moñito x6",
    code: "714/14",
    price: 1560,
    imgs: [
      "/productos/vincha-monito-01.jpg",
      "/productos/vincha-monito-02.jpg",
    ],
    tags: ["vinchas"],
  },
  {
    slug: "vincha-minnie",
    name: "Vincha minnie x6",
    code: "715/14",
    price: 1560,
    imgs: [
      "/productos/vincha-minnie-01.jpg",
      "/productos/vincha-minnie-02.jpg",
    ],
    tags: ["vinchas"],
  },
  {
    slug: "vincha-corona",
    name: "Vincha corona x6",
    code: "716/14",
    price: 1560,
    imgs: [
      "/productos/vincha-corona-01.jpg",
      "/productos/vincha-corona-02.jpg",
      "/productos/vincha-corona-03.jpg",
      "/productos/vincha-corona-04.jpg",
    ],
    tags: ["vinchas"],
  },
  {
    slug: "vincha-unicornio-con-brillo",
    name: "Vincha unicornio con brillo x4",
    code: "718/114",
    price: 1560,
    imgs: [
      "/productos/vincha-unicornio-con-brillo-01.jpg",
      "/productos/vincha-unicornio-con-brillo-02.jpg",
      "/productos/vincha-unicornio-con-brillo-03.jpg",
      "/productos/vincha-unicornio-con-brillo-04.jpg",
      "/productos/vincha-unicornio-con-brillo-05.jpg",
    ],
    tags: ["vinchas"],
  },
  {
    slug: "vincha-unicornio",
    name: "Vincha unicornio x6",
    code: "718/14",
    price: 1560,
    imgs: [
      "/productos/vincha-unicornio-01.jpg",
      "/productos/vincha-unicornio-02.jpg",
      "/productos/vincha-unicornio-03.jpg",
      "/productos/vincha-unicornio-04.jpg",
      "/productos/vincha-unicornio-05.jpg",
    ],
    tags: ["vinchas"],
  },
  {
    slug: "vincha-alce",
    name: "Vincha alce x6",
    code: "719/14",
    price: 1560,
    imgs: ["/productos/vincha-alce.jpg"],
    tags: ["vinchas"],
  },
  {
    slug: "vincha-reno",
    name: "Vincha reno x6",
    code: "720/14",
    price: 1560,
    imgs: ["/productos/vincha-reno.jpg"],
    tags: ["vinchas"],
  },
  {
    slug: "vincha-diablo",
    name: "Vincha diablo x6",
    code: "721/14",
    price: 1560,
    imgs: ["/productos/vincha-diablo.jpg"],
    tags: ["vinchas"],
  },
];

const products: Product[] = [...bazar, ...accesorios];

export default products;
