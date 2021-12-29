<template>
  <div id="app">
    <b-container>
      <b-row>
        <b-col cols="4">
          <timer :time="totalTime" />
          <input-board :handleSave="handleSaveTimeChunks" />
        </b-col>
        <b-col cols="8">
          <main-display :timeChunks="timeChunks" />
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
      totalTime: 240,
      // Realized quite late in to this that vue is watching the id and would keep track of 
      // that and not allow me to reset the status of tasks... because, say id of the 
      // first one still equals 0, so the 'done' status on it is still true
      id: 0,
    };
  },
  methods: {
    handleSaveTimeChunks: function (
      leadTime,
      numTasks,
      finalReviewTime,
      totalTime
    ) {
      this.timeChunks = this.timeChunks.slice(this.timeChunks.length);
      console.log(this.timeChunks);
      // When the data comes back from the input board, we'll set the values
      // which will cause them to get displayed in the main display
      this.totalTime = totalTime;
      // I want to do all the calculating here to keep it central
      // Push in the lead time
      this.timeChunks.push({
        id: this.id,
        type: "Analyze/Read/Organize",
        subtitle:
          "Carefully evaluate the tasks given to you and decide on a priority",
        time: leadTime,
      });
      this.id++;

      // push in each of the tasks
      // the time left after the initial read and before the review
      let timeForTasks = totalTime - leadTime - finalReviewTime;
      // how much time we have to do each task
      let timePerTask = Math.floor(timeForTasks / numTasks);
      while (numTasks-- > 0) {
        this.timeChunks.push({
          id: this.id,
          type: "Task",
          subtitle: "Time for each task on average",
          time: timePerTask,
        });
        this.id++;
      }

      // push in the final review time
      this.timeChunks.push({
        id: this.id,
        type: "Final Review and Submit",
        subtitle: "Review your work carefully!",
        time: finalReviewTime,
      });
      this.id++;
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
