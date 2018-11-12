<template>
  <div id="Demo">
    <div>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aperiam assumenda culpa distinctio est et, eveniet in incidunt itaque iusto natus nisi nulla, quam rem reprehenderit tenetur ut voluptatibus? Fuga.
    </div>

    <router-link to="/">
      <h1>Back</h1>
    </router-link>
  </div>
</template>

<script>
  export default{
    name: "ContactScreen",
  }
</script>

<style lang="sass">
  #Demo
    height: calc( 100vh - 5vh )
    background: lightgreen
    width: calc( 100vw - 10vw )
    overflow: hidden
    position: fixed
    left: 5vw
    top: 2.5vh
    z-index: 2
    border-radius: 4px
    padding: 20px
</style>
