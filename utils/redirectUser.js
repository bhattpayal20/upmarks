import Router from "next/router";

export function redirectUser(ctx, location) {
  // console.log("req", ctx.req);
  if (ctx.req) {
    ctx.res.writeHead(302, { Location: location });
    ctx.res.end();
  } else {
    Router.push(location);
  }
}
