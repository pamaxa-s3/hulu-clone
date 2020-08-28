import React from 'react';
import './Nav.css';
import requests from '../utilites/requests';

function Nav({setSelecderOption}) {
    return (
        <div className='nav'>
            <h3 onClick={() => setSelecderOption(requests.fetchTrending)}>Trending</h3>
            <h3 onClick={() => setSelecderOption(requests.fetchTopRated)}>Top Rated</h3>
            <h3 onClick={() => setSelecderOption(requests.fetchActionMovies)}>Action</h3>
            <h3 onClick={() => setSelecderOption(requests.fetchComedyMovies)}>Comedy</h3>
            <h3 onClick={() => setSelecderOption(requests.fetchHorrorMovies)}>Horror</h3>
            <h3 onClick={() => setSelecderOption(requests.fetchRomanceMovies)}>Romance</h3>
            <h3 onClick={() => setSelecderOption(requests.fetchMystery)}>Mystery</h3>
            <h3 onClick={() => setSelecderOption(requests.fetchSciFi)}>Sci-fi</h3>
            <h3 onClick={() => setSelecderOption(requests.fetchWestern)}>Western</h3>
            <h3 onClick={() => setSelecderOption(requests.fetchAnimation)}>Animation</h3>
            <h3 onClick={() => setSelecderOption(requests.fetchTV)}>Movie</h3>
        </div>
    )
}

export default Nav
