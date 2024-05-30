import React from "react";
import SubjectsCard from "../../components/AdminPannel/Subjects";
import Sidebar from "../../components/AdminPannel/Sidebar";
import request from "../../utils/request";

export default function Subjects({ subjects }) {
  return <SubjectsCard subjects={subjects} />;
}
export async function getServerSideProps(context) {
  let [err, response] = await request(
    "GET",
    "/user-curriculum/user-subjects",
    {},
    {},
    context.req.cookies.token
  );

  if (!err) {
    return {
      props: { subjects: response.data }, // will be passed to the page component as props
    };
  } else if (err) {
    return {
      props: { subjects: err }, // will be passed to the page component as props
    };
  }
}
