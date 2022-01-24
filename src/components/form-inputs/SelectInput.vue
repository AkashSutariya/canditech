<template>
    <select :value="value" @input="handleInput">
        <option selected :value="null">Please select one</option>
        <option v-for="option in options" :value="option" :key="option">
            {{ option }}
        </option>
    </select>
</template>

<script>
export default {
  props: {
    options: Array,
    value: String
  },
  methods: {
    handleInput(event) {
      this.$emit("input", event.target.value);
    }
  }
};
</script>
