export default function Jokes(props){
    return(
        <>
            <p>{props.setup}</p>
            <p>{props.punchline}</p>
            <hr />
        </>
    )
}