<template>
  <div class="contentsLayout" :style="resize">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "ContentsLayout",
  beforeMount() {
   const timeOut = setTimeout(()=>{
        this.$router.replace("/signIn")
   },2000)
  },
  computed:{
       resize(){
            if(!this.$HeaderControl.getHeader().isShow&&!this.$HeaderControl.getFooter().isShow){
                 return "height: 100vh !important; margin-top:0px !important; padding:0rem!important"
            }
            if(!this.$HeaderControl.getHeader().isShow){
                 return "height: calc(100vh - 100px) !important;"
            }
            if(!this.$HeaderControl.getFooter().isShow){
                 return "height: calc(100vh - 50px) !important;"
            }
            return ""
       }
  }
}
</script>

<style scoped>
  .contentsLayout{
    width: 100vw;
    margin-top: 50px;
    height: calc(100vh - 150px);
    padding:1rem;
    overflow-y: auto;
  }
</style>
