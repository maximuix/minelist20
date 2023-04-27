import React from 'react';
import FaviconServer from '../img/Rectangle 4.png';
import {CopyClipboard} from "./copyClipboard.jsx";
import {Link} from "react-router-dom";

const ServerCard = () => {
    return (
            <div id='serverCard'>
                <div className="container d-flex flex-row flex-column flex-xs-column flex-sm-column flex-md-column flex-lg-row flex-xl-row flex-xxl-row align-items-center justify-content-between w-100">
                    <div className="inf-server d-flex flex-column order-1 order-xs-1 order-sm-1 order-md-1 order-lg-0 order-xl-0 order-xxl-0">
                        <Link to="/ServerPage">
                        <div className="server__title d-flex flex-row align-items-center">
                            <img src={FaviconServer} alt='аватарка сервера'/>
                            <h3> ✫ ＣＬＡＳＳＩＣ ＳＵＲＶＩＶＡＬ ❖ １.１６.５ ✫
                                <br/>Выживание | | Ивенты</h3>
                        </div>
                            </Link>
                        <div className="server-tag d-flex flex-row gap-3 row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-3 row-cols-xxl-3">
                            <div className="tag d-flex align-items-center">
                                <svg width="21" height="20" viewBox="0 0 21 20" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M10.5 17.5C14.6421 17.5 18 14.1421 18 10C18 5.85786 14.6421 2.5 10.5 2.5C6.35786 2.5 3 5.85786 3 10C3 14.1421 6.35786 17.5 10.5 17.5Z"
                                        stroke="white"/>
                                    <path d="M7.16699 10L9.66699 12.5L13.8337 7.5" stroke="white"/>
                                </svg>
                                <h4>1.19.2</h4></div>
                            <div className="tag d-flex align-items-center">
                                <h4>Выживание</h4></div>
                            <div className="tag d-flex align-items-center">
                                <svg width="21" height="20" viewBox="0 0 21 20" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8.95262 5.52296C9.60812 3.88879 9.93587 3.07172 10.4995 3.07172C11.0631 3.07172 11.3909 3.8888 12.0464 5.52297L12.0769 5.59906C12.4472 6.52228 12.6324 6.98389 13.0098 7.26447C13.3871 7.54504 13.8825 7.58941 14.8733 7.67813L15.0524 7.69417C16.6739 7.8394 17.4847 7.91201 17.6581 8.42782C17.8316 8.94366 17.2295 9.49141 16.0253 10.587L15.6234 10.9527C15.0139 11.5072 14.709 11.7846 14.5669 12.148C14.5404 12.2158 14.5184 12.2852 14.501 12.3559C14.4076 12.7348 14.4969 13.1371 14.6754 13.9417L14.7309 14.1921C15.059 15.6707 15.223 16.41 14.9367 16.7289C14.8296 16.8481 14.6905 16.9338 14.536 16.976C14.1225 17.0888 13.5354 16.6105 12.3614 15.6537C11.5904 15.0255 11.2049 14.7113 10.7623 14.6407C10.5882 14.6129 10.4108 14.6129 10.2367 14.6407C9.79412 14.7113 9.40862 15.0255 8.63767 15.6537C7.46354 16.6105 6.87648 17.0888 6.46298 16.976C6.30847 16.9338 6.16937 16.8481 6.06235 16.7289C5.77596 16.41 5.93998 15.6707 6.26805 14.1921L6.32361 13.9417C6.50212 13.1371 6.59137 12.7348 6.49799 12.3559C6.48057 12.2852 6.45854 12.2158 6.43204 12.148C6.28998 11.7846 5.98519 11.5072 5.3756 10.9527L4.9737 10.587C3.76949 9.49141 3.16739 8.94366 3.34087 8.42782C3.51436 7.91201 4.32512 7.8394 5.94662 7.69417L6.12574 7.67813C7.1165 7.58941 7.61188 7.54504 7.98926 7.26447C8.36663 6.98389 8.5518 6.52228 8.92212 5.59906L8.95262 5.52296Z"
                                        stroke="white"/>
                                </svg>
                                <h4>1/100</h4></div>
                        </div>
                    </div>
                    <div className="server-data d-flex flex-row flex-xs-row flex-sm-row flex-md-row flex-lg-column flex-xl-column flex-xxl-column order-0 order-xs-0 order-sm-0 order-md-0 order-lg-1 order-xl-1 order-xxl-1">
                        <h1 id='online'>56
                            <span style={{opacity: "50%"}}>/200</span>
                        </h1>
                            <CopyClipboard/>
                    </div>
                </div>
            </div>
    );
};

export default ServerCard;