import React from 'react';
import { RangeInput } from './RangeInput';

export const CarPriceField = () => {

    return (
        <div className="car_price-container">
            <h4>Стоимость автомобиля</h4>
            <div className="car_price-input">
                <input
                    type="text"
                />
                <span>₽</span>
            </div>
            <RangeInput
            />
        </div>
    );
};
