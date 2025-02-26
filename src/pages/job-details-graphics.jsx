import Head from "next/head";
import Image from "next/image";
import RootLayout from "@/components/common/layout/RootLayout";
import JobDetails1 from "@/components/job/JobDetails1graphics";

const JobDetails = () => {
  return (
    <div>
      <Head>
        <title>Graphics Designer Hiring</title>
        <meta name="description" content="Job Details Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header3" footer="footer3">
          <JobDetails1 />
        </RootLayout>
      </main>
    </div>
  );
};

export default JobDetails;
