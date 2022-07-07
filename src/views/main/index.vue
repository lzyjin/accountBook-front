<template>
     <div>
          <header class="header">

               <div class="header__select-month">
                    <div class="inner">
                         <div class="button button--prev" @click="moveDate('left')">
                              <icon icon="fa-solid fa-caret-left"></icon>
                         </div>
                         <div class="month">{{getDate}}</div>
                         <div class="button button--next" @click="moveDate('right')">
                              <icon icon="fa-solid fa-caret-right"></icon>
                         </div>
                    </div>
               </div>
               <div class="header__money">
                    <div class="money__item money__item--income">
                         <div class="money__category">지출</div>
                         <div class="money__amount">{{`- ${commaFilter(data.totalOutcome)} 원`}}</div>
                    </div>
                    <div class="money__item money__item--expense">
                         <div class="money__category">수입</div>
                         <div class="money__amount">{{`+ ${commaFilter(data.totalIncome)} 원`}}</div>
                    </div>
               </div>
               <div class="header__tab">
                    <div class="tab--item monthly" @click="changeTab($Constants.CALENDAR.MONTH.value)"
                         :class="meta.type===$Constants.CALENDAR.MONTH.value?'active':''">월간</div>
                    <div class="tab--item weekly" @click="changeTab($Constants.CALENDAR.WEEK.value)"
                         :class="meta.type===$Constants.CALENDAR.WEEK.value?'active':''">주간</div>
                    <div class="tab--item daily" @click="changeTab($Constants.CALENDAR.DAY.value)"
                         :class="meta.type===$Constants.CALENDAR.DAY.value?'active':''">일간</div>
               </div>
          </header>
          <Month :data="data.calendarMonth" v-if="meta.type === $Constants.CALENDAR.MONTH.value" :key="meta.key"/>
          <Week :data="data.calendarWeek" v-if="meta.type === $Constants.CALENDAR.WEEK.value" :key="meta.key"/>
     </div>
</template>

<script>
import Month from '@/components/view/main/month/index'
import Week from '@/components/view/main/week/index'
export default {
  name: "main-index",
  components:{Month, Week},
  async beforeMount() {
    let param = {type:this.$Constants.CALENDAR.MONTH.value, regDate:this.regDate}
    let response = await this.$DealLogSvc.getList(param)
    this.data.calendarMonth = response.data.calendar
     param = {type:this.$Constants.CALENDAR.WEEK.value, regDate:this.regDate}
     response = await this.$DealLogSvc.getList(param)
    this.data.calendarWeek = response.data.calendar
     param = {type:this.$Constants.CALENDAR.DAY.value, regDate:this.regDate}
     response = await this.$DealLogSvc.getList(param)
      this.data.calendarDay = response.data.calendar

    this.data.totalIncome = response.data.totalIncome
    this.data.totalOutcome = response.data.totalOutcome
  },
  data(){
       return {
          meta:{
               type:this.$Constants.CALENDAR.MONTH.value,
               date:"2022-07-01",
               key:1
          },
          data:{
               calendarMonth:[],
               calendarWeek:[{day:"", outcome:[], income:[]}],
               calendarDay:[],
               totalIncome:'',
               totalOutcome:''
          }
       }
  },
  computed:{
    regDate(){
         const targetDate = new Date(this.meta.date)
         const start = new Date(targetDate.getFullYear(), targetDate.getMonth(), 1)
         const end = new Date(targetDate.getFullYear(), targetDate.getMonth()+1, 0)
         return `${this.$dayjs(start).format("YYYY-MM-DD")} ~ ${this.$dayjs(end).format("YYYY-MM-DD")}`
    },
    getDate(){
         const val = this.meta.date.split("-")
         return `${val[0]} 년 ${val[1]} 월`
    }
  },
  methods:{
       changeTab(idx){
        this.meta.type=idx;
        // this.getList()
       },
       moveDate(direction){
            const date = new Date(this.meta.date)
            if(direction==='left'){
                 date.setMonth(date.getMonth()-1)
                 this.meta.date=this.$dayjs(date).format("YYYY-MM-DD")
            }
            if(direction==='right'){
                 date.setMonth(date.getMonth()+1)
                 this.meta.date=this.$dayjs(date).format("YYYY-MM-DD")
            }
            this.getList()
       },
       uncomma(item){
            return item.toString().replace(/[^\d]+/g, '');
       },
       commaFilter(item){
            return this.uncomma(item).toString().replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
       },
       async getList(){
            const param = {type:this.meta.type, regDate:this.regDate}
            const response = await this.$DealLogSvc.getList(param)

         if(this.meta.type===this.$Constants.CALENDAR.MONTH.value){
           this.data.calendarMonth = response.data.calendar
           this.meta.key+=1
         }
         if(this.meta.type===this.$Constants.CALENDAR.WEEK.value){
           this.data.calendarWeek = response.data.calendar
           this.meta.key+=1
         }
         if(this.meta.type===this.$Constants.CALENDAR.DAY.value){
           this.data.calendarDay = response.data.calendar
           this.meta.key+=1

         }

            this.data.totalIncome = response.data.totalIncome
            this.data.totalOutcome = response.data.totalOutcome
       }
  }
}
</script>

<style scoped>

</style>
