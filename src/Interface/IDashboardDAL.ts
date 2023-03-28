import type {DashboardDTO} from "@/DTO/DashboardDTO";

export default interface IDashboardDAL {
  save(id: string, config: DashboardDTO): Promise<void>
}