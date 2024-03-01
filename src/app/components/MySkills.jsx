"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Programing Languages",
    id: "programing",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML</li>
        <li>CSS</li>
        <li>SCSS</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
      </ul>
    ),
  },
  {
    title: "Frameworks",
    id: "frameworks",
    content: (
      <ul className="list-disc pl-2">
        <li>ReactJS</li>
        <li>NextJS</li>
        <li>NodeJS(Express)</li>
        <li>PHP(Laravel)</li>
      </ul>
    ),
  },
  {
    title: "Databases",
    id: "databases",
    content: (
      <ul className="list-disc pl-2">
        <li>MongoDB</li>
        <li>MySql</li>
      </ul>
    ),
  },
  {
    title: "Libraries",
    id: "libraries",
    content: (
      <ul className="list-disc pl-2">
        <li>Tailwind</li>
        <li>React Query</li>
        <li>Boostrap</li>
      </ul>
    ),
  },
  {
    title: "Dev Tools",
    id: "dev",
    content: (
      <ul className="list-disc pl-2">
        <li>Github</li>
        <li>Git</li>
        <li>Postman</li>
        <li>ChatGPT</li>
      </ul>
    ),
  },
];

const MySkills = () => {
  const [tab, setTab] = useState("frameworks");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-1 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16  rounded-full border-solid">
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4 ml-[35%]">My Technical skills</h2>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("programing")}
              active={tab === "programing"}
            >
              {" "}
              Programing Languages{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("frameworks")}
              active={tab === "frameworks"}
            >
              {" "}
              Frameworks{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("databases")}
              active={tab === "databases"}
            >
              {" "}
              Databases{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("libraries")}
              active={tab === "libraries"}
            >
              {" "}
              Libraries{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("dev")}
              active={tab === "dev"}
            >
              {" "}
              Dev Tools{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MySkills;
