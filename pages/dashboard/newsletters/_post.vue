<template>
  <div>Soy post, Esta vista recibe el slug {{ $root.$route.params.slug }}</div>
</template>

<script>
export default {
  layout: '_crud'
}
</script>
