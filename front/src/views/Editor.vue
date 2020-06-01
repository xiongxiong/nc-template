<template>
  <div id="nc-editor">
    <Item :item="item" v-for="item in items" :key="item.id"/>
    <a-button type="primary" @click="newItem">+</a-button>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
import Item from '@/components/editor/Item.vue'

export default {
  name: 'Editor',
  components: {
    Item
  },
  computed: mapState(['items']),
  methods: {
    ...mapMutations(['newItem'])
  }
}
</script>

<style scoped>

</style>
