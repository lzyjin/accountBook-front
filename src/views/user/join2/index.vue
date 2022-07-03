<template>
  <div>
    <div class="content__top">
      <h1 class="top__title">회원가입</h1>
    </div>
    <div class="content__form">
      <div>
        <label>비밀번호 입력</label>
        <div class="input-wrap">
          <input type="password" name="" v-model="password" @focusout="fnPasswordValidation" ref="password">
          <div v-if="this.password !== ''" class="btn-input-reset" @click="fnPasswordReset">
            <i class="fas fa-times"></i>
          </div>
        </div>
        <p v-if="validatePwd === false" class="validate alert">비밀번호는 8자 이상이어야 하며, 숫자/대문자/소문자/특수문자를 모두 포함해야 합니다.</p>
      </div>
      <br>
      <div>
        <label>비밀번호 확인</label>
        <div class="input-wrap">
          <input type="password" name="" v-model="passwordChk" @keyup="fnValidatePwdChk" ref="passwordChk">
          <div v-if="this.passwordChk !== ''" class="btn-input-reset" @click="fnPasswordChkReset">
            <i class="fas fa-times"></i>
          </div>
        </div>
        <p v-if="validatePwdChk === false" class="validate success">비밀번호가 일치하지 않습니다.</p>
      </div>
      <button class="button--join--sub" @click="fnJoin">계속하기</button>
    </div>
  </div>
</template>

<script>
import UserSvc from "@/common/service/UserSvc";

  export default {
    beforeMount() {
      this.id = this.$route.params.id;
      this.userName = this.$route.params.name;
    },
    data(){
      return {
        id:'',
        password: '',
        validatePwd: '',
        passwordChk: '',
        validatePwdChk: '',
      }
    },
    methods:{
      fnPasswordValidation(){
        var reg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
        if(reg.test(this.password)){
          this.validatePwd = true;
        }else{
          this.validatePwd = false;
        }
      },
      fnValidatePwdChk(){
        if(this.password === this.passwordChk){
          this.validatePwdChk = true;
        }else{
          this.validatePwdChk = false;
        }
      },
      fnPasswordReset(){
        this.password = '';
        this.$refs.password.focus();
      },
      fnPasswordChkReset(){
        this.passwordChk = '';
        this.$refs.passwordChk.focus();
      },
      async fnJoin(){
        if(this.password === '' || this.password === undefined){
          alert("비밀번호를 입력해주세요.");
          this.$refs.password.focus();
          return false;
        }
        if(this.passwordChk === '' || this.passwordChk === undefined){
          alert("비밀번호 확인을 입력해주세요.");
          this.$refs.passwordChk.focus();
          return false;
        }
        if(this.password !== this.passwordChk){
          alert("비밀번호와 비밀번호 확인이 다릅니다.");
          return;
        }
        if(!this.validatePwdChk){
          alert("비밀번호는 8자 이상, 숫자/대문자/소문자/특수문자를 모두 포함해야합니다.");
          return;
        }
        console.log(this.$UserSvc)
        const response = await this.$UserSvc.signUp({
            userId:this.id,
            password:this.password,
            userName:this.userName
          }
        );

        console.log(response)

      }
    },
    mounted() {

    }
  }
</script>

<style>

</style>
