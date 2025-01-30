interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col items-center">
      <div className="w-12 h-12 flex items-center justify-center bg-purple-100 rounded-full mb-4">
        <Icon className="w-6 h-6 text-purple-600" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="text-sm text-gray-600 mt-2">{description}</p>
    </div>
  );
};
