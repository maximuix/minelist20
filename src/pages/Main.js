import React from 'react';
import Filter from "../components/Filter.jsx";
import ServerCard from "../components/ServerCard.jsx";
import LoadMore from "../components/LoadMore.jsx";

const Main = () => {
    return (
        <>
        <Filter />
        <section className='ServerCards d-flex flex-column'>
            <ServerCard />
            <ServerCard />
            <ServerCard />
            <ServerCard />
        </section>
        <LoadMore/>
        </>
    );
};

export default Main;