<template>
  <v-responsive class="align-center text-center fill-height">
      <v-sheet v-if="!isLoading" class="align-center">
      </v-sheet>
  </v-responsive>
</template>

<script setup>
const props = defineProps({
  photo: Object,
  isLoading: Boolean
})

</script>
