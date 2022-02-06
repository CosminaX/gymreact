import './antrenamentes.css';
import antrenor1 from './antrenor1.jpg';
import antrenor2 from './antrenor2.jpg';
import antrenor3 from './antrenor3.jpg';
import antrenor4 from './antrenor4.jpg';

const Antrenamente = () => {
  return (
    <div><h3 className='titlu'> Antrenori personali</h3>
    <div className='antrenamente'>
      <div className="cardant">
        <img src={antrenor1} alt="antrenor1" className='antrenori' />
        <div className="container">
            <h4><b>Dan Negru</b></h4>
            <p>Instructor Fitness si Personal Trainer</p>
            </div>
       </div> 
       <div className="cardant">
        <img src={antrenor2} alt="antrenor2" className='antrenori' />
        <div className="container">
            <h4><b>Ana Roșca</b></h4>
            <p>Instructor Fitness si Personal Trainer</p>
            </div>
        </div> 
         <div className="cardant">
        <img src={antrenor3} alt="antrenor3" className='antrenori' />
        <div className="container">
            <h4><b>George Ghiholariu</b></h4>
            <p> Personal Trainer</p>
            </div>
         </div> 
        <div className="cardant">
        <img src={antrenor4} alt="antrenor4" className='antrenori' />
        <div className="container">
            <h4><b>Alexandru Bănică</b></h4>
            <p>Instructor Fitness </p>
            </div>
        </div> 
    </div>
    <h3 className="titlu">Antrenamente </h3>
    <div className='antrtypes'>
    <ul className='tip-antrenament'>
                <li> Pump </li>
                <li> Circuit </li>
                <li> Abs </li>
            </ul>
            <ul className='tip-antrenament'>
                <li> Butt </li>
                <li> Interval </li>
                <li> Brazilian butt</li>
            </ul>
            <ul className='tip-antrenament'>
                <li> Totall body </li>
                <li> Step and tone </li>
                <li> Step choregraphy </li>
            </ul>
            <ul className='tip-antrenament'>
                <li> Afro aerobics </li>
                <li> Zumba </li>
                <li> Pilates </li>
            </ul>
            </div>
    </div>
  )
}

export default Antrenamente

