import { serialize } from "cookie";
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  console.log("query", req.query, typeof req.query.modules);

  console.log(JSON.parse(req.query.modules));

  res.setHeader("Set-Cookie", [
    serialize("token", req.query.token, { path: "/" }),
    serialize("subjectId", req.query.subjectId, { path: "/" }),
    serialize("modules", req.query.modules, { path: "/" }),
  ]);

  res.redirect(302, `http://192.168.1.37:3000/Admin/Checkout`);
}
