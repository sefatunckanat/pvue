<template>
  <div id="Home">
    <div class="row r--1" id="_myprofile">
      <div class="area">
        <MyProfile />
      </div>
      <div class="area" id="_aboutus">
        <AboutUs />
      </div>
    </div>
    <div class="row r--2">
      <div class="area a--1" id="_contact">
        <Contact />
      </div>
      <div class="area a--2">4. sayfa</div>
      <div class="area a--3">5. sayfa</div>
    </div>
    <div class="backdrop" v-on:click="onClickBackdrop()"></div>
  </div>
</template>

<script>
  import MyProfile from "./../MyProfile.vue";
  import AboutUs from "./../AboutUs.vue";
  import Contact from "./../Contact.vue";
  export default{
    name: "Home",
    components: {MyProfile,AboutUs,Contact},
    methods:{
      onClickBackdrop:function(){
        this.$router.go(-1)
      }
    }
  }
</script>

<style lang="sass">
  #Home
    height: 100vh
    width: 100vw
    overflow: hidden
    &.--showbackdrop
      .backdrop
        transform: scale(1)
        opacity: 1
    .backdrop
      opacity: 0
      transform: scale(0)
      transition: opacity 0.2s
      background: rgba(#000,0.9)
      left: 0
      top: 0
      width: 100%
      height: 100%
      position: fixed
      z-index: 1
    .row
      display: flex
      flex-wrap: wrap
      flex-direction: row
      .area
        flex-grow: 1
        overflow: hidden
      &.r--1
        height: 60vh
        .area:first-child
          width: 60vw
        .area:last-child
          width: 40vw
      &.r--2
        height: 40vh
        .area
          width: 30vw
          background: center no-repeat
          background-size: cover
          &.a--1
          &.a--2
            background-image: url("./../../assets/images/roadmap.jpg")
          &.a--3
            background-image: url("./../../assets/images/works.jpg")
        .area:last-child
          width: 40vw
  @media (max-width: 640px)
    body
      overflow: unset !important
    #Home
      height: unset !important
    .area
      width: 100vw !important
      height: 75vh !important
    .row
      height: unset !important
</style>
