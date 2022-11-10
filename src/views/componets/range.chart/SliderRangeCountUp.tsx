import * as React from "react";
import "./range.chart.css";
import SliderRange from "./SliderRange";

const SLIDER_RANGE_DELAY = 1500;
const SLIDER_RANGE_DURATION = 1500;
const SLIDER_RANGE_INTERVAL = 50;

const SliderRangeCountUp: React.FC<{
  rtl?: boolean;
  ranges?: number[];
  value?: number;
  rail_height?: number;
  delay?: number;
  duration?: number;
}> = ({
  rtl = false,
  ranges = [33, 66],
  value: propsValue = 0,
  rail_height = 0,
}) => {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    setTimeout(() => {
      setValue(0);

      const countUpInterval = setInterval(() => {
        setValue((s = 0) => {
          return s + (propsValue - s) / 8;
        });
      }, SLIDER_RANGE_INTERVAL);

      setTimeout(() => {
        clearInterval(countUpInterval);
      }, SLIDER_RANGE_DURATION);
    }, SLIDER_RANGE_DELAY);
  }, [propsValue]);

  return (
    <SliderRange
      ranges={ranges}
      rail_height={rail_height}
      value={value}
      rtl={rtl}
    />
  );
};

export default SliderRangeCountUp;
