
import { cn } from "@/lib/utils";

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

const StepIndicator = ({ currentStep, totalSteps }: StepIndicatorProps) => {
  return (
    <div className="flex items-center justify-center space-x-2 mb-8">
      {Array.from({ length: totalSteps }, (_, i) => (
        <div key={i} className="flex items-center">
          <div
            className={cn(
              "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-200",
              i + 1 <= currentStep
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground"
            )}
          >
            {i + 1}
          </div>
          {i < totalSteps - 1 && (
            <div
              className={cn(
                "w-12 h-0.5 mx-1",
                i + 1 < currentStep
                  ? "bg-primary"
                  : "bg-secondary"
              )}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default StepIndicator;
