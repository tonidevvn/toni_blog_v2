import React, { useMemo } from 'react';
import { LuBriefcaseBusiness } from 'react-icons/lu';
import { FaGraduationCap } from 'react-icons/fa';
import { SiFreelancer } from 'react-icons/si';
import { VscRemoteExplorer } from 'react-icons/vsc';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


type TimelineIcon = 'work' | 'edu' | 'freelance' | 'remote';

type TimelineItem = {
  id: string;
  date: string;
  title: string;
  subtitle: string;
  description: string;
  icon: TimelineIcon;
  contentBg?: string; // optional background override
  arrowColor?: string; // optional arrow override
};

const TIMELINE_ITEMS: TimelineItem[] = [
  {
    id: 'uno-lead-2025',
    date: 'Jan 2025 - Present',
    title: 'Technical Lead, Full-Stack Developer at UNO Media',
    subtitle: '(Remote) Ho Chi Minh, Vietnam',
    description:
      'Project Planning, Frontend Development, Backend Development, User Experience, Automation, Data Governance, Statistical Analysis',
    icon: 'remote',
  },
  {
    id: 'uwindsor-masters-2024',
    date: 'May 2024 - Oct 2025',
    title: "Master's in Applied Computing at University of Windsor",
    subtitle: 'Windsor, ON',
    description:
      'Advanced Software Eng. Topics, Advanced Database Topics, Advanced Systems Programming, Networking and Data Security',
    icon: 'edu',
    contentBg: 'white',
    arrowColor: 'white',
  },
  {
    id: 'uno-fs-2022',
    date: 'Jul 2022 - Apr 2024',
    title: 'Full-Stack Developer, Client Support at UNO Media',
    subtitle: 'Ho Chi Minh, Vietnam',
    description:
      'Frontend Development, Backend Development, User Experience, Automation, Data Governance, Statistical Analysis',
    icon: 'work',
  },
  {
    id: 'renesas-pm-2019',
    date: 'Jun 2019 - Jun 2022',
    title: 'Project Manager at Renesas Design Vietnam Co., Ltd.',
    subtitle: 'Ho Chi Minh, Vietnam',
    description:
      'Project Management, Risk Monitoring, Requirement Analysis, Customer Support, Team Leading',
    icon: 'work',
  },
  {
    id: 'renesas-trainee-2017',
    date: 'Apr 2017 - May 2018',
    title: 'Engineering Trainee',
    subtitle: 'Tokyo, Japan',
    description: 'RV850 V3, Functional Safety, ISO 26262 and AUTOSAR',
    icon: 'work',
  },
  {
    id: 'renesas-se-2011',
    date: 'Mar 2011 - Mar 2017',
    title: 'Software Engineer at Renesas Design Vietnam Co., Ltd.',
    subtitle: 'Ho Chi Minh, Vietnam',
    description:
      'Software Development, Software Testing, Frontend Development, Backend Development, User Experience',
    icon: 'work',
  },
  {
    id: 'datviet-freelance-2011',
    date: 'Jan 2011 - May 2012',
    title: 'Web Developer (Part-time) at DatViet Tourism.',
    subtitle: 'Ho Chi Minh, Vietnam',
    description: 'ASP.Net, HTML, CSS, JavaScript, RESTful APIs, & SQL Server',
    icon: 'freelance',
  },
];

const DATE_CLASS =
  'font-semibold !text-slate-900 dark:md:!text-slate-300 drop-shadow-sm dark:drop-shadow-md';

const ICON_STYLE = { background: '#5000ca', color: 'rgb(39, 40, 34)' } as const;

const LIGHT_SHADOW = '0 4px 12px rgba(0, 0, 0, 0.12)';

function getIcon(kind: TimelineIcon) {
  switch (kind) {
    case 'edu':
      return <FaGraduationCap color='#fff' />;
    case 'freelance':
      return <SiFreelancer color='#fff' />;
    case 'remote':
      return <VscRemoteExplorer color='#fff' />;
    case 'work':
    default:
      return <LuBriefcaseBusiness color='#fff' />;
  }
}

function Timeline() {
  const elements = useMemo(
    () =>
      TIMELINE_ITEMS.map((item) => {
        const contentStyle: React.CSSProperties = {
          ...(item.contentBg ? { background: item.contentBg } : null),
          ...{ boxShadow: LIGHT_SHADOW },
        };
``
        const contentArrowStyle: React.CSSProperties | undefined =
          item.arrowColor
            ? { borderRight: `7px solid ${item.arrowColor}` }
            : undefined;

        return (
          <VerticalTimelineElement
            key={item.id}
            className='vertical-timeline-element--work'
            date={item.date}
            dateClassName={DATE_CLASS}
            iconStyle={ICON_STYLE}
            icon={getIcon(item.icon)}
            contentStyle={contentStyle}
            contentArrowStyle={contentArrowStyle}
          >
            <h3 className='vertical-timeline-element-title text-[#272822]'>{item.title}</h3>
            <h4 className='vertical-timeline-element-subtitle text-[#272822]'>
              {item.subtitle}
            </h4>
            <p className='!text-[#272822]'>{item.description}</p>
          </VerticalTimelineElement>
        );
      }),
    []
  );

  return (
    <section id='history'>
      <div className='items-container text-slate-800 dark:text-slate-300'>
        <header className='flex flex-col items-center text-center'>
          <h2 className="font-bold text-5xl mb-12 uppercase after:mx-auto after:mb-0 after:block after:mt-9 after:rounded-full after:h-1 after:w-24 after:-translate-y-1 after:bg-indigo-600 after:content-['']">
            Career History
          </h2>
        </header>

        <VerticalTimeline className="before:!bg-slate-600 dark:before:!bg-slate-200">{elements}</VerticalTimeline>
      </div>
    </section>
  );
}

export default Timeline;
