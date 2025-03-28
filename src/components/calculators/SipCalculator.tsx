
import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { ArrowRight, TrendingUp } from "lucide-react";

const SipCalculator = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState<number>(5000);
  const [annualReturn, setAnnualReturn] = useState<number>(12);
  const [years, setYears] = useState<number>(20);
  const [totalInvestment, setTotalInvestment] = useState<number>(0);
  const [maturityValue, setMaturityValue] = useState<number>(0);
  const [wealthGained, setWealthGained] = useState<number>(0);
  const [chartData, setChartData] = useState<any[]>([]);

  useEffect(() => {
    calculateSIP();
  }, [monthlyInvestment, annualReturn, years]);

  const calculateSIP = () => {
    const monthlyRate = annualReturn / 12 / 100;
    const months = years * 12;
    const totalInvest = monthlyInvestment * months;
    
    const maturityVal = monthlyInvestment * 
      ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
    
    setTotalInvestment(totalInvest);
    setMaturityValue(maturityVal);
    setWealthGained(maturityVal - totalInvest);
    
    // Generate chart data
    const data = [];
    for (let i = 0; i <= years; i++) {
      const currentMonths = i * 12;
      const currentInvestment = monthlyInvestment * currentMonths;
      const currentValue = monthlyInvestment * 
        ((Math.pow(1 + monthlyRate, currentMonths) - 1) / monthlyRate) * (1 + monthlyRate);
      
      data.push({
        year: i,
        investment: currentInvestment,
        value: currentValue
      });
    }
    setChartData(data);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">SIP Calculator</h2>
      <p className="text-muted-foreground mb-6">
        Calculate the returns on your Systematic Investment Plan (SIP) investments.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="monthly-investment">Monthly Investment (₹)</Label>
            <Input
              id="monthly-investment"
              type="number"
              value={monthlyInvestment}
              onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
              min={100}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="annual-return">Expected Annual Return (%)</Label>
            <Input
              id="annual-return"
              type="number"
              value={annualReturn}
              onChange={(e) => setAnnualReturn(Number(e.target.value))}
              min={1}
              max={30}
              step={0.1}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="sip-years">Time Period (Years)</Label>
            <Input
              id="sip-years"
              type="number"
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
              min={1}
              max={50}
            />
          </div>

          <Button onClick={calculateSIP} className="w-full">
            <TrendingUp className="mr-2" /> Calculate
          </Button>
        </div>

        <div className="space-y-6">
          <Card className="bg-muted/40">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Invested Amount</p>
                  <p className="text-xl font-semibold">₹{totalInvestment.toLocaleString('en-IN')}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Estimated Returns</p>
                  <p className="text-xl font-semibold">₹{wealthGained.toLocaleString('en-IN')}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total Value</p>
                  <p className="text-xl font-bold text-primary">₹{maturityValue.toLocaleString('en-IN')}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={chartData}
                margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" label={{ value: 'Years', position: 'insideBottom', offset: -5 }} />
                <YAxis 
                  tickFormatter={(value) => `₹${(value/1000)}k`} 
                  label={{ value: 'Value (₹)', angle: -90, position: 'insideLeft' }}
                />
                <Tooltip 
                  formatter={(value) => [`₹${Number(value).toLocaleString('en-IN')}`, '']}
                  labelFormatter={(label) => `Year ${label}`}
                />
                <Line type="monotone" dataKey="investment" name="Investment" stroke="#8884d8" dot={false} />
                <Line type="monotone" dataKey="value" name="Value" stroke="#82ca9d" dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SipCalculator;
