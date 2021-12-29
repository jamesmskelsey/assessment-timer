<template>
  <div>
    <h1>Main</h1>
    <task
      class="mb-5"
      v-for="chunk in timeChunks"
      :key="chunk.id"
      :type="chunk.type"
      :subtitle="chunk.subtitle"
      :time="chunk.time"
      :img-src="`https://via.placeholder.com/600x200?text=${chunk.time}`"
    />
  </div>
</template>

<script>
import Task from "./Task.vue";
export default {
  name: "MainDisplay",
  components: {
    Task,
  },
  data: function () {
    return {};
  },
  props: {
    timeChunks: Array,
  },
  methods: {},
  computed: {},
};
</script>

<style lang="scss" scoped></style>
