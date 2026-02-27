export interface FoodItem {
  id: number;
  name: string;
  category: string;
  catKey: string;
  desc: string;
  weight: string;
  price: string;
  img: string;
}

export const foodMenu: FoodItem[] = [
  // POLIEVKY
  { id: 1, name: 'Hovädzí vývar s rezancami', category: 'Polievky', catKey: 'polievky', desc: 'Tradičná polievka varená na hovädzích kostiach s čerstvou zeleninou.', weight: '300 ml', price: '2,20 €', img: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80' },
  { id: 2, name: 'Cesnaková polievka', category: 'Polievky', catKey: 'polievky', desc: 'Hustá cesnaková polievka so zlatistými krutónmi a syrom Eidam.', weight: '300 ml', price: '2,50 €', img: 'https://images.unsplash.com/photo-1604152135912-04a022e23696?auto=format&fit=crop&w=600&q=80' },
  { id: 3, name: 'Minestrone', category: 'Polievky', catKey: 'polievky', desc: 'Talianska zeleninová polievka s cestovinou, paradajkami a bylinkami.', weight: '300 ml', price: '2,80 €', img: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&w=600&q=80' },

  // PREDJEDLÁ
  { id: 4, name: 'Bruschetta al Pomodoro', category: 'Predjedlá', catKey: 'predjedla', desc: 'Opečený chlieb s čerstvými paradajkami, cesnakom, bazalkou a olivovým olejom.', weight: '180 g', price: '4,90 €', img: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=600&q=80' },
  { id: 5, name: 'Caprese', category: 'Predjedlá', catKey: 'predjedla', desc: 'Čerstvá mozzarella s paradajkami, bazalkou a balzamikovým octom.', weight: '200 g', price: '5,90 €', img: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=600&q=80' },
  { id: 6, name: 'Šunková doska', category: 'Predjedlá', catKey: 'predjedla', desc: 'Výber talianskych a slovenských šuniek s cornichons a domácim chlebom.', weight: '220 g', price: '8,50 €', img: 'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?auto=format&fit=crop&w=600&q=80' },

  // HLAVNÉ JEDLÁ
  { id: 7, name: 'Bravčový rezeň viedenský', category: 'Hlavné jedlá', catKey: 'hlavne', desc: 'Klasický viedenský rezeň v zlatistej strúhanke podávaný s citrónom.', weight: '180 g', price: '10,90 €', img: 'https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?auto=format&fit=crop&w=600&q=80' },
  { id: 8, name: 'Kuracie prsia so šampiňónmi', category: 'Hlavné jedlá', catKey: 'hlavne', desc: 'Grilované kuracie prsia v smotanovej šampiňónovej omáčke s ryžou.', weight: '220 g', price: '11,50 €', img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80' },
  { id: 9, name: 'Losos na grile', category: 'Hlavné jedlá', catKey: 'hlavne', desc: 'Filet z lososa s citrónovou omáčkou, opečeným špenátom a zemiakmi.', weight: '200 g', price: '14,90 €', img: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80' },
  { id: 10, name: 'Hovädzí steak Ribeye', category: 'Hlavné jedlá', catKey: 'hlavne', desc: '250 g steak s bylinkovým maslom, hranolkami a grilovanou zeleninou.', weight: '250 g', price: '22,90 €', img: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=600&q=80' },

  // PIZZA
  { id: 11, name: 'Margherita', category: 'Pizza', catKey: 'pizza', desc: 'Paradajková omáčka, mozzarella fior di latte, čerstvá bazalka, olivový olej.', weight: '32 cm', price: '8,50 €', img: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=600&q=80' },
  { id: 12, name: 'Diavola', category: 'Pizza', catKey: 'pizza', desc: 'Paradajková omáčka, mozzarella, salame piccante, chilli, oregano.', weight: '32 cm', price: '9,90 €', img: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=600&q=80' },
  { id: 13, name: 'Quattro Formaggi', category: 'Pizza', catKey: 'pizza', desc: 'Štyri druhy syra — mozzarella, gorgonzola, parmezán, pecorino.', weight: '32 cm', price: '10,90 €', img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80' },
  { id: 14, name: 'Prosciutto e Rucola', category: 'Pizza', catKey: 'pizza', desc: 'Mozzarella, prosciutto crudo, rukola, cherry paradajky, parmezán.', weight: '32 cm', price: '11,50 €', img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80' },

  // CESTOVINY
  { id: 15, name: 'Spaghetti Carbonara', category: 'Cestoviny', catKey: 'cestoviny', desc: 'Klasická carbonara s pancettou, vajíčkom, parmezánom a čiernym korením.', weight: '320 g', price: '9,90 €', img: 'https://images.unsplash.com/photo-1588013273468-315fd88ea34c?auto=format&fit=crop&w=600&q=80' },
  { id: 16, name: 'Penne Arrabiata', category: 'Cestoviny', catKey: 'cestoviny', desc: 'Pikantná paradajková omáčka, cesnak, chilli, kapary, bazalka.', weight: '320 g', price: '8,90 €', img: 'https://images.unsplash.com/photo-1516100882582-96c3a05fe590?auto=format&fit=crop&w=600&q=80' },
  { id: 17, name: 'Tagliatelle Bolognese', category: 'Cestoviny', catKey: 'cestoviny', desc: 'Domáce tagliatelle s tradičnou bolognese omáčkou a strúhaným parmezánom.', weight: '350 g', price: '10,90 €', img: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?auto=format&fit=crop&w=600&q=80' },
  { id: 18, name: 'Linguine ai Frutti di Mare', category: 'Cestoviny', catKey: 'cestoviny', desc: 'Morské plody, cesnak, cherry paradajky, biele víno, olivový olej.', weight: '350 g', price: '14,90 €', img: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=600&q=80' },

  // ŠALÁTY
  { id: 19, name: 'Caesar šalát', category: 'Šaláty', catKey: 'salaty', desc: 'Rímsky šalát, krutóny, parmezán, caesar dresing, cherry paradajky.', weight: '280 g', price: '7,90 €', img: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&w=600&q=80' },
  { id: 20, name: 'Grécky šalát', category: 'Šaláty', catKey: 'salaty', desc: 'Paradajky, uhorka, červená cibuľa, olivy, feta syr, oregano.', weight: '300 g', price: '7,50 €', img: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80' },
  { id: 21, name: 'Šalát so grilovaným kuracím', category: 'Šaláty', catKey: 'salaty', desc: 'Zmiešaný šalát, grilované kuracie prsia, avokádo, cherry paradajky, dresing.', weight: '350 g', price: '9,90 €', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80' },

  // DEZERTY
  { id: 22, name: 'Tiramisu', category: 'Dezerty', catKey: 'dezerty', desc: 'Klasické talianske tiramisu s mascarpone, espressom a kakaovým práškom.', weight: '150 g', price: '5,90 €', img: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=600&q=80' },
  { id: 23, name: 'Čokoládová lávová torta', category: 'Dezerty', catKey: 'dezerty', desc: 'Teplá čokoládová torta s tekutým stredom a vanilkovou zmrzlinou.', weight: '160 g', price: '6,50 €', img: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&w=600&q=80' },
  { id: 24, name: 'Panna Cotta', category: 'Dezerty', catKey: 'dezerty', desc: 'Krémová panna cotta s omáčkou z lesného ovocia a čerstvou mätou.', weight: '140 g', price: '5,50 €', img: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=600&q=80' },

  // DETSKÉ MENU
  { id: 25, name: 'Kuracie nugetky', category: 'Detské menu', catKey: 'detske', desc: 'Domáce kuracie nugetky s chrumkavými hranolkami a ketchupom.', weight: '150 g', price: '5,90 €', img: 'https://images.unsplash.com/photo-1562802378-063ec186a863?auto=format&fit=crop&w=600&q=80' },
  { id: 26, name: 'Mini Pizza Margherita', category: 'Detské menu', catKey: 'detske', desc: 'Malá pizza s paradajkovou omáčkou a mozzarellou.', weight: '24 cm', price: '5,50 €', img: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=600&q=80' },
  { id: 27, name: 'Špagety s maslom', category: 'Detské menu', catKey: 'detske', desc: 'Jemné špagety s maslom a strúhaným syrom.', weight: '250 g', price: '4,50 €', img: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=600&q=80' },

  // PRÍLOHY
  { id: 28, name: 'Hranolky', category: 'Prílohy', catKey: 'prilohy', desc: 'Chrumkavé hranolky zo čerstvých zemiakov s morskou soľou.', weight: '150 g', price: '2,50 €', img: 'https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&w=600&q=80' },
  { id: 29, name: 'Varené zemiaky', category: 'Prílohy', catKey: 'prilohy', desc: 'Varené zemiaky s maslom a čerstvou petržlenovou vňaťou.', weight: '200 g', price: '2,20 €', img: 'https://images.unsplash.com/photo-1530049478892-b8f3e7a47ead?auto=format&fit=crop&w=600&q=80' },
  { id: 30, name: 'Grilovaná zelenina', category: 'Prílohy', catKey: 'prilohy', desc: 'Sezónna zelenina grilovaná s olivovým olejom a provensálskymi bylinkami.', weight: '180 g', price: '3,20 €', img: 'https://images.unsplash.com/photo-1543352634-99a5d50ae78e?auto=format&fit=crop&w=600&q=80' },
];

export const foodCategories = [
  { key: 'all', label: 'Všetko' },
  { key: 'cestoviny', label: 'Cestoviny' },
  { key: 'detske', label: 'Detské menu' },
  { key: 'dezerty', label: 'Dezerty' },
  { key: 'hlavne', label: 'Hlavné jedlá' },
  { key: 'pizza', label: 'Pizza' },
  { key: 'polievky', label: 'Polievky' },
  { key: 'predjedla', label: 'Predjedlá' },
  { key: 'prilohy', label: 'Prílohy' },
  { key: 'salaty', label: 'Šaláty' },
];
