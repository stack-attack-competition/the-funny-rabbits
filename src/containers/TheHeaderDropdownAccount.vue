<template>
  <CDropdown
    inNav
    class="c-header-nav-items"
    placement="bottom-end"
    add-menu-classes="pt-0"
  >
    <template #toggler>
      <CHeaderNavLink>
        <div class="c-avatar">
          <img
            :src="pictureUrl"
            class="c-avatar-img "
          />
        </div>
      </CHeaderNavLink>
    </template>
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
      itemsCount: 42
    }
  },
  mounted() { console.log(store.state); },
  methods: {
    signOut() {
      store.logOffUser();
    }
  }
}
</script>

<style scoped>
  .c-icon {
    margin-right: 0.3rem;
  }
</style>