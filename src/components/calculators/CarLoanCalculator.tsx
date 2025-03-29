
import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { Calculator, Car, DollarSign, Calendar } from "lucide-react";

const CarLoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState<number>(500000); // 5 Lakhs default
  const [interestRate, setInterestRate] = useState<number>(9.5); // 9.5% default
  const [loanTerm, setLoanTerm] = useState<number>(5); // 5 years default
  const [emi, setEmi] = useState<number>(0);
  const [totalInterest, setTotalInterest] = useState<number>(0);
  const [totalPayment, setTotalPayment] = useState<number>(0);
  const [chartData, setChartData] = useState<any[]>([]);

  useEffect(() => {
    calculateEMI();
  }, [loanAmount, interestRate, loanTerm]);

  const calculateEMI = () => {
    // Monthly interest rate
    const monthlyRate = interestRate / 12 / 100;
    
    // Total number of payments
    const numberOfPayments = loanTerm * 12;
    
    // Calculate EMI
    const monthlyEMI = loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments) / 
                      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    
    // Calculate total payment and interest
    const total = monthlyEMI * numberOfPayments;
    const interest = total - loanAmount;
    
    setEmi(monthlyEMI);
    setTotalInterest(interest);
    setTotalPayment(total);
    
    // Generate chart data for amortization
    generateChartData(loanAmount, monthlyRate, numberOfPayments, monthlyEMI);
  };

  const generateChartData = (principal: number, monthlyRate: number, numberOfPayments: number, emi: number) => {
    const data = [];
    let balance = principal;
    let totalInterestPaid = 0;
    let totalPrincipalPaid = 0;
    
    // Since car loans are typically shorter, we'll show data by quarter
    const quarters = loanTerm * 4; // 4 quarters per year
    const monthsPerDataPoint = 3; // 3 months per quarter
    
    data.push({
      quarter: 0,
      year: 0,
      balance,
      principalPaid: 0,
      interestPaid: 0
    });
    
    for (let quarter = 1; quarter <= quarters; quarter++) {
      // Calculate 3 months of payments for each quarter
      for (let month = 1; month <= monthsPerDataPoint; month++) {
        const currentMonth = (quarter - 1) * monthsPerDataPoint + month;
        
        if (currentMonth > numberOfPayments) break;
        
        const interestForMonth = balance * monthlyRate;
        const principalForMonth = emi - interestForMonth;
        
        totalInterestPaid += interestForMonth;
        totalPrincipalPaid += principalForMonth;
        balance -= principalForMonth;
      }
      
      const year = ((quarter - 1) / 4) + 0.25;
      
      data.push({
        quarter,
        year: parseFloat(year.toFixed(2)),
        balance: Math.max(0, balance),
        principalPaid: totalPrincipalPaid,
        interestPaid: totalInterestPaid
      });
    }
    
    setChartData(data);
  };

  const formatIndianCurrency = (amount: number) => {
    return amount.toLocaleString('en-IN', {
      maximumFractionDigits: 0,
      style: 'currency',
      currency: 'INR'
    });
  };

  const handleLoanAmountChange = (value: number) => {
    setLoanAmount(value);
  };

  const handleInterestRateChange = (value: number) => {
    setInterestRate(value);
  };

  const handleLoanTermChange = (value: number) => {
    setLoanTerm(value);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Car Loan EMI Calculator</h2>
      <p className="text-muted-foreground mb-6">
        Calculate your monthly EMI, total interest paid, and repayment schedule for your car loan.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <Label htmlFor="car-loan-amount">Loan Amount</Label>
              <span className="text-sm font-medium">{formatIndianCurrency(loanAmount)}</span>
            </div>
            <Slider 
              id="car-loan-amount"
              min={50000} 
              max={2000000} 
              step={10000} 
              value={[loanAmount]} 
              onValueChange={(value) => handleLoanAmountChange(value[0])}
            />
            <Input
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              min={50000}
              max={2000000}
            />
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <Label htmlFor="car-interest-rate">Interest Rate (%)</Label>
              <span className="text-sm font-medium">{interestRate}%</span>
            </div>
            <Slider 
              id="car-interest-rate"
              min={6} 
              max={18} 
              step={0.1} 
              value={[interestRate]} 
              onValueChange={(value) => handleInterestRateChange(value[0])}
            />
            <Input
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              min={6}
              max={18}
              step={0.1}
            />
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <Label htmlFor="car-loan-term">Loan Term (years)</Label>
              <span className="text-sm font-medium">{loanTerm} years</span>
            </div>
            <Slider 
              id="car-loan-term"
              min={1} 
              max={7} 
              step={1} 
              value={[loanTerm]} 
              onValueChange={(value) => handleLoanTermChange(value[0])}
            />
            <Input
              type="number"
              value={loanTerm}
              onChange={(e) => setLoanTerm(Number(e.target.value))}
              min={1}
              max={7}
            />
          </div>

          <Button onClick={calculateEMI} className="w-full">
            <Calculator className="mr-2" /> Calculate EMI
          </Button>
        </div>

        <div className="space-y-6">
          <Card className="bg-muted/40">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Monthly EMI</p>
                  <p className="text-2xl font-semibold">{formatIndianCurrency(emi)}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Principal</p>
                    <p className="text-xl font-semibold">{formatIndianCurrency(loanAmount)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Total Interest</p>
                    <p className="text-xl font-semibold">{formatIndianCurrency(totalInterest)}</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total Payment</p>
                  <p className="text-xl font-bold text-primary">{formatIndianCurrency(totalPayment)}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={chartData}
                margin={{ top: 5, right: 5, left: 5, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="year" 
                  label={{ value: 'Years', position: 'insideBottom', offset: -15 }} 
                />
                <YAxis 
                  tickFormatter={(value) => `₹${(value/1000).toFixed(0)}K`} 
                  label={{ value: 'Amount (₹)', angle: -90, position: 'insideLeft', offset: -5 }}
                />
                <Tooltip 
                  formatter={(value) => [formatIndianCurrency(Number(value)), '']}
                  labelFormatter={(label) => `Year ${label}`}
                />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="balance" 
                  name="Outstanding Balance" 
                  stroke="#8884d8" 
                  activeDot={{ r: 8 }} 
                />
                <Line 
                  type="monotone" 
                  dataKey="principalPaid" 
                  name="Principal Paid" 
                  stroke="#82ca9d" 
                />
                <Line 
                  type="monotone" 
                  dataKey="interestPaid" 
                  name="Interest Paid" 
                  stroke="#ff7300" 
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarLoanCalculator;
