import Header from "./Components/Header.jsx";
import Entry from "./Components/Entry.jsx";
import data from "./Components/data.js";


// import Contact from "./Components/Contact";
// import Jokes from "./Components/Jokes.jsx";
//import jokesData from "./Components/jokesData.js";
import "./index.css";

export default function App(){
    
    const journal = data.map((place) => {
        return(
            <Entry
                key={place.id}
                id={place.id}
                img={place.img.src}
                alt={place.img.alt}
                title={place.title}
                country={place.country}
                googleMapsLink={place.googleMapsLink}
                dates={place.dates}
                text={place.text}
            />
            
        )
    })

    return(
        <>

            <main>
                <Header />
                {journal}
            </main>

            {/* <main>
                <Header /> 
                <Entry 
                    img="src\assets\Rectangle 77.png"
                    name="Mount Fuji"
                    place="JAPAN"
                    link="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
                    date="12 Jan, 2021 - 24 Jan, 2021"
                    passage="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
                />
                <Entry 
                    img=""
                    name=""
                    place=""
                    link=""
                    date=""
                    passage=""
                />
                <Entry 
                    img=""
                    name=""
                    place=""
                    link=""
                    date=""
                    passage=""
                />   
            </main> */}
            
        </>
    )






    // return(
    //     <div className="contacts">
    //         <Contact 
    //             img="src\assets\R.jpg"
    //             name="Mr.Whiskers"
    //             phone="(212) 555-1234"
    //             mail="mr.whiska@catnap.meow"
    //         />
    //         <Contact 
    //             img="src\assets\fluffycat.jpg"
    //             name="Fluffykins"
    //             phone="(212) 555-2345"
    //             mail="fluffy@me.com"
    //         />
    //         <Contact 
    //             img="src\assets\thecat.jpg"
    //             name="Felix"
    //             phone="(212)555-4567"
    //             mail="thecat#hotmail.com"
    //         />
    //         <Contact 
    //             img="src\assets\pumpkin.jpg"
    //             name="Pumpkin"
    //             phone="(0800) CAT KING"
    //             mail="pumpkin@scrimba.com"
    //         />
    //     </div>
    // )

    // return(
    //     <main>
    //         <Jokes 
    //             setup="I got my daughter a fridge for her birthday."
    //             punchline="I can't wait to see her face light up when she opens it."/>
    //         <Jokes 
    //             setup="How did the hacker escape the police?"
    //             punchline="He just ransomware!"/>
    //         <Jokes 
    //             setup="Why don't pirates travel on mountain roads?"
    //             punchline="Scurvy."/>
    //         <Jokes 
    //             setup="Why do bees stay in the hive in the winter?"
    //             punchline="Swarm."/>
    //         <Jokes 
    //             setup="What's the best thing about Switzerland?"
    //             punchline="I don't know, but the flag is a big plus!"/>
    //     </main>
        
    // )
 

    // const jokesElements = jokesData.map((joke) => {
    //     return <jokes 
    //                 setup={joke.setup}
    //                 punchline={joke.punchline}
    //             />
    // })

    // return (
    //     <main>
    //         {jokesElements}
    //     </main>
    // )

}