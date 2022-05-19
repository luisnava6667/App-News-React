import React, { useState } from "react";
const useSelect = (selectInicial, opciones) => {
  //State del custom Hook
  const [state, actualizarState] = useState(selectInicial);
  const SelectNoticias = () => (
    <select className="browser-default" value={state} onChange={e=>actualizarState(e.target.value)}>
      {opciones.map(opcion=>( 
          <option value={opcion.value} key={opcion.value}>{opcion.label}</option>
      ))};
    </select>
  );

  return [state, SelectNoticias];
};

export default useSelect;
