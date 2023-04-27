import React from 'react';
import Almazi from '../img/almazi.png';

const DonateCardMore = (props) => {
    return (
        <section id="DonateCardMore" className="d-flex flex-column flex-sm-column flex-md-row flex-lg-row flex-xl-row flex-xxl-row align-items-center justify-content-between">
            <div className="card__heading d-flex flex-row align-items-center justify-content-between">
               <div className="title d-flex flex-row align-items-center" style={{gap: 8}}>
                   <img src={Almazi} alt="алмазы"/>
                   <h2 style={{marginTop: 8, marginBottom: 0}}>{props.title}</h2>
               </div>
                <div className="prise d-flex d-sm-flex d-md-none d-lg-none d-xl-none d-xxl-none flex-column align-items-end">
                    <h3 style={{fontSize: 20, color: "var(--neutral-white)", opacity: 0.5, marginBottom: 0}}>
                        <del>{props.sale}</del>
                    </h3>
                    <h2 style={{marginTop: 0, marginBottom: 0, color: "var(--primary-green)"}}>{props.prise}</h2>
                </div>
            </div>
            <div className="card__item d-flex flex-column flex-sm-column flex-md-column flex-lg-row flex-xl-row flex-xxl-row align-items-start align-items-sm-start align-items-md-start align-items-lg-center align-items-xl-center align-items-xxl-center" style={{gap: 40}}>
                <div className="prise d-none d-sm-none d-md-flex d-lg-flex d-xl-flex d-xxl-flex flex-column align-items-end">
                    <h3 style={{fontSize: 20, color: "var(--neutral-white)", opacity: 0.5, marginBottom: 0}}>
                        <del>{props.sale}</del>
                    </h3>
                    <h2 style={{marginTop: 0, marginBottom: 0, color: "var(--primary-green)"}}>{props.prise}</h2>
                </div>
                <button className="btn btn-primary">
                    Купить
                </button>
            </div>
        </section>
    );
};

export default DonateCardMore;