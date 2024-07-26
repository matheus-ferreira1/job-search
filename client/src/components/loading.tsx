import { Loader2 } from "lucide-react";

export const Loading: React.FC = () => {
  return (
    <div className="w-full py-6">
      <Loader2 size={34} className="animate-spin mx-auto" />
    </div>
  );
};
