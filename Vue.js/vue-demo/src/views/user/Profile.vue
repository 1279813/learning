<template>
  <!--  所有元素，不能直接在根节点下-->
  <div>
    <h1>个人信息</h1>
    {{ id }}
    {{ username }}
  </div>
</template>

<script>
export default {
  props: ["id", "username"],
  name: "Profile",
  // 过滤器
  beforeRouteEnter: (to, from, next) => {
    console.log('进入路由之前') // 加载数据
    next(vm => {
      vm.getData();
    }) //进入路由之前执行getData()
  },
  beforeRouteLeave: (to, from, next) => {
    console.log('进入路由之后')
    next()
  },
  methods: {
    getData() {
      this.axios({
        method: 'get',
        url: 'http://localhost/static/mock/data.json'
      }).then((response) => {
        console.log(response)
      })
    }
  }
}
</script>

<style scoped>

</style>
