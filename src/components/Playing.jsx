import React from "react";
import GenConvert from "./functions/genreconvertion";

export default function Playing({ data, getData }) {
    let { overview, poster_path, title, genre_ids, id } = data;

    let genre1 = GenConvert(genre_ids[0]);
    let genre2 = GenConvert(genre_ids[1]);

    let cutOverview = overview.slice(0, 120) + "...";

    return (
        <>
            <div className="column is-3">
                <div className="card" onClick={() => getData(id)}>
                    <div className="card-image" onClick={() => modal1.classList.toggle("is-active")}>
                        <figure className="image is-4by3">
                            <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="Placeholder image" />
                        </figure>
                    </div>
                    {/* <div className="card-content">
                        <div className="media">
                            <div className="media-content">
                                <p className="title is-5">{title}</p>
                                <p className="subtitle is-6">{`${genre1}, ${genre2}`}</p>
                            </div>
                        </div>

                        <div className="content">{`${cutOverview}`}</div>
                    </div> */}
                </div>
            </div>
        </>
    );
}
