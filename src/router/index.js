import Vue from 'vue'
import VueRouter from 'vue-router'
import spinnerState from "@/common/service/common/SpinnerState";
import modalState from "@/common/service/common/ModalState";
import HeaderControl from "@/common/service/common/HeaderControl";
import store from "../store";;
const spinner = new SpinnerState(store)
const headerControl = new HeaderControl(store)

/**
 * meta (헤더 설정)
 * title:타이틀 (중간)
 * isLogo:로고노출 (좌측 상단)
 * isBack:뒤로 가기 (좌측 상단)
 * isHome:홈으로 가기 (우측 상단)
 */

Vue.use(VueRouter)

//page
import Main from '@/views/user/login/index';
import Join from '@/views/user/join/index'; //회원가입1
import Join2 from '@/views/user/join2/index'; //회원가입2
import SpinnerState from "@/common/service/common/SpinnerState";

const routes = [
  {
    path: '/',
    component:Main
  },
  {
    path: '/join',
    component: Join,
  },{
    path: '/join2',
    component: Join2,
    name: 'Params',
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior:((to, from, savedPosition) => {
    if(savedPosition){
      return savedPosition
    }
    return {x:0,y:0}
  }),
})
router.beforeEach((to, from, next) =>{
  spinner.activeSpinner(false)
  const header = to.meta
  headerControl.setHeader(header.title, header.isLogo, header.isBack, header.isHome)

  next()
  setTimeout(() => {spinner.deActiveSpinner()}, 500)

})
export default router
