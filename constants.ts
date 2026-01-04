
import { Employee } from './types';

export const COMPANY_NAME = "InnoWave Technologies Pvt. Ltd.";

export const EMPLOYEE_HANDBOOK_CONTENT = `
INNOWAVE TECHNOLOGIES PVT. LTD. - EMPLOYEE HANDBOOK

1. COMPANY OVERVIEW & CULTURE

1.1 Mission, Vision, Core Values
Our Mission: To empower global enterprises with cutting-edge AI-driven software solutions that transform complex data into actionable insights.
Our Vision: To be the world's most trusted partner for ethical AI and sustainable software engineering.
Core Values: Integrity, Innovation, Inclusivity, and Impact.

1.2 Diversity & Inclusion
InnoWave is an equal opportunity employer. We celebrate diversity and are committed to creating an inclusive environment for all employees regardless of race, gender, sexual orientation, disability status, or background. We maintain a zero-tolerance policy towards discrimination and harassment.

1.3 Code of Conduct
Employees are expected to maintain professional standards of behavior, dressing appropriately for their roles and interacting with colleagues and clients with respect. High ethical standards must be upheld in all business dealings.

2. EMPLOYMENT POLICIES

2.1 Working Hours
Standard working hours are 9:30 AM to 6:30 PM, Monday through Friday. A mandatory one-hour break for lunch is included. Total weekly expectation is 40 hours.

2.2 Remote & Hybrid Work Policy
InnoWave follows a hybrid-first model. Employees are expected to be in the office for a minimum of 2 days per week (typically Tuesday and Thursday). Full remote work may be granted on a case-by-case basis by Department Heads.

2.3 Attendance & Punctuality
All employees must log their attendance via the "WaveHR" portal. Persistent tardiness without prior notification is considered a performance issue.

3. LEAVE POLICY

3.1 Casual Leave (CL)
Employees are entitled to 12 days of Casual Leave per calendar year. CL cannot be carried forward to the next year.

3.2 Sick Leave (SL)
Employees are entitled to 10 days of Sick Leave per calendar year. Medical certificates are required for absences exceeding 3 consecutive days.

3.3 Earned Leave (EL)
Employees accrue 1.5 days of Earned Leave for every month worked (18 days per year). A maximum of 45 days can be carried forward.

3.4 Maternity & Paternity Leave
Maternity Leave: 26 weeks of paid leave for female employees.
Paternity Leave: 15 days of paid leave for male employees, to be taken within 6 months of the child's birth.

3.5 Public Holidays
InnoWave observes 10 mandatory public holidays per year. The holiday calendar is published on the intranet every December.

3.6 Leave Approval Workflow
All leave requests must be submitted via WaveHR at least 48 hours in advance for CL and 2 weeks in advance for EL. Final approval rests with the immediate reporting manager.

4. COMPENSATION & BENEFITS

4.1 Salary Structure Overview
Salaries consist of a Basic component, House Rent Allowance (HRA), Special Allowance, and variable Performance Bonus. Salaries are credited on the last working day of each month.

4.2 Health Insurance Policy
InnoWave provides comprehensive medical insurance for the employee, spouse, and up to two children, with a total cover of INR 5,00,000 per annum.

4.3 Provident Fund & Gratuity
Statutory contributions to the Employee Provident Fund (EPF) are made monthly. Gratuity is payable to employees who complete 5 continuous years of service.

4.4 Performance Bonuses
Annual bonuses are calculated based on individual performance ratings and company profitability. Payouts occur in the April payroll cycle.

5. IT & SECURITY POLICIES

5.1 Email and System Usage
Company email is for professional use only. Excessive personal use of company systems is prohibited.

5.2 Password Policy
Passwords must be at least 12 characters long, containing uppercase, lowercase, numbers, and symbols. Passwords must be changed every 90 days.

5.3 Data Confidentiality
Non-Disclosure Agreements (NDAs) signed at the time of joining are binding. Client data must never be stored on personal devices.

5.4 Asset Allocation
Laptops and access cards are company property. Assets must be returned in good condition upon separation. Loss of assets must be reported to IT Support within 4 hours.

6. PERFORMANCE MANAGEMENT

6.1 Probation Period
All new hires undergo a 6-month probation period. A formal confirmation review is conducted at the end of this period.

6.2 Performance Review Cycles
Annual appraisals occur every March. Mid-year check-ins are conducted in September to track progress against goals.

6.3 Promotion Criteria
Promotions are based on a combination of technical competency, leadership potential, and consistent delivery of business value.

7. GRIEVANCE & ESCALATION MATRIX

7.1 HR Contact Process
For payroll or policy queries, contact hr-support@innowave.ai. For personal grievances, employees should first approach their direct manager.

7.2 Ethics Committee
Violations of the Code of Conduct should be reported to the Ethics Committee at ethics@innowave.ai.

7.3 Whistleblower Policy
InnoWave provides a confidential channel for reporting illegal or unethical activities without fear of retaliation via the "SpeakUp" portal.
`;

export const EMPLOYEE_DIRECTORY_CSV = `Name,Role,Department,Email,Reporting Manager,Current Project
Ananya Sharma,HR Director,HR,ananya.s@innowave.ai,CEO,Org Design 2024
Rajesh Kumar,Lead IT Support,IT Support,rajesh.k@innowave.ai,Ananya Sharma,Asset Migration
Vikram Malhotra,Chief Architect,Engineering,vikram.m@innowave.ai,CTO,Project Zenith AI
Priya Iyer,Marketing Manager,Marketing,priya.i@innowave.ai,CMO,Brand Refresh
Sandeep Singh,Financial Controller,Finance,sandeep.s@innowave.ai,CFO,Q3 Audit
Meera Deshmukh,Operations Lead,Operations,meera.d@innowave.ai,COO,Facility Expansion
Amit Patel,Senior Software Engineer,Engineering,amit.p@innowave.ai,Vikram Malhotra,Project Zenith AI
Sonal Gupta,IT Specialist,IT Support,sonal.g@innowave.ai,Rajesh Kumar,Global VPN Update
Rahul Verma,Product Designer,Engineering,rahul.v@innowave.ai,Vikram Malhotra,Zenith UI/UX
Neha Reddy,Social Media Specialist,Marketing,neha.r@innowave.ai,Priya Iyer,Campaign Wave
Arjun Kapoor,Network Administrator,IT Support,arjun.k@innowave.ai,Rajesh Kumar,Office 365 Setup
Tanvi Joshi,HR Generalist,HR,tanvi.j@innowave.ai,Ananya Sharma,New Hire Orientation`;

export const parseDirectory = (csv: string): Employee[] => {
  const lines = csv.split('\n');
  const headers = lines[0].split(',');
  return lines.slice(1).map(line => {
    const values = line.split(',');
    return {
      name: values[0],
      role: values[1],
      department: values[2],
      email: values[3],
      reportingManager: values[4],
      currentProject: values[5]
    };
  });
};

export const SAMPLE_QUESTIONS = [
  "What is the maternity leave policy at InnoWave?",
  "Who is the lead for IT support?",
  "Can I work from home all five days?",
  "Who works in the marketing department?",
  "What is the password policy for my laptop?",
  "How often are performance reviews conducted?",
  "Who should I contact for HR-related issues?",
  "What are the core values of InnoWave?",
  "Who does Amit Patel report to and what project is he on?",
  "How many casual leave days do I get per year?"
];
