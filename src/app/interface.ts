export interface IPersonalInformation {
  firstName: string;
  lastName: string;
  email: string;
  countryCode: number | null;
  phoneNumber: number | null;
  portfolio: string;
  instructionalDesigner: boolean | null;
  softwareEngineer: boolean | null;
  softwareQualityEngineer: boolean | null;
  referralName: string | null;
  jobRelatedUpdates: boolean | null;
}

export interface IUserEducationalQualifications {
  aggregatePercentage: string;
  passingYear: number | null;
  qualification: string | null;
  stream: string | null;
  collegeName: string | null;
  otherCollageName: string | null;
  collageLocation: string;
}

export interface IUserFresher {
  javascript: boolean;
  angularJS: boolean;
  react: boolean;
  nodeJS: boolean;
  others: boolean;
  otherTechnologies: string | null;
  isAppearedInTestByZeus: boolean | null;
  appearedRoleName: string | null;
}
