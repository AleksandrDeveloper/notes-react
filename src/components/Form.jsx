import React from 'react';


export default function Form({}) {
    return(
        <form>
            <div className="form-group">
                <input 
                type="text" 
                className="form-control" 
                placeholder='Введите названия задачи '
                />
            </div>
        </form>
    )
};
