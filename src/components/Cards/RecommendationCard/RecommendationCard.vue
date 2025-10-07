<template>
  <div class="recommendation-card">
    <div
      v-if="props.card.sideBlock === SideBlock.LEFT"
      class="recommendation-card__left flex items-center gap-6"
    >
      <div class="recommendation-card__image">
        <img :src="props.card.image" alt="" class="w-100" />
      </div>
      <div
        class="recommendation-card__info flex flex-col justify-between w-100"
      >
        <p class="recommendation-card__info--p">Набор</p>
        <h5 class="recommendation-card__info--h5">{{ props.card.title }}</h5>
        <div class="recommendation-card__tags flex flex-col d-flex">
          <span
            class="recommendation-card__tags-item"
            v-for="(tag, index) of props.card.tags"
            :key="index"
          >
            {{ tag }}
          </span>
        </div>
        <div class="recommendation-card__footer flex justify-between">
          <div class="recommendation-card__amount">
            <label class="recommendation-card__amount--label">Сумма</label>
            <p class="recommendation-card__amount--p">
              {{ props.card.amount }} ₽
            </p>
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
@import "../../import.scss";
.recommendation-card {
  &__info {
    &--p {
      font-weight: 500;
      font-size: 16px;
      color: $light_gray;
      line-height: 5px;
    }
    &--h5 {
      font-weight: 800;
      font-size: 22px;
      color: $dark_blue;
    }
  }
  &__tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    align-items: flex-start;

    &-item {
      display: inline-block;
      padding: 8px 15px;
      border: 2px solid $green;
      flex-shrink: 0;
      border-radius: $border-radius;
    }
  }
  &__amount {
    &--label {
      font-weight: 400;
      font-size: 12px;
      color: $light_gray;
    }
    &--p {
      font-weight: 500;
      font-size: 22px;
      color: $dark_blue;
      line-height: 10px;
    }
  }
  &__image {
    border-radius: $border-radius;
    overflow: hidden;
    & img {
      max-width: 150px;
    }
  }
  &__left {
    padding: 20px;
    max-height: 230px;
  }
}
</style>
