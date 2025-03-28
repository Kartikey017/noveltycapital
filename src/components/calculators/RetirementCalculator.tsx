
import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, TrendingUp, Wallet, LineChart } from "lucide-react";

const RetirementCalculator = () => {
  const [currentAge, setCurrentAge] = useState<number>(30);
  const [retirementAge, setRetirementAge] = useState<number>(60);
  const [currentSavings, setCurrentSavings] = useState<number>(200000);
  const [monthlyContribution, setMonthlyContribution] = useState<number>(15000);
  const [annualReturn, setAnnualReturn] = useState<number>(8);
  const [inflationRate, setInflationRate] = useState<number>(4);
  const [retirementResults, setRetirementResults] = useState({
    corpusNeeded: 0,
    retirementCorpus: 0,
    monthlyIncome: 0,
    isEnough: false
  });

  useEffect(() => {
    calculateRetirement();
  }, [currentAge, retirementAge, currentSavings, monthlyContribution, annualReturn, inflationRate]);

  const calculateRetirement = () => {
    const yearsToRetirement = retirementAge - currentAge;
    const monthsToRetirement = yearsToRetirement * 12;
    
    // Real rate of return (adjusted for inflation)
    const realRate = (1 + annualReturn/100) / (1 + inflationRate/100) - 1;
    const monthlyRate = Math.pow(1 + realRate, 1/12) - 1;
    
    // Future value of current savings
    const futureValueOfCurrentSavings = currentSavings * 
      Math.pow(1 + realRate, yearsToRetirement);
    
    // Future value of monthly contributions
    const futureValueOfMonthlyContributions = monthlyContribution * 
      ((Math.pow(1 + monthlyRate, monthsToRetirement) - 1) / monthlyRate) * (1 + monthlyRate);
    
    // Total retirement corpus
    const retirementCorpus = futureValueOfCurrentSavings + futureValueOfMonthlyContributions;
    
    // Monthly income during retirement (4% rule - adjusted for inflation)
    const monthlyIncome = retirementCorpus * 0.04 / 12;
    
    // Assuming a person needs 80% of monthly contribution as retirement income
    const neededMonthlyIncome = monthlyContribution * 0.8;
    
    // Corpus needed for the desired retirement income
    const corpusNeeded = neededMonthlyIncome * 12 / 0.04;
    
    setRetirementResults({
      corpusNeeded,
      retirementCorpus,
      monthlyIncome,
      isEnough: retirementCorpus >= corpusNeeded
    });
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Retirement Calculator</h2>
      <p className="text-muted-foreground mb-6">
        Plan your retirement and ensure financial security during your golden years.
      </p>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="current-age">Current Age</Label>
              <div className="flex items-center">
                <Input
                  id="current-age"
                  type="number"
                  value={currentAge}
                  onChange={(e) => setCurrentAge(Number(e.target.value))}
                  min={18}
                  max={retirementAge - 1}
                />
                <span className="ml-2 text-muted-foreground">years</span>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="retirement-age">Retirement Age</Label>
              <div className="flex items-center">
                <Input
                  id="retirement-age"
                  type="number"
                  value={retirementAge}
                  onChange={(e) => setRetirementAge(Number(e.target.value))}
                  min={currentAge + 1}
                  max={90}
                />
                <span className="ml-2 text-muted-foreground">years</span>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="current-savings">Current Savings (₹)</Label>
            <Input
              id="current-savings"
              type="number"
              value={currentSavings}
              onChange={(e) => setCurrentSavings(Number(e.target.value))}
              min={0}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="monthly-contribution">Monthly Contribution (₹)</Label>
            <Input
              id="monthly-contribution"
              type="number"
              value={monthlyContribution}
              onChange={(e) => setMonthlyContribution(Number(e.target.value))}
              min={0}
            />
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <Label htmlFor="annual-return">Expected Annual Return (%)</Label>
                <span className="text-sm font-medium">{annualReturn}%</span>
              </div>
              <Slider 
                id="annual-return"
                defaultValue={[annualReturn]} 
                max={15}
                min={1}
                step={0.5}
                onValueChange={(values) => setAnnualReturn(values[0])}
              />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <Label htmlFor="inflation-rate">Expected Inflation Rate (%)</Label>
                <span className="text-sm font-medium">{inflationRate}%</span>
              </div>
              <Slider 
                id="inflation-rate"
                defaultValue={[inflationRate]} 
                max={10}
                min={1}
                step={0.5}
                onValueChange={(values) => setInflationRate(values[0])}
              />
            </div>
          </div>

          <Button onClick={calculateRetirement} className="w-full">
            <LineChart className="mr-2" /> Calculate Retirement Plan
          </Button>
        </div>

        <div className="space-y-6">
          <Card className={`${retirementResults.isEnough ? 'bg-primary/10' : 'bg-destructive/10'} border-none shadow-card-hover`}>
            <CardContent className="p-6">
              <h3 className="text-lg font-medium mb-4">Retirement Summary</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Calendar className="h-10 w-10 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Years to Retirement</p>
                    <p className="text-xl font-semibold">{retirementAge - currentAge} years</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <Wallet className="h-10 w-10 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Projected Retirement Corpus</p>
                    <p className="text-2xl font-bold">
                      ₹{retirementResults.retirementCorpus.toLocaleString('en-IN', {
                        maximumFractionDigits: 0
                      })}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <TrendingUp className="h-10 w-10 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Required Retirement Corpus</p>
                    <p className="text-xl font-semibold">
                      ₹{retirementResults.corpusNeeded.toLocaleString('en-IN', {
                        maximumFractionDigits: 0
                      })}
                    </p>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t">
                  <p className="text-sm text-muted-foreground mb-1">Estimated Monthly Income in Retirement</p>
                  <p className="text-3xl font-bold text-primary">
                    ₹{retirementResults.monthlyIncome.toLocaleString('en-IN', {
                      maximumFractionDigits: 0
                    })}
                  </p>
                  
                  <p className={`mt-4 text-sm ${retirementResults.isEnough ? 'text-green-600' : 'text-destructive'}`}>
                    {retirementResults.isEnough 
                      ? "You're on track for your retirement goals!" 
                      : "Consider increasing your savings to meet your retirement needs."}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RetirementCalculator;
