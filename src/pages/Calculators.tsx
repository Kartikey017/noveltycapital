
import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InflationCalculator from "@/components/calculators/InflationCalculator";
import SipCalculator from "@/components/calculators/SipCalculator";
import RetirementCalculator from "@/components/calculators/RetirementCalculator";
import CompoundCalculator from "@/components/calculators/CompoundCalculator";

const Calculators = () => {
  const [activeTab, setActiveTab] = useState("inflation");

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <section className="mb-10">
            <h1 className="text-4xl font-display font-bold tracking-tight mb-2 md:text-5xl">
              Financial Calculators
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mb-8">
              Make informed financial decisions with our suite of professional financial calculators.
            </p>

            <div className="mb-8">
              <Tabs 
                value={activeTab} 
                onValueChange={setActiveTab}
                className="w-full"
              >
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 max-w-3xl">
                  <TabsTrigger value="inflation">Inflation</TabsTrigger>
                  <TabsTrigger value="sip">SIP</TabsTrigger>
                  <TabsTrigger value="retirement">Retirement</TabsTrigger>
                  <TabsTrigger value="compound">Compound Interest</TabsTrigger>
                </TabsList>
                <Card className="mt-6 border-none shadow-card">
                  <CardContent className="p-6">
                    <TabsContent value="inflation" className="mt-0">
                      <InflationCalculator />
                    </TabsContent>
                    <TabsContent value="sip" className="mt-0">
                      <SipCalculator />
                    </TabsContent>
                    <TabsContent value="retirement" className="mt-0">
                      <RetirementCalculator />
                    </TabsContent>
                    <TabsContent value="compound" className="mt-0">
                      <CompoundCalculator />
                    </TabsContent>
                  </CardContent>
                </Card>
              </Tabs>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Calculators;
