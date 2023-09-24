const PageLinks = ({data,  itemClass}) => {
    return(
       <>
       {
         data.map((link)=> {
           return (
            <a   href={link.href} className={itemClass}  key={link.id}>
            {link.text} </a>
           )
         })
        }</>
  
    
    )
}

export default PageLinks;