import React, { useContext } from "react";
import styles from "../../styles/AdminPannel/Subtest.module.css";
import { useRouter } from "next/router";
import Image from "next/image";
import request from "../../utils/request";
import { UserContext } from "../../providers/userContext";

export default function Test({ subject, bool }) {
  const [user] = useContext(UserContext);
  const router = useRouter();
  console.log("got subjects=>", subject);
  return (
    <>
      <div
        className={`bg-white p-6 rounded-lg shadow-lg m-auto ${styles.main}`}
      >
        <p
          className={`text-2xl font-bold mb-2 text-gray-800 ${styles.heading}`}
        >
          Select a Subject
        </p>

        <div className={styles.card1}>
          {subject.map((sub) => (
            <div className={styles.subject1} key={"62764e146c0177e6b0cc3bb5"}>
              <Image
                className={styles.img1}
                onClick={
                  bool
                    ? () =>
                        router.push({
                          pathname: "/Admin/Courses",
                          query: {
                            classId: user.myClass,
                            subjectId: sub.subjectId,
                            //  sub.subjectId,
                          },
                        })
                    : () =>
                        router.push({
                          pathname: "/Admin/Progresstable",
                          query: {
                            classId: user.myClass,
                            subjectId: sub.subjectId,
                            //  sub.subjectId,
                          },
                        })
                }
                src={sub.image ? sub.image : "/physics.png"}
                alt="img"
                width={"250px"}
                height={"250px"}
              />

              {/* <Image className={styles.img2} src={"/sub-biology.png"} alt='img' width={'250px'} height={'250px'} /> */}
            </div>
          ))}
          {/* <div className={styles.subject2}>
    <Image className={styles.img3} src={"/sub-chemistry.png"} alt='img' width={'250px'} height={'250px'} />
    
    
    <Image className={styles.img4} src={"/sub-maths.png"} alt='img' width={'250px'} height={'250px'} />
    </div> */}
        </div>
      </div>
    </>
  );
}
