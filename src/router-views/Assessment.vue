<template>
    <div class="container">
        <h1 class="text-center">
            {{ assessment.title }}
        </h1>
        <hr />
        <div
            v-for="section in assessment.sections"
            :key="section.section_title"
        >
            <h2>{{ section.section_title }}</h2>
            <ul class="list-group">
                <li
                    v-for="question in section.questions"
                    :key="question.instructions"
                    class="list-group-item"
                >
                    <h5>{{ question.instructions }}</h5>
                    <text-input v-if="question.type === 'value'" v-model="question.answer" />
                    <textarea-input v-if="question.type === 'open_text'" />
                    <radio-input
                        v-if="question.type === 'multiple'" 
                        :options="question.options"
                        :answer="question.answer"
                        :name="question.instructions"
                    />
                </li>
            </ul>
            <hr />
        </div>
    </div>
</template>

<script>
import { assessment } from '../apis/assessment';
import TextInput from '../components/form-inputs/TextInput.vue';
import TextareaInput from '../components/form-inputs/TextareaInput.vue';
import RadioInput from '../components/form-inputs/RadioInput.vue';


export default {
    components: {
        TextInput,
        TextareaInput,
        RadioInput,
    },
    data() {
        return {
            assessment: {},
            test: '',
        }
    },
    methods: {
        getAssessmentData() {
            assessment.get().then((data) => {
                this.assessment = data;
            });
        }
    },
    created() {
        this.getAssessmentData();
    }   
}
</script>