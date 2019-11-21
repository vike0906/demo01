import * as types from './mutation-types'
import getters from './getters'

const state = {
  asideWidth:200,
  asidebarIsCollapse:false
};

const mutations = {
  [types.CHANGE_ASIDEBAR](state){
    state.asideWidth = state.asideWidth==200?50:200;
  },
  [types.ASIDEBAR_IS_COLLAPSE](state){
    state.asidebarIsCollapse = state.asidebarIsCollapse?false:true;
  }
};

export default {
  state,
  mutations,
  getters
}