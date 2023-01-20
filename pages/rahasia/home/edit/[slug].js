import classes from "./editPage.module.css";
import NomorResi from "../../../../components/Ui/nomorResi";
import Aktivitas from "../../../../components/Ui/aktivitas";
import InputForm from "../../../../components/Ui/inputForm";
import { getSession } from "next-auth/react";
import { CariAll, SpesifikData } from "../../../../lib/db";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function EditPage(props) {
  const { noResi, aktivitas, data } = props;
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getSession().then((session) => {
      if (!session) {
        router.replace("/rahasia");
      } else {
        setIsLoading(false);
      }
    });
  }, [router]);

  if (isLoading) {
    return <p>Loading</p>;
  }

  return (
    <div className={classes.layout}>
      <NomorResi resi={noResi} />
      <Aktivitas aktivitas={aktivitas} />
      <InputForm stat="edit" resi={noResi} data={data[0]} />
      <button className="btnPanjang" form="form1">
        Tambahkan Aktivitas
      </button>
    </div>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const column = "*";
  const table = "resi";
  const condition = "NomorResi";
  const value = slug;
  const data = await SpesifikData(column, table, condition, value);

  const column1 = "*";
  const table1 = "aktivitas";
  const condition1 = "NomorResi";
  const value1 = slug;
  const aktivitas = await SpesifikData(column1, table1, condition1, value1);

  return {
    props: {
      noResi: slug,
      aktivitas: aktivitas,
      data: data,
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
