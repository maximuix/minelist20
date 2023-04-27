import React, {useState} from 'react';
import ServerFavicon from "../img/serverIcon.png";
import Country from '../img/icons/russia.svg';
import {Link} from "react-router-dom";

const ServerPage = () => {

    const [toggleStatistics, setToggleStatistics] = useState(1);

    const toggleTabStatistics = (index) => {
        setToggleStatistics(index);
    }

    return (
        <section id="serverPage">
            <div className="container">
                <main id="serverInf">
                    <div className='server__header d-flex flex-column flex-xs-column flex-sm-column flex-md-row flex-lg-row flex-xl-row flex-xxl-row align-items-center justify-content-between'>
                        <div className='title d-flex flex-row align-items-center' style={{gap: 16}}>
                            <img src={ServerFavicon} alt="иконка сервера"/>
                            <h3>ReiveCraft - выживание с экономикой
                                Стань самым богатым на сервере!
                            </h3>
                        </div>
                        <div className="btn-group d-flex flex-row align-items-center" style={{gap: 16}}>
                            <Link to="/ServerDonateCard">
                                <button className="btn btn-primary">Раскрутить сервер</button>
                            </Link>
                            <button className='btn btn-fab' aria-label="Проголосовать">
                                <svg className="btn-fab-icon" width="25" height="24" viewBox="0 0 25 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M4.95137 13.9082L11.904 20.4395C12.1435 20.6644 12.2632 20.7769 12.4044 20.8046C12.468 20.8171 12.5334 20.8171 12.597 20.8046C12.7382 20.7769 12.8579 20.6644 13.0974 20.4395L20.05 13.9082C22.0062 12.0706 22.2437 9.0466 20.5985 6.92607L20.2892 6.52734C18.321 3.99058 14.3703 4.41601 12.9874 7.31365C12.792 7.72296 12.2094 7.72296 12.014 7.31365C10.6311 4.41601 6.68042 3.99058 4.71224 6.52735L4.40289 6.92607C2.75765 9.0466 2.9952 12.0706 4.95137 13.9082Z"
                                        stroke="#008D34"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="server__inf-content d-flex flex-row align-items-center justify-content-between">
                        <div className="server__inf-item d-flex flex-row">
                            <div className='name d-flex flex-column'>
                                <div className='name__item'>
                                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M10.0007 17.1667C13.6825 17.1667 16.6673 14.1819 16.6673 10.5C16.6673 6.8181 13.6825 3.83333 10.0007 3.83333C6.31875 3.83333 3.33398 6.8181 3.33398 10.5C3.33398 14.1819 6.31875 17.1667 10.0007 17.1667Z"
                                            stroke="white"/>
                                        <path
                                            d="M15.4766 6.50531C14.8735 7.21128 14.0724 7.79052 13.1393 8.19518C12.2062 8.59986 11.168 8.81834 10.1104 8.83259C9.05294 8.84684 8.00643 8.65644 7.05736 8.27713C6.10829 7.89783 5.28392 7.34049 4.65234 6.65116"
                                            stroke="white"/>
                                        <path
                                            d="M15.4766 14.4947C14.8735 13.7887 14.0724 13.2095 13.1393 12.8048C12.2062 12.4002 11.168 12.1817 10.1104 12.1674C9.05294 12.1532 8.00643 12.3436 7.05736 12.7228C6.10829 13.1022 5.28392 13.6595 4.65234 14.3488"
                                            stroke="white"/>
                                        <path d="M10 3.83333V17.1667" stroke="white"/>
                                    </svg>
                                    <h4>IP сервера:</h4></div>
                                <div className='name__item'>
                                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M16.2741 17.015L16.2741 17.015C16.3599 16.9971 16.4187 16.9455 16.4461 16.8938C16.4704 16.8479 16.4712 16.8048 16.4454 16.7585L16.2741 17.015ZM16.2741 17.015C12.1357 17.8775 7.86397 17.8775 3.72559 17.015L3.72558 17.015M16.2741 17.015L3.72558 17.015M3.72558 17.015C3.63982 16.9971 3.58105 16.9455 3.55361 16.8938M3.72558 17.015L3.55361 16.8938M14.3094 14.6348C13.0833 13.9031 11.5683 13.5 9.99985 13.5C8.43139 13.5 6.9164 13.9031 5.69037 14.6348C4.73918 15.2025 4.01099 15.9383 3.5543 16.7585L14.3094 14.6348ZM14.3094 14.6348C15.2605 15.2025 15.9887 15.9383 16.4454 16.7585L14.3094 14.6348ZM3.55361 16.8938C3.52929 16.8479 3.5285 16.8048 3.55429 16.7585L3.55361 16.8938Z"
                                            stroke="white"/>
                                        <path
                                            d="M13.6673 7.16667C13.6673 9.19171 12.0257 10.8333 10.0007 10.8333C7.97561 10.8333 6.33398 9.19171 6.33398 7.16667C6.33398 5.14162 7.97561 3.5 10.0007 3.5C12.0257 3.5 13.6673 5.14162 13.6673 7.16667Z"
                                            stroke="white"/>
                                    </svg>
                                    <h4>Игроков:</h4></div>
                                <div className='name__item'>
                                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M8.95262 5.52296C9.60812 3.88879 9.93587 3.07172 10.4995 3.07172C11.0631 3.07172 11.3909 3.8888 12.0464 5.52297L12.0769 5.59906C12.4472 6.52228 12.6324 6.98389 13.0098 7.26447C13.3871 7.54504 13.8825 7.58941 14.8733 7.67813L15.0524 7.69417C16.6739 7.8394 17.4847 7.91201 17.6581 8.42782C17.8316 8.94366 17.2295 9.49141 16.0253 10.587L15.6234 10.9527C15.0139 11.5072 14.709 11.7846 14.5669 12.148C14.5404 12.2158 14.5184 12.2852 14.501 12.3559C14.4076 12.7348 14.4969 13.1371 14.6754 13.9417L14.7309 14.1921C15.059 15.6707 15.223 16.41 14.9367 16.7289C14.8296 16.8481 14.6905 16.9338 14.536 16.976C14.1225 17.0888 13.5354 16.6105 12.3614 15.6537C11.5904 15.0255 11.2049 14.7113 10.7623 14.6407C10.5882 14.6129 10.4108 14.6129 10.2367 14.6407C9.79412 14.7113 9.40862 15.0255 8.63767 15.6537C7.46354 16.6105 6.87648 17.0888 6.46298 16.976C6.30847 16.9338 6.16937 16.8481 6.06235 16.7289C5.77596 16.41 5.93998 15.6707 6.26805 14.1921L6.32361 13.9417C6.50212 13.1371 6.59137 12.7348 6.49799 12.3559C6.48057 12.2852 6.45854 12.2158 6.43204 12.148C6.28998 11.7846 5.98519 11.5072 5.3756 10.9527L4.9737 10.587C3.76949 9.49141 3.16739 8.94366 3.34087 8.42782C3.51436 7.91201 4.32512 7.8394 5.94662 7.69417L6.12574 7.67813C7.1165 7.58941 7.61188 7.54504 7.98926 7.26447C8.36663 6.98389 8.5518 6.52228 8.92212 5.59906L8.95262 5.52296Z"
                                            stroke="white"/>
                                    </svg>
                                    <h4>Рейтинг:</h4></div>
                            </div>
                            <div className='values d-flex flex-column'>
                                <div className='values__item'>
                                    <h5>reivecraft.ru</h5>
                                </div>
                                <div className='values__item'>
                                    <h5>1/100</h5></div>
                                <div className='values__item'>
                                    <h5>Топ 1</h5></div>
                            </div>
                        </div>
                        <span className="border d-none d-sm-none d-md-none d-lg-inline d-xl-inline d-xxl-inline"></span>
                        <div className="server__inf-item d-flex flex-row">
                            <div className='name d-flex flex-column'>
                                <div className='name__item'>
                                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M5 13V5.08334C5 4.88692 5 4.78871 5.06102 4.72769C5.12204 4.66667 5.22025 4.66667 5.41667 4.66667H13.9941C14.4222 4.66667 14.6362 4.66667 14.6895 4.79528C14.7427 4.92389 14.5914 5.07525 14.2887 5.37796L11.069 8.59764C10.9579 8.70875 10.9023 8.76431 10.9023 8.83334C10.9023 8.90234 10.9579 8.95792 11.069 9.06901L14.2887 12.2887C14.5914 12.5914 14.7427 12.7428 14.6895 12.8714C14.6362 13 14.4222 13 13.9941 13H5ZM5 13V16.3333"
                                            stroke="white" stroke-linecap="round"/>
                                    </svg>
                                    <h4>Страна:</h4></div>
                                <div className='name__item'>
                                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M10.5 17.5C14.6421 17.5 18 14.1421 18 10C18 5.85786 14.6421 2.5 10.5 2.5C6.35786 2.5 3 5.85786 3 10C3 14.1421 6.35786 17.5 10.5 17.5Z"
                                            stroke="white"/>
                                        <path d="M7.16699 10L9.66699 12.5L13.8337 7.5" stroke="white"/>
                                    </svg>
                                    <h4>Версия:</h4></div>
                                <div className='name__item'>
                                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M3.70915 12.0902L9.50301 17.5329C9.70259 17.7203 9.80234 17.8141 9.92001 17.8372C9.97301 17.8476 10.0275 17.8476 10.0805 17.8372C10.1982 17.8141 10.2979 17.7203 10.4975 17.5329L16.2913 12.0902C17.9215 10.5588 18.1194 8.03883 16.7484 6.27172L16.4907 5.93945C14.8505 3.82548 11.5583 4.18001 10.4058 6.59471C10.243 6.9358 9.75751 6.9358 9.59468 6.59471C8.44226 4.18001 5.15003 3.82548 3.50988 5.93946L3.25208 6.27172C1.88105 8.03883 2.07901 10.5588 3.70915 12.0902Z"
                                            stroke="white"/>
                                    </svg>

                                    <h4>Голосов:</h4></div>
                            </div>
                            <div className='values d-flex flex-column'>
                                <div className='values__item'>
                                    <img src={Country}/>
                                    <h5>Россия</h5></div>
                                <div className='values__item'>
                                    <h5>1.19.2</h5>
                                </div>
                                <div className='values__item'>
                                    <h5>119</h5></div>
                            </div>
                        </div>
                    </div>
                </main>
                <section id="socialNetworking">
                    <div className="container">
                        <div className="row row-cols-2 row-cols-sm-1 row-cols-md-4 row-cols-lg-4 row-cols-xl-4 row-cols-xxl-4 socialNetworking-item d-flex flex-row justify-content-between">
                            <div
                                className="col social-network social-networkHover d-flex flex-row align-items-center justify-content-between" style={{borderBottomLeftRadius: 24, borderTopLeftRadius: 24}}>
                                <div className="social-network-item d-flex flex-row" style={{gap: 8}}>
                                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M8.33333 13.8333H5.83333C3.99238 13.8333 2.5 12.3409 2.5 10.5C2.5 8.65905 3.99238 7.16667 5.83333 7.16667H8.33333"
                                            stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M13.3327 10.5H6.66602" stroke="white" stroke-linecap="round"
                                              stroke-linejoin="round"/>
                                        <path
                                            d="M11.666 13.8333H14.166C16.0069 13.8333 17.4993 12.3409 17.4993 10.5C17.4993 8.65905 16.0069 7.16667 14.166 7.16667H11.666"
                                            stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <h5>Сайт</h5>
                                </div>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.5 5L12.5 10L7.5 15" stroke="white"/>
                                </svg>

                            </div>
                            <div
                                className="col social-network social-networkHover d-flex flex-row align-items-center justify-content-between">
                                <div className="social-network-item d-flex flex-row" style={{gap: 8}}>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_847_376)">
                                            <path
                                                d="M19.1305 13.2365C18.695 12.7138 18.2002 12.2453 17.7216 11.7923C17.5515 11.6311 17.3755 11.4646 17.2059 11.2989C16.719 10.8228 16.7012 10.644 17.0868 10.1032C17.3535 9.73046 17.6363 9.35722 17.9098 8.99625C18.1578 8.66875 18.4144 8.33008 18.6602 7.99031L18.7107 7.92045C19.1806 7.27024 19.6666 6.59791 19.9252 5.78684C19.9924 5.57286 20.0629 5.25797 19.9017 4.99466C19.7405 4.73158 19.428 4.65131 19.2068 4.61382C19.0974 4.59527 18.9888 4.59274 18.888 4.59274L15.8106 4.59054L15.7852 4.59032C15.3199 4.59032 15.0063 4.80958 14.8267 5.26072C14.6551 5.69177 14.4667 6.15079 14.2517 6.58723C13.8237 7.45631 13.2803 8.4573 12.4939 9.29215L12.4606 9.32766C12.3678 9.42746 12.2626 9.54048 12.1857 9.54048C12.1739 9.54048 12.161 9.53822 12.1465 9.53366C11.9836 9.47018 11.8743 9.07585 11.8792 8.89242C11.8793 8.88989 11.8794 8.88736 11.8794 8.88483L11.8772 5.328C11.8772 5.31567 11.8763 5.30344 11.8747 5.29122C11.7964 4.71302 11.623 4.3531 10.9678 4.22478C10.9504 4.22131 10.9326 4.2196 10.9149 4.2196H7.71504C7.19371 4.2196 6.90645 4.43149 6.63643 4.74864C6.56354 4.83342 6.41182 5.00991 6.48702 5.22401C6.56332 5.44129 6.81099 5.48775 6.89164 5.50284C7.29197 5.57903 7.51762 5.82389 7.58154 6.25175C7.69313 6.99471 7.70683 7.78772 7.6247 8.74742C7.6018 9.01414 7.55649 9.22014 7.48184 9.39614C7.4645 9.43721 7.40301 9.57126 7.34031 9.57131C7.32038 9.57131 7.26274 9.56349 7.15776 9.49116C6.90953 9.3211 6.72792 9.07844 6.5162 8.77869C5.79591 7.76075 5.1914 6.63936 4.66787 5.34969C4.4737 4.87493 4.11108 4.60914 3.64635 4.60133C3.13569 4.59356 2.67272 4.58982 2.23115 4.58982C1.74869 4.58982 1.3014 4.59428 0.864629 4.60336C0.490725 4.60997 0.232096 4.72205 0.0960105 4.93675C-0.0402952 5.15161 -0.031432 5.43386 0.12238 5.7755C1.35365 8.51279 2.47002 10.503 3.74224 12.229C4.63368 13.4367 5.52782 14.2726 6.55583 14.8595C7.6389 15.4791 8.85266 15.7804 10.2664 15.7804C10.4266 15.7804 10.5923 15.7765 10.7594 15.7687C11.5809 15.7286 11.8856 15.4313 11.9242 14.6315C11.9425 14.2227 11.9872 13.794 12.1881 13.4284C12.315 13.1981 12.4332 13.1981 12.4721 13.1981C12.547 13.1981 12.6398 13.2326 12.7395 13.2971C12.9183 13.4139 13.0716 13.5702 13.1973 13.7068C13.3156 13.8365 13.4326 13.9676 13.5496 14.0987C13.8023 14.3818 14.0636 14.6744 14.3365 14.9519C14.934 15.5597 15.5921 15.827 16.348 15.769H19.1695C19.1755 15.769 19.1815 15.7688 19.1875 15.7684C19.4687 15.7498 19.7121 15.5939 19.8555 15.3405C20.0332 15.0267 20.0296 14.6263 19.846 14.2692C19.6376 13.8655 19.3673 13.5205 19.1305 13.2365Z"
                                                fill="white"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_847_376">
                                                <rect width="20" height="20" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <h5>Вконтакте</h5>
                                </div>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.5 5L12.5 10L7.5 15" stroke="white"/>
                                </svg>

                            </div>
                            <div
                                className="col social-network social-networkHover d-flex flex-row align-items-center justify-content-between">
                                <div className="social-network-item d-flex flex-row align-items-center" style={{gap: 8}}>
                                    <svg width="20" height="15" viewBox="0 0 20 15" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_880_398)">
                                            <path
                                                d="M16.6396 1.23994C18.8054 4.42646 19.875 8.02078 19.4752 12.1586C19.4735 12.1762 19.4644 12.1922 19.45 12.2028C17.8099 13.4079 16.2208 14.1393 14.6541 14.6243C14.6419 14.628 14.6288 14.6278 14.6168 14.6238C14.6047 14.6197 14.5942 14.6119 14.5867 14.6016C14.2248 14.0976 13.8959 13.5662 13.6078 13.0083C13.5912 12.9754 13.6063 12.9358 13.6404 12.9229C14.1627 12.726 14.6594 12.4899 15.1371 12.2105C15.1748 12.1884 15.1771 12.1344 15.1424 12.1085C15.041 12.0332 14.9406 11.954 14.8444 11.8749C14.8265 11.8602 14.8022 11.8574 14.7819 11.8672C11.6803 13.3005 8.2826 13.3005 5.14431 11.8672C5.12394 11.8581 5.09973 11.8612 5.08223 11.8756C4.98634 11.9548 4.88566 12.0332 4.78523 12.1085C4.75047 12.1344 4.75334 12.1884 4.79122 12.2105C5.26896 12.4846 5.76564 12.726 6.28725 12.9239C6.32105 12.9368 6.33711 12.9754 6.32033 13.0083C6.03843 13.567 5.70955 14.0983 5.34087 14.6023C5.32481 14.6227 5.29845 14.632 5.27352 14.6243C3.7142 14.1393 2.12516 13.4079 0.485062 12.2028C0.471399 12.1922 0.461571 12.1754 0.460132 12.1579C0.125976 8.57873 0.806993 4.95467 3.29303 1.23922C3.29902 1.22939 3.30813 1.22171 3.31868 1.21715C4.54192 0.655362 5.85242 0.242055 7.22212 0.00601609C7.24705 0.00217806 7.27198 0.0136921 7.28493 0.0357608C7.45416 0.335607 7.64761 0.720129 7.77849 1.03437C9.22227 0.813681 10.6886 0.813681 12.1626 1.03437C12.2934 0.726846 12.4802 0.335607 12.6487 0.0357608C12.6547 0.0248128 12.664 0.0160418 12.6753 0.0107001C12.6865 0.00535839 12.6992 0.00371904 12.7115 0.00601609C14.0819 0.242774 15.3924 0.656082 16.6147 1.21715C16.6255 1.22171 16.6343 1.22939 16.6396 1.23994ZM8.51248 8.04524C8.52759 6.98715 7.75668 6.1116 6.78897 6.1116C5.82916 6.1116 5.06569 6.97947 5.06569 8.04524C5.06569 9.11078 5.84427 9.97865 6.78897 9.97865C7.74901 9.97865 8.51248 9.11078 8.51248 8.04524ZM14.8845 8.04524C14.8996 6.98715 14.1287 6.1116 13.1612 6.1116C12.2011 6.1116 11.4377 6.97947 11.4377 8.04524C11.4377 9.11078 12.2162 9.97865 13.1612 9.97865C14.1287 9.97865 14.8845 9.11078 14.8845 8.04524Z"
                                                fill="white"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_880_398">
                                                <rect width="20" height="14.6341" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>

                                    <h5>Discord</h5>
                                </div>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.5 5L12.5 10L7.5 15" stroke="white"/>
                                </svg>
                            </div>
                            <div
                                className="col social-network d-flex flex-row align-items-center justify-content-between" style={{borderBottomRightRadius: 24, borderTopRightRadius: 24}}>
                                <div className="social-network-item d-flex flex-row" style={{gap: 8}}>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M8.14941 15.5417L8.38275 12.0167L14.7827 6.25001C15.0661 5.99168 14.7244 5.86668 14.3494 6.09168L6.44941 11.0833L3.03275 10C2.29941 9.79168 2.29108 9.28335 3.19941 8.91668L16.5077 3.78335C17.1161 3.50835 17.6994 3.93335 17.4661 4.86668L15.1994 15.5417C15.0411 16.3 14.5827 16.4833 13.9494 16.1333L10.4994 13.5833L8.84108 15.1917C8.64941 15.3833 8.49108 15.5417 8.14941 15.5417Z"
                                            fill="white"/>
                                    </svg>
                                    <h5>Telegram</h5>

                                </div>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.5 5L12.5 10L7.5 15" stroke="white"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="serverDescription">
                    <div className="title" style={{marginTop: 24, marginLeft: 24}}>
                        <h3>Описание сервера:</h3>
                        <p>Владелец сервера ещё не добавил описание. Если это ваш сервер, добавьте к нему описание
                            в личном кабинете.</p>
                    </div>
                    <hr style={{color: "#FFFFFF", height: 2, marginTop: 24, marginBottom: 24}}/>
                    <div className="server__content" style={{marginTop: 24, marginLeft: 24}}>
                        <h3>Видео и скриншоты:</h3>
                    </div>
                </section>
                <section id="serverStatistics">
                    <div className="title">
                        <h3>Статистика сервера:</h3>

                            <div id="statisticsDropDown" className="btn-group">
                                <button
                                    type="button"
                                    className="btn btn-info dropdown-toggle d-flex flex-row align-items-center"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <h4>За неделю</h4>
                                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 7L8 11L4 7" stroke="#008D34"/>
                                    </svg>
                                </button>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            За день
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            За неделю
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            За месяц
                                        </a>
                                    </li>
                                </ul>
                            </div>
                    </div><div className="dropdown dropdownServer  w-100 d-none">
                    <button className="btn btn-secondary dropdown-toggle dropdownToggletTab d-flex  align-items-center justify-content-between w-100" type="button" id="dropdownMenuButton1"
                            data-bs-toggle="dropdown" aria-expanded="false">
                        Игроки
                    </button>
                    <ul className="dropdown-menu w-100" aria-labelledby="dropdownMenuButton1">
                        <li><a className="dropdown-item opacity-75" href="#">Игроки</a></li>
                        <li><a className="dropdown-item opacity-75" href="#">Голоса</a></li>
                        <li><a className="dropdown-item opacity-75" href="#">Uptime</a></li>
                        <li><a className="dropdown-item opacity-75" href="#">Маленький онлайн</a></li>
                    </ul>
                </div>
                    <div className="statisticsTabBar d-flex flex-row" style={{marginTop: 16}}>
                        <button className={toggleStatistics === 1 ? "tabBar-activeState" : "tabBar-itemState"}
                                onClick={() => toggleTabStatistics(1)}>Игроки
                        </button>
                        <button className={toggleStatistics === 2 ? "tabBar-activeState" : "tabBar-itemState"}
                                onClick={() => toggleTabStatistics(2)}>Голоса
                        </button>
                        <button className={toggleStatistics === 3 ? "tabBar-activeState" : "tabBar-itemState"}
                                onClick={() => toggleTabStatistics(3)}>Uptime
                        </button>
                        <button className={toggleStatistics === 4 ? "tabBar-activeState" : "tabBar-itemState"}
                                onClick={() => toggleTabStatistics(4)}>Ранг
                        </button>
                    </div>
                </section>
            </div>
        </section>

);
};

export default ServerPage;