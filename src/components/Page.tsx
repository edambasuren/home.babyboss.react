import { ReactElement, FC } from "react";
import PageData from "../utils/PageData";

const Page: FC<any> = ({ page }: { page: PageData }): ReactElement => {

  let t_w = page.icon_w + page.margin;
  let t_h = page.icon_h + page.margin;
  let w1 = page.icon_w - page.label_w;
  let h1 = page.icon_h - page.label_h;

  return (
    <div>

      <div style={{clear: "left",float:"left",width:t_w,height:t_h,display: "flex",justifyContent: "center", alignItems: "center",}}>
        <div id="icon" style={{margin:"auto",position:"relative",width:page.icon_w,height:page.icon_h,backgroundImage: `url(${page.dir + '/icons/' + page.label_img})`,}}>
          <div style={{position:"absolute",top: h1,width: w1, textAlign: "right", font: "bold "+page.size+"px Times New Roman",color: page.label_color}}>
            {page.label}
          </div>
        </div>
      </div>

      {page.pictures.map((picture, i) => (
        <div key={i}>
          {i%4 == 0 && i!=0 && 
            <div id="icon" style={{float: "left",width:t_w,height:t_h,display: "flex",justifyContent: "center", alignItems: "center",}}>
              <img src={"/" + page.dir + '/icons/empty.gif'} style={{maxWidth:page.icon_w,maxHeight:page.icon_w,}}/>
            </div>
          }

          <div id="icon" style={{float: "left",width:t_w,height:t_h,display: "flex",justifyContent: "center", alignItems: "center",}}>
            <img src={"/" + page.dir + '/' + picture.src} style={{border: "1px solid black",maxWidth:page.icon_w,maxHeight:page.icon_w,}}
            onClick={()=> window.open(
              'picture.html?src=/'+page.dir+'/'+picture.src+'&text='+picture.text,
              'NewWin',
              'toolbar=no,status=no')}
             />
          </div>
        </div>
      ))}

    </div>
  );
};

export default Page;
