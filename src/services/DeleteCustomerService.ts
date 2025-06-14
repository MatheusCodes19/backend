import prismaClient from "../prisma";

interface DeleterCustomerProps{
    id: string;
}

class DeleteCustomerService{
  async execute({ id}: DeleterCustomerProps){

    if(!id){
        throw new Error("Solicitação invalida.")
    }  
    
    const findCustomer = await prismaClient.customer.findFirst({
        where:{
            id: id
        }
    })


    if(!findCustomer){
        throw new Error("Cliente não existe!")
    }

    await prismaClient.customer.delete({
     where:{
        id: findCustomer.id
     }
    
    })

    return { message: "Deletado com sucesso!"}
 }
}

export { DeleteCustomerService } 