function Element({ title, img, kkey }) {
  console.log(kkey);
  return (
    <div className="text-center " id={kkey}>
      <h3 className="font-bold p-4">{title}</h3>
      <img src={img} alt={title}></img>
      <a className="underline text-[#3738bf]" href="#">Quay về trang đầu</a>
    </div>
  );
}

export default Element;
