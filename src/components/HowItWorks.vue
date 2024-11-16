<template>
  <section class="how-it-works py-16 text-black">
    <!-- <h2 class="hero-heading text-center" v-text="'How It Works'" /> -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="how-it-works-step">
        <img src="../assets/step-icon1.svg" alt="Step Icon 1">
        <h3 v-text="'Discover'" />
        <p v-text="'Browse video reviews from real people and discover beauty products that suit your needs.'" />
      </div>
      <div class="how-it-works-step">
        <img src="../assets/step-icon2.svg" alt="Step Icon 2">
        <h3 v-text="'Shop'" />
        <p v-text="'Easily shop the products you love directly from our platform with a seamless experience.'" />
      </div>
      <div class="how-it-works-step">
        <img src="../assets/step-icon3.svg" alt="Step Icon 3">
        <h3 v-text="'Share & Earn'" />
        <p v-text="'Share your experience by creating video reviews and earn rewards for every review.'" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.how-it-works-step {
  @apply p-6 rounded-lg shadow-lg bg-white text-center cursor-pointer transition;

  &:hover {
    @apply -translate-y-2.5;
  }

  img {
    @apply mb-4 w-16 h-16 mx-auto;
  }
}
</style>
