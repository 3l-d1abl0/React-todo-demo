function Backdrop(props){
    //console.log(props);
    return <div className='backdrop' onClick={props.onCustomClick} />;
}

export default Backdrop;