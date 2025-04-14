import RadioBtn from "../radioBtn/radioBtn";

export default function Filter() {
  const roles = ["Vegan", "Sushi", "Pizza & Fast food", "Others"];
  return (
    <div className="flex flex-row justify-between gap-8 items-center mt-10 h-full">
      <p className="text-2xl">Up to -40% 🎊 Order.uk exclusive deals</p>
      <div>
        <ul className="flex flex-row justify-between gap-8">
          {roles.map((e) => {
            return (
              <li key={e}>
                <RadioBtn role={e} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
