import React from 'react';
import Almazi from '../img/almazi.png';
import {Link} from "react-router-dom";

const DonateCard = (props) => {
    return (
        <section id="DonateCard" className="w-100">
             <div className="card__heading d-flex flex-column align-items-center">
                 <img src={Almazi} alt="алмазы"/>
                 <h2 style={{marginTop: 16, marginBottom: 0,}}>{props.title} Алмазов</h2>
             </div>
            <div className="card__description text-center">
                <div className="prise" style={{marginTop: 12}}>
                    <h3 style={{fontSize: 20, color: "var(--neutral-white)", opacity: 0.5, marginBottom: 0}}><del>{props.sale}</del></h3>
                    <h3 style={{color: "var(--primary-green)", marginBottom: 0}}>{props.prise}</h3>
                </div>
            </div>
            <hr style={{color: "#FFFFFF", height: 2, marginTop: 16}}/>
            <Link to="/">
                <div className="text-center">
                    <button className="btn btn-primary">
                        Купить
                    </button>
                </div>
            </Link>
        </section>
    );
};

export default DonateCard;