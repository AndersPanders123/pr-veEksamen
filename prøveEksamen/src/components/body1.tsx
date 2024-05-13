import { useState } from 'react';
import BodyBoxes from './bodyBoxes';

function Body1() {
    const [number, setNumber] = useState(0);

    const add1 = () => {
        setNumber(number + 1);
        console.log(number)
    }

    return (
        <div>
            <div className="body1">
                <h1>Cyber Security Services</h1>
            </div>
            <div className="body1">
                <p>
                Cyber Security Services er et amerikansk basert cybersikkerhetsselskap som leverer tjenester <br />
                og håndterer cyberrisikopå vegne av våre verdifulle distribusjons- og teknologipartnere.
                </p>
            </div>
            <div>
                <div className="flex-center">
                    <button className="Butten" type="button" onClick={add1}>Start nå</button>
                </div>
            </div>
            <div>
                <BodyBoxes />
            </div>
        </div>
    );
}

export default Body1;
