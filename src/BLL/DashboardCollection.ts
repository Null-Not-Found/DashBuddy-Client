import Dashboard from "@/BLL/Dashboard";
import type IDashboardCollectionDAL from "@/Interface/IDashboardCollectionDAL";

export default class DashboardCollection {
  private static DashboardCollectionDAL: IDashboardCollectionDAL

  static injectDAL(DAL: IDashboardCollectionDAL) {
    DashboardCollection.DashboardCollectionDAL = DAL
  }

  async fetchDashboard(id: string): Promise<Dashboard> {
    const dashboard = await DashboardCollection.DashboardCollectionDAL.fetch(id);
    console.log(dashboard)
    return new Dashboard(
      dashboard.id,
      dashboard.version,
      dashboard.columns,
      dashboard.rows,
      dashboard.widgets
    )
  }

  async createDashboard(): Promise<Dashboard> {
    const dashboard = new Dashboard(
      'test',
      1,
      4,
      3,
      []
    )

    await dashboard.save()

    return dashboard
  }
}