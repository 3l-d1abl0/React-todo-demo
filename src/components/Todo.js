import { useState } from 'react';

import Modal from './Modal';
import Backdrop from './Backdrop';


function Todo(props){
    //console.log(props);
    //1. current state snapshot 2. function that can change the value
    //whenever this state changing function is called react re-renders everything
    const [modalIsOpen, setModalIsOpen] = useState(false);
    //initially shouldnt be open - so false


    function deleteHandler(event){
        //console.log(event);
        console.log(props.text);
        setModalIsOpen(true);
    }

    function closeModalHandler(event){
        setModalIsOpen(false);
    }

    return (
    <div className="card">
        <h2>{props.text}</h2>
        <div className="actions">
        <button className='btn' onClick={deleteHandler}>Delete
        </button>
        </div>
        { modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/> }
        { modalIsOpen && <Backdrop onCustomClick={closeModalHandler}/> }

    </div>
    );
}


export default Todo;