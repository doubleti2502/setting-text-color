
function ColorPicker(props) {
    const colors = ['red', 'yellow', 'pink', 'green'];

    const setActiveColor = (color) => {
        props.onSetColor(color)
    };

    const elementColors = colors.map((color, index) => {
        return <div key={index}
                    style={{backgroundColor: color, width: 50, height: 50, marginRight: 25, border: props.color === color ? 'solid' :''}}
                    onClick={() => setActiveColor(color)}
        >
        </div>
    });


    return (
        <div className="card" style={{width: '48%'}}>
            <div className="card-header" style={{background: '#1f8cd1', color: 'white'}}>Color Picker</div>
            <div className="card-body d-flex mt-3">
                {elementColors}
                <hr/>
            </div>
        </div>
    )
}
export default ColorPicker;