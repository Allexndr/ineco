export interface Zone {
  id: string;
  name: string;
  nameKk?: string;
  description: string;
  descriptionKk?: string;
  color: string;
  icon: string;
  activities: Activity[];
}

export interface Activity {
  id: string;
  title: string;
  titleKk?: string;
  time: string;
  duration: string;
  description: string;
  descriptionKk?: string;
  speaker?: string;
  speakerKk?: string;
  image?: string;
  type: 'workshop' | 'lecture' | 'exhibition' | 'show';
}

export interface StageEvent {
  id: string;
  title: string;
  titleKk?: string;
  time: string;
  duration: string;
  speaker: string;
  speakerKk?: string;
  description: string;
  descriptionKk?: string;
  image?: string;
}

export interface Exhibition {
  id: string;
  title: string;
  titleKk?: string;
  description: string;
  descriptionKk?: string;
  time: string;
  location: string;
  locationKk?: string;
  image?: string;
}

export const festivalZones: Zone[] = [
  {
    id: 'inclusive-society',
    name: 'Инклюзивное общество',
    description: 'ОФ "ITeachMe" - равные возможности: создай, играй, вдохновляй',
    color: '#22c55e',
    icon: '🤝',
    activities: [
      {
        id: 'inclusive-1',
        title: 'Активности ОФ "ITeachMe"',
        time: '12:00-16:00',
        duration: '240 мин',
        description: 'Советы мобилографа фестиваля, простым языком про инклюзию и крафтовые инклюзивные игры',
        speaker: 'ОФ "ITeachMe"',
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
        description: 'Коалиция Института Ботаники и Фитоинтродукции, Fading TSE, Act for Impact и Urban Forum Kazakhstan',
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
        description: 'Интерактивный мастер-класс от Recycle Birge по сортировке отходов',
        speaker: 'Recycle Birge',
        type: 'workshop'
      },
      {
        id: 'eco-lifestyle-2',
        title: 'Клуб "Книги и краски"',
        time: '12:00-16:00',
        duration: '240 мин',
        description: 'Участники клуба "Книги и краски" - изучаем и рисуем с Book Культура, книгообмен от ОФ КОМУНИТИПЛЮС, рисунки природы от ОФ Mindful generation и Студии каллиграфии Елены Шахматовой',
        speaker: 'Book Культура, КОМУНИТИПЛЮС, Mindful generation, Студия каллиграфии Елены Шахматовой',
        type: 'workshop'
      },
      {
        id: 'eco-lifestyle-3',
        title: 'Мастер-класс по изготовлению домиков и поилок для насекомых',
        time: '12:00-16:00',
        duration: '240 мин',
        description: 'Мастер-класс по изготовлению домиков и поилок для насекомых от Клуба Зеленых Рейнджеров',
        speaker: 'Клуб Зеленых Рейнджеров',
        type: 'workshop'
      },
      {
        id: 'eco-lifestyle-4',
        title: 'Выставка коллекции шишек',
        time: '12:00-16:00',
        duration: '240 мин',
        description: 'Выставка коллекции шишек от Института Ботаники и Фитоинтродукции',
        speaker: 'Институт Ботаники и Фитоинтродукции',
        type: 'exhibition'
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
        description: 'Создаем цветы в стиле оригами в рамках образовательной программы «Знать, чтобы любить» Института Ботаники и Фитоинтродукции',
        speaker: 'Институт Ботаники и Фитоинтродукции',
        type: 'workshop'
      },
      {
        id: 'floristics-2',
        title: 'Создание цветочной композиции',
        time: '12:00-16:00',
        duration: '240 мин',
        description: 'Создаем цветочную композицию из цветов ботсада от флориста Яны Прокудиной',
        speaker: 'Яна Прокудина',
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
        title: 'Мастер-класс "Замкнутая экосистема"',
        time: '12:00-16:00',
        duration: '240 мин',
        description: 'Мастер-класс "Замкнутая экосистема" от Zertte Studio',
        speaker: 'Zertte Studio',
        type: 'workshop'
      },
      {
        id: 'steam-2',
        title: 'Мастер-класс по робототехнике',
        time: '12:00-16:00',
        duration: '240 мин',
        description: 'Мастер класс по робототехнике от Nazar School',
        speaker: 'Nazar School',
        type: 'workshop'
      },
      {
        id: 'steam-3',
        title: 'Мастер-классы от American Maker Space',
        time: '12:00-16:00',
        duration: '240 мин',
        description: 'Мастер классы от American Maker space: 12:00 «Умный цветочный горшок», «Монитор качества воздуха», 13:00 «Извлечение ДНК, Натуральные ph индикаторы, бомбочка для ванны» 14:00 Эксперименты STEM For Them 15:00 «Зеленая химия»',
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
        title: 'Мастер-класс по рисованию от Анар Абжановой',
        time: '12:00-14:00',
        duration: '120 мин',
        description: 'Мастер класс по рисованию от Анар Абжановой с 12:00 до 14:00',
        speaker: 'Анар Абжанова',
        type: 'workshop'
      },
      {
        id: 'art-2',
        title: 'Рисование яблони Сиверса',
        time: '14:00-16:00',
        duration: '120 мин',
        description: 'Мастер класс по рисованию яблони Сиверса с Бригитте Хоферр (Германия) от ОФ «Алмалы Жумак» с 14:00 до 16:00',
        speaker: 'Бригитте Хоферр (Германия), ОФ «Алмалы Жумак»',
        type: 'workshop'
      },
      {
        id: 'art-3',
        title: 'Мастер-классы по рисованию от Центра социальной поддержки',
        time: '12:00-16:00',
        duration: '240 мин',
        description: 'Мастер-классы по рисованию от Центра социальной поддержки людей с инвалидностью «Ten Qogam»',
        speaker: 'Центр социальной поддержки людей с инвалидностью «Ten Qogam»',
        type: 'workshop'
      },
      {
        id: 'art-4',
        title: 'Создание открыток с элементами валяния',
        time: '12:00-16:00',
        duration: '240 мин',
        description: 'Создаем открытки с элементами валяния от Айжан Беккуловой',
        speaker: 'Айжан Беккуловой',
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
        title: 'Мастер-класс по посадке горшечных растений',
        time: '12:00-16:00',
        duration: '240 мин',
        description: 'Мастер-класс по посадке горшечных растений от лаборатории тропических и субтропических растений Института Ботаники и Фитоинтродукции',
        speaker: 'Институт Ботаники и Фитоинтродукции',
        type: 'workshop'
      }
    ]
  },
  {
    id: 'fashion-show',
    name: 'Зона Фэшн шоу',
    description: 'Инклюзивное фэшн шоу в эко-этно стиле',
    color: '#8b5cf6',
    icon: '👗',
    activities: [
      {
        id: 'fashion-1',
        title: 'Инклюзивный показ мод в эко этно-стиле',
        time: '15:00-16:00',
        duration: '60 мин',
        description: 'С 15:00 до 16:00 инклюзивный показ мод в эко этно-стиле от дизайнера-апсйклера и костомайзера Ботакоз Садыбековой',
        speaker: 'Ботакоз Садыбековой',
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
        description: 'Сказочное аудио-путешествие по ботаническому саду Алматы для детей от 9+. Для прохождения аудиотура нужен смартфон и наушники. Аудиотур был создан при поддержке компании Шеврон',
        speaker: 'Аудио-гид',
        type: 'workshop'
      }
    ]
  }
];

