<template>
	<div id="MyJob">

		<transition name="fade">
			<div class="job" v-bind:key="key" v-if="key == jobIndex" v-for="(job,key) in jobs">
				{{job}}
			</div>
		</transition>
		<div class="dev-text">DEVELOPER</div>

	</div>
</template>

<script>
export default{
	name: 'MyJob',
	data: function(){
		return{
			jobs: ["MOBILE","FRONT END","GAME"],
			jobIndex: 0
		}
	},
	created:function(){
		const _T = this;
		setInterval(function(){
			_T.jobIndex++;
			if(_T.jobIndex >= _T.jobs.length){
				_T.jobIndex = 0;
			}
		},2000);
	}
}
</script>

<style lang="sass">
  #MyJob
    position: relative
    display: inline-flex
    margin-top: 10px
    font-size: 1.7em
    overflow: hidden
    justify-content: left
    flex-direction: row
    font-weight: normal
    letter-spacing: 2px
    .dev-text
      margin-left: 10px
    .job
      transition: .5s
    .fade
      &-enter
        transform: translateY(20px)
        opacity: 0
        position: absolute
      &-enter-to
        transform: translateY(0px)
      &-leave-active
        position: absolute
        left: 0
      &-leave-to
        opacity: 0
        transform: translateY(-20px)
        position: absolute
        left: 0
</style>
