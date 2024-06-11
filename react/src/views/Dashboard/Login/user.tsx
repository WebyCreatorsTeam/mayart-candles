const User = () => {
  return (
    <div className="background">
      <div className="navBar">
        <p className="user">משתמשים</p>
        <p className="userName">name</p>
      </div>
      <div className="addPerson">
        <h1>משתמשים עם גישה</h1>
        <form>
          <input className="email" type="text" name="email" />
          <button type="submit">הוספת משתמש </button>
        </form>
      </div>
    </div>
  )
}
export default User