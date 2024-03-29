

const Alerta = ({ alerta }) => {
  return (
    <div className={`${alerta.error ? 'from-red-400 to-red-600' : 'from-indigo-400 to-indigo-600'} bg-gradient-to-br text-center p-3 rounded-xl uppercase text-white font-bold text-sm m-6`}>
        {alerta.msg}
    </div>
  )
}

export default Alerta;