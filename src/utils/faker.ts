import { faker } from "@faker-js/faker";

export const avatarTest = () => ({
  avatar: faker.image.avatar(),
});

export const imageTest = () => ({
  source: faker.image.imageUrl(),
  alt: faker.random.words(3),
});

export const tooltipTest = () => ({
  contentText: faker.random.words(2),
  childrenText: faker.random.words(3),
});
