
import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface FormStepProps {
  children: ReactNode;
  onNext: () => void;
  onPrev: () => void;
  isFirstStep?: boolean;
  isLastStep?: boolean;
}

const FormStep = ({
  children,
  onNext,
  onPrev,
  isFirstStep,
  isLastStep,
}: FormStepProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="w-full"
    >
      <Card className="p-6 shadow-lg bg-white/50 backdrop-blur-sm">
        <div className="space-y-6">
          {children}
          <div className="flex justify-between pt-6">
            <Button
              variant="outline"
              onClick={onPrev}
              className={cn(
                "transition-opacity duration-200",
                isFirstStep ? "opacity-0 pointer-events-none" : "opacity-100"
              )}
            >
              Previous
            </Button>
            <Button onClick={onNext}>
              {isLastStep ? "Complete" : "Continue"}
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default FormStep;
