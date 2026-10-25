const menu = [
  { name: "Cafetaria", items: [
    { name: "Café", price: 1.20 }, { name: "Café duplo", price: 2.00 }, { name: "Carioca de café", price: 1.00 }, { name: "Carioca de limão", price: 1.00 }, { name: "Cevada", price: 1.00 }, { name: "Descafeinado", price: 1.20 }, { name: "Pingo", price: 1.20 }, { name: "Abatanado", price: 1.80 }, { name: "Meia de leite", price: 2.00 }, { name: "Chá", price: 2.00 }
  ]},
  { name: "Bebidas", items: [
    { name: "Água 0,50 l", price: 1.80 }, { name: "Água 1,50 l", price: 3.20 }, { name: "Água das Pedras", price: 1.80 }, { name: "Água das Pedras com sabores", price: 2.00 }, { name: "Coca-Cola / Zero", price: 2.30 }, { name: "Ice Tea", price: 2.30 }, { name: "Guaraná", price: 2.30 }, { name: "Compal", price: 2.30 }, { name: "7UP", price: 2.30 }, { name: "Água tónica", price: 2.30 }, { name: "Sumo de laranja natural", price: 3.00 }, { name: "Limonada", price: 2.50 }, { name: "Limonada de sabores", price: 3.00 }
  ]},
  { name: "Cervejas", items: [
    { name: "Fino · 25 cl", price: 2.00 }, { name: "Rei · 50 cl", price: 4.00 }, { name: "1927 · Super Bock", price: 4.00 }, { name: "Somersby", price: 3.00 }, { name: "Stout de pressão", price: 2.50 }, { name: "Cerveja sem álcool", price: 2.50 },
    { name: "Franziskaner", price: 6.00, group: "Artesanais" }, { name: "Leffe Blonde", price: 5.00, group: "Artesanais" }, { name: "1927 Munich", price: 4.00, image: "assets/dishes/cerveja-1927-munich.jpg", group: "Artesanais" }, { name: "1927 Weiss", price: 4.00, group: "Artesanais" }, { name: "Tough Love End of Time", price: 6.50, group: "Artesanais" }, { name: "Tough Love Imperial Stout", price: 5.00, group: "Artesanais" }, { name: "Tough Love Trip to Andalucía", price: 5.50, group: "Artesanais" }, { name: "Tough Love IPA", price: 5.50, group: "Artesanais" }
  ]},
  { name: "Licores", items: [
    { name: "Amêndoa Amarga", price: 3.50 }, { name: "C.R.F.", price: 4.50 }, { name: "Croft", price: 3.00 }, { name: "Licor Beirão", price: 4.00 }, { name: "Martini Bianco", price: 3.00 }, { name: "Martini Rosso", price: 3.00 }, { name: "Vinho do Porto", price: 5.00 }
  ]},
  { name: "Gin", items: [
    { name: "Bombay Sapphire", price: 7.50 }, { name: "Gordon’s", price: 5.00 }, { name: "Tanqueray", price: 8.00 }
  ]},
  { name: "Whiskey", items: [
    { name: "Shot · JB", price: 3.00 }, { name: "Bushmills", price: 6.00 }, { name: "Jack Daniel’s", price: 7.50 }, { name: "JB", price: 4.00 }
  ]},
  { name: "Vinhos", items: [
    { name: "Vinho da Casa", price: 12.00, group: "Tinto" }, { name: "Entre Quintas", price: 12.00, group: "Tinto" }, { name: "Barão de Vilar", price: 13.00, group: "Tinto" }, { name: "Com Notas", price: 14.00, group: "Tinto" }, { name: "Assobio", price: 14.00, group: "Tinto" }, { name: "Teoria Reserva", price: 15.00, group: "Tinto" }, { name: "Graínha", price: 25.00, group: "Tinto" }, { name: "Dez Tostões", price: 25.00, group: "Tinto" }, { name: "Duas Quintas", price: 28.00, group: "Tinto" },
    { name: "Vinho da Casa", price: 12.00, group: "Branco" }, { name: "Montaria", price: 12.00, group: "Branco" }, { name: "Vallegre", price: 12.00, group: "Branco" }, { name: "Planalto", price: 12.00, group: "Branco" }, { name: "Assobio", price: 14.00, group: "Branco" }, { name: "Pinha - Encruzado", price: 14.00, group: "Branco" }, { name: "Teoria Reserva", price: 15.00, group: "Branco" }, { name: "Bons Ares", price: 20.00, group: "Branco" }, { name: "Duas Quintas", price: 25.00, group: "Branco" },
    { name: "Muralhas", price: 13.00, group: "Verde" }, { name: "Quinta D’Amares", price: 14.00, group: "Verde" }, { name: "Sítio do Santo Rosé", price: 10.00, image: "assets/dishes/vinho-sitio-santo-rose.jpg", group: "Verde" }, { name: "Caiz", price: 12.00, group: "Verde" },
    { name: "Terras do Demo Branco", price: 17.00, group: "Espumantes" }, { name: "Terras do Demo Tinto", price: 17.00, group: "Espumantes" }, { name: "Terras do Demo Rosé", price: 17.00, group: "Espumantes" }, { name: "Villa Yolanda Rosé", price: 14.00, group: "Espumantes" },
    { name: "Branco", price: 3.00, group: "A copo" }, { name: "Tinto", price: 4.00, group: "A copo" }
  ]},
  { name: "Sangrias", items: [
    { name: "Branco / tinto", prices: [{ label: "Copo", amount: 5.00 }, { label: "1,5 l", amount: 20.00 }] }, { name: "Frutos vermelhos", prices: [{ label: "Copo", amount: 6.00 }, { label: "1,5 l", amount: 22.00 }], image: "assets/dishes/sangria-frutos-vermelhos.jpg" }, { name: "Maracujá", prices: [{ label: "Copo", amount: 6.00 }, { label: "1,5 l", amount: 22.00 }] }, { name: "Limoncello", prices: [{ label: "Copo", amount: 6.00 }, { label: "1,5 l", amount: 22.00 }], video: "assets/videos/sangria-limoncello.mp4" }, { name: "Aperol", prices: [{ label: "Copo", amount: 8.00 }, { label: "1,5 l", amount: 27.00 }] }
  ]},
  { name: "Entradas", items: [
    { name: "Sopa do dia", price: 2.50 }, { name: "Tequeños", price: 4.00, image: "assets/dishes/tequenos.jpg" }, { name: "Focaccia de queijo", price: 6.00, image: "assets/dishes/focaccia-queijo.jpg" }, { name: "Ovos rotos com presunto", price: 8.00, image: "assets/dishes/ovos-rotos-presunto.jpg" }, { name: "Ovos rotos com cogumelos", price: 8.00, image: "assets/dishes/ovos-rotos-cogumelos.jpg" }, { name: "Pão de alho com queijo", price: 4.00 }, { name: "Pão de alho com queijo e bacon", price: 5.00, image: "assets/dishes/pao-alho-queijo-bacon.jpg" }
  ]},
  { name: "Saladas", note: "Todas as opções podem ser personalizadas. Troca de pão, proteína ou versão vegetariana disponível com custo adicional; consulte os extras.", items: [
    { name: "Frango", price: 13.50, image: "assets/dishes/salada-frango.jpg", description: "Alface, rúcula, tomate, cenoura, cebola, azeitona, frango, ananás, queijo e croutons." }, { name: "Cogumelos", price: 15.50, image: "assets/dishes/salada-cogumelos.jpg", description: "Alface, rúcula, tomate, cenoura, cebola, queijo de cabra, nozes, cogumelos portobello e croutons.", tags: ["Vegetariano"] }, { name: "Atum", price: 13.50, description: "Alface, rúcula, tomate, cenoura, cebola, atum, queijo, pimento assado, ananás e croutons." }
  ]},
  { name: "Pregos", note: "Acompanhados de batata frita.", items: [
    { name: "Clássico", price: 11.50, description: "Pão de água, bife, queijo e fiambre." }, { name: "3 Pimentas", price: 12.00, description: "Bolo do caco, bife, rúcula, tomate e molho de maionese, mostarda e 3 pimentas." }, { name: "Cogumelos", price: 13.50, image: "assets/dishes/prego-cogumelos.jpg", description: "Bolo do caco, bife, queijo e cogumelos em molho de natas." }, { name: "Da Serra", price: 13.50, image: "assets/dishes/prego-da-serra.jpg", description: "Pão de água, bife, queijo da Serra e cebola caramelizada em redução de vinho do Porto." }, { name: "De cabra", price: 14.00, image: "assets/dishes/prego-de-cabra.jpg", description: "Bolo do caco, bife, queijo de cabra, pimento caramelizado, rúcula e cebola frita." }, { name: "Barbecue", price: 13.00, image: "https://sapienspregaria.pt/wp-content/uploads/2024/02/bbq.jpg", description: "Pão de água, bife, alface, tomate, queijo cheddar, ovo, bacon, cebola frita e molho barbecue." }, { name: "Francesinha", price: 14.00, video: "assets/videos/francesinha.mp4", description: "Bolo do caco, bife, queijo, fiambre, linguiça, salsicha e molho de francesinha." }, { name: "Frango", price: 11.50, image: "assets/dishes/prego-frango.jpg", description: "Bolo do caco, peito de frango, queijo, tomate, cenoura, alface e molho de mostarda e mel." }, { name: "Vegetariano", price: 13.00, image: "https://sapienspregaria.pt/wp-content/uploads/2024/02/veggie.jpg", description: "Bolo do caco, cogumelos portobello, queijo de cabra, rúcula, cenoura, nozes e mel.", tags: ["Vegetariano"] }, { name: "Tropical", price: 13.50, image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/8a/cc/d2/prego-tropical-bolo-do.jpg?h=1100&s=1&w=1100", description: "Bolo do caco, bife de frango, rúcula, pimento assado, cebola roxa, queijo, bacon, ananás e molho de mostarda e mel." }, { name: "Pimentos", price: 13.00, image: "assets/dishes/prego-pimentos.jpg", description: "Bolo do caco, bife, azeitona, rúcula, pimento assado, cebola frita e maionese de alho e ervas." }, { name: "Alheira", price: 15.00, image: "assets/dishes/prego-alheira.jpg", description: "Bolo do caco, alheira com pinhão, rúcula, queijo creme, ovo, maçã e molho de mostarda e mel." }
  ]},
  { name: "Hambúrgueres", note: "Acompanhados de batata frita.", items: [
    { name: "Dos Açores", price: 12.50, image: "assets/dishes/hamburguer-dos-acores.jpg", description: "Pão de hambúrguer, hambúrguer de bovino (150 g), queijo cheddar e flamengo, fiambre, alface, tomate, cebola roxa, maionese e ketchup." }, { name: "Black Angus", price: 16.00, description: "Pão de hambúrguer, hambúrguer Black Angus (200 g), queijo cheddar, tomate, rúcula, bacon, ovo, cebola frita e molho sweet chilli." }, { name: "Double", price: 15.00, image: "assets/dishes/hamburguer-double.jpg", description: "Pão de hambúrguer, dois hambúrgueres de bovino (150 g), queijo cheddar, bacon, couve roxa, pickles, alface e maionese de alho e ervas." }, { name: "Trufado", price: 15.00, description: "Pão de hambúrguer, hambúrguer de bovino (150 g), alface, tomate, queijo cheddar, bacon, cogumelos e maionese trufada." }, { name: "Presunto", price: 14.00, image: "assets/dishes/hamburguer-presunto.jpg", description: "Pão de hambúrguer, hambúrguer de bovino, alface, tomate, cenoura, ananás, queijo cheddar, presunto e molho sweet chilli." }, { name: "Vegan", price: 14.00, image: "assets/dishes/hamburguer-vegan.jpg", description: "Bolo do caco multicereais, hambúrguer vegan, rúcula, tomate, cogumelos e maionese vegan.", tags: ["Vegan"] }
  ]},
  { name: "Cachorros", note: "Acompanhados de batata frita.", items: [
    { name: "Simples", price: 10.00, description: "Pão de cachorro em bolo do caco, salsicha, alface, tomate, queijo, fiambre, cebola frita, batata palha, maionese e ketchup." }, { name: "Especial", price: 11.50, image: "assets/dishes/cachorro-especial.jpg", description: "Pão de cachorro, salsicha, queijo, fiambre e molho de francesinha." }, { name: "Vegetariano", price: 13.00, description: "Pão de cachorro, salsicha vegan, queijo, alface, tomate, cebola frita, batata palha, maionese e ketchup.", tags: ["Vegetariano"] }
  ]},
  { name: "No prato", items: [
    { name: "À Portuguesa", price: 20.00, description: "Bife de alcatra (300 g), ovo estrelado, salada e batata frita." }, { name: "Bife Sapiens", price: 19.00, image: "assets/dishes/bife-sapiens.jpg", description: "Bife de alcatra (300 g), salada e batata frita." }, { name: "Bife Cogumelos", price: 22.00, video: "assets/videos/bife-cogumelos-prato.mp4", description: "Bife de alcatra (300 g), cogumelos salteados, molho de natas frescas e batata frita." }, { name: "T-Bone Steak", price: 24.00, description: "T-Bone (300 g), batata frita e salada." }
  ]},
  { name: "Focaccias", note: "Acompanhadas de batata frita e molho Sapiens: azeite, alho, manjericão, azeitona, cebola e orégãos.", items: [
    { name: "De frango", price: 12.00, description: "Pão de focaccia, pesto, rúcula, queijo, fiambre e bife de frango." }, { name: "De alcatra", price: 16.00, image: "assets/dishes/focaccia-alcatra.jpg", description: "Pão de focaccia, pesto, rúcula, queijo, fiambre, bife de alcatra e presunto." }, { name: "Vegetariana", price: 13.00, description: "Pão de focaccia, pesto, rúcula, queijo e alheira vegan.", tags: ["Vegetariano"] }
  ]},
  { name: "Infantil", note: "Até aos 12 anos · acompanhados de batata frita.", items: [
    { name: "No prato", price: 8.00, description: "Bife de frango ou hambúrguer de vaca." }, { name: "No pão", price: 8.50, description: "Pão de hambúrguer, bife de frango ou hambúrguer de vaca, queijo e fiambre." }, { name: "Cachorro", price: 8.50, description: "Pão de cachorro, salsicha, queijo e fiambre." }
  ]},
  { name: "Extras", items: [
    { name: "Ovo", price: 1.50 }, { name: "Dose de batatas", price: 2.50 }, { name: "Molho de francesinha", price: 2.50 }, { name: "Ingrediente extra", price: 2.00 }, { name: "Extra pão", price: 1.00 }, { name: "Extra vegetariano", price: 7.50 }, { name: "Extra hambúrguer ou bife · 120 g", price: 7.50 }, { name: "Substituição de pão", price: 1.00 }, { name: "Substituição de hambúrguer ou bife", price: 3.00 }, { name: "Substituição para vegetariano", price: 3.00 }, { name: "Embalagem takeaway", price: 0.50 }, { name: "Saco de papel", price: 0.20 }
  ]}
];

const categoryNav = document.getElementById("category-nav");
const categoryMenuToggle = document.getElementById("category-menu-toggle");
const categoryMenuScrim = document.getElementById("category-menu-scrim");
const menuMain = document.getElementById("menu-main");
const mediaLightbox = document.getElementById("media-lightbox");
const mediaLightboxClose = document.getElementById("media-lightbox-close");
const mediaLightboxContent = document.getElementById("media-lightbox-content");
const languageToggle = document.getElementById("language-toggle");
const scrollProgressFill = document.getElementById("scroll-progress-fill");
const brandLink = document.querySelector(".brand");
let socialVideoObserver = null;
const detailCategories = new Set(["Entradas", "Saladas", "Pregos", "Hambúrgueres", "Cachorros", "No prato", "Focaccias", "Infantil"]);
const categoryOrder = ["Entradas", "Saladas", "Pregos", "Hambúrgueres", "Cachorros", "No prato", "Focaccias", "Infantil", "Extras", "Cafetaria", "Bebidas", "Cervejas", "Gin", "Licores", "Whiskey", "Vinhos", "Sangrias", "Vídeos", "Informações"];
const categoryColors = {
  "No prato": "#4b1d3f", "Focaccias": "#4a5a24", "Pregos": "#6b2230", "Hambúrgueres": "#7a2a1f", "Cachorros": "#5a3a1c", "Saladas": "#3b5a2a", "Entradas": "#6b4a1a", "Infantil": "#1f4a5c", "Extras": "#5a3a1c", "Cafetaria": "#5a3a1c", "Bebidas": "#1f4a5c", "Cervejas": "#6b4a1a", "Licores": "#4b1d3f", "Gin": "#4b1d3f", "Whiskey": "#4b1d3f", "Vinhos": "#5b1a26", "Sangrias": "#6b2230", "Informações": "#4b1d3f"
};
const englishCategory = {
  "No prato": "Steak dishes", "Focaccias": "Focaccia", "Pregos": "Pregos", "Hambúrgueres": "Burgers", "Cachorros": "Hot dogs", "Saladas": "Salads", "Entradas": "Starters", "Infantil": "Kids’ menu", "Extras": "Extras", "Cafetaria": "Coffee", "Bebidas": "Drinks", "Cervejas": "Beer", "Licores": "Liqueurs", "Gin": "Gin", "Whiskey": "Whiskey", "Vinhos": "Wine", "Sangrias": "Sangria", "Vídeos": "Behind the scenes", "Informações": "Information"
};
const englishGroups = {
  "Artesanais": "Craft beer", "Tinto": "Red wine", "Branco": "White wine", "Verde": "Vinho Verde", "Verdes": "Vinho Verde", "Douro branco": "Douro white", "Dão branco": "Dão white", "Alentejo branco": "Alentejo white", "Alentejo rosé": "Alentejo rosé", "Douro tinto": "Douro red", "Dão tinto": "Dão red", "Setúbal tinto": "Setúbal red", "Alentejo tinto": "Alentejo red", "Espumantes": "Sparkling wines", "A copo": "By the glass"
};
const englishNames = {
  "No prato|À Portuguesa": "Portuguese style", "No prato|Bife Cogumelos": "Steak with mushrooms", "Focaccias|De frango": "Chicken", "Focaccias|De alcatra": "Alcatra steak", "Pregos|Clássico": "Classic", "Pregos|De cabra": "Goat cheese", "Pregos|Frango": "Chicken", "Pregos|Vegetariano": "Vegetarian", "Pregos|Pimentos": "Peppers", "Hambúrgueres|Dos Açores": "Dos Açores", "Hambúrgueres|Vegan": "Vegan", "Hambúrgueres|Trufado": "Truffled", "No prato|T-Bone Steak": "T-bone steak", "Cachorros|Simples": "Simple", "Cachorros|Especial": "Special", "Cachorros|Vegetariano": "Vegetarian", "Saladas|Frango": "Chicken", "Saladas|Cogumelos": "Mushrooms", "Saladas|Atum": "Tuna", "Infantil|No prato": "On a plate", "Infantil|No pão": "In a bun", "Infantil|Cachorro": "Hot dog",
  "Extras|Dose de batatas": "Side of fries", "Extras|Molho de francesinha": "Francesinha sauce", "Extras|Ingrediente extra": "Extra ingredient", "Extras|Extra pão": "Extra bread", "Extras|Extra vegetariano": "Vegetarian extra", "Extras|Extra hambúrguer ou bife · 120 g": "Extra burger or steak · 120 g", "Extras|Substituição de pão": "Swap bread", "Extras|Substituição de hambúrguer ou bife": "Swap burger or steak", "Extras|Substituição para vegetariano": "Swap for vegetarian", "Extras|Embalagem takeaway": "Takeaway container", "Extras|Saco de papel": "Paper bag",
  "Cafetaria|Café": "Espresso", "Cafetaria|Café duplo": "Double espresso", "Cafetaria|Carioca de café": "Coffee infusion", "Cafetaria|Carioca de limão": "Lemon infusion", "Cafetaria|Cevada": "Barley drink", "Cafetaria|Descafeinado": "Decaf coffee", "Cafetaria|Pingo": "Espresso with a dash of milk", "Cafetaria|Abatanado": "Long black", "Cafetaria|Meia de leite": "Coffee with milk", "Cafetaria|Chá": "Tea",
  "Bebidas|Água 0,50 l": "Still water · 0.5 L", "Bebidas|Água 1,50 l": "Still water · 1.5 L", "Bebidas|Água das Pedras": "Água das Pedras sparkling water", "Bebidas|Água das Pedras com sabores": "Flavoured sparkling water", "Bebidas|Sumo de laranja natural": "Fresh orange juice", "Bebidas|Limonada de sabores": "Flavoured lemonade", "Cervejas|Fino · 25 cl": "Draft beer · 25 cl", "Cervejas|Rei · 50 cl": "Draft beer · 50 cl", "Cervejas|Stout de pressão": "Draft stout", "Cervejas|Cerveja sem álcool": "Non-alcoholic beer", "Sangrias|Branco / tinto": "White / red", "Sangrias|Frutos vermelhos": "Red berries", "Sangrias|Maracujá": "Passion fruit",
  "Licores|Amêndoa Amarga": "Bitter almond liqueur", "Licores|Licor Beirão": "Beirão liqueur", "Licores|Vinho do Porto": "Port wine", "Whiskey|Shot · JB": "JB shot"
};
const englishDescriptions = {
  "No prato|À Portuguesa": "Rump steak (300 g), fried egg, salad and fries.", "No prato|Bife Sapiens": "Rump steak (300 g), salad and fries.", "No prato|Bife Cogumelos": "Rump steak (300 g), sautéed mushrooms, fresh cream sauce and fries.", "No prato|T-Bone Steak": "T-bone steak (300 g), fries and salad.",
  "Focaccias|De frango": "Focaccia bread, pesto, arugula, cheese, ham and chicken steak.", "Focaccias|De alcatra": "Focaccia bread, pesto, arugula, cheese, ham, rump steak and cured ham.", "Focaccias|Vegetariana": "Focaccia bread, pesto, arugula, cheese and vegan alheira sausage.",
  "Pregos|Clássico": "Water bread, steak, cheese and ham.", "Pregos|3 Pimentas": "Bolo do caco bread, steak, arugula, tomato, mayonnaise, mustard and three-pepper sauce.", "Pregos|Cogumelos": "Bolo do caco bread, steak, cheese and mushrooms in cream sauce.", "Pregos|Da Serra": "Water bread, steak, Serra cheese and caramelised onion in Port wine reduction.", "Pregos|De cabra": "Bolo do caco bread, steak, goat cheese, caramelised pepper, arugula and fried onion.", "Pregos|Barbecue": "Water bread, steak, lettuce, tomato, cheddar, egg, bacon, fried onion and barbecue sauce.", "Pregos|Francesinha": "Bolo do caco bread, steak, cheese, ham, linguiça, sausage and francesinha sauce.", "Pregos|Frango": "Bolo do caco bread, chicken breast, cheese, tomato, carrot, lettuce and honey mustard sauce.", "Pregos|Vegetariano": "Bolo do caco bread, portobello mushrooms, goat cheese, arugula, carrot, walnuts and honey.", "Pregos|Tropical": "Bolo do caco bread, chicken steak, arugula, roasted pepper, red onion, cheese, bacon, pineapple and honey mustard sauce.", "Pregos|Pimentos": "Bolo do caco bread, steak, olives, arugula, roasted pepper, fried onion and garlic-herb mayonnaise.", "Pregos|Alheira": "Bolo do caco bread, alheira with pine nuts, arugula, cream cheese, egg, apple and honey mustard sauce.",
  "Hambúrgueres|Dos Açores": "Burger bun, beef patty (150 g), cheddar and flamengo cheese, ham, lettuce, tomato, red onion, mayonnaise and ketchup.", "Hambúrgueres|Black Angus": "Burger bun, Black Angus patty (200 g), cheddar, tomato, arugula, bacon, egg, fried onion and sweet chilli sauce.", "Hambúrgueres|Double": "Burger bun, two beef patties (150 g each), cheddar, bacon, red cabbage, pickles, lettuce and garlic-herb mayonnaise.", "Hambúrgueres|Trufado": "Burger bun, beef patty (150 g), lettuce, tomato, cheddar, bacon, mushrooms and truffle mayonnaise.", "Hambúrgueres|Recheado": "Long burger bun, beef patty stuffed with cheese, ham, fried onion, shoestring potatoes, mayonnaise and ketchup.", "Hambúrgueres|Presunto": "Burger bun, beef patty, lettuce, tomato, carrot, pineapple, cheddar, cured ham and sweet chilli sauce.", "Hambúrgueres|Vegan": "Multigrain bolo do caco bread, vegan patty, arugula, tomato, mushrooms and vegan mayonnaise.",
  "Cachorros|Simples": "Bolo do caco hot dog bun, sausage, lettuce, tomato, cheese, ham, fried onion, shoestring potatoes, mayonnaise and ketchup.", "Cachorros|Especial": "Hot dog bun, sausage, cheese, ham and francesinha sauce.", "Cachorros|Vegetariano": "Hot dog bun, vegan sausage, cheese, lettuce, tomato, fried onion, shoestring potatoes, mayonnaise and ketchup.",
  "Saladas|Frango": "Lettuce, arugula, tomato, carrot, onion, olives, chicken, pineapple, cheese and croutons.", "Saladas|Cogumelos": "Lettuce, arugula, tomato, carrot, onion, goat cheese, walnuts, portobello mushrooms and croutons.", "Saladas|Atum": "Lettuce, arugula, tomato, carrot, onion, tuna, cheese, roasted pepper, pineapple and croutons.",
  "Infantil|No prato": "Chicken steak or beef burger patty.", "Infantil|No pão": "Burger bun, chicken steak or beef patty, cheese and ham.", "Infantil|Cachorro": "Hot dog bun, sausage, cheese and ham."
};
const englishNotes = {
  "Saladas": "All options can be customised. Bread, protein or vegetarian substitutions are available at an extra cost; see extras.",
  "Pregos": "Served with fries.", "Hambúrgueres": "Served with fries.", "Cachorros": "Served with fries.",
  "Focaccias": "Served with fries and Sapiens sauce: olive oil, garlic, basil, olives, onion and oregano.",
  "Infantil": "For children up to 12 years old · served with fries."
};
const categoryByName = new Map(menu.map(function (category) { return [category.name, category]; }));
const menuCategoryNames = categoryOrder.filter(function (name) { return name !== "Informações" && name !== "Vídeos" && categoryByName.has(name); });
let language = /^pt/i.test(navigator.language || "") ? "pt" : "en";
let appView = "home";
let currentCategory = null;
let currentItemIndex = 0;
let homeScrollTop = 0;
let categoryMenuScrollTop = 0;
let allMenuScrollTop = 0;
let dishReturnView = "category-list";
let categoryMenuOpen = false;

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, function (char) {
    return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char];
  });
}
function slug(value) {
  return String(value).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}
