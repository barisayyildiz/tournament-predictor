export default function Team({ name }) {
  return (
    <div className="flex flex-row gap-2 justify-center align-center">
      <img
        draggable={false}
        width={40}
        src={`https://countryflagsapi.com/png/${name}`}
      ></img>
      <p className="font-medium">{name}</p>
    </div>
  );
}
