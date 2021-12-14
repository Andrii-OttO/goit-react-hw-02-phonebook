import React from 'react';
import style from './style.module.css';

const Filter = ({ value, onCange }) => {
    return (
        <form className={style.filter}>
            <label className={style.filter_lable}>
                Find contacts by name
                <input type="text" value={value} onChange={onCange}></input>
            </label>
        </form>
    );
};

export default Filter;
