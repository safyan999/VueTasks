<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
  <HomeComponents>
    <h1>this is slot example pass tags or text using without props</h1>
    <p>pass tags h1 and p to home components</p>
  </HomeComponents>
</template>

<script>
import HomeComponents from "./HomeComponents.vue";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  components: {
    HomeComponents,
  },
};
</script>
