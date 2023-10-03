import getAllUsers from "@/lib/getAllUsers";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";
import { User } from "types";

export const metadata: Metadata = {
    title: 'Users',
}

const UsersPage = async () => {
    const usersData: Promise<User[]> = getAllUsers();
    const users = await usersData;

    console.log("Hello");

    const content = (
        <section>
            <h2>
                <Link href="/">Home</Link>
            </h2>
            <br />
            {users.map((user) => {
                return (
                    <>
                        <p key={user.id}>
                            <Link href={`users/${user.id}`}>{user.name}</Link>
                        </p>
                        <br />
                    </>
                );
            })}
        </section>
    );
    return content;
};

export default UsersPage;
