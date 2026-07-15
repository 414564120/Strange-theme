<template>
  <main class="profile" :class="{ active: isActive }">
    <button v-if="user" :aria-label="label" @click="selectUser(user.id)">
      {{ user.name }}
    </button>
  </main>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

interface User {
  id: number;
  name: string;
}

const user = ref<User | null>({ id: 1, name: "Ada" });
const isActive = ref(true);
const label = computed(() => `Open ${user.value?.name ?? "profile"}`);

function selectUser(id: number): void {
  console.log("selected", id);
}
</script>

<style scoped lang="scss">
.profile {
  --accent: #ff5577;
  display: flex;

  &.active:hover {
    color: var(--accent);
  }
}
</style>
