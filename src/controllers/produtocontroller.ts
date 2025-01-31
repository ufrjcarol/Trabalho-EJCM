import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient();

async function createProduto(request: Request, response:Response)
{
    try
    {
        const Produto = await prisma.Produto.create(
            {data: request.body})
        response.status(201).json(Produto);
    }
    catch(error)
    {
        response.status(500).json({error:error})
    }
}

async function readProduto(request: Request, response: Response) 
{
    const {id} = request.params;

    try{
        const Produto = await prisma.Produto.findUnique({
            where: {id: Number(id)}
        })
        response.status(200).json(Produto);
    }
    catch(error)
    {response.status(500).json({error:error})}
    
}

async function updateProduto(request:Request, response: Response) 
{
    const {id} = request.params
    try
    {
        const Produto = await prisma.Produto.update({
            data: request.body,
            where: {id: Number(id)}
        })
        response.status(200).json(Produto);
    }
    catch(error)
    {response.status(500).json({error:error})}
}

async function destroyCliente(request:Request, response: Response) 
{
    const {id} = request.params
    try
    {
        const user = await prisma.Produto.delete({
            where: {id: Number(id)}
        })
        response.status(204).json(Produto);
    }
    catch(error)
    {response.status(500).json({error:error})}
}

export
{
    createProduto,
    readProduto,
    updateProduto,
    destroyCliente,
}