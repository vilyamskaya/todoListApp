<template>
  <div class="swipeActions">
    <div ref="wrapper" class="swipeActions__wrapper">
      <div v-if="$slots.left" ref="left" class="swipeActions__left" @click="onClick">
        <slot name="left" />
      </div>
      <div
        ref="content"
        class="swipeActions__content"
        @touchstart.passive="onTouchStart"
        @touchmove.passive="onTouchMove"
        @touchend.passive="onTouchEnd"
      >
        <slot />
      </div>
      <div v-if="$slots.right" ref="right" class="swipeActions__right" @click="onClick">
        <slot name="right" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  function translateX(x: number): string {
    if (x === 0) return ''

    return `translate3d(${x}px, 0, 0)`
  }

  export default defineComponent({
    name: 'SwipeActions',
    props: {
      breakpoint: {
        type: Number,
        default: 768,
      },
      isClosedOnClick: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        isActive: false,
        coord: 0,
        dir: '',
      }
    },
    methods: {
      reveal() {
        // close
        if (!this.dir) {
          this.animateSlide(0)

          return
        }

        // reveal
        if (!this.isActive && this.$refs[this.dir]) {
          const width = (this.$refs[this.dir] as HTMLElement).clientWidth
          this.animateSlide(this.dir === 'left' ? width : -width)
        }
      },
      animateSlide(to: number) {
        const wrapper = this.$refs.wrapper as HTMLElement
        if (wrapper) {
          wrapper.style.transform = translateX(to)
        }
      },
      onClick() {
        if (this.isClosedOnClick) {
          this.dir = ''
          this.reveal()
        }
      },
      onTouchStart(event: TouchEvent) {
        if (window.innerWidth <= this.breakpoint) {
          this.isActive = true

          if (this.dir) {
            this.dir = ''
            this.reveal()

            return
          }

          this.coord = event.touches[0].clientX
        }
      },
      onTouchMove(event: TouchEvent) {
        if (window.innerWidth <= this.breakpoint) {
          if (this.isActive) {
            const shift = -this.coord + (this.coord = event.touches[0].clientX)
            this.dir = shift >= 0 ? 'left' : 'right'
          }
        }
      },
      onTouchEnd() {
        if (window.innerWidth <= this.breakpoint) {
          this.isActive = false
          this.reveal()
        }
      },
    },
  })
</script>

<style lang="scss" scoped>
  .swipeActions {
    overflow: hidden;

    &__wrapper {
      position: relative;
      transition: transform 0.3s;
      will-change: transform;
    }

    &__right {
      display: flex;
      position: absolute;
      top: 0;
      left: 100%;
      align-items: center;
      height: 100%;
    }

    &__left {
      display: flex;
      position: absolute;
      top: 0;
      right: 100%;
      align-items: center;
      height: 100%;
    }
  }
</style>
