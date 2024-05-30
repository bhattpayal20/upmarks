import React from "react";
import CheckoutComponent from "../../components/AdminPannel/checkout/index";
import { getCookie, getCookies } from "cookies-next";
import { string } from "yup";
import Head from "next/head";
import Script from "next/script";
import request from "../../utils/request";
import * as cookie from "cookie";
import { UserContext } from "../../providers/userContext";
import { useContext } from "react";
import cookieCutter from "cookie-cutter";

export default function Checkout({ PurchaseMod }) {
  const [user] = useContext(UserContext);
  const price =
    PurchaseMod &&
    PurchaseMod.data.reduce((previousValue, currentValue) => {
      return previousValue + currentValue.price;
    }, 0);

  const initiatePayment = async () => {
    let mod = cookieCutter.get("modules");
    mod = JSON.parse(mod);
    let subjectId = cookieCutter.get("subjectId");
    let TxnToken;
    let module = mod;
    let amount = price;
    let oid = Math.floor(Math.random() * Date.now());
    // get transaction token
    const data = { modulePurchased: module, amount, orderId: oid, subjectId };
    // let [err, response] = await request("POST", "/pretransaction", { data });
    let [err, response] = await request(
      "POST",
      "/user-curriculum/purchase-initiate",
      data
    );

    var config = {
      root: "",
      flow: "DEFAULT",
      data: {
        orderId: oid /* update order id */,
        token: response.data.txnToken,
        tokenType: "TXN_TOKEN",
        amount: amount,
      },
      handler: {
        notifyMerchant: function (eventName, data) {
          console.log("notifyMerchant handler function called");
          console.log("eventName => ", eventName);
          console.log("data => ", data);
        },
      },
    };

    // initialze configuration using init method
    window.Paytm.CheckoutJS.init(config)
      .then(function onSuccess() {
        // after successfully updating configuration, invoke JS Checkout
        window.Paytm.CheckoutJS.invoke();
      })
      .catch(function onError(error) {
        console.log("error => ", error);
      });
  };

  // console.log("mid", process.env.PAYTM_MID);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0"
        />
      </Head>
      {/* <Script
        type="application/javascript"
        crossorigin="anonymous"
        src="{HOST}/merchantpgpui/checkoutjs/merchants/{MID}.js"
        onload="onScriptLoad();"
      /> */}
      <Script
        type="application/javascript"
        crossorigin="anonynous"
        src={`https://securegw.paytm.in/merchantpgpui/checkoutjs/merchants/gyUwfU68415247581987.js`}
      />

      <CheckoutComponent
        price={price}
        PurchaseMod={PurchaseMod}
        paymentInitiate={initiatePayment}
      />
    </>
  );
}
export async function getServerSideProps(context) {
  const { token, modules, subjectId } = context.req.headers.cookie;

  const parsedCookies = cookie.parse(context.req.headers.cookie);
  let parsedMod = parsedCookies.modules;

  console.log("in checkoout ", parsedMod);

  let [err, response] = await request(
    "GET",
    `/user-curriculum/modules-pricing?subjectId=${parsedCookies.subjectId}&module=${parsedMod}`,
    {},
    {},
    parsedCookies.token
  );
  console.log("in checkout response", response);
  return {
    props: { PurchaseMod: response },
  };

  // and if you use fetch, you can manually attach cookie like this
}
