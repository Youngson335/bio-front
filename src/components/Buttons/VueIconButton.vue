<template>
  <div class="vue-icon-button">
    <button>
      <img :src="iconSrc" :alt="iconName" />
    </button>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, computed } from "vue";
import { IconsButtonName } from "./IconsButton";
import IconsButton from "./IconsButton";

const props = defineProps<{
  iconName: IconsButtonName;
}>();

const iconSrc = computed(() => {
  return IconsButton[props.iconName];
});
</script>

<style lang="scss">
.vue-icon-button {
  & button {
    cursor: pointer;
    transition: 0.2s ease;
    &:hover {
      opacity: 0.5;
      transition: 0.2s ease;
    }
    &:active {
      scale: 1.05;
      transition: 0.2s ea se;
    }
  }
}
</style>
