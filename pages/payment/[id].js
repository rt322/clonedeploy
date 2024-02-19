import axios from "axios";
import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect, useCallback } from "react";

const Payment = () => {
  const router = useRouter();

  const makepayment = useCallback(async () => {
    const val = {
      id: router.query?.id,
    };

    const { data } = await axios.post(`/api/razorpay`, val);
    console.log(data);

    const options = {
      key: process.env.RAZORPAY_KEY,
      name: "Richa",
      currency: data.currency,
      amount: data.amount,
      order_id: data.id,
      description: "THANKS!",
      handler: function (response) {},
      prefill: {
        name: "Richa",
        email: "richathakurlive322@gmail.com",
        contact: 9876591796,
      },
    };

    const paymentobj = new window.Razorpay(options);
    paymentobj.open();
  }, [router.query?.id]);

  useEffect(() => {
    makepayment();
  }, [makepayment]);

  return (
    <>
      <Script src="http://checkout.razorpay.com/v1/checkout.js" />
    </>
  );
};

export default Payment;
