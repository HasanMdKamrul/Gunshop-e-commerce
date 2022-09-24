import React, { useState } from 'react';
import AddToCartButton from '../AddToCartButton/AddToCartButton';
import DetailsButton from '../DetailsButton/DetailsButton';
import Modal from '../Modal/Modal';

const SingleGun = ({gun,gun:{name,img,bullet,action,price},cartValueUpdateHandler}) => {

    console.log(gun)

    const [modalData, setModalData] = useState(null);
    
    const detailHandler = ()=> setModalData(gun);
    
    return (
        <div>
            
           <div className="card w-full bg-base-100 shadow-xl">
                <div className="card-body grid grid-cols-3">
                    <h2 className="card-title text-orange-500">{name}</h2>
                    <p className='text-left'><strong className='text-xl text-gray-200'>Action:{action}</strong> </p>
                    <p className='text-left'><strong className='text-xl text-gray-200'>Bullet:{bullet}</strong> </p>
                    <p className='text-left'><strong className='text-xl text-yellow-200'>Price:{price}</strong> </p>
                    <DetailsButton detailHandler={detailHandler} ></DetailsButton>
                    <AddToCartButton cartValueUpdateHandler={cartValueUpdateHandler}></AddToCartButton>
                </div>
                <figure className='w-full'><img className='w-full' src={img} alt="Shoes" /></figure>
                {
                    modalData && <Modal modalData={modalData} setModalData={setModalData}></Modal>
                }
                
            </div>
        </div>
    );
};

export default SingleGun;