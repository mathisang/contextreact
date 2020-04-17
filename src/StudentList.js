import React from 'react';
import HeticContext from './HeticContext';
export default () => (
    <ul>
        <HeticContext.Consumer>
            {
                value =>
                    (
                        value.map( s => s.name )
                        //<li> test </li>
                    )
            }
        </HeticContext.Consumer>
    </ul>
);