//универсальный мапинг

export const updateObjectArray = (items, itemId, objPropName,newObjProps) => {
   return items.map(u => {    //.map возвращает новый массив который заменит
        if (u[objPropName] === itemId) { //если найдёт совподения по такому objPropName из обьекта с таким itemId 
            return { ...u, ...newObjProps }  // создаст новую копию объекта и заменит старые св-ва
        }
        return u; //если id не совподает то возвращаем старый объект
    })
}