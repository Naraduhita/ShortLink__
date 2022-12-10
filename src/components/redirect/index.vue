<template>
  <div class="px=10">
    <div class="container mx-auto mt-12">
      <h1>ini Akan redirect {{ path }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'redirect',
  data: () => ({
    path: '',
  }),

  mounted() {
    this.path = this.$router.currentRoute._rawValue.path.replace('/', '');
    alert('Menjalankan proses expressjs');
    alert('setelah itu redirect ke tujuan');
    window.location.href = 'https://google.com';
  },
};
</script>
