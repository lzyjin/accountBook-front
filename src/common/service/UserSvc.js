import Service from "@/common/service/common/Service";

const prefix = '/api/user'
class UserSvc extends Service {
    signIn(param={}){
        return this.get(`${prefix}/signIn`, param).then(
            response => {
                if(response.data.code === 200){
                    const userData = response.data.data.userData
                    this.setToken(response.headers['authorization'], response.headers['rf'], userData)
                }
                return response.data
            }
        )
    }
    checkId(param={}){
        return this.get(`${prefix}/check`, param).then(
            response => {
                return response.data
            }
        )
    }
    signUp(param={}) {
        return this.post(`${prefix}/signUp`, param)
            .then(response => {
                console.log(response)
                if(response.data.code===200){
                    console.log(response.headers['authorization'], response.headers['rf'])
                    this.setToken(response.headers['authorization'], response.headers['rf'], response.data.data.userData)
                }
                return response.data;
            });
    }
    easySignUp(param={}){
        return this.patch(`${prefix}/easySignUp`,param)
            .then(response=>{
                return response.data
            })
    }
    easySignIn(param={}){
        return this.get(`${prefix}/easySignIn`, param)
            .then(response=>{
                return response.data
            })
    }

}
export default new UserSvc()
