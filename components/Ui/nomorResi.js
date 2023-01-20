import classes from './nomorResi.module.css';

export default function NomorResi(props){
  const { resi } = props;

  return(
    <div className={`card ${classes.resiCard}`}>
    <h3 className={classes.resi}>Nomor Resi {resi}</h3>
  </div>
  )
}