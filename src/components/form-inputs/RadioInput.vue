<template>
    <div>
        <div v-for="option in options" :key="option">
            <input :name="name"  type="radio" :id="option"> 
            <label :for="option">{{ option }}</label>
        </div>
    </div>
</template>

<script>
export default {
  name: "RadioInput",
  props: {
    options: Array,
    answer: Number,
    name: String,
  },
  methods: {
    handleInput(event) {
      this.$emit("input", event.target.value);
    }
  }
};
</script>
