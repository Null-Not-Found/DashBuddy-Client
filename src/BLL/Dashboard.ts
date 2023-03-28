import type IDashboardDAL from "@/Interface/IDashboardDAL";
import Widget from "@/BLL/Widget";
import type {DashboardDTO} from "@/DTO/DashboardDTO";
import type {WidgetDTO} from "@/DTO/WidgetDTO";

export default class Dashboard {
  private static DashboardDAL: IDashboardDAL
  private __widgets: Widget[]

  constructor(
    private id: string,
    public version: number,
    public columns: number,
    public rows: number,
    widgets: WidgetDTO[]
  ) {
    this.__widgets = []

    widgets.forEach(widget => {
      this.__widgets.push(
        new Widget(
          widget.id,
          widget.label,
          widget.x,
          widget.y,
          widget.width,
          widget.height
        )
      )
    })
  }

  createWidget(id: number, label: string, x: number, y: number, width: number, height: number) {
    this.__widgets.push(new Widget(1, label, x, y, width, height));
  }

  deleteWidget(id: number) {
    for (let i = 0; i < this.__widgets.length; i++) {
      if (this.__widgets[i].id == id) {
        this.__widgets.splice(id, 1);
      }
    }

    Dashboard.DashboardDAL.save(this.id, this.toDTO());
  }

  toDTO(): DashboardDTO {
    const widgetDTOs = [] as WidgetDTO[]

    this.__widgets.forEach(widget => {
      widgetDTOs.push(widget.toDTO())
    })

    return {
      id: this.id,
      version: this.version,
      columns: this.columns,
      rows: this.rows,
      widgets: widgetDTOs
    }
  }
}