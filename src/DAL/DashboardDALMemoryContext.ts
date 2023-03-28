import type IDashboardDAL from "@/Interface/IDashboardDAL";
import type {DashboardDTO} from "@/DTO/DashboardDTO";
import type IDashboardCollectionDAL from "@/Interface/IDashboardCollectionDAL";

export default class DashboardDALMemoryContext implements IDashboardCollectionDAL, IDashboardDAL {
  async fetch(id: string): Promise<DashboardDTO> {
    return new Promise(resolve => {

      const response = localStorage.getItem(`DB-state_${id}`)

      if (!response) {
        throw new Error("No dashboard found.")
      }

      resolve(JSON.parse(response) as DashboardDTO)
    })

  }

  async save(id: string, config: DashboardDTO): Promise<void> {
    localStorage.setItem(`DB-state_${id}`, JSON.stringify(config));
  }
}