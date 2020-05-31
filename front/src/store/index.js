import Vue from 'vue'
import Vuex from 'vuex'
import UUID from 'uuid-int'

Vue.use(Vuex)

const idGenerator = UUID(0)

export default new Vuex.Store({
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
    insertItemUp: (state, {item: {idCur} = {}} = {}) => {
      const idx = state.items.findIndex(({id}) => id === idCur)
      if (idx >= 0) state.items.splice(idx, 0, {id: idGenerator.uuid()})
    }, 
    insertItemDown: (state, {item: {idCur} = {}} = {}) => {
      const idx = state.items.findIndex(({id}) => id === idCur)
      if (idx >= 0) state.items.splice(idx + 1, 0, {id: idGenerator.uuid()})
    }, 
    moveItemUp: (state, {item: {id: idMov} = {}} = {}) => {
      const idx = state.items.findIndex(({id}) => id === idMov)
      if (idx > 0) {
        const temp = state.items[idx]
        state.items[idx] = state.items[idx - 1]
        state.items[idx - 1] = temp
      }
    },
    moveItemDown: (state, {item: {id: idMov} = {}} = {}) => {
      const idx = state.items.findIndex(({id}) => id === idMov)
      if (idx >= 0 && idx < state.items.length - 1) {
        const temp = state.items[idx]
        state.items[idx] = state.items[idx + 1]
        state.items[idx + 1] = temp
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
