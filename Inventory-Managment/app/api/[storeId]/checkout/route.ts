import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";
import { Cashfree } from "cashfree-pg";
import * as assert from "assert";
import { create } from "domain";
import { link } from "fs";

Cashfree.XClientId = process.env.CASHFREE_APP_ID;
Cashfree.XClientSecret = process.env.CASHFREE_SECRET_KEY;
Cashfree.XEnvironment = Cashfree.Environment.SANDBOX;

const corsHeaders = {
  "Access-Control-Allow-Origin": "https://shamansilverstore.in",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization",
};

export async function OPTIONS() {
  return NextResponse.json({}, {
    headers: {
      ...corsHeaders,
      "Access-Control-Allow-Origin": "https://shamansilverstore.in"
    }
  });
}

export async function POST(
  req: Request,
  { params }: { params: { storeId: string } }) {
  if (!req) {
    console.log("Request object is undefined"); // New console.log statement
    return new NextResponse("Bad Request", { status: 400 });
  }

  const { productIds, orderData, totalPrice } = await req.json();

  if (!productIds || productIds.length === 0) {
    return new NextResponse("Product ids are required", { status: 400 });
  }

  // Combine all the address fields into a single string
  const address = `${orderData.firstName}, ${orderData.lastName}, ${orderData.floor}, ${orderData.buildingName}, ${orderData.streetAddress}, ${orderData.city}, ${orderData.state}, ${orderData.pincode}`;


  const products = await prismadb.product.findMany({
    where: {
      id: {
        in: productIds
      }
    }
  });


  const order = await prismadb.order.create({
    data: {
      storeId: params.storeId,
      isPaid: false,
      totalPrice: totalPrice,
      phone: orderData.phone, // Include the phone number
      address: address,
      orderItems: {
        create: productIds.map((productId: string) => ({
          product: {
            connect: {
              id: productId
            }
          }
        }))
      }
    }
  });

  async function createOrder(): Promise<string> {
    var request = {
      "order_amount": totalPrice,
      "order_currency": "INR",
      "customer_details": {
        "customer_id": "iij",
        "customer_name": "abcd",
        "customer_email": "success@eligibility.com",
        "customer_phone": "9999999999"
      },

      "order_note": "Test order",
      "order_tags": {
        "abc": "def"
      }
    }

    function getCurrentTimeStamp() {
      return new Date().getTime();
    }

    async function createLink(): Promise<string> {
      var link_id = "Automated_Test_" + getCurrentTimeStamp()
      var request = {
        customer_details: { customer_phone: '9999999999' },
        link_id: link_id,
        link_amount: 100,
        link_currency: 'INR',
        link_purpose: 'Payment',
        payment_methods: '',
        link_notify: {
          send_sms: false,
          send_email: true
        },
      }
      return Cashfree.PGCreateLink("2022-09-01", request).then((response) => {
        return response.data.link_url as string;
      }).catch((error) => {
        console.log(error);
        return "Something Went Wrong - CashFree";
      });
    };
    return await createLink();
  };

  const linkUrl: string = await createOrder();
  if (linkUrl === "Something Went Wrong") {
    return new NextResponse("Something Went Wrong", { status: 400 });
  }
  console.log(linkUrl);

  return new NextResponse(JSON.stringify({ linkUrl: linkUrl }), {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "https://shamansilverstore.in",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    }
  });


}