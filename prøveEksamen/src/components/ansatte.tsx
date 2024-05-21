import Ansattboxer from "./ansattBoxes";
function Annsatte() {
  console.log("Ansatte");
  return (
    <div>
      <div className="body1">
        <h1>Våres Ansatte</h1>
      </div>
      <div>
        <Ansattboxer />
      </div>
    </div>
  );
}

export default Annsatte;
