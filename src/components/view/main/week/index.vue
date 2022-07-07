<template>
     <main class="content">
          <div class="book-weekly-list" v-for="(item,index) in data" :key="index">
               <div class="book-weekly-item">
                    <div class="item-content item-content-week">
                         <p class="week week-number">{{`${index+1} 주차`}}</p>
                         <h1 class="week week-period">{{item.day}}</h1>

                    </div>
                    <div class="item-content item-content-money">
                         <p class="money money-income">{{incomes(item.income)}}</p>
                         <p class="money money-expense">{{ outcomes(item.outcome) }}</p>
                    </div>
               </div>
          </div>
     </main>
</template>

<script>
export default {
     name: 'week-index',
     description: '',
    beforeMount() {
    },
  props:{
          data:{
               type:[Array]
          }
     },
     computed:{
     },
     methods:{
          outcomes(row){
            if(row===null||row.length===0){
              return '- 0'
            }
           const result =  row.reduce((p,n)=>{
                return p+parseInt(n.dealPrice)
            },0)
            return `- ${result}`
          },
          incomes(row){
            if(row===null||row.length===0){
              return '+ 0'
            }
            const result =  row.reduce((p,n)=>{
              return p+parseInt(n.dealPrice)
            },0)
            return `+ ${result}`
          }
     }

}
</script>

<style scoped>

</style>
