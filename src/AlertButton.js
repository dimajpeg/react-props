function AlertButton() {
  function showAlert() {
    alert('Вы кликнули!');
  }
  
  return <button onClick={showAlert()}>Нажми меня</button>;
}

export default AlertButton