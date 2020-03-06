<template lang="pug">
  section.about
    .about__info
      h1.about__title Сектор поддержки
      p.about__text Нашей команде важен каждый голос поддержки. Займи место на нашем виртуальном стадионе и отправляй слова поддержки игрокам сборной. Ты получишь возможность выиграть мяч с автографами футболистов и даже встретиться с командой!
      <router-link class="btn btn--primary" to="/stadium">Занять место</router-link>
    .about__players.players
      <swiper :options="swiperOptions" ref="playersSwiper" class="players__swiper">
        <swiper-slide v-for="player in players" :key="player.id">
          li.players__item
            span.players__number {{ player.number }}
            img(:src="player.photo", alt="alt").players__photo
            p.players__name {{ player.name}}
            p.players__feature {{ player.status[0].feature }}
            span.players__likes {{ player.status[0].likes }}
        </swiper-slide>
      </swiper>
      .swiper-button-prev(slot="button-prev")
      .swiper-button-next(slot="button-next")
      <router-link class="about__link" to="/stadium">Открыть рейтинг</router-link>
    <ProductBox/>
</template>

<script>

import {players} from "@/helpers/data.js";
import ProductBox from "@/components/ProductBox"

export default {
  components:{
    ProductBox
  },
  mounted(){
    // this.$refs.playersSwiper.swiper.init();
  },
  data(){
    return{
      players,
      swiperOptions: {
        init:true,
        slidesPerView: 3,
        spaceBetween: 0,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
  },
      }
    }
  }
}
</script>