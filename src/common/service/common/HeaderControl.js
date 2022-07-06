class HeaderControl{
    constructor(Store) {
        this.$store = Store
    }

    setTitle(title=''){
        this.$store.dispatch('layout/setTitle',{title})
    }
    setIsLogo(isLogo=false){
        this.$store.dispatch('layout/setIsLogo',{isLogo})
    }
    setIsBack(isBack=false){
        this.$store.dispatch('layout/setIsBack',{isBack})
    }
    setIsHome(isHome=false){
        this.$store.dispatch('layout/setIsHome',{isHome})
    }
    setHeader(title='', isLogo=false, isBack=false, isHome=false, isShow=true){
        this.$store.dispatch('layout/setHeader',{title,isLogo,isBack,isHome,isShow})
    }
    getHeader(){
        return this.$store.getters['layout/getHeader']
    }
    setFooter(isShow){
        console.log("SET>>", isShow)
        this.$store.dispatch('layout/setFooter', {isShow})
    }
    getFooter(){
        return this.$store.getters['layout/getFooter']
    }

}
export default HeaderControl
