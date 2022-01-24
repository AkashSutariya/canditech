<template>
    <b-modal
        :id="modalId"
        title="Edit Question"
        @ok="handleUpdate"
    >
        <label>Type</label> :
        <br />
        <select-input v-model="questionData.type" :options="questionType"  />
        <hr />
        <label>Instructions</label> :
        <br />
        <textarea-input v-model="questionData.instructions" class="w-100" />
        <hr />
        <label v-if="!(this.questionData.type === 'open_text')">Answer :</label>
        <br />
        <text-input
            v-if="questionData.type === 'value'"
            v-model="questionData.answer" 
        />
        <select-input
            v-if="questionData.type === 'multiple'"
            v-model="mcqAnswer"
            :options="questionData.options" 
        />
        <hr />
        <template v-if="questionData.type === 'multiple'">
            <label>Options (Please write option with comma separated)</label> :
            <br />
            <text-input v-model="mcqString" />
        </template>
        <br />
    </b-modal>
</template>

<script>
import TextareaInput from '../form-inputs/TextareaInput.vue';
import SelectInput from '../form-inputs/SelectInput.vue';
import TextInput from '../form-inputs/TextInput.vue';

export default {
    components: {
        TextInput,
        SelectInput,
        TextareaInput
    },
    props: {
        question: Object,
        modalId: String,
    },
    data() {
        return {
            questionType: [
                'multiple',
                'value',
                'open_text'
            ],
            questionData: { ...this.question },
        }
    },
    methods: {
        handleUpdate() {
            this.$emit('update', this.questionData);
        }
    },
    computed: {
        mcqAnswer: {
            get () {
                if (this.questionData.options[this.questionData.answer]) {
                    return this.questionData.options[this.questionData.answer];
                }
                return null;   
            },
            set (val) {
                this.questionData.answer = this.questionData.options.indexOf(val);        
            }
        },
        mcqString: {
            get () {
                return this.questionData.options.join();   
            },
            set (val) {
                const options = val.split(',');
                this.questionData.options = options.filter((a, idx) => a.trim() && options.indexOf(a) === idx);  
            }
        }
    }
}
</script>