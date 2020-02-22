<template>
  <CDropdown
    inNav
    class="c-header-nav-items"
    placement="bottom-end"
    add-menu-classes="pt-0"
  >
    <template #toggler>
      <CHeaderNavLink>
        <strong>Hello {{ firstName }}</strong>
        <div class="c-avatar">
          <img
            :src="pictureUrl"
            class="c-avatar-img "
          />
        </div>
      </CHeaderNavLink>
    </template>
    <CDropdownItem @click="editProfile">
      <CIcon name="cil-user" /> Edit Profile
    </CDropdownItem>
    <CDropdownItem @click="signOut">
      <CIcon name="cil-lock-locked" /> Sign Out
    </CDropdownItem>
  </CDropdown>
</template>

<script>
import store from '../store'

export default {
  name: 'TheHeaderDropdownAccount',
  data () {
    return {
      isAuthenticated: store.state.isAuthenticated,
      pictureUrl: store.state.currentUser.pictureUrl,
      firstName: store.state.currentUser.firstName,
      itemsCount: 42
    }
  },
  mounted() { 

  },
  methods: {
    signOut() {
      store.logOffUser();
      location.reload();
    },
    editProfile() {
      let router = this.$router;
      router.push({path: '/users/User'});
    }
  }
};
</script>

<style scoped>
  .c-icon {
    margin-right: 0.3rem;
  }
</style>