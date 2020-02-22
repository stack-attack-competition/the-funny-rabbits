<template>
  <CHeader fixed with-subheader light>
    <CToggler
      v-if="isAuthenticated"
      in-header
      class="ml-3 d-lg-none"
      v-c-emit-root-event:toggle-sidebar-mobile
    />
    <CToggler
      v-if="isAuthenticated"
      in-header
      class="ml-3 d-md-down-none"
      v-c-emit-root-event:toggle-sidebar
    />
    <CHeaderBrand
      class="mx-auto d-lg-none"
      src="img/brand/coreui-vue-logo.svg"
      width="190"
      height="46"
      alt="CoreUI Logo"
    />
    <CHeaderNav class="d-md-down-none mr-auto">
      <CHeaderNavItem class="px-3">
        <CHeaderNavLink to="/">Home</CHeaderNavLink>
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
