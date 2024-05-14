function Kart() {
  return (
    <div>
      <div className="body3">
        <h1>Lokasjon på Kart</h1>
        <div className="flex-center">
          <div className="kart">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d818.1948222460209!2d11.052642811772271!3d60.807652711322724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38996b6d61177a9%3A0xde10251bb2977844!2sWireByte!5e0!3m2!1sno!2sno!4v1715681345176!5m2!1sno!2sno"
              width="600"
              height="450"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Kart;
