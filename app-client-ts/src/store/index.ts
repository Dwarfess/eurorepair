import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        projects: [],
        // projectParams: test,
        projectParams: {
            _id: 0,
            mainParams: [],
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
        SET_PROJECTS: (state, payload) => {
            state.projects = payload;
        },

        SET_PROJECT: (state, payload) => {
            state.projectParams._id = payload[0]._id;
            state.projectParams.mainParams = payload[0].mainParams;
            state.projectParams.rooms = payload[0].rooms;
            state.projectParams.kitchens = payload[0].kitchens;
            state.projectParams.restrooms = payload[0].restrooms;
            state.projectParams.bathrooms = payload[0].bathrooms;
            state.projectParams.hallways = payload[0].hallways;
        },

        ADD_PROJECT: (state, payload) => {
            console.log('ADD_PROJECT', state, payload);
        },
    },
    actions: {
        GET_PROJECTS: async (context, payload) => {
            let {data} = await Axios.get('/projects/getProject');
            context.commit('SET_PROJECTS', data);
        },

        GET_PROJECT: async (context, payload) => {
            let {data} = await Axios.get('/projects/getProject');
            context.commit('SET_PROJECT', data);
        },

        SAVE_PROJECT: async (context, payload) => {
            let {data} = await Axios.post('/projects/updateProject', payload);
            console.log(data);
            context.commit('ADD_PROJECT', payload);
        },
    },
    modules: {},
});

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