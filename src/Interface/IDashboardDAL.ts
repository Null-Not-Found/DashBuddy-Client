import type {DashboardDTO} from "@/DTO/DashboardDTO";

export default interface IDashboardDAL {
  save(config: DashboardDTO): Promise<void>
}