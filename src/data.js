import { FaHome, FaBriefcase, FaDonate, FaQuestion } from "react-icons/fa";
import IncomeInfo from "./components/income-info";
import RateInfo from "./components/rate-info";
import SimulatorInfo from "./components/simulator-info";

export const qualificationAndRequirements = [
  {
    title: "qualifications",
    datas: [
      {
        img: "https://pngimage.net/wp-content/uploads/2018/06/%D0%B7%D0%BD%D0%B0%D0%BA-18-png-.png",
        title: "18 YEARS ABOVE",
        details: "Tutors must be 18 years old and above",
      },
      {
        img: "https://www.freeiconspng.com/thumbs/laptop-icon/laptop-icon-5.png",
        title: "MUST BE COMPUTER LITERATE",
        details: "Tutor must be knowledgeable in basic computer processes",
      },
      {
        img: "https://www.freeiconspng.com/thumbs/writing-png/writing-png-6.png",
        title: "FLUENT IN BOTH ORAL AND WRITTEN ENGLISH",
        details: "Tutor must be fluent in both oral and written English",
      },
      {
        img: "https://icon-library.com/images/scholar-icon/scholar-icon-2.jpg",
        title: "NO WORKING EXPERIENCE",
        details: "Tutor who have no working experience is acceptable",
      },
    ],
  },
  {
    title: "requirements",
    datas: [
      {
        img: "https://media.istockphoto.com/vectors/headphone-icon-headphones-symbol-vector-isolated-flat-design-vector-id1205150648",
        title: "HEADSET",
        details: "Must have a noise cancelling feature & external microphone",
      },
      {
        img: "https://previews.123rf.com/images/urfandadashov/urfandadashov1808/urfandadashov180819834/108440620-pc-vector-icon-isolated-on-transparent-background-pc-logo-concept.jpg",
        title: "PC TYPE & SPECIFICATION",
        details:
          "Laptop or desktop with OS: Windows 10, RAM: 8GB or higher, and CPU: Core i3 and above",
      },
      {
        img: "https://img.favpng.com/11/2/14/teacher-computer-icons-school-test-education-png-favpng-Eht7sZFkavpLzT0hqvxTnqDwW.jpg",
        title: "TEACHING ENVIRONMENT",
        details:
          "Plain white background, good lighting, and no background noises",
      },
      {
        img: "https://image.similarpng.com/very-thumbnail/2021/06/Wifi-icon,-a-symbol-of-the-wireless-internet-on-transparent-background-PNG.png",
        title: "INTERNET",
        details: "At least 5 MBPS download speed & ping of not more than 30 ms",
      },
      {
        img: "https://mpng.subpng.com/20190614/ufs/kisspng-calendar-date-computer-icons-clip-art-portable-net-makeup-5d03354e687745.8711722615604913424279.jpg",
        title: "SCHEDULE",
        details:
          "Available during peak hours from 8:00am-5:00pm PST Mondays-Fridays, but can teach 24/7",
      },
      {
        img: "https://previews.123rf.com/images/eljanstock/eljanstock1811/eljanstock181113816/112481784-id-card-vector-icon-isolated-on-transparent-background-id-card-transparency-logo-concept.jpg",
        title: "TAX IDENTIFICATION NUMBER",
        details: "Tax Identification Number (TIN) issued in the Philippines",
      },
    ],
  },
];

export const contacts = [
  {
    title: "Address",
    details: [
      "6th Floor ITC Building, 337 Senator",
      "Gil Puyat Avenue, Makati City,",
      "Metro Manila, Philippines",
    ],
  },
  {
    title: "Cellphone Numbers",
    details: ["0966 683 9818", "0916 177 1386", "0916 378 7091"],
  },
  {
    title: "Telephone Number",
    details: ["(8) 816 6426"],
  },
  {
    title: "Email address",
    details: ["recruit-support@weblio.com.ph"],
  },
];

export const links = [{ name: "HOME", logo: <FaHome />, path: "/" }];

export const dropdownInfo = [
  {
    header: "Tutor Rate",
    logo: <FaDonate />,
    selection: [
      { name: "Rules", path: "/tutor-rate/rules" },
      { name: "Simulator", path: "/tutor-rate/simulator" },
    ],
  },
  {
    header: "About Us",
    logo: <FaQuestion />,
    selection: [{ name: "Company Profile", path: "/about-us/company-profile" }],
  },
];

export const rulesContent = [
  { header: "Rate per lesson", content: <RateInfo /> },
  { header: "How much do I earn a month?", content: <IncomeInfo /> },
  { header: "Simulator", content: <SimulatorInfo /> },
];

export const ratePerLessonInfo = [
  {
    rank: "A",
    perLesson: 100,
    perHour: 200,
    note: "You are the epitome of a professional Weblio tutor!",
  },
  {
    rank: "B",
    perLesson: 75,
    perHour: 150,
    note: "Conduct more lessons while meeting all criteria such as 0 troubles to move up!",
  },
  {
    rank: "C",
    perLesson: 70,
    perHour: 140,
    note: "Conduct more lessons while meeting all criteria such as 0 troubles to move up!",
  },
  {
    rank: "D",
    perLesson: 65,
    perHour: 130,
    note: "Conduct more lessons while meeting all criteria such as 0 troubles to move up!",
  },
  {
    rank: "E",
    perLesson: 60,
    perHour: 120,
    note: "Conduct more lessons while meeting all criteria such as 0 troubles to move up!",
  },
  {
    rank: "F",
    perLesson: 50,
    perHour: 100,
    note: "All tutors start from here",
  },
];

