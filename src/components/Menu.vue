<template lang="pug">
  aside.menu
    .menu__wrapper
      a(href="#").menu__logo-link
        <LogoShort class="menu__logo-img menu__logo-img--short"/>
        <Logo class="menu__logo-img menu__logo-img--long"/>
      span.menu__inscr Спецпроект
      nav.menu__nav
        ul.menu__ul
          li.menu__item.menu__item--about.menu__item--active
            <router-link class="menu__link" to="/">
              span.menu__item-img
                <AboutIcon class="menu__item-icon"/>
              span.menu__item-text О проекте
            </router-link>
          li.menu__item.menu__item--stadium
            <router-link class="menu__link" to="/stadium">
              span.menu__item-img
                <StadiumIcon class="menu__item-icon"/>
              span.menu__item-text Стадион
            </router-link>
          li.menu__item.menu__item--support
            <router-link class="menu__link" to="/support">
              span.menu__item-img
                <SupportIcon class="menu__item-icon"/>
              span.menu__item-text Сектор подержки
            </router-link>
          li.menu__item.menu__item--meeting
            <router-link class="menu__link" to="/meeting">
              span.menu__item-img
                <MeetingIcon class="menu__item-icon"/>
              span.menu__item-text Встреча со сборной
            </router-link>
    span.menu__overlay

</template>
<script>

import Logo from "@/assets/svg/logo.svg";
import LogoShort from "@/assets/svg/logo-short.svg";
import AboutIcon from "@/assets/svg/about-icon.svg";
import StadiumIcon from "@/assets/svg/stadium-icon.svg";
import SupportIcon from "@/assets/svg/support-icon.svg";
import MeetingIcon from "@/assets/svg/meeting-icon.svg";
export default {
  components:{
    Logo,
    LogoShort,
    AboutIcon,
    StadiumIcon,
    SupportIcon,
    MeetingIcon
  },

}
</script>