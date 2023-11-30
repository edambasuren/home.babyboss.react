import PageData from "./PageData";

class AlbumData {

  public icon_w = 100;
	public icon_h = 100;
	public pages: PageData[] = []; 

  constructor(
    public dir: string,
    public label_img: string=''
  ){
  }

  addPage(label: string, h=45, w=5, c="black", size=14) {
		let page = new PageData(this.icon_w, this.icon_h, this.dir, this.label_img, label, h, w, c, size);
    this.pages.push(page);
		return page;
	}

}

export default AlbumData;