function categoryLabel(category) {
  return language === "en" ? (englishCategory[category.name] || category.name) : category.name;
}
function itemLabel(category, item) {
  return language === "en" ? (englishNames[category.name + "|" + item.name] || item.name) : item.name;
}
function itemDescription(category, item) {
  if (!item.description) return "";
  return language === "en" ? (englishDescriptions[category.name + "|" + item.name] || item.description) : item.description;
}
function groupLabel(group) {
  return language === "en" ? (englishGroups[group] || group) : group;
}
function categoryNote(category) {
  if (!category.note) return "";
  return language === "en" ? (englishNotes[category.name] || category.note) : category.note;
}
function money(value) {
  const number = Number(value).toFixed(2);
  return language === "en" ? "€ " + number : number.replace(".", ",") + " €";
}
function itemPrice(item) {
  if (item.prices) return item.prices.map(function (entry) {
    const label = language === "en" && entry.label === "Copo" ? "Glass" : entry.label;
    return escapeHtml(label) + " " + money(entry.amount);
  }).join(" <span class=\"price-separator\">·</span> ");
  return money(item.price);
}
function translatedTag(tag) {
  if (language === "en" && tag === "Vegetariano") return "Vegetarian";
  return tag;
}
function slideBackground(categoryName) {
  return categoryColors[categoryName] || "#59313a";
}
function photoSourceLabel(image) {
  const url = String(image || "").toLowerCase();
  if (url.startsWith("assets/dishes/")) return language === "en" ? "Restaurant photo" : "Fotografia do restaurante";
  if (url.includes("tripadvisor.")) return language === "en" ? "Shared photo · Tripadvisor" : "Foto de visitante · Tripadvisor";
  if (url.includes("thefork.")) return language === "en" ? "Shared photo · TheFork" : "Foto de cliente · TheFork";
  return language === "en" ? "Restaurant website" : "Site do restaurante";
}
function renderDishSlide(category, item, index) {
  const categoryId = slug(category.name);
  const key = categoryId + "-" + index;
  const description = itemDescription(category, item);
  const note = categoryNote(category);
  const tags = (item.tags || []).map(function (tag) {
    const label = translatedTag(tag);
    const leaf = tag === "Vegetariano" || tag === "Vegan" ? "<i class=\"diet-leaf\" aria-hidden=\"true\"></i>" : "";
    return "<span class=\"diet-tag\">" + leaf + escapeHtml(label) + "</span>";
  }).join("");
  const photoLabel = language === "en" ? "Dish photo coming soon" : "Fotografia deste prato em breve";
  const media = item.video
    ? "<video class=\"dish-video\" controls playsinline preload=\"metadata\" aria-label=\"" + escapeHtml(itemLabel(category, item)) + "\"><source src=\"" + escapeHtml(item.video) + "\" type=\"video/mp4\">" + (language === "en" ? "Your browser cannot play this video." : "O teu navegador não consegue reproduzir este vídeo.") + "</video>"
    : (item.image
      ? "<img class=\"dish-photo\" src=\"" + escapeHtml(item.image) + "\" alt=\"" + escapeHtml(itemLabel(category, item)) + "\" loading=\"lazy\">"
      : (detailCategories.has(category.name) ? "<div class=\"photo-placeholder\" role=\"img\" aria-label=\"" + photoLabel + "\"><span class=\"photo-icon\" aria-hidden=\"true\">✧</span><span class=\"photo-label\">" + photoLabel + "</span></div>" : ""));
  const photoStage = media ? "<div class=\"photo-stage\">" + media + "</div>" : "";
  const photoCredit = item.video
    ? "<span class=\"photo-credit\">" + (language === "en" ? "Restaurant video" : "Vídeo do restaurante") + "</span>"
    : (item.image ? "<span class=\"photo-credit\">" + escapeHtml(photoSourceLabel(item.image)) + "</span>" : "");
  const slideClass = "menu-slide dish-slide" + (media ? "" : " no-photo");
  return "<section class=\"" + slideClass + "\" data-category=\"" + categoryId + "\" data-key=\"" + key + "\" style=\"--c:" + slideBackground(category.name) + "\"><div class=\"slide-background\"></div>" + photoStage + photoCredit + "<div class=\"slide-glow\"></div><div class=\"slide-content\"><span class=\"slide-category\">" + escapeHtml(categoryLabel(category)) + "</span><h1 class=\"slide-title\">" + escapeHtml(itemLabel(category, item)) + "</h1>" + (description ? "<p class=\"slide-description\">" + escapeHtml(description) + "</p>" : "") + (note ? "<p class=\"slide-note\">" + escapeHtml(note) + "</p>" : "") + "<div class=\"slide-row\"><strong class=\"price-pill\">" + itemPrice(item) + "</strong>" + tags + "</div></div></section>";
}
function renderListSlide(category) {
  const categoryId = slug(category.name);
  let lastGroup = "";
  let rows = "";
  category.items.forEach(function (item, index) {
    if (item.group && item.group !== lastGroup) rows += "<h2 class=\"list-group-title\">" + escapeHtml(groupLabel(item.group)) + "</h2>";
    lastGroup = item.group || "";
    rows += "<button class=\"list-item list-item-button\" type=\"button\" data-action=\"open-dish\" data-name=\"" + escapeHtml(category.name) + "\" data-index=\"" + index + "\"><span>" + escapeHtml(itemLabel(category, item)) + "</span><span>" + itemPrice(item) + "</span><span class=\"list-item-arrow\" aria-hidden=\"true\">›</span></button>";
  });
  const note = categoryNote(category);
  const craftFeature = category.name === "Cervejas" ? renderCraftBeerFeature() : "";
  return "<section class=\"menu-slide list-slide\" data-category=\"" + categoryId + "\" data-key=\"" + categoryId + "-list\" style=\"--c:" + slideBackground(category.name) + "\"><div class=\"list-background\"></div><div class=\"list-panel\"><span class=\"list-eyebrow\">SAPIENS · MENU</span><h1 class=\"list-title\">" + escapeHtml(categoryLabel(category)) + "</h1>" + (note ? "<p class=\"list-note\">" + escapeHtml(note) + "</p>" : "") + craftFeature + rows + "</div></section>";
}
function renderHomeSlide() {
  const english = language === "en";
  const allLabel = english ? "View everything" : "Ver tudo";
  const videosLabel = english ? "Kitchen videos" : "Vídeos da cozinha";
  const infoLabel = english ? "Useful information" : "Informações úteis";
  const categories = menuCategoryNames.map(function (name) {
    const category = categoryByName.get(name);
    return "<button class=\"category-option\" type=\"button\" data-action=\"open-category\" data-name=\"" + escapeHtml(name) + "\"><span>" + escapeHtml(categoryLabel(category)) + "</span></button>";
  }).join("");
  return "<section class=\"menu-slide list-slide landing-slide\" data-key=\"inicio\"><div class=\"list-background\"></div><div class=\"list-panel landing-panel\"><div class=\"category-options\"><button class=\"category-option category-option-all\" type=\"button\" data-action=\"show-all\"><span>" + allLabel + "</span></button>" + categories + "</div><div class=\"landing-links\"><button type=\"button\" data-action=\"open-videos\">" + videosLabel + "</button><button type=\"button\" data-action=\"open-info\">" + infoLabel + "</button></div></div></section>";
}
function renderAllMenu() {
  let slides = "";
  menuCategoryNames.forEach(function (name) {
    const category = categoryByName.get(name);
    slides += renderListSlide(category);
  });
  return slides + renderVideoSlide() + renderInfoSlide();
}
function renderCategoryMenu(category) {
  const english = language === "en";
  const back = english ? "← Menu" : "← Menu inicial";
  const hint = english ? "Choose a dish to see its details." : "Escolhe um prato para ver os detalhes.";
  let lastGroup = "";
  let rows = "";
  category.items.forEach(function (item, index) {
    if (item.group && item.group !== lastGroup) rows += "<h2 class=\"list-group-title\">" + escapeHtml(groupLabel(item.group)) + "</h2>";
    lastGroup = item.group || "";
    rows += "<button class=\"list-item list-item-button\" type=\"button\" data-action=\"open-dish\" data-name=\"" + escapeHtml(category.name) + "\" data-index=\"" + index + "\"><span>" + escapeHtml(itemLabel(category, item)) + "</span><span>" + itemPrice(item) + "</span><span class=\"list-item-arrow\" aria-hidden=\"true\">›</span></button>";
  });
  const note = categoryNote(category);
  const craftFeature = category.name === "Cervejas" ? renderCraftBeerFeature() : "";
  return "<section class=\"menu-slide list-slide category-menu-slide\" data-key=\"" + slug(category.name) + "-menu\" style=\"--c:" + slideBackground(category.name) + "\"><div class=\"list-background\"></div><div class=\"list-panel category-menu-panel\"><button class=\"text-back\" type=\"button\" data-action=\"back-home\">" + back + "</button><span class=\"list-eyebrow\">SAPIENS · MENU</span><h1 class=\"list-title\">" + escapeHtml(categoryLabel(category)) + "</h1>" + (note ? "<p class=\"list-note\">" + escapeHtml(note) + "</p>" : "") + "<p class=\"category-menu-hint\">" + hint + "</p>" + craftFeature + rows + "</div></section>";
}
function renderCraftBeerFeature() {
  const english = language === "en";
  const heading = english ? "Portuguese craft beer" : "Cervejas artesanais portuguesas";
  const intro = english ? "Meet the craft breweries featured at Sapiens." : "Descobre as cervejeiras artesanais em destaque no Sapiens.";
  const brands = [
    {
      name: "Tough Love",
      detail: english ? "Brewed in Esmoriz" : "Produzida em Esmoriz",
      image: "https://assets.untappd.com/site/brewery_logos/brewery-383517_4097d.jpeg",
      alt: english ? "Tough Love brewery logo" : "Logótipo da cervejeira Tough Love",
      url: "https://toughlove.pt/"
    },
    {
      name: "Deuses do Malte",
      detail: english ? "Portuguese craft brewery" : "Cervejeira artesanal portuguesa",
      image: "https://static.wixstatic.com/media/f1ae29_72f6198feef74693bbfe1e54e81cc8d5~mv2.png/v1/fill/w_720%2Ch_720%2Cal_c%2Cq_90%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/LOGOdeusesdomaltePreto.png",
      alt: "Logótipo Deuses do Malte",
      url: "https://filomenacarvalho19.wixsite.com/deusesdomalte"
    },
    {
      name: "Burguesa",
      detail: english ? "Portuguese craft beer" : "Cerveja artesanal portuguesa",
      image: "https://cdn-shopkit.com/usercontent/burguesa/media/images/square/bf21c63-7-cervejas-copo_2.png",
      alt: english ? "Burguesa craft beer selection" : "Seleção de cervejas artesanais Burguesa",
      url: "https://www.burguesa.pt/"
    }
  ];
  const cards = brands.map(function (brand) {
    return "<a class=\"craft-brand-card\" href=\"" + brand.url + "\" target=\"_blank\" rel=\"noopener noreferrer\" aria-label=\"" + escapeHtml(brand.name + " · " + brand.detail) + "\"><span class=\"craft-brand-image\"><img src=\"" + brand.image + "\" alt=\"" + escapeHtml(brand.alt) + "\" loading=\"lazy\"></span><span class=\"craft-brand-copy\"><strong>" + escapeHtml(brand.name) + "</strong><span>" + escapeHtml(brand.detail) + "</span></span><span class=\"craft-brand-arrow\" aria-hidden=\"true\">↗</span></a>";
  }).join("");
  return "<aside class=\"craft-beer-feature\"><div class=\"craft-beer-heading\"><h2>" + heading + "</h2><p>" + intro + "</p></div><div class=\"craft-brand-strip\" aria-label=\"" + (english ? "Craft beer brands" : "Marcas de cerveja artesanal") + "\">" + cards + "</div></aside>";
}
function renderInfoSlide() {
  const english = language === "en";
  const text = english ? {
    label: "SAPIENS · CAFÉ · KITCHEN", title: "Useful information", hours: "Opening hours", hoursText: "12:00–15:00 · 19:00–22:00", reserve: "Reservations", reserveText: "Call us at", allergen: "Allergens", allergenText: "Our products are prepared in environments that are not completely free of allergens. Cross-contamination is possible. Please ask our team.", legal: "Prices and service", legalText: "Prices include VAT and may change without notice. A complaints book is available. No dish, food product or drink may be charged unless requested by the customer or rendered unusable by them, under Article 135 of Decree-Law 10/2015 of 16 January."
  } : {
    label: "SAPIENS · CAFÉ · COZINHA", title: "Informações úteis", hours: "Horário", hoursText: "12:00–15:00 · 19:00–22:00", reserve: "Reservas", reserveText: "Ligue-nos para", allergen: "Alergénios", allergenText: "Os nossos produtos são preparados em ambientes que não são completamente livres de alergénios. Existe risco de contaminação cruzada. Informe-se com a nossa equipa.", legal: "Preços e serviço", legalText: "Os valores incluem IVA e estão sujeitos a alteração sem aviso prévio. Este estabelecimento dispõe de livro de reclamações. Nenhum prato, produto alimentar ou bebida pode ser cobrado se não for solicitado pelo cliente ou por este inutilizado, conforme o artigo 135.º do DL 10/2015, de 16 de janeiro."
  };
  return "<section class=\"menu-slide list-slide info-slide\" data-category=\"informacoes\" data-key=\"informacoes\" style=\"--c:#4b1d3f\"><div class=\"list-background\"></div><div class=\"list-panel info-panel\"><span class=\"list-eyebrow\">" + text.label + "</span><h1 class=\"list-title\">" + text.title + "</h1><div class=\"info-card\"><h2>" + text.hours + "</h2><p>" + text.hoursText + "</p></div><div class=\"info-card\"><h2>" + text.reserve + "</h2><p>" + text.reserveText + " <a href=\"tel:+351916671941\">916 671 941</a></p></div><div class=\"info-card\"><h2>" + text.allergen + "</h2><p>" + text.allergenText + "</p></div><div class=\"info-card\"><h2>" + text.legal + "</h2><p>" + text.legalText + "</p></div></div></section>";
}
function renderVideoSlide() {
  const text = language === "en" ? {
    eyebrow: "SAPIENS · INSIDE THE RESTAURANT",
    title: "A little closer to Sapiens.",
    body: "Muted video previews. Tap any square to open the video or photo.",
    galleryTitle: "Sapiens moments",
    videoBadge: "Video",
    photoBadge: "Photo",
    items: [
      { type: "video", title: "Steak with mushrooms", src: "assets/videos/bife-cogumelos-prato.mp4" },
      { type: "photo", title: "Our dining room", src: "assets/space/restaurant-main.jpg" },
      { type: "video", title: "Tropical", src: "assets/videos/tropical.mp4" },
      { type: "video", title: "Francesinha", src: "assets/videos/francesinha.mp4" },
      { type: "photo", title: "A table at Sapiens", src: "assets/space/restaurant-dining.jpg" },
      { type: "video", title: "Burger A", src: "assets/videos/burger-a.mp4" },
      { type: "video", title: "Sangria", src: "assets/videos/sangria.mp4" },
      { type: "video", title: "Sangria de Limoncello", src: "assets/videos/sangria-limoncello.mp4" },
      { type: "photo", title: "The restaurant", src: "assets/space/restaurant-room.jpg" }
    ],
    action: "More videos on Instagram",
    note: "Instagram opens in a new tab."
  } : {
    eyebrow: "SAPIENS · POR DENTRO DO RESTAURANTE",
    title: "Um pouco mais perto do Sapiens.",
    body: "Os vídeos passam sem som. Toca num quadrado para abrir o vídeo ou a foto.",
    galleryTitle: "Momentos Sapiens",
    videoBadge: "Vídeo",
    photoBadge: "Foto",
    items: [
      { type: "video", title: "Bife Cogumelos", src: "assets/videos/bife-cogumelos-prato.mp4" },
      { type: "photo", title: "A nossa sala", src: "assets/space/restaurant-main.jpg" },
      { type: "video", title: "Tropical", src: "assets/videos/tropical.mp4" },
      { type: "video", title: "Francesinha", src: "assets/videos/francesinha.mp4" },
      { type: "photo", title: "Uma mesa no Sapiens", src: "assets/space/restaurant-dining.jpg" },
      { type: "video", title: "Burger A", src: "assets/videos/burger-a.mp4" },
      { type: "video", title: "Sangria", src: "assets/videos/sangria.mp4" },
      { type: "video", title: "Sangria de Limoncello", src: "assets/videos/sangria-limoncello.mp4" },
      { type: "photo", title: "O restaurante", src: "assets/space/restaurant-room.jpg" }
    ],
    action: "Mais vídeos no Instagram",
    note: "O Instagram abre num novo separador."
  };
  const mediaTiles = text.items.map(function (item) {
    const isVideo = item.type === "video";
    const badge = isVideo
      ? "<span class=\"social-tile-badge\" aria-hidden=\"true\">▶</span>"
      : "<span class=\"social-tile-badge social-tile-photo-badge\" aria-hidden=\"true\"><svg viewBox=\"0 0 24 24\"><rect x=\"3\" y=\"4\" width=\"18\" height=\"16\" rx=\"3\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"/><circle cx=\"8.5\" cy=\"9\" r=\"1.5\" fill=\"currentColor\"/><path d=\"m5 17 5-5 3 3 2-2 4 4\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg></span>";
    const media = isVideo
      ? "<video class=\"social-tile-video\" data-src=\"" + item.src + "\" muted loop playsinline preload=\"none\" aria-hidden=\"true\"></video>"
      : "<img class=\"social-tile-image\" src=\"" + item.src + "\" alt=\"\" loading=\"lazy\">";
    const typeLabel = isVideo ? text.videoBadge : text.photoBadge;
    return "<button class=\"social-tile\" type=\"button\" data-action=\"open-media\" data-media-type=\"" + item.type + "\" data-src=\"" + item.src + "\" data-title=\"" + escapeHtml(item.title) + "\" aria-label=\"" + escapeHtml(typeLabel + ": " + item.title) + "\">" + media + badge + "<span class=\"social-tile-caption\">" + escapeHtml(item.title) + "</span></button>";
  }).join("");
  return "<section class=\"menu-slide video-slide\" data-category=\"videos\" data-key=\"videos\" style=\"--c:#7a2a1f\"><div class=\"list-background\"></div><div class=\"video-panel\"><span class=\"list-eyebrow\">" + text.eyebrow + "</span><h1 class=\"list-title\">" + text.title + "</h1><p class=\"video-copy\">" + text.body + "</p><section class=\"social-gallery\" aria-label=\"" + text.galleryTitle + "\"><h2 class=\"social-gallery-title\">" + text.galleryTitle + "</h2><div class=\"social-media-grid\">" + mediaTiles + "</div></section><a class=\"video-link-card\" href=\"https://www.instagram.com/sapiens_pregaria/reels/\" target=\"_blank\" rel=\"noopener noreferrer\" aria-label=\"" + text.action + " · @sapiens_pregaria\"><span class=\"video-mark\" aria-hidden=\"true\"><svg viewBox=\"0 0 24 24\"><path d=\"M9 6.75v10.5L17.5 12 9 6.75Z\" fill=\"currentColor\"/></svg></span><span class=\"video-link-text\"><strong>" + text.action + "</strong><small>@sapiens_pregaria</small></span><span class=\"video-link-arrow\" aria-hidden=\"true\">↗</span></a><p class=\"video-note\">" + text.note + "</p></div></section>";
}
function updateLanguageButton() {
  languageToggle.textContent = language === "pt" ? "EN" : "PT";
  languageToggle.setAttribute("aria-label", language === "pt" ? "View menu in English" : "Ver ementa em português");
}
function updateActiveCategory() {
  if (categoryNav.hidden || !categoryNav.classList.contains("is-drawer")) return;
  let activeCategoryId = "";
  if (appView === "all-menu") {
    const slides = Array.from(menuMain.querySelectorAll(".menu-slide"));
    if (slides.length) {
      const center = menuMain.scrollTop + menuMain.clientHeight / 2;
      let current = slides[0];
      let nearest = Infinity;
      slides.forEach(function (slide) {
        const slideCenter = slide.offsetTop + slide.offsetHeight / 2;
        const distance = Math.abs(slideCenter - center);
        if (distance < nearest) { nearest = distance; current = slide; }
      });
      activeCategoryId = current.dataset.category || "";
    }
  } else if (currentCategory) {
    activeCategoryId = slug(currentCategory.name);
  } else if (appView === "videos") {
    activeCategoryId = "videos";
  } else if (appView === "info") {
    activeCategoryId = "informacoes";
  }
  categoryNav.querySelectorAll(".drawer-item[data-category]").forEach(function (button) {
    const active = button.dataset.category === activeCategoryId;
    button.setAttribute("aria-current", String(active));
    if (active) button.scrollIntoView({ inline: "nearest", block: "nearest" });
  });
}
function setCategoryMenuOpen(open) {
  categoryMenuOpen = Boolean(open && appView !== "home");
  categoryNav.hidden = !categoryMenuOpen;
  categoryNav.classList.toggle("is-open", categoryMenuOpen);
  categoryMenuScrim.hidden = !categoryMenuOpen;
  categoryMenuToggle.setAttribute("aria-expanded", String(categoryMenuOpen));
  const english = language === "en";
  categoryMenuToggle.setAttribute("aria-label", categoryMenuOpen
    ? (english ? "Close categories" : "Fechar categorias")
    : (english ? "Open categories" : "Abrir categorias"));
  if (categoryMenuOpen) updateActiveCategory();
}
function updateScrollProgress() {
  const range = menuMain.scrollHeight - menuMain.clientHeight;
  const progress = range > 0 ? menuMain.scrollTop / range : 0;
  scrollProgressFill.style.transform = "scaleY(" + Math.max(0, Math.min(1, progress)) + ")";
}
function canAutoplaySocialPreviews() {
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  return !(connection && connection.saveData) && !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function startSocialVideoPreview(video) {
  if (!canAutoplaySocialPreviews()) return;
  if (video.dataset.loaded !== "true") {
    video.src = video.dataset.src;
    video.dataset.loaded = "true";
  }
  const playback = video.play();
  if (playback && typeof playback.catch === "function") playback.catch(function () {});
}
function initializeSocialVideoPreviews() {
  if (socialVideoObserver) socialVideoObserver.disconnect();
  const videos = menuMain.querySelectorAll(".social-tile-video");
  if (!videos.length || !("IntersectionObserver" in window)) return;
  socialVideoObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) startSocialVideoPreview(entry.target);
      else entry.target.pause();
    });
  }, { root: menuMain, rootMargin: "50px 0px", threshold: 0.08 });
  videos.forEach(function (video) { socialVideoObserver.observe(video); });
}
function pauseSocialVideoPreviews() {
  menuMain.querySelectorAll(".social-tile-video").forEach(function (video) { video.pause(); });
}
function resumeVisibleSocialVideoPreviews() {
  if (!canAutoplaySocialPreviews()) return;
  const root = menuMain.getBoundingClientRect();
  menuMain.querySelectorAll(".social-tile-video").forEach(function (video) {
    const rect = video.getBoundingClientRect();
    if (rect.bottom > root.top && rect.top < root.bottom && rect.right > root.left && rect.left < root.right) {
      startSocialVideoPreview(video);
    }
  });
}
function openGalleryMedia(button) {
  const type = button.dataset.mediaType;
  const src = button.dataset.src;
  const title = button.dataset.title || "";
  pauseSocialVideoPreviews();
  mediaLightboxContent.replaceChildren();
  let media;
  if (type === "video") {
    media = document.createElement("video");
    media.controls = true;
    media.autoplay = true;
    media.playsInline = true;
    media.src = src;
    media.setAttribute("aria-label", title);
  } else {
    media = document.createElement("img");
    media.src = src;
    media.alt = title;
  }
  media.className = "media-lightbox-media";
  const caption = document.createElement("p");
  caption.className = "media-lightbox-caption";
  caption.textContent = title;
  mediaLightboxContent.append(media, caption);
  mediaLightbox.showModal();
  if (type === "video") {
    const playback = media.play();
    if (playback && typeof playback.catch === "function") playback.catch(function () {});
  }
}
function renderCurrentView(restoreKey, restoreScrollTop) {
  let content = "";
  if (appView === "home") content = renderHomeSlide();
  else if (appView === "all-menu") content = renderAllMenu();
  else if (appView === "category-list" && currentCategory) content = renderCategoryMenu(currentCategory);
  else if (appView === "dishes" && currentCategory) {
    content = currentCategory.items.map(function (item, index) { return renderDishSlide(currentCategory, item, index); }).join("");
  } else if (appView === "videos") content = renderVideoSlide();
  else if (appView === "info") content = renderInfoSlide();
  else content = renderHomeSlide();

  menuMain.innerHTML = content;
  categoryMenuOpen = false;
  categoryMenuToggle.hidden = appView === "home";
  categoryMenuToggle.setAttribute("aria-expanded", "false");
  categoryMenuScrim.hidden = true;
  categoryNav.classList.remove("is-open", "is-drawer", "is-back-nav");
  categoryNav.hidden = true;
  if (appView !== "home") {
    const english = language === "en";
    const heading = english ? "GO TO" : "IR PARA";
    const closeLabel = english ? "Close categories" : "Fechar categorias";
    const isAllMenu = appView === "all-menu";
    categoryNav.classList.add("is-drawer");
    const backToCategory = appView === "dishes" && currentCategory
      ? "<button class=\"chip drawer-item drawer-home\" type=\"button\" data-action=\"back-category\">← " + escapeHtml(categoryLabel(currentCategory)) + "</button>"
      : "";
    const initialMenuLabel = english ? "⌂  Main menu" : "⌂  Menu inicial";
    const viewAllLabel = english ? "View everything" : "Ver tudo";
    const categoryItems = menuCategoryNames.map(function (name) {
      const categoryId = name === "Informações" ? "informacoes" : slug(name);
      const label = language === "en" ? (englishCategory[name] || name) : name;
      const action = isAllMenu ? "jump-category" : "navigate-category";
      return "<button class=\"chip drawer-item\" type=\"button\" data-action=\"" + action + "\" data-category=\"" + categoryId + "\" data-name=\"" + escapeHtml(name) + "\" aria-current=\"false\">" + escapeHtml(label) + "</button>";
    }).join("");
    const specialItems = ["Vídeos", "Informações"].map(function (name) {
      const categoryId = name === "Informações" ? "informacoes" : "videos";
      const label = language === "en" ? (englishCategory[name] || name) : name;
      const action = isAllMenu ? "jump-category" : (name === "Informações" ? "open-info" : "open-videos");
      return "<button class=\"chip drawer-item\" type=\"button\" data-action=\"" + action + "\" data-category=\"" + categoryId + "\" aria-current=\"false\">" + escapeHtml(label) + "</button>";
    }).join("");
    categoryNav.innerHTML = "<div class=\"category-drawer-heading\"><span>" + heading + "</span><button class=\"drawer-close\" type=\"button\" data-action=\"close-category-menu\" aria-label=\"" + closeLabel + "\">×</button></div>" + backToCategory + "<button class=\"chip drawer-item drawer-home\" type=\"button\" data-action=\"home\">" + initialMenuLabel + "</button><button class=\"chip drawer-item drawer-home\" type=\"button\" data-action=\"show-all\">" + viewAllLabel + "</button>" + categoryItems + specialItems;
  }
  document.documentElement.lang = language === "pt" ? "pt-PT" : "en";
  updateLanguageButton();

  const targetKey = restoreKey || (appView === "dishes" && currentCategory ? slug(currentCategory.name) + "-" + currentItemIndex : "");
  const target = targetKey ? menuMain.querySelector(".menu-slide[data-key=\"" + targetKey + "\"]") : null;
  menuMain.scrollTop = target ? target.offsetTop : (typeof restoreScrollTop === "number" ? restoreScrollTop : 0);
  initializeSocialVideoPreviews();
  updateActiveCategory();
  updateScrollProgress();
}

