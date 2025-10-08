<script setup lang="ts">
import ExtensionsCard from './extensions-card.vue';

</script>

<template>
     <div class="container">
          <section>
               <div class="cards-grid">
                    <ExtensionsCard />
               </div>

     </section>
     </div>
</template>

<style scoped>
.cards-grid {
     display: grid;
     grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
     gap: var(--sp-12);
}
</style>