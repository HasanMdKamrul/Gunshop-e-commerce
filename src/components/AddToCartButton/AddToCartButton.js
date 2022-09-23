import React from 'react';

const AddToCartButton = ({cartValueUpdateHandler}) => {
    return (
        <div>
            <button onClick={()=>cartValueUpdateHandler()} className="btn glass">AddToCart</button>
        </div>
    );
};

export default AddToCartButton;