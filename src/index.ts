import DashboardCollection from "@/BLL/Dashboard/DashboardCollection";
import Dashboard from "@/BLL/Dashboard/Dashboard";
import Widget from "@/BLL/Widget/Widget";
import "./Style/style.css";

import DashboardDALMemoryContext from "@/DAL/DashboardDALMemoryContext";
import WidgetDALMemoryContext from "@/DAL/WidgetDALMemoryContext";

// Initialize the BLL with the appropriate DAL, using dependency injection.
DashboardCollection.injectDAL(new DashboardDALMemoryContext());
Dashboard.injectDAL(new DashboardDALMemoryContext());
Widget.injectDAL(new WidgetDALMemoryContext());

import DbDashboard from "./components/Dashboard/MainDashboard.vue";

export { DbDashboard };
