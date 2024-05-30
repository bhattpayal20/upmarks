import React from "react";
import { TiTick } from "react-icons/ti";
import styles from "../../styles/AdminPannel/Progresstable.module.css";
import request from "../../utils/request";
import { useState } from "react";
import PricingCard from "../../components/PricingCard/PricingCard";

export default function Courses({ modules }) {
  const [mod, setModule] = useState(modules);
  const [map, setMap] = useState(modules);
  const [checked, setChecked] = useState(false);

  return (
    <div className={`bg-white p-6 rounded-lg ${styles.main}`}>
      <h1 className={styles.h}>Buy A Module</h1>
      <div className="lg:flex">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="py-8">
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
              <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
                <table className="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        <input
                          id="default-checkbox"
                          type="checkbox"
                          value=""
                          onClick={() => setChecked(!checked)}
                          className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500  "
                        />
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        S.No
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Module
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Price
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {map &&
                      map.data.map((mod) => (
                        <>
                          <Rows
                            checked={checked}
                            mod={mod}
                            modules={modules}
                            setModule={setModule}
                          />
                        </>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div>
          <PricingCard bool={true} module={mod} />
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  let [err, response] = await request(
    "GET",
    `/user-curriculum/subject-modules?classId=${context.query.classId}&subjectId=${context.query.subjectId}`,
    {},
    {},
    context.req.cookies.token
  );
  return {
    props: { modules: response }, // will be passed to the page component as props
  };
}

function Rows({ mod, checked, setModule, modules }) {
  const [expanded, setExpanded] = useState(false);
  const [rowCheck, setrowCheck] = useState(false);
  const handlechange = (e) => {
    if (!rowCheck) {
      setModule(JSON.parse(e.target.value));
    } else if (rowCheck) {
      setModule(modules);
    }
  };
  return (
    <>
      <tr
        className="even:bg-gray-100"
        key={"62764e146c0177e6b0cc3bb5"}
        onClick={() => {
          //   router.push({
          //     pathname: "/Admin/Progress",
          //     query: {
          //       data: JSON.stringify({
          //         chapterId: chapter._id,
          //         chapterName: chapter.chapterName,
          //       }),
          //     },
          //   });
          setExpanded(!expanded);
        }}
      >
        <td className="px-5 py-3 border-b-2 border-gray-200  text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
          <input
            id="default-checkbox"
            type="checkbox"
            value={JSON.stringify(mod)}
            onChange={(e) => handlechange(e)}
            onClick={() => setrowCheck(!rowCheck)}
            checked={checked ? checked : rowCheck}
            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500  "
          />
        </td>
        <td className="px-5 py-5 border-b border-gray-200 text-sm">
          {mod.module}
        </td>
        <td className="px-5 py-5 border-b border-gray-200 text-sm">
          Module{mod.module}
        </td>
        <td className="px-5 py-5 border-b border-gray-200 text-sm">
          {mod.price}
        </td>
      </tr>

      {expanded && (
        <>
          {/* // <div className=" bg-white shadow-md " style={{ padding: "20px 89px" }}> */}
          <tr className="shadow-sm">
            <th></th>
            <th className="px-5  py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Chapter.No
            </th>
            <th className="px-5   py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Chapter Name
            </th>
            <th className="px-5  py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Price
            </th>
          </tr>
          {mod.chapters.map((chapter, index) => (
            <tr
              className="px-5 shadow-md py-5 border-b border-gray-200 text-sm"
              key={index}
            >
              <td></td>
              <td className="px-5 py-5 border-b border-gray-200 text-sm">
                {chapter.chapterNumber}
              </td>
              <td className="px-5 py-5 border-b border-gray-200 text-sm">
                {chapter.chapterName}
              </td>
              <td className="px-5 py-5 border-b border-gray-200 text-sm">
                {chapter.fee}
              </td>
            </tr>
          ))}
        </>
      )}
    </>
  );
}
