<template>
  <CContainer class="min-vh-100 d-flex align-items-center">
    <CRow class="w-100 justify-content-center">
      <CCol md="6" sm="8">
        <CCard class="mx-4 mb-0">
          <CCardBody class="p-4">
            <CForm>
              <h1>Register</h1>
              <p class="text-muted">Create your account</p>
              <CInput
                placeholder="Firstname"
                autocomplete="firstName"
                v-model="form.firstName"
                invalid-feedback="Please enter your first name."
                :is-valid="isFirstNameValid"
              >
                <template #prepend-content><CIcon name="cil-user"/></template>
              </CInput>
              <CInput
                placeholder="LastName"
                autocomplete="lastName"
                v-model="form.lastName"
                invalid-feedback="Please enter your last name."
                :is-valid="isLastNameValid"
              >
                <template #prepend-content><CIcon name="cil-user"/></template>
              </CInput>
              <CInput
                placeholder="Email"
                autocomplete="email"
                prepend="@"
                v-model="form.email"
                invalid-feedback="Please provide your email address."
                :is-valid="isEmailValid"
              />
              <CInput
                placeholder="Picture URL"
                autocomplete="pictureUrl"
                v-model="form.pictureUrl"
                invalid-feedback="Please provide the picture URL."
                :is-valid="isPictureUrlValid"
              >
                <template #prepend-content><CIcon name="cil-user"/></template>
              </CInput>
              <CInput
                placeholder="Password"
                type="password"
                autocomplete="new-password"
                v-model="form.password"
                invalid-feedback="Please provide your password."
                :is-valid="isPasswordValid"
              >
                <template #prepend-content><CIcon name="cil-lock-locked"/></template>
              </CInput>
              <CInput
                placeholder="Confirm password"
                type="password"
                autocomplete="new-password"
                v-model="form.confirmPassword"
                class="mb-4"
                invalid-feedback="Please enter the same password here."
                :is-valid="isConfirmPasswordValid"
              >
                <template #prepend-content><CIcon name="cil-lock-locked"/></template>
              </CInput>
              <CButton color="success" block v-on:click="register">Create Account</CButton>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </CContainer>
</template>

<script>
import auth from '@/services/api/auth'

export default {
  name: 'Register',
  data() {
    return {
      form: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        pictureUrl: ''
      }
    }
  },
  mounted() {
    
  },
  methods: {
    register: function () {
      console.log(this.form);
      auth.register(this.form);
    },
    isFirstNameValid: function () {
      return this.form.firstName !== '';
    },
    isLastNameValid: function () {
      return this.form.lastName !== '';
    },
    isEmailValid: function() {
      return this.form.email !== '';
    },
    isPictureUrlValid: function() {
      return this.form.pictureUrl !== '';
    },
    isPasswordValid: function () {
      return this.form.password !== '';
    },
    isConfirmPasswordValid: function () {
      return this.form.confirmPassword !== '' && (this.form.confirmPassword == this.form.password);
    }
  }
}
</script>