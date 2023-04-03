import type {DashboardDTO} from "@/DTO/DashboardDTO";

export default interface IDashboardCollectionDAL {
  fetch(id: string): Promise<DashboardDTO>
  delete(id: string): Promise<void>
}