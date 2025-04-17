
import React from "react";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Info, Building, Shield, Award, Users, Briefcase } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-6 pt-24 pb-16">
        {/* Breadcrumb */}
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>About Us</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">About Novelty Capital</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your trusted partner in wealth creation and financial prosperity
          </p>
        </div>

        {/* Company Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Building className="w-6 h-6 text-primary mt-1" />
              <div>
                <h2 className="text-xl font-semibold mb-2">Our Legacy</h2>
                <p className="text-muted-foreground">
                  Founded in 2025, Novelty Capital has quickly established itself as a premier financial services provider in India. We combine traditional investment wisdom with cutting-edge technology to deliver superior investment solutions.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Shield className="w-6 h-6 text-primary mt-1" />
              <div>
                <h2 className="text-xl font-semibold mb-2">Our Values</h2>
                <p className="text-muted-foreground">
                  Integrity, transparency, and client success are at the core of everything we do. We maintain the highest standards of professional ethics and regulatory compliance.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Award className="w-6 h-6 text-primary mt-1" />
              <div>
                <h2 className="text-xl font-semibold mb-2">Recognition</h2>
                <p className="text-muted-foreground">
                  We are proud to be recognized as an AMFI-registered Mutual Fund Distributor, committed to providing best-in-class investment solutions to our clients.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Users className="w-6 h-6 text-primary mt-1" />
              <div>
                <h2 className="text-xl font-semibold mb-2">Expert Team</h2>
                <p className="text-muted-foreground">
                  Our team consists of seasoned financial professionals, each bringing years of expertise in various aspects of investment management and financial planning.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="bg-secondary/50 rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <Briefcase className="w-8 h-8 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Our Services</h2>
            <p className="text-muted-foreground">Comprehensive financial solutions tailored to your needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-2">Investment Advisory</h3>
              <p className="text-muted-foreground">Personalized investment strategies aligned with your financial goals.</p>
            </div>
            
            <div className="bg-background rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-2">Portfolio Management</h3>
              <p className="text-muted-foreground">Expert portfolio construction and ongoing management services.</p>
            </div>
            
            <div className="bg-background rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-2">Wealth Planning</h3>
              <p className="text-muted-foreground">Comprehensive wealth management and succession planning solutions.</p>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="text-center max-w-3xl mx-auto">
          <Info className="w-8 h-8 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg text-muted-foreground">
            To empower our clients with innovative financial solutions and expert guidance, helping them achieve their financial goals through disciplined investing and strategic wealth management.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
