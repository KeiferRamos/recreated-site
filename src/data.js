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
    header: "Career in Weblio PH",
    logo: <FaBriefcase />,
    selection: [
      { name: "Home Based Tutor", path: "" },
      { name: "Operation Staff", path: "" },
      { name: "Human Resources Staff", path: "" },
      { name: "Material Creation Staff", path: "" },
      { name: "Web Developer", path: "" },
    ],
  },
  {
    header: "About Us",
    logo: <FaQuestion />,
    selection: [
      { name: "Company Profile", path: "" },
      { name: "Dictionary", path: "" },
      { name: "Why Weblio?", path: "" },
    ],
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
