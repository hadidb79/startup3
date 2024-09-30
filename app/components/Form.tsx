"use client";
import { useDispatch, useSelector } from "react-redux";
import { addUser, State } from "../lib/userSlice";
import { useState } from "react";
import Tick from "../video/7efs.gif";
import Loading from "../video/Rolling@1x-1.0s-200px-200px.gif";
import Image from "next/image";
import Link from "next/link";
const Form = () => {
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const { name, email, isVerified, password }: State = useSelector(
    (state: any) => state.user
  );
  const user: State = useSelector((state: any) => state.user);
  function handleSubmit(event: any) {
    event.preventDefault();

    if (name && email && password) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        dispatch(addUser({ ...user, isVerified: true }));
      }, 1500);
    }
    console.log(isLoading);
  }
  function handleChange(e: any) {
    dispatch(addUser({ ...user, [e.target.name]: e.target.value }));
  }
  return (
    <>
      <div
        style={{
          width: "75%",
          height: "90%",
          borderRadius: "15px",
          backgroundColor: "white",
          margin: "0 auto",
          color: "black",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          position: "relative",
        }}
      >
        {isLoading ? (
          <span style={{ margin: "0 auto" }}>
            <Image
              style={{ width: "50%", height: "50%" }}
              src={Loading}
              alt="loading "
            />
          </span>
        ) : isVerified && name && email && password ? (
          <div>
            <div>
              <span style={{ margin: "0 auto" }}>
                Your Account successfully created
                <Image
                  style={{ width: "50%", height: "50%" }}
                  src={Tick}
                  alt=""
                />
              </span>
            </div>
            <button
              style={{
                backgroundColor: "transparent",
                border: "none",
                position: "absolute",
                bottom: 10,
                right: 10,
              }}
            >
              <Link
                style={{
                  backgroundColor: "transparent",
                  textDecoration: "none",
                  padding: "5px 10px",
                }}
                href="/"
              >
                Return To Home
              </Link>
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            style={{
              color: "black",
              textAlign: "center",
            }}
          >
            <div
              style={{
                marginTop: "-50px",
                borderBottom: "2px solid #1E0E62",
                padding: "20px",
              }}
            >
              <span
                style={{
                  fontSize: "16px",
                  letterSpacing: "2px",
                  color: "#1E0E62",
                }}
              >
                SIGN UP
              </span>
            </div>
            <input
              onChange={handleChange}
              style={{
                padding: "12px",
                borderRadius: "25px",
                width: "80%",
                marginTop: "50px",
                border: "1px solid rgb(171, 165, 165)",
              }}
              type="text"
              placeholder="Your name"
              name="name"
            />

            <input
              onChange={handleChange}
              style={{
                padding: "12px",
                borderRadius: "25px",
                width: "80%",
                marginTop: "50px",
                border: "1px solid rgb(171, 165, 165)",
              }}
              type="text"
              placeholder="Your email"
              name="email"
            />
            <input
              onChange={handleChange}
              style={{
                padding: "12px",
                borderRadius: "25px",
                width: "80%",
                marginTop: "50px",
                border: "1px solid rgb(171, 165, 165)",
              }}
              type="text"
              placeholder="Your password"
              name="password"
            />
            <button
              type="submit"
              style={{
                padding: "10px 30px",
                borderRadius: "25px",
                backgroundColor: "#25DAC5",
                borderColor: "transparent",
                marginTop: "30px",
                color: "white",
              }}
            >
              Create Your Account
            </button>
          </form>
        )}
      </div>
    </>
  );
};

export default Form;
