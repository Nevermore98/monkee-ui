<template>
  <div>
    <button class="monkee-switch"
            :class="{'monkee-checked':value}"
            @click="toggle"
            :disabled="disabled">
      <span></span>
    </button>
  </div>
</template>

<script lang="ts">

export default {
  props: {
    value: Boolean,
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    const toggle = () => {
      context.emit('update:value', !props.value);
    };
    return {toggle};
  }
};
</script>

<style lang="scss" scoped>
$button-height: 26px;
$circle-height: $button-height - 4px;

.monkee-switch {
  position: relative;
  height: $button-height;
  width: $button-height*2;
  background: #969696;
  border: none;
  border-radius: $button-height/2;

  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $circle-height;
    width: $circle-height;
    background: white;
    border-radius: $circle-height / 2;
    transition: left 250ms;
  }

  &.monkee-checked {
    background: #0066FF;
  }

  &:focus {
    outline: none;
  }

  &:active {
    > span {
      width: $circle-height + 2px;
    }
  }

  &.monkee-checked:active {
    > span {
      margin-left: -2px;
      width: $circle-height + 2px;
    }
  }

  &.monkee-checked > span {
    left: calc(100% - #{$circle-height} - 2px);
  }

  &[disabled] {
    cursor: not-allowed;
    background-color: #e8e8e8;
  }
}


</style>
