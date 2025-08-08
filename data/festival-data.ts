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
        title: 'Мастер-класс по изготовлению домиков и кормушек',
        time: '12:00-16:00',
        duration: '240 мин',
        description: 'Создание домиков и кормушек для животных',
        speaker: 'Мастера',
        type: 'workshop'
      }
    ]
  },
  {
    id: 'floristics',
    name: 'Флористика',
    description: 'Создание цветов в стиле оригами в рамках образовательной программы "Знать, чтобы любить"',
    color: '#f97316',
    icon: '🌸',
    activities: [
      {
        id: 'flora-1',
        title: 'Создание цветов в стиле оригами',
        time: '12:00-16:00',
        duration: '240 мин',
        description: 'Образовательная программа "Знать, чтобы любить" от Института ботаники и фитоинтродукции',
        speaker: 'Институт ботаники и фитоинтродукции',
        type: 'workshop'
      }
    ]
  },
  {
    id: 'steam',
    name: 'STEAM',
    description: 'Мастер-классы по робототехнике, экосистемам и STEM экспериментам',
    color: '#ea580c',
    icon: '🔬',
    activities: [
      {
        id: 'steam-1',
        title: 'Мастер-класс "Замкнутая экосистема"',
        time: '12:00-16:00',
        duration: '240 мин',
        description: 'Zertte Studio - создание замкнутой экосистемы',
        speaker: 'Zertte Studio',
        type: 'workshop'
      },
      {
        id: 'steam-2',
        title: 'Мастер-класс по робототехнике',
        time: '12:00-16:00',
        duration: '240 мин',
        description: 'School Inventor - обучение робототехнике',
        speaker: 'School Inventor',
        type: 'workshop'
      },
      {
        id: 'steam-3',
        title: 'Мастер-классы от American Maker space',
        time: '12:00-16:00',
        duration: '240 мин',
        description: '12:00 "Умный цветочный горшок", "Монитор качества воздуха", 13:00 "Извлечение ДНК, Натуральные pH индикаторы, Бомбочка для ванны", 14:00 STEM For Them Experiments, 15:00 "Зеленые технологии"',
        speaker: 'American Maker space',
        type: 'workshop'
      }
    ]
  },
  {
    id: 'art-platform',
    name: 'Арт-площадка',
    description: 'Мастер-классы по рисованию от известных художников',
    color: '#dc2626',
    icon: '🎨',
    activities: [
      {
        id: 'art-1',
        title: 'Мастер-класс по рисованию от Анар Абжановой',
        time: '12:00-14:00',
        duration: '120 мин',
        description: 'Мастер-класс по рисованию от известной художницы',
        speaker: 'Анар Абжанова',
        type: 'workshop'
      },
      {
        id: 'art-2',
        title: 'Мастер-класс по рисованию яблони Сиверса',
        time: '14:00-16:00',
        duration: '120 мин',
        description: 'Мастер-класс по рисованию яблони Сиверса от Бриджит Хофхерр (Германия)',
        speaker: 'Бриджит Хофхерр (Германия)',
        type: 'workshop'
      },
      {
        id: 'art-3',
        title: 'Мастер-классы по рисованию от Центра социальной поддержки',
        time: '12:00-16:00',
        duration: '240 мин',
        description: 'Мастер-классы по рисованию от Центра социальной поддержки людей с инвалидностью "Тен Қоғам"',
        speaker: 'Центр "Тен Қоғам"',
        type: 'workshop'
      }
    ]
  },
  {
    id: 'window-garden',
    name: 'Сад на подоконнике',
    description: 'Мастер-класс по посадке комнатных растений',
    color: '#059669',
    icon: '🪴',
    activities: [
      {
        id: 'window-garden-1',
        title: 'Мастер-класс по посадке комнатных растений',
        time: '12:00-16:00',
        duration: '240 мин',
        description: 'Лаборатория тропических и субтропических растений Института ботаники и фитоинтродукции',
        speaker: 'Институт ботаники и фитоинтродукции',
        type: 'workshop'
      }
    ]
  },
  {
    id: 'fashion-show',
    name: 'Зона Фэшн шоу',
    description: 'Инклюзивное эко-этно стиль фэшн-шоу',
    color: '#8b5cf6',
    icon: '👗',
    activities: [
      {
        id: 'fashion-1',
        title: 'Инклюзивное эко-этно стиль фэшн-шоу',
        time: '15:00-16:00',
        duration: '60 мин',
        description: 'Инклюзивное эко-этно стиль фэшн-шоу',
        speaker: 'Дизайнеры',
        type: 'show'
      }
    ]
  },
  {
    id: 'eco-quest',
    name: 'Эко-квест для детей',
    description: 'Игра от ботанического сада "Знать, чтобы любить"',
    color: '#06b6d4',
    icon: '🎮',
    activities: [
      {
        id: 'quest-1',
        title: 'Эко-квест для детей',
        time: '10:00',
        duration: '120 мин',
        description: 'Игра от ботанического сада "Знать, чтобы любить"',
        speaker: 'Ботанический сад',
        type: 'workshop'
      }
    ]
  },
  {
    id: 'drawing',
    name: 'Мастер-класс по рисованию',
    description: 'Возможность создать свой шедевр с Анар Абжановой, Светланы Какоткиной, Светланы Кушковой, Зарины Чукитавой',
    color: '#f59e0b',
    icon: '🎨',
    activities: [
      {
        id: 'drawing-1',
        title: 'Мастер-класс по рисованию',
        time: '11:00',
        duration: '120 мин',
        description: 'Возможность создать свой шедевр с Анар Абжановой, Светланы Какоткиной, Светланы Кушковой, Зарины Чукитавой',
        speaker: 'Анар Абжанова, Светлана Какоткина, Светлана Кушкова, Зарина Чукитава',
        type: 'workshop'
      }
    ]
  },
  {
    id: 'charity-fair',
    name: 'Благотворительная ярмарка и выставка НПО',
    description: 'Продажа эко-товаров и hand-made изделий',
    color: '#10b981',
    icon: '🛍️',
    activities: [
      {
        id: 'charity-1',
        title: 'Благотворительная ярмарка',
        time: '10:00',
        duration: '480 мин',
        description: 'Продажа эко-товаров и hand-made изделий, выставка НПО',
        speaker: 'НПО',
        type: 'exhibition'
      }
    ]
  },
  {
    id: 'art-exhibition',
    name: 'Выставка картин детских рисунков + фото-картины животных',
    description: 'Выставка творческих работ детей и фотографий животных',
    color: '#ef4444',
    icon: '🖼️',
    activities: [
      {
        id: 'art-exhibition-1',
        title: 'Выставка картин',
        time: '10:00',
        duration: '480 мин',
        description: 'Выставка картин детских рисунков + фото-картины животных',
        speaker: 'Дети и фотографы',
        type: 'exhibition'
      }
    ]
  },
  {
    id: 'movie-screening',
    name: 'Девушка и Море',
    description: 'Просмотр отечественного кино совместно с исполнителями главных ролей',
    color: '#6366f1',
    icon: '🎬',
    activities: [
      {
        id: 'movie-1',
        title: 'Девушка и Море',
        time: '17:00',
        duration: '120 мин',
        description: 'Просмотр отечественного кино совместно с исполнителями главных ролей',
        speaker: 'Исполнители главных ролей',
        type: 'show'
      }
    ]
  },
  {
    id: 'book-club',
    name: 'Книжный клуб и выставка книг',
    description: 'Погрузитесь в мир книг и литературы',
    color: '#84cc16',
    icon: '📚',
    activities: [
      {
        id: 'book-1',
        title: 'Книжный клуб',
        time: '12:00',
        duration: '90 мин',
        description: 'Погрузитесь в мир книг и литературы',
        speaker: 'Литераторы',
        type: 'workshop'
      }
    ]
  },
  {
    id: 'national-games',
    name: 'Национальные игры',
    description: 'Интерактивный мастер-класс по игре Тоғызқұмалақ',
    color: '#f97316',
    icon: '🎲',
    activities: [
      {
        id: 'games-1',
        title: 'Национальные игры',
        time: '14:00',
        duration: '90 мин',
        description: 'Интерактивный мастер-класс по игре Тоғызқұмалақ',
        speaker: 'Мастера национальных игр',
        type: 'workshop'
      }
    ]
  },
  {
    id: 'labyrinth',
    name: 'Лабиринт',
    description: 'Узнаем, как и для чего создается сенсорная дорожка в ботсаду',
    color: '#8b5cf6',
    icon: '🌀',
    activities: [
      {
        id: 'labyrinth-1',
        title: 'Лабиринт',
        time: '13:00',
        duration: '60 мин',
        description: 'Узнаем, как и для чего создается сенсорная дорожка в ботсаду',
        speaker: 'Ботанический сад',
        type: 'workshop'
      }
    ]
  },
  {
    id: 'botanical-tour',
    name: 'Экскурсии от гидов-ботаников',
    description: 'Часовая экскурсия по ботаническому саду, рассказы о собранных коллекциях растений в саду, увлекательные факты о растениях и об истории ботанического сада',
    color: '#059669',
    icon: '🌿',
    activities: [
      {
        id: 'tour-1',
        title: 'Экскурсии от гидов-ботаников',
        time: '11:00',
        duration: '60 мин',
        description: 'Часовая экскурсия по ботаническому саду, рассказы о собранных коллекциях растений в саду, увлекательные факты о растениях и об истории ботанического сада',
        speaker: 'Гиды-ботаники',
        type: 'workshop'
      }
    ]
  },
  {
    id: 'npo-exhibition',
    name: 'Выставка НПО и социальных проектов',
    description: 'Познакомитесь с проектами общественных организаций в области экологии и инклюзии',
    color: '#06b6d4',
    icon: '🤝',
    activities: [
      {
        id: 'npo-1',
        title: 'Выставка НПО',
        time: '10:00',
        duration: '480 мин',
        description: 'Познакомитесь с проектами общественных организаций в области экологии и инклюзии',
        speaker: 'НПО',
        type: 'exhibition'
      }
    ]
  },
  {
    id: 'main-stage',
    name: 'Сцена',
    description: 'Официальные церемонии, лекции и тренинги от спикеров, фильмы, концерт и лечебная музыка',
    color: '#dc2626',
    icon: '🎭',
    activities: [
      {
        id: 'stage-1',
        title: 'Сцена',
        time: '09:00',
        duration: '540 мин',
        description: 'Официальные церемонии, лекции и тренинги от спикеров, фильмы, концерт и лечебная музыка',
        speaker: 'Различные спикеры',
        type: 'lecture'
      }
    ]
  }
];

