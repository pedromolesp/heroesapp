import React from 'react'
import { heroes } from '../../data/heroes'
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';

export const SearchScreen = () => {
    const heroesFiltered = heroes;
    const [formValues, handleInputChange] = useForm({
        searchText: ''
    });
    const { searchText } = formValues;
    const handleSearch = (e) => {
        e.preventDefault();
        console.log(searchText);
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
                    {heroesFiltered.map(hero => (<HeroCard key={hero.id} {...hero}></HeroCard>))}

                </div>
            </div>
        </div>
    )
}
