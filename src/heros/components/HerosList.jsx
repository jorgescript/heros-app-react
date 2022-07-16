import { getHerosByPublisher } from "../helpers/getHerosByPublisher";
import { HeroCard } from "./HeroCard";

export const HerosList = ({ publisher }) => {
  const heros = getHerosByPublisher(publisher);

  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
      {heros.map((hero) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </div>
  );
};