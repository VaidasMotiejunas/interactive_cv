import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({

    // element state
    state: {
        personalData: [
            {field: 'contacts', data: {name: 'Vaidas Motiejūnas', email: 'vaidomotiejuno@gmail.com', tel: '+37067595135', linkedIn: 'linkedin.com/in/vaidas-motiejunas'}}
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
        getDataByFieldName: (state) => (name) => {
            return state.personalData.find(element => element.field === name)
        } 
    }

});

export default store;