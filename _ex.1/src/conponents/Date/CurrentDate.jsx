import React from 'react';
import moment from 'moment';

export default function CurrentDate() {
    let actual = moment().format('HH:mm:ss');
    return (
        <h1>
            {actual}
        </h1>
    )
}