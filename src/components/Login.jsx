import React, { useState, useEffect } from "react";
import db from "../utils/database";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { Input, Space, Checkbox, Card, Spin, message, Button } from "antd";
import login_img from "../images/login_img.png";
import {
  UserOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
  LockOutlined,
} from "@ant-design/icons";

const Login = () => {
  const [state, setState] = useState({
    user_name: "",
    password: "",
  });
  const [remembered, setRemembered] = useState(true);
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const [islogin, setLogin] = useState(true);

  const inputEvent = (event) => {
    const { name, value } = event.target;
    setState((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("submitted", state);
    if (!islogin) {
      createUserWithEmailAndPassword(getAuth(), state.user_name, state.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("user Registered :", user);
          setLoading(false);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setLoading(false);
          alert(errorMessage.split(":")[1].split("(")[0]);
          console.log("not Registered : ", error);
          // ..
        });
    } else {
      signInWithEmailAndPassword(getAuth(), state.user_name, state.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("user Login :", user);
          setLoading(false);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("not Login : ", errorMessage);
          setLoading(false);
          // ..
        });
    }
    // try {
    //   const data = {
    //     user_name: state.user_name,
    //     password: state.password,
    //   };
    //   setLoading(false);
    //   //   const res = await adminLogin(data);
    //   //   console.log(res);
    //   //   message.success(res.data.message);
    //   //   localStorage.setItem("token", res.data.token);
    //   //   console.log("token:", res.data.token);
    //   //   setUserLoginedDetails(res.data.user);
    //   //   history.push("/admin/dashboard");
    // } catch (error) {
    //   console.log(error.response.data.message);
    //   swal("failed", error.response.data.message, "error");
    //   setLoading(false);
    // }
  };
  return (
    <div className=" w-100 d-flex flex-column justify-content-center h-100">
      <Card
        hoverable
        style={{
          width: "450px",
          border: "none",
          background: "linear-gradient(to bottom right,cyan,violet)",
        }}
        bodyStyle={{
          padding: "1px",
        }}
        className=" rounded text-center  mx-auto my-5 p-0"
      >
        <form onSubmit={loginHandler} className="rounded">
          <h2 className="text-center my-2">
            <strong className="text-dark">
              {islogin ? "Login Form" : "Register Now"}
            </strong>
          </h2>
          <hr className="bg-info" />
          <img
            src={login_img}
            className="img-fluid"
            width="100%"
            alt="..."
          ></img>
          <div className="py-3">
            {" "}
            <Spin
              size="large"
              tip="Please Wait..."
              spinning={loading ? true : false}
            >
              <Space direction="vertical" style={{ minWidth: "80%" }}>
                <div style={{ textAlign: "start" }}>
                  <h6>
                    <b>Email Id: </b>
                  </h6>{" "}
                  <Input
                    size="large"
                    placeholder="Enter Email Id "
                    name="user_name"
                    onChange={inputEvent}
                    value={state.user_name}
                    prefix={<UserOutlined />}
                    required
                  />
                </div>
                <div style={{ textAlign: "start" }}>
                  <h6>
                    <b>Password :</b>
                  </h6>{" "}
                  <Input.Password
                    placeholder="Enter password"
                    onChange={inputEvent}
                    value={state.password}
                    name="password"
                    size="large"
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    iconRender={(visible) =>
                      visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                    }
                  />
                </div>
                {islogin && (
                  <Checkbox
                    onChange={() => {
                      setRemembered(!remembered);
                    }}
                    className="text-start w-100"
                    defaultChecked={true}
                  >
                    remember me{" "}
                  </Checkbox>
                )}
                <Button
                  type="primary"
                  htmlType="submit"
                  size="large"
                  className="w-100 "
                >
                  {islogin ? <b> LOGIN</b> : <b> Register</b>}
                </Button>
                <div className=" d-flex text-primary w-100  justify-content-between">
                  <Link to="#" className="forget-container">
                    Forgot password
                  </Link>
                  <Button
                    type="link"
                    className="forget-container"
                    onClick={() => {
                      setLogin(!islogin);
                    }}
                  >
                    {islogin ? (
                      <>
                        <span className="text-dark">Or </span> "register now!"
                      </>
                    ) : (
                      "Back"
                    )}
                  </Button>
                </div>
              </Space>
            </Spin>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default Login;
