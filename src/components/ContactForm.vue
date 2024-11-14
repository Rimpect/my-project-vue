<template>
  <form @submit.prevent="submitForm">
    <label for="name">Name:</label>
    <input id="name" v-model="name" type="text" required>

    <label for="email">Email:</label>
    <input id="email" v-model="email" type="email" required>

    <label for="message">Message:</label>
    <textarea id="message" v-model="message" required></textarea>

    <button type="submit">Submit</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      message: '',
    };
  },
  methods: {
    submitForm() {
      alert(`Name: ${this.name}\nEmail: ${this.email}\nMessage: ${this.message}`);
      this.name = '';
      this.email = '';
      this.message = '';
    },
  },
};
</script>