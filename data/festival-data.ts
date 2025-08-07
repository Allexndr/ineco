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
    id: 'iteachme',
    name: '"ITeachMe" - Marshmallow Challenge',
    description: 'Интерактивная зона с командными играми и развитием soft skills',
    color: '#22c55e',
    icon: '🎯',
    activities: [
      {
        id: 'iteachme-1',
        title: 'Marshmallow Challenge',
        time: '10:00',
        duration: '60 мин',
        description: 'Командная игра по строительству башни из спагетти и зефира',
        speaker: 'ITeachMe Team',
        type: 'workshop'
      }
    ]
  },
  {
    id: 'eco-city',
    name: 'Эко-город',
    description: 'Мастер-классы и викторины от Tabigat Labs',
    color: '#16a34a',
    icon: '🏙️',
    activities: [
      {
        id: 'eco-city-1',
        title: 'Мастер-классы от Tabigat Labs',
        time: '10:00',
        duration: '120 мин',
        description: 'Интерактивные мастер-классы и викторины по экологии',
        speaker: 'Tabigat Labs',
        type: 'workshop'
      }
    ]
  },
  {
    id: 'plant-transplant',
    name: 'Мастер-класс по пересадке растений',
    description: 'Каждый участник заберет с собой растение, посаженное своими руками',
    color: '#4ade80',
    icon: '🌱',
    activities: [
      {
        id: 'plant-1',
        title: 'Пересадка растений',
        time: '11:00',
        duration: '90 мин',
        description: 'Мастер-класс по пересадке растений - каждый участник заберет с собой растение',
        speaker: 'Ботанический сад',
        type: 'workshop'
      }
    ]
  },
  {
    id: 'floristics',
    name: 'Флористика и войлоковаляние',
    description: 'Мастер-класс по созданию букетов из цветов и из войлока',
    color: '#f97316',
    icon: '🌸',
    activities: [
      {
        id: 'flora-1',
        title: 'Флористика и войлоковаляние',
        time: '12:00',
        duration: '120 мин',
        description: 'Мастер-класс по созданию букетов из цветов и из войлока',
        speaker: 'Мастера флористики',
        type: 'workshop'
      }
    ]
  },
  {
    id: 'steam',
    name: 'STEM и робототехника',
    description: 'Сборка и запуск роботов, мастер-класс "Замкнутая экосистема" и "Микрозелень это легко"',
    color: '#ea580c',
    icon: '🔬',
    activities: [
      {
        id: 'steam-1',
        title: 'STEM и робототехника',
        time: '13:00',
        duration: '150 мин',
        description: 'Сборка и запуск роботов, мастер-класс "Замкнутая экосистема" и "Микрозелень это легко"',
        speaker: 'STEM эксперты',
        type: 'workshop'
      }
    ]
  },
  {
    id: 'mobile-photography',
    name: 'Мобилография и блоггинг',
    description: 'Теория плюс практика от профессионального мобилографа',
    color: '#dc2626',
    icon: '📱',
    activities: [
      {
        id: 'mobile-1',
        title: 'Мобилография и блоггинг',
        time: '14:00',
        duration: '90 мин',
        description: 'Теория плюс практика от профессионального мобилографа',
        speaker: 'Профессиональный мобилограф',
        type: 'workshop'
      }
    ]
  },
  {
    id: 'eco-lifestyle',
    name: 'Экология - стиль жизни',
    description: 'Мастер-классы по раздельному сбору мусора и экологичному стилю жизни',
    color: '#059669',
    icon: '♻️',
    activities: [
      {
        id: 'eco-lifestyle-1',
        title: 'Экология - стиль жизни',
        time: '15:00',
        duration: '90 мин',
        description: 'Мастер-классы по раздельному сбору мусора и экологичному стилю жизни',
        speaker: 'Экологи',
        type: 'workshop'
      }
    ]
  },
  {
    id: 'fashion-show',
    name: 'Фэшн шоу от Айман',
    description: 'Фэшн шоу с участием моделей Inclusive People',
    color: '#8b5cf6',
    icon: '👗',
    activities: [
      {
        id: 'fashion-1',
        title: 'Фэшн шоу от Айман',
        time: '16:00',
        duration: '60 мин',
        description: 'Фэшн шоу с участием моделей Inclusive People',
        speaker: 'Айман',
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
    title: 'Открытие фестиваля',
    time: '09:30',
    duration: '30 мин',
    speaker: 'Организаторы InEco Fest',
    description: 'Торжественное открытие фестиваля экологии и инклюзии'
  },
  {
    id: 'stage-2',
    title: 'Ключевая лекция "Будущее экологии"',
    time: '10:30',
    duration: '45 мин',
    speaker: 'Доктор Елена Экологическая',
    description: 'Глобальные вызовы и решения в области экологии'
  },
  {
    id: 'stage-3',
    title: 'Панельная дискуссия "Инклюзия в экологии"',
    time: '12:00',
    duration: '60 мин',
    speaker: 'Эксперты по инклюзии',
    description: 'Как сделать экологические инициативы доступными для всех'
  },
  {
    id: 'stage-4',
    title: 'Презентация проектов',
    time: '14:00',
    duration: '90 мин',
    speaker: 'Участники конкурса',
    description: 'Лучшие экологические проекты года'
  },
  {
    id: 'stage-5',
    title: 'Закрытие фестиваля',
    time: '16:30',
    duration: '30 мин',
    speaker: 'Организаторы InEco Fest',
    description: 'Подведение итогов и награждение победителей'
  }
];

export const exhibitions: Exhibition[] = [
  {
    id: 'exhibition-1',
    title: 'Выставка "Эко-арт"',
    description: 'Художественные работы из переработанных материалов',
    time: '10:00 - 17:00',
    location: 'Главная галерея'
  },
  {
    id: 'exhibition-2',
    title: 'Фэшн-шоу "Эко-мода"',
    description: 'Показ одежды из экологичных материалов',
    time: '13:00',
    location: 'Центральная сцена'
  },
  {
    id: 'exhibition-3',
    title: 'Аудиотур "Голоса природы"',
    description: 'Интерактивная экскурсия с записанными звуками природы',
    time: '11:00, 15:00',
    location: 'Зеленый маршрут'
  },
  {
    id: 'exhibition-4',
    title: 'Выставка поделок',
    description: 'Творческие работы участников мастер-классов',
    time: '16:00 - 17:00',
    location: 'Зона творчества'
  }
];

export const festivalInfo = {
  name: 'InEco Fest 2025',
  date: '15 августа 2025',
  time: '09:00 - 18:00',
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