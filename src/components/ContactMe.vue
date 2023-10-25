<template>
  <section class="bg-[#242424]">
    <div class="container" id="contact">
      <br />
      <div class="flex justify-between lg:flex-row xs:flex-col lg:items-start xs:items-center">
        <div>
          <h1 class="text-white md:text-[88px] lg:text-start xs:text-[72px] xs:text-center">Contact</h1>
          <p class="text-[18px] sm:w-[445px] sm:text-center text-white xs:w-[100%] xs:text-center">
            I would love to hear about your project and how I
            could help. Please fill in the form, and I’ll get
            back to you as soon as possible.
          </p>
        </div>
        <div>
          <form class="lg:mt-6 flex flex-col sm:w-full  xs:items-center xs:mt-24 ">
            <FormInput type="text" placeholder="NAME" />
            <br />
            <FormInput
                type="email"
                placeholder="Email"
            />
            <br />
            <textarea
                type="text"
                placeholder="Message"
                class="input sm:w-[450px] mb-5 xs:w-[350px] resize-none"
            ></textarea>
            <div class="md:place-self-end xs:place-self-center">
              <BaseButton text="SEND MESSAGE"/>
            </div>
          </form>
        </div>

      </div>
      <div
          class="border-solid border-gray-300 border-[1px] w-[100%] mt-10 mb-16"
      ></div>
      <footer class="flex justify-between items-center pt-10 xs:flex-col xs:pt-3 sm:flex-row">
        <h1 class="text-white text-xl sm:text-3xl font-semibold xs:text-center xs:mb-2 ">adamkeyes</h1>
        <div class="flex gap-8 xs:gap-5 sm:gap-7">
          <a href="#" class="xs:w-[18px] sm:w-full"><img src="/images/socials/github.svg" class="" alt=""></a>
          <a href="#" class="xs:w-[18px] sm:w-full"><img src="/images/socials/frontendmentor.svg" alt=""></a>
          <a href="#" class="xs:w-[18px] sm:w-full"><img src="/images/socials/linkedIn.svg" alt=""></a>
          <a href="#" class="xs:w-[18px] sm:w-full"><img src="/images/socials/twitter.svg" alt="" class="mt-[3px]"></a>
        </div>
      </footer>
      <br />
    </div>
  </section>
</template>
<script setup>
import BaseButton from "@components/Base/Button.vue";

import FormInput from '@components/Form/Input.vue'
</script>