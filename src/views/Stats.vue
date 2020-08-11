<template>
  <div class="stats-container">
    <div class="app-bar">
      <Slide right class="slider">
        <a id="home" href="#">
          <span>Home</span>
        </a>
      </Slide>
      <TimePeriodMenu/>
      <StatsHeader/>

    </div>
  </div>
</template>

<script>
  import TimePeriodMenu from "../components/TimePeriodMenu";
  import {Slide} from 'vue-burger-menu'
  import StatsHeader from "../components/StatsHeader";

  export default {
    name: "",
    components: {StatsHeader, TimePeriodMenu, Slide}
  }
</script>

<style lang="less">
  @import "../less/less-variables";

  .stats-container {
    background: #14181c url(../assets/bg.png) 0 -1px repeat-x;
    height: 2700px;
  }



  .app-bar {
    position: fixed;
    width: 100%;
  }

  @media only screen and (min-width: 800px)  {
    .slider {
      display: none;
    }
  }

  .bm-burger-button {
    top: 0.7rem;
    right: 0.7rem !important;
    position: absolute;
  }

  .bm-burger-bars {
    background-color: whitesmoke;
    height: 2px;
  }

</style>
