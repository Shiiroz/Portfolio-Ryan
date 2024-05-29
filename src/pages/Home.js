import React from "react";
import "../components/Accueil/Accueil";
import Accueil from "../components/Accueil/Accueil";
import Nav from "../components/Navigation/Navigation";
import "./Home.css";

export default function Home(){
    return<>
            <div className="Accueil">
                <Accueil/>
                <Nav/>
            </div>
        
        
        </>
}