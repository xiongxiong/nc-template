<template>
  <div id="nc-dest">
    <Form :title="form.title" :color="form.color" v-for="form in forms" :key="form.title"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Form from "@/components/dest/Form.vue";

export default {
  name: "Dest",
  components: {
    Form
  },
  data: () => ({
      forms: [
        {
          title: "投保单位联系人信息",
          color: "orange"
        },
        {
          title: "法人代表/负责人信息",
          color: "orange"
        }
      ]
    })
};
</script>

<style scope>
#nc-dest {
  flex: 1;
  background: lightcyan;
}

</style>