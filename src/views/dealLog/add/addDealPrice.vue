<template>
  <div>
    <main class="content">
      <div class="content__top">
        <h1 class="top__title">지출/수입 추가</h1>
      </div>
      <div class="content__form">
        <div class="form-item">
          <div class="tab-money-list">
            <div class="tab-money-item active">지출</div>
            <div class="tab-money-item">수입</div>
          </div>
        </div>
        <div class="form-item input input--date">
          <input  type="text" name="" value="2022년 5월 5일">
          <i class="fas fa-angle-down"></i>
        </div>
        <div class="form-item input input--money">
          <input  type="text" name="" value="7000">
          <i class="fas fa-won-sign"></i>
        </div>
        <button class="button--login">다음</button>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "addDealPrice"
}
</script>

<style scoped>

</style>
