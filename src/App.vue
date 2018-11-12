<template>
  <div id="app">
    <Home/>
    <transition name="fade">
      <router-view/>
    </transition>
  </div>
</template>

<script>
  import Home from './components/pages/Home'
  export default {
    name: 'App',
    components: {Home}
  }
</script>

<style lang="sass">
  @import "assets/style/Variables"
  @import url('https://fonts.googleapis.com/css?family=Cabin:400,700|Montserrat:400,700,900')
  @import '~normalize.css'
  *,::before,::after
    box-sizing: border-box
  body
    width: 100vw
    height: 100vh
    overflow: hidden
  #app
    font-size: $AppFontSize
    font-family: "Cabin",sans-serif
    color: #000
  .sty-regular-font
    font-family: "Cabin",sans-serif
  .sty-title-font
    font-family: "Montserrat",sans-serif

  .fade-enter-active
    transition: all 1s
    left: 0
    top: 0
  .fade-leave-active
    transition: all 1s
    position: absolute
    z-index: 1
    left: 0
    top: 0
  .fade-enter
    transform: translateX(-30vw)
    position: fixed
    left: 0
    top: 0
    opacity: 0
  .fade-leave-to
    transform: translateX(100vw)
    position: fixed
    left: 0
    top: 0
    opacity: 0


</style>
