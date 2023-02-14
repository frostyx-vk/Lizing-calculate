import React from 'react';
import { RangeInput } from './RangeInput';
import './InputFields.scss';

export const CarPriceField = () => {

    return (
        <div className="car__price-container">
            <h4>Стоимость автомобиля</h4>
            <div className="car__price-input">
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
