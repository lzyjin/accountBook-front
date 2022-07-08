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
          </header>
          <main class="content">
               <div class="circle-chart" style="display: flex; justify-content: center">
<!--                    <div class="circle"></div>-->
                    <GChart type="PieChart" :data="data.charTable"
                         style="width: 100%" :options="{legend:'none'}"
                    />

               </div>
               <div class="bar-chart">
                    <div class="bar-chart-item" v-for="(item,index) in data.outcome"
                         v-if="item.length>0" :key="index"
                    >
                         <div class="percent">{{`${percentager(item)}%`}}</div>
                         <div class="icon">
                              <img :src="imageCategorizer(item)"  width="20px"/>
                         </div>
                         <div class="category">{{ nameCategorizer(item) }}</div>
                         <div class="bar">
                              <div class="color" :style="`width: ${percentager(item)}%`"></div>
                         </div>
                         <div class="price">{{ `${commaFilter(reducer(item))}원` }}</div>
                    </div>
               </div>
          </main>
     </div>
</template>

<script>
import {GChart} from 'vue-google-charts/legacy'
export default {
     name: 'index.vue',
     description: '',
     components:{
          GChart
     },
     beforeMount() {
          this.meta.date = (this.$dayjs(new Date()).format("YYYY-MM-DD"))
          this.getList()
     },
     data(){
          return {
               meta:{
                    type:this.$Constants.CALENDAR.MONTH.value,
                    date:"2022-07-01",
                    key:1
               },
               data:{
                    income:[],
                    outcome:[],
                    totalIncome:'',
                    totalOutcome:'',
                    charTable:[]
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
          reducer(item){
            const value = item.reduce((p,n)=>{
                 return p+parseInt(n.dealPrice)
            },0)
               return value
          },
          percentager(item){
            const target = this.reducer(item)
            const ref = this.data.totalOutcome
            return ((target/ref)*100).toFixed(0)
          },
          imageCategorizer(item){
            return item[0].category.cateImage
          },
          nameCategorizer(item){
               const result = item[0].category.cateName
               if(result.length>4){
                    return result.substring(0, 4)+"..."
               }
               return  result
          },
          async getList(){
               const response = await this.$DealLogSvc.statistics({type:this.$Constants.CALENDAR.MONTH.value, regDate:this.regDate})
               const data = response.data
               console.log("DATA", data)
               this.data.income = Object.values(data.income)
               this.data.outcome = Object.values(data.outcome)
               console.log("income", this.data.income)
               console.log("outcome", this.data.outcome)
               let totalIncome = 0;
               Object.values(data.income).forEach(i=>{
                    if(i.length>0){
                         totalIncome += i.reduce((p,n)=>{
                            return p+parseInt(n.dealPrice)
                         },0)
                    }
               })
               let totalOutcome = 0;
               Object.values(data.outcome).forEach(i=>{
                    if(i.length>0){
                         totalOutcome += i.reduce((p,n)=>{
                              return p+parseInt(n.dealPrice)
                         },0)
                    }
               })
               this.data.totalIncome = totalIncome
               this.data.totalOutcome = totalOutcome

               const chartData = [["카테고리", "%"]]
               Object.values(data.outcome).forEach(i=>{
                    if(i.length>0){
                         const cateName = i[0].category.cateName
                         const price = i.reduce((p,n)=>{
                              return p+parseInt(n.dealPrice)
                         },0)

                         chartData.push([cateName, price])
                    }
               })

               this.data.charTable = chartData
          }
     }
}
</script>

<style scoped>

</style>
