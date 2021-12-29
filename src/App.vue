<template>
  <div id="app">
    <b-container>
      <b-row>
        <b-col cols="4">
          <timer :time="totalTime" />
          <input-board :handleSave="handleSaveTimeChunks" />
        </b-col>
        <b-col cols="8">
          <main-display />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Timer from "./components/Timer.vue";
import InputBoard from "./components/InputBoard.vue";
import MainDisplay from "./components/MainDisplay.vue";

export default {
  name: "App",
  components: {
    Timer,
    InputBoard,
    MainDisplay,
  },
  data: function () {
    return {
      timeChunks: [],
      totalTime: 0,
    };
  },
  methods: {
    handleSaveTimeChunks: function (
      leadTime,
      numTasks,
      finalReviewTime,
      totalTime
    ) {
      console.log(
        "let's saving the data",
        leadTime,
        numTasks,
        finalReviewTime,
        totalTime
      );
      this.totalTime = totalTime;
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
