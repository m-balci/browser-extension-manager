<script setup lang="ts">
import AppHeader from './components/app-header.vue';
import ExtensionsCards from './components/extensions-cards.vue';
import ExtensionsHeader from './components/extensions-header.vue';
import AppLayout from './layouts/AppLayout.vue';
</script>



<template>
  <AppLayout>
    <template #header>
      <AppHeader/>
    </template>
    <template #main>
      <ExtensionsHeader />
      <ExtensionsCards />
    </template>
  </AppLayout>
</template>

<style scoped></style>