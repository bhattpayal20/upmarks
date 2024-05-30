import React from "react";
import Curriculam from "../../components/AdminPannel/curriculam";
import request from "../../utils/request";

export default function Chapter({ SubCurriculum }) {
  return <Curriculam Chapter={SubCurriculum} />;
}
export async function getServerSideProps(context) {
  let { data } = context.query;

  data = JSON.parse(data);

  let [err, response] = await request(
    "GET",
    `/user-curriculum/subject-modules?classId=${data.classId}&subjectId=${data.subjectId}`,
    {},
    {},
    context.req.cookies.token
  );

  if (!err) {
    return {
      props: { SubCurriculum: response.data }, // will be passed to the page component as props
    };
  } else if (err) {
    return {
      props: { SubCurriculum: err }, // will be passed to the page component as props
    };
  }
}
