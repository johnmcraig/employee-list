export interface EmployeeForCreating {
  name: string;
  email: string;
  phoneNumber: string;
  position: string;
  startDate: Date;
  salary?: number;
  hourlyRate?: number;
}
