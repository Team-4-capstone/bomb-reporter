
export const Cities = (props) => {
    if (props.prop !== null){
        console.log(props.prop.results[0].locations[0].adminArea5)
    }

    return props.prop ? (
        <h1>{props.prop.results[0].locations[0].adminArea5}</h1>
    ) : (
        <p>loading</p>
    )

}