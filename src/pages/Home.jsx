import React, { lazy } from "react";
import { Helmet } from "react-helmet-async";

const Hero = lazy(() => import("../components/sections/Hero"));

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Future Engineer - تعلم الهندسة بشكل عملي</title>
        <meta name="description" content="منصة تعليمية متخصصة في الهندسة بجميع مجالاتها. تعلم من خلال مشاريع عملية ودورات مكثفة واحصل على شهادات معتمدة." />
        <meta property="og:title" content="Future Engineer - تعلم الهندسة بشكل عملي" />
        <meta property="og:description" content="منصة تعليمية متخصصة في الهندسة بجميع مجالاتها." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://future-engineer-project.vercel.app/" />
      </Helmet>
      
      <div className="rtl">
        <Hero />
      </div>
    </>
  );
}
