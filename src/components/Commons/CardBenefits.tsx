import { type CardBenefit } from "../../interfaces"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const CardBenefits = ({title, description, icon}:CardBenefit): JSX.Element => {
    return (
      <article className="px-5 has-text-centered pt-4 box has-shadow is-flex is-align-items-center is-align-content-center is-justify-content-center is-flex-direction-column">
        <FontAwesomeIcon icon={icon} className="icon is-large" />
        <h2 className="is-size-5 is-capitalize mb-3 has-text-weight-medium">{title}</h2>
        <p className="has-text-weight-light">
           {description} 
        </p>
      </article>      
    )
}

export default CardBenefits