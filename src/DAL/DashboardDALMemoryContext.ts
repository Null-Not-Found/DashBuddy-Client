import type IDashboardDAL from "@/Interface/IDashboardDAL";
import type {DashboardDTO} from "@/DTO/DashboardDTO";

export default class DashboardDALMemoryContext implements IDashboardDAL{
  async save(config: DashboardDTO): Promise<void> {
    localStorage.setItem('DB-state', JSON.stringify(config));
  }
}