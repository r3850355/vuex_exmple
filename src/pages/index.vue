<template>
  <q-page class="flex flex-center">
    {{ user }}
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'PageIndex',
  computed:{
    user()
    {
      return this.$store.getters.getUsername
    }
  }
}
</script>
