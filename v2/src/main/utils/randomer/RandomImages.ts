const dishes = [
  'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2023/02/Creamy-Cajun-Chicken-6.jpg',
  "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2023/02/Mediterranean-Cod-en-Papillote-6.jpg",
  "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2021/05/Chicken-Stir-Fry-9.jpg",
  "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2023/03/Shrimp-Scampi-5.jpg",
  "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2021/01/Baked-Chicken-Breasts-11.jpg",
  "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2021/08/Mediterranean-Ground-Beef-Stir-Fry-5.jpg",
  "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2020/04/Tuna-Salad-4.jpg",
  "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2021/01/Baked-Salmon-9.jpg",
  "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2023/08/Turkey-Burger-9-1024x1536.jpg",
];

export const getImage = () => {
  return dishes[Math.floor(Math.random() * dishes.length)];
}