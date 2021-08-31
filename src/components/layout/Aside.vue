<template>
  <v-navigation-drawer :value="getAside" absolute top temporary @input="input">
    <v-list nav dense>
      <v-list-item-group
        v-model="group"
        active-class="deep-blue--text text--accent-4"
      >
        <v-list-item>
          <v-list-item-title>Foo</v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-title>Bar</v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-title>Fizz</v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-title>Buzz</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "Aside",
  data: () => ({
    show: false,
    group: null
  }),
  created() {
    this.show = this.getAside;
  },
  computed: {
    ...mapGetters(["getAside"])
  },
  methods: {
    ...mapMutations(["toogleAside"]),
    input(value) {
      if (!value) this.toogleAside(!value);
    }
  },
  watch: {
    group() {
      this.toogleAside(this.getAside);
    }
  }
};
</script>
