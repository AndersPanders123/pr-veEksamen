import ansatt1 from "/ansatt1.png";
import ansatt2 from "/ansatt2.png";
import ansatt3 from "/ansatt3.png";
import ansatt4 from "/ansatt4.png";
import ansatt5 from "/ansatt5.png";
import ansatt6 from "/ansatt6.png";

function Ansattboxer() {
  return (
    <div>
      <div className="row">
        <div className="boxAnsatt">
          <img src={ansatt1} alt="" />
          <p>Logan Sargent</p>
        </div>
        <div className="boxAnsatt">
          <img src={ansatt2} alt="" />
          <p>Gunther Steiner</p>
        </div>
        <div className="boxAnsatt">
          <img src={ansatt3} alt="" />
          <p>Lukas "Kåppang" Olsen</p>
        </div>
        <div className="boxAnsatt">
          <img src={ansatt4} alt="" />
          <p>Sheldon Cooper</p>
        </div>
        <div className="boxAnsatt">
          <img src={ansatt5} alt="" />
          <p>Gichin Funakoshi</p>
        </div>
        <div className="boxAnsatt">
          <img src={ansatt6} alt="" />
          <p>Charter Svein</p>
        </div>
      </div>
    </div>
  );
}
export default Ansattboxer;
