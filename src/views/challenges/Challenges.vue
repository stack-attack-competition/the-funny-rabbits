<template>
  <div>
    <CRow>
      <CCol :lg="{ size: 8, offset: 2 }">
        <CCard>
          <CCardHeader>
            <strong>Challenges</strong>
          </CCardHeader>
          <CCardBody>
            <CListGroup>
              <CListGroupItem
                class="flex-column align-items-start"
                v-for="(challenge, index) in challenges"
                v-bind:key="challenge.id"
              >
                <div class="d-flex w-100 justify-content-between">
                  <div>
                    <img class="profilePicture" src="https://cdn0.iconfinder.com/data/icons/cat-avatar-filled/64/Cat_avatar_kitten-24-512.png" />
                  </div>
                  <div>
                    <div class="d-flex w-100 justify-content-between">
                      <h5 class="mb-1">{{ challenge.title }}</h5>
                      <small>Ends: {{ challenge.endDate }}</small>
                    </div>
                    <p
                      class="mb-1"
                    >{{ challenge.description.length > 100 ? `${challenge.description.substring(0, 100)}...` : challenge.description }}</p>
                  </div>
                </div>
              </CListGroupItem>
            </CListGroup>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>

<script>
import CTableWrapper from "../base/Table.vue";
import challengesApi from "@/services/api/challenges";

export default {
  name: "Challenges",
  components: { CTableWrapper },
  data() {
    return {
      challenges: []
    };
  },
  mounted() {
    challengesApi.getChallenges().then(challenges => {
      console.log(challenges);
      this.challenges = challenges;
    });
  },
  methods: {
    getChallenges() {
      challengesApi.getChallenges();
    }
  }
};
</script>

<style scoped>
  .profilePicture {
    width: 100px;
    max-height: 100px;
  }
</style>