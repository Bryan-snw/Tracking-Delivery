import InputForm from "../../../components/Ui/inputForm";
import NomorResi from "../../../components/Ui/nomorResi";
import classes from "./baru.module.css";
import { getSession } from "next-auth/react";

export default function ResiBaru(props) {
  const { noResi } = props;

  return (
    <div className={classes.layout}>
      <NomorResi resi={noResi} />
      <InputForm stat="baru" resi={noResi} />
      <button type="submit" form="form1" className="btnPanjang">
        Buat Nomor Resi
      </button>
    </div>
  );
}

export async function getServerSideProps(context) {
  const date = new Date();
  const nomor = `${date.getDate()}${
    date.getMonth() + 1
  }${date.getFullYear()}${date.getHours()}${date.getMinutes()}${date.getMilliseconds()}`;

  const resi = `NP${nomor}`;

  console.log(resi);

  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      props: {},
      redirect: {
        destination: "/rahasia",
        permanent: false,
      },
    };
  }

  return {
    props: { noResi: resi },
  };
}
