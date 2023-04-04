import DashboardCollection from "@/BLL/Dashboard/DashboardCollection";
import type Dashboard from "@/BLL/Dashboard/Dashboard";
import { ref } from "vue";

const dashboardCollection = new DashboardCollection();
const dashboard = ref<Dashboard>();

export function useDashboard(id: string) {
  dashboardCollection
    .fetchDashboard(id)
    .then((db) => {
      dashboard.value = db;
    })
    .catch(() => {
      dashboardCollection.createDashboard().then((db) => {
        dashboard.value = db;
      });
    });

  return { dashboard };
}
