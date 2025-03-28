
import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, Calculator } from "lucide-react";

const InflationCalculator = () => {
  const [currentValue, setCurrentValue] = useState<number>(100);
  const [inflationRate, setInflationRate] = useState<number>(3);
  const [years, setYears] = useState<number>(10);
  const [futureValue, setFutureValue] = useState<number>(0);

  useEffect(() => {
    calculateInflation();
  }, [currentValue, inflationRate, years]);

  const calculateInflation = () => {
    const futureVal = currentValue * Math.pow(1 + inflationRate / 100, years);
    setFutureValue(futureVal);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Inflation Calculator</h2>
      <p className="text-muted-foreground mb-6">
        Understand how inflation can affect your purchasing power over time.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="current-value">Current Value ($)</Label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
              <Input
                id="current-value"
                type="number"
                className="pl-10"
                value={currentValue}
                onChange={(e) => setCurrentValue(Number(e.target.value))}
                min={0}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="inflation-rate">Annual Inflation Rate (%)</Label>
            <Input
              id="inflation-rate"
              type="number"
              value={inflationRate}
              onChange={(e) => setInflationRate(Number(e.target.value))}
              min={0}
              max={50}
              step={0.1}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="years">Number of Years</Label>
            <Input
              id="years"
              type="number"
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
              min={1}
              max={100}
            />
          </div>

          <Button onClick={calculateInflation} className="w-full">
            <Calculator className="mr-2" /> Calculate
          </Button>
        </div>

        <Card className="bg-muted/40">
          <CardContent className="p-6">
            <h3 className="text-lg font-medium mb-4">Results</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">Today's value:</p>
                <p className="text-2xl font-semibold">${currentValue.toFixed(2)}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">
                  Future value after {years} years:
                </p>
                <p className="text-3xl font-bold text-primary">
                  ${futureValue.toFixed(2)}
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Purchasing power loss:</p>
                <p className="text-lg font-medium">
                  {((1 - currentValue / futureValue) * 100).toFixed(2)}%
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InflationCalculator;
