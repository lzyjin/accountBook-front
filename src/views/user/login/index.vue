<template>
  <div>
    <div class="content__top" style="margin-bottom: 5rem; margin-top: 8rem; text-align: center">
      <icon icon="a-solid fa-piggy-bank" style="color: #ff87ca;" size="5x"></icon>
    </div>
    <div class="content__form">
      <div style="margin-top: 2rem; margin-bottom: 2rem;">
        <label>아이디</label>
        <div class="input-wrap">
          <input type="text" name="" v-model="id" ref="id">
          <div  class="btn-input-reset" @click="fnIdReset">
            <icon icon="fa-solid fa-times"></icon>
          </div>
        </div>
          <p class="validation" v-show="$v.id.$error">아이디를 입력해주세요</p>
      </div>
      <div style="margin-top: 2rem; margin-bottom: 2rem;">
        <label>비밀번호</label>
        <div class="input-wrap">
          <input type="password" name="" v-model="password" ref="password">
          <div  class="btn-input-reset" @click="fnPasswordReset">
               <icon icon="fa-solid fa-times"></icon>
          </div>
        </div>
          <p class="validation" v-show="$v.password.$error">비밀번호를 입력해주세요</p>
      </div>
      <button type="button" class="button--login" @click.prevent="fnLogin">로그인</button>
      <p class="btn-join" @click="fnJoin">회원가입하기</p>
    </div>
  </div>
</template>

<script>
  import UserSvc from "@/common/service/UserSvc";
  import {required}from 'vuelidate/src/validators'
  export default {
     name:"sign-in-index",
     data(){
       return{
         id: '',
         password: '',
       }
     },
     validations:{
       id:{required},
       password:{required}
     },
     methods:{
        fnIdReset(){
          this.id = '';
        },
        fnPasswordReset(){
          this.password = '';
        },
        async fnLogin(){
          this.$v.$touch()
          if(this.$v.$invalid){
               console.log("invalid")
               return
          }
          const response = await UserSvc.signIn({userId:this.id, userPassword:this.password});
        },
        fnJoin(){
          this.$router.push({path:'/signUp/step1'})
        }
     },
  }
</script>

<style scoped>

</style>
