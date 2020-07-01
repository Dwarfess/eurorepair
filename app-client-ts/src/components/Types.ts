
export interface ProjectItem {
    id: number,
    name: string,
    category: string,
    length: number,
    width: number,
    height: number
}

export interface Project {
    mainParams: ProjectItem,
    rooms: ProjectItem[]
}

export interface Category {
    text: string,
    value: string
}
