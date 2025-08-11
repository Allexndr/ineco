export interface Zone {
  id: string;
  name: string;
  description: string;
  color: string;
  icon: string;
  activities: Activity[];
}

export interface Activity {
  id: string;
  title: string;
  time: string;
  duration: string;
  description: string;
  speaker?: string;
  image?: string;
  type: 'workshop' | 'lecture' | 'exhibition' | 'show';
}

export interface StageEvent {
  id: string;
  title: string;
  time: string;
  duration: string;
  speaker: string;
  description: string;
  image?: string;
}

export interface Exhibition {
  id: string;
  title: string;
  description: string;
  time: string;
  location: string;
  image?: string;
}

export const festivalZones: Zone[] = [
  {
    id: 'inclusive-society',
    name: 'Инклюзивное общество',
    description: 'OF "ITeachMe" - равные возможности: создавать, играть, вдохновлять',
    color: '#22c55e',
    icon: '🤝',
    activities: [
      {
        id: 'inclusive-1',
        title: 'Советы от фестивального видеографа',
        time: '12:00-16:00',
        duration: '240 мин',
        description: 'Простым языком об инклюзии и создание инклюзивных игр',
        speaker: 'ITeachMe Team',
        type: 'workshop'
      }
    ]
  },
  {
    id: 'eco-city',
    name: 'Эко-Город',
    description: 'Настольная игра "Жара в городе" от Tabiğat Labs',
    color: '#16a34a',
    icon: '🏙️',
    activities: [
      {
        id: 'eco-city-1',
        title: 'Настольная игра "Жара в городе"',
        time: '12:00-16:00',
        duration: '240 мин',
        description: 'Коалиция Института ботаники и фитоинтродукции, Fading TSE, Act for Impact, Urban Forum Kazakhstan',
        speaker: 'Tabigat Labs',
        type: 'workshop'
      }
    ]
  },
  {
    id: 'eco-lifestyle',
    name: 'Экологичный стиль жизни',
    description: 'Интерактивные мастер-классы по сортировке отходов и творчеству',
    color: '#4ade80',
    icon: '♻️',
    activities: [
      {
        id: 'eco-lifestyle-1',
        title: 'Интерактивный мастер-класс по сортировке отходов',
        time: '12:00-16:00',
        duration: '240 мин',
        description: 'Recycle Birge - обучение правильной сортировке отходов',
        speaker: 'Recycle Birge',
        type: 'workshop'
      },
      {
        id: 'eco-lifestyle-2',
        title: 'Клуб "Книги и краски"',
        time: '12:00-16:00',
        duration: '240 мин',
        description: 'Обучение и рисование с BookKultura, книгообмен от OF KOMUNITI+, рисунки природы от OF Mindful generation, каллиграфия от студии Елены Шахматовой',
        speaker: 'BookKultura, KOMUNITI+, Mindful generation',
        type: 'workshop'
      },
      {
        id: 'eco-lifestyle-3',
        title: 'Мастер-класс по изготовлению домиков и поилок',
        time: '12:00-16:00',
        duration: '240 мин',
        description: 'Создание домиков и поилок для насекомых из природных материалов',
        speaker: 'Члены Клуба Зеленых Рейнджеров',
        type: 'workshop'
      }
    ]
  },
  {
    id: 'floristics',
    name: 'Флористика',
    description: 'Создание цветов в стиле оригами и флористических композиций',
    color: '#f97316',
    icon: '🌸',
    activities: [
      {
        id: 'floristics-1',
        title: 'Создание цветов в стиле оригами',
        time: '12:00-16:00',
        duration: '240 мин',
        description: 'Образовательная программа "Знать, чтобы любить" от Института ботаники и фитоинтродукции',
        speaker: 'Институт ботаники и фитоинтродукции',
        type: 'workshop'
      },
      {
        id: 'floristics-2',
        title: 'Создание флористической композиции',
        time: '12:00-16:00',
        duration: '240 мин',
        description: 'Использование цветов из ботанического сада для создания композиций',
        speaker: 'Флористы-дизайнеры',
        type: 'workshop'
      }
    ]
  },
  {
    id: 'steam-robotics',
    name: 'STEAM и робототехника',
    description: 'Мастер-классы по робототехнике, экосистемам и STEM-экспериментам',
    color: '#ea580c',
    icon: '🤖',
    activities: [
      {
        id: 'steam-1',
        title: 'Мастер-класс "Закрытая экосистема"',
        time: '12:00-16:00',
        duration: '240 мин',
        description: 'Создание и изучение закрытых экосистем',
        speaker: 'Zertte Studio',
        type: 'workshop'
      },
      {
        id: 'steam-2',
        title: 'Мастер-класс по робототехнике',
        time: '12:00-16:00',
        duration: '240 мин',
        description: 'Основы робототехники и программирования',
        speaker: 'Nazar School',
        type: 'workshop'
      },
      {
        id: 'steam-3',
        title: 'Мастер-классы от American Maker Space',
        time: '12:00-16:00',
        duration: '240 мин',
        description: '12:00 - "Умный цветочный горшок", "Монитор качества воздуха"; 13:00 - "Извлечение ДНК, Натуральные pH-индикаторы, Бомбочка для ванны"; 14:00 - STEM For Them Experiments; 15:00 - "Зеленые" эксперименты',
        speaker: 'American Maker Space',
        type: 'workshop'
      }
    ]
  },
  {
    id: 'art-platform',
    name: 'Арт-площадка',
    description: 'Мастер-классы по рисованию и творчеству',
    color: '#f59e0b',
    icon: '🎨',
    activities: [
      {
        id: 'art-1',
        title: 'Мастер-класс по рисованию',
        time: '12:00-14:00',
        duration: '120 мин',
        description: 'Основы рисования и живописи',
        speaker: 'Анар Абжанова',
        type: 'workshop'
      },
      {
        id: 'art-2',
        title: 'Рисование яблони Сиверса',
        time: '14:00-16:00',
        duration: '120 мин',
        description: 'Мастер-класс по рисованию яблони Сиверса',
        speaker: 'Бриджит Хофер (Германия), ОФ "Алмалы Жумак"',
        type: 'workshop'
      },
      {
        id: 'art-3',
        title: 'Мастер-классы по рисованию',
        time: '12:00-16:00',
        duration: '240 мин',
        description: 'Творческие мастер-классы для всех возрастов',
        speaker: 'Центр социальной поддержки людей с инвалидностью "Тен Қоғам"',
        type: 'workshop'
      }
    ]
  },
  {
    id: 'window-garden',
    name: 'Сад на подоконнике',
    description: 'Мастер-класс по посадке комнатных растений',
    color: '#4ade80',
    icon: '🪴',
    activities: [
      {
        id: 'window-garden-1',
        title: 'Мастер-класс по посадке комнатных растений',
        time: '12:00-16:00',
        duration: '240 мин',
        description: 'Посадка растений в горшки от лаборатории тропических и субтропических растений Института ботаники',
        speaker: 'Институт ботаники и фитоинтродукции',
        type: 'workshop'
      }
    ]
  },
  {
    id: 'fashion-show',
    name: 'Фэшн шоу',
    description: 'Инклюзивное фэшн шоу в эко-этническом стиле',
    color: '#8b5cf6',
    icon: '👗',
    activities: [
      {
        id: 'fashion-1',
        title: 'Инклюзивное фэшн шоу в эко-этническом стиле',
        time: '15:00-16:00',
        duration: '60 мин',
        description: 'Показ мод от дизайнера-апсайклера и костюмера Ботагоз Садыбековой',
        speaker: 'Ботагоз Садыбекова',
        type: 'show'
      }
    ]
  },
  {
    id: 'audio-tour',
    name: 'Аудио-тур "Тайны хранителей Сада"',
    description: 'Сказочный аудио-тур по Алматинскому ботаническому саду',
    color: '#06b6d4',
    icon: '🎧',
    activities: [
      {
        id: 'audio-tour-1',
        title: 'Аудио-тур "Тайны хранителей Сада"',
        time: '12:00-16:00',
        duration: '240 мин',
        description: 'Сказочный аудио-тур по Алматинскому ботаническому саду для детей 9+. Требуется смартфон и наушники',
        speaker: 'Аудио-гид',
        type: 'workshop'
      }
    ]
  },

];

