import AuthLayout from '@/layouts/AuthLayout';
import { useEffect, useState } from 'react';

import { IUser } from '@/types/user';
import UserItem from '@/components/user/UserItem';

interface IProps {
  users: IUser[];
}

const User = (props: IProps) => {
  const [users, setUsers] = useState<IUser[]>(props.users);
  const [userListSelected, setUserListSelected] = useState<IUser[]>([]);

  // const getUserList = async () => {
  //   const json = await fetch('https://jsonplaceholder.typicode.com/users');
  //   const data = await json.json();
  //   const newData = data.map((item: IUser) => ({ ...item, selected: false }));
  //   setUsers(newData);
  // };

  const userNew = users.filter((user) => !user.selected);
  // const userSelected = users.filter((user) => user.selected);

  // useEffect(() => {
  //   getUserList();
  // }, []);

  const onSelectUser = (user: IUser) => {
    if (user.selected) {
      const index = userListSelected.findIndex((item) => item.id === user.id);
      userListSelected.splice(index, 1);
    } else {
      userListSelected.push(user);
    }
    user.selected = !user.selected;
    setUsers([...users]);
  };

  return (
    <AuthLayout>
      <h1>User List</h1>

      <div className="grid grid-cols-2 bg-amber-50">
        <div>
          <p>UNSELECTED</p>

          {userNew.map((user) => (
            <UserItem
              key={`user-${user.id}`}
              data={user}
              onSelectUser={() => onSelectUser(user)}
            />
          ))}
        </div>

        <div>
          <p>SELECTED</p>
          {userListSelected.map((user) => (
            <UserItem
              key={`user-${user.id}`}
              data={user}
              onSelectUser={() => onSelectUser(user)}
            />
          ))}
        </div>
      </div>
    </AuthLayout>
  );
};

export async function getServerSideProps() {
  const json = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await json.json();
  const newData = data.map((item: IUser) => ({ ...item, selected: false }));

  return {
    props: {
      users: newData,
    }, // will be passed to the page component as props
  };
}

export default User;
