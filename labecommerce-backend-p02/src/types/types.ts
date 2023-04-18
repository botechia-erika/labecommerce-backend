
export type TPerson = {
    id: string,
    name: string,
    urlClient: string,
    email: string,
    username: string,
    password: string,
    cpf: string,
    birthDate: string,
    street: string,
    streetNumber: string,
    city: string,
    state: string,
    cep : string,
    avatar: string
}
    
    export type TProduct={
        idProduct: string,
        name: string,
    description:   string,
        category: string,
        price:number,
        discount: number,
        img1: string,
        img2: string,     
        img3: string,       
        brand: string,
        principalList: string
    }
    
    
    export type TPurchase = {
        personId: string,
        ticketSaleId: string,
        productId: string,
        quantity: number,
        totalPrice: number,
    }
    
    
    
    export type TVideo = {
      id: string,
      channelId: string,
      title: string,
      description: string,
      durationInSeconds: number,
      views: number
    }
/*TYPES VERSAO TASKS*/
    export type TUser={
        id:string,
        name: string,
        email:string,
        password:string,
    }
        
    export type TTasks={
            idTT: string,
            title: string,
            description: string,
            created_at: string,
            status:number,
    }
        
        
    export type TUserTasks = {
            userId: string,
            idTT: string,
    }
        
        