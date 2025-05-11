import { calculatePayslip, Payslip } from "./payroll";


test("16yo employee 700CHF", () => {
    const payroll = calculatePayslip({
        born: new Date("2007-01-01"),
        payday: new Date("2023-10-01"),
        gross: 1200,
    });

    expect(payroll.net).toEqual(700);
    expect(payroll.deductions.has("AHV")).toBe(false);

})


test("18yo employee 1200CHF", () => {
    const payroll = calculatePayslip({
        born: new Date("2005-01-01"),
        payday: new Date("2023-10-01"),
        gross: 1200,
    });

    expect(payroll.net).toBeLessThan(1200);
    expect(payroll.deductions.has("AHV")).toBe(true);

})

test("21yo employee 5900CHF", () => {
    const payroll = calculatePayslip({
        born: new Date("2005-01-01"),
        payday: new Date("2023-10-01"),
        gross: 1200,
    });

    expect(payroll.net).toBeLessThan(5900);
    expect(payroll.deductions.has("PK")).toBe(true);

})