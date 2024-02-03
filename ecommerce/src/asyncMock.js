const products = [
    {
     id: "1",
     name: "Iphone 13",
     price: 800,
     category: "celular",
     Img : "https://securecontent.jackyselectronics.com/Images/product-images/iPhone_13_Pro_Gold_PDP_Image_position-1A_EN-2021-09-16-043310.jpg",
     stock: 18,
     description:"Iphone 13 Nuevo!! 256 gb, 8 gb de ram, pantalla tactil y detector facial" ,
    

    
    },
    {
     id: "2",
     name:"Apple Watch" ,
     price: 250 ,
     category: "reloj",
     Img : "https://www.bhphotovideo.com/images/images2500x2500/apple_mj2x2ll_a_watch_sport_smartwatch_38mm_1187194.jpg",
     stock: 12 ,
     description: "Reloj Inteligente de ultima generacion con cuenta pasos y ritmo cardiaco" ,
    

    
    },
    {
     id: "3",
     name:"Air Pods" ,
     price:  300,
     category:"auriculares" ,
     Img :"https://www.wirelessearbuds.best/wp-content/uploads/2020/02/710rzW2RGcL._SL1500_-2.jpg" ,
     stock: 7,
     description: "Auriculares via BlueTooth",

    
    }
]

export const getProducts =() =>{
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(products)
        },500)
        
    })
}

export const getProductsById =(productId) =>{
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const filteredProducts = products.filter(prod => prod.category === category);
            resolve(filteredProducts);
        }, 500)
    })
}