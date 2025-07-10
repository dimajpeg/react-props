function UserProfile() {
  const user = { name: 'Евгений', age: 28 };
  return (
    <div>
      <h2>Имя: {user.name}</h2>
      <p>Возраст: {user.age}</p>
    </div>
  );
}
export default UserProfile