function SizeSetting(props) {
    const onChangeSize = (size) => {
        props.onSetSize(size)
    };

    return (
        <div className="card">
            <div className="card-header" style={{background: '#f9c5c5', color: '#89661b' }}>Size: {props.size}px</div>
            <div className="card-body">
                <button className="btn btn-success" onClick={() => onChangeSize(props.size <= 2 ? props.size : props.size -2)}>Reduce</button>
                <button className="btn btn-success ms-3" onClick={() => onChangeSize(props.size +2)}>Increase</button>
            </div>
        </div>
    )
}
export default SizeSetting;