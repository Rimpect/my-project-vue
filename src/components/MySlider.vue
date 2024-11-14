<template>
  <div class="slider" v-if="isMounted">
    <div class="slider-container">
      <img :src="images[currentIndex]" alt="Slider Image" class="slider-image" />
    </div>
    <button @click="prevImage" class="slider-button prev">Предыдущий</button>
    <button @click="nextImage" class="slider-button next">Следующий</button>
  </div>
</template>

<script>
export default {
  name: 'MySlider',
  data() {
    return {
      images: [
        require('@/assets/images/image1.jpg'),
        require('@/assets/images/image2.jpg'),
        require('@/assets/images/image3.jpg'),
        require('@/assets/images/image4.jpg'),
      ],
      currentIndex: 0,
      isMounted: false,
    };
  },
  mounted() {
    this.isMounted = true;
  },
  beforeUnmount() {
    this.isMounted = false;
  },
  methods: {
    prevImage() {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    },
    nextImage() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
  },
};
</script>

<style scoped>
.slider {
  position: relative;
  width: 600px;
  margin: 0 auto;
}

.slider-container {
  width: 100%;
  overflow: hidden;
}

.slider-image {
  width: 100%;
  display: block;
}

.slider-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding: 10px;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  cursor: pointer;
}

.prev {
  left: 0;
}

.next {
  right: 0;
}
</style>