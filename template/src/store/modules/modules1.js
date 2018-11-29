const state = {
  a:""
}

// getters
const getters = {
	newA(state, getters, rootState){
		return a+"new" ;
	}
}

// actions
const actions = {
  geta ({ commit ,state,rootState }) {
    commit('setA', products)
  }
}

// mutations
const mutations = {
  setA (state, a) {
    state.a = a
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}