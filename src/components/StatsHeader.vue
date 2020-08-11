<template>
  <div class="header">
    <div class="name">{{profile['Given Name'] + '\'s'}}</div>
    <div class="title" v-if="timePeriodSelection === 'All-time'">
      Life in Film
    </div>
    <div class="title" v-else-if="timePeriodSelection === 'Year'">
      {{yearSelection}}
    </div>
    <div class="title custom" v-else-if="timePeriodSelection === 'Custom'">
      {{customRangeSelectionString}}
    </div>
  </div>
</template>

<script>
  import {unique} from "../utit";

  export default {
    name: "StatsHeader",
    computed: {
      timePeriodSelection() {
        return this.$store.getters['settings/timePeriod']
      },
      profile() {
        return this.$store.getters['userData/profile'];
      },
      yearSelection() {
        return this.$store.getters['settings/yearSelection']
      },
      customRangeSelection() {
        return this.$store.getters['settings/customRangeSelection']
      },
      customRangeSelectionString() {
        let range = this.$store.getters['settings/customRangeSelection'];
        var options = { year: 'numeric', month: 'short', day: 'numeric' };

        let from = new Date(range.from).toLocaleDateString("en-US", options);
        let to = new Date(range.to).toLocaleDateString("en-US", options);

        return unique([from, to]).join(" - ");
      }
    }
  }
</script>

<style scoped>
  .header {
    font-family: Georgia, "Times New Roman", Times, serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
  }

  .title {
    font-size: 5rem;
    font-weight: bolder;
  }

  .custom {
    font-size: 3rem;
  }

  .name {
    font-size: 1.7rem;
    font-style: italic;
  }
</style>
