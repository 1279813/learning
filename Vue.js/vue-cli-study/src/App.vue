<template>
	<div id="app">
		<!--
			router-link：默认会被渲染成一个<a>标签，to属性为指定链接
			router-view：用于渲染路由匹配到的组件
		-->
    <h1>Vue</h1>
		<router-link to="/main">首页</router-link>
		<router-link to="/content">内容</router-link>
		<router-link to="/lin">Lin</router-link>
		<router-view></router-view>
	</div>
</template>

<script>
	export default{
		name:'App'
	}
</script>

<style>
  #app{
    text-align: center;
  }
</style>
