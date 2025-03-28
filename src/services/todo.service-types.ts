export interface ITodoModel {
  id: string
  title: string
  description?: string
  isComplete: boolean
}

export interface ITodoCreateModel {
  title: string
  description: string
}

export interface ITodoUpdateModel extends ITodoCreateModel {
  isComplete: boolean
}