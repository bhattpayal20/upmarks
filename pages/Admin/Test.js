import React from "react";
import Test from "../../components/AdminPannel/Test";
import Sidebar from "../../components/AdminPannel/Sidebar";
import request from "../../utils/request";

export default function Chapter({ subject }) {
  return <Test bool={false} subject={subject} />;
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
      props: { subject: response.data }, // will be passed to the page component as props
    };
  } else if (err) {
    return {
      props: { subject: err }, // will be passed to the page component as props
    };
  }
}
