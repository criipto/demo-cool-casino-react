import ToggleEnvironmentModal from './ToggleEnvironmentModal';

interface EnvProps {
  onToggleEnv: () => void;
  currentEnvironment: string;
}

export default function Navbar({ onToggleEnv, currentEnvironment }: EnvProps) {
  const categories = ['Sport', 'Casino', 'Games', 'Poker', 'Extra'];
  return (
    <div className="bg-primary25 flex flex-row justify-between pt-4 pb-2">
      <ul className="flex flex-row gap-1 pl-2 text-lightBlue800">
        {categories.map((category) => (
          <li
            key={category}
            className={`p-2 font-medium`}
          >
            {category}
          </li>
        ))}
      </ul>
      {onToggleEnv && currentEnvironment && (
        <ToggleEnvironmentModal
          onToggleEnv={onToggleEnv}
          currentEnvironment={currentEnvironment}
        />
      )}
    </div>
  );
}
