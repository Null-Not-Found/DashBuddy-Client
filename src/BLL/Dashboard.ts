import type IDashboardDAL from "@/Interface/IDashboardDAL";
import Widget from "@/BLL/Widget";
import type {DashboardDTO} from "@/DTO/DashboardDTO";
import type {WidgetDTO} from "@/DTO/WidgetDTO";

export default class Dashboard {
  private static DashboardDAL: IDashboardDAL
  private __widgets: Widget[]

  static setDAL(DAL: IDashboardDAL) {
    Dashboard.DashboardDAL = DAL;
  }

  constructor(
    private __id: string,
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

  get id(): string {
    return this.__id
  }

  get widgets(): Widget[] {
    const output = [...this.__widgets];

    Object.freeze(output);

    return output;
  }

  async save() {
    await Dashboard.DashboardDAL.save(this.__id, this.toDTO())
  }

  async createWidget(label: string, x: number, y: number, width: number, height: number) {
    this.__widgets.push(new Widget(1, label, x, y, width, height));

    await this.save();
  }

  async deleteWidget(id: number) {
    for (let i = 0; i < this.__widgets.length; i++) {
      if (this.__widgets[i].id == id) {
        this.__widgets.splice(id, 1);
      }
    }

    await this.save()
  }

  private widgetsToDTO(): WidgetDTO[] {
    const output = [] as WidgetDTO[]

    this.__widgets.forEach(widget => {
      output.push(widget.toDTO())
    })

    return output
  }

  toDTO(): DashboardDTO {
    return {
      id: this.__id,
      version: this.version,
      columns: this.columns,
      rows: this.rows,
      widgets: this.widgetsToDTO()
    }
  }
}