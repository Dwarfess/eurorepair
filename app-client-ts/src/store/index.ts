import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    projectParams: {
      mainParams: {
        type: 'mainParam',
        length: 20,
        width: 30,
        height: 3
      },
      rooms: [
        {
          id: Math.trunc(new Date().getTime() * Math.random()),
          name: 'test1',
          type: 'room',
          length: 20,
          width: 30,
          height: 4
        },
        {
          id: Math.trunc(new Date().getTime() * Math.random()),
          name: 'test2',
          type: 'room',
          length: 10,
          width: 20,
          height: 4
        }
      ]
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
