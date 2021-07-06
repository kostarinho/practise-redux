import React, { useState, useEffect } from 'react';
import axios from "axios";
import './Loader.scss';
import { useSelector, useDispatch } from 'react-redux';
import { selectSearch, updateSearch } from './loaderSlice'
import { searchAsync } from '../gifs/thunkSlice';
import { searchThunks } from '../gifs/thunkSlice';
// import { render } from 'react-dom';

export const Loader = () => {

    const dispatch = useDispatch();
    // const selector = useSelector(selectSearch);
    const selector2 = useSelector(searchThunks);

    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        dispatch(searchAsync(['hello', 'haha', 'fun', 'blabla'][Math.round(Math.random() * 3) - 1]))
    },
        [])

    useEffect(() => {
        dispatch(searchAsync(search))
    },
        [search])



    const selectedGifs = data;
    const renderGifs = () => {
        return selector2.map((item, index) => {
            return (
                <div key={item.id} id={`${index}-gif `} className="gif">
                    <img src={item.images.fixed_height.url} />
                </div>
            );
        });
    };

    return (
        <>
            <form className="form" >
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    type="text"
                    placeholder="Search Gifs"
                    className="input-search"
                />
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        dispatch(updateSearch(search))
                    }}
                    type="submit"
                    className="btn" >Search
                </button>
            </form>
            <div className="container">
                <div className="gif-wrapper">
                    <div className="gifs">
                        {renderGifs()}
                    </div>
                </div>
            </div>
        </>
    )
}
