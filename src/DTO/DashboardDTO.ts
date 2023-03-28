import type {WidgetDTO} from "@/DTO/widgetDTO";

export type DashboardDTO = {
  version: number
  columns: number
  rows: number
  widgets: WidgetDTO
}