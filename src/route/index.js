// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()
// ================================================================

var header = {
  name: {
    firstname: 'Dmytro',
    lastname: 'Ivanov',
  },
  position: 'Junior Fullstack JS Developer',
  salary: '600 $ в місяц',
  address: '2010 Ocean ave, Brooklyn, NY, 11230',
}

footer = {
  social: {
    email: {
      text: 'dmytro@mail.com',
      href: 'mailto:dmytro@mail.com',
    },
    phone: {
      text: '+380670000123',
      href: 'tel:+380670000123',
    },
    linkedin: {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/dmytro-test',
    },
  },
}

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані
    page: { title: 'Resume | Summary' },

    header,

    main: {
      summary: {
        title: 'Summary',
        text: `Open-minded for new technologies, with 1 years of
        experience in development. Whenever I start to
        work on a new project I learn the domain and try
        to understand the idea of the project. Good team
        player, every colleague is a friend to me.`,
      },

      experience: {
        title: 'Other experience',
        text: `Pet project for parsing sport betting data from
        different platforms ( odds ) and sport statistics
        ( tournament position, goals etc), analyzing by
        simple mathematics models and preparing
        probability for such events like: money line -
        first win / draw / second win, totals etc.`,
      },
    },

    footer,
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skils', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skils', {
    // ↙ сюди вводимо JSON дані
    page: { title: 'Resume | Skils' },

    header,

    main: {
      skils: [
        { name: 'HTML', point: 9, isTop: true },
        { name: 'Handlebars', point: 6, isTop: true },
        { name: 'VS Code', point: 6, isTop: true },
        { name: 'Git', point: 8, isTop: true },
        { name: 'Terminal', point: 4, isTop: false },
        { name: 'NPM', point: 3, isTop: false },
        { name: 'CSS', point: 4 },
        { name: 'React.js', point: 0, isTop: false },
        { name: 'PHP', point: null, isTop: false },
      ],

      hobbies: [
        { name: 'Stock Marker trading', isMain: true },
        { name: 'Guitar', isMain: true },
        { name: 'VR table tenis', isMain: false },
      ],
    },

    footer,
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані

    page: { title: 'Resume | Education' },

    header,

    main: {
      educations: [
        {
          name: "Chernihiv Taras Shevchenko National Teachers' Training University",
          isEnd: true,
        },
        {
          name: 'Chernihiv State Institute of Economics and Management',
          isEnd: true,
        },
        {
          name: 'Coders Campus Full-Stack Java Web Developer online Bootcamp',
          isEnd: true,
        },
        {
          name: 'IT-BRAINS Full-Stack JavaScript Developer online',
          isEnd: false,
        },
      ],

      certificates: [
        { name: 'First sertifacate', id: 80001 },
        { name: 'Second sertifacate', id: 820002 },
        { name: 'Third sertifacate', id: 80003 },
      ],
    },

    footer,
  })
})

router.get('/skils', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skils', {
    // ↙ сюди вводимо JSON дані
    page: { title: 'Resume | Skils' },

    header,

    main: {
      skils: [
        { name: 'HTML', point: 9, isTop: true },
        { name: 'Handlebars', point: 6, isTop: true },
        { name: 'VS Code', point: 6, isTop: true },
        { name: 'Git', point: 8, isTop: true },
        { name: 'Terminal', point: 4, isTop: false },
        { name: 'NPM', point: 3, isTop: false },
        { name: 'CSS', point: 4 },
        { name: 'React.js', point: 0, isTop: false },
        { name: 'PHP', point: null, isTop: false },
      ],

      hobbies: [
        { name: 'Stock Marker trading', isMain: true },
        { name: 'Guitar', isMain: true },
        { name: 'VR table tenis', isMain: false },
      ],
    },

    footer,
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані
    layout: 'big',

    page: { title: 'Resume | Work' },

    header,

    main: {
      works: [
        {
          position: 'Junior Fullstack Developer',
          company: {
            name: 'IT Brains',
            url: 'https://if-brains.com.ua',
          },
          duration: {
            from: '10.10.2022',
            to: null,
          },
          projectAmmount: 3,
          projects: [
            {
              name: 'Resume',
              url: 'https//resume.com.ua',
              about: 'This personal web-resume',
              stackAmount: 3,
              stacks: [
                { name: 'React.js' },
                { name: 'HTML/CSS' },
                { name: 'Node.js' },
              ],
              awardAmount: 2,
              awards: [
                { name: 'bacgrount verification' },
                { name: 'second award' },
              ],
            },
          ],
        },
      ],
    },

    footer,
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/person', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('person', {
    layout: 'person',
    page: { title: 'Person Page' },
    person: {
      name: 'Emma Johnson',
      age: 32,
      gender: 'Female',
      address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zip: '10001',
        country: 'USA',
      },
      education: [
        {
          degree: 'Bachelor of Science',
          major: 'Computer Science',
          university:
            'Massachusetts Institute of Technology',
          graduationYear: 2012,
        },
      ],
      workExperience: [
        {
          company: 'Google',
          title: 'Software Engineer',
          startDate: '2012-06-01',
          endDate: '2016-12-31',
          responsibilities: [
            'Developed new features for Google Maps',
            'Worked on improving search algorithms',
          ],
          year_founded: 1990,
          industry: 'Technology',
          employees: [
            {
              name: 'John Smith',
              position: 'CEO',
              department: 'Executive',
              projects: [
                {
                  name: 'Project Alpha',
                  description:
                    'Developing new software platform',
                  status: 'In Progress',
                  teams: [
                    {
                      team_name: 'Awesome Team',
                      team_leader: {
                        name: 'John Smith',
                        title: 'Team Leader',
                        email: 'john.smith@example.com',
                      },
                      team_members: [
                        {
                          name: 'Alice Johnson',
                          title: 'Software Engineer',
                          email:
                            'alice.johnson@example.com',
                          skills: ['Java', 'Python', 'SQL'],
                          projects: [
                            {
                              name: 'Project A',
                              description:
                                'Lorem ipsum dolor sit amet',
                              technologies: [
                                'Java',
                                'Spring Framework',
                              ],
                              team_members: [
                                {
                                  name: 'Bob Lee',
                                  title:
                                    'Software Engineer',
                                },
                                {
                                  name: 'Cindy Chen',
                                  title: 'UI Designer',
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  })
})

// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router
