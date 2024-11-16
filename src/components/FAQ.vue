<template>
  <section class="faq py-16 flex gap-20 text-black">
    <h2 class="basis-1/3" v-text="'Frequently asked questions'" />
    <Accordion class="flex-1">
      <AccordionItem>
        <template #title>
          What is Bluvv?
        </template>
        <p v-text="'Bluvv is a beauty shopping app where you can explore authentic video reviews, shop for curated products, and share your experience.'" />
      </AccordionItem>
      <AccordionItem>
        <template #title>
          How do I earn rewards?
        </template>
        <p v-text="'You earn rewards by sharing your genuine experiences via video reviews and for every interaction on app.'" />
      </AccordionItem>
      <AccordionItem>
        <template #title>
          How can I invest in Bluvv?
        </template>
        <p v-text="'Reach out to us through the contact page to discuss investment opportunities and learn more about our vision.'" />
      </AccordionItem>
      <AccordionItem>
        <template #title>
          How can brands join the Bluvv ecosystem?
        </template>
        <p v-text="'Brands can partner with us to showcase products and engage with a conscious audience. Contact us for details.'" />
      </AccordionItem>
      <AccordionItem>
        <template #title>
          When will Bluvv be available to users?
        </template>
        <p v-text="'Bluvv is currently in the pre-launch phase. Sign up for updates to be among the first to experience it.'" />
      </AccordionItem>
    </Accordion>
  </section>
</template>

<script setup lang="ts">
import Accordion from '@/components/shared/Accordion/Accordion.vue'
import AccordionItem from '@/components/shared/Accordion/AccordionItem.vue'
</script>
