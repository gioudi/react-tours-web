const Title = ({ title, subTitle }) => {
  return (
        <div className="is-flex is-justify-content-center">
            <h2 className="title">{title} <span className="subtitle">{subTitle}</span></h2>
        </div>
  )
}
export default Title
