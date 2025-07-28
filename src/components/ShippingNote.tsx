import { Info } from "lucide-react";

const ShippingNote = () => {
  return (
    <section className="py-12 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-4 p-6 bg-card rounded-2xl border border-border/50 shadow-sm">
            <div className="flex-shrink-0 w-6 h-6 text-primary mt-1">
              <Info className="w-6 h-6" />
            </div>
            <div>
              <p className="text-lg text-foreground">
                <span className="font-semibold">Note:</span> baccksee manages the entire process, but customers must cover the return shipping cost.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShippingNote;