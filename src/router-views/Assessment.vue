<template>
    <div v-if="assessment && assessment.title" class="container">
        <h1 class="text-center">
            {{ assessment.title }}
        </h1>
        <hr />
        <template v-if="assessment.sections && Array.isArray(assessment.sections)">
            <div
                v-for="(section, idx) in assessment.sections"
                :key="section.section_title"
            >
                <assessment-section
                    :section="section"
                    :sectionIdx="idx"
                    @delete="deleteSection"
                />
            </div>
        </template>
    </div>
    <div v-else class="container">
        <h1 class="text-center text-danger">
            {{ errorMessage }}
        </h1>
    </div>
</template>

<script>
import { assessment } from '../apis/assessment';
import AssessmentSection from '../components/assessment/Section.vue'

export default {
    components: {
        AssessmentSection
    },
    data() {
        return {
            assessment: null,
            errorMessage: '',
        }
    },
    methods: {
        getAssessmentData() {
            assessment.get().then((data) => {
                if (data.success) {
                    this.assessment = data.data;
                } else {
                    this.errorMessage = "Error while fetching data!"
                }
            });
        },
        
        deleteSection(idx) {
            this.assessment.sections.splice(idx, 1);
        },
    },
    created() {
        this.getAssessmentData();
    }   
}
</script>