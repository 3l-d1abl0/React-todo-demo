function Modal(props){
    console.log(props);
    function cancelHandler(){
        props.onCancel();
    }

    return (
        <div className='modal'>
            <p>Are you Sure ?</p>
            <button className='btn btn--alt' onClick={cancelHandler}>Cancel</button>
            <button className="btn" onClick={props.onConfirm} >Confirm</button>
        </div>
    );

}

export default Modal;