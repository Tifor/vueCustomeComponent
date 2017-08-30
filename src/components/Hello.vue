<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <fire-loading :myMsg="data" @subClick="parentClick" >
      <p slot="header">我要插入顶部的插槽中</p>
      <p slot="footer">我要插入底部·的插槽中</p>
    </fire-loading>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Yo Vue.js App',
      data:'我是父组件传递给子组件的数据'
    }
  },
  methods: {
    parentClick(data) {
      alert(data)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
