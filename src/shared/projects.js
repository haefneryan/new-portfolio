import FoodBank from "@mui/icons-material/FoodBank";
import GamepadIcon from "@mui/icons-material/Gamepad";
import MenuBook from "@mui/icons-material/MenuBook";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import ViewListIcon from "@mui/icons-material/ViewList";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LaptopIcon from "@mui/icons-material/Laptop";
import ExtensionIcon from "@mui/icons-material/Extension";
import MailOutline from "@mui/icons-material/MailOutline";
import StorageIcon from "@mui/icons-material/Storage";
import ForestIcon from "@mui/icons-material/Forest";
import DashboardIcon from "@mui/icons-material/Dashboard";
import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser";
import InsertChartIcon from "@mui/icons-material/InsertChart";

export const projects = [
  {
    title: "Food App",
    url: "https://food-app-47so.onrender.com/",
    icon: FoodBank,
  },
  {
    title: "Football Guessing Game",
    url: "https://football-game-75856.web.app/",
    icon: GamepadIcon,
  },
  {
    title: "Recipe Book",
    url: "https://cook-book-app-2f4b3.web.app/",
    icon: MenuBook,
  },
  {
    title: "Mass Emailing App",
    url: "http://mass-email-app-hosting.s3-website-us-east-1.amazonaws.com/",
    icon: MailOutline,
  },
  {
    title: "Platform",
    url: null,
    icon: ForestIcon,
    images: [
      require("../assets/platform/platform1.jpg"),
      require("../assets/platform/platform2.jpg"),
      require("../assets/platform/platform3.jpg"),
      require("../assets/platform/platform4.jpg"),
      require("../assets/platform/platform5.jpg"),
      require("../assets/platform/platform6.jpg"),
      require("../assets/platform/platform7.jpg"),
      require("../assets/platform/platform8.jpg"),
      require("../assets/platform/platform9.jpg"),
      require("../assets/platform/platform10.jpg"),
      require("../assets/platform/platform11.jpg"),
      require("../assets/platform/platform12.jpg"),
    ],
  },
  {
    title: "Portal",
    url: null,
    icon: DashboardIcon,
    images: [
      require("../assets/portal/Dashboard1.jpg"),
      require("../assets/portal/Dashboard2.jpg"),
      require("../assets/portal/Dashboard3.jpg"),
      require("../assets/portal/Dashboard4.jpg"),
      require("../assets/portal/Dashboard5.jpg"),
      require("../assets/portal/Dashboard6.jpg"),
    ],
  },
  {
    title: "Website Builder",
    url: null,
    icon: OpenInBrowserIcon,
    images: [
      require("../assets/builder/Builder1.jpg"),
      require("../assets/builder/Builder2.jpg"),
      require("../assets/builder/Builder3.jpg"),
      require("../assets/builder/Builder4.jpg"),
    ],
  },
  {
    title: "Dashboard",
    url: null,
    icon: InsertChartIcon,
    images: [
      require("../assets/dashboard/Proj1.jpg"),
      require("../assets/dashboard/Proj2.jpg"),
      require("../assets/dashboard/Proj3.jpg"),
      require("../assets/dashboard/Proj4.jpg"),
    ],
  },
  {
    title: "Football Data App",
    url: "https://haefneryan.github.io/football-data-app/",
    icon: StorageIcon,
  },
  {
    title: "Scheduling Tool",
    url: "https://haefneryan.github.io/work-app-client",
    icon: FormatListBulletedIcon,
  },
  {
    title: "Job Board",
    url: "https://job-board-client-haefneryan.herokuapp.com/",
    icon: ViewListIcon,
  },
  {
    title: "Shop App",
    url: "https://haefneryan.github.io/react-shop-app/",
    icon: ShoppingCartIcon,
  },
  {
    title: "Student Grades",
    url: "https://haefneryan.github.io/student-grades-react/",
    icon: LaptopIcon,
  },
  {
    title: "Word Scrambler",
    url: "https://haefneryan.github.io/word-scrambler/",
    icon: ExtensionIcon,
  },
];
