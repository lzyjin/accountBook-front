<template>
  <div >
    <div class="content__top">
      <h1 class="top__title">회원가입</h1>
    </div>
    <div class="content__form">
      <div>
        <label>이름 입력</label>
        <div class="input-wrap">
          <input type="text" name="" v-model="userName" ref="userName">
          <icon icon="fa-solid fa-times"  class="btn-input-reset" @click="fnNameReset"></icon>
        </div>
           <p class="validation" v-show="$v.userName.$error">이름을 올바르게 입력해주세요.</p>
      </div>
      <div style="margin-top: 2rem;">
        <label>이메일 입력</label>
        <div class="input-wrap">
          <input type="text" name="" v-model="id" ref="id" @input="" >
          <icon icon="fa-solid fa-times" class="btn-input-reset" @click="fnIdReset"></icon>
        </div>
           <p class="validation" v-show="$v.id.$error||!meta.usable">{{validMsg()}}</p>
           <p class="successValidation" v-show="meta.visible&&meta.usable">사용 가능한 아이디입니다.</p>
      </div>
      <button class="button--join--sub" @click="fnJoin2">계속하기</button>
    </div>
  </div>
</template>

<script>
     import {required, email} from "vuelidate/src/validators";

     export default {
    data(){
      return {
           meta:{
             usable:true,
             visible:false

           },
        id: '',
        userName: '',
      }
    },
    validations:{
      id:{
           required:required,
           email:email
      },
      userName:{
           required:required,
      }
    },
    methods:{
      fnIdReset(){
        this.id = '';
      },
      fnNameReset(){
        this.userName = '';
      },

      validMsg(){
           if(this.$v.id.$error){
               return "이메일 형식으로 아이디를 올바르게 입력해주세요."
           }
           if(!this.meta.usable){
                return "이미 사용 중인 아이디입니다."
           }
           return ""
      },
      fnJoin2(){
           this.$v.$touch()
           if(this.$v.$invalid&&(!this.meta.usable||!this.meta.visible)){
                return
           }
            this.$store.dispatch("signup/setSignUpStep1", {id: this.id, userName: this.userName})
            this.$router.push({path:'/signUp/step2'});
      },
    },
  }
</script>

<style scoped>

</style>
