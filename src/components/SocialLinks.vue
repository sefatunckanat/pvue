<template>
  <div id="SocialLinks">
    <div class="item" v-for="link in links" v-bind:style="{color: link.color,background: link.background}">
      <img v-bind:src="link.image" alt="">
    </div>
  </div>
</template>

<script>
export default{
	name: "SocialLinks",
  data: function(){
    return {
      links: [
        {
          url: "fb.com/sefatunckanat73",
          image: "./static/images/facebook.png",
          background: "#3b5998",
          color: "#fff"
        },
        {
          url: "twitter.com/sefatunckanat",
          image: "./static/images/twitter.png",
          background: "#50abf1",
          color: "#fff"
        },
        {
          url: "github.com/sefatunckanat",
          image: "./static/images/twitter.png",
          background: "#333",
          color: "#fff"
        },
        {
          url: "mailto:sefatunckanat73@gmail.com",
          image: "./static/images/twitter.png",
          background: "#dd4b39",
          color: "#fff"
        },
        {
          url: "https://www.linkedin.com/in/sefa-tun%C3%A7kanat-a39928b1/",
          image: "./static/images/twitter.png",
          background: "#0077b5",
          color: "#fff"
        }
      ]
    }
  }
}
</script>

<style lang="sass">
  #SocialLinks
    display: flex
    margin-top: 1rem
    .item
      font-size: 0
      margin: 0 .3rem
      box-shadow: 0 2px 2px rgba(#000,0.2)
      transition: 0.2s
      position: relative
      top: 0
      &:hover
        box-shadow: 0 2px 10px rgba(#000,0.2)
        cursor: pointer
        top: 4px
      img
        border-radius: 50%
        background: #fff
        width: 25px
        height: 25px
        display: inline-block
        opacity: 0
</style>
