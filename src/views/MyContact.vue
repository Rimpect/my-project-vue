<template>
  <div class="contact">
    <h1>Contact</h1>
    <p>Здесь реализована форма</p>
    <ContactForm />
  </div>
</template>

<script>
import ContactForm from '@/components/ContactForm.vue';

export default {
  name: 'MyContact',
  components: {
    ContactForm,
  },
};
</script>

<style scoped>
.contact {
  background-color: #f0fff0; /* Honeydew */
  padding: 20px;
}
</style>