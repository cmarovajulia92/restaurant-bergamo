export interface DrinkItem {
  id: number;
  name: string;
  category: string;
  catKey: string;
  desc: string;
  volume: string;
  price: string;
}

export const drinksMenu: DrinkItem[] = [
  // KÁVA
  { id: 1, name: 'Espresso', category: 'Káva', catKey: 'kava', desc: 'Silné espresso z arabica zmesi', volume: '30 ml', price: '1,60 €' },
  { id: 2, name: 'Cappuccino', category: 'Káva', catKey: 'kava', desc: 'Espresso s jemnou mliečnou penou', volume: '150 ml', price: '2,50 €' },
  { id: 3, name: 'Latte Macchiato', category: 'Káva', catKey: 'kava', desc: 'Vrstvená káva s teplým mliekom', volume: '300 ml', price: '2,90 €' },
  { id: 4, name: 'Flat White', category: 'Káva', catKey: 'kava', desc: 'Double espresso s hodvábnym mliekom', volume: '180 ml', price: '2,80 €' },
  { id: 5, name: 'Americano', category: 'Káva', catKey: 'kava', desc: 'Espresso ředené horúcou vodou', volume: '200 ml', price: '2,20 €' },

  // ČAJ
  { id: 6, name: 'Zelený čaj', category: 'Čaj', catKey: 'caj', desc: 'Japonský zelený čaj Sencha', volume: '300 ml', price: '2,20 €' },
  { id: 7, name: 'Earl Grey', category: 'Čaj', catKey: 'caj', desc: 'Čierny čaj s bergamotom', volume: '300 ml', price: '2,20 €' },
  { id: 8, name: 'Bylinkový čaj', category: 'Čaj', catKey: 'caj', desc: 'Mäta, harmanček alebo šípka', volume: '300 ml', price: '2,20 €' },

  // HORÚCA ČOKOLÁDA
  { id: 9, name: 'Belgická čokoláda', category: 'Horúca čokoláda', catKey: 'horuca-cokolada', desc: 'Pravá belgická tmavá čokoláda so šľahačkou', volume: '200 ml', price: '3,20 €' },
  { id: 10, name: 'Biela čokoláda', category: 'Horúca čokoláda', catKey: 'horuca-cokolada', desc: 'Jemná biela čokoláda s vanilkovým mliekom', volume: '200 ml', price: '3,20 €' },

  // MINERÁLNE VODY
  { id: 11, name: 'Rajec perlivá', category: 'Minerálne vody', catKey: 'mineralne-vody', desc: 'Slovenská pramenitá voda s bublinkami', volume: '330 ml', price: '1,80 €' },
  { id: 12, name: 'Rajec neperlivá', category: 'Minerálne vody', catKey: 'mineralne-vody', desc: 'Slovenská pramenitá neperlivá voda', volume: '330 ml', price: '1,80 €' },
  { id: 13, name: 'Evian still', category: 'Minerálne vody', catKey: 'mineralne-vody', desc: 'Francúzska neperlivá prírodná voda', volume: '500 ml', price: '2,50 €' },

  // SLADENÉ NÁPOJE
  { id: 14, name: 'Coca-Cola', category: 'Sladené nápoje', catKey: 'sladene-napoje', desc: 'Original alebo Zero', volume: '330 ml', price: '2,20 €' },
  { id: 15, name: 'Fanta / Sprite', category: 'Sladené nápoje', catKey: 'sladene-napoje', desc: 'Osviežujúce sladené nápoje', volume: '330 ml', price: '2,20 €' },
  { id: 16, name: 'Nestea citrón', category: 'Sladené nápoje', catKey: 'sladene-napoje', desc: 'Ľadový čaj s citrónom', volume: '500 ml', price: '2,20 €' },

  // LIMONÁDY
  { id: 17, name: 'Domáca citrónová limonáda', category: 'Limonády', catKey: 'limonady', desc: 'Čerstvo vylisovaný citrón, mäta, trstinový cukor', volume: '400 ml', price: '3,90 €' },
  { id: 18, name: 'Jahodo-bazová limonáda', category: 'Limonády', catKey: 'limonady', desc: 'Čerstvé jahody, bazový sirup, citrus, sóda', volume: '400 ml', price: '4,20 €' },
  { id: 19, name: 'Mango-limetková limonáda', category: 'Limonády', catKey: 'limonady', desc: 'Mango pyré, čerstvá limetka, zázvorový sirup', volume: '400 ml', price: '4,50 €' },

  // MIEŠANÉ NÁPOJE
  { id: 20, name: 'Aperol Spritz', category: 'Miešané nápoje', catKey: 'miesane-napoje', desc: 'Aperol, prosecco, sóda, pomarančový plátok', volume: '200 ml', price: '6,50 €' },
  { id: 21, name: 'Hugo', category: 'Miešané nápoje', catKey: 'miesane-napoje', desc: 'Prosecco, bazový sirup, sóda, mäta, limetka', volume: '200 ml', price: '6,50 €' },
  { id: 22, name: 'Mojito', category: 'Miešané nápoje', catKey: 'miesane-napoje', desc: 'Rum, limetka, mäta, trstinový cukor, sóda', volume: '300 ml', price: '7,90 €' },
  { id: 23, name: 'Gin & Tonic', category: 'Miešané nápoje', catKey: 'miesane-napoje', desc: 'Prémium gin, tonic water, čerstvá uhorka', volume: '250 ml', price: '7,50 €' },

  // PIVO ČAPOVANÉ
  { id: 24, name: 'Zlatý Bažant 10°', category: 'Pivo čapované', catKey: 'pivo-capovane', desc: 'Slovenský svetlý ležiak', volume: '500 ml', price: '2,80 €' },
  { id: 25, name: 'Pilsner Urquell 12°', category: 'Pivo čapované', catKey: 'pivo-capovane', desc: 'Prémium český ležiak z Plzne', volume: '500 ml', price: '3,50 €' },

  // PIVO FĽAŠKOVÉ
  { id: 26, name: 'Corona Extra', category: 'Pivo fľaškové', catKey: 'pivo-flaskove', desc: 'Mexické svetlé pivo s citrónom', volume: '355 ml', price: '3,90 €' },
  { id: 27, name: 'Hoegaarden', category: 'Pivo fľaškové', catKey: 'pivo-flaskove', desc: 'Belgické pšeničné pivo', volume: '330 ml', price: '3,90 €' },
  { id: 28, name: 'Peroni Nastro Azzurro', category: 'Pivo fľaškové', catKey: 'pivo-flaskove', desc: 'Talianske prémiové pivo', volume: '330 ml', price: '3,90 €' },

  // VÍNNA KARTA
  { id: 29, name: 'Welschriesling — Eger', category: 'Vínna karta', catKey: 'vinna-karta', desc: 'Suché biele víno, Tokajská oblasť, SK', volume: '0,15 l', price: '2,90 €' },
  { id: 30, name: 'Cabernet Sauvignon', category: 'Vínna karta', catKey: 'vinna-karta', desc: 'Suché červené, Južnoslovenská oblasť, SK', volume: '0,15 l', price: '3,20 €' },
  { id: 31, name: 'Prosecco DOC Brut', category: 'Vínna karta', catKey: 'vinna-karta', desc: 'Talianske šumivé víno, Veneto', volume: '0,15 l', price: '4,50 €' },
  { id: 32, name: 'Rosé — Provence', category: 'Vínna karta', catKey: 'vinna-karta', desc: 'Suché ružové víno, juh Francúzska', volume: '0,15 l', price: '3,90 €' },

  // GIN
  { id: 33, name: "Hendrick's Gin", category: 'Gin', catKey: 'gin', desc: 'Škótsky gin s ružou a uhorkou', volume: '40 ml', price: '4,90 €' },
  { id: 34, name: 'Tanqueray London Dry', category: 'Gin', catKey: 'gin', desc: 'Klasický londýnsky dry gin', volume: '40 ml', price: '4,50 €' },
  { id: 35, name: 'Monkey 47', category: 'Gin', catKey: 'gin', desc: 'Nemecký gin so 47 botanikmi', volume: '40 ml', price: '6,90 €' },

  // WHISKY
  { id: 36, name: 'Jameson Irish Whiskey', category: 'Whisky', catKey: 'whisky', desc: 'Trojnásobne destilovaná írska whiskey', volume: '40 ml', price: '3,90 €' },
  { id: 37, name: 'Glenfiddich 12Y', category: 'Whisky', catKey: 'whisky', desc: 'Single malt škótska whisky', volume: '40 ml', price: '5,90 €' },
  { id: 38, name: "Jack Daniel's Tennessee", category: 'Whisky', catKey: 'whisky', desc: 'Americká Tennessee whiskey', volume: '40 ml', price: '4,20 €' },

  // RUM
  { id: 39, name: 'Bacardi Carta Blanca', category: 'Rum', catKey: 'rum', desc: 'Kubánsky biely rum', volume: '40 ml', price: '3,50 €' },
  { id: 40, name: 'Diplomatico Reserva', category: 'Rum', catKey: 'rum', desc: 'Venezuelský tmavý rum, 12Y', volume: '40 ml', price: '5,50 €' },

  // BRANDY
  { id: 41, name: 'Torres 10 Imperial', category: 'Brandy', catKey: 'brandy', desc: 'Španielsky brandy de Jerez', volume: '40 ml', price: '4,20 €' },
  { id: 42, name: 'Metaxa 7★', category: 'Brandy', catKey: 'brandy', desc: 'Grécky aromatický destilát', volume: '40 ml', price: '4,50 €' },

  // TEQUILA
  { id: 43, name: 'Jose Cuervo Gold', category: 'Tequila', catKey: 'tequila', desc: 'Mexická zlatá tequila', volume: '40 ml', price: '3,80 €' },
  { id: 44, name: 'Patron Silver', category: 'Tequila', catKey: 'tequila', desc: 'Prémiová 100% agave tequila', volume: '40 ml', price: '5,90 €' },

  // DESTILÁTY
  { id: 45, name: 'Slivovica Marko', category: 'Destiláty', catKey: 'destilatty', desc: 'Tradičná slovenská slivovica', volume: '40 ml', price: '2,80 €' },
  { id: 46, name: 'Grappa Nonino', category: 'Destiláty', catKey: 'destilatty', desc: 'Talianska grappa z Monovitigno', volume: '40 ml', price: '4,90 €' },
  { id: 47, name: 'Borovička Juniperus', category: 'Destiláty', catKey: 'destilatty', desc: 'Slovenská borovička z borievok', volume: '40 ml', price: '2,50 €' },

  // LIKÉRY
  { id: 48, name: 'Baileys Irish Cream', category: 'Likéry', catKey: 'likerey', desc: 'Írsky smotanový likér', volume: '40 ml', price: '3,50 €' },
  { id: 49, name: 'Limoncello', category: 'Likéry', catKey: 'likerey', desc: 'Taliansky citrónový likér', volume: '40 ml', price: '3,20 €' },
  { id: 50, name: 'Amaretto Disaronno', category: 'Likéry', catKey: 'likerey', desc: 'Taliansky mandľový likér', volume: '40 ml', price: '3,50 €' },

  // VERMOUTH
  { id: 51, name: 'Martini Rosso', category: 'Vermouth', catKey: 'vermouth', desc: 'Talianske červené vermouth', volume: '60 ml', price: '3,50 €' },
  { id: 52, name: 'Noilly Prat Dry', category: 'Vermouth', catKey: 'vermouth', desc: 'Francúzske suché vermouth', volume: '60 ml', price: '3,50 €' },

  // POCHUTINY
  { id: 53, name: 'Mix orieškov', category: 'Pochutiny', catKey: 'pochutiny', desc: 'Pečené arašidy, kešu, mandle', volume: '50 g', price: '2,50 €' },
  { id: 54, name: 'Marinované olivy', category: 'Pochutiny', catKey: 'pochutiny', desc: 'Zelené a čierne olivy s bylinkami', volume: '80 g', price: '2,90 €' },
];

