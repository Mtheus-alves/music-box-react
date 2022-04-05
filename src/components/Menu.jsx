import React from "react";
import Logo from '../html-css-template/imagens/logo-verde.png'
import Avatar from '../html-css-template/imagens/avatar.png'


function Menu() {
    return (
        <>
            <nav>
                <div class="container">
                    <img src={Logo} class="logo" />
                    <img src={Avatar} alt="Avatar" class="avatar" />
                </div>
            </nav>
        </>
    )
}

export default Menu;