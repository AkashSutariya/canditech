<template>
  <input 
    type="text"
    :value="value"
    @input="handleInput"
  />
</template>

<script>
export default {
  props: {
    value: [String, Number]
  },
  methods: {
    handleInput(event) {
      this.$emit("input", event.target.value);
    }
  }
};
</script>
