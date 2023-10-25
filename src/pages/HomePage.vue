<template>
    <main class="bg-black">
        <div class="container">
            <Header/>
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
