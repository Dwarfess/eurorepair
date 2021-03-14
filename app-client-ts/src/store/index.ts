import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';

import router from '../router/index'
import {Project} from '@/components/Types';

Vue.use(Vuex);

const test = {
    _id: 0,
    mainParams: [
        {
            id: Math.trunc(new Date().getTime() * Math.random()),
            name: 'test',
            category: 'mainParam',
            length: 20,
            width: 30,
            height: 3
        }
    ],
    rooms: [
        {
            id: Math.trunc(new Date().getTime() * Math.random()),
            name: 'test1',
            category: 'room',
            length: 20,
            width: 30,
            height: 4
        },
        {
            id: Math.trunc(new Date().getTime() * Math.random()),
            name: 'test2',
            category: 'room',
            length: 10,
            width: 20,
            height: 4
        }
    ],
    kitchens: [],
    restrooms: [],
    bathrooms: [],
    hallways: []
};
const defaultServices = {
    assembling: {
        name: 'assembling',
        list: [
            {
                id: generateId(),
                name: 'Обои',
                category: 'Отделочные',
                description: 'Поклейка обоев',
                price: 60
            }, {
                id: generateId(),
                name: 'Шпаклевка',
                category: 'Отделочные',
                description: 'Шпаклюем стены',
                price: 80
            }, {
                id: generateId(),
                name: 'Покраска',
                category: 'Отделочные',
                description: 'Красим стены',
                price: 50
            },
        ]
    },
    disassembling: {
        name: 'disassembling',
        list: [
            {
                id: generateId(),
                name: 'Демонтаж стен',
                category: 'Демонтаж',
                description: 'Ломаем стены',
                price: 110
            }, {
                id: generateId(),
                name: 'Демонтаж пола',
                category: 'Демонтаж',
                description: 'Срываем пол',
                price: 130
            }, {
                id: generateId(),
                name: 'Демонтаж потолка',
                category: 'Демонтаж',
                description: 'Разбираем потолок',
                price: 150
            }
        ]
    },
    special: {
        name: 'special',
        list: [
            {
                id: generateId(),
                name: 'Монтаж окна',
                category: 'Спец монтаж',
                description: 'Вставить окно, запенить, выноврять по уровню',
                price: 1400
            }, {
                id: generateId(),
                name: 'Повесить люстру',
                category: 'Спац монтаж',
                description: 'Повесить и подключить люстру',
                price: 670
            }, {
                id: generateId(),
                name: 'Разобрать полку',
                category: 'Спец демонтаж',
                description: 'Разобрать полку под потолком',
                price: 400
            }
        ]
    },
    other: {
        name: 'other',
        list: [
            {
                id: generateId(),
                name: 'Сливная яма',
                category: 'Земляные',
                description: 'Выкопать сливную яму',
                price: 1400
            }, {
                id: generateId(),
                name: 'Стяжка',
                category: 'Черновые ',
                description: 'Залить стяжку',
                price: 100
            }, {
                id: generateId(),
                name: 'Армировка пола',
                category: 'Подготовительные',
                description: 'Укладка сетки перед стяжкой',
                price: 60
            }
        ]
    },
};

function generateId() {
    return Math.trunc(new Date().getTime() * Math.random());
}

export default new Vuex.Store({
    state: {
        projects: [],
        // projectParams: test,
        newProject: {
            _tempId: generateId(),
            date: new Date().getTime(),
            image: 'require("../assets/img/body.jpg")',
            active: false,
            mainParams: [
                {
                    id: Math.trunc(new Date().getTime() * Math.random()),
                    name: 'New',
                    category: 'mainParam',
                    length: 1,
                    width: 1,
                    height: 1
                }
            ],
            rooms: [],
            kitchens: [],
            restrooms: [],
            bathrooms: [],
            hallways: []
        },
        categories: [
            {text: 'room', value: 'room'},
            {text: 'kitchen', value: 'kitchen'},
            {text: 'restroom', value: 'restroom'},
            {text: 'bathroom', value: 'bathroom'},
            {text: 'hallway', value: 'hallway'}
        ],
        defaultServices: defaultServices
    },
    mutations: {
        SET_PROJECTS: (state: any, projects: Project[]) => {
            state.projects = projects;
        },

        SET_PROJECT: (state: any, currentProject: Project) => {
            state.projects.push(currentProject);
        },

        SET_SAVED_PROJECT: (state: any, currentProject: Project) => {
            // console.log('ADD_PROJECT', state, currentProject);
        },

        SET_NEW_PROJECT: (state: any, newProject: Project) => {
            state.projects.splice(state.projects.findIndex((project) => project._tempId));
            state.projects.push(newProject);

            router.push({ name: 'projectPage', params: {id: newProject._id}});
        },

        OPEN_MAIN_PAGE: (state: any, status: number) => {
            if (status === 200) {
                router.push({name: 'Home'});
            }
        },
    },
    actions: {
        GET_PROJECTS: async (context) => {
            const {data} = await Axios.get(`/projects`);
            context.commit('SET_PROJECTS', data);
        },

        GET_PROJECT: async (context, id) => {
            const {data} = await Axios.get(`/projects/getProject/${id}`);
            context.commit('SET_PROJECT', data);
        },

        SAVE_PROJECT: async (context, project) => {
            const {data} = await Axios.put(`/projects/updateProject`, project);
            context.commit('SET_SAVED_PROJECT', data);
        },

        CREATE_PROJECT: async (context, project) => {
            const {data} = await Axios.post(`/projects/createProject`, project);
            context.commit('SET_NEW_PROJECT', data);
        },

        DELETE_PROJECT: async (context, id) => {
            const {data} = await Axios.delete(`/projects/deleteProject/${id}`);
            context.commit('OPEN_MAIN_PAGE', data.status);
        }
    },
    modules: {},
});
