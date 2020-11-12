import './ListItem.css';

function ListItem(props) {
    console.log('prop here', props.img)
    return (
        <div className="ListItem">
            <div className='item-pic'></div>
            <div className='item-desciption'>
                <div className='item-title'>{props.medicine_name}</div>
                <div className='item-type'>{props.type}</div>
            </div>
        </div>
    );
}

export default ListItem;
