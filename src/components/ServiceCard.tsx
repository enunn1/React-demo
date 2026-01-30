import Card from "./Card";

type ServiceCardProps = {
  title: string;
  description: string;
  icon?: React.ReactNode;
};

export default function ServiceCard({
  title,
  description,
  icon,
}: ServiceCardProps) {
  return (
    <Card className="p-6 service-card">
      {icon && <div className="mb-4 text-blue-500">{icon}</div>}

      <h3 className="text-lg font-semibold mb-2">
        {title}
      </h3>

      <p className="text-sm text-neutral-600 dark:text-neutral-400">
        {description}
      </p>
    </Card>
  );
}
