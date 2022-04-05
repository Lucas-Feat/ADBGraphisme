async function mounted() {
  this.projects = await axios
    .get("../Ressources/projects.json")
    .then((response) => response.data);
}

const app = new Vue({
  el: "#featureContainer",
  data: {
    projects: null,
  },
  mounted,
});
