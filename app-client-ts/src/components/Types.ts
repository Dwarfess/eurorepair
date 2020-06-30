
export interface ProjectItem {
    id: number,
    name: string,
    type: string,
    length: number,
    width: number,
    height: number
}

export interface Project {
    mainParams: ProjectItem,
    rooms: ProjectItem[]
}
