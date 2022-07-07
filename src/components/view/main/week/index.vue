<template>
     <main class="content">
          <div class="book-weekly-list" v-for="(item,index) in data">
               <div class="book-weekly-item">
                    <div class="item-content item-content-week">
                         <p class="week week-number">{{`${index+1} 주차`}}</p>
                         <h1 class="week week-period">5월 1일</h1>
                    </div>
                    <div class="item-content item-content-money">
                         <p class="money money-income">+152,305,700원</p>
                         <p class="money money-expense">-712,995원</p>
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
     props:{
          data:{
               type:[Array]
          }
     },
     computed:{
     },
     methods:{
          outcome(row){

          },
          income(row){

          }
     }

}
</script>

<style scoped>

</style>
