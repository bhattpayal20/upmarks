import React from "react";
import Styles from "../../../../styles/Home.module.css";

export default function PopularSubject() {
  return (
    <section className={`h-screen w-11/12 ${Styles.PopularSubjectSection}`}>
      <div className="p-16 flex">
        <div className="w-7/12	">
          {/* <img src="https://www.vedantu.com/cdn/vsk/images/superreaders/bubble.svg" /> */}
          <h1 className={Styles.PopularSub_head}>
            Some Of Popular Subjects We Teach
          </h1>
          <div className={Styles.FlexContainer}>
            <div>
              <div className={Styles.CardFlex}>
                <img src="EarthIcon .png" style={{ width: "9vw" }} />
              </div>
              <p className={`${Styles.CardText}`}>S.S.T</p>
            </div>

            <div>
              <div className={Styles.CardFlex}>
                <img src="Chemistry.gif" style={{ width: "9vw" }} />
              </div>
              <p className={`${Styles.CardText}`}>SCIENCE</p>
            </div>

            <div>
              <div className={Styles.CardFlex}>
                <img
                  src="https://i.gifer.com/7nvU.gif"
                  style={{ width: "9vw" }}
                />
              </div>
              <p className={`${Styles.CardText}`}>Maths</p>
            </div>

            <div>
              <div className={Styles.CardFlex}>
                <img src="english.png" style={{ width: "9vw" }} />
              </div>
              <p className={`${Styles.CardText}`}>English</p>
            </div>

            <div>
              <div className={Styles.CardFlex}>
                <img src="hindi.png" style={{ width: "9vw" }} />
              </div>
              <p className={`${Styles.CardText}`}>Hindi</p>
            </div>

            <div>
              <div className={Styles.CardFlex}>
                <img
                  src="https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg?t=st=1651570175~exp=1651570775~hmac=78f59f00e0bf566b81d9ef26a13ba88a779c79733b7cbad5f837dc87ed0e82d1&w=740"
                  style={{ width: "9vw" }}
                />
              </div>
              <p className={`${Styles.CardText}`}> C S</p>
            </div>

            {/* <div className={Styles.CardFlex}></div> */}
          </div>
        </div>
        <div>
          <img
            src="boy-study.png"
            className={Styles.PopularSubjectImage}
          />
        </div>
      </div>
    </section>
  );
}
