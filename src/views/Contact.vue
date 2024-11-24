<template>
  <section class="contact">
    <div class="bluvv-gradient text-white py-16">
      <div class="container md:my-10">
        <h1 v-text="'We\'d love to hear from You!'" />
        <p class="text-lg" v-text="'Whether you\'re an investor, a partner, or a curious user, we\'re here to help.'" />
      </div>
    </div>
    
    <ContactForm class="mb-6 md:mb-10" />
  </section>
</template>

<script setup lang="ts">
import ContactForm from '@/components/Contact/ContactForm.vue'
</script>

