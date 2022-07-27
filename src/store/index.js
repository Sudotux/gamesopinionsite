import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    juegos: [],
    opiniones: [],
    id: 1

    //an example of an opinion
    /* 
    {
      "id": 1,
      "usuario": "dei",
      "comentario": "post inicial",
      "juego":
      {
        "name": "Grand Theft Auto V",
        "rating": 4.48,
        "released": "2013-09-17",
        "updated": "2020-09-23",
        "background_image": "https://cdn.forbes.com.mx/2020/05/Grand-Theft-Auto-V-640x360.jpg"
      }
    } 
    */


  },
  mutations: {
    get_Juegos(state, data) {
      state.juegos = data;
    },
    guardar_Opinion(state, data) {
      state.id++;
      state.opiniones.push({ id: state.id, ...data });
    },
    eliminar_Opinion(state, indice) {
      const removed = state.opiniones.splice(indice, 1);
      removed
        ? alert('Opinión eliminada con éxito')
        : alert('Error al intentar eliminar la opinión');
    },
    editar_Opinion(state, data) {
      const removed = state.opiniones.splice(data.indice, 1, data.opinion);
      removed
        ? alert('Opinión editada con éxito')
        : alert('Error al intentar editar la opinión');
    }
  },
  actions: {
    async getJuegos({ commit }) {
      const url = './games.json';
      try {
        const response = await fetch(url);
        const json = await response.json();
        commit('get_Juegos', json);
      } catch (error) {
        console.log('fetch error:\n', error);
        alert('Error al obtener los juegos.');
      }
    },
    guardarOpinion({ commit }, data) {
      commit('guardar_Opinion', data);
      alert('Opinión guardada con éxito');
    },
    eliminarOpinion({ getters, commit }, id) {
      const indiceEncontrado = getters.opinionIndexById(id);
      if (indiceEncontrado >= 0) {
        commit('eliminar_Opinion', indiceEncontrado);
      } else {
        alert('Error al intentar eliminar opinión: No se encontró indice');
      }
    },
    editarOpinion({ getters, commit }, opinion) {
      const indice = getters.opinionIndexById(opinion.id);
      commit('editar_Opinion', { indice, opinion });
    }
  },
  getters: {
    opinionById(state) {
      return (id) => {
        const opinion = state.opiniones.find(opinion => opinion.id == id);
        return opinion;
      }
    },
    opinionIndexById(state) {
      return (id) => {
        const indice = state.opiniones.findIndex(opinion => opinion.id == id);
        return indice;
      }
    }
  },
  modules: {
  }
});