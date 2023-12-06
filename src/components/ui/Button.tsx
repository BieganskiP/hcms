interface Button {
  type: "button" | "submit" | "reset" | undefined;
  variant: string;
  action: any;
}

export default function Button({ type, action, variant }: Button) {
  return (
    <button
      className="w-full rounded p-2 mb-2"
      type={type}
      onClick={action}
    ></button>
  );
}
