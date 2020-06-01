<template>
  <div id="nc-dest">
    <Item :item="item" v-for="item in items" :key="item.id"/>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import Item from "@/components/dest/Item.vue";

export default {
  name: "Dest",
  components: {
    Item
  },
  computed: mapState(['items']),
};
</script>

<style scope>
#nc-dest {
  flex: 1;
  background: lightcyan;
}

</style>