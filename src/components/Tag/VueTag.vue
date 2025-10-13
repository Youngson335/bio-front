<template>
  <div class="vue-tag block-blur">
    <slot />
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss">
@import "../import.scss";
.vue-tag {
  display: inline-block;
  padding: 8px 15px !important;
  border: 2px solid $green;
  border-radius: $radius;
  white-space: nowrap;
  margin-bottom: 4px;
  color: $white;
}
</style>
