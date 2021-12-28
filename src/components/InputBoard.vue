<template>
  <div class="mt-5">
    <b-form-group label="Analyze (minutes)" label-for="lead-time">
      <b-form-input v-model="leadTime" id="lead-time" type="number" />
    </b-form-group>
    <b-form-group label="Number of Tasks" label-for="tasks">
      <b-form-select
        v-model="numberOfTasks"
        id="tasks"
        :options="taskOptions"
      />
    </b-form-group>
    <b-form-group label="Final Review" label-for="final-review">
      <b-form-input v-model="finalReviewTime" id="final-review" type="number" />
    </b-form-group>
    <b-form-group label="Total (minutes)" label-for="total-time">
      <b-form-input v-model="totalTime" id="total-time" type="number" />
    </b-form-group>
    <button
      @click="
        () => handleSave(leadTime, numberOfTasks, finalReviewTime, totalTime)
      "
      class="btn btn-primary btn-block"
    >
      Calculate
    </button>
  </div>
</template>

<script>
export default {
  name: "InputBoard",
  components: {},
  data: function () {
    return {
      leadTime: 30,
      numberOfTasks: 2,
      finalReviewTime: 30,
      totalTime: 240,
      taskOptions: [
        { value: 1, text: "One" },
        { value: 2, text: "Two" },
        { value: 3, text: "Three" },
        { value: 4, text: "Four" },
        { value: 5, text: "Five" },
        { value: 6, text: "Six" },
        { value: 7, text: "Seven" },
        { value: 8, text: "Eight" },
        { value: 9, text: "Nine" },
        { value: 10, text: "Ten" },
      ],
    };
  },
  methods: {},
  computed: {},
  props: {
    handleSave: Function,
  },
};
</script>

<style lang="scss" scoped></style>
