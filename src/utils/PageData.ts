class Picture{
	constructor(
    public src: string, 
    public text: string
  ){
	}
}

class PageData{
  public margin = 16;
  public icon_scale = true;
  public pictures: Picture[] = [];

  constructor(
    public icon_w: number, 
    public icon_h: number, 
    public dir: string, 
    public label_img: string, 
    public label: string,
    public label_h: number, 
    public label_w: number, 
    public label_color: string, 
    public size: number
  ){
  }

  addPicture(src: string, text: string){
    let picture = new Picture(src, text);
    this.pictures.push(picture);
	}
}

export default PageData;