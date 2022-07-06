<template>
  <div>
    <div class="content__top">
      <h1 class="top__title">로그인</h1>
    </div>
    <div class="content__form">
      <div>
        <label>아이디</label>
        <div class="input-wrap">
          <input type="text" name="" v-model="id" ref="id">
          <div v-if="this.id !== ''" class="btn-input-reset" @click="fnIdReset">
            <i class="fas fa-times"></i>
          </div>
        </div>
      </div>
      <div>
        <label>비밀번호</label>
        <div class="input-wrap">
          <input type="password" name="" v-model="password" ref="password">
          <div v-if="this.password !== ''" class="btn-input-reset" @click="fnPasswordReset">
            <i class="fas fa-times"></i>
          </div>
        </div>
      </div>
      <button type="button" class="button--login" @click="fnLogin">로그인</button>
      <p class="btn-join" @click="fnJoin">회원가입하기</p>
    </div>
  </div>
</template>

<script>
  import UserSvc from "@/common/service/UserSvc";

  export default {
     name:"main-index",
     data(){
       return{
         id: '',
         password: '',
       }
     },
     methods:{
        fnIdReset(){
          this.id = '';
        },
        fnPasswordReset(){
          this.password = '';
        },
        async fnLogin(){
          //아이디 비밀번호 유효성체크
          if(this.id === ''){
            alert("아이디를 입력해주세요.");
            this.$refs.id.focus();
            return false;
          }else if(this.password === ''){
            alert("비밀번호를 입력해주세요.");
            this.$refs.password.focus();
            return false;
          }
          const response = await UserSvc.signIn({userId:this.id, userPassword:this.password});
        },
        fnJoin(){
          this.$router.push({path:'/join'})
        }
     },
     mounted() {

     }
  }
</script>

<style scoped>

</style>