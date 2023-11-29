import { ReactElement, FC, useEffect, useState } from "react";


const Flipflop: FC<any> = (): ReactElement => {

  const [source, setSource] = useState("/images/m1.gif");
  const [width, setWidth] = useState(120);
  const [height, setHeight] = useState(120);
  const [inc, setInc] = useState(5);
  const [ff, setFf] = useState("flip");

  const wdmax=120;          //set maximum width of square image (px)
  const wdmin=0;            //set minimum thickness of edge-on image (px)
  //let inc=5;            //set step change in px (wdmax-wdmin must be a multiple)
  //These two variables determine flip-flop speed
  const rate = 50;          //pause between steps (in millisec)                      
  const pause = 1000;       //pause between flip and flop (in millisec)
  //let ff="flip";          //initialise whether movement starts with a "flip" (sideways) or "flop" (vertical) change.

  useEffect(() => {
    let flipflop_o = document.getElementById("flipflop");
    if (!flipflop_o) {
      return;
    }

    if (ff == "flip") {

      let wd = width - inc;
      let prev_inc = inc;

      if (wd == wdmin) {
        setSource(source => ("/images/m2.gif"));
        setInc(inc => (-inc));
      }
      if (wd == wdmax) {
        setFf(ff => ("flop"));
        setInc(inc => (-inc));

        setTimeout(() => {
          setWidth(width => (width - prev_inc));
        }, pause)

      } else {

        setTimeout(() => {
          setWidth(width => (width - prev_inc));
        }, rate)

      }
    } else {

      let ht = height - inc;
      let prev_inc = inc;

      if (ht == wdmin) {
        setSource(source => ("/images/m1.gif"));
        setInc(inc => (-inc));
      }
      if (ht == wdmax) {
        setFf(ff => ("flip"));
        setInc(inc => (-inc));

        setTimeout(() => {
          setHeight(height => (height - prev_inc));
        }, pause)

      } else {

        setTimeout(() => {
          setHeight(height => (height - prev_inc));
        }, rate)

      }
    }
  }, [width, height]);

  return (
    <div style={{height:"120px"}}>
      <img src={source} width={width} height={height} id="flipflop" />
    </div>
  );
};

export default Flipflop;
