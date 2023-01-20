import classes from "./status.module.css";

export default function Status(props) {
  const { stat } = props;

  function check() {
    if (stat[0].StatusPengiriman === "Selesai") {
      document.getElementById("statusDiv").style.backgroundColor = "#3B9D4B";
    }
  }

  const run = setTimeout(check, 10);

  return (
    <div id="statusDiv" className={`card ${classes.statusCard}`}>
      <h3 className={classes.status}>{stat[0].StatusPengiriman}</h3>
    </div>
  );
}
