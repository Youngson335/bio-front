<template>
  <div class="recommendation-card">
    <div
      v-if="props.card.sideBlock === SideBlock.LEFT"
      class="recommendation-card__left flex items-stretch gap-6 block-blur"
    >
      <div class="recommendation-card__image">
        <img :src="props.card.image" alt="" />
      </div>
      <div
        class="recommendation-card__info flex flex-col justify-between w-100"
      >
        <div class="recommendation-card__content">
          <p class="recommendation-card__info--p">Набор</p>
          <h5 class="recommendation-card__info--h5">{{ props.card.title }}</h5>
          <div class="recommendation-card__tags flex flex-wrap">
            <!-- <span
              class="recommendation-card__tags-item"
              v-for="(tag, index) of props.card.tags"
              :key="index"
            >
              {{ tag }}
            </span> -->
            <vue-tag
              class="recommendation-card__tags-item"
              v-for="(tag, index) of props.card.tags"
              :key="index"
            >
              {{ tag }}
            </vue-tag>
          </div>
        </div>
        <div
          class="recommendation-card__footer flex justify-between items-center"
        >
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
import VueTag from "../../Tag/VueTag.vue";

interface Props {
  card: RecommendationCard;
}

const props = defineProps<Props>();
</script>

<style lang="scss">
@import "../../import.scss";

.recommendation-card {
  display: flex;

  &__left {
    padding: 20px !important;
    border-radius: $radius;
    align-items: stretch; /* Важно! */
  }

  &__image {
    flex-shrink: 0;
    border-radius: $radius;
    overflow: hidden;

    & img {
      height: 100%; /* Занимает всю высоту родителя */
      width: auto; /* Ширина подстраивается под пропорции */
      max-width: 120px; /* Максимальная ширина, но можно убрать */
      display: block;
    }
  }

  &__info {
    flex: 1;
    min-height: 0;
  }

  &__content {
    flex: 1;
    overflow: hidden;
  }

  &__info--p {
    font-weight: 500;
    font-size: 16px;
    color: $light_gray;
    line-height: 1;
  }

  &__info--h5 {
    font-weight: 800;
    font-size: 22px;
    color: $white;
    line-height: 1.3;
    margin-bottom: 12px;
    word-break: break-word; /* Исправляем вылазивание */
  }

  &__tags {
    gap: 8px;
    margin-bottom: 16px;
  }

  &__amount {
    &--label {
      font-weight: 400;
      font-size: 12px;
      color: $light_gray;
      display: block;
    }

    &--p {
      font-weight: 500;
      font-size: 22px;
      color: $white;
      line-height: 1.2;
    }
  }

  &__footer {
    margin-top: auto;
    padding-top: 16px;
  }
}
</style>
