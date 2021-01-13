import React from 'react';

const MinusIcon = ({className, height, width}) => {
        return (
            <svg 
            className={className}
            width={width} 
            height={height} 
            viewBox="0 0 18 18" 
            xmlns="http://www.w3.org/2000/svg">

            <path d="M2 8C1.73478 8 1.48043 8.10536 1.29289 8.29289C1.10536 8.48043 1 8.73478 1 9C1 9.26522 1.10536 9.51957 1.29289 9.70711C1.48043 9.89464 1.73478 10 2 10H16C16.2652 10 16.5196 9.89464 16.7071 9.70711C16.8946 9.51957 17 9.26522 17 9C17 8.73478 16.8946 8.48043 16.7071 8.29289C16.5196 8.10536 16.2652 8 16 8H2Z"
            fill="currentColor"
            
            />
            </svg>
        );
};

export {MinusIcon};
