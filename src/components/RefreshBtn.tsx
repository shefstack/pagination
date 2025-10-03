type Props = {
  onClick: () => void;
};

export default function RefreshBtn({ onClick }: Props) {
  return (
    <button onClick={onClick}>
      Refresh
    </button>
  );
}
