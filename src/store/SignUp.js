export default ({
    namespaced: true,
    state:{
        user:{
            id:'',
            userName:'',
            password:''
        }

    },
    mutations:{
        setSignUpStep1({state}, {id, userName}) {
            state.user.id = id
            state.user.userName=userName
        }
    },
    actions:{
        setSignUpStep1({commit},{id, userName}){
            commit('setSignUpStep1', {id, userName})
        }
    },
    getters:{
        getSignUp(state){
            return state.user
        }
    }
})
