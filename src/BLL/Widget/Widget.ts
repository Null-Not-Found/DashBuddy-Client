import type { WidgetDTO } from "@/DTO/WidgetDTO";

export default class Widget {
  constructor(
    public id: number,
    public title: string,
    public chartType: string
  ) {}

  toDTO(): WidgetDTO {
    return {
      id: this.id,
      title: this.title,
      chartType: this.chartType,
    };
  }
}
