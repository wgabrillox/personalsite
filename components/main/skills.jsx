import React, { useRef, useEffect } from "react";
import * as d3 from "d3";
import styles from "./skills.module.css";

export default function Skills({ skills }) {
  console.log("skills", skills);
  useEffect(() => {
    const width = 840;
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

    const root = partition(skills[0]);

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
        <div className={styles.d3container}>
          <svg></svg>

          <div className={styles.footnote}>
            *Note: Data isn't 100% accurate, more of a visual
            representation/approximation and to practice using the D3 Library.
            Mostly is accurate though!
          </div>
        </div>
        <div className={styles.skillsContainer}>
          {skills[0].children.map((skill) => (
            <div key={skill.name} className={styles.skillContainer}>
              <div className={styles.skillContent}>
                <div className={styles.skillHeader}>{skill.name}</div>
                <div className={styles.skillsChildren}>
                  {skill.children.map((skillMain) => (
                    <div key={skillMain.name} className={styles.skillMain}>
                      <div>{skillMain.name}</div>
                      {skillMain.children &&
                        skillMain.children.map((subSkill) => (
                          <ul key={subSkill.name} className={styles.skillList}>
                            <li>{subSkill.name}</li>
                            {subSkill.children &&
                              subSkill.children.map((subsubSkill) => (
                                <div key={subsubSkill.name}>
                                  - {subsubSkill.name}
                                </div>
                              ))}
                          </ul>
                        ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
