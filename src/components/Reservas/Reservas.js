import React from 'react'
import { useForm } from "react-hook-form"
import {ReservasStyle} from './ReservasStyle'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import reservaIcon from '../../assets/reservas/reservaIcon.png'

const Reservas = () => {

    const schema = yup.object({
        name: yup.string().required("Digite seu nome!"),
        lastname:yup.string().required("Digite o sobrenome corretamente!"),
        contacto:yup.string().min(9,"O contacto deve ter pelo menos 9 digitos").required("O contacto é obrigatória"),
        email: yup.string().email().required("Digite o e-mail corretamente!")
    })

    const { 
        register, 
        handleSubmit, 
        watch, 
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema)}
    )
    const onSubmit = (userData) => {
        alert(`Agradcemos pelo contato ${userData.name} ${userData.lastname}`)
    }

    return (
        <ReservasStyle>            
            
            <img src={reservaIcon} />

            <form onSubmit={handleSubmit(onSubmit)} >
                <h1>Reservas</h1>
                <label htmlFor="name">Nome: 
                    <input id="name" {...register("name", {required: true})}/>
                    <span>{errors.name?.message}</span>
                </label>

                <label htmlFor="lastname" >Sobrenome:
                    <input id="lastname" {...register("lastname")} />
                    <span>{errors.lastname?.message}</span>
                </label>

                <label htmlFor="contacto" >Contacto:
                    <input id="contacto" {...register("contacto")} />
                    <span>{errors.contacto?.message}</span>
                </label>

                <label htmlFor="email" >E-mail:
                    <input id="email" {...register("email")}/>
                    <span>{errors.email?.message}</span>
                </label>

                <button>Enviar</button>
            </form>
        </ReservasStyle>
    )
}

export default Reservas