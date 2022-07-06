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
           <p class="validation" v-show="true">아이디를 입력해주세요</p>
      </div>
      <div style="margin-top: 2rem;">
        <label>이메일 입력</label>
        <div class="input-wrap">
          <input type="text" name="" v-model="id" ref="id">
          <icon icon="fa-solid fa-times" class="btn-input-reset" @click="fnIdReset"></icon>
        </div>
           <p class="validation" v-show="true">아이디를 입력해주세요</p>
      </div>
      <button class="button--join--sub" @click="fnJoin2">계속하기</button>
    </div>
  </div>
</template>

<script>
  import UserSvc from "@/common/service/UserSvc";
  //import {required} from "@vuelidate/validators";
  //import {useVuelidate} from "@vuelidate/core";

  function fnValidation(email){
    let text = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    if(text.test(email)){
      return true;
    }else{
      return false;
    }
  };

  export default {
    /*setup(){
      return {
        v$:useVuelidate()
      }
    },*/
    data(){
      return {
        id: '',
        userName: '',
      }
    },
    methods:{
      fnIdReset(){
        this.id = '';
      },
      fnNameReset(){
        this.userName = '';
      },
      fnJoin2(){

            //api통신 중복id확인
            //const response = await UserSvc.userIdCheck({userId:this.id});
            this.$router.push({path:'/signUp/step2'});
      },
    },
    /*validations(){
      return{
        id:{required},
      }
    },*/
    mounted() {

    }
  }
</script>

<style scoped>

</style>
