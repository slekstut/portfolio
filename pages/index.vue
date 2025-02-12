<template>
  <div class="py-10 flex flex-col items-start justify-start h-screen text-darkslate bg-background">
    <div class="max-w-[1024px] w-full mx-auto">
      <div class="flex justify-between items-center">
        <div class="flex flex-col items-start justify-center">
          <div class="font-normal text-3xl">
            Sarunas Lekstutis
          </div>
          <div class="text-sm">
            {{ $t('jobTitle') }}
          </div>
        </div>

        <div class="flex flex-col items-start justify-center">
          <div class="flex">
            <IconSvg name="icon-mail" size="24" />
            <div class="pl-6 text-sm cursor-pointer">
              <a href="mailto:sarunas.lekstutis@gmail.com">sarunas.lekstutis@gmail.com</a>
            </div>
          </div>
          <div class="flex pt-3">
            <IconSvg name="icon-linkedin" size="24" />
            <div class="pl-6 text-sm cursor-pointer">
              <a href="https://www.linkedin.com/in/sarunas-lekstutis-296854108" target="_blank">
                sarunas-lekstutis-296854108
              </a>
            </div>
          </div>
          <div class="w-full flex pt-3">
            <IconSvg name="icon-download" size="24" />
            <div class="w-full flex justify-between pl-6 text-sm">
              <span>{{ $t('downloadPDF') }}</span>
              <div class="flex items-center">
                <select
v-model="selectedLocale" class="ml-2 border-none bg-transparent cursor-pointer text-sm"
                  @change="changeLanguage">
                  <option v-for="locale in availableLocales" :key="locale.code" :value="locale.code">
                    {{ locale.label }}
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- main content -->
      <div class="flex mt-20">
        <div class="w-3/4">
          <!-- EXPIERENCE -->
          <div class="text-2xl text-warmgray font-black">Expierence</div>
          <div class="flex mt-6">
            <div class="pr-16 text-lg font-bold w-1/4 text-right">2023-01 - ...</div>
            <div class="w-3/4">
              <div class="text-lg font-bold">Full Stack Developer at Arijus UAB</div>
              <div class="mt-3 text-lg font-normal text-justify">As a full-stack developer, my responsibilities include developing new functionalities and enhancing
                existing features in the intranet systems of a logistics company. I work on various areas such as
                employee accounts, financial reports, signage, CRM, and other tools designed to streamline daily
                operations and improve efficiency for my colleagues.</div>
            </div>
          </div>
          <div class="flex mt-6">
            <div class="pr-16 text-lg font-bold w-1/4 text-right">2022-07 - ...</div>
            <div class="w-3/4">
              <div class="text-lg font-bold">Freelancer</div>
              <div class="mt-3 text-lg font-normal text-justify">Freelancing on my spare time.</div>
            </div>
          </div>
          <div class="flex mt-6">
          <div class="pr-16 text-lg font-bold w-1/4 text-right">2022-01 - 2022-12</div>
          <div class="w-3/4">
            <div class="text-lg font-bold">Front End Developer at Elpresta</div>
            <div class="mt-3 text-lg font-normal text-justify">As a front-end developer, I was responsible for UI/UX design, implementing new functionalities, and
              making fixes according to client requirements for their e-shops. I worked with design assets in Zeplin,
              and the online shops were built on the Prestashop platform.</div>
          </div>
        </div>
        </div>
        <div class="w-1/4">
          <!-- STACK -->
           <div>Tech Stack</div>
           <div>
              <div>
                <IconSvg name="icon-html" size="24" />
                <div>HTML</div>
              </div>
           </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { ref, computed } from "vue";

// i18n Setup
const { locale, locales } = useI18n();
const selectedLocale = ref(locale.value);

// Get Available Locales
const availableLocales = computed(() =>
  (locales.value as string).map((l) => ({ code: l.code, label: l.code.toUpperCase() }))
);

// Change Language
const changeLanguage = () => {
  locale.value = selectedLocale.value;
};
</script>
