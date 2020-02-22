<template>
  <div>
    <CRow>
      <CCol :md="{ size: '6', offset:'3' }">
        <CCard>
          <CCardHeader>
            <strong>Profile Page</strong>
          </CCardHeader>
          <CCardBody>
            <CForm>
              <CInput
                label="First Name"
                horizontal
                invalid-feedback="This field is required"
                :is-valid="isFilled"
                v-model="user.firstName"
              />
              <CInput
                label="Last Name"
                horizontal
                invalid-feedback="This field is required"
                :is-valid="isFilled"
                v-model="user.lastName"
              />
              <CTextarea
                label="Email"
                horizontal
                invalid-feedback="This field is required"
                :is-valid="isFilled"
                v-model="user.email"
              />
            </CForm>
          </CCardBody>
          <CCardFooter>
            <CButton type="submit" size="sm" color="primary" v-on:click="saveProfile">
              <CIcon name="cil-check-circle" />Save
            </CButton>
          </CCardFooter>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>

<script>
import store from '@/store'

export default {
  name: 'User',
  data() {
    return {
      user: {}
    };
  },
  mounted() {
    this.user = store.state.currentUser;
  },
  methods: {
    isFilled(val) {
      return val !== '';
    },
    saveProfile: function() {
        
    }
  }
}
</script>
