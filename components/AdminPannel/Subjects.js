import React, { useEffect, useState, useContext } from "react";
import styles from "../../styles/AdminPannel/Subject.module.css";
import { useRouter } from "next/router";
import Image from "next/image";
import request from "../../utils/request";
import { UserContext } from "../../providers/userContext";

export default function Subjects({ subjects }) {
  let [user] = useContext(UserContext);
  const router = useRouter();

  return (
    <>
      <div className={styles.maindiv}>
        <div className={styles.div1}>
          <p className={styles.para}>
            Learning is a treasure that will follow its owner everywhere
          </p>
        </div>
        <h1 className={styles.heading}>YOUR SUBJECTS</h1>
        <div className="flex">
          {subjects &&
            subjects.map((subject) => (
              <div className={styles.images} key={"62764e146c0177e6b0cc3bb5"}>
                <div>
                  <Image
                    // onClick={() => {
                    // router.push("/Admin/Chapter");
                    // }}
                    className={styles.img1}
                    // src={"/physics.png"}
                    src={subject.image ? subject.image : "/physics.png"}
                    // key={sub.subjectId}
                    alt="img"
                    width={"300px"}
                    height={"300px"}
                    onClick={() =>
                      router.push({
                        pathname: "/Admin/Chapter",
                        query: {
                          data: JSON.stringify({
                            subjectId: subject.subjectId,
                            classId: user.myClass,
                          }),
                        },
                      })
                    }
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
