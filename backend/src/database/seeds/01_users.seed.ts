import * as Knex from "knex";
import * as faker from "faker";

import { usersData } from "./data/user.data";
import { deleteAllUsers, insertUser } from "../../shared/repositories/user.repository";

interface UserEntity {
    name: string;
    email: string;
    cpf: number;
    phone: number;
}

export const userSeeds: UserEntity[] = [];

for (let index = 1; index <= 10; index++) {
    userSeeds.push(generateUser());
}

function generateUser() {
    return {
        name: `${faker.name.firstName()} ${faker.name.lastName()} ${faker.name.lastName()}`,
        email: `${faker.internet.email()}`,
        cpf: faker.random.number({ min: 111111111, max: 999999999, precision: 9 }),
        phone: faker.random.number({ min: 111111111, max: 999999999, precision: 9, }),
    };
}

export async function seed(knex: Knex): Promise<void> {
    await deleteAllUsers(knex);

    await insertUser(knex)(usersData);
    await insertUser(knex)(
        userSeeds.map((user) => ({
            name: user.name,
            email: user.email,
            cpf: user.cpf,
            phone: user.phone,
        }))
    );
}
