import React from 'react';
import HeticContext from './HeticContext';

import StudentList from "./StudentList";
export default () => (
    <HeticContext.Provider value="[{ name:'Priou' }, { name:'Masselot' }]">
        <StudentList />
    </HeticContext.Provider>
);