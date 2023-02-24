export async function getData<T>(url:string):Promise<T> {
    const users = await fetch(url)
    return await users.json()
}