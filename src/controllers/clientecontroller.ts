import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient();

async function create(request: Request, response:Response)
{
    try
    {
        const userCliente = await prisma.user.create(
            {data: request.body})
        response.status(201).json(user);
        

    }
    catch(error)
    {
        response.status(500).json({error:error})
    }
}

