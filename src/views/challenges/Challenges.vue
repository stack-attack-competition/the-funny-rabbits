<template>
  <div>
    <CRow>
      <CCol lg="12">
        <CTableWrapper :items="challenges" :fields="['author', 'title', 'endDate']">
          <template #header>
            <CIcon name="cil-grid"/> Challenges
            <div class="card-header-actions">
            </div>
          </template>
        </CTableWrapper>
      </CCol>
    </CRow>

  </div>
</template>

<script>
import CTableWrapper from '../base/Table.vue'
import challengesApi from '@/services/api/challenges'

export default {
  name: 'Challenges',
  components: { CTableWrapper },
  data() {
    return {
      challenges: []
    }
  },
  mounted() {
      challengesApi.getChallenges().then(challenges =>{
        console.log(challenges)
        this.challenges = challenges
      })
  },
  methods: {

    getChallenges() {
      challengesApi.getChallenges()
    }
  }
}
</script>
