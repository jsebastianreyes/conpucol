import styled from 'styled-components'
import toast from 'react-hot-toast'

const FormStyled = styled.div`
  form{
    
    margin-block-start: 1rem;
    margin-block-end: 1rem;
  
    font-family: "Roboto", sans-serif;
    color: #333333;
  }

  form input::placeholder{
    font-family: "Roboto", sans-serif;
    color: #bbbbbb;
    font-size: .8rem;
    font-weight: 300;
  }

  form input{
    border: 0;
    outline: 0;
    padding-inline:0;
    inline-size: 90%;
  }

  .check{
    display: flex;
    flex-direction: row;
    gap: .5rem;
    align-items: center;
  }

  .check div{
    display: flex;
  }
  .check input{
    margin: 0;
    margin-inline-end: .3rem;
  }
  .title{
    font-weight: 800;
    font-size: .8rem;
  }
  .subtitle{
    color: #333333;
    font-size: .8rem;
  }

  input[type="submit"]{
        border: 1px solid #273AA6;
        padding: .5rem;
        background: white;
        border-radius: 1.5rem;
        cursor: pointer;
        margin-block-start: 1rem;
        margin-block-end: .5rem;
        font-weight: 600;
        text-align: center;
        color: #000;
        height: auto;
        width: auto;
  }

  .border{
    display: flex;
    flex-direction: column;
    gap: 12px; 
    box-shadow: 0 9px 0px 0px white, 0 -9px 0px 0px white, 12px 0 15px -4px rgba(239, 239, 239, 0.8), -12px 0 15px -4px rgba(239, 239, 239, 0.8);
  }
  .container-input{
    display: flex;
    align-items: center;
    gap: .5rem;
  }

  @media screen and (max-width: 762px) {
        .check{
          gap: 2rem;
        }
    }
`

function Form({setInfoVisible}) {
  const handleSetForm = async (e)=>{
    e.preventDefault() 
    const formData = new FormData(e.target);
    formData.append("access_key", "e9a40d98-19ef-4250-9cc6-c855dbd71582");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());
  
    if (res.success) {
      e.target.reset()
      setInfoVisible(false)
      toast.success('Mensaje enviado, gracias por escribirnos', {
        style: {
          fontFamily: 'Roboto, sans-serif',
          fontSize: '1.1rem'
        }
      })


    }
  }
    return (
        <FormStyled>
           <form action="#" onSubmit={handleSetForm}>
           <div className='border'>
           <p className='title'>Ingrese sus datos para separar su cupo, gestionaremos su suscripción directamente.</p>
             <div className="container-input">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" width="16" height="16">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
               <input type="hidden" name="subject" value="Solicitud de Suscripción"  required/>

                <input type="text" name="nombre" id="nombre" placeholder='Nombre Completo' />
             </div>
             <div className="container-input">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" width="16" height="16">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                <input type="number" name="celular"  id="celular" placeholder='Número de Teléfono' required />
             </div>
             <div className="container-input">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" width="16" height="16">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z" />
                </svg>
                <input type="email" name="email" id="email" placeholder='Correo Eléctronico' required/>
             </div>
            <label className="subtitle" htmlFor="">¿Afiliado a Conpucol?</label>
            <div className='check'>
              <div >
                <input type="radio" id="si" name="afiliado" value="si" />
                <label htmlFor="si">Si</label>
              </div>

              <div>
                <input type="radio" id="no" name="afiliado" value="no" />
                <label htmlFor="no">No</label>
              </div>
            </div>
           </div>
            
            <input type="submit" value="Separar Cupo" />
      
        </form>
        </FormStyled>
    )
}

export default Form
