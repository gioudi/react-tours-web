import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const SocialLinks = ({data, parentClass, itemClass})=> {
    return (
        <ul className={parentClass}>
            {data.map((link)=>{
                let {id, href,icon } = link;
            return(  
            <li key={id}>
                <a href={href} target="_blank" className={itemClass} rel="noreferrer"
                >
                    <FontAwesomeIcon icon={icon}/></a>
            </li>)
            })}
      </ul>
    )
}
export default SocialLinks;