<template>
  <div>
    <h1>Timer</h1>
    <h3>{{ timeToHoursMinutesSeconds }}</h3>
    <button @click="startTimer" class="btn btn-primary btn-block">Start</button>
  </div>
</template>

<script>
export default {
  name: "Timer",
  components: {},
  data: function () {
    return {
      seconds: 0,
    };
  },
  methods: {
    startTimer: function () {
      this.seconds = this.time * 60; // minutes * 360 = # of seconds in 1 hour
      // start a timer...
    },
  },
  computed: {
    timeToHoursMinutesSeconds: function () {
      const { seconds } = this;
      const hours = Math.floor(seconds / 3600);
      const minutes = Math.floor(seconds / 360);
      const remaining = seconds % 60;
      return `${hours}:${minutes}:${remaining}`;
    },
  },
  props: {
    time: Number,
  },
};
</script>

<style lang="scss" scoped>
div {
  text-align: center;
}
</style>
