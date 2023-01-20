import Head from "next/head";
import Lacak from "../components/home/lacak";
import Bantuan from "../components/home/bantuan";

export default function Home() {
  return (
    <div className={`center`}>
      <Head>
        <title>Delivery Tracking</title>
        <meta
          name="Delivery Tracking"
          content="Track Your Delivery From Here"
        />
      </Head>
      <div className="layout">
        <Lacak />
        <Bantuan />
      </div>
    </div>
  );
}
