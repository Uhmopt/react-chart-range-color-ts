import * as React from "react";
import Range from "./Range";
import "./range.chart.css";
import { useThumbOverlap } from "./range.chart.utils";

const STEP = 0.1;
const MIN = 0;
const MAX = 100;
const COLORS = ["#1BC5BD", "#FFA800", "#E81D53"];
const THUMB_SIZE = 35;
const RAIL_CONTAINER_HEIGHT = 35;

const ThumbLabel = ({
  rangeRef,
  values,
  index,
}: {
  rangeRef: Range | null;
  values: number[];
  index: number;
}) => {
  const [labelValue, style] = useThumbOverlap(rangeRef, values, index);
  return (
    <div
      data-label={index}
      style={{
        display: "block",
        position: "absolute",
        top: "-28px",
        color: "#fff",
        fontWeight: "bold",
        fontSize: "14px",
        fontFamily: "Arial,Helvetica Neue,Helvetica,sans-serif",
        padding: "4px",
        borderRadius: "4px",
        backgroundColor: "#548BF4",
        whiteSpace: "nowrap",
        ...(style as React.CSSProperties),
      }}
    >
      {labelValue as string}
    </div>
  );
};

const SliderRange: React.FC<{
  rtl?: boolean;
  ranges?: number[];
  value?: number;
  rail_height?: number;
}> = ({
  rtl = false,
  ranges = [33, 66],
  value: propsValue = 0,
  rail_height = 0,
}) => {
  const [values, setValues] = React.useState([0]);
  const rangeRef: any = React.useRef<Range>();

  React.useEffect(() => {
    setValues([propsValue]);
  }, [propsValue]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        width: "100%",
      }}
    >
      <Range
        allowOverlap
        values={values}
        ref={rangeRef}
        step={STEP}
        min={MIN}
        max={MAX}
        rtl={rtl}
        onChange={(values) => setValues(values)}
        renderTrack={({ props, children }) => {
          return (
            <div
              onMouseDown={props.onMouseDown}
              onTouchStart={props.onTouchStart}
              style={{
                ...props.style,
                height: RAIL_CONTAINER_HEIGHT,
                display: "flex",
                width: "100%",
              }}
            >
              <div
                ref={props.ref}
                style={{
                  height: rail_height,
                  width: "100%",
                  borderRadius: rail_height,
                  background: `linear-gradient(to right, ${
                    COLORS[0]
                  } 0%, ${ranges
                    .slice(0, 2)
                    .map(
                      (range, rangeIndex) =>
                        `${COLORS[rangeIndex]} ${
                          range || 33.33 * rangeIndex
                        }%, ${COLORS[rangeIndex + 1]} ${
                          range || 33 * rangeIndex
                        }%, `
                    )
                    .join("")}${COLORS[2]} 100%)`,
                  alignSelf: "center",
                }}
              >
                {children}
              </div>
            </div>
          );
        }}
        renderThumb={({ props, index, isDragged }) => {
          return (
            <div
              {...props}
              style={{
                ...props.style,
                height: `${THUMB_SIZE}px`,
                width: "100%",
                borderRadius: "4px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                outline: "none",
              }}
            >
              {isDragged ? (
                <ThumbLabel
                  rangeRef={rangeRef.current}
                  values={values}
                  index={index}
                />
              ) : null}
              <div className="needle">
                <div
                  className={`triangle${rail_height}-up-before absolute bottom-0`}
                />
                <div
                  className={`triangle${rail_height}-up-after absolute bottom-0`}
                />
                <div
                  className={`triangle${rail_height}-up absolute bottom-0`}
                />
                <div
                  className={`triangle${rail_height}-down-before absolute top-0`}
                />
                <div
                  className={`triangle${rail_height}-down-after absolute top-0`}
                />
                <div className={`triangle${rail_height}-down absolute top-0`} />
              </div>
            </div>
          );
        }}
      />
    </div>
  );
};

export default SliderRange;
