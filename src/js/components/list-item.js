import React from 'react';

export const itemComponent = (item, idx) => {
    return (
        <div className={`mb-2 p-0 alert h-77px border ${item.completed ? 'alert-light' : 'alert-danger border-danger'}`} role="alert" key={idx}>
            <div className="row m-0">
                <div className="col-3 p-2 h-77px">
                    <p className={`p-0 m-0 text-center fz-id font-weight-bold rounded text-white ${item.completed ? 'bg-green': 'bg-red'}`}>
                        {item.id}
                    </p>
                </div>
                <div className="col-9 px-2 py-3">
                    <div className={`text-uppercase fz-title ${item.completed ? 'text-green' : 'text-red'}`}>
                        Title
                    </div>
                    <div className="text-dark text-truncate">
                        {item.title}
                    </div>
                </div>
            </div>
        </div>
    );
};
