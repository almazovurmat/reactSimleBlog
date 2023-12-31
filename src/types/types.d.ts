export interface IPost {
    id: string;
    title: string;
    text: string;
    datetime: Date;
}

export type TPostApiWithoutId = Omit<IPost, 'id'>;

export interface IPostApi {
    [id: string]: IPost;
}

export interface IAboutApi {
    text: string;
    text2: string;
    text3: string;
    text4: string;
    text5: string;
}

export interface IAboutData {
    id: string;
    text: string;
    text2: string;
    text3: string;
    text4: string;
    text5: string;
}

export interface IContactApi {
    phone: string;
    email: string;
    address: string;
}

export interface IContactData {
    id: string;
    phone: string;
    email: string;
    address: string;
}