function handleAction(button) {
  const action = button.dataset.action;
  const name = button.dataset.name;
  if (action === "open-media") {
    openGalleryMedia(button);
    return;
  }
  let restoreScrollTop;
  if (action === "home" || action === "back-home") {
    appView = "home";
    currentCategory = null;
    restoreScrollTop = action === "back-home" ? homeScrollTop : undefined;
  } else if (action === "show-all") {
    currentCategory = null;
    appView = "all-menu";
  } else if (action === "open-category") {
    homeScrollTop = menuMain.scrollTop;
    currentCategory = categoryByName.get(name);
    appView = currentCategory ? "category-list" : "home";
  } else if (action === "navigate-category") {
    currentCategory = categoryByName.get(name);
    appView = currentCategory ? "category-list" : "home";
  } else if (action === "open-dish") {
    dishReturnView = appView;
    if (dishReturnView === "all-menu") allMenuScrollTop = menuMain.scrollTop;
    categoryMenuScrollTop = menuMain.scrollTop;
    currentCategory = categoryByName.get(name);
    currentItemIndex = Math.max(0, Number(button.dataset.index) || 0);
    appView = currentCategory ? "dishes" : "home";
  } else if (action === "back-category") {
    appView = dishReturnView;
    restoreScrollTop = dishReturnView === "all-menu" ? allMenuScrollTop : categoryMenuScrollTop;
  } else if (action === "open-videos") {
    appView = "videos";
  } else if (action === "open-info") {
    appView = "info";
  }
  renderCurrentView("", restoreScrollTop);
}

