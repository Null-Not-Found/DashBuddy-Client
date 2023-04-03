import type IWidgetDAL from "@/Interface/IWidgetDAL";
import type {WidgetDTO} from "@/DTO/WidgetDTO";

export default class Widget {
  private static widgetDAL: IWidgetDAL

  static injectDAL(DAL: IWidgetDAL) {
    Widget.widgetDAL = DAL;
  }

  constructor(
    private _id: number,
    public label: string,
    public x: number,
    public y: number,
    public width: number,
    public height: number
  ) {
  }

  get id(): number {
    return this._id
  }

  async fetch(): Promise<object> {
    return await Widget.widgetDAL.fetch();
  }

  toDTO(): WidgetDTO {
    return {
      id: this._id,
      label: this.label,
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height
    }
  }
}