export const stageEvents: StageEvent[] = [
  {
    id: 'stage-1',
    title: 'Викторина по технике безопасности проекта SAQ 2025',
    time: '15:30',
    duration: '30 мин',
    speaker: 'Национальная Волонтерская сеть',
    description: 'Викторина по технике безопасности проекта SAQ 2025 от Национальной Волонтерской сети'
  },
  {
    id: 'stage-2',
    title: 'Шоу-выступление флориста Гребенкина Димитрия',
    time: '16:00',
    duration: '10 мин',
    speaker: 'Гребенкин Димитрий',
    description: 'Шоу-выступление флориста Гребенкина Димитрия'
  },
  {
    id: 'stage-3',
    title: 'Приветственное слово от представителя Евразийского подразделения компании «Шеврон»',
    time: '16:10',
    duration: '5 мин',
    speaker: 'Представитель компании «Шеврон»',
    description: 'Приветственное слово от представителя Евразийского подразделения компании «Шеврон»'
  },
  {
    id: 'stage-4',
    title: 'Приветственное слово от ОФ ITeachMe',
    time: '16:15',
    duration: '5 мин',
    speaker: 'ОФ ITeachMe',
    description: 'Приветственное слово от ОФ ITeachMe'
  },
  {
    id: 'stage-5',
    title: 'Приветственное слово от Института Ботаники и Фитоинтродукции и презентация образовательных программ',
    time: '16:20',
    duration: '15 мин',
    speaker: 'Институт Ботаники и Фитоинтродукции',
    description: 'Приветственное слово от Института Ботаники и Фитоинтродукции и презентация образовательных программ ботсаду'
  },
  {
    id: 'stage-6',
    title: 'Сакральные деревья. О живой памяти, корнях и будущем',
    time: '16:35',
    duration: '15 мин',
    speaker: 'Темиртас Искаков, Tabigat Labs',
    description: 'Сакральные деревья. О живой памяти, корнях и будущем - Темиртас Искаков, Tabigat Labs'
  },
  {
    id: 'stage-7',
    title: 'Доступный туризм, инватуризм',
    time: '16:50',
    duration: '10 мин',
    speaker: 'Джепка Богдан',
    description: 'Доступный туризм, инватуризм - Джепка Богдан'
  },
  {
    id: 'stage-8',
    title: '«Загрязнение окружающей среды и раздельный сбор отходов»',
    time: '17:00',
    duration: '15 мин',
    speaker: 'Валерия Фролова, Общественный фонд Greenup.kz (Recycle.Birge)',
    description: '«Загрязнение окружающей среды и раздельный сбор отходов», Валерия Фролова, Общественный фонд Greenup.kz (Recycle.Birge)'
  },
  {
    id: 'stage-9',
    title: 'Инклюзия в действии: как технологии меняют мир',
    time: '17:15',
    duration: '15 мин',
    speaker: 'Дмитрий Пак и Бекгожаев Даурен, ITeachMe',
    description: 'Инклюзия в действии: как технологии меняют мир - Дмитрий Пак и Бекгожаев Даурен, ITeachMe'
  },
  {
    id: 'stage-10',
    title: 'Лекция "Красная Книга - сигнал бедствия из мира растений"',
    time: '17:30',
    duration: '15 мин',
    speaker: 'Гульнара Ситпаева, генеральный директор Института Ботаники и Фитоинтродукции',
    description: 'Лекция "Красная Книга - сигнал бедствия из мира растений", Гульнара Ситпаева, генеральный директор Института Ботаники и Фитоинтродукции'
  },
  {
    id: 'stage-11',
    title: 'Инклюзия изнутри: уроки, которые дала мне школа',
    time: '17:45',
    duration: '15 мин',
    speaker: 'Дилара Жумагалиева, фонд МамаПро',
    description: 'Инклюзия изнутри: уроки, которые дала мне школа - Дилара Жумагалиева, фонд МамаПро'
  },
  {
    id: 'stage-12',
    title: 'Перформативная лекция «Когда ботаники спасли этот мир»',
    time: '18:00',
    duration: '60 мин',
    speaker: 'Театр ARTиШОК',
    description: 'Перформативная лекция «Когда ботаники спасли этот мир» от театра ARTиШОК'
  },
  {
    id: 'stage-13',
    title: 'Документальный фильм «Алматы? Ок жить со смогом?»',
    time: '19:00',
    duration: '75 мин',
    speaker: 'Канат Бейсекеев и Almaty Air',
    description: 'Документальный фильм «Алматы? Ок жить со смогом?» режиссера Каната Бейсекеева и Almaty Air'
  }
];

export const exhibitions: Exhibition[] = [
  {
    id: 'exhibition-1',
    title: 'Выставка картин (на перголах)',
    description: 'Выставка картин от Центра социальной поддержки людей с инвалидностью «Ten Qogam», Анар Абжановой, Аутизм центров и Ресурсного центра "Асыл Мирас" Фонда Булата Утемуратова',
    time: '12:00-16:00',
    location: 'Перголы ботанического сада'
  },
  {
    id: 'exhibition-2',
    title: 'Выставка детских поделок (на перголах)',
    description: 'Детские поделки из природных материалов от посетителей ботсада',
    time: '12:00-16:00',
    location: 'Перголы ботанического сада'
  },
  {
    id: 'exhibition-3',
    title: 'Проведение экскурсий по ботаническому саду',
    description: 'Экскурсии с гидами – научными сотрудниками Института Ботаники и Фитоинтродукции по коллекциям Главного Ботанического Сада Алматы. Группы на русском и казахском языках',
    time: '12:00-16:00',
    location: 'Входной павильон'
  },
  {
    id: 'exhibition-4',
    title: 'Субботник TURAQTY JOL',
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