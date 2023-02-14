import React from 'react';
import { CarPriceField } from '../InputFields/CarPriceField';
import { InitialFeeField } from '../InputFields/InitialFeeField';
import { LeasingTermField } from '../InputFields/LeasingTermField';
import { LeasingAgreementField } from '../InfoFields/LeasingAgreementField';
import { MonthPayField } from '../InfoFields/MonthPayField';

export const LeazingForm = () => {

    return (
        <form >
            <h1>Рассчитайте стоимость автомобиля в лизинг</h1>
            <div className="leasing_form-inputs">
                <CarPriceField
                />
                <InitialFeeField
                />
                <LeasingTermField
                />
            </div>
            <div className="leasing_form-info">
                <LeasingAgreementField
                />
                <MonthPayField
                />
                <button type="submit" >
                </button>
            </div>
        </form>
    );
};
