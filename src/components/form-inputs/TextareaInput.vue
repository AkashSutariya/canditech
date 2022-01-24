<template>
  <textarea 
    :value="value"
    @input="handleInput"
  />
</template>

<script>
export default {
  props: {
    value: String
  },
  methods: {
    handleInput(event) {
      this.$emit("input", event.target.value);
    }
  }
};
</script>