export const stageEvents: StageEvent[] = [
  {
    id: 'stage-1',
    title: 'Квиз по безопасности для проекта SAQ 2025',
    time: '15:30',
    duration: '30 мин',
    speaker: 'Национальная волонтерская сеть',
    description: 'Интерактивный квиз по вопросам безопасности'
  },
  {
    id: 'stage-2',
    title: 'Шоу-выступление флориста',
    time: '16:00',
    duration: '10 мин',
    speaker: 'Дмитрий Гребенкин',
    description: 'Захватывающее шоу-выступление от известного флориста'
  },
  {
    id: 'stage-3',
    title: 'Приветственное слово представителя Eurasian division компании "Chevron"',
    time: '16:10',
    duration: '5 мин',
    speaker: 'Представитель Chevron',
    description: 'Официальное приветствие от партнера фестиваля'
  },
  {
    id: 'stage-4',
    title: 'Приветственное слово PF ITeachMe',
    time: '16:15',
    duration: '5 мин',
    speaker: 'PF ITeachMe',
    description: 'Приветствие от организаторов фестиваля'
  },
  {
    id: 'stage-5',
    title: 'Приветственное слово Института ботаники и фитоинтродукции',
    time: '16:20',
    duration: '15 мин',
    speaker: 'Институт ботаники и фитоинтродукции',
    description: 'Презентация образовательных материалов и программ'
  },
  {
    id: 'stage-6',
    title: 'Лекция "Священные деревья. О живой памяти, корнях и будущем"',
    time: '16:35',
    duration: '15 мин',
    speaker: 'Темиртас Искаков',
    description: 'Увлекательная лекция о священных деревьях и их значении'
  },
  {
    id: 'stage-7',
    title: 'Презентация "Доступный туризм, инватуризм"',
    time: '16:50',
    duration: '10 мин',
    speaker: 'Джепка Богдан',
    description: 'О доступном туризме для людей с инвалидностью'
  },
  {
    id: 'stage-8',
    title: 'Дискуссия "Загрязнение окружающей среды и раздельный сбор отходов"',
    time: '17:00',
    duration: '15 мин',
    speaker: 'Валерия Фролова',
    description: 'Обсуждение экологических проблем и решений'
  },
  {
    id: 'stage-9',
    title: 'Презентация "Инклюзия в действии: как технологии меняют мир"',
    time: '17:15',
    duration: '15 мин',
    speaker: 'Дмитрий Пак и Бекгожаев Даурен',
    description: 'О роли технологий в создании инклюзивного общества'
  },
  {
    id: 'stage-10',
    title: 'Лекция "Красная книга - сигнал бедствия от мира растений"',
    time: '17:30',
    duration: '15 мин',
    speaker: 'Гульнара Ситпаева',
    description: 'О редких и исчезающих видах растений'
  },
  {
    id: 'stage-11',
    title: 'Презентация "Инклюзия изнутри: уроки, которым меня научила моя школа"',
    time: '17:45',
    duration: '15 мин',
    speaker: 'Дилара Жумагалиева',
    description: 'Личный опыт и уроки инклюзивного образования'
  },
  {
    id: 'stage-12',
    title: 'Перформативная лекция "Когда ботаники спасали этот мир"',
    time: '18:00',
    duration: '60 мин',
    speaker: 'Театр ARTishok',
    description: 'Театрализованная лекция о роли ботаников в истории'
  },
  {
    id: 'stage-13',
    title: 'Документальный фильм "Алматы? Можно ли жить со смогом?"',
    time: '19:00',
    duration: '75 мин',
    speaker: 'Канат Бейсекеев',
    description: 'Фильм о проблеме загрязнения воздуха в Алматы'
  }
];

