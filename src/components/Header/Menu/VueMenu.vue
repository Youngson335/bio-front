<template>
  <nav class="vue-menu">
    <ul class="flex gap-6">
      <li
        v-for="item in internalMenuItems"
        :key="item.id"
        class="vue-menu-item relative group"
        @click="onSelectActiveMenuItem(item.id)"
      >
        <router-link
          :to="item.route"
          class="menu-link text-gray-700 hover:text-blue-500 transition-colors duration-300"
          :class="{ 'menu-link__active': item.isActive }"
        >
          {{ item.name }}
        </router-link>
        <span
          class="underline-element absolute bottom-0 left-0 h-0.5 bg-blue-500 transition-all duration-300"
          :class="item.isActive ? 'w-full' : 'w-0 group-hover:w-full'"
        >
        </span>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import menuItems from "./menuItems";
import MenuItem from "./MenuItem";
import { ref, watch, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const internalMenuItems = ref(menuItems);

const setActiveMenuItemByPath = (path: string) => {
  internalMenuItems.value.forEach((item: MenuItem) => {
    item.isActive = item.route === path;
  });
};

onMounted(() => {
  setActiveMenuItemByPath(route.path);
});

watch(
  () => route.path,
  (newPath) => {
    setActiveMenuItemByPath(newPath);
  }
);

const onSelectActiveMenuItem = (id: number) => {
  internalMenuItems.value.forEach((item: MenuItem) => {
    item.isActive = item.id === id;
  });
};
</script>

<style lang="scss">
@import "../../import.scss";

.vue-menu {
  &-item {
    .menu-link {
      color: $light_gray;
      transition: all 0.2s ease;
      cursor: pointer;

      &__active {
        color: $green;
      }

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
