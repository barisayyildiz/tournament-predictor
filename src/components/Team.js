export default function Team({ name, style }) {
  return (
    <div
      style={style}
      className="flex flex-row gap-2 justify-start align-center w-full"
    >
      {name ? (
        <img
          draggable={false}
          width={40}
          style={
            {
              // borderRadius: "5px",
            }
          }
          src={`https://countryflagsapi.com/png/${name}`}
        ></img>
      ) : (
        <div
          style={{
            minWidth: "20px",
            minHeight: "20px",
          }}
        ></div>
      )}
      <p className="font-medium">{name}</p>
    </div>
  );
}
