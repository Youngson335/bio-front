<template>
  <div class="recommendation-card">
    <div
      v-if="props.card.sideBlock === SideBlock.LEFT"
      class="recommendation-card__left flex items-center"
    >
      <div class="recommendation-card__image">
        <img :src="props.card.image" alt="" class="w-100" />
      </div>
      <div class="recommendation-card__info flex justify-between w-100">
        <p>Набор</p>
        <h5>{{ props.card.title }}</h5>
        <div class="recommendation-card__tags">
          <span
            class="recommendation-card__tags-item"
            v-for="(tag, index) of props.card.tags"
            :key="index"
          >
            {{ tag }}
          </span>
        </div>
        <div class="recommendation-card__footer">
          <div class="recommendation-card__amount">
            <label>Сумма</label>
            <p>{{ props.card.amount }} ₽</p>
          </div>
          <vue-modification-button> В корзину </vue-modification-button>
        </div>
      </div>
    </div>
    <div
      v-if="props.card.sideBlock === SideBlock.RIGHT"
      class="recommendation-card__right"
    ></div>
  </div>
</template>
<script lang="ts" setup>
import { defineProps } from "vue";
import RecommendationCard from "./RecommendationCard";
import VueModificationButton from "../../Buttons/VueModificationButton.vue";
import SideBlock from "./SideBlock";

interface Props {
  card: RecommendationCard;
}

const props = defineProps<Props>();
</script>
<style lang="scss">
.recommendation-card {
}
</style>
