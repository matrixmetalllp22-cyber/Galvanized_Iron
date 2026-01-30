import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Leadership from "../components/Leadership";
import ManagementTeam from "../components/ManagementTeam";

import leadershipData from "../data/leadershipData";
import boardData from "../data/boardData";

export default function About() {
  const [activeTab, setActiveTab] = useState("leadership");

  return (
    <>
      {/* TABS */}
      <section className="relative bg-black pt-24 pb-14">
        <div className="max-w-6xl mx-auto text-center">

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white text-3xl font-semibold mb-8"
          >
            Leadership
          </motion.h2>

          <div className="flex justify-center gap-10 text-sm text-gray-400">
            {[
              ["board", "Board of Directors"],
              ["management", "Management Committee"],
              ["leadership", "Leadership Team"],
            ].map(([key, label]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`relative pb-2 tracking-wide transition ${
                  activeTab === key
                    ? "text-orange-500"
                    : "hover:text-white"
                }`}
              >
                {label}

                {activeTab === key && (
                  <motion.span
                    layoutId="active-tab"
                    className="absolute left-0 bottom-0 w-full h-0.5 bg-orange-500 rounded-full"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-black">
        <AnimatePresence mode="wait">
          {activeTab === "management" && (
            <motion.div
              key="management"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.45 }}
            >
              <ManagementTeam />
            </motion.div>
          )}

          {activeTab === "leadership" && (
            <motion.div
              key="leadership"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.45 }}
            >
              <Leadership title="Leadership Team" data={leadershipData} />
            </motion.div>
          )}

          {activeTab === "board" && (
            <motion.div
              key="board"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.45 }}
            >
              <Leadership title="Board of Directors" data={boardData} />
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
}
