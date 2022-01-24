<template>
    <b-modal
        :id="modalId"
        title="Edit Section"
        @ok="handleUpdate"
    >
        <label>Title</label>
        <br />
        <text-input v-model="sectionTitle" />
    </b-modal>
</template>

<script>
import TextInput from '../form-inputs/TextInput.vue';

export default {
    components: {
        TextInput
    },
    props: {
        title: String,
        modalId: String,
    },
    data() {
        return {
            sectionTitle: this.title,
        }
    },
    methods: {
        handleUpdate() {
            this.$emit('update', this.sectionTitle);
        }
    }
}
</script>