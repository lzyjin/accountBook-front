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
 import Splash from '@/views/splash/index'
 import SignIn from '@/views/user/login/index'
 import SignUpStep1 from '@/views/user/join/index'
 import SignUpStep2 from '@/views/user/join2/index'
import SpinnerState from "@/common/service/common/SpinnerState";

const routes = [
  {
    path: '/',
    component:Splash,
    meta:{headerIsShow:false, footerIsShow:false},
  },
  {
    path: '/signIn',
    component: SignIn,
    meta:{title:"", isLogo:false, isBack: false, headerIsShow:false, footerIsShow:false}
  },
  {
    path:'/signUp/step1',
    component:SignUpStep1,
    meta:{title:"Step 1", isLogo:true, isBack: false, headerIsShow:true, footerIsShow:false}
  },
  {
    path:"/signUp/step2",
    component: SignUpStep2,
    meta:{title:"Step 2", isLogo:false, isBack: false, headerIsShow:true, footerIsShow:false}
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
  headerControl.setHeader(header.title, header.isLogo, header.isBack, header.isHome, header.headerIsShow)
  headerControl.setFooter(header.footerIsShow)
  next()
  setTimeout(() => {spinner.deActiveSpinner()}, 500)

})
export default router
