import React from "react";
import styles from "../../styles/AdminPannel/Progresstable.module.css";
import { useRouter } from "next/router";
import { TiTick } from "react-icons/ti";

export default function Progresstable({ chapters }) {
  const router = useRouter();

  return (
    <>
      <div className={`bg-white p-6 rounded-lg ${styles.main}`}>
        <h1 className={styles.h}>Leader Board</h1>
        <div className="container mx-auto px-4 sm:px-8">
          <div className="py-8">
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
              <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
                <table className="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        S.No
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Chapter
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Score
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Percentage
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Gold
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Silver
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Bronze
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {chapters.map((chapter) => (
                      <tr
                        className="even:bg-gray-100"
                        key={"62764e146c0177e6b0cc3bb5"}
                        onClick={() => {
                          router.push({
                            pathname: "/Admin/Progress",
                            query: {
                              data: JSON.stringify({
                                chapterId: chapter._id,
                                chapterName: chapter.chapterName,
                              }),
                            },
                          });
                        }}
                      >
                        <td className="px-5 py-5 border-b border-gray-200 text-sm">
                          {chapter.chapterNumber}
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 text-sm">
                          {chapter.chapterName}
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 text-sm">
                          <b>
                            {(chapter.percentageScore *
                              chapter.totalWeightage) /
                              100}
                            /
                          </b>
                          {chapter.totalWeightage}
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 marker:text-sm">
                          {chapter.percentageScore}
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 text-sm">
                          <TiTick className={styles.tick} />
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 text-sm"></td>
                        <td className="px-5 py-5 border-b border-gray-200 text-sm"></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
