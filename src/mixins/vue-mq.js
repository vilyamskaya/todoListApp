import Vue from 'vue'
import VueMq from 'vue-mq'

Vue.use(VueMq, {
  breakpoints: {
    xs: 320,
    sm: 768,
    md: 960,
    ml: 1140,
    lg: 1280,
  },
  defaultBreakpoint: 'lg',
})

const mixin = Vue.mixin({
  computed: {
    /**
     * @public
     */
    isDesktop() {
      return this.$mq === 'lg'
    },
    /**
     * @public
     */
    isDesktopSm() {
      return this.$mq === 'ml'
    },
    /**
     * @public
     */
    isTablet() {
      return this.$mq === 'md'
    },
    /**
     * @public
     */
    isPhone() {
      return !this.isDesktop && !this.isTablet && !this.isDesktopSm
    },
  },
})

export default mixin
