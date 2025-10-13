<template>
  <div class="block-blur block-blur-radius">
    <div class="vue-modification-button">
      <button :class="`vue-modification-button--${props.color}`">
        <slot />
      </button>
    </div>
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
@import "../import.scss";
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
    border-top-left-radius: $border-radius;
    border-bottom-right-radius: $border-radius;
    transition: all 0.3s ease-in-out;
    &:hover {
      border-top-right-radius: $border-radius;
      border-bottom-left-radius: $border-radius;
      transition: all 0.2s ease-in;
    }
    &:active {
      transition: all 0.2s ease-in;
      scale: 1.05;
    }
  }
}
</style>
