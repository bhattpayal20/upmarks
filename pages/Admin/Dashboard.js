import React, { useContext } from "react";
import { UserContext } from "../../providers/userContext";

export default function Dashboard() {
  const [user] = useContext(UserContext);
  return (
    <div className="relative bg-gray-100 items-start justify-start flex-grow px-5 py-5 space-x-2 md:flex md:flex-row">
      <main className="w-full mt-4 space-y-4 md:mt-0 md:flex-grow">
        <div className="overflow-hidden bg-gradient-to-l from-blue-300 via-white to-white rounded-lg shadow">
          <div className="px-4 py-5 sm:p-6 flex justify-between items-center">
            <h1 className="text-4xl font-bold">Welcome {user.name}.</h1>
            <span className="text-yellow-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </div>
        </div>
        <section className="flex flex-col space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0">
          <div className="flex-1 flex-shrink-0 space-y-4">
            <div className="flex flex-col p-6 bg-white shadow lg:space-y-2 lg:flex-row lg:space-x-4">
              <span className="flex items-center justify-center flex-shrink-0 overflow-hidden rounded-full">
                <svg className="w-24 h-24 text-indigo-700 -rotate-90">
                  <circle
                    className="text-gray-300"
                    strokeWidth={2}
                    stroke="currentColor"
                    fill="transparent"
                    r={36}
                    cx={48}
                    cy={48}
                  />
                  <circle
                    className="text-indigo-600"
                    strokeWidth={2}
                    strokeDasharray="226.1946710584651"
                    strokeDashoffset="-226.1946710584651"
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r={36}
                    cx={48}
                    cy={48}
                  />
                </svg>
                <span className="absolute text-xl text-blue-700">0%</span>
              </span>
              <div className="flex flex-col">
                <h2 className="text-xl font-semibold">
                  Explore learning paths
                </h2>
                <p className="text-sm text-gray-600 my-2">
                  Start your developer journey here
                </p>
                <div className="flex-grow" />
                <a
                  className="flex-shrink-0 block w-full px-6 py-2 text-sm font-semibold text-center text-white bg-gray-800 border border-gray-800 rounded-md md:w-auto hover:bg-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
                  href="/learning-paths"
                >
                  Resume where you left
                </a>
              </div>
            </div>
            <div className="relative p-6 bg-white shadow">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Your progress</h2>
                  <a
                    className="inline-block text-gray-400 hover:text-gray-700"
                    href="/xp-system"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 16 16"
                      className="w-5 h-5"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                      <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                    </svg>
                  </a>
                </div>
                <p className="text-sm text-gray-700">
                  You are at Level 1 (Novice). Get 90 more XP to level up
                </p>
                <div className="flex items-center space-x-2">
                  <p className="text-xs text-gray-600 whitespace-nowrap">
                    Lvl. 1
                  </p>
                  <div className="w-full bg-gray-100 rounded-xl">
                    <div
                      className="py-2.5 text-sh text-xs text-center  bg-indigo-500 rounded-xl whitespace-nowrap text-white px-4"
                      style={{ textShadow: "black 0px 0px 3px", width: "10%" }}
                    />
                  </div>
                  <p className="text-xs text-gray-600 whitespace-nowrap">
                    Lvl. 2
                  </p>
                </div>
                <div className="flex justify-end w-full">
                  <a
                    className="flex items-center space-x-2 text-indigo-500 hover:underline"
                    href="/ranks?filter=allTime"
                  >
                    <p>See Leaderboard</p>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 448 512"
                      className="text-indigo-500"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full max-w-full p-6 bg-white shadow relative overflow-hidden whitespace-pre-wrap">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold opacity-20 pointer-events-none select-none">
                  My Goal
                </h2>
              </div>
              <div className="opacity-20 pointer-events-none select-none ">
                <p className="text-sm text-white bg-indigo-500 p-2 rounded">
                  Become a full-stack developer
                </p>
                <p className="uppercase my-4">This Week</p>
                <div className="space-x-1">
                  <span className="text-6xl font-mono">0</span>
                  <span data-testid="goal-days-text">of 0 days</span>
                </div>
                <div className="mt-8 flex gap-4 overflow-hidden flex-wrap">
                  <div className="border p-4 rounded-md  opacity-50 bg-gray-50">
                    M
                  </div>
                  <div className="border p-4 rounded-md  opacity-50 bg-gray-50">
                    T
                  </div>
                  <div className="border p-4 rounded-md  opacity-50 bg-gray-50">
                    W
                  </div>
                  <div className="border p-4 rounded-md  opacity-50 bg-gray-50">
                    T
                  </div>
                  <div className="border p-4 rounded-md  opacity-50 bg-gray-50">
                    F
                  </div>
                  <div className="border p-4 rounded-md  ">S</div>
                  <div className="border p-4 rounded-md  ">S</div>
                </div>
              </div>
              <div className="absolute py-4 bg-opacity-80 right-0 left-0 text-center w-full top-1/2 transform -translate-y-1/2">
                <p className="font-semibold mb-4 text-2xl">
                  No weekly target set yet.
                </p>
                <button
                  data-testid="set-target-btn"
                  className="border-2 border-indigo-500 text-indigo-500 rounded-md px-4 py-2 font-bold bg-white"
                >
                  Set Target
                </button>
              </div>
            </div>
          </div>
          <aside className="flex-1 flex-shrink-0 space-y-4 break-all">
            <div className="p-6 bg-white shadow">
              <div className="space-y-2">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold truncate">
                      Latest Videos From Upmarks
                    </h2>
                    <div className="flex space-x-2 items-center">
                      <p className="hidden sm:block">1 of 1</p>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth={0}
                        viewBox="0 0 1024 1024"
                        className="text-xl opacity-50"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>previous</title>
                        <path d="M689 165.1L308.2 493.5c-10.9 9.4-10.9 27.5 0 37L689 858.9c14.2 12.2 35 1.2 35-18.5V183.6c0-19.7-20.8-30.7-35-18.5z" />
                      </svg>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth={0}
                        viewBox="0 0 1024 1024"
                        className="text-xl opacity-50"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>next</title>
                        <path d="M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z" />
                      </svg>
                    </div>
                  </div>
                  <div className="aspect-w-16 aspect-h-9">
                    <iframe
                      src="https://www.youtube.com/embed/TXfOzhZGtNw?autoplay=1"
                      frameBorder={0}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="space-x-4 bg-white shadow py-6 sm:p-6">
              <h2 className="mb-4 text-2xl font-bold px-6 sm:p-0">
                Activity last week
              </h2>
              <div className="h-72">
                <div style={{ width: "100%", height: "100%" }}>
                  <div style={{ position: "relative" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      width="455.5"
                      height={288}
                    >
                      <rect width="455.5" height={288} fill="transparent" />
                      <g transform="translate(60,20)">
                        <g>
                          <line
                            opacity={1}
                            x1={0}
                            x2={0}
                            y1={0}
                            y2={218}
                            stroke="#dddddd"
                            strokeWidth={1}
                          />
                          <line
                            opacity={1}
                            x1="55.916666666666664"
                            x2="55.916666666666664"
                            y1={0}
                            y2={218}
                            stroke="#dddddd"
                            strokeWidth={1}
                          />
                          <line
                            opacity={1}
                            x1="111.83333333333333"
                            x2="111.83333333333333"
                            y1={0}
                            y2={218}
                            stroke="#dddddd"
                            strokeWidth={1}
                          />
                          <line
                            opacity={1}
                            x1="167.75"
                            x2="167.75"
                            y1={0}
                            y2={218}
                            stroke="#dddddd"
                            strokeWidth={1}
                          />
                          <line
                            opacity={1}
                            x1="223.66666666666666"
                            x2="223.66666666666666"
                            y1={0}
                            y2={218}
                            stroke="#dddddd"
                            strokeWidth={1}
                          />
                          <line
                            opacity={1}
                            x1="279.5833333333333"
                            x2="279.5833333333333"
                            y1={0}
                            y2={218}
                            stroke="#dddddd"
                            strokeWidth={1}
                          />
                          <line
                            opacity={1}
                            x1="335.5"
                            x2="335.5"
                            y1={0}
                            y2={218}
                            stroke="#dddddd"
                            strokeWidth={1}
                          />
                        </g>
                        <g>
                          <line
                            opacity={1}
                            x1={0}
                            x2="335.5"
                            y1={218}
                            y2={218}
                            stroke="#dddddd"
                            strokeWidth={1}
                          />
                          <line
                            opacity={1}
                            x1={0}
                            x2="335.5"
                            y1={196}
                            y2={196}
                            stroke="#dddddd"
                            strokeWidth={1}
                          />
                          <line
                            opacity={1}
                            x1={0}
                            x2="335.5"
                            y1={174}
                            y2={174}
                            stroke="#dddddd"
                            strokeWidth={1}
                          />
                          <line
                            opacity={1}
                            x1={0}
                            x2="335.5"
                            y1={153}
                            y2={153}
                            stroke="#dddddd"
                            strokeWidth={1}
                          />
                          <line
                            opacity={1}
                            x1={0}
                            x2="335.5"
                            y1={131}
                            y2={131}
                            stroke="#dddddd"
                            strokeWidth={1}
                          />
                          <line
                            opacity={1}
                            x1={0}
                            x2="335.5"
                            y1={109}
                            y2={109}
                            stroke="#dddddd"
                            strokeWidth={1}
                          />
                          <line
                            opacity={1}
                            x1={0}
                            x2="335.5"
                            y1={87}
                            y2={87}
                            stroke="#dddddd"
                            strokeWidth={1}
                          />
                          <line
                            opacity={1}
                            x1={0}
                            x2="335.5"
                            y1={65}
                            y2={65}
                            stroke="#dddddd"
                            strokeWidth={1}
                          />
                          <line
                            opacity={1}
                            x1={0}
                            x2="335.5"
                            y1={44}
                            y2={44}
                            stroke="#dddddd"
                            strokeWidth={1}
                          />
                          <line
                            opacity={1}
                            x1={0}
                            x2="335.5"
                            y1={22}
                            y2={22}
                            stroke="#dddddd"
                            strokeWidth={1}
                          />
                          <line
                            opacity={1}
                            x1={0}
                            x2="335.5"
                            y1={0}
                            y2={0}
                            stroke="#dddddd"
                            strokeWidth={1}
                          />
                        </g>
                        <g transform="translate(0,218)">
                          <g transform="translate(0,0)" style={{ opacity: 1 }}>
                            <line
                              x1={0}
                              x2={0}
                              y1={0}
                              y2={5}
                              style={{
                                stroke: "rgb(119, 119, 119)",
                                strokeWidth: 1,
                              }}
                            />
                            <text
                              dominantBaseline="text-before-edge"
                              textAnchor="middle"
                              transform="translate(0,10) rotate(0)"
                              style={{
                                fontFamily: "sans-serif",
                                fontSize: 11,
                                fill: "rgb(51, 51, 51)",
                              }}
                            >
                              Sun
                            </text>
                          </g>
                          <g
                            transform="translate(55.916666666666664,0)"
                            style={{ opacity: 1 }}
                          >
                            <line
                              x1={0}
                              x2={0}
                              y1={0}
                              y2={5}
                              style={{
                                stroke: "rgb(119, 119, 119)",
                                strokeWidth: 1,
                              }}
                            />
                            <text
                              dominantBaseline="text-before-edge"
                              textAnchor="middle"
                              transform="translate(0,10) rotate(0)"
                              style={{
                                fontFamily: "sans-serif",
                                fontSize: 11,
                                fill: "rgb(51, 51, 51)",
                              }}
                            >
                              Mon
                            </text>
                          </g>
                          <g
                            transform="translate(111.83333333333333,0)"
                            style={{ opacity: 1 }}
                          >
                            <line
                              x1={0}
                              x2={0}
                              y1={0}
                              y2={5}
                              style={{
                                stroke: "rgb(119, 119, 119)",
                                strokeWidth: 1,
                              }}
                            />
                            <text
                              dominantBaseline="text-before-edge"
                              textAnchor="middle"
                              transform="translate(0,10) rotate(0)"
                              style={{
                                fontFamily: "sans-serif",
                                fontSize: 11,
                                fill: "rgb(51, 51, 51)",
                              }}
                            >
                              Tue
                            </text>
                          </g>
                          <g
                            transform="translate(167.75,0)"
                            style={{ opacity: 1 }}
                          >
                            <line
                              x1={0}
                              x2={0}
                              y1={0}
                              y2={5}
                              style={{
                                stroke: "rgb(119, 119, 119)",
                                strokeWidth: 1,
                              }}
                            />
                            <text
                              dominantBaseline="text-before-edge"
                              textAnchor="middle"
                              transform="translate(0,10) rotate(0)"
                              style={{
                                fontFamily: "sans-serif",
                                fontSize: 11,
                                fill: "rgb(51, 51, 51)",
                              }}
                            >
                              Wed
                            </text>
                          </g>
                          <g
                            transform="translate(223.66666666666666,0)"
                            style={{ opacity: 1 }}
                          >
                            <line
                              x1={0}
                              x2={0}
                              y1={0}
                              y2={5}
                              style={{
                                stroke: "rgb(119, 119, 119)",
                                strokeWidth: 1,
                              }}
                            />
                            <text
                              dominantBaseline="text-before-edge"
                              textAnchor="middle"
                              transform="translate(0,10) rotate(0)"
                              style={{
                                fontFamily: "sans-serif",
                                fontSize: 11,
                                fill: "rgb(51, 51, 51)",
                              }}
                            >
                              Thu
                            </text>
                          </g>
                          <g
                            transform="translate(279.5833333333333,0)"
                            style={{ opacity: 1 }}
                          >
                            <line
                              x1={0}
                              x2={0}
                              y1={0}
                              y2={5}
                              style={{
                                stroke: "rgb(119, 119, 119)",
                                strokeWidth: 1,
                              }}
                            />
                            <text
                              dominantBaseline="text-before-edge"
                              textAnchor="middle"
                              transform="translate(0,10) rotate(0)"
                              style={{
                                fontFamily: "sans-serif",
                                fontSize: 11,
                                fill: "rgb(51, 51, 51)",
                              }}
                            >
                              Fri
                            </text>
                          </g>
                          <g
                            transform="translate(335.5,0)"
                            style={{ opacity: 1 }}
                          >
                            <line
                              x1={0}
                              x2={0}
                              y1={0}
                              y2={5}
                              style={{
                                stroke: "rgb(119, 119, 119)",
                                strokeWidth: 1,
                              }}
                            />
                            <text
                              dominantBaseline="text-before-edge"
                              textAnchor="middle"
                              transform="translate(0,10) rotate(0)"
                              style={{
                                fontFamily: "sans-serif",
                                fontSize: 11,
                                fill: "rgb(51, 51, 51)",
                              }}
                            >
                              Sat
                            </text>
                          </g>
                          <line
                            x1={0}
                            x2="335.5"
                            y1={0}
                            y2={0}
                            style={{ stroke: "transparent", strokeWidth: 1 }}
                          />
                          <text
                            transform="translate(167.75, 40) rotate(0)"
                            textAnchor="middle"
                            style={{
                              dominantBaseline: "central",
                              fontSize: 12,
                              fontFamily: "sans-serif",
                              fill: "rgb(51, 51, 51)",
                            }}
                          >
                            Days
                          </text>
                        </g>
                        <g transform="translate(0,0)">
                          <g
                            transform="translate(0,218)"
                            style={{ opacity: 1 }}
                          >
                            <line
                              x1={0}
                              x2={-5}
                              y1={0}
                              y2={0}
                              style={{
                                stroke: "rgb(119, 119, 119)",
                                strokeWidth: 1,
                              }}
                            />
                            <text
                              dominantBaseline="central"
                              textAnchor="end"
                              transform="translate(-10,0) rotate(0)"
                              style={{
                                fontFamily: "sans-serif",
                                fontSize: 11,
                                fill: "rgb(51, 51, 51)",
                              }}
                            >
                              0
                            </text>
                          </g>
                          <g
                            transform="translate(0,196)"
                            style={{ opacity: 1 }}
                          >
                            <line
                              x1={0}
                              x2={-5}
                              y1={0}
                              y2={0}
                              style={{
                                stroke: "rgb(119, 119, 119)",
                                strokeWidth: 1,
                              }}
                            />
                            <text
                              dominantBaseline="central"
                              textAnchor="end"
                              transform="translate(-10,0) rotate(0)"
                              style={{
                                fontFamily: "sans-serif",
                                fontSize: 11,
                                fill: "rgb(51, 51, 51)",
                              }}
                            >
                              0.5
                            </text>
                          </g>
                          <g
                            transform="translate(0,174)"
                            style={{ opacity: 1 }}
                          >
                            <line
                              x1={0}
                              x2={-5}
                              y1={0}
                              y2={0}
                              style={{
                                stroke: "rgb(119, 119, 119)",
                                strokeWidth: 1,
                              }}
                            />
                            <text
                              dominantBaseline="central"
                              textAnchor="end"
                              transform="translate(-10,0) rotate(0)"
                              style={{
                                fontFamily: "sans-serif",
                                fontSize: 11,
                                fill: "rgb(51, 51, 51)",
                              }}
                            >
                              1
                            </text>
                          </g>
                          <g
                            transform="translate(0,153)"
                            style={{ opacity: 1 }}
                          >
                            <line
                              x1={0}
                              x2={-5}
                              y1={0}
                              y2={0}
                              style={{
                                stroke: "rgb(119, 119, 119)",
                                strokeWidth: 1,
                              }}
                            />
                            <text
                              dominantBaseline="central"
                              textAnchor="end"
                              transform="translate(-10,0) rotate(0)"
                              style={{
                                fontFamily: "sans-serif",
                                fontSize: 11,
                                fill: "rgb(51, 51, 51)",
                              }}
                            >
                              1.5
                            </text>
                          </g>
                          <g
                            transform="translate(0,131)"
                            style={{ opacity: 1 }}
                          >
                            <line
                              x1={0}
                              x2={-5}
                              y1={0}
                              y2={0}
                              style={{
                                stroke: "rgb(119, 119, 119)",
                                strokeWidth: 1,
                              }}
                            />
                            <text
                              dominantBaseline="central"
                              textAnchor="end"
                              transform="translate(-10,0) rotate(0)"
                              style={{
                                fontFamily: "sans-serif",
                                fontSize: 11,
                                fill: "rgb(51, 51, 51)",
                              }}
                            >
                              2
                            </text>
                          </g>
                          <g
                            transform="translate(0,109)"
                            style={{ opacity: 1 }}
                          >
                            <line
                              x1={0}
                              x2={-5}
                              y1={0}
                              y2={0}
                              style={{
                                stroke: "rgb(119, 119, 119)",
                                strokeWidth: 1,
                              }}
                            />
                            <text
                              dominantBaseline="central"
                              textAnchor="end"
                              transform="translate(-10,0) rotate(0)"
                              style={{
                                fontFamily: "sans-serif",
                                fontSize: 11,
                                fill: "rgb(51, 51, 51)",
                              }}
                            >
                              2.5
                            </text>
                          </g>
                          <g transform="translate(0,87)" style={{ opacity: 1 }}>
                            <line
                              x1={0}
                              x2={-5}
                              y1={0}
                              y2={0}
                              style={{
                                stroke: "rgb(119, 119, 119)",
                                strokeWidth: 1,
                              }}
                            />
                            <text
                              dominantBaseline="central"
                              textAnchor="end"
                              transform="translate(-10,0) rotate(0)"
                              style={{
                                fontFamily: "sans-serif",
                                fontSize: 11,
                                fill: "rgb(51, 51, 51)",
                              }}
                            >
                              3
                            </text>
                          </g>
                          <g transform="translate(0,65)" style={{ opacity: 1 }}>
                            <line
                              x1={0}
                              x2={-5}
                              y1={0}
                              y2={0}
                              style={{
                                stroke: "rgb(119, 119, 119)",
                                strokeWidth: 1,
                              }}
                            />
                            <text
                              dominantBaseline="central"
                              textAnchor="end"
                              transform="translate(-10,0) rotate(0)"
                              style={{
                                fontFamily: "sans-serif",
                                fontSize: 11,
                                fill: "rgb(51, 51, 51)",
                              }}
                            >
                              3.5
                            </text>
                          </g>
                          <g transform="translate(0,44)" style={{ opacity: 1 }}>
                            <line
                              x1={0}
                              x2={-5}
                              y1={0}
                              y2={0}
                              style={{
                                stroke: "rgb(119, 119, 119)",
                                strokeWidth: 1,
                              }}
                            />
                            <text
                              dominantBaseline="central"
                              textAnchor="end"
                              transform="translate(-10,0) rotate(0)"
                              style={{
                                fontFamily: "sans-serif",
                                fontSize: 11,
                                fill: "rgb(51, 51, 51)",
                              }}
                            >
                              4
                            </text>
                          </g>
                          <g transform="translate(0,22)" style={{ opacity: 1 }}>
                            <line
                              x1={0}
                              x2={-5}
                              y1={0}
                              y2={0}
                              style={{
                                stroke: "rgb(119, 119, 119)",
                                strokeWidth: 1,
                              }}
                            />
                            <text
                              dominantBaseline="central"
                              textAnchor="end"
                              transform="translate(-10,0) rotate(0)"
                              style={{
                                fontFamily: "sans-serif",
                                fontSize: 11,
                                fill: "rgb(51, 51, 51)",
                              }}
                            >
                              4.5
                            </text>
                          </g>
                          <g transform="translate(0,0)" style={{ opacity: 1 }}>
                            <line
                              x1={0}
                              x2={-5}
                              y1={0}
                              y2={0}
                              style={{
                                stroke: "rgb(119, 119, 119)",
                                strokeWidth: 1,
                              }}
                            />
                            <text
                              dominantBaseline="central"
                              textAnchor="end"
                              transform="translate(-10,0) rotate(0)"
                              style={{
                                fontFamily: "sans-serif",
                                fontSize: 11,
                                fill: "rgb(51, 51, 51)",
                              }}
                            >
                              5
                            </text>
                          </g>
                          <line
                            x1={0}
                            x2={0}
                            y1={0}
                            y2={218}
                            style={{ stroke: "transparent", strokeWidth: 1 }}
                          />
                          <text
                            transform="translate(-40, 109) rotate(-90)"
                            textAnchor="middle"
                            style={{
                              dominantBaseline: "central",
                              fontSize: 12,
                              fontFamily: "sans-serif",
                              fill: "rgb(51, 51, 51)",
                            }}
                          >
                            XP earned
                          </text>
                        </g>
                        <path
                          d="M0,218C18.63888888888889,218,37.27777777777777,218,55.916666666666664,218C74.55555555555556,218,93.19444444444444,218,111.83333333333333,218C130.47222222222223,218,149.11111111111111,218,167.75,218C186.38888888888889,218,205.02777777777777,0,223.66666666666666,0C242.30555555555554,0,260.94444444444446,218,279.5833333333333,218C298.22222222222223,218,316.8611111111111,109.00000000000001,335.5,0"
                          fill="none"
                          strokeWidth={2}
                          stroke="#818CF8"
                        />
                        <g>
                          <g
                            transform="translate(335.5, 0)"
                            style={{ pointerEvents: "none" }}
                          >
                            <circle
                              r={5}
                              fill="#818CF8"
                              stroke="#818CF8"
                              strokeWidth={2}
                              style={{ pointerEvents: "none" }}
                            />
                          </g>
                          <g
                            transform="translate(279.5833333333333, 218)"
                            style={{ pointerEvents: "none" }}
                          >
                            <circle
                              r={5}
                              fill="#818CF8"
                              stroke="#818CF8"
                              strokeWidth={2}
                              style={{ pointerEvents: "none" }}
                            />
                          </g>
                          <g
                            transform="translate(223.66666666666666, 0)"
                            style={{ pointerEvents: "none" }}
                          >
                            <circle
                              r={5}
                              fill="#818CF8"
                              stroke="#818CF8"
                              strokeWidth={2}
                              style={{ pointerEvents: "none" }}
                            />
                          </g>
                          <g
                            transform="translate(167.75, 218)"
                            style={{ pointerEvents: "none" }}
                          >
                            <circle
                              r={5}
                              fill="#818CF8"
                              stroke="#818CF8"
                              strokeWidth={2}
                              style={{ pointerEvents: "none" }}
                            />
                          </g>
                          <g
                            transform="translate(111.83333333333333, 218)"
                            style={{ pointerEvents: "none" }}
                          >
                            <circle
                              r={5}
                              fill="#818CF8"
                              stroke="#818CF8"
                              strokeWidth={2}
                              style={{ pointerEvents: "none" }}
                            />
                          </g>
                          <g
                            transform="translate(55.916666666666664, 218)"
                            style={{ pointerEvents: "none" }}
                          >
                            <circle
                              r={5}
                              fill="#818CF8"
                              stroke="#818CF8"
                              strokeWidth={2}
                              style={{ pointerEvents: "none" }}
                            />
                          </g>
                          <g
                            transform="translate(0, 218)"
                            style={{ pointerEvents: "none" }}
                          >
                            <circle
                              r={5}
                              fill="#818CF8"
                              stroke="#818CF8"
                              strokeWidth={2}
                              style={{ pointerEvents: "none" }}
                            />
                          </g>
                        </g>
                        <g>
                          <rect
                            width="335.5"
                            height={218}
                            fill="red"
                            opacity={0}
                            style={{ cursor: "auto" }}
                          />
                        </g>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </section>
      </main>
    </div>
  );
}
