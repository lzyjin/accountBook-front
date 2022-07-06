<template>
     <body id="intro">
          <div class="title">
               <icon class="title--icon" icon="fa-solid fa-piggy-bank"></icon>
               <p class="title--text">가계부</p>
          </div>
     </body>
</template>

<script>
export default {
  name: "splash-index",
  beforeMount() {
    const timeOut = setTimeout(()=>{
      this.$router.replace("/signIn")
    },2000)
  },

}
</script>

<style scoped>

</style>
