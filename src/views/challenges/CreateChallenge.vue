<template>
  <div>
    <CRow>
      <CCol :md="{ size: '6', offset:'3' }">
        <CCard>
          <CCardHeader>
            <strong>Create Challenge</strong>
          </CCardHeader>
          <CCardBody>
            <CForm>
              <CInput
                description="Give your challenge a title"
                label="Title"
                horizontal
                invalid-feedback="This field is required"
                :is-valid="isFilled"
                v-model="form.title"
              />
              <CInput
                description="Set the date while you complete your challenge"
                label="End date"
                type="date"
                horizontal
                invalid-feedback="This field is required"
                :is-valid="isFilled"
                v-model="form.endDate"
              />
              <CTextarea
                label="Description"
                placeholder="Describe your challenge"
                horizontal
                rows="9"
                invalid-feedback="This field is required"
                :is-valid="isFilled"
                v-model="form.description"
              />
            </CForm>
          </CCardBody>
          <CCardFooter>
            <CButton type="submit" size="sm" color="primary" v-on:click="createChallange">
              <CIcon name="cil-check-circle" />Submit
            </CButton>
          </CCardFooter>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>

<script>
import challengesApi from '@/services/api/challenges'
import store from '@/store'

export default {
  name: "CreateChallenge",
  data() {
    return {
      form: {
        title: '',
        endDate: '',
        description: '',
        author: store.state.currentUser.id,
        isActive: true
      }
    };
  },
  methods: {
    isFilled(val) {
      return val !== '';
    },
    createChallange: function() {
      let router = this.$router;
      challengesApi.createChallange(this.form).then(challenges =>{
        router.push({path: '/challenges'});
      })
    }
  }
};
</script>
