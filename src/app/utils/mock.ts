const products = [
    {
        name: "Raglan Sweatshirt",
        slug: "Raglan-Sweatshirt",
        category: "male",
        price: "$195",
        cloth_Type: "$Sweater",
        image:
          "https://hackathon-dine-market.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fzwnaaffj%2Fproduction%2F2228e40aa700a68031eff4016f9e625ade813a89-278x296.png%3Fw%3D400%26fit%3Dmax%26auto%3Dformat&w=640&q=75",
    },

    {
    name: "Flex Sweatshirt",
    slug: "Flex-Sweatshirt",
    category: "female",
    price: "$175",
    cloth_Type: "$Sweater",
    image:
      "https://hackathon-dine-market.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fzwnaaffj%2Fproduction%2Fbf4d73c91b7c7c2875fbfbb8e1a9c8113c82e90a-370x394.png%3Fw%3D400%26fit%3Dmax%26auto%3Dformat&w=640&q=75",
  },

  {
    name: "Imperial Alpaca Hoodie",
    slug: "Imperial-Alpaca-Hoodie",
    category: "female",
    price: "$525",
    cloth_Type: "$Jackets",
    image:
      "https://hackathon-dine-market.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fzwnaaffj%2Fproduction%2Fbfd5b4b468e1a6c84c25589fae1a103cac342102-278x296.png%3Fw%3D400%26fit%3Dmax%26auto%3Dformat&w=640&q=75",
  },

  {
    name: "Flex Push Button Bomber",
    slug: "Flex-Push-Button-Bomber",
    category: "male",
    price: "$224",
    cloth_Type: "$Jackets",
    image:
      "https://hackathon-dine-market.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fzwnaaffj%2Fproduction%2F4e2ed6a9eaa6e1413843e53f3113ccfd2104c301-278x296.png%3Fw%3D400%26fit%3Dmax%26auto%3Dformat&w=640&q=75",
  },

  {
    name: "Muscle Tank",
    slug: "Muscle-Tank",
    category: "female",
    price: "$75",
    cloth_Type: "$T Shirts",
    image:
      "https://hackathon-dine-market.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fzwnaaffj%2Fproduction%2Fd8cbcd5d002fade4d83dc66f910f34ae84d61975-278x296.png%3Fw%3D400%26fit%3Dmax%26auto%3Dformat&w=640&q=75",
  },

  {
    name: "Loose Control",
    slug: "Loose-Control",
    category: "kids",
    price: "$110",
    cloth_Type: "$T Shirts",
    image:
      "https://hackathon-dine-market.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fzwnaaffj%2Fproduction%2F2caaff3cc1daa4b4b5e45afd4ce6e27bf026fdd7-600x600.png%3Fw%3D400%26fit%3Dmax%26auto%3Dformat&w=640&q=75",
  },

  {
    name: "Cameryn Sash Tie Dress",
    slug: "Cameryn-Sash-Tie-Dress",
    category: "female",
    price: "$545",
    cloth_Type: "$Dress",
    image:
      "https://hackathon-dine-market.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fzwnaaffj%2Fproduction%2Fffc858fc182553bee2aaff34fe728bf07d15f2b5-278x296.png%3Fw%3D400%26fit%3Dmax%26auto%3Dformat&w=640&q=75",
  },

  {
    name: "Brushed Raglan Sweatshirt",
    slug: "Brushed-Raglan-Sweatshirt",
    category: "female",
    price: "$195",
    cloth_Type: "$Sweater",
    image:
      "https://hackathon-dine-market.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fzwnaaffj%2Fproduction%2Fa6a38f6a1f31dafe5f3294a4384f865b7d25a344-370x394.png%3Fw%3D400%26fit%3Dmax%26auto%3Dformat&w=640&q=75",
  },

  {
    name: "Brushed Bomber",
    slug: "Brushed-Bomber",
    category: "female",
    price: "$224",
    cloth_Type: "$Jackets",
    image:
      "https://hackathon-dine-market.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fzwnaaffj%2Fproduction%2F994bf21135a265d4bbeff47cd8fddae6082a0b26-370x394.png%3Fw%3D400%26fit%3Dmax%26auto%3Dformat&w=640&q=75",
  },

  {
    name: "Lite Sweatpants",
    slug: "Lite-Sweatpants",
    category: "female",
    price: "$150",
    cloth_Type: "$Pants",
    image:
      "https://hackathon-dine-market.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fzwnaaffj%2Fproduction%2F7739d01f547a127eca9fdfdb267935974e8d2b83-278x296.png%3Fw%3D400%26fit%3Dmax%26auto%3Dformat&w=640&q=75",
  },

  {
    name: "Pink Fleece Sweatpants",
    slug: "Pink-Fleece-Sweatpants",
    category: "female",
    price: "$195",
    cloth_Type: "$Pants",
    image:
      "https://hackathon-dine-market.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fzwnaaffj%2Fproduction%2Fc7b4f3b93e9536ce55353fdd05b7a81a2b57be02-278x296.png%3Fw%3D400%26fit%3Dmax%26auto%3Dformat&w=640&q=75",
  },

  {
    name: "Flex Sweatpants",
    slug: "Flex-Sweatpants",
    category: "female",
    price: "$175",
    cloth_Type: "$Pants",
    image:
      "https://hackathon-dine-market.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fzwnaaffj%2Fproduction%2Fed4960c6cf46ac416ae2fa6c0a3accbaa551457e-278x296.png%3Fw%3D400%26fit%3Dmax%26auto%3Dformat&w=640&q=75",
  },
];
export default products;