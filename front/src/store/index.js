import Vue from 'vue'
import Vuex from 'vuex'
import UUID from 'uuid-int'

Vue.use(Vuex)

const idGenerator = UUID(0)

const plugin = store => {
  store.subscribe((mutation, state) => {
    const {type, payload: {item}} = mutation
    console.log("mutation -- ", type, item, state.items)
  })
}

export default new Vuex.Store({
  plugins: [plugin],
  state: {
    items: []
  },
  mutations: {
    newItem: (state, {item = {}} = {}) => state.items.push({...item, id: idGenerator.uuid()}),
    updateItem: (state, {item = {}, item: {id: idUpd}} = {}) => {
      const idx = state.items.findIndex(({id}) => id === idUpd)
      if (idx >= 0) state.items.splice(idx, 1, item)
    },
    copyItem: (state, {item = {}, item: {id: idCop} = {}} = {}) => {
      const idx = state.items.findIndex(({id}) => id === idCop)
      if (idx >= 0) state.items.splice(idx, 0, {...item, id: idGenerator.uuid()})
    },
    deleteItem: (state, {item: {id: idDel} = {}} = {}) => {
      state.items = state.items.filter(({id}) => id != idDel)
    },
    insertItemUp: (state, {item: {id: idCur} = {}} = {}) => {
      const idx = state.items.findIndex(({id}) => id === idCur)
      if (idx >= 0) state.items.splice(idx, 0, {id: idGenerator.uuid()})
    },
    insertItemDown: (state, {item: {id: idCur} = {}} = {}) => {
      const idx = state.items.findIndex(({id}) => id === idCur)
      if (idx >= 0) state.items.splice(idx + 1, 0, {id: idGenerator.uuid()})
    }, 
    moveItemUp: (state, {item = {}, item: {id: idMov} = {}} = {}) => {
      const idx = state.items.findIndex(({id}) => id === idMov)
      if (idx > 0) state.items.splice(idx, 1, state.items[idx - 1]) && state.items.splice(idx - 1, 1, item)
    },
    moveItemDown: (state, {item = {}, item: {id: idMov} = {}} = {}) => {
      const idx = state.items.findIndex(({id}) => id === idMov)
      if (idx >= 0 && idx < state.items.length - 1) state.items.splice(idx, 1, state.items[idx + 1]) && state.items.splice(idx + 1, 1, item)
    }
  },
  actions: {
  },
  modules: {
  }
})
