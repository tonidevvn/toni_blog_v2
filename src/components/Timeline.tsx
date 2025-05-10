import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <header className="flex flex-col items-center text-center">
          <h2 className="font-bold text-5xl mb-12 text-transform: uppercase after:mx-auto after:mb-0 after:block after:mt-9 after:rounded-full after:h-1 after:w-24 after:-translate-y-1 after:bg-indigo-600 after:content-['']">
            Career History
          </h2>
        </header>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2024 - present"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Master's degree, Applied Computing, Information Sciences at
              University of Windsor
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Windsor, ON</h4>
            <p>
              Advanced Software Eng. Topics, Advanced Database Topics, Advanced
              Systems Programming, Networking and Data Security
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 - 2024"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              General Manager, Technology Consultant, Client Support at UNO
              MEDIA
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              HCMC, Vietnam
            </h4>
            <p>
              Project Planning, Frontend Development, Backend Development, User
              Experience, Team Leading, Automation, Data Governance, Statistical
              Analysis
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2022"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Project Manager at Renesas Design Vietnam Co., Ltd.
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              HCMC, Vietnam
            </h4>
            <p>
              Project Management, Risk Monitoring, Requirement Analysis,
              Customer Support, Team Leading
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2017 - 2018"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Engineering Trainee
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Tokyo, Japan</h4>
            <p>RV850 V3, Functional Safety, ISO 26262 and AUTOSAR</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2011 - 2020"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Software Engineer at Renesas Design Vietnam Co., Ltd.
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              HCMC, Vietnam
            </h4>
            <p>
              Software Development, Software Testing, Frontend Development,
              Backend Development, User Experience
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2011 - 2020"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Web Developer at DatViet Tourism.
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              HCMC, Vietnam
            </h4>
            <p>ASP.Net, HTML, CSS, JavaScript, RESTful APIs, & SQL Server</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
