<template>
  <div>
    <slot name="header"></slot>
    Loading...{{myMsg}}
    <button @click="onCilck">点我</button>
    <slot name="footer"></slot>
  </div>
</template>
<script>
export default {
  props:['myMsg'],
  methods:{
    onCilck(){
      this.$emit('subClick','我是子组件传递给父组件的数据')
    }
  }
}
</script>

