
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import StepIndicator from "./StepIndicator";
import FormStep from "./FormStep";
import PreviewPanel from "./PreviewPanel";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const DocumentForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    documentType: "",
    name: "",
    email: "",
    // Add more form fields as needed
  });

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const updateFormData = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-7xl mx-auto p-6">
      <div className="space-y-6">
        <StepIndicator currentStep={currentStep} totalSteps={3} />
        <AnimatePresence mode="wait">
          {currentStep === 1 && (
            <FormStep
              key="step1"
              onNext={handleNext}
              onPrev={handlePrev}
              isFirstStep
            >
              <div className="space-y-4">
                <Label htmlFor="documentType">Document Type</Label>
                <Select
                  value={formData.documentType}
                  onValueChange={(value) => updateFormData("documentType", value)}
                >
                  <SelectTrigger id="documentType">
                    <SelectValue placeholder="Select a document type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="will">Last Will and Testament</SelectItem>
                    <SelectItem value="trust">Living Trust</SelectItem>
                    <SelectItem value="poa">Power of Attorney</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </FormStep>
          )}

          {currentStep === 2 && (
            <FormStep key="step2" onNext={handleNext} onPrev={handlePrev}>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => updateFormData("name", e.target.value)}
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateFormData("email", e.target.value)}
                    placeholder="Enter your email"
                  />
                </div>
              </div>
            </FormStep>
          )}

          {currentStep === 3 && (
            <FormStep
              key="step3"
              onNext={handleNext}
              onPrev={handlePrev}
              isLastStep
            >
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Review Your Information</h3>
                <div className="space-y-2">
                  <p>
                    <span className="font-medium">Document Type:</span>{" "}
                    {formData.documentType}
                  </p>
                  <p>
                    <span className="font-medium">Full Name:</span> {formData.name}
                  </p>
                  <p>
                    <span className="font-medium">Email:</span> {formData.email}
                  </p>
                </div>
              </div>
            </FormStep>
          )}
        </AnimatePresence>
      </div>

      <div className="hidden lg:block">
        <PreviewPanel formData={formData} />
      </div>
    </div>
  );
};

export default DocumentForm;
