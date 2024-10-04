import Color from "./Color"


function App() {
  let li = []

  for (let i = 0; i < 100; i++) {
    li.push(i);
    
  }

return (
    
<div className="maingrid">
{li.map(idx => <Color key={idx}/>)}

</div>

      
    
  )
}

export default App
