<template>
  <main class="content" >
    <div class="content__top" style="margin-top: 7rem;">
      <!--            <h1 class="top__title"></h1>-->
      <h1 class="top__title--center">{{msg}}</h1>
      <div class="easy-password-wrap">
        <div class="easy-password" :class="subPassword.length>=1?'on':'off'"></div>
        <div class="easy-password" :class="subPassword.length>=2?'on':'off'"></div>
        <div class="easy-password" :class="subPassword.length>=3?'on':'off'"></div>
        <div class="easy-password" :class="subPassword.length>=4?'on':'off'"></div>
      </div>
    </div>
    <div class="numberpad">
      <div class="numberkey" @click="enterNumber(1)">1</div>
      <div class="numberkey" @click="enterNumber(2)">2</div>
      <div class="numberkey" @click="enterNumber(3)">3</div>
      <div class="numberkey" @click="enterNumber(4)">4</div>
      <div class="numberkey" @click="enterNumber(5)">5</div>
      <div class="numberkey" @click="enterNumber(6)">6</div>
      <div class="numberkey" @click="enterNumber(7)">7</div>
      <div class="numberkey" @click="enterNumber(8)">8</div>
      <div class="numberkey" @click="enterNumber(9)">9</div>
      <div class="numberkey" ></div>
      <div class="numberkey" @click="enterNumber(0)">0</div>
      <div class="numberkey">
        <icon icon="fa-solid fa-backspace" @click="backSpace"></icon>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "easySign",
  beforeMount() {
    this.mode = this.$route.query.mode||'first'
  },
  data(){
    return {
      mode:'',
      subPassword:'',
      subPasswordChk:'',
      msg:'4자리 암호를 입력해 주세요.'
    }
  },
  watch:{
    async subPassword(val){
      if(val.length>=4&&this.mode==="sign"){
        await this.easySign()
      }
      if(val.length>=4&&this.mode==='second'){
        await this.makeEasyUp();
      }
      if(val.length>=4&&this.mode==='first'){
        this.subPasswordChk = val;
        this.subPassword = ''
        this.mode = 'second'
        this.msg = "한 번 더 비밀번호를 입력해주세요"
      }


    }
  },
  methods:{
    backSpace(){
      if(this.subPassword.length>0){
       this.subPassword = this.subPassword.slice(0, this.subPassword.length-1)
      }
    },
    enterNumber(number){
      if(this.subPassword.length<=4){
        this.subPassword+=number.toString()
      }

    },
    async makeEasyUp(){
      if(this.subPassword!==this.subPasswordChk){
        // this.subPasswordChk=''
        this.subPassword=''
        this.mode='second'
        this.msg='비밀번호가 일치하지 않습니다 다시 입력해주세요'
        return
      }
      const response = await this.$UserSvc.easySignUp({passwordSub:this.subPassword})
      if(response.code===200){
       return this.$router.replace("/main")
      }
    },
    async easySign(){
      const response = await this.$UserSvc.easySignIn({passwordSub:this.subPassword})
      if(response.code===200){
        return this.$router.replace("/main")
      }

      console.log(response)
    //  통신,
    //  OK -> main
    //  FAIL
      this.subPassword=''
      this.msg='비밀번호가 틀렸습니다.'
    }



  }

}
</script>

<style scoped>

</style>