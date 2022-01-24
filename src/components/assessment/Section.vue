<template>
    <div v-if="sectionData.section_title">
        <div class="row">
            <h2 class="col-a">{{ sectionData.section_title }}</h2>
            <button 
                type="button"
                class="btn btn-warning"
                v-b-modal='modalId'
            >Edit</button>
            <button 
                type="button" 
                class="btn btn-danger"
                @click="deleteSection()"
            >Delete</button>
        </div>
        <ul
            v-if="sectionData.questions && Array.isArray(sectionData.questions)"
            class="list-group"
        >
            <li
                v-for="(question, idx) in sectionData.questions"
                :key="question.instructions"
                class="list-group-item"
            >
                <question
                    v-if="question.instructions"
                    :question="question"
                    :questionIdx="idx"
                    :sectionIdx="sectionIdx"
                    @delete="deleteQuestion"
                />
            </li>
        </ul>
        <edit-section-modal
            :modalId="modalId"
            :title="sectionData.section_title"
            @update="updateSection"
        />
        <hr />
    </div>
</template>
<script>
import Question from './Question.vue'
import EditSectionModal from '../modals/EditSection.vue'

export default {
    components: {
        Question,
        EditSectionModal,
    },
    props: {
        section: Object,
        sectionIdx: Number,
    },
    data() {
        return {
            sectionData: { ...this.section },
        }
    },
    computed: {
        modalId() {
            return 'section-' + this.sectionIdx; 
        },
    },
    methods: {
        updateSection(data) {
            this.sectionData.section_title = data;
        },
        deleteSection() {
            this.$emit('delete', this.sectionIdx);
        },
        deleteQuestion(idx) {
            this.sectionData.questions.splice(idx, 1);
        }, 
    }
}
</script>