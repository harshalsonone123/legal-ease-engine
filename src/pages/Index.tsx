
import DocumentForm from "@/components/DocumentForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-accent to-background">
      <div className="container py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-semibold tracking-tight mb-4">
            Create Your Legal Document
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple, secure, and professional legal documents in minutes. Start by
            selecting your document type below.
          </p>
        </div>
        <DocumentForm />
      </div>
    </div>
  );
};

export default Index;
