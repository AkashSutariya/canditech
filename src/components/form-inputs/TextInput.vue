<template>
  <input 
    type="text"
    :value="value"
    @input="handleInput"
  />
</template>

<script>
export default {
  name: "TextInput",
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
