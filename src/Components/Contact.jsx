export default function Contact(props){
    return(
        <div className="display">
            <article className="contact-card">
                <img className="cat-pic"
                    src={props.img} 
                    alt={`Photo of ${props.name}`}
                />
                <h3>{props.name}</h3>
                <div className="info-group-phone">
                    <img 
                        src="src/assets/phone25.png" 
                        alt="An icon of a phone" 
                    />
                    <p>{props.phone}</p>
                </div>
                <div className="info-group-email">
                    <img 
                        src="src/assets/mail.svg" 
                        alt="An icon of an envelope" 
                    />
                    <p>{props.mail}</p>
                </div>
            </article>
        </div>
    )
}