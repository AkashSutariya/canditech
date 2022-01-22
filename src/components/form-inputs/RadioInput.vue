<template>
    <div>
        <div v-for="(option, index) in options" :key="option">
            <input :name="name"  type="radio" :id="option"> 
            <label
              class="ml-2 p-2"
              :class="{ 'bg-success': answer === index }"
              :for="option"
            >
              {{ option }}
            </label>
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
};
</script>
