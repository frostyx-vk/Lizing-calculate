import React from 'react';
import { RangeInput } from './RangeInput';
import './InputFields.scss';

export const LeasingTermField = () => {

    return (
        <div className="leasing__term-container">
            <h4>Срок лизинга</h4>
            <div className="leasing__term-input">
                <input
                    type="text"
                />
                <span>мес.</span>
            </div>
            <RangeInput
            />
        </div>
    );
};
