import React from "react";
import "./styles.css";
import { Plus } from "@phosphor-icons/react";

export default function Card(){
    return (
        <div className="card">
        <img src="https://via.placeholder.com/200" alt="Imagem do card" />
        <div>
            <h2>Nome do Produto</h2>
            <div className="btn-info">
                <p>Descrição do Produto</p>
                <Plus weight="fill" size={32} className="plus"/>
            </div>
        </div>
        </div>
    );
}