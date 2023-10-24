<template>
    <main class="bg-black">
        <div class="container">
            <Navbar/>
<!--            <StartedPage/>-->
<!--            <FormInput type="password" placeholder="NAME" />-->
<!--            <AbilitiesShowcase/>-->
            <Projects />
        </div>
      <ContactMe/>
    </main>
</template>
<script setup>
import Navbar from '@components/Navbar.vue'
import StartedPage from '@components/StartedPage.vue'
import AbilitiesShowcase from '@components/AbilitiesShowcase.vue'
import Projects from '@components/Projects.vue'
import FormInput from '@components/Form/Input.vue'
import ContactMe from "@components/ContactMe.vue";
</script>
