
export type TPerson={
    id: string,
    name: string,
    email: string,
    password: string,
}
    
    export type TProduct={
        id: string,
        name: string,
        price: number,
        category: string,
    }
    
    
    export type TPurchase = {
        userId: string,
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
        
        