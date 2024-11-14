<template>
  <div class="about">
    <h1>About Page</h1>
    <p>Здесь реализовано модальное окно</p>
    <button @click="showModal = true">Показать модальное окно</button>
    <MyModal :show="showModal" @close="showModal = false">
      <h2>Modal Title</h2>
      <p>This is a modal window.</p>
    </MyModal>
  </div>
</template>

<script>
import MyModal from '@/components/MyModal.vue';

export default {
  name: 'MyAbout',
  components: {
    MyModal,
  },
  data() {
    return {
      showModal: false,
    };
  },
};
</script>

<style scoped>
.about {
  background-color: #e6e6fa; /* Lavender */
  padding: 20px;
}
</style>