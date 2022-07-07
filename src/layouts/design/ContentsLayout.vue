<template>
  <div class="contentsLayout" :style="resize">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "ContentsLayout",
  computed:{
       resize(){
            if(!this.$HeaderControl.getHeader().isShow&&!this.$HeaderControl.getFooter().isShow){
                 return "height: 100vh !important; margin-top:0px !important; padding:0rem!important"
            }
            if(!this.$HeaderControl.getHeader().isShow){
                 return "height: calc(100vh - 80px) !important;"
            }
            if(!this.$HeaderControl.getFooter().isShow){
                 return "height: calc(100vh - 80px) !important;"
            }
            return ""
       }
  }
}
</script>

<style scoped>
  .contentsLayout{
    width: 100vw;
    margin-top: 80px;
    height: calc(100vh - 150px);
    padding:0.2rem;
    overflow-y: auto;
  }
</style>
