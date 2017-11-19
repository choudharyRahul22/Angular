export class TrackerModel {

  public _monthName = '';
  public _jiraId = '';
  public _customerName = '';
  public _jiraDescription = '';
  public _developerName = '';
  public _priority = '';
  public _severity = '';
  public _version = '';
  public _etaToFix = '';
  public _defectType = '';
  public _startDate = '';
  public _endDate = '';
  public _status = '';
  public _stepToReproduce = '';
  public _stepToReproduceDetailsIfAny = '';
  public _followUpWithGS2 = '';
  public _environmentSetup = '';
  public _analysis = '';
  public _devlopement = '';
  public _codeReview = '';
  public _providedSupportToQA = '';
  public _rework = '';
  public _portingRequired = '';
  public _portingJiraId = '';
  public _portingEffort = '';
  public _reason = '';
  public _totalEffort = '';
  public _complexity = '';
  public _contextSwitch = '';
  public _monthCode = '';
  public _dublicate = '';


  constructor(monthName: string, jiraId: string, customerName: string, jiraDescription: string, developerName: string, priority: string, severity: string, version: string, etaToFix: string, defectType: string, startDate: string, endDate: string, status: string, stepToReproduce: string, stepToReproduceDetailsIfAny: string, followUpWithGS2: string, environmentSetup: string, analysis: string, devlopement: string, codeReview: string, providedSupportToQA: string, rework: string, portingRequired: string, portingJiraId: string, portingEffort: string, reason: string, totalEffort: string, complexity: string, contextSwitch: string, monthCode: string, dublicate: string) {
    this._monthName = monthName;
    this._jiraId = jiraId;
    this._customerName = customerName;
    this._jiraDescription = jiraDescription;
    this._developerName = developerName;
    this._priority = priority;
    this._severity = severity;
    this._version = version;
    this._etaToFix = etaToFix;
    this._defectType = defectType;
    this._startDate = startDate;
    this._endDate = endDate;
    this._status = status;
    this._stepToReproduce = stepToReproduce;
    this._stepToReproduceDetailsIfAny = stepToReproduceDetailsIfAny;
    this._followUpWithGS2 = followUpWithGS2;
    this._environmentSetup = environmentSetup;
    this._analysis = analysis;
    this._devlopement = devlopement;
    this._codeReview = codeReview;
    this._providedSupportToQA = providedSupportToQA;
    this._rework = rework;
    this._portingRequired = portingRequired;
    this._portingJiraId = portingJiraId;
    this._portingEffort = portingEffort;
    this._reason = reason;
    this._totalEffort = totalEffort;
    this._complexity = complexity;
    this._contextSwitch = contextSwitch;
    this._monthCode = monthCode;
    this._dublicate = dublicate;
  }



}
