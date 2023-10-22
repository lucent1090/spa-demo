export interface UserData {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  address: string;
  profileImage: string;
}

export interface UserLoaderData {
  data: UserData[];
}
