<template>
  <v-app>
    <Header />
    <Aside />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Header from "@/components/layout/Header";
import Aside from "@/components/layout/Aside";
export default {
  name: "App",
  components: {
    Aside,
    Header
  },

  data: () => ({
    //
  })
};
</script>
