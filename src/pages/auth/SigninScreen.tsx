import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signinApi, verifyApi } from "../../apis/authApi";
import { useDispatch } from "react-redux";
import { mainUser } from "../../global/globalState";


const SigninScreen = () => {
  const navigate = useNavigate();
  const { token }: any = useParams()
  const motionVariant = {
    load: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
    notLoad: { opacity: 0, y: "-100px" },
  };

  const AuthSchema = yup.object({
    email: yup.string().required(),
    password: yup.string().required(),
  });

  const { register, formState: { errors }, handleSubmit } = useForm({
    resolver: yupResolver(AuthSchema),
  });

  const dispatch = useDispatch()
  const onHandleSubmit = handleSubmit(async (data: any) => {
    const { email, password } = data;
    signinApi({ email, password }).then((res) => {
      dispatch(mainUser(res))
      navigate("/auth");
      console.log("This is res:", res);

    });
  });

  useEffect(() => {
    if (token) {
      verifyApi(token!)
    }
  }, [])

  return (
    <div className="w-full  flex justify-center h-screen items-center bg-[#F5F2EB]">
      <motion.form
        onSubmit={onHandleSubmit}
        variants={motionVariant}
        initial="notLoad"
        animate="load"
        className="  max-md:w-[85%] md:w-[550px] h-auto rounded-xl bg-white  flex flex-col items-center "
      >
        <div className="my-4 text-2xl font-black">Signin</div>
        <div className="w-[85%]">
          <label
            htmlFor="Email"
            className="relative mt-4 w-full h-[45px] block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
          >
            <input
              type="text"
              {...register("email")}
              className="peer w-full pl-3 h-full border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
              placeholder="Email"
            />

            <span
              className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
            >
              EmailAddress
            </span>
          </label>
          {errors?.email?.message && <div className="w-full flex justify-end text-[14px] text-[red]">Input username</div>}
        </div>
        <div className="w-[85%]">
          <label
            htmlFor="Password"
            className="relative mt-4 w-full h-[45px] block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
          >
            <input
              type="text"
              {...register("password")}
              className="peer w-full pl-3 h-full border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
              placeholder="Password"
            />

            <span
              className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
            >
              Password
            </span>
          </label>
          {errors?.password?.message && <div className="w-full flex justify-end text-[14px] text-[red]">Input username</div>}
        </div>
        <div className="w-[85%] my-2 flex items-center justify-end text-[15px]">Don't have an account?
          <Link to="/register">
            <span className="ml-2 text-red-400">Signup</span>
          </Link></div>
        <button className="w-[85%] py-3 my-3 rounded-md bg-blue-400 text-white">Signup</button>
      </motion.form>
    </div>
  );
};

export default SigninScreen;
