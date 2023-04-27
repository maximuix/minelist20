import React from 'react';

const LoadMore = () => {
    return (
        <div className="text-center">
            <button id="IdeasButton" className="btn-primary load-more">
                Загрузить еще
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.9997 16.6667L9.70504 16.9613L9.9997 17.2559L10.2944 16.9613L9.9997 16.6667ZM10.4164 4.16667C10.4164 3.93655 10.2298 3.75 9.9997 3.75C9.76962 3.75 9.58304 3.93655 9.58304 4.16667H10.4164ZM4.70508 11.9613L9.70504 16.9613L10.2944 16.372L5.29433 11.372L4.70508 11.9613ZM10.2944 16.9613L15.2944 11.9613L14.705 11.372L9.70504 16.372L10.2944 16.9613ZM10.4164 16.6667V4.16667H9.58304V16.6667H10.4164Z" fill="white"/>
                </svg>
            </button>
        </div>
    );
};

export default LoadMore;