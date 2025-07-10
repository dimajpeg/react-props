function WelcomeMessage(props) {
  return (
    <div>
      <h1>{'Добро пожаловать, ' + props.username}</h1>
    </div>
  )
}

export default WelcomeMessage