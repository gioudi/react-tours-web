const PageLinks = ({data, parentClass, itemClass}) => {
    return(
        <ul className={parentClass}>
        {
         data.map((link)=> {
           return (
             <li key={link.id}>
               <a href={link.href} className={itemClass}>{link.text}</a>
             </li>
           )
         })
        }
     </ul>
    )
}

export default PageLinks;