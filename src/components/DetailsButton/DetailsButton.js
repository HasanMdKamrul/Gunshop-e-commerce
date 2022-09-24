import React from 'react';

const DetailsButton = ({detailHandler}) => {
   
    return (
        <div>
            <label onClick={()=>detailHandler()}  htmlFor="my-modal" className="btn btn-outline btn-success">Details</label>
        </div>
    );
};

export default DetailsButton;