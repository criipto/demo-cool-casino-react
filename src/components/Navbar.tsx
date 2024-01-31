export default function Navbar() {
  const categories = ['Sport', 'Casino', 'Games', 'Poker', 'Extra'];
  return (
    <div className="bg-primary25">
      <ul className="flex flex-row pt-4 pb-2 gap-1 pl-2 text-lightBlue800">
        {categories.map((category) => (
          <li
            key={category}
            className={`p-2 font-medium`}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}
