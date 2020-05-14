import Vuex from 'vuex';
import Vue from 'vue';
import cardModule from './module/cardModule';


Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        cardModule
    }
})