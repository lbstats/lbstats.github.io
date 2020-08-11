const state = () => ({
  timePeriod: "All-time",
  yearSelection: null,
  customRangeSelection: {
    from: null,
    to: null
  }
});

const actions = {
  setTimePeriod({commit, state}, data) {
    commit('setTimePeriod', data);
  }
};

const mutations = {
  setTimePeriod(state, data) {
    state.timePeriod = data.timePeriod;
    if (data.timePeriod === 'Year') {
      state.yearSelection = data.yearSelection;
    } else if (data.timePeriod === 'Custom') {
      state.customRangeSelection = data.customRangeSelection;
    }
  },
};

const getters = {
  timePeriod: (state,getters, rootState) => state.timePeriod,
  yearSelection: (state,getters, rootState) => state.yearSelection,
  customRangeSelection: (state,getters, rootState) => state.customRangeSelection,
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
