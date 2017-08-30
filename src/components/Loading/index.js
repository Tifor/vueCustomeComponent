import LoadingComponent from './Loading.vue'

const Loading = {
  install: function (Vue) {
    Vue.component('fire-loading',LoadingComponent)
  }
}

export default Loading