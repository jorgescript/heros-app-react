import { heros } from "../data/heros";

export const getHerosByPublisher = (publisher) => {
  const validPublisher = ["DC Comics", "Marvel Comics"];
  if (!validPublisher.includes(publisher)) {
    throw new Error(`${publisher} no existe.`);
  }
  return heros.filter((hero) => hero.publisher === publisher);
};
