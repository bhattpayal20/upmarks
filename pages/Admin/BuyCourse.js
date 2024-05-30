import React from "react";
import Test from "../../components/AdminPannel/Test";
import request from "../../utils/request";
export default function BuyCourse({ subject }) {
  return <Test bool={true} subject={subject} />;
}
// export default async function getServerSideProps (context){

// }
export async function getServerSideProps(context) {
  let [err, response] = await request(
    "GET",
    `/game/curriculum/get-subject/?id=${context.query.id}`,
    {},
    {},
    context.req.cookies.token
  );

  console.log("resp", response);
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
