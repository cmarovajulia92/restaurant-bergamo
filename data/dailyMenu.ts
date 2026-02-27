export interface DailyMain {
  label: string;
  name: string;
  desc: string;
  price: string;
}

export interface DayMenu {
  soup: { name: string; desc: string; price: string };
  mains: DailyMain[];
}

// Index 0 = Sunday … 6 = Saturday, null = closed (weekend)
export const DAILY_MENU: Record<number, DayMenu | null> = {
  1: { // Pondelok
    soup: { name: 'Hovädzí vývar s rezancami', desc: 'Tradičná polievka varená na hovädzích kostiach s čerstvou zeleninou a domácimi rezancami.', price: '1,80 €' },
    mains: [
      { label: 'Hlavné jedlo 1', name: 'Bravčový rezeň viedenský',  desc: 'Klasický viedenský rezeň z bravčového stehna, varené zemiaky a šalát.',       price: '7,50 €' },
      { label: 'Hlavné jedlo 2', name: 'Kuracie prsia na prírodno', desc: 'Šťavnaté kuracie prsia s bylinkovou omáčkou, ryžou a sezónnou zeleninou.',    price: '7,90 €' },
      { label: 'Hlavné jedlo 3', name: 'Penne Arrabiata',           desc: 'Cestoviny v pikantnej paradajkovej omáčke s cesnakom, kaparami a bazalkou.',  price: '6,90 €' },
    ],
  },
  2: { // Utorok
    soup: { name: 'Cesnaková polievka', desc: 'Hustá cesnaková polievka so zlatistými krutónmi a strúhaným syrom Eidam.', price: '1,80 €' },
    mains: [
      { label: 'Hlavné jedlo 1', name: 'Vyprážaná ryba s tartárskou omáčkou', desc: 'Filet z tresky v chrumkavom cestíčku, varené zemiaky a domáca tartárska omáčka.', price: '8,20 €' },
      { label: 'Hlavné jedlo 2', name: 'Kuracie rizoto so šampiňónmi',        desc: 'Krémové rizoto s kuracím mäsom, šampiňónmi a strúhaným parmezánom.',           price: '7,50 €' },
      { label: 'Hlavné jedlo 3', name: 'Zemiakové halušky s bryndzou',        desc: 'Tradičné slovenské halušky s ovčou bryndzou a opraženou slaninou.',           price: '7,20 €' },
    ],
  },
  3: { // Streda
    soup: { name: 'Minestrone', desc: 'Talianska zeleninová polievka s cestovinou, paradajkami a čerstvými bylinkami.', price: '1,80 €' },
    mains: [
      { label: 'Hlavné jedlo 1', name: 'Hovädzí guľáš s knedľou', desc: 'Pomaly dusený hovädzí guľáš na cibuľke a paprike, servírovaný s domácou knedľou.', price: '8,50 €' },
      { label: 'Hlavné jedlo 2', name: 'Pečené kuracie stehno',    desc: 'Chrumkavo pečené kuracie stehno s rozmarínom, pečené zemiaky a sezónna zelenina.', price: '7,90 €' },
      { label: 'Hlavné jedlo 3', name: 'Tagliatelle Bolognese',    desc: 'Domáce tagliatelle s tradičnou bolognese omáčkou a strúhaným parmezánom.',         price: '7,20 €' },
    ],
  },
  4: { // Štvrtok
    soup: { name: 'Paradajková polievka so smotanou', desc: 'Hustá paradajková polievka s bazalkou a smotanou, servírovaná s opečeným bagetovým chlebom.', price: '1,80 €' },
    mains: [
      { label: 'Hlavné jedlo 1', name: 'Bravčový plátok na smotane', desc: 'Jemný bravčový plátok v smotanovej omáčke s hráškom, servírovaný s ryžou.',    price: '7,90 €' },
      { label: 'Hlavné jedlo 2', name: 'Grilovaný losos',            desc: 'Filet z lososa s citrónovou omáčkou, opečeným špenátom a varenými zemiakmi.',   price: '9,50 €' },
      { label: 'Hlavné jedlo 3', name: 'Špenátová omeleta',          desc: 'Vajíčková omeleta so špenátom, feta syrom a cherry paradajkami.',               price: '6,50 €' },
    ],
  },
  5: { // Piatok
    soup: { name: 'Rybacia polievka', desc: 'Výdatná polievka z morských rýb s paprikou, paradajkami a bylinkami.', price: '2,20 €' },
    mains: [
      { label: 'Hlavné jedlo 1', name: 'Vyprážaný karas',     desc: 'Čerstvý karas v domácom cestíčku, varené zemiaky a šalát z čerstvej zeleniny.', price: '8,90 €' },
      { label: 'Hlavné jedlo 2', name: 'Spaghetti Carbonara', desc: 'Klasická carbonara s pancettou, vajíčkom, parmezánom a čiernym korením.',      price: '7,90 €' },
      { label: 'Hlavné jedlo 3', name: 'Fazuľový hrniec',     desc: 'Hrejivá fazuľová polievka-jedlo so zeleninou a klobásou, servírovaná s chlebom.', price: '6,90 €' },
    ],
  },
  6: null, // Sobota
  0: null, // Nedeľa
};

export const DAY_NAMES = ['Nedeľa', 'Pondelok', 'Utorok', 'Streda', 'Štvrtok', 'Piatok', 'Sobota'];
export const MONTHS = ['januára', 'februára', 'marca', 'apríla', 'mája', 'júna', 'júla', 'augusta', 'septembra', 'októbra', 'novembra', 'decembra'];
