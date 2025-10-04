<template>
  <header class="vue-header container">
    <div class="flex justify-between items-center mb-6">
      <vue-logo />

      <div class="flex gap-3 items-center">
        <vue-modification-button>Тестирование</vue-modification-button>
        <vue-icon-button :icon-name="IconsButtonName.SHOP" />
        <vue-icon-button :icon-name="IconsButtonName.PROFILE" />
      </div>
    </div>
    <vue-menu />
  </header>
</template>

<script lang="ts" setup>
import VueLogo from "../Logo/VueLogo.vue";
import VueModificationButton from "../Buttons/VueModificationButton.vue";
import VueMenu from "./Menu/VueMenu.vue";
import VueIconButton from "../Buttons/VueIconButton.vue";
import { IconsButtonName } from "../Buttons/IconsButton";
</script>

<style lang="scss">
.vue-header {
  padding: 15px;
}
</style>
