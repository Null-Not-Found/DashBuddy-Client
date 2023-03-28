import type {WidgetDTO} from "@/DTO/WidgetDTO";

export type DashboardDTO = {
  id: string
  version: number
  columns: number
  rows: number
  widgets: WidgetDTO[]
}