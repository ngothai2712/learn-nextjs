import { IUser } from '@/types/user';
import { MouseEventHandler } from 'react';

interface IProps {
  data: IUser;
  onSelectUser: MouseEventHandler;
}
const UserItem = ({ data, onSelectUser }: IProps) => {
  return (
    <div className="flex items-center gap-2">
      <p>{data.name}</p>
      <button onClick={onSelectUser}>{data.selected ? '-' : '+'}</button>
    </div>
  );
};

export default UserItem;
