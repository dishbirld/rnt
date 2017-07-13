/**
 * Created by wuenchen on 2017/5/17.
 */
import React from 'react';

function getMoviesFromApiAsync() {
    return fetch('https://facebook.github.io/react-native/movies.json', {method: 'post',body:{}})
        .then((response) => response.json())
        .then((responseJson) => {
            var movies = responseJson.movies;
            for (let [key, value]of movies) {
                console.log("aaa" + key + " is " + value);
            }
            return movies;
        })
        .catch((error) => {
            console.error(error);
        });
}

getMoviesFromApiAsync();
