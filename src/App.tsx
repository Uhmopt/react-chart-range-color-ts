import './App.css';
import SliderRange from './views/componets/range.chart/SliderRange';

function App() {
  return (
    <div>
      {[
        [10, 20],
        [20, 30],
        [30, 40],
        [40, 50],
        [50, 60],
        [60, 70],
        [70, 80],
        [80, 90],
        [90, 100],
      ].map((item, itemIndex) => (
        <SliderRange key={itemIndex} ranges={item} />
      ))}
    </div>
  );
}

export default App;
