export const ClassCard = ({ img, title }) => {
  return (
    <div className="class-box">
      <div className="class-box-img">
        <img src={img} />
      </div>
      <h1 className="class-box-title">{title}</h1>
    </div>
  );
};
