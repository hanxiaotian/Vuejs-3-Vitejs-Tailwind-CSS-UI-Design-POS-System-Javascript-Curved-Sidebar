import { ref, reactive } from 'vue'

class Product {
    constructor(name, img) {
        this.name = name;
        this.img = img;
        this.price = "$1.99";
    }
}

const productList = reactive([
    new Product('Cucumber', '/img/fnv_imgs/cucumber.png'),
    new Product('Red Grapefruit', '/img/fnv_imgs/red_grapefruit.jpg'),
    new Product('Limes', '/img/fnv_imgs/limes.png'),
    new Product('Pomegranate', '/img/fnv_imgs/pomegranate.jpg'),
    new Product('Vine Tomatoes', '/img/fnv_imgs/vine_tomato.png'),
    new Product('Celeriac', '/img/fnv_imgs/celeriac.jpg'),
    new Product('Butternut Squash', '/img/fnv_imgs/butternut_squash.jpeg'),
    new Product('Sweet Potatoes', '/img/fnv_imgs/sweet_potatoes.jpg'),
    new Product('Bananas', '/img/fnv_imgs/bananas.jpg'),
    new Product('Mango', '/img/fnv_imgs/mango.png'),
    new Product('Pears', '/img/fnv_imgs/pears.png'),
    new Product('Ginger', '/img/fnv_imgs/ginger.jpg'),
    new Product('Aubergine', '/img/fnv_imgs/aubergine.jpg'),
    new Product('White Cabbage', '/img/fnv_imgs/white_cabbage.jpg'),
    new Product('Courgettes', '/img/fnv_imgs/courgettes.jpg'),
    new Product('Swede', '/img/fnv_imgs/swede.png'),
    new Product('Red Peppers', '/img/fnv_imgs/red_peppers.jpg'),
    new Product('Cherry on-the-Vine Tomatoes', '/img/fnv_imgs/cherry_on_the_vine_tomatoes.jpg'),
    new Product('Kiwi', '/img/fnv_imgs/kiwi.jpg'),
    new Product('Watermelon', '/img/fnv_imgs/watermelon.png'),
    new Product('Baking Potatoes', '/img/fnv_imgs/baking_potatoes.jpg'),
    new Product('Spring Onions', '/img/fnv_imgs/spring_onions.jpg'),
    new Product('Large Garlic', '/img/fnv_imgs/large_garlic.jpeg'),
    new Product('Cauliflower', '/img/fnv_imgs/cauliflower.png'),
    new Product('Medium Avocado', '/img/fnv_imgs/medium_avocado.png'),
    new Product('Large Avocado', '/img/fnv_imgs/large_avocado.png'),
    new Product('Lemon', '/img/fnv_imgs/lemon.jpg'),
    new Product('Pineapple', '/img/fnv_imgs/pineapple.png'),
    new Product('Cashew', '/img/fnv_imgs/cashew.jpg'),
    new Product('Almond', '/img/fnv_imgs/almond.jpg'),
    new Product('Cocktail Tomatoes', '/img/fnv_imgs/cocktail_tomatoes.png'),
    new Product('Nectarines', '/img/fnv_imgs/nectarine.jpg'),
    new Product('Peach', '/img/fnv_imgs/peach.jpg'),
    new Product('Gold Kiwi', '/img/fnv_imgs/gold_kiwi.jpg'),
    new Product('Gala Apple', '/img/fnv_imgs/gala_apple.jpg'),
    new Product('Golden Delicious Apple', '/img/fnv_imgs/golden_delicious_apple.jpg'),
    new Product('Kiku Apple', '/img/fnv_imgs/kiku_apple.jpg'),
    new Product('Pink Lady Apple', '/img/fnv_imgs/pink_lady_apple.jpg'),
    new Product('Carrots', '/img/fnv_imgs/carrots.png'),
    new Product('Pistachio', '/img/fnv_imgs/pistachio.jpg'),
    new Product('Packaged Product', '/img/fnv_imgs/packaged_product.jpg'),
]);

export default {
    productList,
};