import Color from "./Color"
import Modal from "./Modal";

function App() {
  let li = []

  for (let i = 0; i < 100; i++) {
    li.push(i);
    
  }

return (
  
    <>
    <Modal />
<div className="maingrid">
{li.map(idx => <Color key={idx}/>)}

</div>

</>
    
  )
}

export default App
