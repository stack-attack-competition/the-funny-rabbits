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
            src="img/avatars/6.jpg"
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
      itemsCount: 42
    }
  },
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