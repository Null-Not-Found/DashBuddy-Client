import type {WidgetDTO} from "@/DTO/WidgetDTO";

export type DashboardDTO = {
  version: number
  columns: number
  rows: number
  widgets: WidgetDTO[]
}