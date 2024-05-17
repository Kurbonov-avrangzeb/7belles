export const loginForm = [
  {
    name: 'email',
    label: 'Email',
    type: 'text',
    placeholder: 'admin@7belles.com'
  },
  {
    name: 'password',
    label: 'Пароль',
    type: 'password',
    placeholder:'test1234'
  }
];

export const signupForm = [
  {
    name: 'name',
    label: 'Имя',
    type: 'text'
  },
  {
    name: 'email',
    label: 'Email',
    type: 'text'
  },
  {
    name: 'password',
    label: 'Пароль',
    type: 'password'
  },
  {
    name: 'passwordConfirm',
    label: 'Повторите пароль',
    type: 'password'
  }
];

export const forgotPassForm = [
  {
    name: 'email',
    label: 'Email',
    type: 'text'
  }
]

export const tourForm = [
  {
    id: '1',
    name: 'name',
    label: 'Название тура',
    type: 'text'
  },
  {
    id: '3',
    name: 'price',
    label: 'Цена',
    type: 'number'
  },
  {
    id: '4',
    name: 'difficulty',
    label: 'Сложность',
    type: 'select',
    values: [
      { label: 'Легкая', value: 'easy' },
      { label: 'Средняя', value: 'medium' },
      { label: 'Сложная', value: 'difficult' },
    ]
  },
  {
    id: '5',
    name: 'maxGroupSize',
    label: 'Кол-во участников',
    type: 'number',
    min: '1'
  },

  {
    id: '6',
    name: 'duration',
    label: 'Продолжительность',
    type: 'number'
  },
  {
    id: '7',
    name: 'summary',
    label: 'Краткое описание',
    type: 'text'
  },
  {
    id: '10',
    name: 'startDates',
    label: 'Дата начала',
    type: 'date'
  },
  {
    id: '15',
    name: 'startLocation',
    label: 'Локация',
    type: 'text'
  },
]

export const imageForm = [
  {
    id: 1,
    name:'imageCover',
    label: 'Обложка',
    type:'file'
  },
  {
    id: 2,
    name:'image1',
    label: 'Изображение 1',
    type:'file'
  },
  {
    id: 3,
    name:'image2',
    label: 'Изображение 2',
    type:'file'
  },
  {
    id: 4,
    name:'image3',
    label: 'Изображение 3',
    type:'file'
  }
]