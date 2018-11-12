<template>
  <div id="MyProfile">
    <div class="profile-picture"></div>
    <div class="name sty-title-font">SEFA TUNÇKANAT</div>
    <MyJob/>
    <SocialLinks />
  </div>
</template>

<script>
  import MyJob from "./MyJob.vue";
  import SocialLinks from "./SocialLinks.vue";
  export default{
    name: "MyProfile",
    components: { MyJob,SocialLinks }
  }
</script>

<style lang="sass">
  @import "../assets/style/Variables"
  #MyProfile
    height: 100%
    display: flex
    justify-content: center
    align-items: center
    flex-direction: column
    color: #fff
    text-shadow: 0 2px 0 rgba(#000,0.2)
    font-weight: bold
    position: relative
    &:after
      content: ''
      width: calc( 100% + 30px )
      height: calc( 100% + 30px )
      left: -20px
      top: -20px
      position: absolute
      background: rgba(15, 15, 39, 0.73) url("../assets/images/me.jpg") center no-repeat
      background-blend-mode: multiply
      background-size: cover
      z-index: -1
      filter: blur($AreaBlur)
      transition: $AreaTransition
    &:hover
      box-shadow: 0 0 20px red
      &:after
        filter: blur($AreaBlur--Hover)
        transform: scale($AreaScale--Hover)
    .name
      font-size: 2.8rem
      letter-spacing: -3px
    .profile-picture
      display: none
      width: 20%
      padding-top: 20%
      background: url("../assets/images/me.jpg")
      box-shadow: 0 5px 20px rgba(#000,1)
      background-size: cover
      border-radius: 50%
      margin-bottom: 2em

</style>

