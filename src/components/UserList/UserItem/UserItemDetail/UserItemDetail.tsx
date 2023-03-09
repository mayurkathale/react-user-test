type Props = {
  label: string;
  detail: string;
};

const UserItemDetail = ({ label, detail }: Props) => {
  return (
    <div>
      <div>{label}</div>
      <div>:</div>
      <div>{detail}</div>
    </div>
  );
};
export default UserItemDetail;
