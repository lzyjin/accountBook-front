<template>
  <div class="headerLayout">
    <icon icon="fa-solid fa-piggy-bank" size="2x" @click="fnGoHome" v-if="header.isLogo" class="logo-btn"></icon>
    <img :src="require('@/assets/static/necessaries/back-svgrepo-com.svg')" alt="" class="back-btn" @click="fnGoBack" v-if="header.isBack">
    <h1 class="title-layout">{{header.title}}</h1>
    <img :src="require('@/assets/static/necessaries/home-svgrepo-com.svg')" alt="" class="home-btn" @click="fnGoHome" v-if="header.isHome">
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
    height: 50px;
    padding:1rem;
    z-index: 1;
    background-color: white;
    border-bottom: 2px solid rgba(238, 238, 238, 0.74);
  }
  .back-btn{
    position: fixed;
    top:0.8rem;
    left:0.5rem;
    width: 1.5rem;
    height: 1.5rem;
  }
  .logo-btn{
    position: fixed;
    top:0.8rem;
    left:0.5rem;
    width: 1.5rem;
    height: 1.5rem;
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
    top: 1rem;
    left: 2.5rem;
    text-align: left;
    font-weight: 600;
  }

</style>
