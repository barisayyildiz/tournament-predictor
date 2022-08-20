export default function GroupRow({ order, children, innerRef, ...rest }) {
  return (
    <div
      ref={innerRef}
      {...rest}
      className="group_row flex gap-4 bg-slate-50 hover:bg-slate-200 p-3 justify-start cursor-pointer"
    >
      <p>{order}</p>
      <div>{children}</div>
    </div>
  );
}
