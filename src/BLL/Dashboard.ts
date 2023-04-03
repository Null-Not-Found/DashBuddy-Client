import type IDashboardDAL from "@/Interface/IDashboardDAL";
import Widget from "@/BLL/Widget";
import type { DashboardDTO } from "@/DTO/DashboardDTO";
import type { WidgetDTO } from "@/DTO/WidgetDTO";

export default class Dashboard {
  private static DashboardDAL: IDashboardDAL;
  private readonly _widgets: Widget[];
  private _widgetIdIndex = 0;

  static injectDAL(DAL: IDashboardDAL) {
    Dashboard.DashboardDAL = DAL;
  }

  constructor(
    private _id: string,
    public version: number,
    public columns: number,
    public rows: number,
    widgets: WidgetDTO[]
  ) {
    this._widgets = [];

    widgets.forEach((widget) => {
      this._widgets.push(
        new Widget(
          widget.id,
          widget.label,
          widget.x,
          widget.y,
          widget.width,
          widget.height
        )
      );

      if (this._widgetIdIndex < widget.id) {
        this._widgetIdIndex = widget.id;
      }
    });
  }

  get id(): string {
    return this._id;
  }

  get widgets(): Widget[] {
    const output = [...this._widgets];

    Object.freeze(output);

    return output;
  }

  async save() {
    await Dashboard.DashboardDAL.save(this._id, this.toDTO());
  }

  async createWidget(
    label: string,
    x: number,
    y: number,
    width: number,
    height: number
  ) {
    this._widgetIdIndex += 1;

    this._widgets.push(
      new Widget(this._widgetIdIndex, label, x, y, width, height)
    );

    await this.save();
  }

  async deleteWidget(id: number) {
    for (let i = 0; i < this._widgets.length; i++) {
      if (this._widgets[i].id == id) {
        this._widgets.splice(i, 1);
      }
    }

    await this.save();
  }

  private widgetsToDTO(): WidgetDTO[] {
    const output = [] as WidgetDTO[];

    this._widgets.forEach((widget) => {
      output.push(widget.toDTO());
    });

    return output;
  }

  toDTO(): DashboardDTO {
    return {
      id: this._id,
      version: this.version,
      columns: this.columns,
      rows: this.rows,
      widgets: this.widgetsToDTO(),
    };
  }
}
