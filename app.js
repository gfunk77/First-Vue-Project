const app = Vue.createApp({
  data() {
    return {
      name: "Old Fashioned",
      bourbon: "2 oz. Bourbon",
      syrup: "1/4 oz. simple syrup",
      bitters: "2 dashes Angostura Bitters",
      water: "Splash of water",
      orange: "Orange Peel",
    };
  },
});
app.mount("#cocktail");
