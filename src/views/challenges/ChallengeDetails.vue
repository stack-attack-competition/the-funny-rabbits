<template>
  <CCard>
    <CCardHeader>
      <strong>{{challenge.title}}</strong>
      <div class="card-header-actions">
        <CLink href="#" class="card-header-action btn-close" v-on:click="close">
          <CIcon name="cil-x-circle" />
        </CLink>
      </div>
    </CCardHeader>
    <CCardBody>
      <p>
        <strong>Description:</strong>
      </p>
      <p>{{challenge.description}}</p>
    </CCardBody>
  </CCard>
</template>

<script>
export default {
  name: "ChallengeDetails",
  props: ["challenge"],
  methods: {
    close() {
      this.$emit("close");
    }
  }
};
</script>
