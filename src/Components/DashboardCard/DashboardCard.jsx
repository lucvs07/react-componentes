import React from "react";
import "./styles.css";
import { ArrowUp } from "@phosphor-icons/react";

export default function DashboardCard() {
    return (
        <div className="dash-card">
        <div className="top">
            <h2>Custos</h2>
        </div>
        <div className="body">
            <h3>$12.900</h3>
            <div className="leg">
                <ArrowUp weight="fill" size={24} color="green"/>
                <p>13%</p>
                <span>em relação ao mês passado</span>
            </div>
        </div>
        </div>
    );
    }