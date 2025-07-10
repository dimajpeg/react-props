function BlogPost(props) {
  function handleReadClick() {
    console.log(`Читаем пост "${props.title}"`)
  }

  return(
    <div>
      <h2>{props.title}</h2>
      <p>Автор: {props.author}</p>
      <p>{props.likes}</p>
      <button onClick={handleReadClick}>Прочитать</button>
    </div>
  )
}
export default BlogPost