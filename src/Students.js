import React from 'react';
import HeticContext from './HeticContext';
export default () => (
    <HeticContext.Provider value="[{ name:'Priou' }, { name:'Masselot' }]">
        <ListContainer />
    </HeticContext.Provider>
);