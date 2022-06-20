<template>
  <div>
    <div class="content__top">
      <h1 class="top__title">회원가입</h1>
    </div>
    <div class="content__form">
      <div>
        <label>이메일 입력</label>
        <div class="input-wrap">
          <input type="text" name="" v-model="id" ref="id">
          <div v-if="this.id !== ''" class="btn-input-reset" @click="fnIdReset">
            <i class="fas fa-times"></i>
          </div>
        </div>
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
      }
    },
    methods:{
      fnIdReset(){
        this.id = '';
      },
      async fnJoin2(){
        if(this.id === '' || this.id === undefined){
          alert("이메일을 입력해주세요.");
          this.$refs.id.focus()
        }else{
          if(!fnValidation(this.id)){
            alert("이메일 형식이 올바르지않습니다.");
            this.$refs.id.focus();
          }else{
            //api통신 중복id확인
            //const response = await UserSvc.userIdCheck({userId:this.id});
            this.$router.push({path:'/join2',name:'Params', params: {id:this.id}});
          }
        }
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