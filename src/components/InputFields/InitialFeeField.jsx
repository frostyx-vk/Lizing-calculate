import React from 'react';
import { RangeInput } from './RangeInput';
import './InputFields.scss';

export const InitialFeeField = () => {

    return (
        <div className="initial__fee-container">
            <h4>Первоначальный взнос</h4>
            <div className="initial__fee-field" role="presentation">
                <span className="initial__fee-value">
                ₽
                </span>
                <div className="initial__fee-input">
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
