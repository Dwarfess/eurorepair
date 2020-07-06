
export interface ProjectItem {
    id: number,
    name: string,
    category: string,
    length: number,
    width: number,
    height: number
}

export interface Project {
    _id?: number,
    created: number,
    image: string,
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
