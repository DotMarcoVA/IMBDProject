import React from "react";

export default function Modal({ data, action }) {
    let { genres, homepage, overview, poster_path, release_date, title } = data;

    return (
        <div id="modal1" className="modal">
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">{`${title} (${release_date})`}</p>
                    <button className="delete" aria-label="close" onClick={() => action()}></button>
                </header>
                <section className="modal-card-body">
                    <figure className="image is-4by3">
                        <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="Placeholder image" />
                    </figure>
                    <br></br>
                    <p className="subtitle is-6">{`Genres: ${genres[0].name}, ${genres[1] ? genres[1].name : ""}`}</p>
                    <div className="content">{`${overview}`}</div>
                    <div className="content">
                        See more information in <a href={homepage}>{homepage}</a>{" "}
                    </div>
                </section>
            </div>
        </div>
    );
}
