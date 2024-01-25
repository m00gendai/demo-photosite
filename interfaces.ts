export interface Medium{
  path: string;
  title: string;
  date: number;
  url_full: string;
  url_sized: string;
  url_thumb: string;
  width: number;
  height: number;
  index: Number;
}

export interface Album{
    path: string;
    title: string;
    date: number;
    date_updated: number;
    image_size: number;
    thumb_size: number;
    url_thumb: string;
    images: Medium[];
  }

export interface Albums{
    albums:Album[]
}

export interface Gallery{
  title: string;
  desc: string;
  path: string;
  image_size: number;
  thumb_size: number;
  album: Albums;
}

export interface Metadata{
  page: string;
  title: string;
  description: string;
  image: Medium,
  _modified: number;
  _mby: string;
  _created: number;
  _state: number;
  _cby: string;
  _id: string;
}