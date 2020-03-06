<template lang="pug">
  ul.partners
    li.partners__item
      a(href="").partners__link 
        <AlpenGold class="partners__icon partners__icon--alpengold"/>
    li.partners__item
      a(href="").partners__link
        <Halls class="partners__icon partners__icon--halls"/>
    li.partners__item
      a(href="").partners__link
        <Dirol class="partners__icon partners__icon--dirol"/>
    li.partners__item
      a(href="").partners__link
        <Tuc class="partners__icon partners__icon--tuc"/>
</template>
<script>

import Tuc from "@/assets/svg/tuc.svg";
import AlpenGold from "@/assets/svg/alpengold.svg";
import Dirol from "@/assets/svg/dirol.svg";
import Halls from "@/assets/svg/halls.svg";

export default {
  components:{
    Tuc,
    AlpenGold,
    Dirol,
    Halls
  }
}
</script>