import React from 'react';
import DonateCard from "../components/DonateCard";
import DonateCardMore from "../components/DonateCardMore";
import LoadMore from "../components/LoadMore";

const ServerDonate = () => {
    return (
        <section id="serverDonate">
            <div className="container">
                <div className='title text-center'>
                    <h1>РАСКРУТИТЬ СЕРВЕР REIVECRAFT PVP</h1>
                    <h2>Выгодные предложения</h2>
                </div>
                <div className="cards row row-cols-12 row-cols-sm-12 row-cols-md-12 row-cols-lg-12 row-cols-xl-12 row-cols-xxl-12 justify-content-center" style={{gap: 20, marginTop: 32}}>
                    <div className="col d-none d-sm-none d-md-none d-lg-inline d-xl-inline d-xxl-inline">
                        <DonateCard title="70" sale="3500 ₽" prise="3150 ₽"/>
                    </div>
                    <div className="col">
                        <DonateCard title="150" sale="7500 ₽" prise="6375 ₽"/>
                    </div>
                    <div className="col">
                        <DonateCard title="350" sale="17 500 ₽" prise="14 000 ₽"/>
                    </div>
                </div>
                <section className="validity d-flex flex-column align-items-center" style={{marginTop: 40}}>
                    <div className="validity__item d-flex flex-column">
                        <label style={{fontSize: 20, color: "var(--neutral-white)", fontWeight: 700}}>Срок действия
                            алмазов:</label>
                            <select className="validity__input">
                                <option value="7">
                                    На 7 дней
                                </option>
                                <option value="15">
                                    На 15 дней (один день бесплатно)
                                </option>
                                <option value="30">
                                    На 30 дней (из них 2 дня бесплатно)
                                </option>
                                <option value="45">
                                    На 45 дней (из них 3 дня бесплатно)
                                </option>
                            </select>
                    </div>
                    <p style={{fontSize: 14, color: "var(--neutral-white)", textAlign: "center", marginTop: 16}}>За этот
                        срок на топовых местах вы получите более <span style={{color: "var(--primary-green)"}}>210 000 просмотров.</span>
                        <br/>Нажмите на счётчик Яндекс.Метрики, чтобы увидеть статистику посещений за неделю:</p>
                </section>
                <div className="cards d-flex flex-column" style={{gap: 16, marginTop: 32}}>
                    <DonateCardMore title="1 Алмаз" prise="50 ₽"/>
                    <DonateCardMore title="15 Алмазов" prise="750 ₽"/>
                    <DonateCardMore title="70 Алмазов" prise="3150 ₽" sale="3500 ₽"/>
                    <DonateCardMore title="150 Алмазов" prise="6375 ₽" sale="7500 ₽"/>
                    <DonateCardMore title="350 Алмазов" prise="14 000 ₽" sale="17 500 ₽"/>
                    <LoadMore/>
                </div>
            </div>
        </section>
    );
};

export default ServerDonate;