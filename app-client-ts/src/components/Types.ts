
export interface Room {
    id: number,
    name: any,
    category: string,
    length: number,
    width: number,
    height: number,
    dragAndDropParams?: dragAndDropParams
}

export interface Project {
    _id?: any,
    _tempId?: number,
    date: string,
    image: string,
    active: boolean,
    mainParams: Room[],
    rooms: Room[],
    kitchens: Room[],
    restrooms: Room[],
    bathrooms: Room[],
    hallways: Room[]
}

export interface Category {
    text: string,
    value: string
}

export interface dragAndDropParams {
    width: number,
    height: number,
    top: number,
    left: number,
    editable: boolean,
}

export interface Side {
    name: string,
    width: number,
    height: number
}

export interface Service {
    id: number,
    type: string,
    name: string,
    category: string,
    description: string,
    price: number
}
