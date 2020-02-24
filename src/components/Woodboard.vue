<template>
  <div class="woodboard" :class="{removed : isRemoved}" @click="removeBoard">
    <img :src="require(`@/assets/woodboards/${this.woodboard.uri}`)" />
  </div>
</template>

<script>
export default {
  name: 'Woodboard',
  props: {
    woodboard: Object
  },
  data() {
    return {
      isRemoved: false,
    }
  },
  methods: {
    removeBoard() {
      if(!this.isRemoved) {
        this.isRemoved = true;

        if(this.woodboard.defective) {
          this.$emit('add-point');
        } else {
          this.$emit('remove-point');
        }
      }
    },
  }
}
</script>

<style lang="scss" scoped>
@keyframes move {
  from {  right: 300 * 20px }
  to { right: -300 * 20px }
}

.woodboard {
  display: inline-block;
  text-align: center;
  font-size: 0.75em;
  width: 200px;

  &:hover {
    cursor: pointer;
  }

  img {
    height: 80vh;
  }
}

@keyframes slideout {
  from { transform: translateY(0) }
  to { transform: translateY(100vh) }
}

.removed {
  animation-name: slideout;
  animation-duration: 0.5s;
  animation-timing-function: ease-in;
  animation-fill-mode: forwards;

  &:hover {
    cursor: initial;
  }
}
</style>