export const stageEvents: StageEvent[] = [
  {
    id: 'stage-1',
    title: 'Викторина по технике безопасности от Караван Знаний',
    time: '15:30',
    duration: '30 мин',
    speaker: 'Караван Знаний',
    description: 'Интерактивная викторина по технике безопасности'
  },
  {
    id: 'stage-2',
    title: 'Шоу-выступление флориста Дмитрия',
    time: '16:00',
    duration: '10 мин',
    speaker: 'Дмитрий (флорист)',
    description: 'Захватывающее шоу-выступление по флористике'
  },
  {
    id: 'stage-3',
    title: 'Приветственное слово от Chevron Kazakhstan',
    time: '16:10',
    duration: '5 мин',
    speaker: 'Chevron Kazakhstan',
    description: 'Официальное приветствие от партнера фестиваля'
  },
  {
    id: 'stage-4',
    title: 'Приветственное слово от ITeachMe',
    time: '16:15',
    duration: '5 мин',
    speaker: 'ITeachMe',
    description: 'Приветствие от организатора фестиваля'
  },
  {
    id: 'stage-5',
    title: 'Приветственное слово от Ботанического Сада и презентация образовательных программ',
    time: '16:20',
    duration: '15 мин',
    speaker: 'Ботанический Сад',
    description: 'Презентация образовательных программ и приветствие'
  },
  {
    id: 'stage-6',
    title: 'Сакральные деревья. О живой памяти, корнях и будущем',
    time: '16:35',
    duration: '15 мин',
    speaker: 'Темиртас Искаков, Tabigat Labs',
    description: 'Лекция о сакральных деревьях и их значении'
  },
  {
    id: 'stage-7',
    title: 'Доступный туризм, инватуризм',
    time: '16:50',
    duration: '10 мин',
    speaker: 'Джепка Богдан',
    description: 'Презентация о доступном туризме и инватуризме'
  },
  {
    id: 'stage-8',
    title: '«Загрязнение окружающей среды и РСО» (раздельный сбор отходов)',
    time: '17:00',
    duration: '15 мин',
    speaker: 'Валерия Фролова, Общественный фонд Greenup.kz (Recycle.Birge)',
    description: 'Лекция о загрязнении окружающей среды и раздельном сборе отходов'
  },
  {
    id: 'stage-9',
    title: 'Инклюзия в действии: как технологии меняют мир',
    time: '17:15',
    duration: '15 мин',
    speaker: 'Дмитрий Пак и Бекгожаев Даурен',
    description: 'Презентация о том, как технологии способствуют инклюзии'
  },
  {
    id: 'stage-10',
    title: 'Лекция "Красная Книга - сигнал бедствия из мира растений"',
    time: '17:30',
    duration: '15 мин',
    speaker: 'Ситпаева Г.Т., ген директор Института',
    description: 'Лекция о Красной Книге и сохранении растений'
  },
  {
    id: 'stage-11',
    title: 'Инклюзия изнутри: уроки, которые дала мне школа',
    time: '17:45',
    duration: '15 мин',
    speaker: 'Дилара Жумагалиева, МамаПро',
    description: 'Персональный опыт и уроки инклюзии'
  },
  {
    id: 'stage-12',
    title: 'Перформативная лекция «Когда ботаники спасли этот мир»',
    time: '18:00',
    duration: '60 мин',
    speaker: 'Театр ARTиШОК',
    description: 'Уникальная перформативная лекция от театра ARTиШОК'
  },
  {
    id: 'stage-13',
    title: 'Документальный фильм «Алматы? Ок жить со смогом?»',
    time: '19:00',
    duration: '75 мин',
    speaker: 'Канат Бейсикеев (режиссер)',
    description: 'Показ документального фильма о проблеме смога в Алматы'
  }
];

