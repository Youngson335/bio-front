<template>
  <div class="vue-modification-button">
    <button :class="`vue-modification-button--${props.color}`">
      <slot />
    </button>
  </div>
</template>
<script lang="ts" setup>
import ColorsButton from "./ColorsButton";
import { defineProps, withDefaults } from "vue";

interface Props {
  color?: ColorsButton;
}

const props = withDefaults(defineProps<Props>(), {
  color: ColorsButton.GREEN,
});
</script>
<style lang="scss">
@import "../../assets/style/colors.scss";
.vue-modification-button {
  & button {
    text-align: center;
    padding: 8px 20px;
    border: none;
    cursor: pointer;
  }
  &--green {
    background-color: $green;
    color: $text_white;
    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;
    transition: all 0.3s ease-in-out;
    &:hover {
      border-top-right-radius: 20px;
      border-bottom-left-radius: 20px;
      transition: all 0.2s ease-in;
    }
    &:active {
      transition: all 0.2s ease-in;
      scale: 1.05;
    }
  }
}
</style>
