import type IWidgetDAL from "@/Interface/IWidgetDAL";

export default class WidgetDALMemoryContext implements IWidgetDAL {
  async fetch(): Promise<object> {
    return {}
  }
}