export interface DrinkSubgroup {
  label: string;
  catKey: string;
}

export interface DrinkGroup {
  key: string;
  label: string;
  subgroups: DrinkSubgroup[];
}

export const drinkGroups: DrinkGroup[] = [
  {
    key: 'teplé',
    label: 'Teplé nápoje',
    subgroups: [
      { label: 'Káva', catKey: 'kava' },
      { label: 'Čaj', catKey: 'caj' },
      { label: 'Horúca čokoláda', catKey: 'horuca-cokolada' },
    ],
  },
  {
    key: 'nealk',
    label: 'Nealkoholické',
    subgroups: [
      { label: 'Minerálne vody', catKey: 'mineralne-vody' },
      { label: 'Sladené nápoje', catKey: 'sladene-napoje' },
      { label: 'Limonády', catKey: 'limonady' },
    ],
  },
  {
    key: 'pivo-vino',
    label: 'Pivo & Víno',
    subgroups: [
      { label: 'Čapované pivo', catKey: 'pivo-capovane' },
      { label: 'Fľaškové pivo', catKey: 'pivo-flaskove' },
      { label: 'Vínna karta', catKey: 'vinna-karta' },
    ],
  },
  {
    key: 'kokteily',
    label: 'Kokteily',
    subgroups: [
      { label: 'Miešané nápoje', catKey: 'miesane-napoje' },
    ],
  },
  {
    key: 'spirits',
    label: 'Spirits',
    subgroups: [
      { label: 'Gin', catKey: 'gin' },
      { label: 'Whisky', catKey: 'whisky' },
      { label: 'Rum', catKey: 'rum' },
      { label: 'Tequila', catKey: 'tequila' },
      { label: 'Brandy', catKey: 'brandy' },
      { label: 'Destiláty', catKey: 'destilatty' },
      { label: 'Likéry', catKey: 'likerey' },
      { label: 'Vermouth', catKey: 'vermouth' },
    ],
  },
  {
    key: 'doplnky',
    label: 'Doplnky',
    subgroups: [
      { label: 'Pochutiny', catKey: 'pochutiny' },
    ],
  },
];