export const simulatorInfo = [
  {
    header: "Example 1: 20 lessons per day, 22 days per month",
    days: 22,
    lesson: 20,
    total: 440,
    data: [
      {
        name: "Tutor 1",
        rank: "A(100)",
        gross: "44,000",
      },
      {
        name: "Tutor 2",
        rank: "B(75)",
        gross: "33,000",
      },
      {
        name: "Tutor 3",
        rank: "C(70)",
        gross: "30,800",
      },
      {
        name: "Tutor 4",
        rank: "D(65)",
        gross: "28,600",
      },
      {
        name: "Tutor 5",
        rank: "E(60)",
        gross: "26,400",
      },
      {
        name: "Tutor 6",
        rank: "F(50)",
        gross: "22,000",
      },
    ],
  },
  {
    header: "Example 2: 10 lessons per day, 15 days per month",
    days: 15,
    lesson: 10,
    total: 150,
    data: [
      {
        name: "Tutor 1",
        rank: "A(100)",
        gross: "15,000",
      },
      {
        name: "Tutor 2",
        rank: "B(75)",
        gross: "11,250",
      },
      {
        name: "Tutor 3",
        rank: "C(70)",
        gross: "10,500",
      },
      {
        name: "Tutor 4",
        rank: "D(65)",
        gross: "9,750",
      },
      {
        name: "Tutor 5",
        rank: "E(60)",
        gross: "9,000",
      },
      {
        name: "Tutor 6",
        rank: "F(50)",
        gross: "7,500",
      },
    ],
  },
  {
    header: "Example 3: 8 lessons per day, 10 days per month",
    days: 10,
    lesson: 8,
    total: 80,
    data: [
      {
        name: "Tutor 1",
        rank: "A(100)",
        gross: "8,000",
      },
      {
        name: "Tutor 2",
        rank: "B(75)",
        gross: "6,000",
      },
      {
        name: "Tutor 3",
        rank: "C(70)",
        gross: "5,600",
      },
      {
        name: "Tutor 4",
        rank: "D(65)",
        gross: "5,200",
      },
      {
        name: "Tutor 5",
        rank: "E(60)",
        gross: "4,800",
      },
      {
        name: "Tutor 6",
        rank: "F(50)",
        gross: "4,000",
      },
    ],
  },
];

export const hourlyRate = [200, 150, 140, 130, 120, 100];

export const companyHistory = [
  {
    img: "https://weblioph.com/wp-content/uploads/2016/04/ESTABLISHMENT.png",
    date: 2005,
    details:
      "Establishment in Tokyo Japan. We started with “IT vocabulary binary dictionary.” Very first step for our English learning system.",
  },
  {
    img: "https://weblioph.com/wp-content/uploads/2016/04/DICTIONARY.png",
    date: 2008,
    details:
      "Started online English-Japanese dictionary services. From the beginning, we were focusing on SEO aspect of dictionary business, so users can obtain information they need more easier and faster, which, comes for FREE.",
  },
  {
    img: "https://weblioph.com/wp-content/uploads/2016/04/VOCAB.png",
    date: 2011,
    details:
      "Started offering “English vocabulary notebook” for individual users, which is associated with the online English dictionary. Due to this, we have stable amount of repeating users, who also visit tutorial services.",
  },
  {
    img: "https://weblioph.com/wp-content/uploads/2016/04/SP.png",
    date: 2011,
    details:
      "Opened websites for Smartphones, which allow all user to enjoy almost full feature we have on smartphones. This means they are connected to our service even more. They use our services in daily basis.",
  },
  {
    img: "https://weblioph.com/wp-content/uploads/2016/04/APP.png",
    date: 2013,
    details:
      "Launched “English translation APP.” Now that we have concentrated more on Smartphone users, we made an app to allow them to translate English into Japanese whenever they need, for FREE. The more they use our services, the higher possibility for you to have students.",
  },
  {
    img: "https://weblioph.com/wp-content/uploads/2016/04/EIKAIWA.png",
    date: 2014,
    details:
      "Opened online English tutorial services. As you can see above, we have stable amount of users due to our other services like the dictionary and translation app, and that makes our company different from others; we offer total learning experience.",
  },
  {
    img: "https://weblioph.com/wp-content/uploads/2016/04/ROBOT.png",
    date: 2015,
    details:
      "Launched “AI English tutorial.” With this, students can talk to AI in English. Don’t worry, it’s still not capable of replacing your place. But in accordance to our policy, we don’t hesitate to try something new.",
  },
  {
    img: "https://weblioph.com/wp-content/uploads/2016/06/chat-20.png",
    date: 2017,
    details: "Launched WebRTC – Weblio’s own learning platform.",
  },
];

export const companyInfo = [
  {
    title: "Company Overview",
    details: `Weblio Philippines, Inc., is an affiliate company of GRAS Group, Inc. (formerly Weblio, Inc.), with a head office in Tokyo, Japan.
GRAS Group, Inc., is the leading provider of school/corporate lessons to junior high school and high schools in Japan. In August 2014, Weblio Philippines, Inc., opened its doors to an online English tutorial services as part of the company’s mission to expand mankind’s possibilities. To date, the company has been providing home-based tutors an avenue to expand their possibilities by providing fun and satisfying lessons to our customers.`,
  },
  {
    title: "Mission",
    details: `Expand mankind’s possibilities through the Internet.`,
  },
  {
    title: "Vision",
    details: `Become a great corporation that maximizes the potential of individuals and organizations and contributes to learning and growth.`,
  },
];
