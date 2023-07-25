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

type IHeader = IHeaderWrapper[];

export type { IHeader }