
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import { 
  User, 
  Phone, 
  Mail, 
  Calendar, 
  BriefcaseIcon, 
  MessageSquare, 
  Send, 
  CheckCircle2
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage, 
  FormDescription 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

// Define the form schema with Zod
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  investmentSize: z.string({
    required_error: "Please select your investment capacity.",
  }),
  consultationType: z.string({
    required_error: "Please select a consultation type.",
  }),
  message: z.string().optional(),
  preferredDate: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      investmentSize: "",
      consultationType: "",
      message: "",
      preferredDate: "",
    },
  });

  function onSubmit(data: FormValues) {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted:", data);
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      toast({
        title: "Consultation Request Received",
        description: "Our wealth advisory team will contact you within 24 hours.",
      });
    }, 1500);
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <div className="relative py-20 md:py-32 overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 w-[30rem] h-[30rem] rounded-full bg-blue-100/30 blur-3xl opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-[25rem] h-[25rem] rounded-full bg-blue-50 blur-3xl opacity-30"></div>
          
          <div className="container mx-auto px-6 md:px-8 relative z-10">
            {/* Page Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-3xl md:text-5xl font-medium tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80 animate-fade-in">
                Personalized Advisory Services
              </h1>
              <p className="text-lg text-foreground/70 animate-fade-in delay-1 max-w-2xl mx-auto">
                Connect with our team of expert wealth managers for bespoke financial guidance 
                tailored to your specific needs and aspirations.
              </p>
            </div>

            {/* Consultation Form Card */}
            <div className="max-w-4xl mx-auto">
              <Card className="shadow-premium border border-primary/5 overflow-hidden">
                <CardHeader className="prestigious-border bg-secondary/50 pb-8">
                  <CardTitle className="text-2xl md:text-3xl premium-heading">
                    Request a Consultation
                  </CardTitle>
                  <CardDescription className="text-base mt-2">
                    Please provide your details and our wealth advisory team will contact you within 24 hours.
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-8">
                  {!isSubmitted ? (
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {/* Name Field */}
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="flex items-center gap-2">
                                  <User className="h-4 w-4" /> Full Name
                                </FormLabel>
                                <FormControl>
                                  <Input placeholder="John Smith" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          {/* Email Field */}
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="flex items-center gap-2">
                                  <Mail className="h-4 w-4" /> Email Address
                                </FormLabel>
                                <FormControl>
                                  <Input placeholder="john.smith@example.com" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          {/* Phone Number Field */}
                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="flex items-center gap-2">
                                  <Phone className="h-4 w-4" /> Phone Number
                                </FormLabel>
                                <FormControl>
                                  <Input placeholder="+1 (555) 123-4567" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          {/* Preferred Date Field */}
                          <FormField
                            control={form.control}
                            name="preferredDate"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="flex items-center gap-2">
                                  <Calendar className="h-4 w-4" /> Preferred Contact Date
                                </FormLabel>
                                <FormControl>
                                  <Input type="date" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          {/* Investment Size Field */}
                          <FormField
                            control={form.control}
                            name="investmentSize"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="flex items-center gap-2">
                                  <BriefcaseIcon className="h-4 w-4" /> Investment Capacity
                                </FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select investment range" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="under100k">Under $100,000</SelectItem>
                                    <SelectItem value="100k-500k">$100,000 - $500,000</SelectItem>
                                    <SelectItem value="500k-1m">$500,000 - $1,000,000</SelectItem>
                                    <SelectItem value="1m-5m">$1,000,000 - $5,000,000</SelectItem>
                                    <SelectItem value="over5m">Over $5,000,000</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          {/* Consultation Type Field */}
                          <FormField
                            control={form.control}
                            name="consultationType"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="flex items-center gap-2">
                                  <MessageSquare className="h-4 w-4" /> Consultation Type
                                </FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select consultation type" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="wealthManagement">Wealth Management</SelectItem>
                                    <SelectItem value="retirementPlanning">Retirement Planning</SelectItem>
                                    <SelectItem value="estateManagement">Estate Planning</SelectItem>
                                    <SelectItem value="taxOptimization">Tax Optimization</SelectItem>
                                    <SelectItem value="portfolioReview">Portfolio Review</SelectItem>
                                    <SelectItem value="alternativeInvestments">Alternative Investments</SelectItem>
                                    <SelectItem value="privateEquity">Private Equity</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      
                        {/* Message Field */}
                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="flex items-center gap-2">
                                <MessageSquare className="h-4 w-4" /> Additional Information
                              </FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="Please share any specific questions or areas you would like to discuss during the consultation."
                                  className="min-h-[120px] resize-none"
                                  {...field} 
                                />
                              </FormControl>
                              <FormDescription>
                                This helps us prepare better for your consultation.
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      
                        <CardFooter className="px-0 pt-2 pb-0 flex justify-end">
                          <Button 
                            type="submit" 
                            size="lg"
                            disabled={isSubmitting}
                            className="bg-gradient-to-r from-primary to-primary/90 hover:shadow-lg transition-all duration-300"
                          >
                            {isSubmitting ? (
                              <span className="flex items-center gap-2">
                                <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                                Processing...
                              </span>
                            ) : (
                              <span className="flex items-center gap-2">
                                Submit Request <Send className="h-4 w-4" />
                              </span>
                            )}
                          </Button>
                        </CardFooter>
                      </form>
                    </Form>
                  ) : (
                    <div className="py-12 text-center">
                      <div className="mx-auto w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-6">
                        <CheckCircle2 className="h-8 w-8 text-green-500" />
                      </div>
                      <h3 className="text-2xl font-medium mb-4">Thank You for Your Request</h3>
                      <p className="text-foreground/70 max-w-md mx-auto mb-6">
                        Your consultation request has been successfully submitted. One of our wealth advisors will contact you within 24 hours at your preferred time.
                      </p>
                      <Button 
                        onClick={() => setIsSubmitted(false)}
                        variant="outline"
                        className="mt-4"
                      >
                        Submit Another Request
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
            
            {/* Additional Contact Information */}
            <div className="mt-20 text-center max-w-2xl mx-auto">
              <h2 className="text-2xl font-medium mb-6">Direct Contact Options</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                <div className="flex flex-col items-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <h4 className="font-medium mb-1">Phone</h4>
                  <p className="text-foreground/70">+1 (800) 555-1234</p>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <p className="text-foreground/70">advisors@noveltycapital.com</p>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <BriefcaseIcon className="h-5 w-5 text-primary" />
                  </div>
                  <h4 className="font-medium mb-1">Private Office</h4>
                  <p className="text-foreground/70">By appointment only</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
