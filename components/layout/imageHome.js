import Image from "next/image";
import classes from "./imageHome.module.css";

function ImageHome() {
  return (
    <div className={`center ${classes.layout}`}>
      <Image
        className={classes.imgHome}
        src="/images/home.png"
        alt="Foto"
        width={1200}
        height={650}
        quality={100}
      />
    </div>
  );
}

export default ImageHome;
