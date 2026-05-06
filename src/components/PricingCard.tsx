import { Tick } from "@/components/ui/icons/Tick";
import { Link } from "@/components/ui/Link";

export type PricingPlan = {
  name: string;
  price: string | { monthly: string; annual: string; discount: string; original: string };
  popular: boolean;
  features: string[];
  button: { text: string; link: string };
};

type Props = { plan: PricingPlan };

export function PricingCard({ plan }: Props) {
  const priceDisplay = typeof plan.price === "object" ? plan.price.monthly : plan.price;

  return (
    <div>
      <div className="flex flex-col w-full order-first lg:order-none border-2 border-[#D8DEE9] border-opacity-50 py-5 px-6 rounded-md">
        <div className="text-center">
          <h4 className="text-lg font-medium text-gray-400">{plan.name}</h4>
          <p className="mt-3 text-4xl font-bold text-black md:text-4xl">{priceDisplay}</p>
        </div>
        <ul className="grid mt-8 text-left gap-y-4">
          {plan.features.map((item) => (
            <li key={item} className="flex items-start gap-3 text-gray-800">
              <Tick className="w-6 h-6 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="flex mt-8">
          <Link href={plan.button.link || "#"} block variant={plan.popular ? "primary" : "outline"}>
            {plan.button.text || "Get Started"}
          </Link>
        </div>
      </div>
    </div>
  );
}
