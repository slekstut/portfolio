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
        <div class="w-3/4 pr-14">
          <!-- EXPIERENCE -->
          <div class="text-2xl text-warmgray font-black">{{ $t('expierence') }}</div>
          <div class="flex mt-6">
            <div class="pr-10 text-md font-bold w-1/4 text-right">2023-01 - ...</div>
            <div class="w-3/4">
              <div class="text-md font-bold">{{ $t('exp_1_title') }}</div>
              <div class="mt-3 text-base font-normal text-justify">{{ $t('exp_1_desc') }}</div>
            </div>
          </div>
          <div class="flex mt-6">
            <div class="pr-10 text-md font-bold w-1/4 text-right">2022-07 - ...</div>
            <div class="w-3/4">
              <div class="text-md font-bold">{{ $t('exp_2_title') }}</div>
              <div class="mt-3 text-base font-normal text-justify">{{ $t('exp_2_desc') }}</div>
            </div>
          </div>
          <div class="flex mt-6">
            <div class="pr-10 text-md font-bold w-1/4 text-right">2022-01 - 2022-12</div>
            <div class="w-3/4">
              <div class="text-md font-bold">{{ $t('exp_3_title') }}</div>
              <div class="mt-3 text-base font-normal text-justify">{{ $t('exp_3_desc') }}
            </div>
          </div>
        </div>
        
      </div>
      <div class="w-1/4 pl-6">
          <!-- STACK -->
          <div class="text-2xl text-warmgray font-black">Tech Stack</div>
          <div class="mt-6">
            <div v-for="(item, index) in stackData" :key="index" class="flex items-center mt-4">
              <IconSvg :name="item.icon" size="24" />
              <div class="ml-3">{{ item.name }}</div>
            </div>
          </div>
        </div>
    </div>
  </div>
</div></template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { ref, computed } from "vue";

const { locale, locales } = useI18n();
const selectedLocale = ref(locale.value);

const stackData = ref([
  { name: "HTML", icon: "icon-html" },
  { name: "CSS", icon: "icon-css" },
  { name: "Tailwind", icon: "icon-tailwind" },
  { name: "JavaScript", icon: "icon-js" },
  { name: "Vue.js", icon: "icon-vue" },
  { name: "Vuetify", icon: "icon-vuetify" },
  { name: "Nuxt", icon: "icon-nuxt" },
  { name: "PHP", icon: "icon-php" },
  { name: "Phalcon", icon: "icon-phalcon" },
  { name: "Laravel", icon: "icon-laravel" },
  { name: "MySQL", icon: "icon-mysql" }
]);

const availableLocales = computed(() =>
  (locales.value as string).map((l) => ({ code: l.code, label: l.code.toUpperCase() }))
);

const changeLanguage = () => {
  locale.value = selectedLocale.value;
};
</script>
