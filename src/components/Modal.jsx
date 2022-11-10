import React from "react";

export default function Modal({ data, action }) {
    console.log(data);
    let { genres, homepage, overview, poster_path, release_date, title } = data;

    return (
        <div id="modal1" class="modal">
            <div class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                    <p class="modal-card-title">{`${title} (${release_date})`}</p>
                    <button class="delete" aria-label="close" onClick={() => action()}></button>
                </header>
                <section class="modal-card-body">
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
