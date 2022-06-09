import './form.css'

export const GetGeo = (props) => {
    return (
        <form>
            <label htmlFor="select-category">Select category</label>
            <select name="selectList" id="select-category">
                <option value="landmine">landmine</option>
                <option value="grenade">grenade</option>
            </select>
            <label htmlFor="lat"> your lat</label>
            <input type="text" placeholder={props.lat} id="lat"/>


            <label htmlFor="lon"> your lon</label>
            <input type="text" placeholder={props.lon}/>
            <label htmlFor="select-size">select size</label>
            <select name="select-size" id="select-size">
                <option value="S">small</option>
                <option value="M">medium</option>
                <option value="L">large</option>
                <option value="XL">extra large</option>
            </select>
            <label htmlFor="text-area">Extra details: </label>

            <textarea id="text-area" name="text-area" rows="4" cols="50"/>
        </form>
    )
}