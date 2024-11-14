<template>
  <div class="home">
    <h1>Home Page</h1>
    <p>Здесь реализован слайдер(карусель)</p>
    <MySlider />
  </div>
</template>

<script>
import MySlider from '@/components/MySlider.vue';

export default {
  name: 'MyHome',
  components: {
    MySlider,
  },
};
</script>