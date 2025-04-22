import { useState } from 'react'


function App() {
  

  return (
    <>
    <div className="navbar bg-blue-400 shadow-sm">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">Smart Placement Assistant Sysytem</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal items-center px-1">
      <li><a>Login</a></li>
      <li>
      <details className="dropdown">
  <summary className="btn m-1 bg-accent">Register Here</summary>
  <ul className="menu dropdown-content bg-black-800 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Student</a></li>
    <li><a>Recuiter</a></li>
  </ul>
</details>
      </li>
    </ul>
  </div>
</div>
    </>
   
  )
}

export default App
