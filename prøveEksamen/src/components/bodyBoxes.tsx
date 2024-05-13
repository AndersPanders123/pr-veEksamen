import { MdCloudDownload } from "react-icons/md";
import { IoManOutline } from "react-icons/io5";
import { IoWomanOutline } from "react-icons/io5";
import { MdOutlineSecurity } from "react-icons/md";
function BodyBoxes() {
    return (
        <div>
            <div className="row">
                <div className="box">
                    <div>
                        <div className="iconCloud">
                            <MdCloudDownload size={50}/>
                        </div>
                        <h1>
                            Administrert Deteksjon og Respons
                        </h1>
                        <p>
                            Vi tar den #1 programvaren for bruddforebygging, <br />
                            CrowdStrike, og kombinerer den med 100% amerikanske <br />
                            tjenester for trusseljakt og respons 24x7x365.
                        </p>
                        <p id="lesmer">
                            Les mer
                        </p>
                        </div>
                    </div>
                    <div className="box">
                    <div>
                        <div className="iconUser">
                            <IoManOutline size={40}/>
                        </div>
                        <h1>
                            Virutuelle CISO
                        </h1>
                        <p>
                        Vi kan fungere som din Virtuelle Informasjonssikkerhetssjef (vCISO), 
                        og bringe spesialisert cybersikkerhetsekspertise til din organisasjon,
                        designe et modent cybersikkerhetsprogram og betydelig redusere risiko.
                        </p>
                        <p id="lesmer2">
                            Les mer
                        </p>
                    </div>
                    </div>
                    <div className="box">
                    <div>
                        <div className="iconUser">
                            <IoWomanOutline size={40} />
                        </div>
                        <h1>
                            Penetrasjons Testing
                        </h1>
                        <p>
                        Vårt penetrasjonstest-team kan identifisere cybersikkerhetsårbarheter <br />
                        før en inntrenger får muligheten til å infiltrere nettverket <br />
                        eller datamaskinsystemet ditt.
                        </p>
                        <p id="lesmer3">
                            Les mer
                        </p>
                        </div>
                    </div>
                    <div className="box">
                    <div>
                        <div className="iconSecurity">
                            <MdOutlineSecurity size={40} />
                        </div>
                        <h1>
                            Cyber Sikerhet
                        </h1>
                        <p>
                            Vårt penetrasjonstest-team kan identifisere cybersikkerhetsårbarheter <br />
                            før en inntrenger får muligheten til å infiltrere nettverket <br />
                            eller datamaskinsystemet ditt.
                        </p>
                        <p id="lesmer3">
                            Les mer
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default BodyBoxes;

