<template>
  <div class="headerLayout">
         <icon icon="fa-solid fa-piggy-bank" size="2x" @click="fnGoHome" v-if="header.isLogo" class="logo-btn"></icon>
         <img :src="require('@/assets/static/necessaries/back-svgrepo-com.svg')" alt="" class="back-btn" @click="fnGoBack" v-if="header.isBack">
         <h1 class="title-layout">{{header.title}}</h1>
         <img :src="require('@/assets/static/necessaries/home-svgrepo-com.svg')" alt="" class="home-btn" @click="fnGoHome" v-if="header.isHome">

         <div class="buttons" v-if="header.isButtonSet">
                 <div class="button__item button__item--search">
                      <icon icon="fa-solid fa-search" size="xl"></icon>
                 </div>
                 <div class="button__item button__item--filter">
                      <icon icon="fa-solid fa-filter" size="xl"></icon>
                 </div>
         </div>
  </div>
</template>

<script>
export default {
  name: "HeaderLayout",
  computed:{
    header(){
      return this.$HeaderControl.getHeader();
    }
  },
  methods:{
    fnGoBack(){
      this.$router.go(-1)
    },
    fnGoHome(){
      this.$router.push('/')
    }

  }
}
</script>

<style scoped>
  .headerLayout{
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 80px;
    padding:1rem;
    z-index: 1;
    background-color: white;
    border-bottom: 2px solid rgba(238, 238, 238, 0.74);
  }
  .back-btn{
    position: absolute;
    top:1.5rem;
    left:0.5rem;
    width: 2rem;
    height: 2rem;
  }
  .logo-btn{
    position: fixed;
       margin-top: 0.3rem;
    left:0.5rem;
    color: #ff87ca;
  }
  .home-btn{
    position: fixed;
    top: 0.8rem;
    right: 0.5rem;
    width: 1.6rem;
    height: 1.6rem;
  }
  .title-layout{
    position: fixed;
    margin-top: 0.6rem;
    left: 3rem;
    text-align: left;
       font-size: 20px;
    font-weight: 600;
  }
  .buttons{
       display: flex;
       justify-content: space-between;
       position: fixed;
       top: 1.7rem;
       right: 0.5rem;
       width: 70px;
  }

</style>
