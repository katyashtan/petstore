import { CartItem, Pet, User } from "./types";
import { getRandomArbitrary } from "./utils";

export const users: User[] = new Array(10)
  .fill({
    id: 0,
    username: "kate",
    firstName: "Katya",
    lastName: "",
    email: "kate2@gmail.com",
    password: "12345678",
    phone: "79889998888",
    userStatus: 0,
  })
  .map((user, i) => {
    return { ...user, id: i, name: user.name + i };
  });

export const pets: Pet[] = [
  {
    id: 0,
    category: {
      id: 0,
      name: "Dog",
    },
    name: "Labrador Retriever",
    photoUrls: [
      "https://www.zastavki.com/pictures/originals/2018Animals___Dogs_A_sad_puppy_of_a_golden_retriever_with_a_wet_nose_124668_.jpg",
    ],
    tags: [
      {
        id: 0,
        name: "Dog",
      },
    ],
    status: "available",
    price: 100,
  },
  {
    id: 1,
    category: {
      id: 1,
      name: "Cat",
    },
    name: "Persian Cat",
    photoUrls: [
      "https://get.wallhere.com/photo/cat-Asian-Batman-fur-nose-whiskers-eye-kitten-mammal-views-organ-close-up-cat-like-mammal-snout-small-to-medium-sized-cats-carnivoran-tabby-cat-domestic-short-haired-cat-european-shorthair-american-shorthair-singapura-cool-images-hd-desktop-images-2016x1172-px-babay-wallpapers-city-landscapes-cute-babies-famous-people-movie-wallpapers-snow-motorbike-photos-warm-wallpapers-dragon-li-american-wirehair-801527.jpg",
    ],
    tags: [
      {
        id: 1,
        name: "Cat",
      },
    ],
    status: "available",
    price: 120,
  },
  {
    id: 2,
    category: {
      id: 2,
      name: "Bird",
    },
    name: "Parrot",
    photoUrls: [
      "https://pofoto.club/uploads/posts/2022-09/1663052556_14-pofoto-club-p-mokhnatii-popugai-25.png",
    ],
    tags: [
      {
        id: 2,
        name: "Bird",
      },
    ],
    status: "available",
    price: 150,
  },
  {
    id: 3,
    category: {
      id: 3,
      name: "Fish",
    },
    name: "Goldfish",
    photoUrls: [
      "https://i.pinimg.com/originals/fa/e5/53/fae553c84715616b3f5bc41830a420ae.jpg",
    ],
    tags: [
      {
        id: 3,
        name: "Fish",
      },
    ],
    status: "available",
    price: 20,
  },
  {
    id: 4,
    category: {
      id: 4,
      name: "Reptile",
    },
    name: "Iguana",
    photoUrls: [
      "https://pofoto.club/uploads/posts/2023-10/1697125579_pofoto-club-p-yamaiskaya-iguana-61.jpg",
    ],
    tags: [
      {
        id: 4,
        name: "Reptile",
      },
    ],
    status: "available",
    price: 200,
  },
  {
    id: 5,
    category: {
      id: 0,
      name: "Dog",
    },
    name: "German Shepherd",
    photoUrls: [
      "https://i.pinimg.com/736x/f1/b6/cc/f1b6cc6b583435cf88a837ffeebff7f8.jpg",
    ],
    tags: [
      {
        id: 0,
        name: "Dog",
      },
    ],
    status: "available",
    price: 130,
  },
  {
    id: 6,
    category: {
      id: 1,
      name: "Cat",
    },
    name: "Siamese Cat",
    photoUrls: [
      "https://www.colornumbers.ru/wa-data/public/shop/products/72/68/36872/images/61114/61114.750x0.jpg",
    ],
    tags: [
      {
        id: 1,
        name: "Cat",
      },
    ],
    status: "available",
    price: 110,
  },
  {
    id: 7,
    category: {
      id: 2,
      name: "Bird",
    },
    name: "Canary",
    photoUrls: [
      "https://petspoint.ru/upload/iblock/ca1/ca1c4acf0c507d5fa39774db81263313.jpg",
    ],
    tags: [
      {
        id: 2,
        name: "Bird",
      },
    ],
    status: "available",
    price: 50,
  },
  {
    id: 8,
    category: {
      id: 3,
      name: "Fish",
    },
    name: "Betta Fish",
    photoUrls: [
      "https://aquamir63.ru/wp-content/uploads/_ph/16/2/475358140-1200x800.jpg",
    ],
    tags: [
      {
        id: 3,
        name: "Fish",
      },
    ],
    status: "sold",
    price: 15,
  },
  {
    id: 9,
    category: {
      id: 4,
      name: "Reptile",
    },
    name: "Gecko",
    photoUrls: [
      "https://i.pinimg.com/736x/9a/66/a6/9a66a6787aaf9508fcfde43429d71dba.jpg",
    ],
    tags: [
      {
        id: 4,
        name: "Reptile",
      },
    ],
    status: "sold",
    price: 80,
  },
  {
    id: 10,
    category: {
      id: 0,
      name: "Dog",
    },
    name: "Bulldog",
    photoUrls: ["https://klike.net/uploads/posts/2023-04/1681967840_3-15.jpg"],
    tags: [
      {
        id: 0,
        name: "Dog",
      },
    ],
    status: "available",
    price: 140,
  },
  {
    id: 11,
    category: {
      id: 1,
      name: "Cat",
    },
    name: "Maine Coon",
    photoUrls: [
      "https://www.funnyart.club/uploads/posts/2022-12/thumbs/1671886729_www-funnyart-club-p-samie-bolshie-koshki-mein-kun-krasivie-zhi-5.jpg",
    ],
    tags: [
      {
        id: 1,
        name: "Cat",
      },
    ],
    status: "sold",
    price: 125,
  },
  {
    id: 12,
    category: {
      id: 2,
      name: "Bird",
    },
    name: "Cockatiel",
    photoUrls: [
      "https://i.pinimg.com/originals/b1/3f/3f/b13f3fe67f794ad2cda990ae36e1274a.jpg",
    ],
    tags: [
      {
        id: 2,
        name: "Bird",
      },
    ],
    status: "available",
    price: 60,
  },
  {
    id: 13,
    category: {
      id: 3,
      name: "Fish",
    },
    name: "Angelfish",
    photoUrls: ["https://jooinn.com/images/angel-fish-3.jpg"],
    tags: [
      {
        id: 3,
        name: "Fish",
      },
    ],
    status: "available",
    price: 25,
  },
  {
    id: 14,
    category: {
      id: 4,
      name: "Reptile",
    },
    name: "Chameleon",
    photoUrls: [
      "https://i.pinimg.com/736x/bc/1f/75/bc1f75490f8072b89b36e0bbe30cc803.jpg",
    ],
    tags: [
      {
        id: 4,
        name: "Reptile",
      },
    ],
    status: "available",
    price: 180,
  },
  {
    id: 15,
    category: {
      id: 0,
      name: "Dog",
    },
    name: "Poodle",
    photoUrls: [
      "https://baldezh.top/uploads/posts/2024-01/1704119473_baldezh-top-p-malenkii-pudel-poroda-krasivo-23.jpg",
    ],
    tags: [
      {
        id: 0,
        name: "Dog",
      },
    ],
    status: "sold",
    price: 150,
  },
];

export const pet = (id: number): Pet | undefined =>
  pets.find((item) => item.id === id);

export const cart: CartItem[] = pets
  .slice(0, 4)
  .map((pet) => ({ ...pet, quantity: getRandomArbitrary(1, 4) }));
