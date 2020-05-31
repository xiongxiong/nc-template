<template>
  <div :class="['nc-divider', vertical ? 'nc-divider-v' : 'nc-divider-h']" :style="{background: color, 'margin-left': mh, 'margin-right': mh, 'margin-top': mv, 'margin-bottom': mv}"/>
</template>

<script>
export default {
  name: "Divider",
  props: {
    vertical: Boolean,
    color: String,
    mh: Number,
    mv: Number
  }
}
</script>

<style scoped>
.nc-divider {
  background: lightgray;
  margin-left: 4px;
  margin-right: 4px;
  margin-top: 4px;
  margin-bottom: 4px;
}

.nc-divider-h {
  height: 1px;
}

.nc-divider-v {
  width: 1px;
}
</style>