import { Button } from "@/components/ui/Button";

export function MdxButton({ children }: { children?: React.ReactNode }) {
  return (
    <span className="not-prose inline-block my-4">
      <Button type="button" size="md">
        {children}
      </Button>
    </span>
  );
}
