<template>
  <header class="vue-header container">
    <div class="flex justify-between items-center mb-6">
      <vue-logo />

      <div class="flex gap-3 items-center">
        <vue-modification-button>Тестирование</vue-modification-button>
        <img :src="shop_icon" alt="" class="w-6 h-6" />
        <img :src="profile_icon" alt="" class="w-6 h-6" />
      </div>
    </div>
    <vue-menu />
  </header>
</template>

<script lang="ts" setup>
import VueLogo from "../Logo/VueLogo.vue";
import VueModificationButton from "../Buttons/VueModificationButton.vue";
import VueMenu from "./Menu/VueMenu.vue";
import { shop_icon, profile_icon } from "../../assets/imports/icons";
</script>

<style lang="scss">
.vue-header {
  padding: 15px;
}
</style>
