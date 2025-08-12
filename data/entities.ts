export interface EntityLink {
  label: string;
  url: string;
}

export interface Entity {
  id: string;
  name: string;
  image?: string; // path under public
  description: string;
  links?: EntityLink[];
}

export const entities: Entity[] = [
  {
    id: 'tabigat-labs',
    name: 'Tabiğat Labs',
    image: '/images/logos/tabigat.png',
    description:
      'Tabiğat Labs — экообразовательная программа о бережном подходе к окружающей среде и этичном взаимодействии с природой в городе. С 2023 года объединяет проекты для всех возрастов: программы для подростков в Алматы и Астане, серии встреч для взрослых, творческие мастер-классы и публичные лекции, книжный клуб и городские фестивали. Программа реализуется Urban Forum Kazakhstan, Институтом Ботаники и Фитоинтродукции (Главным ботаническим садом), Fading.TSE и Act for Impact в партнерстве с компанией «Шеврон».',
    links: [
      { label: 'Сайт', url: 'https://urbanforum.kz/tabigat-labs-2025' }
    ]
  },
  {
    id: 'american-space-almaty',
    name: 'American Space Almaty',
    image: '/images/logos/american-space-almaty.png',
    description:
      'American Space Almaty — проект дипломатической миссии США в Казахстане, крупнейшая площадка общественной дипломатии. Makerspace Almaty — инновационное и креативное пространство.\n\nAmerican Space Almaty – АҚШ-тың Қазақстандағы дипломатиялық миссиясының жобасы. Шығармашылық және инновациялық орта! Makerspace Almaty – АҚШ дипломатиялық миссиясы мен Chevron компаниясының мемлекеттік-жекеменшік әріптестігінің бір бөлігі.',
    links: [
      { label: 'Instagram', url: 'https://www.instagram.com/asalmaty/' }
    ]
  },
  {
    id: 'makerspace-almaty',
    name: 'Makerspace Almaty',
    image: '/images/logos/makerspace-almaty.png',
    description:
      'Makerspace Almaty — инновационное и креативное пространство для практических проектов, прототипирования и STEAM-активностей. Бір уақытта — шығармашылық пен инженерияны біріктіретін орта.',
    links: []
  },
  {
    id: 'zertte-studio',
    name: 'Zertte Studio',
    image: '/images/logos/zertte-studio.png',
    description:
      'Zertte Studio — лаборатория корпоративного фонда «Caravan of Knowledge», созданная для практических занятий, научных экспериментов и мастер-классов в сфере STEAM-образования. Лаборатория объединяет школьников, студентов и педагогов, предоставляя доступ к современному оборудованию и инновационным методикам обучения. Zertte Studio қызметі — қордың Қазақстан бойынша ауқымды білім беру бастамаларының бір бөлігі.',
    links: [
      { label: 'Instagram', url: 'https://www.instagram.com/zerttestudio' }
    ]
  },
  {
    id: 'dy-art',
    name: 'DY.Art (Прокудина Яна)',
    image: '/images/logos/dy-art.png',
    description:
      'Студия флористики и декора DY.Art. Флорист Прокудина Яна. 19 лет создаёт атмосферу с помощью растений и цветов, реализовано 1000+ проектов.',
    links: [
      { label: 'Сайт', url: 'https://www.dyart.kz' },
      { label: 'Instagram', url: 'https://www.instagram.com/yana_dyart' }
    ]
  },
  {
    id: 'ekaterina-lee',
    name: 'Екатерина Ли',
    image: '/images/logos/ekaterina-lee.png',
    description:
      'Автор книги «Элина узнаёт про инклюзию», помогает детям понять ценность разнообразия и принятия. Мастер-класс 15:00–16:00: простыми словами об инклюзии; картины кистями из листьев и веток; трафареты из растений. \n\nҚазақша: «Элинаның инклюзиямен танысуы» кітабының авторы. Шеберлік сабағы 15:00–16:00: инклюзия туралы қарапайым тілмен; табиғи қылқаламдармен сурет салу; өсімдіктен трафарет жасау.',
    links: []
  }
];


