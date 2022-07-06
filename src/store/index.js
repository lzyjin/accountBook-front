import Vue from 'vue'
import Vuex from 'vuex'

//vue Store
import layout from './Layouts'
import user from './User'
import signup from './SignUp'


Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    layout,
    user,
    signup,
  }
})
