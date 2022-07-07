<template>
  <div>
    <h1>month</h1>
    {{data[1][5].outcome}}
  </div>
</template>

<script>
export default {
     name: 'month',
     description: '',
     components: {
     },
  props:{
    data:{
      type:[Array]
    }
  },
     data() {
          return {
          }
     }
}
</script>

<style scoped>

</style>
