export interface EntityLink {
  label: string;
  url: string;
}

export interface Entity {
  id: string;
  name: string; // краткое имя
  officialRu?: string;
  officialKk?: string;
  image?: string; // path under public
  // краткие/полные описания
  shortRu?: string;
  shortKk?: string;
  fullRu?: string;
  fullKk?: string;
  description?: string; // для старых записей
  links?: EntityLink[];
}

export const entities: Entity[] = [
  {
    id: 'tabigat-labs',
    name: 'Tabiğat Labs',
    image: '/images/logos/tabigat.png',
    shortRu:
      'Экообразовательная программа о бережном отношении к среде и этичном взаимодействии с природой в городе. События для всех возрастов: занятия, МК, лекции, фестивали.',
    shortKk:
      'Қаладағы табиғатпен этикалық өзара әрекет пен экологияға қамқор көзқарасты насихаттайтын бағдарлама.',
    links: [
      { label: 'Сайт', url: 'https://urbanforum.kz/tabigat-labs-2025' }
    ]
  },
  {
    id: 'american-space-almaty',
    name: 'American Space Almaty',
    image: '/images/logos/american-space-almaty.png',
    officialRu: 'American Space Almaty / Makerspace Almaty',
    officialKk: 'American Space Almaty / Makerspace Almaty',
    shortRu:
      'Проект дипломатической миссии США в Казахстане. Площадка общественной дипломатии; Makerspace — инновационное креативное пространство.',
    shortKk:
      'АҚШ миссиясының жобасы. Қоғамдық дипломатия алаңы; Makerspace — шығармашылық және инновациялық орта.',
    links: [
      { label: 'Instagram', url: 'https://www.instagram.com/asalmaty/' }
    ]
  },
  {
    id: 'makerspace-almaty',
    name: 'Makerspace Almaty',
    image: '/images/logos/makerspace-almaty.png',
    shortRu:
      'Инновационное пространство для практических проектов, прототипирования и STEAM‑активностей.',
    shortKk:
      'STEAM жобалары мен прототиптеуге арналған инновациялық орта.',
    links: []
  },
  {
    id: 'zertte-studio',
    name: 'Zertte Studio',
    image: '/images/logos/zertte-studio.png',
    shortRu:
      'Лаборатория фонда «Caravan of Knowledge» для практических занятий и экспериментов в сфере STEAM‑образования.',
    shortKk:
      'STEAM-білім бойынша тәжірибелік сабақтар мен эксперименттерге арналған зертхана.',
    links: [
      { label: 'Instagram', url: 'https://www.instagram.com/zerttestudio' }
    ]
  },
  {
    id: 'dy-art',
    name: 'DY.Art (Прокудина Яна)',
    image: '/images/logos/dy-art.png',
    shortRu:
      'Студия флористики и декора. 19 лет создаёт атмосферу с помощью растений и цветов; 1000+ проектов.',
    shortKk:
      'Флористика және декор студиясы. 19 жыл тәжірибе, 1000+ жоба.',
    links: [
      { label: 'Сайт', url: 'https://www.dyart.kz' },
      { label: 'Instagram', url: 'https://www.instagram.com/yana_dyart' }
    ]
  },
  {
    id: 'ekaterina-lee',
    name: 'Екатерина Ли',
    image: '/images/logos/ekaterina-lee.png',
    shortRu:
      'Автор книги «Элина узнаёт про инклюзию». МК 15:00–16:00: об инклюзии, рисунок природными кистями, трафареты из растений.',
    shortKk:
      '«Элинаның инклюзиямен танысуы» кітабының авторы. 15:00–16:00: инклюзия, табиғи қылқаламмен сурет, өсімдіктен трафарет.',
    links: []
  }
];


