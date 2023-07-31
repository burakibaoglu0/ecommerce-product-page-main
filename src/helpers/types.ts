interface IHeaderItems{
    isImage?: boolean,
    alt?: string,
    path: string,
    src?: string,
    title?: string,
}

interface IHeaderWrapper{
    pos: string,
    items: IHeaderItems[]
}

interface IProductImage{
    src: string,
    thumbnail: string,
    alt: string,
}

interface IProduct{
    brand: string,
    name: string,
    description: string,
    currency: string,
    price: number,
    oldPrice?: number,
    images: IProductImage[],
}

type IHeader = IHeaderWrapper[];

export type { IHeader , IProduct , IProductImage}