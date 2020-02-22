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
            <CButton type="submit" size="sm" color="primary">
              <CIcon name="cil-check-circle" />Submit
            </CButton>
          </CCardFooter>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>

<script>
export default {
  name: "CreateChallenge",
  data() {
    return {
      form: {
        title: '',
        endDate: '',
        description: ''
      }
    };
  },
  methods: {
    isFilled(val) {
      return val !== '';
    }
  }
};
</script>
