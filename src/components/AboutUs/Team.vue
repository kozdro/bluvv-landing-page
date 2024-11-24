<template>
  <div class="team container py-10 md:py-16">
    <h2 class="mb-6 md:mb-12 text-center" v-text="'Meet the Team'" />
    <div class="grid md:grid-cols-3 gap-8 text-center">
      <div>
        <div
          alt="CEO photo"
          class="w-52 h-52 rounded-full mx-auto bg-gray"
        />
        <h3 class="text-primary mt-4" v-text="'Andrzej Koziol'" />
        <p v-text="'CEO & Founder'" />
      </div>
      <div>
        <div
          alt="CTO photo"
          class="w-52 h-52 rounded-full mx-auto bg-gray"
        />
        <h3 class="text-primary mt-4" v-text="'John Smith'" />
        <p v-text="'CTO'" />
      </div>
      <div>
        <div
          alt="COO photo"
          class="w-52 h-52 rounded-full mx-auto bg-gray"
        />
        <h3 class="text-primary mt-4" v-text="'Sarah Johnson'" />
        <p v-text="'COO'" />
      </div>
    </div>
  </div>
</template>
