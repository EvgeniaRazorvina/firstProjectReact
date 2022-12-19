import React from 'react';
import EmployersListItem from '../employers-list-item/employers-list-item';
import './employers-list.css';

const EmployersList = ({data, onDelete, onToggleProp, onChangeValue}) => {
    

    return (
        <ul className="app-list list-group">
            {data.map((item) => {
                const {id} = item;
                return (
                    <EmployersListItem
                        key={id}
                        {...item}
                        onDelete={() => onDelete(id)}
                        onToggleProp={(e) => {onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}}
                        onChangeValue={(e) => {onChangeValue(id, e.target.value)}}
                    />
                );
            })}
        </ul>
    );
};

export default EmployersList;


