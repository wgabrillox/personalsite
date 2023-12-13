import React, { useRef, useEffect } from "react";
import * as d3 from "d3";
import styles from "./skills.module.css";

export default function Skills() {
  const data = {
    name: "Stack",
    children: [
      {
        name: "Frontend",
        children: [
          { name: "HTML", value: 20 },
          {
            name: "CSS",
            children: [
              { name: "Bootstrap", value: 60 },
              { name: "Styled Components", value: 60 },
            ],
          },
          {
            name: "Javascript",
            children: [
              {
                name: "React",
                children: [{ name: "Redux", value: 90 }],
              },
              { name: "NextJS", value: 10 },
            ],
          },
          { name: "Typescript", value: 10 },
          { name: "JQuery", value: 10 },
        ],
      },
      {
        name: "Backend",
        children: [
          { name: "Python", value: 40 },
          {
            name: "Database",
            children: [
              { name: "SQL", value: 60 },
              { name: "MySQL", value: 20 },
            ],
          },
          { name: "Java", value: 10 },
          { name: "Django", value: 15 },
          { name: "MongoDB", value: 10 },
          { name: "Express", value: 10 },
        ],
      },
      {
        name: "Devops",
        children: [
          { name: "Azure", value: 20 },
          { name: "Jenkins", value: 15 },
          { name: "CircleCI", value: 20 },
          { name: "Vercel", value: 10 },
        ],
      },
      {
        name: "Misc",
        children: [
          {
            name: "Data Analytics",
            children: [
              { name: "GTM", value: 15 },
              { name: "Google Analytics", value: 15 },
              { name: "Datadog", value: 15 },
              { name: "Firebase", value: 15 },
            ],
          },
          { name: "Figma", value: 35 },
          { name: "Jira", value: 50 },
          { name: "Github", value: 50 },
          { name: "Selenium", value: 15 },
        ],
      },
      {
        name: "Mobile",
        children: [
          { name: "Swift (ios14)", value: 10 },
          { name: "React Native", value: 10 },
        ],
      },
    ],
  };

  useEffect(() => {
    const width = 800;
    const height = 700;
    const radius = Math.min(800, 800) / 2;
    const color = d3.scaleOrdinal(d3.schemeCategory10);

    const g = d3
      .select("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    const partition = (data) =>
      d3.partition().size([2 * Math.PI, radius])(
        d3
          .hierarchy(data)
          .sum((d) => d.value)
          .sort((a, b) => b.value - a.value)
      );

    const root = partition(data);

    const arc = d3
      .arc()
      .startAngle((d) => d.x0)
      .endAngle((d) => d.x1)
      .padAngle((d) => Math.min((d.x1 - d.x0) / 2, 0.005))
      .padRadius(radius / 2)
      .innerRadius((d) => d.y0)
      .outerRadius((d) => d.y1);

    const format = d3.format(",d");
    g.append("g")
      .attr("fill-opacity", 0.6)
      .selectAll("path")
      .data(root.descendants().filter((d) => d.depth))
      .join("path")
      .attr("fill", (d) => {
        while (d.depth > 1) d = d.parent;
        return color(d.data.name);
      })
      .attr("d", arc)
      .style("stroke", "#fff")
      .append("title");
    // .text(
    //   (d) =>
    //     `${
    //       d.ancestors().map((d) => d.data.name)
    //       .reverse()
    //       .join("/")}\n${format(d.value)}`
    // );

    // Label
    g.append("g")
      .attr("pointer-events", "none")
      .attr("text-anchor", "middle")
      .attr("font-size", 14)
      .attr("font-family", "sans-serif")
      .selectAll("text")
      .data(
        root
          .descendants()
          .filter((d) => d.depth && ((d.y0 + d.y1) / 2) * (d.x1 - d.x0) > 10)
      )
      .join("text")
      .attr("transform", (d) => {
        const x = (((d.x0 + d.x1) / 2) * 180) / Math.PI;
        const y = (d.y0 + d.y1) / 2;
        return `rotate(${x - 90}) translate(${y},0) rotate(${
          x < 180 ? 0 : 180
        })`;
      })
      .attr("dy", "0.35em")
      .text((d) => d.data.name);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Skills</div>
      <div className={styles.container}>
        <svg></svg>
      </div>
    </div>
  );
}
