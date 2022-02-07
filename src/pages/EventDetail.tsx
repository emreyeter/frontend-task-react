import React from 'react';
import { useLocation } from 'react-router-dom';



export default () => {
    const { state } = useLocation()
    const { name, classifications, images, info , priceRanges }: any = state


    const header = () => {
        return (
            <div className="d-flex justify-content-around align-items-center py-3 bg-black" >
            <div className="d-flex flex-row align-items-center">
                <img 
                    className="border border-dark" 
                    src={images?.[0]?.url} 
                    style={{ width: 120, height: 70 }} />
                <div className="ms-3">
                    <div className="text-white fw-bold" >
                        {name}
                    </div>
                    <div className="mt-2">
                        {
                            classifications?.map(({ genre }) =>
                                <span
                                    key={genre?.id}
                                    className="me-2 p-1 px-2 br-3 rounded-3 text-white bg-success" >
                                    {genre?.name}
                                </span>
                            )

                        }

                    </div>
                </div>
            </div>
            <img src="https://tarfin.com/img/logo.svg" alt="Tarfin Logo" />
            </div>
        )
    }

    const eventPrices = () => {
        return  priceRanges &&
        <>
        <h1>
            Prices
        </h1>
        <div className="d-flex flex-row mt-2">
        {
            
            priceRanges?.map(({ min, max, currency, type }, index) => {
                return (
                    <span className="me-2 price-container"  key={index}>
                        <span className="price-type" >
                            {type?.toUpperCase()}
                        </span>
                        <span className="price-text">
                            {min}-{max} {currency}
                        </span>
                    </span>
                )
            })
        }
        </div>
        </>
    }

    const eventInfo = () => {
        return (
            
                info &&
                <div className="bg-dark py-3 px-4 mt-2 text-white" >
                    <i className="bi bi-info-circle me-2"></i>
                    {info}
                </div>
            
        )
    }

    return (
        <div>
            {header()}

            <div className="container">
                {eventPrices()}
                {eventInfo()}
            </div>
        </div>
    );
}

