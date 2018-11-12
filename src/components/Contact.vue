<template>
  <div id="Contact">
    <h1 class="sty-title-font">İLETİŞİM</h1>

    <router-link to="/contact">
      <div role="button" class="button">
        <div class="hover"></div>
        <span>Bir Selam Gönder</span>
      </div>
    </router-link>
  </div>
</template>

<script>
  import SocialLinks from "./SocialLinks.vue";
  export default{
    name: "Contact",
    components: {SocialLinks}
  }
</script>

<style lang="sass">
  @import "../assets/style/Variables"
  #Contact
    height: 100%
    position: relative
    display: flex
    justify-content: center
    align-items: center
    flex-direction: column
    z-index: 1
    &:after
      content: ''
      width: calc( 100% + 30px )
      height: calc( 100% + 30px )
      left: -20px
      top: -20px
      position: absolute
      background: rgba(30,23,23, 0.6) url("../assets/images/contact.jpg") center no-repeat
      background-blend-mode: multiply
      background-size: cover
      z-index: -1
      filter: blur($AreaBlur)
      transition: $AreaTransition
    &:hover:after
      filter: blur($AreaBlur--Hover)
      transform: scale($AreaScale--Hover)
    h1
      font-weight: bold
      font-size: 2em
      color: #fff
      text-align: center
      text-shadow: 0 2px 2px rgba(#000,0.2)
      margin: 0
    a
      text-decoration: none
    .button
      color: #fff
      border: 1px solid #fff
      padding: 10px 20px
      margin-top: 20px
      border-radius: 2px
      position: relative
      &:hover
        .hover
          transform: scale(1)
      .hover
        background: #282734
        position: absolute
        width: 100%
        height: 100%
        left: 0
        top: 0
        transition: 0.5s
        transform: scale(0)
        z-index: 0
      span
        position: relative
        z-index: 1
</style>
