<template>
  <div>Esta vista recibe el id {{ $root.$route.params.id }}</div>
</template>
<script>
export default {
  created() {
    console.log(this.$route.params.id)
  }
}
</script>
