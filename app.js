const app = Vue.createApp({
  data() {
    return {
      name: "Old Fashioned",
      ingredients: "Ingredients",
      bourbon: "2 oz. Bourbon",
      syrup: "1/4 oz. simple syrup",
      bitters: "2 dashes Angostura Bitters",
      water: "Splash of water",
      cherry: "Maraschino Cherries",
      orange: "Orange Peel",
      pic: "cocktail.jpg",
      link: "https://www.liquor.com/recipes/bourbon-old-fashioned/",
    };
  },
});
app.mount("#cocktail");
