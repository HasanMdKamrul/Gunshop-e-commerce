import React, { useEffect, useState } from 'react';
import SingleGun from '../SingleGun/SingleGun';

const Allguns = ({cartValueUpdateHandler}) => {
    const [guns,setGuns] = useState([]);

    useEffect(()=>{
        // ** data loader function
        const gunsDataLoad = async ()=>{
            try {
                const response = await fetch(`https://raw.githubusercontent.com/mir-hussain/guns/main/data.json`);
                response.ok ? console.log('Successful') : console.log('failed');
                const data = await response.json();
                setGuns(data);
            } catch (error) {
                console.log(error);
            }
        };

        gunsDataLoad()
    },[]);

   
    return (
        <div>
            <h1 className='text-4xl text-blue-500 my-5'>Welcome To Our Fake Gun Shop</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    guns?.map(gun=><SingleGun cartValueUpdateHandler={cartValueUpdateHandler} gun={gun} key={gun.id}></SingleGun>)
                }
            </div>
        </div>
    );
};

export default Allguns;