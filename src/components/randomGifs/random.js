import React, { useState, useEffect } from 'react';
import axios from "axios";

import './random.scss';

export const Random = () => {
    const [randomData, setRandomData] = useState()

    useEffect(() => {
        const fetchD = async () => {
            const results = await axios("https://api.giphy.com/v1/gifs/trending",
                {
                    params: {
                        api_key: "nr9hXlgH98yPLK9kLxZZMWhmi4YnHsPc",
                        limit: 12

                    }
                });

            setRandomData(results.data.data);
        };

        fetchD();
    }, []);


    const selectedGifs = randomData;
    const renderGifs = () => {
        return selectedGifs?.map((item,index) => {
        return (
            <div key={item.id} id={`${index}-gif `} className="gif">
                <img src={item.images.fixed_height.url} />
            </div>
        );
    });
    };


    return (
        <div className="cont">
            <h1>Welcome to Gifs</h1>
            <div className="gif-wrapper">
                <div className="gifs">
                    {renderGifs()}
                </div>
        </div>
        </div>
    )
}

