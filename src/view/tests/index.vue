<template>
  <div>
      我是测试文件
  </div>
</template>

<script>
export default {
    mounted() {
        this.axios.post("/test").then(res=>{
            console.log(res)
        })
    },
}
</script>

<style>

</style>