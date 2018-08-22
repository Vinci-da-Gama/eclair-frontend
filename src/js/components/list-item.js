import React from 'react';

export const itemComponent = (item, idx) => {
    return (
        <div key={idx}>
            {item.id}
        </div>
    );
};
