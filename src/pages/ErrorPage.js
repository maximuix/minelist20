import React from 'react';
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <section id="errorPage">
            <div className="container text-center">
                <p style={{fontSize: '48px', marginTop: 156, color: 'var(--neutral-white)'}}>СТРАНИЦА НЕ НАЙДЕНА</p>
                <p  style={{fontSize: '20px', marginTop: 16, color: 'var(--neutral-white)', opacity: "0.7"}}>Этой страницы никогда не было, либо она была удалена</p>
                <Link to="/">
                        <button className="btn btn-primary" style={{marginTop: 32}}>На главный экран</button>
                </Link>
            </div>
        </section>
    );
};

export default ErrorPage;