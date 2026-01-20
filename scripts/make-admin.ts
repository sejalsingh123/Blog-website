import 'dotenv/config';
import prisma from "../lib/prisma";

async function main() {
    const user = await prisma.user.update({
        where: {email: 'admin110@gmail.com'},
        data: {role: 'ADMIN'}
    })
    console.log('User updated to admin:', user);
}
main().catch(console.error);
