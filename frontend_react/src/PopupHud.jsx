import InfoPopup from "./Popup";

function PopupHud(props) {
  return (
    <div
      style={{ width: props.mapperWidth, height: props.mapperHeight }}
      className="popuphud"
    >
      <InfoPopup
        name="Promenade"
        scaleRatio={props.scaleRatio}
        open={props.open[0]}
        position="top center"
        left="1100"
        top="880"
      />
      <InfoPopup
        name="Easy Street"
        scaleRatio={props.scaleRatio}
        open={props.open[1]}
        position="bottom center"
        left="1270"
        top="1050"
      />
      <InfoPopup
        name="76 Road"
        scaleRatio={props.scaleRatio}
        open={props.open[2]}
        position="top center"
        left="1230"
        top="730"
      />
      <InfoPopup
        name="Tye Creek"
        scaleRatio={props.scaleRatio}
        open={props.open[3]}
        position="top center"
        left="1200"
        top="900"
      />
      <InfoPopup
        name="Brennan's Trail"
        scaleRatio={props.scaleRatio}
        open={props.open[4]}
        position="bottom center"
        left="2050"
        top="925"
      />
      <InfoPopup
        name="Showcase"
        scaleRatio={props.scaleRatio}
        open={props.open[5]}
        position="top center"
        left="380"
        top="880"
      />
      <InfoPopup
        name="One Light"
        scaleRatio={props.scaleRatio}
        open={props.open[6]}
        position="top center"
        left="1900"
        top="975"
      />
      <InfoPopup
        name="Waterfall"
        scaleRatio={props.scaleRatio}
        open={props.open[7]}
        position="top center"
        left="2050"
        top="850"
      />
      <InfoPopup
        name="Broadway"
        scaleRatio={props.scaleRatio}
        open={props.open[8]}
        position="top center"
        left="2150"
        top="760"
      />
      <InfoPopup
        name="Skyline"
        scaleRatio={props.scaleRatio}
        open={props.open[9]}
        position="top center"
        left="2150"
        top="520"
      />
      <InfoPopup
        name="Barrier Ridge"
        scaleRatio={props.scaleRatio}
        open={props.open[10]}
        position="bottom center"
        left="2150"
        top="585"
      />
      <InfoPopup
        name="Marmot Meadows"
        scaleRatio={props.scaleRatio}
        open={props.open[11]}
        position="top center"
        left="2000"
        top="710"
      />
      <InfoPopup
        name="Hog Heaven"
        scaleRatio={props.scaleRatio}
        open={props.open[12]}
        position="top center"
        left="1760"
        top="580"
      />
      <InfoPopup
        name="Hog Wild"
        scaleRatio={props.scaleRatio}
        open={props.open[13]}
        position="top center"
        left="1450"
        top="1065"
      />
      <InfoPopup
        name="International"
        scaleRatio={props.scaleRatio}
        open={props.open[14]}
        position="bottom center"
        left="1710"
        top="810"
      />
      <InfoPopup
        name="Blue Trail"
        scaleRatio={props.scaleRatio}
        open={props.open[15]}
        position="left center"
        left="1465"
        top="850"
      />
      <InfoPopup
        name="Rock N Blue"
        scaleRatio={props.scaleRatio}
        open={props.open[16]}
        position="right center"
        left="1350"
        top="850"
      />
      <InfoPopup
        name="Wall St"
        scaleRatio={props.scaleRatio}
        open={props.open[17]}
        position="right center"
        left="1430"
        top="718"
      />
      <InfoPopup
        name="Hoot N Holler"
        scaleRatio={props.scaleRatio}
        open={props.open[18]}
        position="top center"
        left="1430"
        top="650"
      />
      <InfoPopup
        name="Slow Poke"
        scaleRatio={props.scaleRatio}
        open={props.open[19]}
        position="top center"
        left="1430"
        top="630"
      />
      <InfoPopup
        name="Hagen Hill"
        scaleRatio={props.scaleRatio}
        open={props.open[20]}
        position="top center"
        left="1430"
        top="610"
      />
      <InfoPopup
        name="Skid Road"
        scaleRatio={props.scaleRatio}
        open={props.open[21]}
        position="right center"
        left="1250"
        top="510"
      />
      <InfoPopup
        name="Crest Trail"
        scaleRatio={props.scaleRatio}
        open={props.open[22]}
        position="right center"
        left="1200"
        top="520"
      />
      <InfoPopup
        name="I-5"
        scaleRatio={props.scaleRatio}
        open={props.open[23]}
        position="left center"
        left="520"
        top="800"
      />
      <InfoPopup
        name="Double Diamond"
        scaleRatio={props.scaleRatio}
        open={props.open[24]}
        position="right center"
        left="495"
        top="625"
      />
      <InfoPopup
        name="Lower Diamond"
        scaleRatio={props.scaleRatio}
        open={props.open[25]}
        position="left center"
        left="605"
        top="770"
      />
      <InfoPopup
        name="Trapper"
        scaleRatio={props.scaleRatio}
        open={props.open[26]}
        position="right center"
        left="670"
        top="770"
      />
      <InfoPopup
        name="Wild Katz"
        scaleRatio={props.scaleRatio}
        open={props.open[27]}
        position="right center"
        left="750"
        top="665"
      />
      <InfoPopup
        name="Roller Coaster"
        scaleRatio={props.scaleRatio}
        open={props.open[28]}
        position="right center"
        left="1040"
        top="425"
      />
      <InfoPopup
        name="Rock Garden"
        scaleRatio={props.scaleRatio}
        open={props.open[29]}
        position="top right"
        left="1825"
        top="355"
      />
      <InfoPopup
        name="Lower Rock Garden"
        scaleRatio={props.scaleRatio}
        open={props.open[30]}
        position="top right"
        left="1775"
        top="397"
      />
      <InfoPopup
        name="Little Tree"
        scaleRatio={props.scaleRatio}
        open={props.open[31]}
        position="bottom left"
        left="1700"
        top="530"
      />
      <InfoPopup
        name="Cloud 9"
        scaleRatio={props.scaleRatio}
        open={props.open[32]}
        position="bottom left"
        left="1935"
        top="325"
      />
      <InfoPopup
        name="Bobby Chute"
        scaleRatio={props.scaleRatio}
        open={props.open[33]}
        position="bottom right"
        left="2175"
        top="425"
      />
      <InfoPopup
        name="Nancy Chute"
        scaleRatio={props.scaleRatio}
        open={props.open[34]}
        position="bottom right"
        left="2210"
        top="400"
      />
      <InfoPopup
        name="Solitude"
        scaleRatio={props.scaleRatio}
        open={props.open[35]}
        position="bottom right"
        left="2225"
        top="320"
      />
      <InfoPopup
        name="Headwall"
        scaleRatio={props.scaleRatio}
        open={props.open[36]}
        position="bottom left"
        left="2100"
        top="600"
      />
      <InfoPopup
        name="Lower Terminal"
        scaleRatio={props.scaleRatio}
        open={props.open[37]}
        position="bottom right"
        left="2290"
        top="630"
      />
      <InfoPopup
        name="Exhibition"
        scaleRatio={props.scaleRatio}
        open={props.open[38]}
        position="bottom left"
        left="1835"
        top="860"
      />
      <InfoPopup
        name="Panorama"
        scaleRatio={props.scaleRatio}
        open={props.open[39]}
        position="top right"
        left="1840"
        top="830"
      />
      <InfoPopup
        name="Parachute 1"
        scaleRatio={props.scaleRatio}
        open={props.open[40]}
        position="left center"
        left="1655"
        top="670"
      />
      <InfoPopup
        name="Parachute 2"
        scaleRatio={props.scaleRatio}
        open={props.open[41]}
        position="left center"
        left="1610"
        top="725"
      />
      <InfoPopup
        name="Kehr's Chair"
        scaleRatio={props.scaleRatio}
        open={props.open[42]}
        position="right bottom"
        left="750"
        top="950"
      />
      <InfoPopup
        name="Double Diamond Lift"
        scaleRatio={props.scaleRatio}
        open={props.open[43]}
        position="right bottom"
        left="355"
        top="450"
      />
      <InfoPopup
        name="Tye Mill"
        scaleRatio={props.scaleRatio}
        open={props.open[44]}
        position="left top"
        left="980"
        top="450"
      />
      <InfoPopup
        name="Daisy"
        scaleRatio={props.scaleRatio}
        open={props.open[45]}
        position="left bottom"
        left="1275"
        top="900"
      />
      <InfoPopup
        name="Hogsback Express"
        scaleRatio={props.scaleRatio}
        open={props.open[46]}
        position="right top"
        left="1500"
        top="840"
      />
      <InfoPopup
        name="Skyline Express"
        scaleRatio={props.scaleRatio}
        open={props.open[47]}
        position="left bottom"
        left="2050"
        top="645"
      />
      <InfoPopup
        name="Brooks Express"
        scaleRatio={props.scaleRatio}
        open={props.open[48]}
        position="left bottom"
        left="2050"
        top="802"
      />
      <InfoPopup
        name="7th Heaven"
        scaleRatio={props.scaleRatio}
        open={props.open[49]}
        position="left top"
        left="2100"
        top="320"
      />
    </div>
  );
}

export default PopupHud;
