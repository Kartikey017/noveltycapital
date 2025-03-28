
import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Calculator, DollarSign } from "lucide-react";

const CompoundCalculator = () => {
  const [principal, setPrincipal] = useState<number>(10000);
  const [rate, setRate] = useState<number>(7);
  const [time, setTime] = useState<number>(5);
  const [compoundFrequency, setCompoundFrequency] = useState<number>(1); // 1 = yearly
  const [finalAmount, setFinalAmount] = useState<number>(0);
  const [interestEarned, setInterestEarned] = useState<number>(0);
  const [chartData, setChartData] = useState<any[]>([]);

  useEffect(() => {
    calculateCompoundInterest();
  }, [principal, rate, time, compoundFrequency]);

  const calculateCompoundInterest = () => {
    const periodicRate = rate / (100 * compoundFrequency);
    const totalPeriods = time * compoundFrequency;
    const finalAmt = principal * Math.pow(1 + periodicRate, totalPeriods);
    
    setFinalAmount(finalAmt);
    setInterestEarned(finalAmt - principal);
    
    // Generate chart data
    const data = [];
    for (let i = 0; i <= time; i++) {
      const currentPeriods = i * compoundFrequency;
      const currentValue = principal * Math.pow(1 + periodicRate, currentPeriods);
      
      data.push({
        year: i,
        value: currentValue
      });
    }
    setChartData(data);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Compound Interest Calculator</h2>
      <p className="text-muted-foreground mb-6">
        Calculate the future value of your investment with compound interest.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="principal">Initial Principal ($)</Label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
              <Input
                id="principal"
                type="number"
                className="pl-10"
                value={principal}
                onChange={(e) => setPrincipal(Number(e.target.value))}
                min={100}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="rate">Annual Interest Rate (%)</Label>
            <Input
              id="rate"
              type="number"
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              min={0.1}
              max={50}
              step={0.1}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="time">Time Period (Years)</Label>
            <Input
              id="time"
              type="number"
              value={time}
              onChange={(e) => setTime(Number(e.target.value))}
              min={1}
              max={50}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="compound-frequency">Compounding Frequency</Label>
            <select
              id="compound-frequency"
              value={compoundFrequency}
              onChange={(e) => setCompoundFrequency(Number(e.target.value))}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <option value={1}>Annually</option>
              <option value={2}>Semi-Annually</option>
              <option value={4}>Quarterly</option>
              <option value={12}>Monthly</option>
              <option value={365}>Daily</option>
            </select>
          </div>

          <Button onClick={calculateCompoundInterest} className="w-full">
            <Calculator className="mr-2" /> Calculate
          </Button>
        </div>

        <div className="space-y-6">
          <Card className="bg-muted/40">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Initial Investment:</p>
                  <p className="text-xl font-semibold">${principal.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Interest Earned:</p>
                  <p className="text-xl font-semibold">${interestEarned.toLocaleString(undefined, { maximumFractionDigits: 2 })}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Final Amount:</p>
                  <p className="text-3xl font-bold text-primary">${finalAmount.toLocaleString(undefined, { maximumFractionDigits: 2 })}</p>
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
                  tickFormatter={(value) => `$${(value/1000)}k`} 
                  label={{ value: 'Amount ($)', angle: -90, position: 'insideLeft' }}
                />
                <Tooltip 
                  formatter={(value) => [`$${Number(value).toLocaleString(undefined, { maximumFractionDigits: 2 })}`, '']}
                  labelFormatter={(label) => `Year ${label}`}
                />
                <Line type="monotone" dataKey="value" name="Value" stroke="#82ca9d" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompoundCalculator;
