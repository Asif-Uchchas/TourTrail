import Image from "next/image";
import React from "react";

const Payment = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 xl:w-1/3 p-6 flex flex-col">
            <div className="rounded-lg h-64 overflow-hidden">
              <Image
                alt="content"
                className="object-cover object-center h-full w-full"
                src="/roadtrip.gif"
                width={700}
                height={700}
              />
            </div>
            <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
              Buy YouTube Videos
            </h2>
            <p className="leading-relaxed text-base">
              Williamsburg occupy sustainable snackwave gochujang. Pinterest
              cornhole brunch, slow-carb neutra irony.
            </p>
            <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
              Button
            </button>
          </div>
          <div className="w-full md:w-1/2 xl:w-2/3 p-6 bg-white rounded shadow">
            <h1 className="text-2xl font-bold mb-4">Payment Gateway</h1>

            <form 
              action="/payment-process"
              method="post"
              id="payment-form"
              className="w-full max-w-md mx-auto"
            >
              <div className="mb-4">
                <label
                  htmlFor="card-number"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Card Number
                </label>
                <input
                  type="text"
                  className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="card-number"
                  name="card-number"
                  placeholder="Enter card number"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="expiration-date"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Expiration Date
                </label>
                <input
                  type="text"
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="expiration-date"
                  name="expiration-date"
                  placeholder="MM/YY"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="cvv"
                  className="block text-gray-700 font-bold mb-2"
                >
                  CVV
                </label>
                <input
                  type="text"
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="cvv"
                  name="cvv"
                  placeholder="Enter CVV"
                  required
                />
              </div>

              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit Payment
              </button>
</form>

            <p className="text-gray-600 mt-4">
              Our payment gateway uses industry-standard encryption to protect
              your sensitive information and ensure that your payment is processed
              securely.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment;