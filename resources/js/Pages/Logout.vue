<template>
  <div>
    <div v-if="showFlashMessage" class="flash-message">Logged out successfully!</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const showFlashMessage = ref(false);

onMounted(() => {
  localStorage.removeItem('token');
  showFlashMessage.value = true;
  setTimeout(() => {
    router.push('/login');
  }, 2000); // Redirect to login page after 2 seconds
});
</script>

<style scoped>
.flash-message {
  background-color: #4CAF50;
  color: white;
  text-align: center;
  padding: 10px;
  margin-bottom: 20px;
}
</style>
