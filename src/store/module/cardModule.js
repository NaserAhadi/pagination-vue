import axios from 'axios';

const state = {
    photoState:[]
};

const getters = {
    allPhoto: state => state.photoState
};

const actions = {
    async fetchPhoto({commit}){
        const response = await axios.get(
            'https://jsonplaceholder.typicode.com/photos'
        );

        commit('setPhoto',response.data)
    },
};

const mutations = {
        setPhoto: (state,photoData) => state.photoState = photoData
};

export default {
    state,
    getters,
    actions,
    mutations
}