import { ReactElement, FC, useEffect, useState } from "react";

//adapted from https://pintergabor.eu/en/www/jseyes/

const Jseyes: FC<any> = (): ReactElement => {

	let main= { img:"jseyes/jseyes.gif", w:150, h:150 };
  let eye1= { img:"jseyes/jseyeblue.gif", w:21, h:29, x:46,  y:58, xr:7, yr:17 };
  let eye2= { img:"jseyes/jseyeblue.gif", w:21, h:29, x:102, y:58, xr:7, yr:17 };
  let follow= 100; // %
  // Private variables
  let trail= { x:0, y:0 };

  useEffect(() => {
    const mouseMoveHandler = (e: MouseEvent) => {
      e.preventDefault();

      let main_o = document.getElementById('__jseyes__');
      let eye1_o = document.getElementById('__jseye1__');
      let eye2_o = document.getElementById('__jseye2__');

      // trail follows mouse position relative to document
			trail.x+= (e.pageX-trail.x)*follow/100;
			trail.y+= (e.pageY-trail.y)*follow/100;
			// Move eyes to look at trail
			if (main_o && eye1_o && eye2_o && main_o.style) {
				// Find true position relative to body
				var p= { o:main_o, x:0, y:0 };//HTMLElement
				do {
					p.x+= p.o.offsetLeft;
					p.y+= p.o.offsetTop;
					p.o= p.o.offsetParent as HTMLElement;//Element
				} while (p.o);
				// Move eye1
				var d= { x:0, y:0 };
				d.x= trail.x-p.x-eye1.x;
				d.y= trail.y-p.y-eye1.y;
				let r= Math.sqrt(d.x*d.x/(eye1.xr*eye1.xr)+d.y*d.y/(eye1.yr*eye1.yr));
				if (r<1) r=1;
				eye1_o.style.left= (d.x/r+eye1.x-eye1.w/2)+"px";
				eye1_o.style.top=  (d.y/r+eye1.y-eye1.h/2)+"px";
				// Move eye2
				d.x= trail.x-p.x-eye2.x;
				d.y= trail.y-p.y-eye2.y;
				r= Math.sqrt(d.x*d.x/(eye2.xr*eye2.xr)+d.y*d.y/(eye2.yr*eye2.yr));
				if (r<1) r=1;
				eye2_o.style.left= (d.x/r+eye2.x-eye2.w/2)+"px";
				eye2_o.style.top=  (d.y/r+eye2.y-eye2.h/2)+"px";
			}
    };

    window.addEventListener('mousemove', mouseMoveHandler);

    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler);
    };
  }, []);

  return (
    <div id='__jseyes__' style={{position:"relative",zIndex:"5",overflow:"hidden",width:main.w+"px",height:main.h+"px"}}>

      <div id='__jseye1__' style={{position:"absolute",zIndex:"6", overflow:"visible",left:(eye1.x-eye1.w/2)+"px",top:(eye1.y-eye1.h/2)+"px",width:eye1.w+"px",height:eye1.h+"px"}}>
        <img src={eye1.img}	style={{width:eye1.w+"px",height:eye1.h+"px",}} />
      </div>

      <div id='__jseye2__' style={{position:"absolute",zIndex:"6",overflow:"visible",left:(eye2.x-eye2.w/2)+"px",top:(eye2.y-eye2.h/2)+"px",width:eye2.w+"px",height:eye2.h+"px"}}>
        <img src={eye2.img} style={{width:eye2.w+"px",height:eye2.h+"px",}} />
      </div>

      <img src="jseyes/jseyes.gif" style={{width:main.w+"px",height:main.h+"px",}} />

    </div>
  );
};

export default Jseyes;
