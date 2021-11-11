import React, { useMemo } from 'react'
import { useLocation } from 'react-router';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import queryString from 'query-string';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { heroes } from '../../data/heroes';
export const SearchScreen = ({ history }) => {

    const location = useLocation();
    // console.log(location.search);
    const { q = '' } = queryString.parse(location.search);

    const [formValues, handleInputChange] = useForm({
        searchText: q
    });
    const { searchText } = formValues;
    const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);
    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${searchText}`);
    };

    return (
        <div>
            <h1>Search Screen</h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr />
                    <form onSubmit={handleSearch}>
                        <input name="searchText" value={searchText} autoComplete="off" onChange={handleInputChange} type="text" placeholder="Find your hero" className="form-control" />
                        <button type="submit" className="btn m-1 btn-block btn-outline-primary">Search...</button>
                    </form>
                </div>
                <div className="col-7">

                    <h4> Results </h4>
                    <hr />
                    {
                        (q === '') && <div className="alert alert-info">Search a hero</div>
                    }
                    {
                        (q !== '' && heroesFiltered.length === 0) && <div className="alert alert-danger">There is no hero with {q}</div>
                    }
                    {heroesFiltered.map(hero => (<HeroCard key={hero.id} {...hero}></HeroCard>))}

                </div>
            </div>
        </div>
    )
}
