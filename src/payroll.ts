export type Salary = {
  born: Date;
  payday: Date;
  gross: number;
};

export type Deductions = Map<string, number>;

export const DEDUCTION_RATES: Deductions = new Map([
  ["AHV", 8.7],
  ["IV", 1.4],
  ["EO", 0.5],
  ["ALV", 1.1],
  ["NBU", 0.73],
  ["PK", 8.9],
]);

export type Payslip = {
  salary: Salary;
  deductions: Deductions;
  totalDeductions: number;
  net: number;
};

export function calculatePayslip(salary: Salary): Payslip {
  // TODO: implement
  const deductions: Deductions = new Map();
  const { payday, born } = salary;

  const age = payday.getFullYear() - born.getFullYear();


  //If you have to pay AHV, IV and EO
  //If you are under 17, you don't have to pay AHV, IV and EO
  if (age >= 17) {
      ["AHV", "IV", "EO"].forEach((key) => {
      const rate = DEDUCTION_RATES.get(key);
      deductions.set(key, (salary.gross * rate));
      });
  }

  

  



  const result: Payslip = {
    salary: salary,
    deductions: new Map(),
    totalDeductions: 0.0,
    net: salary.gross,
  };
  return result;
}
