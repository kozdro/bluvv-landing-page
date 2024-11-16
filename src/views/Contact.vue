<template>
  <div>
    <h1 v-text="'Get in Touch'" />
    <p class="subheading" v-text="'Have questions or want to get involved? We\'d love to hear from you!'" />
    <form class="contact-form max-w-lg mx-auto space-y-4">
      <input
        type="text"
        placeholder="Your Name"
        class="form-input"
      />
      <input
        type="email"
        placeholder="Your Email"
        class="form-input"
      />
      <textarea
        rows="4"
        placeholder="Your Message"
        class="form-input"
      />
      <button
        type="button"
        class="bg-primary text-white px-6 py-3 rounded-lg shadow-lg hover:bg-secondary transition"
        v-text="'Send Message'"
        @click="submitContactForm"
      />
    </form>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.form-input {
  @apply p-3 rounded-lg w-full border-2 border-primary transition;

  &:focus {
    @apply outline-none border-secondary;
  }
}
</style>
