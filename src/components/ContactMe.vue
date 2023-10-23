<template>
  <section class="bg-[#242424]">
    <div class="container xl:ml-36" id="contact">
      <br />
      <div class="flex">
        <div>
          <h1 class="text-white text-[88px]">Contact</h1>
          <p class="text-[18px] w-[445px] text-white">
            I would love to hear about your project and how I
            could help. Please fill in the form, and I’ll get
            back to you as soon as possible.
          </p>
        </div>
        <form class="ml-52 mt-6 flex flex-col">
          <FormInput type="password" placeholder="NAME" />
          <br />
          <FormInput
              type="email"
              placeholder="Email"
          />
          <br />
          <textarea
              type="text"
              placeholder="Message"
              class="input w-[450px] mb-5"
          ></textarea>
          <div class="ml-[350px]">
            <button
                type="submit"
                class="border-none flex flex-col text-white xl:mt-[40px] text-[16px]"
            >
              CONTACT ME
            </button>
            <div
                class="bg-green w-[95px] h-[2px] mt-2 hover:text-green-400"
            ></div>
          </div>
        </form>
      </div>
      <div
          class="border-solid border-gray-300 border-[1px] w-[104%] mt-10 mb-16"
      ></div>
      <footer
          class="flex xl:gap-[700px] xl:flex-row lg:gap-[400px] lg:flex-row md:gap-[200px] md:flex-row sm:flex-row sm:gap-[50px] xs:flex-col"
      >
        <h1
            class="text-white text-3xl font-semibold xs:text-center"
        >
          adamkeyes
        </h1>
        <div class="mt-2">
          <img
              src="./assets/img/Group%2012.svg"
              alt=""
              class="xs:ml-[85px]"
          />
        </div>
      </footer>
      <br />
    </div>
  </section>
</template>
<script setup>
import FormInput from '@components/Form/Input.vue'
</script>