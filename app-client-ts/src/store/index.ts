import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        projectParams: {
            mainParams: {
                name: 'test',
                category: 'mainParam',
                length: 20,
                width: 30,
                height: 3
            },
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
        },
        categories: [
            {text: 'mainParam', value: 'mainParam'},
            {text: 'room', value: 'room'},
            {text: 'kitchen', value: 'kitchen'},
            {text: 'restroom', value: 'restroom'},
            {text: 'bathroom', value: 'bathroom'},
            {text: 'hallway', value: 'hallway'}
        ]
    },
    mutations: {},
    actions: {},
    modules: {},
});