export const exhibitions: Exhibition[] = [
  {
    id: 'exhibition-1',
    title: 'Выставка картин',
    description: 'Выставка картин от Центра социальной поддержки людей с инвалидностью "Тен Қоғам", Анар Абжановой, Центра реабилитации для детей с аутизмом "Асыл Мирас"',
    time: '12:00 - 16:00',
    location: 'Арт-площадка'
  },
  {
    id: 'exhibition-2',
    title: 'Выставка детских поделок',
    description: 'Детские поделки из природных материалов от посетителей ботанического сада',
    time: '12:00 - 16:00',
    location: 'Зона творчества'
  },
  {
    id: 'exhibition-3',
    title: 'Аудио-тур "Тайны хранителей Сада"',
    description: 'Интерактивная экскурсия по Главному Ботаническому Саду Алматы',
    time: '12:00 - 16:00',
    location: 'Главный Ботанический Сад Алматы'
  }
];

export const festivalInfo = {
  name: 'InEco Fest 2025',
  date: '15 августа 2025',
  time: '12:00 - 20:15',
  location: 'Главный Ботанический Сад',
  address: 'г. Алматы, Бостандыкский район',
  description: 'Первый фестиваль, соединяющий экологию и инклюзию. Повышение осведомленности общества о важности заботы об окружающей среде и создания инклюзивного сообщества.',
  mission: 'Наша миссия - показать, что экология и инклюзия неразрывно связаны. Мы стремимся создать пространство, где каждый может внести свой вклад в сохранение природы, независимо от своих возможностей. Вместе мы создаем экологичное будущее.',
  partners: [
    { name: 'Chevron', logo: '/images/logos/chevron.png' },
    { name: 'ITeachMe', logo: '/images/logos/iteachme.png' },
    { name: 'InEco', logo: '/images/logos/ineco.png' },
    { name: 'Ботанический сад', logo: '/images/logos/botsad.png' },
    { name: 'Институт ботаники и фитоинтродукции', logo: '/images/logos/institute.png' }
  ]
}; 