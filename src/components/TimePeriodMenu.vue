<template>
  <div class="menu-bar">
    <div class="menu">

      <div class="menu-item"
           @click="changeSelection('All-time')"
           v-bind:class="{selected: timePeriodSelection === 'All-time'}">All-time
      </div>

      <div class="menu-item"
           v-popover:year-pick
           v-bind:class="{selected: timePeriodSelection === 'Year'}">
        <span> {{timePeriodSelection === 'Year' ? yearSelection : possibleYears[0]}}</span>
        <span class="arrow-down"></span>
      </div>

      <div class="menu-item"
           v-popover="{name: 'custom-pick', position: '0, 4'}"
           v-bind:class="{selected: timePeriodSelection === 'Custom'}">Custom
      </div>
    </div>

    <popover name="year-pick" class="popover" ref="yearPickRef" width=80>
      <div v-for="item in possibleYears" :key="item" class="year-item"
           @click="changeSelection('Year', { yearSelection: $event.target.innerHTML.trim() })">
        {{item}}
      </div>
    </popover>

    <popover name="custom-pick" class="popover" width=270 ref="customDateRangePopover">
      <div class="date-label"><span>From</span>
        <datetime input-class="range-input" v-model="startYear" class="theme-dark"
                  :max-datetime="endYear || new Date().toISOString()"></datetime>
      </div>
      <div class="date-label"><span>To</span>
        <datetime input-class="range-input" v-model="endYear" class="theme-dark"
                  :min-datetime="startYear" :max-datetime="new Date().toISOString()"></datetime>
      </div>
      <input class="apply-button" type="button" value="Submit"
             @click="changeSelection('Custom', { customRangeSelection: { from: startYear, to: endYear}})"/>
    </popover>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Popover from 'vue-js-popover'
  import {unique} from "../utit";

  Vue.use(Popover);


  export default {
    data() {
      return {
        startYear: null,
        endYear: null,
      }
    },
    name: "TimePeriodMenu",
    methods: {
      changeSelection(timePeriod, value = {}) {
        this.$store.dispatch('settings/setTimePeriod', {timePeriod, ...value});
        this.$refs.yearPickRef.visible = false;
        this.$refs.customDateRangePopover.visible = false;
      }
    },
    computed: {
      possibleYears() {
        let allYears = this.$store.getters['userData/diary']
          .map(item => item['Watched Date'].substring(0, 4));
        return unique(allYears).sort().reverse();
      },
      timePeriodSelection() {
        return this.$store.getters['settings/timePeriod']
      },
      yearSelection() {
        return this.$store.getters['settings/yearSelection']
      },
      customRangeSelection() {
        return this.$store.getters['settings/customRangeSelection']
      },
      maxDate: function () {
        var now = new Date()
        return now.toISOString()
      },
      minDate: function () {
        var now = new Date()
        return now.toISOString()
      }
    },
    mounted() {
      console.log(this.possibleYears);
    }
  }
</script>

<style lang="less">
  @import "../less/less-variables";


  .menu {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;


    background-color: @background-dark;
    background-image: @background-dark-image;
    user-select: none; /* standard syntax */
    -webkit-user-select: none; /* webkit (safari, chrome) browsers */
    -moz-user-select: none; /* mozilla browsers */
    -khtml-user-select: none; /* webkit (konqueror) browsers */
    -ms-user-select: none; /* ie10+ */
  }

  @media only screen and (max-width: 600px) {
    .menu {
      display: flex;
      flex-direction: row;
      justify-content: start;
    }
  }

  .menu-item {
    cursor: pointer;
    padding: 0.8rem;

    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;

    -moz-transition: all 0.2s ease-in;
    -o-transition: all 0.2s ease-in;
    -webkit-transition: all 0.2s ease-in;
    transition: all 0.2s ease-in;


    &:hover {
      color: skyblue;
      background-color: transparent;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      text-shadow: 0px 0px 30px skyblue;
      -moz-transition: all 0.2s ease-in;
      -o-transition: all 0.2s ease-in;
      -webkit-transition: all 0.2s ease-in;
      transition: all 0.2s ease-in;
    }

    &.selected {
      color: skyblue;
      background-color: transparent;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      text-shadow: 0px 0px 30px skyblue;
      -moz-transition: all 0.2s ease-in;
      -o-transition: all 0.2s ease-in;
      -webkit-transition: all 0.2s ease-in;
      transition: all 0.2s ease-in;
    }
  }

  .year-item {
    padding: 10px;
    cursor: pointer;
    border-bottom: solid @text-light 1px;
    color: white;

    &:last-child {
      border-bottom: none;
    }

    -moz-transition: all 0.2s ease-in;
    -o-transition: all 0.2s ease-in;
    -webkit-transition: all 0.2s ease-in;
    transition: all 0.2s ease-in;

    &:hover {
      color: skyblue;
      text-shadow: 0px 0px 30px skyblue;
      -moz-transition: all 0.2s ease-in;
      -o-transition: all 0.2s ease-in;
      -webkit-transition: all 0.2s ease-in;
      transition: all 0.2s ease-in;
    }
  }

  .popover {
    background-color: @background-medium;
  }

  .arrow-down {
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;

    border-top: 5px solid white;
    vertical-align: middle;
    margin: 8px;
  }

  .range-input {
    height: 30px;
    box-shadow: inset 0 -1px 0 #fff;
    background-color: #cde;
    border: none;
    border-radius: 2px;
    outline: none;
    cursor: text;
    padding-left: 10px;

    &:focus {
      background-color: white;

    }
  }

  .date-label {
    margin: auto;
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .date-hint {
    color: @text-light;
    font-size: 0.9rem;
  }

  .apply-button {
    background-color: @green;
    color: #f4fcf0;
    cursor: pointer;
    box-shadow: inset 0 1px 0 hsla(0, 0%, 100%, .3);

    display: inline-block;
    padding: 9px 12px 8px;
    line-height: 12px;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: .075em;
    border: none;
    border-radius: 2px;
    margin: 15px;
    outline: none;

    &:hover {
      background-color: @hover-green;
    }

    &:active {
      background-color: @active-green;
    }

  }

  [data-popover='custom-pick'] {
    top: 20% !important;
    left: auto !important;

  }

  .theme-dark .vdatetime-popup__header,
  .theme-dark .vdatetime-calendar__month__day--selected > span > span,
  .theme-dark .vdatetime-calendar__month__day--selected:hover > span > span {
    background: @background-dark;
  }

  .theme-dark .vdatetime-year-picker__item--selected,
  .theme-dark .vdatetime-time-picker__item--selected,
  .theme-dark .vdatetime-popup__actions__button {
    color: @background-dark;
  }

  .vdatetime-popup {
    color: white;
    background: @background-medium;
  }

  .vdatetime-calendar__navigation--previous,
  .vdatetime-calendar__navigation--next {
    position: absolute;
    top: 0;
    padding: 0 5px;
    width: 18px;
    cursor: pointer;

    & svg {
      width: 8px;
      height: 13px;

      & path {
        transition: stroke .3s;
      }
    }

    svg path {
      stroke: @text-light;
    }

    &:hover svg path {
      stroke: white;
    }
  }

  .vdatetime-calendar__month__day:hover > span > span {
    background: @highlight !important;
  }

  .vdatetime-calendar__month__day--selected > span > span {
    background: @highlight !important;
  }

  .vdatetime-popup__actions__button {
    color: white !important;
    text-transform: uppercase;
  }

  .menu-bar {
    display: flex;
    justify-content: center;
    width: 100%
  }
</style>
