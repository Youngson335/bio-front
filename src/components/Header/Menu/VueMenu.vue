<template>
  <nav class="vue-menu">
    <ul class="flex gap-6">
      <li
        v-for="item in menuItems"
        :key="item.id"
        class="vue-menu-item relative group"
      >
        <router-link
          :to="item.route"
          class="menu-link text-gray-700 hover:text-blue-500 transition-colors duration-300"
        >
          {{ item.name }}
        </router-link>
        <span
          class="underline-element absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"
        >
        </span>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import menuItems from "./menuItems";
</script>

<style lang="scss">
@import "../../import.scss";

.vue-menu {
  &-item {
    .menu-link {
      color: $light_gray;
      transition: all 0.2s ease;
      cursor: pointer;

      &:hover {
        color: $gray;
        transition: all 0.2s ease;
      }
    }

    .underline-element {
      background-color: $green;

      .menu-link:hover & {
        background-color: $gray;
      }
    }
  }
}
</style>
