import React, { useContext } from "react";
import {
  HiOutlineAcademicCap,
  HiPencilAlt,
  HiOutlineTrash,
} from "react-icons/hi";
import Image from "next/image";
import Deletephoto from "./Deletephoto";
import Profilemodal from "./Profilemodal";
import { UserContext } from "../../providers/userContext";

export default function Profilecard() {
  let [user] = useContext(UserContext);
  const [open, setOpen] = React.useState(false);
  const [deletephoto, setDeletephoto] = React.useState(false);

  function modalOpen() {
    setOpen(!open);
  }

  return (
    <>
      {open ? <Profilemodal modalOpen={modalOpen} /> : ""}
      {deletephoto && <Deletephoto open={() => setDeletephoto(!deletephoto)} />}
      <div className="shadow-lg rounded-2xl sm:w-full md:w-[87%] lg:w-[90%] xl:w-[17rem] h-[62%] sm:h-[56%] md:h-[56%] lg:h-1/2 xl:h-[19.75rem] bg-white  mx-auto md:mx-0 lg:mx-0 xl:mx-auto">
        <div className="flex flex-col items-center justify-center p-10 sm:p-6 md:p-6 lg:p-6 xl:p-10">
          <div className="-mt-[265px] ml-[196px] sm:-mt-[240px] sm:ml-[37%] md:-mt-[242px] md:ml-[13rem] lg:-mt-[243px] lg:ml-[13rem] xl:ml-[227px] xl:-mt-[262px] absolute">
            <HiOutlineTrash
              size="28"
              color="gray"
              className="cursor-pointer"
              onClick={() => setDeletephoto(!deletephoto)}
            />
          </div>
          <a href="#" className="block relative">
            <Image
              alt="profile"
              src={user.imageUrl ? user.imageUrl : "/avatar.jpg"}
              // src="https://upmarks-bucket.s3.ap-south-1.amazonaws.com/user/1657280628434jacob-noble-img-1675-01.jpg"
              width={120}
              height={120}
              className="mx-auto object-cover rounded-full h-28 w-28 "
            />
          </a>
          <div className="-mt-[216px] ml-[62px] absolute rounded-full bg-white p-1 ">
            <HiPencilAlt
              size="35"
              color="blue"
              onClick={modalOpen}
              className="cursor-pointer"
            />
          </div>
          <p className="text-gray-800  text-3xl font-medium mt-4">
            {user.name}
          </p>

          <div className=" mt-3 rounded-full flex items-center justify-center bg-[#515edf] p-1 w-full">
            <div className="p-1">
              <HiOutlineAcademicCap color="white" size="30" />
            </div>
            <div className="p-1">
              <p
                className="text-xl tracking-wide text-center text-white"
                style={{ fontFamily: "cursive" }}
              >
                Class - {user.class}th
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
