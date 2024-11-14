<template>
  <div class="carousel-container" v-if="isMounted">
    <carousel :items-to-show="1" :wrap-around="true">
      <slide v-for="(image, index) in images" :key="index">
        <img :src="image" alt="Slider Image" class="slider-image" />
      </slide>
      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
  </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

export default {
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      images: [
        require('@/assets/images/image1.jpg'),
        require('@/assets/images/image2.jpg'),
        require('@/assets/images/image3.jpg'),
        require('@/assets/images/image4.jpg'),
      ],
      isMounted: false,
    };
  },
  mounted() {
    this.isMounted = true;
  },
  beforeUnmount() {
    this.isMounted = false;
  },
};
</script>

<style scoped>
.carousel-container {
  width: 600px;
  margin: 0 auto;
}

.slider-image {
  width: 100%;
  display: block;
}
</style>