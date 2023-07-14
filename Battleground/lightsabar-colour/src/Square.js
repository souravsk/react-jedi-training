//so we prop drilled this two useState from app.js
const Square = ({colorValue, hexValue, isDarkText}) => {
  return (
    <section 
        className="square"
        style={
            {backgroundColor:colorValue,// give the background value
            color:isDarkText ? "#000" : "#FFF" // this will change the font color based on bg
            }} 
    >
        <p>{colorValue ? colorValue : "Empty Value"}</p>
        <p>{hexValue ? hexValue : null}</p> 
    </section>
  )
}

Square.defaultProps = {
    colorValue:"Empty color value"
}

export default Square