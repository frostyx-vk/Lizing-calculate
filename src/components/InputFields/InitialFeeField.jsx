import React from 'react';
import { RangeInput } from './RangeInput';

export const InitialFeeField = () => {

    return (
        <div className="initial_fee-container">
            <h4>Первоначальный взнос</h4>
            <div className="initial_fee-field" role="presentation">
                <span className="initial_fee-value">
                ₽
                </span>
                <div className="initial_fee-input">
                    <input
                        type="text"
                    />
                    <span>%</span>
                </div>
            </div>
            <RangeInput
            />
        </div>
    );
};
