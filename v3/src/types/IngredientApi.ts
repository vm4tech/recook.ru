export type IngredientCreateRequest = {
    name: string,
    description?: string,
    measure: string,
    type: string,
    count: number,
    base64Img: string
}