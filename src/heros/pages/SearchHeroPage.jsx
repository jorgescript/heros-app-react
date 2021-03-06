import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../components/HeroCard";
import { getHerosByName } from "../helpers/getHerosByName";

export const SearchHeroPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);
  const heros = getHerosByName(q);

  const { searchText, onInputChange } = useForm({
    searchText: q,
  });

  const onSearchSubmit = (e) => {
    e.preventDefault();
    if (searchText.trim().length <= 2) return;
    navigate(`?q=${searchText.toLowerCase().trim()}`);
  };

  return (
    <>
      <h1>SearchHeroPage</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Busqueda de heroes</h4>
          <form onSubmit={onSearchSubmit}>
            <input
              autoComplete="off"
              className="form-control"
              name="searchText"
              onChange={onInputChange}
              placeholder="Search hero"
              type="text"
              value={searchText}
            />
            <button className="btn btn-outline-primary mt-1">Search</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          {q === "" && <div className="alert alert-primary">Search a hero</div>}
          {!heros.length && (
            <div className="alert alert-danger">
              There's no results with {q}
            </div>
          )}
          {heros.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};
