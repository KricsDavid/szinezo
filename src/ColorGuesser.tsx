import React, { useState } from "react";

const ColorGuesser = () => {
    const [red, setred] = useState(0)
return(

<div>
<label htmlFor="red">R</label>
<input min={0} max={255} type="range" name="" id="red" />

<label htmlFor="green">G</label>
<input min={0} max={255} type="range" name="" id="green" />

<label htmlFor="blue">B</label>
<input min={0} max={255} type="range" name="" id="blue" />
</div>


)

}