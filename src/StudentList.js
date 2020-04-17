import React from 'react';
import HeticContext from './HeticContext';
export default () => (
    <ul>
        <HeticContext.Consumer>
            {
                value =>
                    (
                        value.map( s => <li> s.name </li> )
                    )
            }
        </HeticContext.Consumer>
    </ul>
);