<template>
  <section class="faq py-10 md:py-16 flex flex-col md:flex-row md:gap-20 text-black">
    <h2 class="mb-6 md:mb-0 md:basis-1/3" v-text="'Frequently asked questions'" />
    <Accordion class="md:flex-1">
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
        <p>
          Reach out to us through the
          <RouterLink
            to="/contact"
            class="underline hover:text-lavender-gray"
            v-text="'contact page'"
          />
          to discuss investment opportunities and learn more about our vision.
        </p>
      </AccordionItem>
      <AccordionItem>
        <template #title>
          How can brands join the Bluvv ecosystem?
        </template>
        <p>
          Brands can partner with us to showcase products and engage with a conscious audience.
          <RouterLink
            to="/contact"
            class="underline hover:text-lavender-gray"
            v-text="'Contact us'"
          />
          for details.
        </p>
      </AccordionItem>
      <AccordionItem>
        <template #title>
          When will Bluvv be available to users?
        </template>
        <!-- TODO: add newsletter handling -->
        <p v-text="'Bluvv is currently in the pre-launch phase. Sign up for updates to be among the first to experience it.'" />
      </AccordionItem>
    </Accordion>
  </section>
</template>

<script setup lang="ts">
import Accordion from '@/components/shared/Accordion/Accordion.vue'
import AccordionItem from '@/components/shared/Accordion/AccordionItem.vue'
</script>
