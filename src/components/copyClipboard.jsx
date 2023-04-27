import copy from 'copy-to-clipboard'
import React, {useState} from "react";

export const CopyClipboard = (props) => {
    const [copyTip, setCopyTip] = useState(false);
    return (
        <>
            <div>
                <div
                    className="copy-button"
                    onClick={() => {
                        copy(props)
                        setCopyTip(true);
                        setTimeout(() => {
                            setCopyTip(false);
                        }, 800)
                    }}
                    style={{cursor: "pointer"}}>
                    <div id="serverId" className="d-flex align-items-center gap-1">
                        <h5>IP: <span style={{color: "var(--primary-green)"}}>new.fawemc.me</span></h5>
                        <svg className='serverIdIcon' width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.7">
                                <path d="M12.1663 5.83334C12.1663 5.05678 12.1663 4.66849 12.0395 4.3622C11.8703 3.95383 11.5458 3.62937 11.1375 3.46021C10.8312 3.33334 10.4429 3.33334 9.66634 3.33334H7.16634C5.59499 3.33334 4.80932 3.33334 4.32117 3.8215C3.83301 4.30965 3.83301 5.09533 3.83301 6.66668V9.16668C3.83301 9.94326 3.83301 10.3315 3.95987 10.6378C4.12903 11.0462 4.45349 11.3707 4.86187 11.5398C5.16816 11.6667 5.55644 11.6667 6.33301 11.6667" stroke="white"/>
                                <path d="M15.4997 8.33334H10.4997C9.5792 8.33334 8.83301 9.07954 8.83301 10V15C8.83301 15.9205 9.5792 16.6667 10.4997 16.6667H15.4997C16.4201 16.6667 17.1663 15.9205 17.1663 15V10C17.1663 9.07954 16.4201 8.33334 15.4997 8.33334Z" stroke="white"/>
                            </g>
                        </svg>
                    </div>
                </div>
                <div id="copied_tip" className='tip' style={{
                    display: copyTip ? "" : "none"
                }}>Скопировано!
                </div>
            </div>
        </>
    );
};