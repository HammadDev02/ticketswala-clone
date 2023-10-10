<template>
  <notifications position="top center" classes="app-notifications"></notifications>

  <Layout>
    <router-view />
  </Layout>
  <AllCompanies />
</template>
<script>
import Layout from './components/layout/Layout.vue'
export default {
  name: 'App',
  components: {
    Layout,
  },
}
</script>
<style></style>