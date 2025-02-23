
import { Card } from "@/components/ui/card";

interface PreviewPanelProps {
  formData: Record<string, any>;
}

const PreviewPanel = ({ formData }: PreviewPanelProps) => {
  return (
    <Card className="p-6 h-full bg-white/50 backdrop-blur-sm">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-foreground">Document Preview</h3>
        <div className="prose prose-sm max-w-none">
          {formData.documentType && (
            <div className="mb-4">
              <h4 className="font-medium text-muted-foreground">Document Type</h4>
              <p>{formData.documentType}</p>
            </div>
          )}
          {formData.name && (
            <div className="mb-4">
              <h4 className="font-medium text-muted-foreground">Full Name</h4>
              <p>{formData.name}</p>
            </div>
          )}
          {/* Add more preview fields as needed */}
        </div>
      </div>
    </Card>
  );
};

export default PreviewPanel;
