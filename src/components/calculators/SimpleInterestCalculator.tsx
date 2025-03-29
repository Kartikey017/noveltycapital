
import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { ArrowRight, Calculator, DollarSign } from "lucide-react";

const SimpleInterestCalculator = () => {
  const [principal, setPrincipal] = useState<number>(10000);
  const [rate, setRate] = useState<number>(5);
  const [time, setTime] = useState<number>(5);
  const [interest, setInterest] = useState<number>(0);
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const [chartData, setChartData] = useState<any[]>([]);

  useEffect(() => {
    calculateInterest();
  }, [principal, rate, time]);

  const calculateInterest = () => {
    const simpleInterest = (principal * rate * time) / 100;
    const total = principal + simpleInterest;
    
    setInterest(simpleInterest);
    setTotalAmount(total);
    
    // Generate chart data
    const data = [];
    for (let i = 0; i <= time; i++) {
      const currentInterest = (principal * rate * i) / 100;
      const currentTotal = principal + currentInterest;
      
      data.push({
        year: i,
        principal: principal,
        total: currentTotal
      });
    }
    setChartData(data);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Simple Interest Calculator</h2>
      <p className="text-muted-foreground mb-6">
        Calculate the interest earned on your investments with simple interest.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="principal">Principal Amount (₹)</Label>
            <Input
              id="principal"
              type="number"
              value={principal}
              onChange={(e) => setPrincipal(Number(e.target.value))}
              min={100}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="interest-rate">Annual Interest Rate (%)</Label>
            <Input
              id="interest-rate"
              type="number"
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              min={0.1}
              max={50}
              step={0.1}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="time-period">Time Period (Years)</Label>
            <Input
              id="time-period"
              type="number"
              value={time}
              onChange={(e) => setTime(Number(e.target.value))}
              min={1}
              max={30}
            />
          </div>

          <Button onClick={calculateInterest} className="w-full">
            <Calculator className="mr-2" /> Calculate
          </Button>
        </div>

        <div className="space-y-6">
          <Card className="bg-muted/40">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Principal</p>
                  <p className="text-xl font-semibold">₹{principal.toLocaleString('en-IN')}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Simple Interest</p>
                  <p className="text-xl font-semibold">₹{interest.toLocaleString('en-IN')}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Maturity Value</p>
                  <p className="text-xl font-bold text-primary">₹{totalAmount.toLocaleString('en-IN')}</p>
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
                  label={{ value: 'Amount (₹)', angle: -90, position: 'insideLeft' }}
                />
                <Tooltip 
                  formatter={(value) => [`₹${Number(value).toLocaleString('en-IN')}`, '']}
                  labelFormatter={(label) => `Year ${label}`}
                />
                <Line type="monotone" dataKey="principal" name="Principal" stroke="#8884d8" dot={false} />
                <Line type="monotone" dataKey="total" name="Total Amount" stroke="#82ca9d" dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleInterestCalculator;
