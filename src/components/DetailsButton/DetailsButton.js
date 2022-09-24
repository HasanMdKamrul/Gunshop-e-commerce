import React, { useState } from 'react';
import Modal from '../Modal/Modal';

const DetailsButton = ({gun}) => {

    const [modalData,setModalData] = useState(null);
    
   
    return (
        <div>
            <label onClick={()=> setModalData(gun) } htmlFor="my-modal" className="btn btn-outline btn-success">Details</label>
            {
                modalData && <Modal modalData={modalData} setModalData={setModalData}></Modal>
            }
        </div>
    );
};

export default DetailsButton;