
export default function Entry(props){
    return(
        <article className="entry">
            <img
                src={props.img} 
                alt={props.alt} 
            />
            <div className="entry_1">
                <div className="entry_location">
                    <img 
                        src="src/assets/Fill 219.png" 
                        alt="An image of location icon" 
                    />
                    <span> {props.country} <a href={props.googleMapsLink}>View on Google Maps</a></span>
                </div>
                <h1>{props.title}</h1>
                <p className="date">
                    Dates: {props.dates}
                </p>
                <p>
                    {props.text}
                </p>
            </div>
        </article>
    )
}