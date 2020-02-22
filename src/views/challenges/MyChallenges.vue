<template>
  <div>
    <CRow>
      <CCol :lg="{ size: 8, offset: 2 }">
        <CCard  v-if="selectedChallenge == null">
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
                    <img class="profilePicture" :src="challenge.userPictureUrl" />
                  </div>
                  <div class="mr-auto w-100 pl-3">
                    <div class="d-flex w-100 justify-content-end align-items-center">
                      <h5 class="mb-1 mr-auto">{{ challenge.title }}</h5>
                      <small class="pr-3">Ends: {{ challenge.endDate }}</small>
                      <CLink class="card-header-action btn-maximize" @click="viewChallenge(challenge)">
                        <CButton type="submit" size="sm" color="primary">View</CButton>
                      </CLink>
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
        <ChallengeDetails :challenge="selectedChallenge" v-if="selectedChallenge !== null" v-on:close="closeChallenge()"></ChallengeDetails>
      </CCol>
    </CRow>
  </div>
</template>

<script>
import CTableWrapper from "../base/Table.vue";
import challengesApi from "@/services/api/challenges";
import usersApi from "@/services/api/users";
import ChallengeDetails from './ChallengeDetails.vue'
import store from '@/store'

export default {
  name: "MyChallenges",
  components: { CTableWrapper, ChallengeDetails },
  data() {
    return {
      challenges: [],
      selectedChallenge: null
    };
  },
  mounted() {
    challengesApi.getChallenges().then(challenges => {
      Promise.all(
        challenges.map(challenge => usersApi.getUserById(challenge.author))
      ).then(users => {
        challenges.forEach(challenge => {
          challenge.show = false;
          challenge.userPictureUrl = users.find(
            user => user.id === challenge.author
          ).pictureUrl;
          console.log(challenge.userPictureUrl);
        });
        this.challenges = challenges.reverse().filter(challenge => challenge.author == store.state.currentUser.id);
      });
    });
  },
  methods: {
    viewChallenge(challenge) {
      this.selectedChallenge = challenge;
    },
    closeChallenge() {
      this.selectedChallenge = null;
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