import type {DashboardDTO} from "@/DTO/DashboardDTO";

export default interface IDashboardCollectionDAL {
  fetch(id: string): Promise<DashboardDTO>
}