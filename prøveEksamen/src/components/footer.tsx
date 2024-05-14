import logo from "/logo.png";

function Footer() {
  return (
    <div>
      <div className="footer">
        <div>
          <img src={logo} alt="" />
          <p id="footertxt">
            En ledende leverandør av cybersikkerhetstjenester <br /> og
            løsninger for distribusjon og teknologipartnere <br /> rundt om i
            USA.
          </p>
        </div>

        <div className="KontaktOss">
          <h2>Kontakt oss</h2>
          <p>
            Adresse: Oslo gate 1, 0250 Oslo
            <br />
            Telefon: 12345678
            <br />
            E-post:
          </p>
        </div>
        <div className="FølgOss">
          <h2>Følg oss</h2>
          <p>
            Twitter <br />
            Facebook <br />
            Instagram <br />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
