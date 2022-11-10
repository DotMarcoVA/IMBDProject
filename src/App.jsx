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
import Search from "./components/Search";
import Select from "./components/Select";
import Modal from "./components/Modal";

function App() {
    const APIKEY = "5ceaf6e942fdbf9b158c4e2a5c272c45";

    const [data, setData] = useState();

    const [playing, setPlaying] = useState([]);
    const [popular, setPopular] = useState([]);
    const [top, setTop] = useState([]);

    const [list, setList] = useState([]);
    const [rawList, setRawList] = useState([]);

    const [list1, setList1] = useState([]);
    const [list2, setList2] = useState([]);
    const [list3, setList3] = useState([]);
    const [list4, setList4] = useState([]);
    const [list5, setList5] = useState([]);

    const [movieDetails, setMovieDetails] = useState({});

    let modal1 = document.getElementById("modal1");

    const cleanInfo = () => {
        console.log("estoy limpiando la data");
        setData(0);
    };

    const getInfo = (id) => {
        console.log("Estoy recibiendo el ID:", id);
        axios
            .get(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKEY}&language=en-US`)
            .then((response) => {
                // handle success
                setMovieDetails(response.data);
                //                modal1.classList.add("is-active");
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    };

    const search = (evt) => {};

    useEffect(() => {}, [movieDetails]);

    // This UE listen the change in data and enables the use of the getInfo Method and his respectives states
    useEffect(() => {
        if (data != 0) {
            getInfo(data);
        } else {
            console.log("La data esta vacia");
            modal1.classList.remove("is-active");
        }
    }, [data]);

    // First UE. This makes the fetches to the API and executes the respective assignations of data and loads the content in the page
    useEffect(() => {
        function getPlaying() {
            axios
                .get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${APIKEY}&language=en-US&page=1`)
                .then((response) => {
                    // handle success
                    setPlaying(response.data.results);
                    // console.log("Log de Playing:", playing);
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
                    /* console.log("Log de Popular", popular); */
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
                    /* console.log("Log de Top", top); */
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                });
        }
        function getList() {
            // Page 1
            axios
                .get(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=en-US&page=1`)
                .then((response) => {
                    // handle success
                    setList1(response.data.results);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                });

            // Page 2
            axios
                .get(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=en-US&page=2`)
                .then((response) => {
                    // handle success
                    setList2(response.data.results);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                });

            // Page 3
            axios
                .get(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=en-US&page=3`)
                .then((response) => {
                    // handle success
                    setList3(response.data.results);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                });

            // Page 4
            axios
                .get(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=en-US&page=4`)
                .then((response) => {
                    // handle success
                    setList4(response.data.results);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                });

            // Page 5
            axios
                .get(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=en-US&page=5`)
                .then((response) => {
                    // handle success
                    setList5(response.data.results);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                });
        }

        getPlaying();
        getPopular();
        getTop();
        getList();
    }, []); // [props || states]

    // Auxiliar UE. This UE checks the list for information and makes the concat in a unique list
    useEffect(() => {
        if (list1.length > 0 && list2.length > 0 && list3.length > 0 && list4.length > 0 && list5.length > 0) {
            let lastArray = list1.concat(list2, list3, list4, list5);
            setList(lastArray);
            setRawList(lastArray);
        }
    }, [list1, list2, list3, list4, list5]);
    //
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
                                            return <Playing data={p} getData={(d) => setData(d)}></Playing>;
                                        })}
                                    </div>
                                </div>
                                <div className="box">
                                    <h2 className="title is-3"> Most Popular </h2>
                                    <div className="columns is-multiline">
                                        {popular.map((p) => {
                                            return <Popular data={p} getData={(d) => setData(d)}></Popular>;
                                        })}
                                    </div>
                                </div>
                                <div className="box">
                                    <h2 className="title is-3"> Top Rated </h2>
                                    <div className="columns is-multiline">
                                        {top.map((p) => {
                                            return <Top data={p} getData={(d) => setData(d)}></Top>;
                                        })}
                                    </div>
                                </div>
                                {Object.values(movieDetails).length != 0 ? (
                                    <Modal data={movieDetails} action={() => cleanInfo()}></Modal>
                                ) : (
                                    <div></div>
                                )}
                            </>
                        }
                    ></Route>
                    <Route
                        path="/search"
                        element={
                            <>
                                <div className="box">
                                    <h2 className="title is-3"> Search </h2>
                                    <div class="level">
                                        <div className="level-left">
                                            <div className="level-item">
                                                <div class="field has-addons">
                                                    <p class="control">
                                                        <input class="input is-rounded" type="text" placeholder="Search Movies by Name" />
                                                    </p>
                                                    <p class="control">
                                                        <button class="button is-rounded">Search</button>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="level-right">
                                            <div className="level-item">
                                                <h2>Filter by Genre</h2>
                                            </div>
                                            <div className="level-item">
                                                <Select></Select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="columns is-multiline">
                                        {list.map((p) => {
                                            return <Search data={p} getData={(d) => setData(d)}></Search>;
                                        })}
                                    </div>
                                </div>
                                {Object.values(movieDetails).length != 0 ? (
                                    <Modal data={movieDetails} action={() => cleanInfo()}></Modal>
                                ) : (
                                    <div></div>
                                )}
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