export const exhibitions: Exhibition[] = [
  {
    id: 'exhibition-1',
    title: 'Выставка картин (на перголах)',
    description: 'Художественная выставка от Центра социальной поддержки людей с инвалидностью "Тен Қоғам", Анар Абжановой, Центров аутизма и Ресурсного центра "Асыл Мирас" Фонда Булата',
    time: '12:00-16:00',
    location: 'Перголы ботанического сада'
  },
  {
    id: 'exhibition-2',
    title: 'Выставка детских поделок',
    description: 'Детские поделки из природных материалов от посетителей ботанического сада',
    time: '12:00-16:00',
    location: 'Территория фестиваля'
  },
  {
    id: 'exhibition-3',
    title: 'Экскурсии от научных сотрудников',
    description: 'Экскурсии по коллекциям Главного ботанического сада Алматы на русском и казахском языках',
    time: '12:00-16:00',
    location: 'Входной павильон'
  },
  {
    id: 'exhibition-4',
    title: 'Субботник',
    description: 'Акция по уборке территории после фестиваля от волонтеров Федерации клубов ЮНЕСКО',
    time: '16:00-18:00',
    location: 'Территория фестиваля'
  }
];

export const festivalInfo = {
  name: 'InEco Fest 2025',
  date: '15 августа 2025 года',
  time: '12:00 - 20:15',
  location: 'Главный Ботанический Сад',
  address: 'г. Алматы, Бостандыкский район',
  description: 'Первый фестиваль, соединяющий экологию и инклюзию. Программа мастер-классов с 12:00 до 16:00, программа сцены с 15:30 до 20:15.',
  mission: 'Наша миссия - показать, что экология и инклюзия неразрывно связаны. Мы стремимся создать пространство, где каждый может внести свой вклад в сохранение природы, независимо от своих возможностей. Вместе мы создаем экологичное будущее.',
  partners: [
    { name: 'Chevron', logo: '/images/logos/chevron.png' },
    { name: 'ITeachMe', logo: '/images/logos/iteachme.png' },
    { name: 'InEco', logo: '/images/logos/ineco.png' },
    { name: 'Ботанический сад', logo: '/images/logos/botsad.png' },
    { name: 'Институт ботаники и фитоинтродукции', logo: '/images/logos/institute.png' },
    { name: 'Tabigat Labs', logo: '/images/logos/tabigat.png' },
    { name: 'Recycle Birge', logo: '/images/logos/recycle.png' },
    { name: 'American Maker Space', logo: '/images/logos/ams.png' }
  ]
}; 