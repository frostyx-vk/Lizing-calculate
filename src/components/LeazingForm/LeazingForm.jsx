import React from 'react';
import { CarPriceField } from '../InputFields/CarPriceField';
import { InitialFeeField } from '../InputFields/InitialFeeField';
import { LeasingTermField } from '../InputFields/LeasingTermField';
import { LeasingAgreementField } from '../InfoFields/LeasingAgreementField';
import { MonthPayField } from '../InfoFields/MonthPayField';
import './LeazingForm.scss';

export const LeazingForm = () => {

    return (
        <form className="leasing__form">
            <h1>Рассчитайте стоимость автомобиля в лизинг</h1>
            <div className="leasing__form-inputs">
                <CarPriceField
                />
                <InitialFeeField
                />
                <LeasingTermField
                />
            </div>
            <div className="leasing__form-info">
                <LeasingAgreementField
                />
                <MonthPayField
                />
                <button type="submit" > Оставить заявку
                </button>
            </div>
        </form>
    );
};