brandLink.addEventListener("click", function (event) {
  event.preventDefault();
  appView = "home";
  currentCategory = null;
  renderCurrentView();
});

categoryNav.addEventListener("click", function (event) {
  const button = event.target.closest("button[data-action]");
  if (!button) return;
  if (button.dataset.action === "close-category-menu") {
    setCategoryMenuOpen(false);
    return;
  }
  if (button.dataset.action === "jump-category") {
    setCategoryMenuOpen(false);
    const target = menuMain.querySelector(".menu-slide[data-category=\"" + button.dataset.category + "\"]");
    if (target) menuMain.scrollTo({ top: target.offsetTop, behavior: "smooth" });
    return;
  }
  handleAction(button);
});
categoryMenuToggle.addEventListener("click", function () {
  setCategoryMenuOpen(!categoryMenuOpen);
});
categoryMenuScrim.addEventListener("click", function () {
  setCategoryMenuOpen(false);
});
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && categoryMenuOpen) setCategoryMenuOpen(false);
});
mediaLightboxClose.addEventListener("click", function () {
  mediaLightbox.close();
});
mediaLightbox.addEventListener("click", function (event) {
  if (event.target === mediaLightbox) mediaLightbox.close();
});
mediaLightbox.addEventListener("close", function () {
  mediaLightboxContent.replaceChildren();
  resumeVisibleSocialVideoPreviews();
});
menuMain.addEventListener("click", function (event) {
  const button = event.target.closest("button[data-action]");
  if (button && !button.disabled) handleAction(button);
});
menuMain.addEventListener("error", function (event) {
  const image = event.target;
  if (!(image instanceof HTMLImageElement) || !image.classList.contains("dish-photo")) return;
  const label = language === "en" ? "Photo unavailable" : "Fotografia indisponível";
  const fallback = document.createElement("div");
  fallback.className = "photo-placeholder photo-unavailable";
  fallback.setAttribute("role", "img");
  fallback.setAttribute("aria-label", label);
  const icon = document.createElement("span");
  icon.className = "photo-icon";
  icon.setAttribute("aria-hidden", "true");
  icon.textContent = "✧";
  const caption = document.createElement("span");
  caption.className = "photo-label";
  caption.textContent = label;
  fallback.append(icon, caption);
  image.replaceWith(fallback);
}, true);
let scrollFrame = 0;
menuMain.addEventListener("scroll", function () {
  if (scrollFrame) return;
  scrollFrame = requestAnimationFrame(function () { scrollFrame = 0; updateActiveCategory(); updateScrollProgress(); });
});
languageToggle.addEventListener("click", function () {
  let restoreKey = "";
  if (appView === "dishes") {
    const center = menuMain.getBoundingClientRect().top + menuMain.clientHeight / 2;
    const visible = Array.from(menuMain.querySelectorAll(".dish-slide")).find(function (slide) {
      const rect = slide.getBoundingClientRect();
      return rect.top <= center && rect.bottom > center;
    });
    if (visible) restoreKey = visible.dataset.key;
  }
  language = language === "pt" ? "en" : "pt";
  renderCurrentView(restoreKey);
});

renderCurrentView();
