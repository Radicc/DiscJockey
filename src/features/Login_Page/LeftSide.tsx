import css from "./leftSide.module.css";
import DiskJockeyQR from "../../assets/My_Instagram_QR_Code (2).png";

const Left_Side = () => {
  return (
    <div className={css.leftPage}>
      <div className={css.titleContainer}>
        <h1 className={css.disc}>Disc</h1>
        <h1 className={css.jockey}>Jockey</h1>
      </div>

      <div className={css.sloganQRContaienr}>
        <img className={css.discJockeyLogo} src={DiskJockeyQR} />
        <p className={css.slogan}>
          Scan, Pay, and Play:
          <br /> The Future of Music Requests!
        </p>
      </div>
    </div>
  );
};

export default Left_Side;
