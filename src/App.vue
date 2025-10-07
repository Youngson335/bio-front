<template>
  <vue-header />
  <recommendation-card
    v-for="(item, index) of recommendationCardsDetails"
    :card="item"
    :key="index"
  />
</template>

<script setup lang="ts">
import VueHeader from "./components/Header/VueHeader.vue";
import RecommendationCard from "./components/Cards/RecommendationCard/RecommendationCard.vue";
import recommendationCardsDetails from "./components/Cards/RecommendationCard/recommendationCards";
</script>

<style lang="scss">
@import "tailwindcss";
</style>
