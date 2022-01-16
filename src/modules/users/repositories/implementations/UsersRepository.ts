import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    const user = new User();
    Object.assign(user, {
      name,
      email,
      created_at: new Date(),
    });

    this.users.push(user);
    return user;
  }

  findById(id: string): User | undefined {
    const user = this.users.find((item) => item.id === id);
    if (user) {
      return user;
    }
    return undefined;
  }

  findByEmail(email: string): User | undefined {
    const user = this.users.find((item) => item.email === email);
    if (user) {
      return user;
    }
    return undefined;
  }

  turnAdmin(receivedUser: User): User {
    const userIndex = this.users.findIndex(
      (item) => item.id === receivedUser.id
    );

    Object.assign(receivedUser, {
      admin: true,
      updated_at: new Date(),
    });

    this.users[userIndex] = receivedUser;
    return receivedUser;
  }

  list(): User[] {
    const { users } = this;
    return users;
  }
}

export { UsersRepository };
