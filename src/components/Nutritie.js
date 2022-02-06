import './nutrities.css';
import nutri1 from './nutri1.jpg';
import nutri2 from './nutri2.jpg';
import nutri3 from './nutri3.jpg';

const Nutritie = () => {
  return (
    <div className='nutritiepg'>
      <h1>Nutritie - vitaminele si mineralele de care ai nevoie</h1>
      <p >O alimentatie sanatoasa inseamna o alimentatie variata. Vitaminele si mineralele joaca un rol important in mentinerea sanatatii. Daca veti consuma doza zilnica de vitamine si minerale recomandata, va veti simti si veti arata bine la orice varsta.
      </p>
      <h3>Regula culorilor</h3>
      <p>Pentru a va asigura ca alimentele pe care le consumati contin toti nutrientii de care aveti nevoie, va recomandam sa consumati un curcubeu de legume si fructe la fiecare masa a zilei.
      </p>
      <p className='nutriimage'> 
          <img src={nutri1} alt="nutri1" className='nutrijpg'/>
          <img src={nutri2} alt="nutri2" className='nutrijpg'/>
          <img src={nutri3} alt="nutri3" className='nutrijpg'/>
      </p>
      <h3>Vitaminele</h3>
      <p>
      Cele mai importante vitamine sunt considerate a fi antioxidantii (vitamina E, C si A, impreuna cu seleniu mineral) si vitamina D.Antioxidantii ajuta la neutralizarea radicalilor liberi. Radicalii liberi sunt molecule care distrug celulele si care sunt considerati responsabili pentru dezvoltarea multor afectiuni. O dieta bogata in fructe si legume furnizeaza antioxidantii necesari, protejeaza organismul si il ajuta sa combata diverse afectiuni.  
      </p>
    </div>
  )
}

export default Nutritie
