import { useState, useEffect } from "react";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";
import axios from "axios";
import Playing from "./components/Playing";
import Popular from "./components/Popular";
import Top from "./components/Top";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";

function App() {
    const APIKEY = "5ceaf6e942fdbf9b158c4e2a5c272c45";

    const [data, setData] = useState({});
    const [playing, setPlaying] = useState([]);
    const [popular, setPopular] = useState([]);
    const [top, setTop] = useState([]);

    useEffect(() => {
        function getPlaying() {
            axios
                .get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${APIKEY}&language=en-US&page=1`)
                .then((response) => {
                    // handle success
                    setPlaying(response.data.results);
                    console.log("Log de Playing:", playing);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                });
        }
        function getPopular() {
            axios
                .get(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=en-US&page=1`)
                .then((response) => {
                    // handle success
                    setPopular(response.data.results);
                    console.log("Log de Popular", popular);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                });
        }
        function getTop() {
            axios
                .get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKEY}&language=en-US&page=1`)
                .then((response) => {
                    // handle success
                    setTop(response.data.results);
                    console.log("Log de Top", top);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                });
        }

        getPlaying();
        getPopular();
        getTop();
    }, []); // [props || states]

    return (
        <>
            {/* // NavBar */}
            <Navbar></Navbar>
            {/* // Routes to sections of the APP */}
            <main>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <div className="box">
                                    <h2 className="title is-3"> Actually Playing </h2>
                                    <div className="columns is-multiline">
                                        {playing.map((p) => {
                                            return <Playing data={p}></Playing>;
                                        })}
                                    </div>
                                </div>
                                <div className="box">
                                    <h2 className="title is-3"> Most Popular </h2>
                                    <div className="columns is-multiline">
                                        {popular.map((p) => {
                                            return <Popular data={p}></Popular>;
                                        })}
                                    </div>
                                </div>
                                <div className="box">
                                    <h2 className="title is-3"> Top Rated </h2>
                                    <div className="columns is-multiline">
                                        {top.map((p) => {
                                            return <Top data={p}></Top>;
                                        })}
                                    </div>
                                </div>
                            </>
                        }
                    ></Route>
                    <Route path="/about" element={<About></About>}></Route>
                    <Route path="/contact" element={<Contact></Contact>}></Route>
                    <Route path="/login" element={<Login></Login>}></Route>
                    {/* 404 */}
                    <Route path="*" element={<img src="https://http.cat/404"></img>} />
                </Routes>
            </main>
            {/* // Footer */}
            <Footer></Footer>
        </>
    );
}

export default App;
