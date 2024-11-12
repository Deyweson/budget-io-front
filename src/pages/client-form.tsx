import { FieldErrors, UseFormRegister } from "react-hook-form"
import { Request } from "./form-budget"

interface Props {
  register: UseFormRegister<Request>
  errors: FieldErrors<Request>
}
export function ClientForm({ register, errors }: Props): JSX.Element {
  return (
    <div className="info-form">
      <div>
        <label>Nome do cliente:</label>
        <input {...register('client.name')} type="text" style={{ borderColor: errors.client?.name ? 'red' : '' }} />
      </div>
      <div>
        <label>CNPJ/CPF:</label>
        <input {...register('client.id')} type="text" style={{ borderColor: errors.client?.id ? 'red' : '' }} />
      </div>
      <div>
        <label>E-mail:</label>
        <input {...register('client.email')} type="text" style={{ borderColor: errors.client?.email ? 'red' : '' }} />
      </div>
      <div>
        <label>Telefone:</label>
        <input {...register('client.fone')} type="text" style={{ borderColor: errors.client?.fone ? 'red' : '' }} />
      </div>
      <div>
        <label>Endereço:</label>
        <input {...register('client.address')} type="text" style={{ borderColor: errors.client?.address ? 'red' : '' }} />
      </div>
    </div>
  )
}
