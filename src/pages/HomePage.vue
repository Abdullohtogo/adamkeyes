<template>
    <main class="bg-black">
        <div class="container">
            <Header/>
          <img src="../../public/images/design.png" alt="" class="absolute xl:translate-x-8 xl:translate-y-0 md:-translate-x-[120px] md:translate-y-[50px]" />
            <StartedPage/>
            <AbilitiesShowcase/>
            <Projects />
        </div>
      <ContactMe/>
    </main>
</template>
<script setup>
import Header from '@components/Header.vue'
import StartedPage from '@components/StartedPage.vue'
import AbilitiesShowcase from '@components/AbilitiesShowcase.vue'
import Projects from '@components/Projects.vue'
import FormInput from '@components/Form/Input.vue'
import ContactMe from "@components/ContactMe.vue";
</script>
