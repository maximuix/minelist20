import React, {useState} from 'react';

const Filter = (props) => {


    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    const [version, setVersionState] = useState(1);

    const setVersion = (index) => {
        setVersionState(index);
    }

    const [GameMode, setGameModeState] = useState(1);

    const setGameMode = (index) => {
        setGameModeState(index);
    }

    const [tag, setTagState] = useState(1);

    const setTag = (index) => {
        setTagState(index);
    }

    const [mod, setModState] = useState(1);

    const setMod = (index) => {
        setModState(index);
    }

    const [plugin, setPluginState] = useState(1);

    const setPlugin = (index) => {
        setPluginState(index);
    }

    const [openFilter, setOpenFilter] = useState(false)

    const setOpen = (value) => {
        setOpenFilter(value)
    }

    return (
        <section id="filter">
            <div className="container w-100">
                <div className="dropdown w-100 d-none">
                    <button
                        className="btn btn-secondary dropdown-toggle dropdownToggletTab d-flex  align-items-center justify-content-between w-100"
                        type="button" id="dropdownMenuButton1"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        Топ серверов
                    </button>
                    <ul className="dropdown-menu w-100" aria-labelledby="dropdownMenuButton1">
                        <li><a className="dropdown-item opacity-75" href="#">Топ серверов</a></li>
                        <li><a className="dropdown-item opacity-75" href="#">Новые сервера</a></li>
                        <li><a className="dropdown-item opacity-75" href="#">Большой онлайн</a></li>
                        <li><a className="dropdown-item opacity-75" href="#">Маленький онлайн</a></li>
                    </ul>
                </div>
                <div className="tabBar d-flex flex-row">
                    <button className={toggleState === 1 ? "tabBar-active" : "tabBar-item"}
                            onClick={() => toggleTab(1)}>Топ серверов
                    </button>
                    <button className={toggleState === 2 ? "tabBar-active" : "tabBar-item"}
                            onClick={() => toggleTab(2)}>Новые сервера
                    </button>
                    <button className={toggleState === 3 ? "tabBar-active" : "tabBar-item"}
                            onClick={() => toggleTab(3)}>Большой онлайн
                    </button>
                    <button className={toggleState === 4 ? "tabBar-active" : "tabBar-item"}
                            onClick={() => toggleTab(4)}>Маленький онлайн
                    </button>
                </div>
                <div
                    className="row row-cols-12 row-cols-xs-12 row-cols-sm-12 row-cols-md-12 row-cols-lg-12 row-cols-xl-12 row-cols-xxl-12 filter-item">
                    <input className="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-6 col-xxl-6 border-0"
                           id="search" type="search" placeholder="Введите IP сервера"/>
                    <div className='col-12 col-xs-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 col-xxl-5 px-0'>
                        <div
                            className="version d-flex flex-row">
                            <button
                                className={version === 1 ? "version-item-active" : "version-item"}
                                onClick={() => setVersion(1)}>
                                <svg className="filterMoreIcon" width="25" height="24" viewBox="0 0 25 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M4 8C4 7.04306 4.00106 6.37565 4.06876 5.87208C4.13453 5.3829 4.25483 5.12385 4.43934 4.93934C4.62385 4.75483 4.8829 4.63453 5.37208 4.56876C5.87565 4.50106 6.54306 4.5 7.5 4.5H17.5C18.4569 4.5 19.1244 4.50106 19.6279 4.56876C20.1171 4.63453 20.3762 4.75483 20.5607 4.93934C20.7452 5.12385 20.8655 5.3829 20.9312 5.87208C20.9989 6.37565 21 7.04306 21 8V16.5H4V8Z"
                                        stroke="white"/>
                                    <path
                                        d="M4.16667 16.5C3.52233 16.5 3 17.0223 3 17.6667C3 18.6792 3.82081 19.5 4.83333 19.5H20.1667C21.1792 19.5 22 18.6792 22 17.6667C22 17.0223 21.4777 16.5 20.8333 16.5H4.16667Z"
                                        stroke="white"/>
                                </svg>
                                Java Edition
                            </button>
                            <button
                                className={version === 2 ? "version-item-active" : "version-item"}
                                onClick={() => setVersion(2)}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <g opacity="0.7">
                                        <path
                                            d="M7.23223 3.23223C6.83096 3.63351 6.65836 4.13876 6.57768 4.73883C6.49997 5.31681 6.49999 6.05169 6.5 6.96342V7V17V17.0366C6.49999 17.9483 6.49997 18.6832 6.57768 19.2612C6.65836 19.8612 6.83096 20.3665 7.23223 20.7678C7.63351 21.169 8.13876 21.3416 8.73883 21.4223C9.31681 21.5 10.0517 21.5 10.9634 21.5H11H13H13.0366C13.9483 21.5 14.6832 21.5 15.2612 21.4223C15.8612 21.3416 16.3665 21.169 16.7678 20.7678C17.169 20.3665 17.3416 19.8612 17.4223 19.2612C17.5 18.6832 17.5 17.9483 17.5 17.0366V17V7V6.96343C17.5 6.0517 17.5 5.31681 17.4223 4.73883C17.3416 4.13876 17.169 3.63351 16.7678 3.23223C16.3665 2.83096 15.8612 2.65836 15.2612 2.57768C14.6832 2.49997 13.9483 2.49999 13.0366 2.5H13H11H10.9634C10.0517 2.49999 9.31681 2.49997 8.73883 2.57768C8.13876 2.65836 7.63351 2.83096 7.23223 3.23223Z"
                                            stroke="white"/>
                                        <path d="M7 16H17" stroke="white"/>
                                    </g>
                                </svg>
                                Pocket Edition
                            </button>
                        </div>
                    </div>
                </div>
                <div id="filterMore" className={openFilter ? "filter-more-active" : "filter-more"}>
                    <hr style={{color: "#FFFFFF", height: 2, marginTop: 24}}/>
                    <div className="filter_list d-flex flex-column">
                        <div className="list-item d-flex flex-column">
                            <h4>Режим
                                игры</h4>
                            <div className="switch d-flex flex-row">
                                <button className={GameMode === 1 ? "btn-switch-active" : "btn-switch"}
                                        onClick={() => setGameMode(1)}>
                                    Выживание
                                </button>
                                <button className={GameMode === 2 ? "btn-switch-active" : "btn-switch"}
                                        onClick={() => setGameMode(2)}>
                                    Творческий
                                </button>
                            </div>
                        </div>
                        <div className="list-item d-flex flex-column">
                            <h4>Какая
                                версия
                                MineCraft у вас?</h4>
                            <div id="versionListBody" className="list_tags d-flex flex-row flex-wrap">
                                <div className={tag === 1 ? "list_tag-active" : "list_tag"}
                                     onClick={() => setTag(1)}>
                                    <h6>
                                        1.0</h6></div>
                                <div className={tag === 2 ? "list_tag-active" : "list_tag"}
                                     onClick={() => setTag(2)}>
                                    <h6>
                                        1.1</h6></div>
                                <div className={tag === 3 ? "list_tag-active" : "list_tag"}
                                     onClick={() => setTag(3)}>
                                    <h6>
                                        1.2</h6>
                                </div>
                                <div className={tag === 4 ? "list_tag-active" : "list_tag"}
                                     onClick={() => setTag(4)}>
                                    <h6>
                                        1.3</h6></div>
                                <div className={tag === 5 ? "list_tag-active" : "list_tag"}
                                     onClick={() => setTag(5)}>
                                    <h6>
                                        1.4</h6></div>
                                <div className={tag === 6 ? "list_tag-active" : "list_tag"}
                                     onClick={() => setTag(6)}>
                                    <h6>
                                        1.5</h6></div>
                                <div className={tag === 7 ? "list_tag-active" : "list_tag"}
                                     onClick={() => setTag(7)}>
                                    <h6>
                                        1.6</h6></div>
                                <div className={tag === 8 ? "list_tag-active" : "list_tag"}
                                     onClick={() => setTag(8)}>
                                    <h6>
                                        1.7</h6></div>
                                <div className={tag === 9 ? "list_tag-active" : "list_tag"}
                                     onClick={() => setTag(9)}>
                                    <h6>
                                        1.8</h6></div>
                                <div className={tag === 10 ? "list_tag-active" : "list_tag"}
                                     onClick={() => setTag(10)}>
                                    <h6>
                                        1.9</h6></div>
                                <div className={tag === 11 ? "list_tag-active" : "list_tag"}
                                     onClick={() => setTag(11)}>
                                    <h6>
                                        1.10</h6></div>
                                <div className={tag === 12 ? "list_tag-active" : "list_tag"}
                                     onClick={() => setTag(12)}>
                                    <h6>
                                        1.11</h6></div>
                                <div className={tag === 13 ? "list_tag-active" : "list_tag"}
                                     onClick={() => setTag(13)}>
                                    <h6>
                                        1.12</h6></div>
                                <div className={tag === 14 ? "list_tag-active" : "list_tag"}
                                     onClick={() => setTag(14)}>
                                    <h6>
                                        1.13</h6></div>
                                <div className={tag === 15 ? "list_tag-active" : "list_tag"}
                                     onClick={() => setTag(15)}>
                                    <h6>
                                        1.14</h6></div>
                                <div className={tag === 16 ? "list_tag-active" : "list_tag"}
                                     onClick={() => setTag(16)}>
                                    <h6>
                                        1.15</h6></div>
                                <div className={tag === 17 ? "list_tag-active" : "list_tag"}
                                     onClick={() => setTag(17)}>
                                    <h6>
                                        1.16</h6></div>
                                <div className={tag === 18 ? "list_tag-active" : "list_tag"}
                                     onClick={() => setTag(18)}>
                                    <h6>
                                        1.17</h6></div>
                                <div className={tag === 19 ? "list_tag-active" : "list_tag"}
                                     onClick={() => setTag(19)}>
                                    <h6>
                                        1.18</h6></div>
                                <div className={tag === 20 ? "list_tag-active" : "list_tag"}
                                     onClick={() => setTag(20)}>
                                    <h6>
                                        1.19</h6></div>
                            </div>
                        </div>
                        <div className="list-item d-flex flex-column">
                        </div>
                        <div className="list-item d-flex flex-column">
                            <h4>Сервера с
                                модами</h4>
                            <div className="list_mods d-flex flex-row flex-wrap">
                                <div className={mod === 1 ? "list_mod-active" : "list_mod"}
                                     onClick={() => setMod(1)}>
                                    <h6>
                                        DayZ</h6></div>
                                <div className={mod === 2 ? "list_mod-active" : "list_mod"}
                                     onClick={() => setMod(2)}>
                                    <h6>
                                        GTA</h6></div>
                                <div className={mod === 3 ? "list_mod-active" : "list_mod"}
                                     onClick={() => setMod(3)}>
                                    <h6>
                                        Pixelmon</h6>
                                </div>
                                <div className={mod === 4 ? "list_mod-active" : "list_mod"}
                                     onClick={() => setMod(4)}>
                                    <h6>
                                        HiTech</h6></div>
                                <div className={mod === 5 ? "list_mod-active" : "list_mod"}
                                     onClick={() => setMod(5)}>
                                    <h6>
                                        Властелин колец</h6></div>
                                <div className={mod === 6 ? "list_mod-active" : "list_mod"}
                                     onClick={() => setMod(6)}>
                                    <h6>
                                        Star Wars</h6></div>
                                <div className={mod === 7 ? "list_mod-active" : "list_mod"}
                                     onClick={() => setMod(7)}>
                                    <h6>
                                        Flan's</h6></div>
                                <div className={mod === 8 ? "list_mod-active" : "list_mod"}
                                     onClick={() => setMod(8)}>
                                    <h6>
                                        Дивайн РПГ</h6></div>
                                <div className={mod === 9 ? "list_mod-active" : "list_mod"}
                                     onClick={() => setMod(9)}>
                                    <h6>
                                        MineZ</h6></div>
                            </div>
                        </div>
                        <div className="list-item d-flex flex-column">
                            <h4>Сервера с
                                плагинами</h4>
                            <div className="plugin_tags d-flex flex-row flex-wrap">
                                <div className={plugin === 1 ? "list_plugin-active" : "list-plugin"}
                                     onClick={() => setPlugin(1)}>
                                    <h6>
                                        Регистрация</h6></div>
                                <div className={plugin === 2 ? "list_plugin-active" : "list-plugin"}
                                     onClick={() => setPlugin(2)}>
                                    <h6>
                                        Приват</h6></div>
                                <div className={plugin === 3 ? "list_plugin-active" : "list-plugin"}
                                     onClick={() => setPlugin(3)}>
                                    <h6>
                                        Донат</h6>
                                </div>
                                <div className={plugin === 4 ? "list_plugin-active" : "list-plugin"}
                                     onClick={() => setPlugin(4)}>
                                    <h6>
                                        Бесплатный донат</h6></div>
                                <div className={plugin === 5 ? "list_plugin-active" : "list-plugin"}
                                     onClick={() => setPlugin(5)}>
                                    <h6>
                                        Кейсы</h6></div>
                                <div className={plugin === 6 ? "list_plugin-active" : "list-plugin"}
                                     onClick={() => setPlugin(6)}>
                                    <h6>
                                        Кит старт</h6></div>
                                <div className={plugin === 7 ? "list_plugin-active" : "list-plugin"}
                                     onClick={() => setPlugin(7)}>
                                    <h6>
                                        Питомцы</h6></div>
                                <div className={plugin === 8 ? "list_plugin-active" : "list-plugin"}
                                     onClick={() => setPlugin(8)}>
                                    <h6>
                                        Вампиризм</h6>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {
                    openFilter
                        ?
                        <button className="btn btn-secondary-outline btn-filter" onClick={() => setOpen(false)}>
                            Закрыть фильтры<svg className="filterMoreIcon" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                                            <path d="M15.5 5L5.5 15" stroke="#4196F0" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                                             <path d="M5.5 5L15.5 15" stroke="#4196F0" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                                             </svg>
                        </button>
                        :
                        <button className="btn btn-secondary-outline btn-filter" onClick={() => setOpen(true)}>
                            Дополнительные фильтры<svg className="filterMoreIcon" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.5 5V15" stroke="#4196F0" stroke-linecap="round"/>
                            <path d="M15.5 10H5.5" stroke="#4196F0" stroke-linecap="round"/>
                        </svg>
                        </button>
                }
            </div>
        </section>
    );
};


export default Filter;