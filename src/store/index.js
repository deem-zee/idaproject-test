import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    lastId: 0
  },
  getters: {
    getProducts(state) {
      return state.products;
    }
  },
  mutations: {
    addToProducts(state, product) {
      product.id = state.lastId + 1;
      state.products.push(product);
      state.lastId += 1;
    },
    initialiseStore(state) {
			// Check if the products exists
			if(localStorage.getItem('store')) {
				// Replace the state object with the stored item
				this.replaceState(
					Object.assign(state, JSON.parse(localStorage.getItem('store')))
				);
			}
		},
  },
  actions: {
    addNewProduct(context, product) {   
      context.commit('addToProducts', product)
    }
  },
  modules: {
  }
})
