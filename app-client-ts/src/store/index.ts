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

export default new Vuex.Store({
    state: {
        projects: [],
        // projectParams: test,
        newProject: {
            _tempId: Math.trunc(new Date().getTime() * Math.random()),
            created: new Date().getTime(),
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
        ]
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
        },
    },
    modules: {},
});
