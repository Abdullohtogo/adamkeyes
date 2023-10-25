<template>
  <section>
    <div class="flex justify-between mb-20">
      <h1 class="text-white lg:text-[88px] sm:text-5xl xs:text-4xl xs:mt-2">Projects</h1>
      <div class="mt-3">
        <a>
          <BaseButton text="CONTACT ME"/>
        </a>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-[30px] gap-y-[70px] mb-10">

    <ProjectCard
      v-for="(item, idx) in projects"
      :key="idx"
      :image="item.img"
      :title="item.title"
      :languages="item.languages"
      :project-url="item.projectUrl"
      :code-url="item.codeUrl"
    />
    </div>
    <br>
  </section>
</template>

<script setup>
import ProjectCard from '@/components/Card/Project.vue'
import BaseButton from "@components/Base/Button.vue";

const project = {
  img: '/project_img1.png',
  title: 'DESIGN PORTFOLIO',
  languages: ['HTML', 'CSS'],
  projectUrl: 'https://example.com',
  codeUrl: 'https://example.com',
}

const projects = [
  {
    img: '/images/projects/project_img1.png',
    title: 'DESIGN PORTFOLIO',
    languages: ['HTML', 'CSS'],
    projectUrl: 'https://example.com',
    codeUrl: 'https://example.com',
  },
  {
    img: '/images/projects/project_img2.png',
    title: 'TODO WEB APP',
    languages: ['HTML', 'CSS',"JAVASCRIPT"],
    projectUrl: 'https://example.com',
    codeUrl: 'https://example.com',
  },
  {
    img: '/images/projects/project_img3.png',
    title: 'MEMORY GAME',
    languages: ['HTML', 'CSS',"JAVASCRIPT"],
    projectUrl: 'https://example.com',
    codeUrl: 'https://example.com',
  },
  {
    img: '/images/projects/project_img4.png',
    title: 'E-LEARNING LANDING PAGE',
    languages: ['HTML', 'CSS'],
    projectUrl: 'https://example.com',
    codeUrl: 'https://example.com',
  },
  {
    img: '/images/projects/project_img5.png',
    title: 'ENTERTAINMENT WEB APP',
    languages: ['HTML', 'CSS', "JAVASCRIPT"],
    projectUrl: 'https://example.com',
    codeUrl: 'https://example.com',
  },
  {
    img: '/images/projects/project_img6.png',
    title: 'ART GALLERY SHOWCASE',
    languages: ['HTML', 'CSS', "JAVASCRIPT"],
    projectUrl: 'https://example.com',
    codeUrl: 'https://example.com',
  },
]
</script>
