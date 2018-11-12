<template>
  <div id="AboutUs">
    <h1 class="sty-title-font">HAKKIMDA</h1>
    <div class="items">
      <div class="item" v-bind:key="item.title" v-for="item in items">
        <div class="icon">
          <img v-bind:src="item.icon" alt="">
        </div>
        <div class="detail">
          <div class="title">{{item.title}}</div>
          <div class="text">{{item.text}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default{
	name: "AboutUs",
  data: function(){
    return {
      items:[
        {
          title: "MOBİL GELİŞTİRME",
          text: "lorem hkda kashd askdha dka hdaksdh aksdhada",
          icon: "./static/images/mobile.png",
        },
        {
          title: "RESPONSİVE WEB TASARIMI",
          text: "lorem hkda kashd askdha dka hdaksdh aksdhada",
          icon: "./static/images/web.png",
        },
        {
          title: "INDIE OYUN GELİŞTİRME",
          text: "lorem hkda kashd askdha dka hdaksdh aksdhada",
          icon: "./static/images/game-controller.png",
        }
      ]
    }
  }
}
</script>

<style lang="sass">
  @import "../assets/style/Variables"
  #AboutUs
    height: 100%
    position: relative
    display: flex
    justify-content: center
    align-items: center
    flex-direction: column
    &:after
      content: ''
      width: calc( 100% + 30px )
      height: calc( 100% + 30px )
      left: -20px
      top: -20px
      position: absolute
      background: rgba(30,23,23, 0.6) url("../assets/images/about_us.jpg") center no-repeat
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
      margin: 0 0 1em
    .items
      display: flex
      flex-direction: column
      max-width: 90%
      .item
        border-radius: 4px
        display: flex
        flex-direction: row
        margin-bottom: 1.5em
        align-items: center
        color: rgba(#fff,0.8)
        transition: 0.2s
        &:hover
          color: #fff
          .icon
            box-shadow: 0 3px 6px rgba(#000,0.2)
            &:after
              transform: scale(1)
        &:last-child
          margin-bottom: 0
        .icon
          margin-right: 1.25em
          padding: 15px
          border-radius: 50%
          position: relative
          border: 1px solid #fff
          &:after
            transition: 0.5s
            content: ''
            position: absolute
            width: 100%
            height: 100%
            background: #282734
            left: 0
            top: 0
            z-index: 0
            transform: scale(0)
            border-radius: 50%
          img
            height: 50px
            z-index: 1
            position: relative
            display: inline-block
        .detail
          .title
            font-size: 1.3em
            margin-bottom: 0.2em
            font-weight: bold
          .text
            font-size: 0.9em
</style>
