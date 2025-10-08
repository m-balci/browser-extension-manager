<script setup lang="ts">

</script>

<template>
     <header>
          <slot name="header" />
     </header>
     <main>
          <slot name="main" />
     </main>
</template>



<style scoped>
     header {
          margin-top: var(--sp-40);
     }

     main {
          margin-block: var(--sp-64);
     }
</style>