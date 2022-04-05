import React from "react";
import ItemMusica from "../components/ItemMusica";
import Menu from "../components/Menu";

function Musicas() {
    return (
        <>
            <Menu />

            <div className="container">

                <div className="filter">
                    <button className="btn">Adicionar</button>
                </div>
            </div>

            <div className="container">
                <div className="music-boxes">

                    <ItemMusica
                        musica="November"
                        artista="Tyler,the Creator"
                        genero="RAP"
                        ano="2018"
                    />

                    <ItemMusica
                        musica="Jail"
                        artista="Ye"
                        genero="RAP"
                        ano="2021"
                    />

                    <ItemMusica
                        musica="Nights"
                        artista="Frank Ocean"
                        genero="RAP Soul"
                        ano="2016"
                    />

                </div>
            </div>
        </>
    );
}

export default Musicas;