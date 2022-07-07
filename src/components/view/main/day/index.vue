<template>
  <main class="content">
    <div class="book-daily-list">
<!--      today-->
      <div class="book-daily-list-component" :class="today(item.day)?'today':''"  v-for="(item,index) in data" :key="index">
        <div class="book-daily-date">
          <div class="date">{{item.day}}
            <i class="today-tag" v-if="today(item.day)">오늘</i>
          </div>
          <div class="total-money">
            <p class="money money-income">{{totalIncome(item.income)}}</p>
            <p class="money money-expense">{{totalOutcome(item.outcome)}}</p>
          </div>
        </div>
        <div class="book-daily-items">
          <div class="book-daily-item " :class="item2.isOutcome?'book-daily-item-expense':'book-daily-item-income'" v-for="(item2, index2) in concator(item.income, item.outcome)" :key="index2">
            <div class="item-content item-content-icon">
              <img :src="item2.category.cateImage" alt="" width="25px">
            </div>
            <div class="item-content item-content-memo">
              <p class="memo">{{item2.dealContent}}</p>
              <p class="category-wrap">
                <span class="category category-main">{{ item2.category.cateName}}</span>
<!--                <span class="category category-sub">대중교통</span>-->
              </p>
            </div>
            <div class="item-content item-content-money">
              <p class="money" :class="item2.isOutcome?'money-expense':'money-income'">{{money(item2.isOutcome, item2.dealPrice)}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  </main>
</template>

<script>
export default {
     name: 'index.vue',
     description: '',
  props:{
    data:{
      type:[Array]
    },
    date:{
      type:[String]
    }
  },
  data(){
       return {

       }
  },
  methods:{
    today(day){
      const ym = this.date.substring(0, this.date.lastIndexOf("-")+1)
      const d = day.replace("일","")
      const today = new Date()
      const ref = new Date(ym+d)
      return this.$dayjs(today).format("YYYY-MM-DD") === this.$dayjs(ref).format("YYYY-MM-DD")
    },
    money(isOutcome, price){
      if(isOutcome){
        return `- ${this.commaFilter(price)} 원`
      }
      return `+ ${this.commaFilter(price)} 원`
    },
    concator(item1, item2){
      return item1.concat(item2)
    },
    uncomma(item){
      return item.toString().replace(/[^\d]+/g, '');
    },
    commaFilter(item){
      return this.uncomma(item).toString().replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
    },
   totalOutcome(item){
     if(item===null||item.length===0){
       return '- 0 원'
     }
     const result = item.reduce((p,n)=>{
       return p+parseInt(n.dealPrice)
     },0)
     return `- ${this.commaFilter(result)} 원`
   },
   totalIncome(item){
     if(item===null||item.length===0){
       return '+ 0 원'
     }
     const result = item.reduce((p,n)=>{
       return p+parseInt(n.dealPrice)
     },0)

     return `+ ${this.commaFilter(result)} 원`
    }
  }
}
</script>

<style scoped>

</style>
