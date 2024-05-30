import React from "react";
import Progress from "../../components/AdminPannel/Progresstable";
import Sidebar from "../../components/AdminPannel/Sidebar";
import request from "../../utils/request";

export default function Progresstable({ chapters }) {
  return <Progress chapters={chapters} />;
}

export async function getServerSideProps(context) {
  let { classId, subjectId } = context.query;

  let [err, response] = await request(
    "GET",
    `/user-curriculum/chapter?classId=${classId}&subjectId=${subjectId}`,
    {},
    {},
    context.req.cookies.token
  );

  if (!err) {
    return {
      props: { chapters: response.data }, // will be passed to the page component as props
    };
  } else if (err) {
    return {
      props: { chapters: err },
    };
  }
}
