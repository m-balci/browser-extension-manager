import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Extension, FilterButtons } from '@/lib/types';
import { extensions } from '@/lib/data';



export const useStoreExtensions = defineStore('extensions', () => {
  const cards = ref<Extension[]>(extensions);
  const activeFilter = ref<FilterButtons>('all');

  const filteredExtensions = computed(() => {
    switch (activeFilter.value) {
      case 'active':
        return cards.value.filter(card => card.isActive);
      case 'inactive':
        return cards.value.filter(card => !card.isActive);
      default:
        return cards.value;
    }
  })

  const deleteExtension = (idToDelete: number) => {
    const index = cards.value.findIndex(card => card.id === idToDelete);
    if (index !== -1) {
      cards.value.splice(index, 1);
    }
  }

  const toggleExtension = (idToToggle: number) => {
    const extension = cards.value.find(card => card.id === idToToggle);
    if (extension) {
      extension.isActive = !extension.isActive;
    }
  }

  return { filteredExtensions, deleteExtension, toggleExtension, activeFilter }
})
