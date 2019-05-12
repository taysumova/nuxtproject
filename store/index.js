import Vuex from 'vuex';
import * as axios from 'axios';

const createStore = () => {
    return new Vuex.Store({
        state: {
            users: [],
        },
        getters: {
            users(state) {
                return state.users;
            }
        },
        mutations: {
            getUsers(state, users) {
                state.users = users;
            },
            removeUser(state, userId) {
                state.users.splice(userId, 1);
            }
        },
        actions: {
            async getUsers(context) {
                const req = await axios.get('http://jsonplaceholder.typicode.com/users');
                context.commit('getUsers', req.data);
            },
            removeUser(context, userId) {
                context.commit('removeUser', userId);
            }
        }
    });
};

export default createStore;