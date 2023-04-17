import DashboardCollection from "@/BLL/Dashboard/DashboardCollection";
import type Dashboard from "@/BLL/Dashboard/Dashboard";
import { computed, ref } from "vue";
import type Widget from "@/BLL/Widget/Widget";

const dashboardCollection = new DashboardCollection();
const dashboard = ref<Dashboard>();

export function useDashboard(id: string) {
  if (!dashboard.value) {
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
  }

  function createWidget(title: string, chartType: string) {
    if (!dashboard.value) {
      throw new Error("No dashboard loaded.");
    }

    dashboard.value?.createWidget(title, chartType);
  }

  const widgets = computed<Widget[]>(() => {
    if (!dashboard.value) {
      return [];
    }

    const output: Widget[] = [];

    dashboard.value.widgets.forEach((widget) => {
      output.push(widget);
    });

    return output;
  });

  return { widgets, createWidget };
}
