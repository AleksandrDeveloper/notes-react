import React, { useContext, useState } from 'react';
import AlertContext from '../context/alert/AlertContext';
import FirebaseContext from '../context/firebase/FirebaseContext';



export default function Form() {
    const {show} = useContext(AlertContext)
    const [value, setValue] = useState('')
    const firebase = useContext(FirebaseContext)

    function hadlerSubmit(e){
        e.preventDefault()

        if(value.trim()){
            firebase.addNote(value).then(() => {
                show('Заметка была создана', 'success')
              }).catch(() => { 
                show('Что-то пошло не так', 'danger')
              })

        }else{show('add notes')}
        
    }
    return( 
        <form onSubmit={hadlerSubmit}>
            <div className="form-group">
                <input 
                type="text" 
                value={value}
                onChange={(e)=>setValue(e.target.value)}
                className="form-control" 
                placeholder='Введите названия задачи '
                />
            </div>
        </form>
    )
};
