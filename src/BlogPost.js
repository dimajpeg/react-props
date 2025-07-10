function BlogPost(props) {
  function handleReadClick() {
    console.log(`text "${props.title}"`)
  }
  return (
    <div>
      <h2>{props.title}</h2>
      <p>Author: {props.author}</p>
      <p>Likes: {props.likes}</p>
      <button onClick={handleReadClick}>texttext</button>
    </div>
  ) 
}

export default BlogPost

// function BlogPost(props) {
//   function handleReadClick() {
//     console.log(`Читаем пост "${props.title}"`)
//   }

//   return(
//     <div>
//       <h2>{props.title}</h2>
//       <p>Автор: {props.author}</p>
//       <p>{props.likes}</p>
//       <button onClick={handleReadClick}>Прочитать</button>
//     </div>
//   )
// }
// export default BlogPost

// function BlogPost(props) {
//   function handleReadClick() {
//     console.log(`reed that post "${props.title}"`)
//   }
//   return (
//     <div>
//       <h2>{props.title}</h2>
//       <p>Author: {props.author}</p>
//       <p>{props.likes}</p>
//       <button onClick={handleReadClick}>Reed</button>
//     </div>
//   )
// }
// export default BlogPost

// function BlogPost(props) {
//   function handleReadClick(){
//     console.log(`read that text "${props.title}"`)
//   }
//   return(
//     <div>
//       <h2>{props.title}</h2>
//       <p>Author:{props.author}</p>
//       <p>Likes:{props.likes}</p>
//       <button onClick={handleReadClick}>click</button>
//     </div>
//   )
// }

// export default BlogPost