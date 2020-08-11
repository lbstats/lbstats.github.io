const state = () => ({
  profile: {},
  watched: [],
  ratings: [],
  diary: [],
  reviews: [],
  watchlist: [],
  comments: [],
  deleted: {
    diary: [],
    reviews: [],
    comments: [],
  },
  lists: []
});

const actions = {
  setUserData({commit, state}, data) {
    commit('setUserData', data);
  }
};

const mutations = {
  setUserData(state, data) {
    state.profile = data.profile;
    state.watched = data.watched;
    state.ratings = data.ratings;
    state.diary = data.diary;
    state.reviews = data.reviews;
    state.watchlist = data.watchlist;
    state.comments = data.comments;
    state.deleted = data.deleted;
    state.lists = data.lists;
  },
};

const getters = {
  profile: (state,getters, rootState) => state.profile,
  watched: (state,getters, rootState) => state.watched,
  ratings: (state,getters, rootState) => state.ratings,
  diary: (state,getters, rootState) => state.diary,
  reviews: (state,getters, rootState) => state.reviews,
  watchlist: (state,getters, rootState) => state.watchlist,
  comments: (state,getters, rootState) => state.comments,
  deleted: (state,getters, rootState) => state.deleted,
  lists: (state,getters, rootState) => state.lists,
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
