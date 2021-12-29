<template>
    <b-card 
      :title="type" 
      :sub-title="subtitle"
      :img-src="`https://via.placeholder.com/600x100?text=${time}+minutes`"
      img-top
      v-if="!done"
      >
      <b-button @click="setDone" variant="primary">Done!</b-button>
    </b-card>
</template>

<script>
export default {
    name: 'Task',
    components: {},
    data: function () {
      return {
        done: false 
      }
    },
    props: {
      type: String,
      subtitle: String,
      time: Number,
    },
    methods: {
      setDone: function () {
        this.done = true;
      }
    },
    computed: {

    }
}
</script>

<style lang="scss" scoped>

</style>