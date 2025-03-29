
import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calculator, DollarSign, Info } from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const SwpCalculator = () => {
  const { toast } = useToast();
  const [principalAmount, setPrincipalAmount] = useState<number>(1000000);
  const [withdrawalAmount, setWithdrawalAmount] = useState<number>(5000);
  const [expectedReturn, setExpectedReturn] = useState<number>(8);
  const [duration, setDuration] = useState<number>(20);
  const [frequency, setFrequency] = useState<string>("monthly");
  const [chartData, setChartData] = useState<any[]>([]);
  const [summaryData, setSummaryData] = useState({
    finalCorpus: 0,
    totalWithdrawal: 0,
    withdrawalRate: 0,
    corpusDepletionYear: null as number | null,
  });

  // Calculate withdrawal plan
  useEffect(() => {
    calculateSWP();
  }, [principalAmount, withdrawalAmount, expectedReturn, duration, frequency]);

  const calculateSWP = () => {
    if (principalAmount <= 0 || withdrawalAmount <= 0 || duration <= 0) {
      toast({
        title: "Invalid inputs",
        description: "Please enter positive values for all fields",
        variant: "destructive",
      });
      return;
    }

    // Adjusting frequency
    const periodsPerYear = frequency === "monthly" ? 12 : 4;
    const withdrawalPerPeriod = withdrawalAmount;
    const ratePerPeriod = expectedReturn / 100 / periodsPerYear;
    const totalPeriods = duration * periodsPerYear;

    let remainingCorpus = principalAmount;
    const data = [];
    let totalWithdrawn = 0;
    let corpusDepletionYear = null;

    for (let period = 0; period <= totalPeriods; period++) {
      // Calculate interest for this period
      const interest = remainingCorpus * ratePerPeriod;
      
      if (period > 0) {
        // Subtract withdrawal
        remainingCorpus = remainingCorpus - withdrawalPerPeriod + interest;
        totalWithdrawn += withdrawalPerPeriod;
      }

      // Check if corpus is depleted
      if (remainingCorpus <= 0 && corpusDepletionYear === null) {
        corpusDepletionYear = Math.floor(period / periodsPerYear);
        remainingCorpus = 0;
      }

      if (period % periodsPerYear === 0 || period === totalPeriods) {
        data.push({
          year: Math.floor(period / periodsPerYear),
          corpus: Math.max(0, Math.round(remainingCorpus)),
          withdrawn: Math.round(totalWithdrawn),
        });
      }
    }

    setChartData(data);
    setSummaryData({
      finalCorpus: Math.max(0, Math.round(remainingCorpus)),
      totalWithdrawal: Math.round(totalWithdrawn),
      withdrawalRate: Math.round((withdrawalAmount * periodsPerYear / principalAmount) * 1000) / 10,
      corpusDepletionYear,
    });
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const handleCalculate = () => {
    calculateSWP();
    toast({
      title: "Calculation completed",
      description: "Your systematic withdrawal plan has been calculated.",
    });
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Systematic Withdrawal Plan (SWP) Calculator</h2>
      <p className="text-muted-foreground mb-6">
        Plan your regular withdrawals from investments and see how long your corpus will last.
      </p>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="principal">Initial Investment Amount ($)</Label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
              <Input
                id="principal"
                type="number"
                className="pl-10"
                value={principalAmount}
                onChange={(e) => setPrincipalAmount(Number(e.target.value))}
                min={0}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="withdrawal">Withdrawal Amount ($)</Label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
              <Input
                id="withdrawal"
                type="number"
                className="pl-10"
                value={withdrawalAmount}
                onChange={(e) => setWithdrawalAmount(Number(e.target.value))}
                min={0}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="frequency">Withdrawal Frequency</Label>
            <Select
              value={frequency}
              onValueChange={(value) => setFrequency(value)}
            >
              <SelectTrigger id="frequency">
                <SelectValue placeholder="Select frequency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="monthly">Monthly</SelectItem>
                <SelectItem value="quarterly">Quarterly</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="return">Expected Annual Return (%)</Label>
            <Input
              id="return"
              type="number"
              value={expectedReturn}
              onChange={(e) => setExpectedReturn(Number(e.target.value))}
              min={0}
              max={100}
              step={0.1}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="duration">Duration (Years)</Label>
            <Input
              id="duration"
              type="number"
              value={duration}
              onChange={(e) => setDuration(Number(e.target.value))}
              min={1}
              max={50}
            />
          </div>

          <Button onClick={handleCalculate} className="w-full">
            <Calculator className="mr-2" /> Calculate
          </Button>
        </div>

        <div className="space-y-6">
          <Card className="bg-muted/40">
            <CardContent className="p-6">
              <h3 className="text-lg font-medium mb-4">Results</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Total Withdrawals:</p>
                  <p className="text-2xl font-semibold text-primary">
                    {formatCurrency(summaryData.totalWithdrawal)}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Final Balance:</p>
                  <p className="text-2xl font-semibold">
                    {formatCurrency(summaryData.finalCorpus)}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Annual Withdrawal Rate:</p>
                  <p className="text-xl font-medium">{summaryData.withdrawalRate}%</p>
                </div>
                <div>
                  {summaryData.corpusDepletionYear ? (
                    <>
                      <p className="text-sm text-muted-foreground">Corpus Depletes In:</p>
                      <p className="text-xl font-medium text-destructive">
                        {summaryData.corpusDepletionYear} years
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="text-sm text-muted-foreground">Corpus Status:</p>
                      <p className="text-xl font-medium text-green-600">Sustainable</p>
                    </>
                  )}
                </div>
              </div>

              {summaryData.corpusDepletionYear && (
                <div className="mt-4 p-2 bg-destructive/10 rounded border border-destructive/20 flex items-start">
                  <Info className="h-5 w-5 text-destructive mr-2 flex-shrink-0 mt-0.5" />
                  <p className="text-sm">
                    Your corpus will be depleted in year {summaryData.corpusDepletionYear}. 
                    Consider reducing withdrawal amount or increasing initial investment.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
          
          <div className="bg-card rounded-lg border p-4 h-64">
            <h4 className="font-medium mb-2">Corpus Projection</h4>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={chartData}
                margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                <XAxis 
                  dataKey="year" 
                  label={{ 
                    value: 'Years', 
                    position: 'insideBottom', 
                    offset: -5 
                  }} 
                />
                <YAxis
                  tickFormatter={(value) => {
                    return value >= 1000000
                      ? `$${value / 1000000}M`
                      : value >= 1000
                      ? `$${value / 1000}K`
                      : `$${value}`;
                  }}
                />
                <Tooltip
                  formatter={(value) => [`$${value.toLocaleString()}`, "Corpus"]}
                  labelFormatter={(year) => `Year ${year}`}
                />
                <Area
                  type="monotone"
                  dataKey="corpus"
                  stroke="#3b82f6"
                  fill="#3b82f680"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwpCalculator;
