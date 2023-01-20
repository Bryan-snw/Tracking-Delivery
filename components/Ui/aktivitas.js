import classes from "./aktivitas.module.css";
import DetailAktivitas from "./detailAktivitas";

function Aktivitas(props) {
  const { aktivitas } = props;

  return (
    <div className={`card ${classes.aktivitasCard}`}>
      <ul>
        {aktivitas.map((aktv) => (
          <DetailAktivitas key={aktv.id} aktivitas={aktv} />
        ))}

        {/* <DetailAktivitas />
        <DetailAktivitas />
        <DetailAktivitas /> */}

        
      </ul>
    </div>
  );
}

export default Aktivitas;
