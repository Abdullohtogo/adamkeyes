<template>
    <main class="bg-black">
        <div class="xl:ml-36 lg:ml-16 md:ml-10 sm:ml-5 xs:ml-2">
            <Navbar/>
            <StartedPage/>
<!--            <FormInput type="password" placeholder="NAME" />-->
            <AbilitiesShowcase/>
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
