<template>
  <div class="vue-icon-button">
    <button @click="onClick">
      <img :src="iconSrc" :alt="iconName" />
    </button>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits, computed } from "vue";
import { IconsButtonName } from "./IconsButton";
import IconsButton from "./IconsButton";
import ComponentsEmits from "../../emits/ComponentEmits";

const props = defineProps<{
  iconName: IconsButtonName;
}>();

const emits = defineEmits([ComponentsEmits.SELECT]);

const onClick = () => {
  emits(ComponentsEmits.SELECT);
};

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
