const SocialLinks = ({data, parentClass, itemClass})=> {
    return (
        <ul className={parentClass}>
            {data.map((link)=>{
                let {id, href, icon} = link;
            return(  
            <li key={id}>
                <a href={href} target="_blank" className={itemClass} rel="noreferrer"
                >
                    <i className={icon}></i></a>
            </li>)
            })}
      </ul>
    )
}
export default SocialLinks;