import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
// import ServiceHero from "@/components/hero/ServiceHeroB";
import Service1 from "@/components/service/Service1-B";
import ServiceBrand from "@/components/brand/ServiceBrand";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";

const Service = () => {
  return (
    <>
      <Head>
        <title>Business Automation</title>
        <meta name="description" content="Service Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header3" footer="footer3">
          {/* <ServiceHero /> */}
          <Service1 />
          <ServiceBrand />
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </>
  );
};

export default Service;
