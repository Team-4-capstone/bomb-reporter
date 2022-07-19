
export const Cities = (props) => {

    return props.prop ? (
        <p className="flex justify-center m-0"><h4>{props.prop.results[0].locations[0].adminArea5}</h4></p>
    ) : (
        <p>loading</p>
    )

}