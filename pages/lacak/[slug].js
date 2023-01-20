import classes from "./index.module.css";
import Aktivitas from "../../components/Ui/aktivitas";
import NomorResi from "../../components/Ui/nomorResi";
import StatusPengiriman from "../../components/Ui/statusPengiriman";
import Status from "../../components/Ui/status";
import { CariAll, SpesifikData } from "../../lib/db";

function Lacak(props) {
  const { resi, stat, aktivitas } = props;

  return (
    <div className={classes.layout}>
      <StatusPengiriman />
      <Status stat={stat} />
      <NomorResi resi={resi} />
      <Aktivitas aktivitas={aktivitas} />
    </div>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const column = "StatusPengiriman";
  const table = "resi";
  const condition = "NomorResi";
  const value = slug;
  const stat = await SpesifikData(column, table, condition, value);

  const column1 = "*";
  const table1 = "aktivitas";
  const condition1 = "NomorResi";
  const value1 = slug;
  const aktivitas = await SpesifikData(column1, table1, condition1, value1);

  return {
    props: {
      resi: slug,
      stat: stat,
      aktivitas: aktivitas,
    },
    revalidate: 600,
  };
}

export async function getStaticPaths() {
  const column = "NomorResi";
  const table = "aktivitas";

  const slugs = await CariAll(column, table);

  // [{params: {slug: slug}},{params: {slug: slug}}]
  const params = slugs.map((slug) => ({ params: { slug: slug.NomorResi } }));
  return {
    paths: params,

    fallback: false,
  };
}

export default Lacak;
