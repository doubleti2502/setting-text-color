
function Result(props) {

    return(
        <div>
            <div className="text-secondary">
                Color: {props.color} - Fontsize: {props.size}px
            </div>

            <div className="p-2 mb-2 rounded-2 mt-3" style={{fontSize: props.size, color: props.color, border: 'solid' ,borderColor: props.color}}>
                Content Setting
            </div>
        </div>
    )
}
export default Result;