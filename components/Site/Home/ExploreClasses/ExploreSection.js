import React from "react";
import ClassesCard from "./ClassesCard";
import classStyle from "../../../styles/Home.module.css";
export default function ExploreSection() {
  return (
    <section className={`py-8 ${classStyle.ExploreClasses}`}>
      <div className="flex">
        <div style={{ width: "39vw" }} className={classStyle.ExploreClassesDiv}>
          <img src="https://threejs-journey.com/assets/images/illustration-pyramid.png" />

          <div style={{ padding: "34px" }}>
            <h6 className="text-5xl font-medium	 ">
              Explore <span className="text-bluee">Classees</span>
            </h6>
            <div className="py-4">
              <div className="py-4">
                <div className="flex justify-around	 items-center py-2	">
                  <div className={classStyle.imglogo}>
                    <img src="todo.gif" className={classStyle.img} />
                  </div>

                  <p>Explore our classees take a free demo classees.</p>
                </div>
                <div className="flex justify-around	 items-center py-2	">
                  <div className={classStyle.imglogo}>
                    <img src="goal.gif" className={classStyle.img} />
                  </div>

                  <p>Explore our classees take a free demo classees.</p>
                </div>
                <div className="flex justify-around	 items-center py-2	">
                  <div className={classStyle.imglogo}>
                    <img src="iconsRocket.gif" className={classStyle.img} />
                  </div>

                  <p>Explore our classees take a free demo classees.</p>
                </div>
                <div className="flex justify-around	 items-center py-2	">
                  <div className={classStyle.imglogo}>
                    <img src="graduate.png" className={classStyle.img} />
                  </div>

                  <p>Explore our classees take a free demo classees.</p>
                </div>
                <div className="flex justify-around	 items-center py-2	">
                  <div className={classStyle.imglogo}>
                    <img src="coin.gif" className={classStyle.img} />
                  </div>

                  <p>Explore our classees take a free demo classees.</p>
                </div>
                <div className="flex justify-around	 items-center py-2	">
                  <div className={classStyle.imglogo}>
                    <img src="notebook.gif" className={classStyle.img} />
                  </div>

                  <p>Explore our classees take a free demo classees.</p>
                </div>
              </div>
            </div>
            <button className={`  ${classStyle.btn_grad}`}>
              Book a Free demo Class
            </button>
          </div>
        </div>

        <div className="justify-center">
          <div className="px-4 p-4 flex">
            <ClassesCard color={"linear-gradient(99deg, #599CF2, #7BB1F5)"} />
            <ClassesCard color={"linear-gradient(99deg, #E760A8, #F06CBB)"} />
          </div>
          <div className="flex px-4 ">
            <ClassesCard color={"linear-gradient(99deg, #F9C845, #FBD75B)"} />
            <ClassesCard
              color={"linear-gradient(315deg, #3bb78f 0%, #0bab64 74%)"}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
