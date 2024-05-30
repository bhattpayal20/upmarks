import React from "react";
import Sidebar from "../../components/AdminPannel/Sidebar";
import Progress from "../../components/AdminPannel/Progress";
import request from "../../utils/request";

export default function Pro({ points }) {
  return <Progress progress={points} />;
}

export async function getServerSideProps(context) {
  let { data } = context.query;
  data = JSON.parse(data);

  let [err, response] = await request(
    "GET",
    `/user-curriculum/progress/${data.chapterId}`,
    {},
    {},
    context.req.cookies.token
  );

  if (!err) {
    return {
      props: { points: response.data }, // will be passed to the page component as props
    };
  } else if (err) {
    return {
      props: { points: err },
    };
  }
}
