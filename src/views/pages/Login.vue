<template>
  <CContainer class="d-flex align-items-center min-vh-100">
    <CRow class="justify-content-center">
      <CCol md="8">
        <CCardGroup>
          <CCard class="p-4">
            <CCardBody>
              <CForm>
                <h1>Login</h1>
                <p class="text-muted">Sign In to your account</p>
                <CInput
                  placeholder="Email"
                  autocomplete="email"
                  v-model="form.email"
                  invalid-feedback="Please provide your email address."
                  :is-valid="isEmailValid"
                >
                  <template #prepend-content><CIcon name="cil-user"/></template>
                </CInput>
                <CInput
                  placeholder="Password"
                  type="password"
                  autocomplete="curent-password"
                  v-model="form.password"
                  invalid-feedback="Please provide your password."
                  :is-valid="isPasswordValid"
                >
                  <template #prepend-content><CIcon name="cil-lock-locked"/></template>
                </CInput>
                <CRow>
                  <CCol col="6">
                    <CButton color="primary" class="px-4" v-on:click="login">Login</CButton>
                  </CCol>
                  <CCol col="6" class="text-right">
                    <CButton color="link" class="px-0">Forgot password?</CButton>
                  </CCol>
                </CRow>
              </CForm>
            </CCardBody>
          </CCard>
          <CCard
            color="primary"
            text-color="white"
            class="text-center py-5 d-md-down-none"
            style="width:44%"
            body-wrapper
          >
            <h2>Sign up</h2>
            <p>Sign up to create life challanges! Creating life challanges will change the way of your living and makes the world a better place!</p>
            <CButton
              color="primary"
              class="active mt-3"
              v-on:click="navigateToRegister"
            >
              Register Now!
            </CButton>
          </CCard>
        </CCardGroup>
      </CCol>
    </CRow>
  </CContainer>
</template>

<script>
import auth from '@/services/api/auth'
import store from '@/store'

export default {
  name: 'Login',
  data() {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login: function () {
      let router = this.$router;
      auth.login(this.form).then(response => {
        store.authenticateUser(response);
        router.push({path: '/'});
      });
    },
    navigateToRegister: function () {
      let router = this.$router;
      router.push({path: '/pages/register'});
    },
    isEmailValid: function () {
      return this.form.email !== '';
    },
    isPasswordValid: function () {
      return this.form.password !== '';
    }
  }
}
</script>
