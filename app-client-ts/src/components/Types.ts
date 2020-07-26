
export interface ProjectItem {
    id: number,
    name: any,
    category: string,
    length: number,
    width: number,
    height: number
}

export interface Project {
    _id?: any,
    _tempId?: number,
    created: string,
    image: string,
    active: boolean,
    mainParams: ProjectItem[],
    rooms: ProjectItem[],
    kitchens: ProjectItem[],
    restrooms: ProjectItem[],
    bathrooms: ProjectItem[],
    hallways: ProjectItem[]
}

export interface Category {
    text: string,
    value: string
}
