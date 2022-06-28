
export const Cities = (props) => {
    console.log(props)

    return props.prop ? (
        <h1>{props.prop.results[0].locations[0].adminArea5}</h1>
    ) : (
        <p>loading</p>
    )

}