<template>
    <div>
        <div class="row">
            <h5>{{ questionData.instructions }}</h5>
            <button 
                type="button"
                class="btn btn-warning"
                v-b-modal="modalId"
            >Edit</button>
            <button 
                type="button" 
                class="btn btn-danger"
                @click="deleteQuestion()"
            >Delete</button>
        </div>
        <text-input
            v-if="questionData.type === 'value'"
            v-model="questionData.answer"
        />
        <textarea-input
            v-if="questionData.type === 'open_text'"
        />
        <radio-input
            v-if="questionData.type === 'multiple'"
            :options="questionData.options"
            :answer="questionData.answer"
            :name="questionData.instructions"
        />
        <edit-question-modal
            :modalId="modalId"
            :question="questionData"
            @update="updateQuestion"
        />
    </div>
</template>

<script>
import TextInput from '../form-inputs/TextInput.vue';
import TextareaInput from '../form-inputs/TextareaInput.vue';
import RadioInput from '../form-inputs/RadioInput.vue';
import EditQuestionModal from '../modals/EditQuestion.vue'

export default {
    components: {
        TextInput,
        TextareaInput,
        RadioInput,
        EditQuestionModal
    },
    props: {
        question: Object,
        questionIdx: Number,
        sectionIdx: Number,
    },
    data() {
        return {
            questionData: {
                type: '',
                options: [],
                answer: '',
                ...this.question
            },
        }
    },
    computed: {
        modalId() {
            return 'question-' + this.sectionIdx + '-' + this.questionIdx; 
        },
    },
    methods: {
        updateQuestion(data) {
            this.questionData = { ...data };
        },
        deleteQuestion() {
            this.$emit('delete', this.questionIdx);
        }
    },
}
</script>