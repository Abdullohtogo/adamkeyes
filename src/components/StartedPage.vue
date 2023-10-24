<template>
  <img src="public/design.png" alt="" class="translate-y-20" />
  <section class="flex mt-20">
    <div class="">
      <h1 class="text-white font-bold xl:text-[88px] xl:w-[750px]">
        Nice to meet you! I’m Adam Keyes.
      </h1>
      <div
        class="bg-green xl:w-[515px] xl:h-[6px] xl:translate-x-[140px] xl:-translate-y-3"
      ></div>
      <p class="xl:text-[18px] gray xl:w-[445px] xl:mt-[20px]">
        Based in the UK, I’m a front-end developer passionate about building
        accessible web apps that users love.
      </p>
      <!--      <a href="#contact" class="flex flex-col text-white xl:mt-[40px] text-[16px]">CONTACT ME</a>-->
      <!--      <div class="bg-green w-[95px] h-[2px] mt-2 hover:text-green-400"></div>-->

      <BaseButton  text="CONTACT ME"/>

    </div>
    <div class="flex">
      <img
        src="/author.png"
        alt=""
        class="xl:w-[444px] xl:h-[618px] xl:-translate-y-20 xl:-translate-x-20"
      />
      <img
        src="public/oval.svg"
        alt=""
        class="-translate-x-[590px] translate-y-36"
      />
    </div>
  </section>
  <div class="border-solid border-gray-300 border-[1px] w-[87%]"></div>
</template>
<script setup>
import BaseButton from "@components/Base/Button.vue";
</script>
