<template>
  <div class="md:relative">
    <div class="md:hidden flex">
      <img
          src="/images/author.png"
          alt=""
          class="items-center sm:w-[220px] w-[175px] mx-auto"
      />
      <div class="">
        <img
            src="/images/oval.svg"
            alt=""
            class="absolute"
        />
      </div>
    </div>
    <div class="md:flex hidden sm:absolute bottom-5 right-0 h-full lg:w-[444px] sm:w-[220px] md:w-[349px] w-[174px]">
      <div class="relative w-full h-full before:absolute before:w-full before:h-[100vh] before:bg-dark before:bottom-0 flex">
        <img
          src="/images/author.png"
          alt=""
          class="lg:absolute lg:w-[444px] sm:w-[220px] md:w-[343px] w-[174px] md:bottom-10 relative items-center md:right-0 md:mt-24"
        />
        <img
          src="/images/oval.svg"
          alt=""
          class="lg:absolute md:bottom-[109px] -left-16 w-[129px]"
        />
      </div>
    </div>
    <section class="flex md:mt-20 w-full relative z-10">
      <div class="lg:mt-0">
        <h1
          class="text-white font-bold xl:text-[88px] lg:text-[70px] lg:w-[610px] xl:w-[749px] md:text-[70px] md:w-[443px] md:text-start text-center text-[35px] sm:text-[45px]"
        >
          Nice to
          meet you! I’m Adam Keyes.
        </h1>
        <p class="md:w-[445px] md:text-[18px] text-white mb-10 text-center md:text-start md:mx-0 xs:mx-auto mt-8">
          Based in the UK, I’m a front-end developer passionate about building
          accessible web apps that users love.
        </p>
        <BaseButton text="CONTACT ME" class="mt-8 mx-auto md:mx-0"/>
      </div>
    </section>
    <div class="border-solid border-gray-300 border-[1px] w-[100%] lg:mt-52 mt-20"></div>
  </div>
</template>
<script setup>
import BaseButton from '@components/Base/Button.vue'
</script>
