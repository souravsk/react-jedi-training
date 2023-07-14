import colorNames from 'colornames'

//so we prop drilled this two useState from app.js
const Input = ({colorvalue, setColorValue, setHexValue, isDarkText, setIsDarkTest}) => {
  return (
    //onSubmit it should not refreash that's why we use preventDefault
    <form className="input" onSubmit={(e) => e.preventDefault()}> 
        <label>Add Color Name</label>
        <input
            autoFocus //this will keep into focus
            type="text" //this is input type
            placeholder="Add Color Name" 
            required //this is required which me we have fil this
            value={colorvalue} //we are assiging the colorvalue to value 
            onChange={(e) =>
                { 
                    setColorValue(e.target.value);
                    setHexValue(colorNames(e.target.value));
                }} //we are taking the input value with the help of onChange then giving it to setColorValue then setColorValue is giveing to colorValue
        />

        <button
            type="button"
            onClick={() => setIsDarkTest(!isDarkText)}
        >
            Change Font Color
        </button>
    </form>
  )
}

export default Input