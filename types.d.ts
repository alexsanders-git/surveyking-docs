interface ILinkArray {
    left: IColumn | IColumn[];
    right: IColumn | IColumn[];
}

interface IColumn {
    title: string;
    columns: ILink[][];
}

interface ILink {
    text: string;
    href: string;
}