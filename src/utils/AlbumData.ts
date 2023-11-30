import PageData from "./PageData";

class AlbumData {

  public icon_w = 100;
	public icon_h = 100;
	public pages: PageData[] = []; 

  constructor(
    public dir: string,
    public label_img='',
    public label_color='black',
    public label_size=14
  ){
  }

  addPage(label: string, h=45, w=5, label_color="none", label_size=0) {
    if (label_color=="none") {
      label_color = this.label_color;
    }
    if (label_size==0) {
      label_size = this.label_size;
    }
		let page = new PageData(this.icon_w, this.icon_h, this.dir, this.label_img, label, h, w, label_color, label_size);
    this.pages.push(page);
		return page;
	}

}

export default AlbumData;