<template>
  <div>
    <div class="content__top">
      <h1 class="top__title">회원가입</h1>
    </div>
    <div class="content__form">
      <div>
        <label>비밀번호 입력</label>
        <div class="input-wrap">
          <input type="password" name="" v-model="password"  ref="password">
          <icon icon="fa-solid fa-times" class="btn-input-reset" @click="fnPasswordReset"></icon>
        </div>
        <p v-show="$v.password.$error" class="validation">{{ validMsg() }}</p>
      </div>
      <br>
      <div>
        <label>비밀번호 확인</label>
        <div class="input-wrap">
          <input type="password" name="" v-model="passwordChk"  ref="passwordChk">
          <icon icon="fa-solid fa-times"class="btn-input-reset" @click="fnPasswordChkReset"></icon>
        </div>
        <p v-show="$v.passwordChk.$error" class="validation">비밀번호가 일치하지 않습니다.</p>
      </div>
      <button class="button--join--sub" @click="fnJoin" :style="coloring?'background:var(--pink);':'background:var(--gray);'">계속하기</button>
    </div>
  </div>
</template>

<script>
import UserSvc from "@/common/service/UserSvc";
import {required} from "vuelidate/src/validators";

  export default {
    beforeMount() {
      this.id = this.$route.params.id;
      this.userName = this.$route.params.name;
    },
    data(){
      return {
        password: '',
        passwordChk: '',
      }
    },
    computed:{
      coloring(){
        return this.password.length>=0&&this.password===this.passwordChk
      }
    },
    validations:{
      password:{
        test(val){
          const reg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
          if(!reg.test(val)){
            return false
          }
          return required(val)
        }
      },
      passwordChk:{
        test(val){
          if(val!==''&&this.password===val){
            return true
          }

          return false
        }
      }
    },
    methods:{
      validMsg(){
        if(this.password.length<=0){
          return "비밀번호를 입력해주세요."
        }
        return "비밀번호는 8자 이상, 숫자/대문자/소문자/특수문자를 모두 포함해야합니다."
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
        this.$v.$touch()
        if(this.$v.$invalid){
          return
        }


        const signData = this.$store.getters['signup/getSignUp']
        const response = await this.$UserSvc.signUp({userId:signData.id, userName:signData.userName, password:this.password} );
        if(response.code===200){
          this.$router.push('/easySign')
        }

      }
    },
  }
</script>

<style>

</style>
