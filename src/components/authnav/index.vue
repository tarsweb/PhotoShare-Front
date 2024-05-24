<template>
  <v-btn v-for="item in navItems" :to="item.href" :prepend-icon="item.icon">{{
    item.text
  }}</v-btn>
</template>

<script setup>
const navItems = [
  { href: "/login", text: "Login", icon: "mdi-message-reply-text" },
  { href: "/register", text: "Register", icon: "mdi-message-text" },
];
</script>
