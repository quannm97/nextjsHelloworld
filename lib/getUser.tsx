export default async function getUser(userId: string) {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    if (!res.ok) throw Error("failed to fetch user");
    return res.json();
}
