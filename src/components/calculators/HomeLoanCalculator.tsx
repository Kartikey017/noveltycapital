
import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { Calculator, Home, DollarSign, Calendar, Plus, Minus } from "lucide-react";

const HomeLoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState<number>(3000000); // 30 Lakhs default
  const [interestRate, setInterestRate] = useState<number>(8); // 8% default
  const [loanTerm, setLoanTerm] = useState<number>(20); // 20 years default
  const [emi, setEmi] = useState<number>(0);
  const [adjustedEmi, setAdjustedEmi] = useState<number>(0);
  const [emiAdjustmentPercent, setEmiAdjustmentPercent] = useState<number>(0);
  const [totalInterest, setTotalInterest] = useState<number>(0);
  const [totalPayment, setTotalPayment] = useState<number>(0);
  const [adjustedTotalInterest, setAdjustedTotalInterest] = useState<number>(0);
  const [adjustedTotalPayment, setAdjustedTotalPayment] = useState<number>(0);
  const [adjustedLoanTerm, setAdjustedLoanTerm] = useState<number>(20);
  const [chartData, setChartData] = useState<any[]>([]);

  useEffect(() => {
    calculateEMI();
  }, [loanAmount, interestRate, loanTerm, emiAdjustmentPercent]);

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
    
    // Calculate adjusted EMI based on adjustment percentage
    const newAdjustedEmi = monthlyEMI * (1 + emiAdjustmentPercent / 100);
    setAdjustedEmi(newAdjustedEmi);
    
    // Calculate new loan term with adjusted EMI
    if (emiAdjustmentPercent !== 0) {
      const newNumberOfPayments = Math.log(newAdjustedEmi / (newAdjustedEmi - loanAmount * monthlyRate)) /
                                Math.log(1 + monthlyRate);
      
      const newLoanTerm = newNumberOfPayments / 12;
      setAdjustedLoanTerm(parseFloat(newLoanTerm.toFixed(1)));
      
      // Calculate adjusted total payment and interest
      const adjustedTotal = newAdjustedEmi * newNumberOfPayments;
      const adjustedInterest = adjustedTotal - loanAmount;
      
      setAdjustedTotalInterest(adjustedInterest);
      setAdjustedTotalPayment(adjustedTotal);
      
      // Generate chart data for amortization with adjusted EMI
      generateChartData(loanAmount, monthlyRate, newNumberOfPayments, newAdjustedEmi);
    } else {
      setAdjustedLoanTerm(loanTerm);
      setAdjustedTotalInterest(interest);
      setAdjustedTotalPayment(total);
      
      // Generate chart data for standard amortization
      generateChartData(loanAmount, monthlyRate, numberOfPayments, monthlyEMI);
    }
    
    setTotalInterest(interest);
    setTotalPayment(total);
  };

  const generateChartData = (principal: number, monthlyRate: number, numberOfPayments: number, emi: number) => {
    const data = [];
    let balance = principal;
    let totalInterestPaid = 0;
    let totalPrincipalPaid = 0;
    
    // Group data by year for chart (showing yearly data points)
    for (let year = 0; year <= Math.ceil(numberOfPayments / 12); year++) {
      if (year === 0) {
        data.push({
          year,
          balance,
          principalPaid: 0,
          interestPaid: 0
        });
        continue;
      }
      
      // Calculate 12 months of payments for each year
      for (let month = 1; month <= 12; month++) {
        if ((year - 1) * 12 + month > numberOfPayments) break;
        
        const interestForMonth = balance * monthlyRate;
        const principalForMonth = emi - interestForMonth;
        
        totalInterestPaid += interestForMonth;
        totalPrincipalPaid += principalForMonth;
        balance -= principalForMonth;
      }
      
      data.push({
        year,
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

  const handleEmiAdjustmentChange = (value: number) => {
    setEmiAdjustmentPercent(value);
  };

  const increaseEMI = () => {
    setEmiAdjustmentPercent(prev => Math.min(prev + 5, 50));
  };

  const decreaseEMI = () => {
    setEmiAdjustmentPercent(prev => Math.max(prev - 5, -30));
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Home Loan EMI Calculator</h2>
      <p className="text-muted-foreground mb-6">
        Calculate your monthly EMI, total interest paid, and amortization schedule for your home loan.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <Label htmlFor="loan-amount">Loan Amount</Label>
              <span className="text-sm font-medium">{formatIndianCurrency(loanAmount)}</span>
            </div>
            <Slider 
              id="loan-amount"
              min={100000} 
              max={10000000} 
              step={100000} 
              value={[loanAmount]} 
              onValueChange={(value) => handleLoanAmountChange(value[0])}
            />
            <Input
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              min={100000}
              max={10000000}
            />
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <Label htmlFor="interest-rate">Interest Rate (%)</Label>
              <span className="text-sm font-medium">{interestRate}%</span>
            </div>
            <Slider 
              id="interest-rate"
              min={5} 
              max={20} 
              step={0.1} 
              value={[interestRate]} 
              onValueChange={(value) => handleInterestRateChange(value[0])}
            />
            <Input
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              min={5}
              max={20}
              step={0.1}
            />
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <Label htmlFor="loan-term">Loan Term (years)</Label>
              <span className="text-sm font-medium">{loanTerm} years</span>
            </div>
            <Slider 
              id="loan-term"
              min={1} 
              max={30} 
              step={1} 
              value={[loanTerm]} 
              onValueChange={(value) => handleLoanTermChange(value[0])}
            />
            <Input
              type="number"
              value={loanTerm}
              onChange={(e) => setLoanTerm(Number(e.target.value))}
              min={1}
              max={30}
            />
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <Label htmlFor="emi-adjustment">EMI Adjustment (%)</Label>
              <div className="flex items-center gap-2">
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={decreaseEMI}
                  disabled={emiAdjustmentPercent <= -30}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="text-sm font-medium">{emiAdjustmentPercent > 0 ? '+' : ''}{emiAdjustmentPercent}%</span>
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={increaseEMI}
                  disabled={emiAdjustmentPercent >= 50}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <Slider 
              id="emi-adjustment"
              min={-30} 
              max={50} 
              step={5} 
              value={[emiAdjustmentPercent]} 
              onValueChange={(value) => handleEmiAdjustmentChange(value[0])}
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
                  <div className="flex items-baseline gap-2">
                    <p className="text-2xl font-semibold">{formatIndianCurrency(adjustedEmi)}</p>
                    {emiAdjustmentPercent !== 0 && (
                      <p className="text-sm font-medium text-muted-foreground">
                        (standard: {formatIndianCurrency(emi)})
                      </p>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Principal</p>
                    <p className="text-xl font-semibold">{formatIndianCurrency(loanAmount)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {emiAdjustmentPercent !== 0 ? 'New Loan Term' : 'Loan Term'}
                    </p>
                    <p className="text-xl font-semibold">
                      {adjustedLoanTerm} years
                      {emiAdjustmentPercent !== 0 && adjustedLoanTerm !== loanTerm && (
                        <span className="text-sm font-medium text-muted-foreground ml-2">
                          ({emiAdjustmentPercent > 0 ? '-' : '+'}
                          {Math.abs(adjustedLoanTerm - loanTerm).toFixed(1)} years)
                        </span>
                      )}
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Interest</p>
                    <div className="flex flex-col">
                      <p className="text-xl font-semibold">{formatIndianCurrency(adjustedTotalInterest)}</p>
                      {emiAdjustmentPercent !== 0 && (
                        <p className="text-sm text-green-600">
                          {adjustedTotalInterest < totalInterest ? 'Save ' : 'Add '}
                          {formatIndianCurrency(Math.abs(adjustedTotalInterest - totalInterest))}
                        </p>
                      )}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Total Payment</p>
                    <p className="text-xl font-bold text-primary">{formatIndianCurrency(adjustedTotalPayment)}</p>
                  </div>
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
                  tickFormatter={(value) => `₹${(value/100000).toFixed(0)}L`} 
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

export default HomeLoanCalculator;
