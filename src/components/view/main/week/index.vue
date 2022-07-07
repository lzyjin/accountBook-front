<template>
     <main class="content">
       <h1>week</h1>
          <div class="book-weekly-list" v-for="(item,index) in data" :key="index">
               <div class="book-weekly-item">
                    <div class="item-content item-content-week">
                         <p class="week week-number">{{`${index+1} 주차`}}</p>
                         <h1 class="week week-period">{{}}</h1>
                      {{item}}
                    </div>
                    <div class="item-content item-content-money">
<!--                         <p class="money money-income">{{incomes(item.income)}}</p>-->
<!--                         <p class="money money-expense">{{ outcomes(item.outcome) }}</p>-->
                    </div>
               </div>
          </div>
          <div class="button--add-list">
               <icon icon="fa-solid fa-plus"></icon>
          </div>
     </main>
</template>

<script>
export default {
     name: 'week-index',
     description: '',
    beforeMount() {
      console.log("ASD",this.data)
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
            return 'outcome'
          },
          incomes(row){
            if(row===null||row.length===0){
              return '+ 0'
            }
            return 'income'
          }
     }

}
</script>

<style scoped>

</style>
