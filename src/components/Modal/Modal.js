import React from 'react';

const Modal = ({modalData,setModalData}) => { 
    
   
    return (
        <div>
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">{modalData?.name}</h3>
                <p className="py-4"></p>
                <div className="modal-action">
                <label onClick={()=> setModalData(null)} htmlFor="my-modal" className="btn">Yay!</label>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Modal;