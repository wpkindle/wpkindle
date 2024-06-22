import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import Modal from "../../components/modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart } from "../../redux/cartSlice";
import { toast } from "react-toastify";
import { addDoc, collection } from "firebase/firestore";
import { fireDB } from "../../firebase/FirebaseConfig";
import axios from "axios";
import { Link } from "react-router-dom";

function Cart() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart);
  console.log(cartItems);

  const deleteCart = (item) => {
    dispatch(deleteFromCart(item));
    toast.success("Deleted from cart");
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    let temp = 0;
    cartItems.forEach((cartItem) => {
      temp += parseInt(cartItem.price);
    });
    setTotalAmount(temp);
    console.log(temp);
  }, [cartItems]);

  const grandTotal = totalAmount;

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const buyNow = async () => {
    if (name === "" || address === "" || email === "" || phoneNumber === "") {
      return toast.error("All fields are required", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }

    const addressInfo = {
      name,
      address,
      email,
      phoneNumber,
      date: new Date().toLocaleString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }),
    };

    try {
      // Step 1: Authentication to get a token
      const authResponse = await axios.post(
        "https://pakistan.paymob.com/api/auth/tokens",
        {
          api_key: import.meta.env.VITE_REACT_APP_PAYMOB_API,
        }
      );
      const token = authResponse.data.token;

      // Step 2: Create an order
      const orderResponse = await axios.post(
        "https://pakistan.paymob.com/api/ecommerce/orders",
        {
          auth_token: token,
          delivery_needed: "false",
          amount_cents: grandTotal,
          currency: "USD",
          items: cartItems.map((item) => ({
            name: item.title,
            amount_cents: item.price,
            quantity: 1,
          })),
        }
      );

      const { id: orderId } = orderResponse.data;

      // Step 3: Get payment token
      const paymentKeyResponse = await axios.post(
        "https://pakistan.paymob.com/api/acceptance/payment_keys",
        {
          auth_token: token,
          amount_cents: grandTotal,
          expiration: 3600,
          order_id: orderId,
          billing_data: {
            first_name: name,
            last_name: name,
            address: address,
            phone_number: phoneNumber,
            email: JSON.parse(localStorage.getItem("user")).user.email,
          },
          currency: "USD",
          integration_id: import.meta.env.VITE_REACT_APP_PAYMOB_INTEGRATION_ID,
        }
      );

      const { token: paymentKey } = paymentKeyResponse.data;

      // Step 4: Open payment page
      const payResponse = await axios.post(
        "https://pakistan.paymob.com/api/acceptance/post_pay",
        {
          source: {
            identifier: "card", // Example for card payment
            subtype: "CARD",
          },
          payment_token: paymentKey,
        }
      );

      const paymentId = payResponse.data.id;

      toast.success("Payment Successful");

      const orderInfo = {
        cartItems,
        addressInfo,
        date: new Date().toLocaleString("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        }),
        email: JSON.parse(localStorage.getItem("user")).user.email,
        userid: JSON.parse(localStorage.getItem("user")).user.uid,
        paymentId,
      };

      try {
        const orderRef = collection(fireDB, "order");
        await addDoc(orderRef, orderInfo);
      } catch (error) {
        console.log(error);
        toast.error("Failed to save order in database");
      }
    } catch (error) {
      console.log(error);
      toast.error("Payment failed");
    }
  };

  return (
    <Layout>
      <div className="h-screen bg-gray-100 pt-5 mb-[60%]">
        <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div className="rounded-lg md:w-2/3">
            {cartItems.map((item, index) => {
              const { category, title, price, imageUrl } = item;
              return (
                <div
                  key={index}
                  className="justify-between mb-6 rounded-lg border drop-shadow-xl bg-white p-6 sm:flex sm:justify-start"
                >
                  <img
                    src={imageUrl}
                    alt="product-image"
                    className="w-full rounded-lg sm:w-20"
                  />
                  <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                    <div className="mt-5 sm:mt-0">
                      <Link to={"/"} className="text-green-600 text-sm">
                        Category: {category}
                      </Link>
                      <h2 className="text-lg font-bold text-gray-900">
                        {title}
                      </h2>
                      <p className="mt-1 text-xs font-semibold text-gray-700">
                        Price: ${price}
                      </p>
                    </div>
                    <div
                      onClick={() => deleteCart(item)}
                      className="cursor-pointer mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
            <div className="mb-2 flex justify-between">
              <p className="text-gray-700">Subtotal</p>
              <p className="text-gray-700">${totalAmount}</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between mb-3">
              <p className="text-lg font-bold">Total</p>
              <div>
                <p className="mb-1 text-lg font-bold">${grandTotal}</p>
              </div>
            </div>
            <Modal
              name={name}
              address={address}
              email={email}
              phoneNumber={phoneNumber}
              setName={setName}
              setAddress={setAddress}
              setEmail={setEmail}
              setPhoneNumber={setPhoneNumber}
              buyNow={buyNow}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Cart;
