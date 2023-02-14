import React from 'react';
import { RangeInput } from './RangeInput';

export const LeasingTermField = () => {

    return (
        <div className="leasing_term-container">
            <h4>Срок лизинга</h4>
            <div className="leasing_term-input">
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
