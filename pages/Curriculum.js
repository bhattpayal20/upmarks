import Head from "next/head";
import About from "../components/Site/Subject-curriculum/About";
import Accordion from "../components/Site/Subject-curriculum/Accordion";
import Preview from "../components/Site/Subject-curriculum/Preview";
import PricingCard from "../components/PricingCard/PricingCard";
import Styles from "../styles/Subject-curriculum.module.css";
import { useRouter } from "next/router";
import request from "../utils/request";
import Sciencebanner from "../components/Site/Subject-curriculum/Sciencebanner";
import Image from "next/image";

function Curriculum({ curriculam }) {
  const router = useRouter();
  const { subjectId, classId, subject } = router.query;
  let { data } = router.query;
  data = JSON.parse(data);

  console.log("router query in science banner = >", data);

  console.log("in curriculam page", curriculam);

  const colors = [
    { color1: "#df335f", color2: "#e97a54" },
    { color1: "#5474ED", color2: "#1BB8FC" },
    { color1: "#8a5cd5", color2: "#c863b3" },
    { color2: "rgb(59, 183, 143)", color1: "rgb(11, 171, 100)" },
  ];
  const response = curriculam.data.map((res, index) => {
    return (res.color = colors[index % colors.length]);
  });
  console.log("color added=>", response);

  return (
    <>
      <Head>
        <title>Curriculum</title>
      </Head>
      <div>
        <Sciencebanner data={data} />
        <About subject={data.subject} />
        <Preview subject={data.subject} />
        <section className={Styles.syllabus}>
          <div className="flex w-full flex-wrap	justify-center	">
            <div className=" sm:w-full md:w-full lg:w-2/3		">
              <div className={Styles.syllabus_desc}>
                <h2 className={Styles.courseheading}>Course Content</h2>
                <p className={Styles.para}>
                  Brilliantly designed curriculum covering everything crucial.
                </p>
              </div>
              <div className={Styles.accordionDiv}>
                {curriculam.data.map((curriculum, index) => (
                  <Accordion
                    key={index}
                    colors={{
                      color1: curriculum.color.color1,
                      color2: curriculum.color.color2,
                    }}
                    curriculum={curriculum}
                  />
                ))}
              </div>
            </div>
            {/* <PricingCard
              subjectID={data.subjectId}
              bool={false}
              module={curriculam}
            /> */}
            <div>
              <Image
                src="/syllabus-removebg-preview.png"
                width={580}
                height={430}
                alt="curriculam"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export const getServerSideProps = async (context) => {
  let { data } = context.query;
  let { req, res } = context;
  const data2 = JSON.parse(data);
  let [err, curriculam] = await request(
    "GET",
    `/game/content/subject-modules?classId=${data2.classId}&subjectId=${data2.subjectId}`
  );

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=30, stale-while-revalidate=259"
  );

  if (curriculam) {
    return {
      props: { curriculam: curriculam },
    };
  }
};

export default Curriculum;
