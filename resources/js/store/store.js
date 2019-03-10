import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({

    // element state
    state: {
        personalData: [
            {fieldName: 'contacts', data: {
                name: 'Vaidas Motiejūnas', 
                email: 'vaidomotiejuno@gmail.com', 
                tel: '+37067595135', 
                linkedIn: 'linkedin.com/in/vaidas-motiejunas'
                }
            },
            {fieldName: 'skills', data: [
                'Leadership', 
                'Comunication', 
                'Problem solving', 
                'PHP', 'Laravel', 
                'Javascript', 
                'vueJs', 'mySql', 
                'mongoDB', 
                'influxDB', 
                'Git', 
                'Html', 
                'Css', 
                'Gulp', 
                'Bootstrap', 
                'Foundation-sites', 
                'Foundation-emails', 
                'Grafana', 
                'Autocad'
                ]
            },
            {fieldName: 'languages', data: {
                    lang: 'English',
                    exp: {
                        C2: ['listening', 'reading'],
                        C1: ['speaking', 'writing']
                    }
                }
            },
            {fieldName: 'education', data: [
                {
                    place: 'Baltic Talents, Kaunas',
                    degree: 'Intensive programing course, PHP',
                    date: '2017 12 01 - 2018 02 01',
                    topic: [
                        'Laravel framework', 
                        'Object-Oriented Programing', 
                        'MySql', 
                        'WordPress', 
                        'Basic concepts and syntax', 
                        'Algorithms'
                    ]
                },
                {
                    place: 'Kaunas University of technology',
                    degree: 'Civil engineer, bachelors degree',
                    date: '2010 - 2016'
                }
                ]
            },
            {fieldName: 'profile', data: "I am working as a full stack web developer. I shifted my career about one year ago and it was one of the best decisions of my life. I am passionate about new technologies and this field does not stop to amaze me. I am constantly improving my skills by remote courses and tutorials." },
            {fieldName: 'experience', data: [
                {
                    name: 'Programmer',
                    company: 'UAB "Id Forty Six"',
                    date: '2018 05 - present',
                    info: [
                        'Full stack web development',
                        'PHP: Laravel, Yii2',
                        'Tests: Feature, Unit, Codeception framework',
                        'Javascript: VueJs, Jquery',
                        'Databases: MySql, MongoDB, InfluxDB',
                        'CSS: Bootstrap4, Foundation-sites, Foundation-emails, MDL, Sass',
                        'Other: Docker, Ansimble, Gulp, Grafana, Nginx, Ubuntu'
                    ]
                },
                {
                    name: 'Intern',
                    company: 'UAB "Id Forty Six"',
                    date: '2018 03 - 2018 05',
                    info: [
                        'Full stack web application development.',
                        'Developed a project management application from crud version to pre release stage.',
                        'Laravel framework + mySQL for backend and VueJs + Bootstrap for frontend.',
                        'Gained experience working in linux environment and increased my skills with plain PHP, Javascript, SQL, Docker, Npm, HTML and CSS.'
                    ]
                },
                {
                    name: 'project manager assistant',
                    company: 'UAB "Daistatus"',
                    date: '2016 02 - 2018 01',
                    info: [
                        'Estimating expenditure and revenue',
                        'Participation in public procurements',
                        'Cooperation with subcontractors, customers, suppliers',
                        'Drafting and editing of construction type drawings and documentation',
                        'Continuous and rational supply off building materials and services to construction sites'
                    ]
                },
                {
                    name: 'Construction manager',
                    company: 'UAB Liperus',
                    date: '2015 06 - 2016 01',
                    info: [
                        'A secondment to participate in construction of the world\'s largest cruise ship.',
                        'After that I was responsible for managing construction work in a number of cities in Lithuania. The main responsibilities:',
                        'Driving construction workers to construction sites and providing them with necessary equipment',
                        'Cooperation with subcontractors, customers, suppliers',
                        'Drafting and editing of construction type drawings and documentation'
                    ]
                }
                ]
            },
        ],
    },

    // changes state
    mutations: {

    },

    //  calls mutations
    actions: {

    },

    // returns state
    getters: {
        personalData: state => state.personalData,
        getFieldByName: (state) => (name) => {
            return state.personalData.find(field => field.fieldName === name)
          }
    }

});

export default store;