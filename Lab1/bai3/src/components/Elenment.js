function Element({ title, img, kkey }) {
  console.log(kkey);
  return (
    <div id={kkey} class="element">
      <div>{title}</div>
      <img src={img} alt={title}></img>
      <a href="#">Quay v? trang �?u</a>
    </div>
  );
}

export default Element;
