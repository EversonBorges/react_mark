import React, { useState } from 'react';
import Highlight from './highlight';

const App = () => {

    const [word, setWord] = useState('');
    function handleChange(event){
        setWord(event.target.value)
    }

    return (
        <>
            <input type='text' value={word} onChange={handleChange}/>
            <p><Highlight children='Texto a ser marcado' toHighlight={word}/></p>
            <p><Highlight children='Um outro texto que também poderá ser marcado' toHighlight={word}/></p>
        
            <table>
                <thead>
                    <tr>
                        <th>Cursos</th>
                        <th>Horas</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                        <Highlight children='Javascript Ninja' toHighlight={word}/></td>
                        <td>42h</td>
                    </tr>
                    <tr>
                        <td>React Ninja</td>
                        <td>60h</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}
export default App;