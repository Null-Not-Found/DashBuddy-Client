import Dashboard from "@/BLL/Dashboard";
import type IDashboardCollectionDAL from "@/Interface/IDashboardCollectionDAL";

export default class DashboardCollection {
  private static DashboardCollectionDAL: IDashboardCollectionDAL

  async fetch(id: string): Promise<Dashboard> {
    const dashboard = await DashboardCollection.DashboardCollectionDAL.fetch(id);

    return new Dashboard(
      dashboard.version,
      dashboard.columns,
      dashboard.rows,
      dashboard.widgets
    )
  }
}