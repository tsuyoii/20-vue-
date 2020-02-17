<template>
  <div id="app">
    <h2>App中的counter{{$store.state.counter}}</h2>
    
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
