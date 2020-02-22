<template>
  <CHeader fixed with-subheader dark>
    <CHeaderNav class="d-md-down-none">
      <CHeaderNavItem class="px-3">
        <img src="https://previews.123rf.com/images/nicescene/nicescene1712/nicescene171200058/92170966-rabbit-icon-symbol-head-logo-design-.jpg" height="30px" />
      </CHeaderNavItem>
    </CHeaderNav>
    <CHeaderNav class="d-md-down-none mr-auto">
      <CHeaderNavItem class="px-3">
        <CHeaderNavLink to="/">Home</CHeaderNavLink>
      </CHeaderNavItem>
      <CHeaderNavItem class="px-3"  v-if="isAuthenticated">
        <CHeaderNavLink to="/my-challenges">My Challenges</CHeaderNavLink>
      </CHeaderNavItem>
    </CHeaderNav>
    <CHeaderNav class="mr-4">
      <CHeaderNavItem class="px-3" v-if="isAuthenticated">
        <CHeaderNavLink to="/challenge/create" exact>
          <CButton type="submit" size="sm" color="primary">
            Create Challenge
          </CButton>
        </CHeaderNavLink>
      </CHeaderNavItem>
      <CHeaderNavItem class="px-3" v-if="!isAuthenticated">
        <CHeaderNavLink to="/pages/login" exact>
            Sign In
        </CHeaderNavLink>
      </CHeaderNavItem>
      <TheHeaderDropdownAccount v-if="isAuthenticated" />
    </CHeaderNav>
    <CSubheader class="px-3" v-if="isAuthenticated">
      <CBreadcrumbRouter class="border-0" />
    </CSubheader>
  </CHeader>
</template>

<script>
import TheHeaderDropdownAccount from "./TheHeaderDropdownAccount";
import store from "../store";

export default {
  name: "TheHeader",
  data() {
    return {
      isAuthenticated: store.state.isAuthenticated,
      currentUser: store.state.currentUser
    };
  },
  components: {
    TheHeaderDropdownAccount
  }
};
</script>
