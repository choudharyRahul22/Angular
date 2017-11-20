export class YourFindingsModel {

  public jiraId = '';
  public customerName = '';
  public note = '';


  constructor(jiraId: string, customerName: string, note: string) {
    this.jiraId = jiraId;
    this.customerName = customerName;
    this.note = note;
  }
}
