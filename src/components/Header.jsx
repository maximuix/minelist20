import React, {useState} from 'react';
import Logo from '../img/logo.svg';
import Modal from 'react-bootstrap/Modal';

export default function Header() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [isOpen, setIsOpen] = useState(false);
    const [hideOrShow, setHideOrShow] = useState({});

    const handleMenu = () => {
        setIsOpen((prev) => !prev);
        if (isOpen) {
            setHideOrShow(() => {
                return {}
            })
        } else {
            setHideOrShow(() => {
                return {display: "flex"}
            })
        }
    }

    return (
        <>
            <header id="header" className="d-flex align-items-center w-100 position-fixed">
                <div className="container d-flex flex-row align-items-center justify-content-between">
                    <a id="logo" href='/'>
                        <img src={Logo} alt="лого"/>
                    </a>
                    <div className="statistic d-flex flex-row align-items-center position-absolute"
                         style={{gap: 24, marginLeft: 183}}>
                        <div className="statistic-item d-flex flex-column" style={{gap: 4}}>
                            <div className="statistic__title d-flex flex-row align-items-center" style={{gap: 4}}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M15.833 4.16667H4.16634C3.7061 4.16667 3.33301 4.53976 3.33301 5V7.5C3.33301 7.96024 3.7061 8.33333 4.16634 8.33333H15.833C16.2932 8.33333 16.6663 7.96024 16.6663 7.5V5C16.6663 4.53976 16.2932 4.16667 15.833 4.16667Z"
                                        stroke="#008D34" stroke-linejoin="round"/>
                                    <path
                                        d="M15.833 11.6667H4.16634C3.7061 11.6667 3.33301 12.0398 3.33301 12.5V15C3.33301 15.4602 3.7061 15.8333 4.16634 15.8333H15.833C16.2932 15.8333 16.6663 15.4602 16.6663 15V12.5C16.6663 12.0398 16.2932 11.6667 15.833 11.6667Z"
                                        stroke="#008D34" stroke-linejoin="round"/>
                                    <path
                                        d="M15 6.25C15 6.48012 14.8135 6.66667 14.5833 6.66667C14.3532 6.66667 14.1667 6.48012 14.1667 6.25C14.1667 6.01988 14.3532 5.83333 14.5833 5.83333C14.8135 5.83333 15 6.01988 15 6.25Z"
                                        fill="#008D34"/>
                                    <path
                                        d="M15 13.75C15 13.9801 14.8135 14.1667 14.5833 14.1667C14.3532 14.1667 14.1667 13.9801 14.1667 13.75C14.1667 13.5199 14.3532 13.3333 14.5833 13.3333C14.8135 13.3333 15 13.5199 15 13.75Z"
                                        fill="#008D34"/>
                                    <path
                                        d="M13.3333 6.25C13.3333 6.48012 13.1468 6.66667 12.9167 6.66667C12.6865 6.66667 12.5 6.48012 12.5 6.25C12.5 6.01988 12.6865 5.83333 12.9167 5.83333C13.1468 5.83333 13.3333 6.01988 13.3333 6.25Z"
                                        fill="#008D34"/>
                                    <path
                                        d="M13.3333 13.75C13.3333 13.9801 13.1468 14.1667 12.9167 14.1667C12.6865 14.1667 12.5 13.9801 12.5 13.75C12.5 13.5199 12.6865 13.3333 12.9167 13.3333C13.1468 13.3333 13.3333 13.5199 13.3333 13.75Z"
                                        fill="#008D34"/>
                                </svg>
                                <h3>11711+</h3>
                            </div>
                            <h5>Серверов</h5>
                        </div>
                        <div className="statistic-item d-flex flex-column" style={{gap: 4}}>
                            <div className="statistic__title d-flex flex-row align-items-center" style={{gap: 4}}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16.4396 17.0392C16.0597 15.9761 15.2227 15.0366 14.0585 14.3666C12.8941 13.6965 11.4676 13.3333 10.0001 13.3333C8.53247 13.3333 7.10594 13.6965 5.94165 14.3666C4.77736 15.0366 3.94038 15.9761 3.56055 17.0392"
                                        stroke="#008D34" stroke-linecap="round"/>
                                    <path
                                        d="M10.0003 10C11.8413 10 13.3337 8.50761 13.3337 6.66667C13.3337 4.82572 11.8413 3.33333 10.0003 3.33333C8.15938 3.33333 6.66699 4.82572 6.66699 6.66667C6.66699 8.50761 8.15938 10 10.0003 10Z"
                                        stroke="#008D34" stroke-linecap="round"/>
                                </svg>
                                <h3>2456+</h3>
                            </div>
                            <h5>Игроков</h5>
                        </div>
                    </div>
                    <button id="btnHeader"
                            className="btn-secondary-outline btn-header d-none d-xs-none d-sm-none d-md-flex d-lg-flex d-xl-flex d-xxl-flex gap-2"
                            variant="primary" onClick={handleShow}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 5V15" stroke="#008D34" stroke-linecap="round"/>
                            <path d="M15 10H5" stroke="#008D34" stroke-linecap="round"/>
                        </svg>
                        Добавить сервер
                    </button>
                    <div className="menu d-flex d-sm-flex d-md-none d-lg-none d-xl-none d-xxl-none gap-3 menu">
                       <div className="nav__wrapper">
                           {isOpen  ? <button className="menuClose bg-transparent border-0" onClick={handleMenu}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                               <path d="M18 6L6 18" stroke="#008D34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                               <path d="M6 6L18 18" stroke="#008D34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                           </svg></button> : <button className="menuOpen bg-transparent border-0" onClick={handleMenu}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                               <rect x="2" y="5" width="20" height="2" rx="1" fill="#008D34"/>
                               <rect x="2" y="11" width="20" height="2" rx="1" fill="#008D34"/>
                               <rect x="2" y="17" width="20" height="2" rx="1" fill="#008D34"/>
                           </svg></button>}
                       </div>
                    </div>
                </div>
                <div className="menu__vision w-100 position-absolute flex-column align-items-center" style={hideOrShow}>
                    <div className="menu__statistic d-flex d-sm-none d-md-none d-lg-none d-xl-none d-xxl-none flex-row align-items-center"
                         style={{gap: 16}}>
                        <div className="menu-statistic-item flex-column" style={{gap: 4}}>
                            <div className="statistic__title d-flex flex-row align-items-center" style={{gap: 4}}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M15.833 4.16667H4.16634C3.7061 4.16667 3.33301 4.53976 3.33301 5V7.5C3.33301 7.96024 3.7061 8.33333 4.16634 8.33333H15.833C16.2932 8.33333 16.6663 7.96024 16.6663 7.5V5C16.6663 4.53976 16.2932 4.16667 15.833 4.16667Z"
                                        stroke="#008D34" stroke-linejoin="round"/>
                                    <path
                                        d="M15.833 11.6667H4.16634C3.7061 11.6667 3.33301 12.0398 3.33301 12.5V15C3.33301 15.4602 3.7061 15.8333 4.16634 15.8333H15.833C16.2932 15.8333 16.6663 15.4602 16.6663 15V12.5C16.6663 12.0398 16.2932 11.6667 15.833 11.6667Z"
                                        stroke="#008D34" stroke-linejoin="round"/>
                                    <path
                                        d="M15 6.25C15 6.48012 14.8135 6.66667 14.5833 6.66667C14.3532 6.66667 14.1667 6.48012 14.1667 6.25C14.1667 6.01988 14.3532 5.83333 14.5833 5.83333C14.8135 5.83333 15 6.01988 15 6.25Z"
                                        fill="#008D34"/>
                                    <path
                                        d="M15 13.75C15 13.9801 14.8135 14.1667 14.5833 14.1667C14.3532 14.1667 14.1667 13.9801 14.1667 13.75C14.1667 13.5199 14.3532 13.3333 14.5833 13.3333C14.8135 13.3333 15 13.5199 15 13.75Z"
                                        fill="#008D34"/>
                                    <path
                                        d="M13.3333 6.25C13.3333 6.48012 13.1468 6.66667 12.9167 6.66667C12.6865 6.66667 12.5 6.48012 12.5 6.25C12.5 6.01988 12.6865 5.83333 12.9167 5.83333C13.1468 5.83333 13.3333 6.01988 13.3333 6.25Z"
                                        fill="#008D34"/>
                                    <path
                                        d="M13.3333 13.75C13.3333 13.9801 13.1468 14.1667 12.9167 14.1667C12.6865 14.1667 12.5 13.9801 12.5 13.75C12.5 13.5199 12.6865 13.3333 12.9167 13.3333C13.1468 13.3333 13.3333 13.5199 13.3333 13.75Z"
                                        fill="#008D34"/>
                                </svg>
                                <h3>11711+</h3>
                            </div>
                            <h5>Серверов</h5>
                        </div>
                        <div className="menu-statistic-item d-flex flex-column" style={{gap: 4}}>
                            <div className="statistic__title d-flex flex-row align-items-center" style={{gap: 4}}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16.4396 17.0392C16.0597 15.9761 15.2227 15.0366 14.0585 14.3666C12.8941 13.6965 11.4676 13.3333 10.0001 13.3333C8.53247 13.3333 7.10594 13.6965 5.94165 14.3666C4.77736 15.0366 3.94038 15.9761 3.56055 17.0392"
                                        stroke="#008D34" stroke-linecap="round"/>
                                    <path
                                        d="M10.0003 10C11.8413 10 13.3337 8.50761 13.3337 6.66667C13.3337 4.82572 11.8413 3.33333 10.0003 3.33333C8.15938 3.33333 6.66699 4.82572 6.66699 6.66667C6.66699 8.50761 8.15938 10 10.0003 10Z"
                                        stroke="#008D34" stroke-linecap="round"/>
                                </svg>
                                <h3>2456+</h3>
                            </div>
                            <h5>Игроков</h5>
                        </div>
                    </div>
                    <button
                            className="btn-secondary-outline btn-header d-flex d-xs-flex d-sm-flex d-md-none d-lg-none d-xl-none d-xxl-none gap-2"
                            variant="primary" onClick={handleShow}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 5V15" stroke="#008D34" stroke-linecap="round"/>
                            <path d="M15 10H5" stroke="#008D34" stroke-linecap="round"/>
                        </svg>
                        Добавить сервер
                    </button>
                </div>
            </header>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <button className="btnClose" onClick={handleClose}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 6L6 18" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M6 6L18 18" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </Modal.Header>
                <h3 className="text-center"
                    style={{marginTop: 32, color: "var(--neutral-white)", fontSize: "32", marginBottom: 0}}>Добавить
                    сервер</h3>
                <p className="text-center" style={{
                    fontWeight: 400,
                    color: "var(--neutral-white)",
                    opacity: 0.7,
                    marginTop: 16,
                    marginBottom: 0,
                }}>Скопируйте и вставьте адрес сервера и система автоматически подтянет информацию по
                    серверу</p>
                <input type="text" placeholder="Вставьте IP-адрес сервера" className="form-control text-light"
                       style={{
                           width: "100%",
                           height: 56,
                           border: "1px var(--primary-green-2) solid",
                           borderRadius: 12,
                           backgroundColor: "var(--neutral-dark-grey-300)",
                           marginTop: 24,
                       }}/>
                <button
                    className="btn btn-secondary btn-modal"
                    style={{
                        width: "100%",
                        height: 62,
                        backgroundColor: "var(--primary-green)",
                        borderRadius: 12,
                        marginTop: 16,
                    }}>
                    Добавить
                </button>
            </Modal>
        </>
    );
};

