export class Bookmark {
  constructor(
    private _id: number,
    public name: string,
    public url: string,
    public group: string) {
  }

  get id(): number {
    return this._id;
  }
}
