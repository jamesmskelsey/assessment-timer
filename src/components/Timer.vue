<template>
  <div>
    <h1>Timer</h1>
    <h3>{{ timeToHoursMinutesSeconds }}</h3>

    <button
      v-if="timerStarted"
      @click="stopTimer"
      class="btn btn-warning btn-block"
    >
      Stop
    </button>
    <button v-else @click="startTimer" class="btn btn-primary btn-block">
      Start
    </button>
  </div>
</template>

<script>
export default {
  name: "Timer",
  components: {},
  data: function () {
    return {
      seconds: 0,
      timer: null,
      timerStarted: false,
    };
  },
  methods: {
    startTimer: function () {
      this.timerStarted = true;
      this.timer = window.setInterval(() => (this.seconds -= 1), 1000);
    },
    stopTimer: function () {
      this.timerStarted = false;
      window.clearInterval(this.timer);
    },
    leftPad: function (n) {
      // only need to left pad a number 9 or below with one zero
      return n < 10 ? `0${n}` : n;
    },
  },
  computed: {
    timeToHoursMinutesSeconds: function () {
      // Format seconds we're storing to h:mm:ss
      const { seconds } = this;
      const hours = Math.floor(seconds / 3600);
      const minutes = this.leftPad(Math.floor((seconds / 60) % 60));
      const remaining = this.leftPad(seconds % 60);
      return `${hours}:${minutes}:${remaining}`;
    },
  },
  props: {
    time: Number,
  },
  watch: {
    time: function (newTime) {
      // Watch this value to calculate the minutes coming in to seconds.
      this.seconds = newTime * 60;
    },
  },
  beforeUnmount: function () {
    this.stopTimer();
  },
};
</script>

<style lang="scss" scoped>
div {
  text-align: center;
}
</style>
